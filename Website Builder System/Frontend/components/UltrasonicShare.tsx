'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UltrasonicSender,
  UltrasonicReceiver,
  INSTAGRAM_URL,
  type ReceiverStatus,
} from '@/lib/ultrasonic'

type Mode         = 'idle' | 'send' | 'receive'
type ReceivePhase = 'listening' | 'syncing' | 'decoded' | 'error'

const PHASE_TEXT: Record<ReceivePhase, string> = {
  listening: 'Listening for signal…',
  syncing:   'Signal detected — decoding…',
  decoded:   'Got it — opening Instagram…',
  error:     'No signal found.',
}

export default function UltrasonicShare() {
  const [mode,          setMode]          = useState<Mode>('idle')
  const [broadcasting,  setBroadcasting]  = useState(false)
  const [receivePhase,  setReceivePhase]  = useState<ReceivePhase>('listening')
  const [debugError,    setDebugError]    = useState<string | null>(null)

  const senderRef    = useRef<UltrasonicSender   | null>(null)
  const receiverRef  = useRef<UltrasonicReceiver  | null>(null)
  const canvasRef    = useRef<HTMLCanvasElement   | null>(null)
  const animFrameRef = useRef<number>(0)

  // ── Waveform animation ────────────────────────────────────────────────────
  const startWaveform = useCallback((analyser: AnalyserNode) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx2d = canvas.getContext('2d')
    if (!ctx2d) return

    const bufLen  = analyser.fftSize  // time-domain buffer = fftSize
    const dataArr = new Float32Array(bufLen)

    const draw = () => {
      animFrameRef.current = requestAnimationFrame(draw)
      analyser.getFloatTimeDomainData(dataArr)

      const { width: W, height: H } = canvas
      ctx2d.clearRect(0, 0, W, H)

      ctx2d.beginPath()
      ctx2d.strokeStyle = '#4FA17C'
      ctx2d.lineWidth   = 1.5
      ctx2d.shadowColor = '#4FA17C'
      ctx2d.shadowBlur  = 6

      const step = W / bufLen
      for (let i = 0; i < bufLen; i++) {
        const x = i * step
        const y = (1 - (dataArr[i] * 0.5 + 0.5)) * H
        i === 0 ? ctx2d.moveTo(x, y) : ctx2d.lineTo(x, y)
      }
      ctx2d.stroke()
    }
    draw()
  }, [])

  const stopWaveform = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current)
    const canvas = canvasRef.current
    if (canvas) {
      const ctx2d = canvas.getContext('2d')
      ctx2d?.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleBroadcast = useCallback(async () => {
    try {
      setDebugError(null)
      setMode('send')
      setBroadcasting(true)
      senderRef.current = new UltrasonicSender()
      await senderRef.current.send()
      setBroadcasting(false)
    } catch (e) {
      setDebugError(`Broadcast error: ${e instanceof Error ? e.message : String(e)}`)
      setBroadcasting(false)
    }
  }, [])

  const handleListen = useCallback(async () => {
    setMode('receive')
    setReceivePhase('listening')

    const onStatus = (status: ReceiverStatus) => {
      if (status.state === 'READING_BITS') {
        setReceivePhase('syncing')
      }
      if (status.state === 'DECODED') {
        setReceivePhase('decoded')
        stopWaveform()
        setTimeout(() => {
          window.location.href = INSTAGRAM_URL
        }, 1500)
      }
      if (status.state === 'ERROR') {
        setReceivePhase('error')
        stopWaveform()
      }
    }

    try {
      receiverRef.current = new UltrasonicReceiver(onStatus)
      await receiverRef.current.start()

      const analyser = receiverRef.current.getAnalyser()
      if (analyser) startWaveform(analyser)
    } catch (e) {
      setDebugError(`Listen error: ${e instanceof Error ? e.message : String(e)}`)
      setReceivePhase('error')
    }
  }, [startWaveform, stopWaveform])

  const handleReset = useCallback(() => {
    senderRef.current?.stop()
    receiverRef.current?.stop()
    stopWaveform()
    setMode('idle')
    setBroadcasting(false)
  }, [stopWaveform])

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      senderRef.current?.stop()
      receiverRef.current?.stop()
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: '#0E0B08' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(31,78,61,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Card */}
        <div
          className="rounded-2xl border"
          style={{
            background:    'rgba(20,17,13,0.92)',
            borderColor:   'rgba(255,255,255,0.08)',
            boxShadow:     '0 32px 80px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>

            {/* ── Idle ───────────────────────────────────────────────────── */}
            {mode === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center p-8 gap-6"
              >
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    Ultrasonic share
                  </p>
                  <h1
                    className="text-3xl font-bold"
                    style={{ color: '#F5F0E8', letterSpacing: '-0.02em' }}
                  >
                    @too_good2008
                  </h1>
                  <p
                    className="text-sm mt-2"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    No link. No QR. Just sound.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => { setDebugError('JS works — starting broadcast'); handleBroadcast(); }}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-95"
                    style={{
                      background:  '#1F4E3D',
                      color:       '#B8F0D8',
                      boxShadow:   '0 0 24px rgba(31,78,61,0.4)',
                    }}
                  >
                    Broadcast my Instagram
                  </button>
                  <button
                    onClick={handleListen}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-95"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color:      'rgba(255,255,255,0.7)',
                      border:     '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    Receive
                  </button>
                </div>

                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  One device broadcasts an inaudible tone.
                  <br />
                  The other listens and opens Instagram automatically.
                </p>
              </motion.div>
            )}

            {/* ── Send ───────────────────────────────────────────────────── */}
            {mode === 'send' && (
              <motion.div
                key="send"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center p-8 gap-8"
              >
                {/* Radiating rings */}
                <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
                  {broadcasting && [0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width:       80,
                        height:      80,
                        border:      '1.5px solid #4FA17C',
                        pointerEvents: 'none',
                      }}
                      animate={{ scale: [1, 2.8], opacity: [0.7, 0] }}
                      transition={{
                        duration: 2,
                        repeat:   Infinity,
                        delay:    i * 0.65,
                        ease:     'easeOut',
                      }}
                    />
                  ))}

                  {/* Center dot */}
                  <motion.div
                    className="rounded-full"
                    style={{ width: 48, height: 48, background: '#1F4E3D' }}
                    animate={broadcasting ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3 18v-6a9 9 0 0118 0v6M3 18a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1H4a1 1 0 00-1 1v3zm16 0a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1a1 1 0 011 1v3z"
                          stroke="#B8F0D8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={broadcasting ? 'sending' : 'done'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p
                      className="text-lg font-semibold"
                      style={{ color: '#F5F0E8' }}
                    >
                      {broadcasting ? 'Broadcasting…' : 'Done'}
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {broadcasting
                        ? 'Hold near the other device'
                        : 'Signal sent successfully'}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={handleReset}
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  {broadcasting ? 'Cancel' : '← Back'}
                </button>
              </motion.div>
            )}

            {/* ── Receive ────────────────────────────────────────────────── */}
            {mode === 'receive' && (
              <motion.div
                key="receive"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center p-8 gap-6"
              >
                {/* Oscilloscope canvas */}
                <div
                  className="w-full rounded-xl overflow-hidden"
                  style={{
                    background: 'rgba(10,20,15,0.8)',
                    border:     '1px solid rgba(79,161,124,0.2)',
                    height:     72,
                  }}
                >
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={72}
                    className="w-full h-full"
                  />
                </div>

                {/* Status text */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={receivePhase}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <p
                      className="font-semibold text-base"
                      style={{
                        color:
                          receivePhase === 'decoded' ? '#4FA17C'
                          : receivePhase === 'error'  ? '#C4614A'
                          : '#F5F0E8',
                      }}
                    >
                      {PHASE_TEXT[receivePhase]}
                    </p>
                    {receivePhase === 'listening' && (
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Make sure your volume is up on the sender
                      </p>
                    )}
                    {receivePhase === 'decoded' && (
                      <p className="text-xs" style={{ color: 'rgba(79,161,124,0.6)' }}>
                        @too_good2008
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots (listening / syncing) */}
                {(receivePhase === 'listening' || receivePhase === 'syncing') && (
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="rounded-full"
                        style={{
                          width:      6,
                          height:     6,
                          background: receivePhase === 'syncing' ? '#4FA17C' : 'rgba(255,255,255,0.25)',
                        }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat:   Infinity,
                          delay:    i * 0.4,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Try again / back */}
                {(receivePhase === 'error') && (
                  <button
                    onClick={handleReset}
                    className="text-sm px-5 py-2 rounded-lg transition-all active:scale-95"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      color:      'rgba(255,255,255,0.6)',
                      border:     '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    Try again
                  </button>
                )}

                {receivePhase !== 'error' && receivePhase !== 'decoded' && (
                  <button
                    onClick={handleReset}
                    className="text-xs transition-opacity hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    Cancel
                  </button>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {debugError && (
        <div
          className="fixed bottom-4 left-4 right-4 rounded-lg p-3 text-xs font-mono z-50"
          style={{ background: '#3a0a0a', color: '#ff8080', border: '1px solid #660000' }}
        >
          {debugError}
        </div>
      )}
    </main>
  )
}
