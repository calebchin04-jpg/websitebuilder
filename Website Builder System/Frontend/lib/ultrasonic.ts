export const FREQ_ZERO  = 18_000   // Hz — bit 0
export const FREQ_ONE   = 19_000   // Hz — bit 1
export const FREQ_SYNC  = 16_800   // Hz — preamble / postamble marker
export const BIT_MS     = 25       // ms per data bit
export const SYNC_MS    = 250      // ms per sync pulse
export const SYNC_COUNT = 3        // pulses in preamble / postamble
export const PAYLOAD    = 'too_good2008'
export const INSTAGRAM_URL = 'https://www.instagram.com/too_good2008/'

const ATTACK_S      = 0.002
const DECAY_S       = 0.002
const GAIN_LEVEL    = 0.5
const NOISE_FLOOR   = -55   // dBFS — ignore quieter bins
const SYNC_TOLERANCE = 200  // Hz — match window for each frequency
const SYNC_MIN_TICKS = 6    // consecutive ticks required to confirm one sync pulse

export type ReceiverState = 'IDLE' | 'READING_BITS' | 'DECODED' | 'ERROR'

export interface ReceiverStatus {
  state: ReceiverState
  syncPulsesDetected: number
  bitsRead: number
  decodedText: string | null
  error: string | null
}

export type StatusCallback = (status: ReceiverStatus) => void

// ─── Sender ─────────────────────────────────────────────────────────────────

export class UltrasonicSender {
  private ctx: AudioContext | null = null

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)()
    }
    if (this.ctx.state === 'suspended') this.ctx.resume()
    return this.ctx
  }

  static encodeToBits(text: string): number[] {
    const bits: number[] = []
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i)
      for (let b = 7; b >= 0; b--) {
        bits.push((code >> b) & 1)
      }
    }
    return bits
  }

  private scheduleTone(
    ctx: AudioContext,
    freq: number,
    startSec: number,
    durationSec: number
  ): void {
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, startSec)

    gain.gain.setValueAtTime(0, startSec)
    gain.gain.linearRampToValueAtTime(GAIN_LEVEL, startSec + ATTACK_S)
    gain.gain.setValueAtTime(GAIN_LEVEL, startSec + durationSec - DECAY_S)
    gain.gain.linearRampToValueAtTime(0, startSec + durationSec)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(startSec)
    osc.stop(startSec + durationSec)
  }

  send(text: string = PAYLOAD): Promise<void> {
    const ctx     = this.getCtx()
    const syncDur = SYNC_MS / 1000
    const bitDur  = BIT_MS  / 1000
    let   offset  = ctx.currentTime

    // Preamble
    for (let i = 0; i < SYNC_COUNT; i++) {
      this.scheduleTone(ctx, FREQ_SYNC, offset, syncDur)
      offset += syncDur
    }

    // Data
    const bits = UltrasonicSender.encodeToBits(text)
    for (const bit of bits) {
      this.scheduleTone(ctx, bit === 0 ? FREQ_ZERO : FREQ_ONE, offset, bitDur)
      offset += bitDur
    }

    // Postamble
    for (let i = 0; i < SYNC_COUNT; i++) {
      this.scheduleTone(ctx, FREQ_SYNC, offset, syncDur)
      offset += syncDur
    }

    const totalMs = (offset - ctx.currentTime) * 1000 + 150
    return new Promise((resolve) => setTimeout(resolve, totalMs))
  }

  stop(): void {
    this.ctx?.close()
    this.ctx = null
  }
}

// ─── Receiver ────────────────────────────────────────────────────────────────

export class UltrasonicReceiver {
  private ctx:        AudioContext | null = null
  private analyser:   AnalyserNode | null = null
  private stream:     MediaStream  | null = null
  private intervalId: ReturnType<typeof setInterval>  | null = null
  private timeoutId:  ReturnType<typeof setTimeout>   | null = null

  // State machine
  private state:                 ReceiverState = 'IDLE'
  private syncCount              = 0
  private bits:                  number[]      = []
  private consecutiveSyncSamples = 0

  private readonly onStatus: StatusCallback

  constructor(onStatus: StatusCallback) {
    this.onStatus = onStatus
  }

  getAnalyser(): AnalyserNode | null {
    return this.analyser
  }

  private emit(overrides: Partial<ReceiverStatus> = {}): void {
    this.onStatus({
      state:               this.state,
      syncPulsesDetected:  this.syncCount,
      bitsRead:            this.bits.length,
      decodedText:         null,
      error:               null,
      ...overrides,
    })
  }

