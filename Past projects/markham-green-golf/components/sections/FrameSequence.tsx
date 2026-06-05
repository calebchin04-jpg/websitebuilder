'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

// ─── CONFIGURATION — edit these to match your frames ─────────────────────────
const TOTAL_FRAMES  = 210
const SCROLL_HEIGHT = '400vh'    // total scroll distance while pinned; increase for slower feel
const INITIAL_BATCH = 12         // frames loaded in parallel before interaction is unlocked
const LOAD_BATCH    = 6          // frames loaded per batch after the initial burst

// Produce the public URL for frame i (0-indexed internally, 1-indexed on disk)
function frameSrc(i: number): string {
  return `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
}
// ─────────────────────────────────────────────────────────────────────────────

interface FrameSequenceProps {
  /** Optional content rendered above the canvas while the sequence plays */
  overlay?: React.ReactNode
}

export function FrameSequence({ overlay }: FrameSequenceProps) {
  const outerRef     = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  // Decoded image objects — kept in a ref so they survive re-renders without GC
  const images       = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null))
  const loaded       = useRef<boolean[]>(Array(TOTAL_FRAMES).fill(false))
  const currentIdx   = useRef(0)
  const pendingRaf   = useRef<number | null>(null)
  const [isReady, setIsReady]   = useState(false)  // true once frame 0 is painted
  const [prefersReduced]        = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  // ── draw ──────────────────────────────────────────────────────────────────
  // Renders the nearest available frame at or before index i.
  // Works in physical pixels for HiDPI sharpness — no ctx.scale() needed.
  const draw = useCallback((i: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Find nearest loaded frame (scan backwards from i)
    let idx = Math.min(i, TOTAL_FRAMES - 1)
    while (idx >= 0 && !loaded.current[idx]) idx--
    if (idx < 0) return

    const img = images.current[idx]
    if (!img) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr  = window.devicePixelRatio || 1
    const cssW = canvas.offsetWidth
    const cssH = canvas.offsetHeight
    const pw   = Math.round(cssW * dpr)
    const ph   = Math.round(cssH * dpr)

    // Setting .width/.height resets the context — do it only when size changes
    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width  = pw
      canvas.height = ph
    }

    // Cover-fit: crop source to fill canvas without distorting aspect ratio
    const ia = img.naturalWidth / img.naturalHeight
    const ca = pw / ph
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight
    if (ia > ca) {
      // Image wider than canvas — crop left/right
      sw = sh * ca
      sx = (img.naturalWidth - sw) / 2
    } else {
      // Image taller than canvas — crop top/bottom
      sh = sw / ca
      sy = (img.naturalHeight - sh) / 2
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, pw, ph)
  }, [])

  // ── scroll → frame index ──────────────────────────────────────────────────
  // Maps how far into the sticky section we've scrolled to a frame number.
  // scrollRange = total scrollable distance = section height − one viewport
  // progress    = 0 at top of section, 1 at bottom
  const frameFromScroll = useCallback((): number => {
    const outer = outerRef.current
    if (!outer) return 0
    const scrollRange = outer.offsetHeight - window.innerHeight
    if (scrollRange <= 0) return 0
    const progress = Math.max(0, Math.min(1, -outer.getBoundingClientRect().top / scrollRange))
    return Math.round(progress * (TOTAL_FRAMES - 1))
  }, [])

  // ── scroll handler ────────────────────────────────────────────────────────
  // One RAF per scroll event group — prevents multiple canvas writes per frame.
  const onScroll = useCallback(() => {
    if (pendingRaf.current !== null) return
    pendingRaf.current = requestAnimationFrame(() => {
      pendingRaf.current = null
      const next = frameFromScroll()
      if (next !== currentIdx.current) {
        currentIdx.current = next
        draw(next)
      }
    })
  }, [frameFromScroll, draw])

  // ── preloader ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (prefersReduced) return  // skip for reduced-motion users

    let cancelled = false

    const loadOne = (i: number): Promise<void> =>
      new Promise(resolve => {
        if (loaded.current[i]) { resolve(); return }
        const img = new Image()
        img.onload = () => {
          if (!cancelled) {
            images.current[i] = img
            loaded.current[i] = true
            if (i === 0) {
              draw(0)
              setIsReady(true)
            }
          }
          resolve()
        }
        img.onerror = () => resolve()  // don't stall the queue on a bad frame
        img.src = frameSrc(i)
      })

    ;(async () => {
      // Burst-load the first N frames in parallel — user sees content faster
      await Promise.all(Array.from({ length: INITIAL_BATCH }, (_, i) => loadOne(i)))

      // Stream the rest in batches of LOAD_BATCH (matches browser connection limit)
      for (let i = INITIAL_BATCH; i < TOTAL_FRAMES && !cancelled; i += LOAD_BATCH) {
        const batchEnd = Math.min(i + LOAD_BATCH, TOTAL_FRAMES)
        await Promise.all(
          Array.from({ length: batchEnd - i }, (_, j) => loadOne(i + j))
        )
      }
    })()

    return () => { cancelled = true }
  }, [draw, prefersReduced])

  // ── reduced motion: show static first frame ───────────────────────────────
  useEffect(() => {
    if (!prefersReduced) return
    const img = new Image()
    img.onload = () => {
      images.current[0] = img
      loaded.current[0] = true
      draw(0)
      setIsReady(true)
    }
    img.src = frameSrc(0)
  }, [prefersReduced, draw])

  // ── attach scroll listener only while section is in viewport ─────────────
  useEffect(() => {
    if (prefersReduced) return
    const outer = outerRef.current
    if (!outer) return

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()  // sync immediately when section enters view
      } else {
        window.removeEventListener('scroll', onScroll)
      }
    }, { threshold: 0 })

    io.observe(outer)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (pendingRaf.current !== null) cancelAnimationFrame(pendingRaf.current)
    }
  }, [onScroll, prefersReduced])

  // ── redraw on resize ──────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => draw(currentIdx.current)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [draw])

  return (
    // Outer div provides the scrollable height that drives the pinned effect
    <div ref={outerRef} style={{ height: SCROLL_HEIGHT }}>
      {/* Sticky inner div pins to the top of the viewport while user scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-surface-dark">

        {/* Loading state: subtle pulse until frame 0 paints */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-dark">
            <div className="w-8 h-8 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="block w-full h-full"
          style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.4s ease' }}
          aria-hidden
        />

        {/* Optional text overlay — passed as children to keep component flexible */}
        {overlay && (
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16 pointer-events-none">
            {overlay}
          </div>
        )}
      </div>
    </div>
  )
}
