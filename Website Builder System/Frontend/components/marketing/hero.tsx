"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function useCountUp(target: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const ms = duration * 1000

    const tick = (now: number) => {
      const p = Math.min((now - start) / ms, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(target * eased))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration, active])

  return val
}

const stats = [
  { raw: 10000, prefix: "", label: "flyers / month" },
  { raw: 40000, prefix: "", label: "households reached" },
  { raw: 30, prefix: "", label: "founding spots" },
  { raw: 5, prefix: "$", label: "starting price / mo" },
]

function StatItem({
  stat,
  idx,
  active,
}: {
  stat: (typeof stats)[0]
  idx: number
  active: boolean
}) {
  const n = useCountUp(stat.raw, 1.5 + idx * 0.15, active)
  const display = stat.prefix + (active ? n.toLocaleString() : "0")

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.09 }}
      className="py-8 px-6 md:px-8"
    >
      <div className="text-[1.9rem] font-bold text-[#1F4E3D] mb-1 tabular-nums">
        {display}
      </div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-[rgba(42,31,20,0.45)]">
        {stat.label}
      </div>
    </motion.div>
  )
}

const HEADLINE = [
  { text: "Built in Markham.", accent: false },
  { text: "Built for Markham.", accent: true },
]

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" })

  return (
    <section className="min-h-screen flex flex-col bg-[#F4ECD8] relative overflow-hidden">
      {/* Dot grid — sepia ink dots on paper */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,31,20,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Bottom forest wash — replaces the dark-theme glow with a soft tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 108%, rgba(31,78,61,0.18) 0%, rgba(31,78,61,0.06) 45%, transparent 68%)",
        }}
      />

      {/* Left edge brass accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 28% 45% at -3% 68%, rgba(184,120,46,0.1) 0%, transparent 55%)",
        }}
      />

      {/* Grain overlay — reads as paper texture on cream */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px 220px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full pt-32 pb-12" style={{ paddingLeft: 75, paddingRight: 75 }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">

            {/* Left: Copy */}
            <div className="max-w-[820px]">

              {/* Eyebrow with live dot */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="relative flex h-[7px] w-[7px] shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F4E3D] opacity-60" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#1F4E3D]" />
                </span>
                <p className="text-[10px] tracking-[0.42em] uppercase font-semibold text-[rgba(42,31,20,0.5)]">
                  Markham, ON · Founding 30 offer active
                </p>
              </motion.div>

              {/* Headline — line-by-line reveal */}
              <h1
                className="font-bold leading-[1.18] tracking-[-0.03em] mb-8"
                style={{ fontSize: "clamp(3.2rem, 6.5vw, 6rem)" }}
              >
                {HEADLINE.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span
                      className={`block ${line.accent ? "text-[#1F4E3D]" : "text-[#2A1F14]"}`}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.72,
                        delay: i * 0.09,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line.text}
                    </motion.span>
                  </div>
                ))}
              </h1>

              {/* Body copy */}
              <motion.p
                className="text-[rgba(42,31,20,0.65)] text-[1rem] md:text-[1.07rem] leading-[1.75] max-w-[510px] mb-10"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                We help Markham businesses get discovered by local residents — through
                a local directory, in-store voting, monthly giveaways, and simple
                monthly exposure. We reinvest 40% of profits back into the community.{" "}
                <span className="text-[#2A1F14] font-medium">
                  Starting at $5/month.
                </span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.68 }}
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 bg-[#1F4E3D] text-[#FBF6E9] font-bold px-10 py-5 rounded-md text-[15px] transition-all duration-200 hover:bg-[#2A6651] hover:shadow-[0_12px_32px_rgba(31,78,61,0.28)] active:scale-[0.98]"
                >
                  Reserve My Free 2-Month Trial
                  <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  className="text-[rgba(42,31,20,0.6)] text-[15px] px-3 py-2 hover:text-[#2A1F14] transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  Book a 10-minute demo ↗
                </a>
              </motion.div>
            </div>

            {/* Right: Rotating founding badge */}
            <motion.div
              className="hidden lg:block shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-80 h-80 xl:w-[22rem] xl:h-[22rem]">
                {/* Orbiting text ring — brass for variety */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 240 240" className="w-full h-full">
                    <defs>
                      <path
                        id="ring-path"
                        d="M 120,120 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
                      />
                    </defs>
                    <text
                      fill="rgba(184,120,46,0.65)"
                      fontSize="9.5"
                      letterSpacing="4.5"
                      fontWeight="600"
                    >
                      <textPath href="#ring-path">
                        FOUNDING 30 · MARKHAM ON · FOUNDING 30 · MARKHAM ON ·{" "}
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center disc */}
                <div className="absolute inset-[22%] rounded-full border border-[rgba(31,78,61,0.2)] bg-[rgba(31,78,61,0.05)] flex flex-col items-center justify-center">
                  <span
                    className="text-[5.5rem] xl:text-[6.5rem] font-bold leading-none text-[#1F4E3D]"
                  >
                    30
                  </span>
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[rgba(42,31,20,0.45)] mt-1">
                    spots
                  </span>
                </div>

                {/* Outer halo — soft drop, no glow */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow:
                      "0 30px 60px -30px rgba(31,78,61,0.25), inset 0 0 30px rgba(31,78,61,0.04)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative z-10" style={{ paddingTop: 8, paddingBottom: 40 }}>
        <div className="w-full" style={{ paddingLeft: 75, paddingRight: 75 }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} idx={i} active={statsInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