  async start(): Promise<void> {
    if (typeof window === 'undefined') return

    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        noiseSuppression:  false,
        echoCancellation:  false,
        autoGainControl:   false,
      } as MediaTrackConstraints,
    })

    this.ctx = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)()
    if (this.ctx.state === 'suspended') await this.ctx.resume()

    const source   = this.ctx.createMediaStreamSource(this.stream)
    this.analyser  = this.ctx.createAnalyser()
    this.analyser.fftSize                = 8192
    this.analyser.smoothingTimeConstant  = 0.1

    source.connect(this.analyser)
    // intentionally NOT connected to ctx.destination — silent monitoring

    this.state                  = 'IDLE'
    this.syncCount              = 0
    this.bits                   = []
    this.consecutiveSyncSamples = 0

    this.emit()

    this.intervalId = setInterval(() => this.tick(), BIT_MS)

    this.timeoutId = setTimeout(() => {
      if (this.state !== 'DECODED') {
        this.state = 'ERROR'
        this.emit({ state: 'ERROR', error: 'Timeout — no signal detected' })
        this.stop()
      }
    }, 8000)
  }

  stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
    this.stream?.getTracks().forEach((t) => t.stop())
    this.ctx?.close().catch(() => {})
    this.stream    = null
    this.ctx       = null
    this.analyser  = null
  }

  peakFrequency(data: Float32Array, sampleRate: number): number {
    // bin i → frequency = i * (sampleRate / fftSize) = i * (sampleRate / (binCount*2))
    const freqResolution = sampleRate / (data.length * 2)
    const minBin = Math.floor(16_500 / freqResolution)
    const maxBin = Math.min(Math.ceil(20_000 / freqResolution), data.length - 1)

    let peakBin = minBin
    let peakVal = -Infinity

    for (let i = minBin; i <= maxBin; i++) {
      if (data[i] > peakVal) {
        peakVal = data[i]
        peakBin = i
      }
    }

    return peakVal < NOISE_FLOOR ? 0 : peakBin * freqResolution
  }

  static decodeBits(bits: number[]): string {
    let result = ''
    for (let i = 0; i + 7 < bits.length; i += 8) {
      let code = 0
      for (let b = 0; b < 8; b++) {
        code = (code << 1) | bits[i + b]
      }
      result += String.fromCharCode(code)
    }
    return result
  }

  private tryDecode(): string | null {
    // Slide a 96-bit window up to 8 positions to absorb timing drift
    for (let offset = 0; offset <= 8 && offset + 96 <= this.bits.length; offset++) {
      const text = UltrasonicReceiver.decodeBits(this.bits.slice(offset, offset + 96))
      if (text === PAYLOAD) return text
    }
    return null
  }

  private tick(): void {
    if (!this.analyser || !this.ctx) return

    const data = new Float32Array(this.analyser.frequencyBinCount)
    this.analyser.getFloatFrequencyData(data)

    const peak     = this.peakFrequency(data, this.ctx.sampleRate)
    const nearSync = peak > 0 && Math.abs(peak - FREQ_SYNC) <= SYNC_TOLERANCE
    const nearZero = peak > 0 && Math.abs(peak - FREQ_ZERO) <= SYNC_TOLERANCE
    const nearOne  = peak > 0 && Math.abs(peak - FREQ_ONE)  <= SYNC_TOLERANCE

    switch (this.state) {
      case 'IDLE': {
        if (nearSync) {
          this.consecutiveSyncSamples++
          if (this.consecutiveSyncSamples >= SYNC_MIN_TICKS) {
            this.syncCount++
            this.consecutiveSyncSamples = 0
            if (this.syncCount >= SYNC_COUNT) {
              this.state = 'READING_BITS'
              this.bits  = []
              this.emit()
            }
          }
        } else {
          this.consecutiveSyncSamples = 0
        }
        break
      }

      case 'READING_BITS': {
        if (nearSync) break   // still in preamble tail or postamble — skip
        if (nearZero)      this.bits.push(0)
        else if (nearOne)  this.bits.push(1)
        // else: ambiguous — skip this tick

        if (this.bits.length >= 96) {
          const text = this.tryDecode()
          if (text !== null) {
            this.state = 'DECODED'
            this.emit({ state: 'DECODED', decodedText: text })
            this.stop()
          } else if (this.bits.length > 112) {
            this.state = 'ERROR'
            this.emit({ state: 'ERROR', error: 'Decode mismatch — try again' })
            this.stop()
          }
        }
        break
      }

      default:
        break
    }
  }
}
