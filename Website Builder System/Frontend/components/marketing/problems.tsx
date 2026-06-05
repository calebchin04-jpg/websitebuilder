"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const pairs = [
  {
    index: "01",
    agency: "Charges $500–$2,000/month.",
    crossroads: "Starts at $5/month. The same 40,000 residents.",
  },
  {
    index: "02",
    agency: "Doesn't know your community.",
    crossroads: "Built from inside Markham, by someone who grew up here.",
  },
  {
    index: "03",
    agency: "Sends you a PDF and calls it results.",
    crossroads: "Sends customers through your door — then publishes the numbers publicly.",
  },
  {
    index: "04",
    agency: "Keeps every dollar you give them.",
    crossroads: "Reinvests 40% of profits back into Markham — gift cards and grants for local businesses.",
  },
]

function PairRow({
  index,
  agency,
  crossroads,
  isFirst = false,
}: {
  index: string
  agency: string
  crossroads: string
  isFirst?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px -40% 0px" })

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-[38%_62%] ${isFirst ? "" : "border-t border-[rgba(42,31,20,0.08)]"}`}
    >
      {/* Left column - decorative number */}
      <div className="relative overflow-hidden hidden lg:block">
        <motion.span
          className="absolute left-[-12px] bottom-[-40px] font-black select-none pointer-events-none"
          style={{
            fontSize: "clamp(13rem, 34vw, 26rem)",
            letterSpacing: "-0.06em",
            lineHeight: 0.88,
          }}
          initial={{ color: "rgba(42,31,20,0.08)" }}
          animate={{
            color: inView ? "rgba(31,78,61,0.1)" : "rgba(42,31,20,0.08)",
          }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {index}
        </motion.span>
      </div>

      {/* Right column - content */}
      <div className="flex flex-col justify-center gap-5 lg:gap-7 py-8 lg:py-16 px-5 lg:px-8 lg:pr-12">
        {/* Agency block */}
        <div className="relative inline-block">
          <motion.p
            className="text-[9px] tracking-[0.42em] uppercase font-bold mb-3"
            style={{ color: "rgba(42,31,20,0.4)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0 }}
          >
            Traditional agency
          </motion.p>
          <div className="relative inline-block">
            <motion.p
              className="font-black leading-[1.1]"
              style={{
                fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)",
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 10, color: "rgba(42,31,20,0.5)" }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 10,
                color: inView
                  ? "rgba(42,31,20,0.18)"
                  : "rgba(42,31,20,0.5)",
              }}
              transition={{
                opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                y: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                color: { duration: 0.4, delay: 1.1 },
              }}
            >
              {agency}
            </motion.p>
            {/* Strike line — forest green, soft drop instead of glow */}
            <motion.div
              className="absolute left-[-2%] h-[3px]"
              style={{
                top: "calc(50%)",
                background:
                  "linear-gradient(90deg, transparent, #1F4E3D 6%, #1F4E3D 94%, transparent)",
                boxShadow: "0 2px 8px rgba(31,78,61,0.22)",
              }}
              initial={{ width: 0 }}
              animate={{ width: inView ? "104%" : 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.55 }}
            />
          </div>
        </div>

        {/* Crossroads block */}
        <motion.div
          className="border-l-2 border-[#1F4E3D]"
          style={{ paddingLeft: 18 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
        >
          <p
            className="text-[9px] tracking-[0.42em] uppercase font-bold text-[#1F4E3D] mb-3"
          >
            Crossroads
          </p>
          <p
            className="font-bold text-[#2A1F14] leading-[1.3]"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {crossroads}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export function Problems() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-20% 0px -40% 0px" })

  return (
    <section className="bg-[#F4ECD8] overflow-x-hidden">
      {/* Section heading */}
      <motion.div
        ref={headingRef}
        className="w-full py-16 lg:py-20 pb-10 lg:pb-16 px-5 lg:px-[75px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div aria-hidden style={{ height: 35 }} />
        <h2
          className="font-black leading-[1.18] text-[#2A1F14]"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.035em",
          }}
        >
          Everything a traditional agency does —{" "}
          <span className="text-[#1F4E3D]">inverted.</span>
        </h2>
      </motion.div>

      {/* Pair rows */}
      {pairs.map((pair, i) => (
        <PairRow key={pair.index} {...pair} isFirst={i === 0} />
      ))}
    </section>
  )
}
