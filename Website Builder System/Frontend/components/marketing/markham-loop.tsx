"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { FadeIn } from "./fade-in"

const ruledLines =
  "repeating-linear-gradient(0deg, transparent 0, transparent 41px, rgba(184,120,46,0.18) 41px, rgba(184,120,46,0.18) 42px)"

/* ─────────────────────────────────────────────────────────────
   Node detail data for pop-ups
───────────────────────────────────────────────────────────────  */
const nodeDetails: Record<string, {
  label: string
  amount: string
  accent: string
  accentDim: string
  body: string
  items?: string[]
}> = {
  "30": {
    label: "Gift Card Program",
    amount: "30% of profits",
    accent: "#1F4E3D",
    accentDim: "rgba(31,78,61,0.55)",
    body: "30% of Crossroads's profits are used to purchase gift cards and certificates directly from the partner businesses featured on the Hub — then redistributed to voters and visitors as prizes. The money you invest in visibility comes back as real customers walking through your door.",
  },
  "10": {
    label: "Youth Entrepreneur Fund",
    amount: "10% of profits",
    accent: "#7A4A10",
    accentDim: "rgba(122,74,16,0.7)",
    body: "10% of profits fund the Youth Entrepreneurship Fund — 0% interest microgrants, near-zero loans, and pitch events for young entrepreneurs across Markham and the GTA. We're not just marketing local businesses. We're building the next generation of them.",
  },
  "60": {
    label: "Platform & Operations",
    amount: "60% of revenue",
    accent: "rgba(42,31,20,0.78)",
    accentDim: "rgba(42,31,20,0.5)",
    body: "60% of revenue keeps Crossroads running and growing — powering the campaigns, infrastructure, and tools that put your business in front of 40,000+ GTA residents every cycle. As we scale across the region, cost per business drops and reach expands.",
    items: [
      "10,000 physical flyers + QR codes across the GTA",
      "1,000,000 targeted emails per campaign",
      "Interactive Circular Constellation hub",
      "NFC cards, leaderboard & lead capture",
    ],
  },
}

/* ─────────────────────────────────────────────────────────────
   Desktop: scroll-driven sticky "Follow the Dollar" animation
───────────────────────────────────────────────────────────────  */
type Stage = 0 | 1 | 2

function DesktopFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 })
  const stageRef = useRef<Stage>(0)
  const [stage, setStage] = useState<Stage>(0)
  const [isPulsing, setIsPulsing] = useState(false)
  const pulseRef = useRef(false)

  // ESC key closes the expanded node popup
  useEffect(() => {
    if (!expandedId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [expandedId])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const sp = { stiffness: 110, damping: 18, restDelta: 0.5 }

  // ── Rings: shared scroll-driven opacity + width ───────────────
  const ringOpacity = useTransform(scrollYProgress, [0, 0.88], [0.08, 0.65], { clamp: true })
  const ringWidth   = useTransform(scrollYProgress, [0, 0.88], [1, 4],        { clamp: true })

  // ── $100: scale spring (opacity via animate/state) ────────────
  const p100SclRaw = useTransform(scrollYProgress, [0.06, 0.16], [1, 0], { clamp: true })
  const p100Scale  = useSpring(p100SclRaw, sp)

  // ── Flash line 1 (centered) ──────────────
  const fl1Op     = useTransform(scrollYProgress, [0, 0.04, 0.14, 0.22], [0, 0.8, 0.8, 0], { clamp: true })
  const fl1SclRaw = useTransform(scrollYProgress, [0, 0.04], [0, 1], { clamp: true })
  const fl1Scale  = useSpring(fl1SclRaw, { stiffness: 1200, damping: 45 })

  // ── $40: position springs ─────────
  const p40XRaw   = useTransform(scrollYProgress, [0.16, 0.30], [0, -210], { clamp: true })
  const p40X      = useSpring(p40XRaw, sp)
  const p40SclRaw = useTransform(scrollYProgress, [0.16, 0.28], [0.82, 1], { clamp: true })
  const p40Scale  = useSpring(p40SclRaw, sp)

  // ── $60: position springs ─────────
  const p60XRaw   = useTransform(scrollYProgress, [0.16, 0.30], [0, 210], { clamp: true })
  const p60X      = useSpring(p60XRaw, sp)
  const p60SclRaw = useTransform(scrollYProgress, [0.16, 0.28], [0.82, 1], { clamp: true })
  const p60Scale  = useSpring(p60SclRaw, sp)

  // ── Flash line 2 (at $40's x = -210) ─────────────────────────
  const fl2Op     = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.76], [0, 0.8, 0.8, 0], { clamp: true })
  const fl2SclRaw = useTransform(scrollYProgress, [0.50, 0.54], [0, 1], { clamp: true })
  const fl2Scale  = useSpring(fl2SclRaw, { stiffness: 1200, damping: 45 })

  // ── $30: springs left + down from $40's position ─────────────
  const p30XRaw   = useTransform(scrollYProgress, [0.58, 0.72], [-210, -310], { clamp: true })
  const p30X      = useSpring(p30XRaw, sp)
  const p30YRaw   = useTransform(scrollYProgress, [0.58, 0.72], [0, 72], { clamp: true })
  const p30Y      = useSpring(p30YRaw, sp)
  const p30SclRaw = useTransform(scrollYProgress, [0.58, 0.70], [0.82, 1], { clamp: true })
  const p30Scale  = useSpring(p30SclRaw, sp)

  // ── $10: springs right + down from $40's position ────────────
  const p10XRaw   = useTransform(scrollYProgress, [0.58, 0.72], [-210, -120], { clamp: true })
  const p10X      = useSpring(p10XRaw, sp)
  const p10YRaw   = useTransform(scrollYProgress, [0.58, 0.72], [0, 72], { clamp: true })
  const p10Y      = useSpring(p10YRaw, sp)
  const p10SclRaw = useTransform(scrollYProgress, [0.58, 0.70], [0.82, 1], { clamp: true })
  const p10Scale  = useSpring(p10SclRaw, sp)

  // ── Scroll hint fades on first scroll ─────────────────────────
  const hintOp = useTransform(scrollYProgress, [0, 0.05], [1, 0], { clamp: true })

  // ── Stage machine + pulse trigger ────────────────────────────
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = v >= 0.88
    if (p !== pulseRef.current) { pulseRef.current = p; setIsPulsing(p) }

    const newStage: Stage = v >= 0.58 ? 2 : v >= 0.14 ? 1 : 0
    if (newStage !== stageRef.current) {
      stageRef.current = newStage
      setStage(newStage)
    }
  })

  const handleNodeClick = (id: string, e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setClickOrigin({
      x: rect.left + rect.width / 2 - window.innerWidth / 2,
      y: rect.top + rect.height / 2 - window.innerHeight / 2,
    })
    setExpandedId(id)
  }

  const nodeTrans = { type: "spring", stiffness: 110, damping: 18 } as const

  return (
    <div ref={containerRef} className="relative hidden lg:block h-[220vh] overflow-clip">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F4ECD8] border-t border-[rgba(42,31,20,0.1)] flex flex-col justify-center">

        {/* Radial rings background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {/* Soft green bloom at center */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900, height: 700, borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(31,78,61,0.055) 0%, transparent 68%)",
          }} />
          {/* Concentric rings — scroll-driven, pulse at end */}
          {[300, 480, 660, 840, 1020].map((d, i) => (
            <motion.div
              key={d}
              animate={isPulsing ? {
                opacity: [0.65, 0.12, 0.65],
                borderWidth: ["4px", "0.5px", "4px"],
              } : {}}
              transition={isPulsing ? {
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.14,
              } : {}}
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: d, height: d,
                marginLeft: -d / 2, marginTop: -d / 2,
                borderRadius: "50%",
                borderStyle: "solid",
                borderColor: "rgba(31,78,61,1)",
                ...(isPulsing ? {} : { borderWidth: ringWidth, opacity: ringOpacity }),
              }}
            />
          ))}
        </div>

        <div className="w-full px-3 md:px-5" style={{ paddingLeft: 75, paddingRight: 75 }}>

          {/* Section header — always visible */}
          <div className="text-center mb-8">
            <div aria-hidden style={{ height: 7 }} />
            <h2
              className="font-bold leading-[1.18] tracking-[-0.025em] mb-3 text-[#2A1F14]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Your money doesn&apos;t leave Markham.
            </h2>
            <p className="text-base text-[rgba(42,31,20,0.65)] leading-relaxed text-center mt-4">
              Crossroads reinvests 40% of every dollar directly back into the community.
            </p>
          </div>

          {/* ── Visualization ── */}
          <div className="relative flex items-center justify-center" style={{ height: 320 }}>

            {/* $100 — visible from the start; scale shrinks when it exits */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: stage === 0 ? 1 : 0 }}
              style={{ scale: p100Scale, width: 'max-content', padding: '32px 48px' }}
              transition={nodeTrans}
              className="absolute flex items-center gap-5 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-2xl"
            >
              <span className="text-6xl font-bold text-[#2A1F14] whitespace-nowrap">$100</span>
              <div className="w-px h-12 shrink-0 bg-[rgba(42,31,20,0.15)]" />
              <div className="shrink-0">
                <p className="text-sm whitespace-nowrap text-[rgba(42,31,20,0.62)]">enters Crossroads</p>
                <p className="text-xs whitespace-nowrap text-[rgba(42,31,20,0.45)]">monthly subscription</p>
              </div>
            </motion.div>

            {/* Flash line 1 */}
            <motion.div
              style={{ opacity: fl1Op, scaleX: fl1Scale }}
              className="absolute w-[460px] h-px overflow-hidden pointer-events-none"
            >
              <div className="absolute inset-0 right-1/2 bg-gradient-to-l from-[#1F4E3D]/70 to-transparent" />
              <div className="absolute inset-0 left-1/2 bg-gradient-to-r from-[rgba(42,31,20,0.4)] to-transparent" />
            </motion.div>

            {/* $40 — opacity via state; position via spring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 1 ? 1 : 0 }}
              style={{ x: p40X, scale: p40Scale }}
              transition={nodeTrans}
              className="absolute bg-[rgba(31,78,61,0.07)] border border-[rgba(31,78,61,0.35)] rounded-2xl px-9 py-7 text-center min-w-[190px]"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1F4E3D]/85 mb-2 whitespace-nowrap">Local</p>
              <span className="text-5xl font-bold text-[#1F4E3D] whitespace-nowrap">$40</span>
              <p className="text-xs text-[#1F4E3D]/75 mt-2 whitespace-nowrap">reinvested locally</p>
            </motion.div>

            {/* $60 — stays visible from stage 1 onward; clickable only in stage 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 1 ? 1 : 0 }}
              style={{ x: p60X, scale: p60Scale }}
              transition={nodeTrans}
              onClick={(e) => { if (stage === 2) handleNodeClick("60", e) }}
              className={`absolute bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-2xl px-9 py-7 text-center min-w-[190px] transition-colors ${stage === 2 ? "cursor-pointer hover:border-[rgba(42,31,20,0.25)]" : ""}`}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[rgba(42,31,20,0.55)] mb-2 whitespace-nowrap">Platform</p>
              <span className="text-5xl font-bold text-[rgba(42,31,20,0.78)] whitespace-nowrap">$60</span>
              <p className="text-xs text-[rgba(42,31,20,0.5)] mt-2 whitespace-nowrap">keeps it running</p>
            </motion.div>

            {/* Flash line 2 — at $40's final x = -210 */}
            <motion.div
              style={{ opacity: fl2Op, scaleX: fl2Scale, x: -210 }}
              className="absolute w-[280px] h-px overflow-hidden pointer-events-none"
            >
              <div className="absolute inset-0 right-1/2 bg-gradient-to-l from-[#1F4E3D]/65 to-transparent" />
              <div className="absolute inset-0 left-1/2 bg-gradient-to-r from-[#B8782E]/65 to-transparent" />
            </motion.div>

            {/* $30 — appears at $40's position, then moves left + down */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 2 ? 1 : 0 }}
              style={{ x: p30X, y: p30Y, scale: p30Scale }}
              transition={nodeTrans}
              onClick={(e) => handleNodeClick("30", e)}
              className="absolute bg-[rgba(31,78,61,0.07)] border border-[rgba(31,78,61,0.3)] rounded-2xl px-8 py-6 text-center min-w-[168px] cursor-pointer hover:border-[rgba(31,78,61,0.55)] transition-colors"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1F4E3D]/85 mb-2 whitespace-nowrap">Gift cards</p>
              <span className="text-5xl font-bold text-[#1F4E3D] whitespace-nowrap">$30</span>
              <p className="text-xs text-[#1F4E3D]/75 mt-2 whitespace-nowrap">to local businesses</p>
            </motion.div>

            {/* $10 — appears at $40's position, then moves right + down */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 2 ? 1 : 0 }}
              style={{ x: p10X, y: p10Y, scale: p10Scale }}
              transition={nodeTrans}
              onClick={(e) => handleNodeClick("10", e)}
              className="absolute bg-[rgba(122,74,16,0.07)] border border-[rgba(122,74,16,0.3)] rounded-2xl px-8 py-6 text-center min-w-[168px] cursor-pointer hover:border-[rgba(122,74,16,0.55)] transition-colors"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#7A4A10] mb-2 whitespace-nowrap">Grants</p>
              <span className="text-5xl font-bold text-[#7A4A10] whitespace-nowrap">$10</span>
              <p className="text-xs text-[#7A4A10] mt-2 whitespace-nowrap opacity-80">entrepreneurs</p>
            </motion.div>

          </div>

          {/* Click-to-explore prompt */}
          <div className="mt-6 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {stage === 2 && (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] tracking-[0.3em] uppercase text-center text-[rgba(42,31,20,0.5)]"
                >
                  Click any box to learn more
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Transparency note */}
          <AnimatePresence>
            {stage === 2 && (
              <motion.p
                key="footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs text-center text-[rgba(42,31,20,0.55)] mt-2"
              >
                All reinvestment totals published publicly every month — receipts included.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOp }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-widest uppercase text-[rgba(42,31,20,0.5)]">
            scroll to follow the dollar
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-5 bg-gradient-to-b from-[rgba(42,31,20,0.35)] to-transparent"
          />
        </motion.div>
      </div>

      {/* ── Pop-up overlay — fixed, escapes overflow:hidden ── */}
      <AnimatePresence>
        {expandedId && (() => {
          const node = nodeDetails[expandedId]
          return (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 bg-[rgba(42,31,20,0.5)] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpandedId(null)}
              />

              {/* Card — zooms from clicked box, styled as sticky note */}
              <motion.div
                key="card"
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  className="pointer-events-auto relative overflow-y-auto"
                  style={{
                    width: "min(580px, calc(100vw - 2rem))",
                    maxHeight: "min(580px, calc(100vh - 3rem))",
                    background: "linear-gradient(180deg, #FFF6CF 0%, #F7E69E 100%)",
                    backgroundImage: ruledLines,
                    backgroundSize: "100% 42px",
                    backgroundPosition: "0 56px",
                    backgroundRepeat: "repeat-y",
                    borderRadius: 0,
                    fontFamily: '"Reenie Beanie", "Satoshi", cursive',
                    padding: "56px 52px 52px 60px",
                    boxShadow: [
                      "0 1px 0 rgba(184,120,46,0.25) inset",
                      "0 28px 48px -18px rgba(42,31,20,0.36)",
                      "0 70px 100px -50px rgba(42,31,20,0.32)",
                      "0 2px 8px rgba(42,31,20,0.14)",
                    ].join(", "),
                  }}
                  initial={{ opacity: 0, scale: 0.2, x: clickOrigin.x, y: clickOrigin.y, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: -0.8 }}
                  exit={{ opacity: 0, scale: 0.15, x: clickOrigin.x, y: clickOrigin.y, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 26 }}
                >
                  {/* Red margin line */}
                  <div aria-hidden className="pointer-events-none absolute top-0 bottom-0"
                    style={{ left: 44, width: 1.5, background: "rgba(192,89,79,0.32)" }} />

                  {/* Tape strip */}
                  <div aria-hidden className="pointer-events-none absolute -top-3 left-1/2"
                    style={{
                      width: 130, height: 24, marginLeft: -65,
                      background: "linear-gradient(180deg, rgba(248,239,200,0.88) 0%, rgba(228,213,160,0.88) 100%)",
                      boxShadow: "0 3px 8px rgba(42,31,20,0.22)",
                      transform: "rotate(-1.8deg)",
                      opacity: 0.9,
                    }} />

                  {/* Curled corner */}
                  <div aria-hidden className="pointer-events-none absolute bottom-0 right-0"
                    style={{
                      width: 56, height: 56,
                      background: "linear-gradient(135deg, transparent 50%, rgba(42,31,20,0.12) 50%, rgba(42,31,20,0.02) 100%)",
                    }} />

                  {/* Close */}
                  <button onClick={() => setExpandedId(null)} aria-label="Close"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-[rgba(42,31,20,0.55)] transition-colors hover:bg-[rgba(42,31,20,0.08)] hover:text-[rgba(42,31,20,0.85)]"
                    style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}>
                    <X size={18} />
                  </button>

                  {/* Content */}
                  <div className="relative space-y-4 pr-6">
                    <p className="text-[17px] tracking-[0.18em] uppercase" style={{ color: node.accentDim }}>
                      {node.label}
                    </p>
                    <h3 className="text-[40px] leading-[1.05]" style={{ color: node.accent }}>
                      {node.amount}
                    </h3>
                    <p className="text-[24px] leading-[1.45] text-[rgba(42,31,20,0.82)]" style={{ paddingTop: 28 }}>
                      {node.body}
                    </p>
                    {node.items && (
                      <ul className="space-y-3 pt-5 border-t border-[rgba(184,120,46,0.25)]">
                        {node.items.map((item, i) => (
                          <li key={i} className="grid grid-cols-[26px_1fr] gap-3 items-start">
                            <span className="mt-1 flex h-5 w-5 items-center justify-center text-[13px] shrink-0"
                              style={{ border: `1.5px solid ${node.accent}55`, color: node.accent, borderRadius: 0 }}>
                              ✓
                            </span>
                            <p className="text-[22px] leading-[1.3] text-[rgba(42,31,20,0.85)]">{item}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Mobile: stacked fade-in, no scroll pinning
───────────────────────────────────────────────────────────────  */
function MobileFlow() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // ESC key closes the expanded node popup
  useEffect(() => {
    if (!expandedId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [expandedId])

  return (
    <section className="bg-[#F4ECD8] py-[4px] px-3 border-t border-[rgba(42,31,20,0.1)] lg:hidden">
      <div className="max-w-lg mx-auto">
        <FadeIn>
          <div className="mb-10">
            <div aria-hidden style={{ height: 27 }} />
            <h2
              className="font-bold leading-[1.18] tracking-[-0.025em] mb-3 text-[#2A1F14]"
              style={{ fontSize: "clamp(1.8rem, 6vw, 2.4rem)" }}
            >
              Your money doesn&apos;t leave Markham.
            </h2>
            <p className="text-sm text-[rgba(42,31,20,0.65)] leading-relaxed">
              Crossroads reinvests 40% of every dollar directly back into the community.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-xl px-5 py-3">
              <span className="text-2xl font-bold text-[#2A1F14]">$100</span>
              <div className="w-px h-6 bg-[rgba(42,31,20,0.15)]" />
              <span className="text-xs text-[rgba(42,31,20,0.62)]">enters Crossroads</span>
            </div>
            <div className="w-px h-5 bg-[rgba(42,31,20,0.18)]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[rgba(31,78,61,0.07)] border border-[rgba(31,78,61,0.3)] rounded-xl px-4 py-4 text-center">
              <p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#1F4E3D]/85 mb-1">Local</p>
              <span className="text-3xl font-bold text-[#1F4E3D]">$40</span>
            </div>
            <button
              onClick={() => setExpandedId("60")}
              className="bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-xl px-5 py-5 text-center hover:border-[rgba(42,31,20,0.25)] transition-colors"
            >
              <p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[rgba(42,31,20,0.55)] mb-1">Platform</p>
              <span className="text-3xl font-bold text-[rgba(42,31,20,0.78)]">$60</span>
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.22}>
          <div className="flex justify-start mb-3 pl-1">
            <div className="w-px h-5 bg-[rgba(31,78,61,0.35)]" />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setExpandedId("30")}
              className="bg-[rgba(31,78,61,0.07)] border border-[rgba(31,78,61,0.25)] rounded-xl px-5 py-5 text-center hover:border-[rgba(31,78,61,0.55)] transition-colors"
            >
              <p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#1F4E3D]/85 mb-1">Gift cards</p>
              <span className="text-3xl font-bold text-[#1F4E3D]">$30</span>
              <p className="text-[10px] text-[#1F4E3D]/70 mt-1">to local businesses</p>
            </button>
            <button
              onClick={() => setExpandedId("10")}
              className="bg-[rgba(122,74,16,0.07)] border border-[rgba(122,74,16,0.25)] rounded-xl px-5 py-5 text-center hover:border-[rgba(122,74,16,0.55)] transition-colors"
            >
              <p className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#7A4A10] mb-1">Grants</p>
              <span className="text-3xl font-bold text-[#7A4A10]">$10</span>
              <p className="text-[10px] text-[#7A4A10] opacity-75 mt-1">entrepreneurs</p>
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xs text-center text-[rgba(42,31,20,0.55)] mt-2">
            All reinvestment totals published publicly every month — receipts included.
          </p>
        </FadeIn>
      </div>

      {/* Mobile pop-up */}
      <AnimatePresence>
        {expandedId && (() => {
          const node = nodeDetails[expandedId]
          return (
            <>
              <motion.div
                key="m-backdrop"
                className="fixed inset-0 z-50 bg-[rgba(42,31,20,0.5)] backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
              />
              <motion.div
                key="m-card"
                className="fixed inset-x-3 bottom-0 z-50 overflow-y-auto"
                style={{
                  maxHeight: "78vh",
                  background: "linear-gradient(180deg, #FFF6CF 0%, #F7E69E 100%)",
                  backgroundImage: ruledLines,
                  backgroundSize: "100% 42px",
                  backgroundPosition: "0 48px",
                  backgroundRepeat: "repeat-y",
                  borderRadius: 0,
                  fontFamily: '"Reenie Beanie", "Satoshi", cursive',
                  padding: "48px 28px 40px 44px",
                  boxShadow: "0 -8px 40px rgba(42,31,20,0.22), 0 2px 8px rgba(42,31,20,0.14)",
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
              >
                {/* Red margin line */}
                <div aria-hidden className="pointer-events-none absolute top-0 bottom-0"
                  style={{ left: 32, width: 1.5, background: "rgba(192,89,79,0.32)" }} />

                {/* Drag handle */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[rgba(42,31,20,0.18)]" />

                {/* Close */}
                <button onClick={() => setExpandedId(null)} aria-label="Close"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-[rgba(42,31,20,0.55)]"
                  style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}>
                  <X size={16} />
                </button>

                <div className="relative space-y-3">
                  <p className="text-[15px] tracking-[0.18em] uppercase" style={{ color: node.accentDim }}>
                    {node.label}
                  </p>
                  <h3 className="text-[34px] leading-[1.05]" style={{ color: node.accent }}>
                    {node.amount}
                  </h3>
                  <p className="text-[21px] leading-[1.45] text-[rgba(42,31,20,0.82)]" style={{ paddingTop: 20 }}>
                    {node.body}
                  </p>
                  {node.items && (
                    <ul className="space-y-2.5 pt-4 border-t border-[rgba(184,120,46,0.25)]">
                      {node.items.map((item, i) => (
                        <li key={i} className="grid grid-cols-[22px_1fr] gap-2 items-start">
                          <span className="mt-0.5 flex h-4 w-4 items-center justify-center text-[11px] shrink-0"
                            style={{ border: `1.5px solid ${node.accent}55`, color: node.accent, borderRadius: 0 }}>
                            ✓
                          </span>
                          <p className="text-[19px] leading-[1.3] text-[rgba(42,31,20,0.85)]">{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </>
          )
        })()}
      </AnimatePresence>
    </section>
  )
}

export function MarkhamLoop() {
  return (
    <>
      <DesktopFlow />
      <MobileFlow />
    </>
  )
}
