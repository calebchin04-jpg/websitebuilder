"use client"

import { FadeIn } from "./fade-in"
import { Check, Clock, MapPin, Receipt, User, Image as ImageIcon } from "lucide-react"

const timeline: { label: string; date: string; status: "done" | "now" | "next" }[] = [
  { label: "Pilot signups open", date: "Now",        status: "now"  },
  { label: "First 5 businesses live on Hub", date: "Jun 2026",  status: "next" },
  { label: "First flyer drop · 5,000 households",  date: "Jul 2026", status: "next" },
  { label: "First monthly gift card giveaway",     date: "Jul 2026", status: "next" },
  { label: "Public receipts published",            date: "Aug 2026", status: "next" },
  { label: "Founding 30 cohort full",              date: "Sep 2026", status: "next" },
]

const pilots = [
  { name: "Pilot business #1", note: "Restaurant · Markham Centre",  filled: true },
  { name: "Pilot business #2", note: "Retail · Unionville",          filled: true },
  { name: "Pilot business #3", note: "Health & Beauty · Cornell",    filled: true },
  { name: "Your spot here",    note: "12 of 15 first-come spots left", filled: false },
]

// ── Visuals ───────────────────────────────────────────────────────────────────

function FlyerMockup() {
  return (
    <div className="relative h-full flex items-center justify-center p-6">
      <div className="relative w-[140px] h-[180px] rounded-md bg-gradient-to-br from-[#F5F1E8] to-[#E8E0D0] shadow-2xl rotate-[-6deg]">
        <div className="absolute inset-3 flex flex-col">
          <div className="text-[6px] tracking-[0.35em] uppercase font-bold text-[#1F4E3D]">
            Crossroads
          </div>
          <div className="text-[11px] font-black text-[#2A1F14] leading-tight mt-1">
            Markham&apos;s<br />Local Loop
          </div>
          <div className="mt-2 h-[1px] bg-[#2A1F14]/20" />
          <div className="text-[6px] text-[#2A1F14]/60 mt-2 leading-snug">
            Vote · Win gift cards · Discover local businesses
          </div>
          <div className="mt-auto flex items-end justify-between">
            <div>
              <div className="text-[5px] uppercase tracking-widest text-[#2A1F14]/40">
                Scan
              </div>
              <div className="w-8 h-8 bg-[#2A1F14]/85 rounded-sm mt-0.5 relative overflow-hidden">
                <div className="absolute inset-1 grid grid-cols-4 gap-[1px]">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`${[0,3,5,6,9,10,12,15].includes(i) ? "bg-[#F5F1E8]" : ""}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-[5px] text-[#2A1F14]/40 text-right">
              10,000<br />flyers/mo
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[140px] h-[180px] rounded-md bg-gradient-to-br from-[#1F4E3D] to-[#0F2A20] border border-[rgba(184,120,46,0.25)] shadow-xl rotate-[6deg] translate-x-12">
        <div className="absolute inset-3 flex flex-col">
          <div className="text-[6px] tracking-[0.35em] uppercase font-bold text-[#DFA75C]">
            Vote Now
          </div>
          <div className="text-[11px] font-black text-[#FBF6E9] leading-tight mt-1">
            Who&apos;s your<br />favourite spot?
          </div>
          <div className="mt-auto">
            <div className="h-1.5 bg-[rgba(184,120,46,0.3)] rounded-full overflow-hidden">
              <div className="h-full w-[68%] bg-[#B8782E]" />
            </div>
            <div className="text-[5px] text-white/55 mt-1">247 votes · April</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HubScreenshot() {
  return (
    <div className="relative h-full p-5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <div className="flex-1 ml-3 h-4 rounded-sm bg-[rgba(42,31,20,0.06)] flex items-center px-2">
          <span className="text-[7px] text-[rgba(42,31,20,0.5)]">gtahub.ca/markham</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        {[
          { name: "Joe&apos;s Pizza", v: 247, c: "#1F4E3D" },
          { name: "Style Studio",    v: 189, c: "#B8782E" },
          { name: "Maple Dental",    v: 143, c: "#2D4A6E" },
          { name: "Bloom Café",      v:  98, c: "#8B2E2E" },
          { name: "North Books",     v:  76, c: "#5C2E4E" },
          { name: "Iron Gym",        v:  52, c: "#3A7866" },
        ].map((b) => (
          <div
            key={b.name}
            className="rounded-md p-2 flex flex-col justify-between"
            style={{ background: "rgba(42,31,20,0.04)", border: "1px solid rgba(42,31,20,0.08)" }}
          >
            <div className="w-full h-6 rounded-sm" style={{ background: `${b.c}33` }} />
            <div>
              <div className="text-[7px] font-bold text-[#2A1F14] truncate" dangerouslySetInnerHTML={{ __html: b.name }} />
              <div className="text-[6px]" style={{ color: b.c }}>★ {b.v} votes</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NFCPhoto() {
  return (
    <div className="relative h-full flex items-center justify-center">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[rgba(31,78,61,0.22)]"
          style={{ width: i * 50 + 20, height: i * 50 + 20 }}
        />
      ))}
      <div
        className="relative z-10 w-32 h-20 rounded-xl rotate-[-8deg] shadow-2xl flex flex-col justify-between p-3"
        style={{
          background: "linear-gradient(135deg,#1F4E3D 0%,#0F2A20 100%)",
          border: "1px solid rgba(184,120,46,0.4)",
          boxShadow: "0 20px 40px rgba(31,78,61,0.25)",
        }}
      >
        <div className="flex justify-between items-start">
          <div className="text-[6px] tracking-[0.3em] uppercase text-[#DFA75C]">
            Crossroads
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(184,120,46,0.85)" strokeWidth="1.5">
            <path d="M9 17.5A5.5 5.5 0 0120 12M6 17.5A8.5 8.5 0 0120 12M3 17.5A11.5 11.5 0 0120 12" />
          </svg>
        </div>
        <div>
          <div className="text-[8px] font-bold text-[#FBF6E9]">Joe&apos;s Pizza</div>
          <div className="text-[6px] text-[rgba(223,167,92,0.65)]">tap to vote · scan QR</div>
        </div>
      </div>
    </div>
  )
}

function ReportMockup() {
  const bars = [40, 65, 50, 80, 55, 90, 70]
  return (
    <div className="h-full p-5 flex flex-col">
      <div className="text-[8px] tracking-[0.3em] uppercase font-bold text-[#3A7866]/85 mb-2">
        April Impact Report
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { v: "247", l: "Votes" },
          { v: "89", l: "Scans" },
          { v: "#3", l: "Rank" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-lg font-bold text-[#1F4E3D]">{s.v}</div>
            <div className="text-[7px] text-[rgba(42,31,20,0.55)] mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-[3px] flex-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-[rgba(58,120,102,0.4)]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="text-[6px] text-[rgba(42,31,20,0.5)] mt-2 text-center">
        Daily votes · Apr 1 → Apr 30
      </div>
    </div>
  )
}

function FlyerZoneMap() {
  // Simplified Markham zones (rough relative geography)
  const zones = [
    { name: "Markham Centre", cx: 50, cy: 55, r: 12, intensity: 0.85 },
    { name: "Unionville",     cx: 32, cy: 48, r: 9,  intensity: 0.7  },
    { name: "Thornhill",      cx: 22, cy: 68, r: 10, intensity: 0.5  },
    { name: "Cornell",        cx: 75, cy: 40, r: 9,  intensity: 0.6  },
    { name: "Cathedraltown",  cx: 58, cy: 28, r: 7,  intensity: 0.4  },
    { name: "Box Grove",      cx: 78, cy: 65, r: 8,  intensity: 0.45 },
  ]
  return (
    <div className="h-full p-5 flex flex-col">
      <div className="text-[8px] tracking-[0.3em] uppercase font-bold text-[#1F4E3D]/85 mb-2">
        Markham flyer zones
      </div>
      <div className="relative flex-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* faint grid */}
          <defs>
            <pattern id="proof-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(42,31,20,0.06)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#proof-grid)" />
          {zones.map((z) => (
            <g key={z.name}>
              <circle cx={z.cx} cy={z.cy} r={z.r} fill={`rgba(31,78,61,${z.intensity * 0.2})`} />
              <circle cx={z.cx} cy={z.cy} r={2} fill="#1F4E3D" />
              <text
                x={z.cx}
                y={z.cy + z.r + 4}
                fontSize="3.2"
                fill="rgba(42,31,20,0.65)"
                textAnchor="middle"
              >
                {z.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="text-[6px] text-[rgba(42,31,20,0.5)] mt-1 text-center">
        10,000 flyers/mo · 40,000 households reached
      </div>
    </div>
  )
}

function FounderPhotoPlaceholder() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-5 text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(31,78,61,0.15)] to-[rgba(31,78,61,0.04)] border border-[rgba(31,78,61,0.25)] flex items-center justify-center mb-3">
        <User size={28} className="text-[#1F4E3D]/65" />
      </div>
      <div className="text-sm font-bold text-[#2A1F14]">Caleb Chin</div>
      <div className="text-[10px] text-[rgba(42,31,20,0.55)] mt-1 leading-relaxed max-w-[180px]">
        Founder · Grew up in Markham<br />
        Building this from inside the community
      </div>
    </div>
  )
}

// ── Proof cards ───────────────────────────────────────────────────────────────

type ProofCard = {
  id: string
  label: string
  placeholder: string
  Visual: () => React.ReactElement
  colSpan?: string
  bg?: string
}

const cards: ProofCard[] = [
  {
    id: "hub",
    label: "Digital Hub",
    placeholder: "Live screenshot of the hub directory",
    Visual: HubScreenshot,
    colSpan: "lg:col-span-2",
  },
  {
    id: "flyer",
    label: "Flyer mockup",
    placeholder: "Print-ready design preview",
    Visual: FlyerMockup,
  },
  {
    id: "nfc",
    label: "NFC card",
    placeholder: "Photo of the physical card",
    Visual: NFCPhoto,
  },
  {
    id: "map",
    label: "Distribution map",
    placeholder: "Markham flyer zones we cover",
    Visual: FlyerZoneMap,
  },
  {
    id: "report",
    label: "Monthly report",
    placeholder: "Sample of what you receive each month",
    Visual: ReportMockup,
  },
  {
    id: "founder",
    label: "Built by a local",
    placeholder: "Photo and bio coming soon",
    Visual: FounderPhotoPlaceholder,
  },
]

// ── Section ───────────────────────────────────────────────────────────────────

export function Proof() {
  return (
    <section
      id="proof"
      className="bg-[#F4ECD8] py-36 px-3 md:px-5 border-t border-[rgba(42,31,20,0.1)]"
      style={{ paddingLeft: 75, paddingRight: 75 }}
    >
      <div className="w-full">
        <FadeIn>
          <div className="mb-14 max-w-3xl">
            <div aria-hidden style={{ height: 31 }} />
            <h2
              className="font-bold leading-[1.08] tracking-[-0.025em] mb-4 text-[#2A1F14]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What this actually looks like.
            </h2>
            <p className="text-sm text-[rgba(42,31,20,0.65)] leading-relaxed">
              We&apos;re a new platform built in Markham — so instead of fake
              testimonials, here&apos;s exactly what you get, what&apos;s shipping,
              and when.
            </p>
          </div>
        </FadeIn>

        {/* Proof cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {cards.map((card, i) => (
            <FadeIn key={card.id} delay={i * 0.05} className={card.colSpan ?? ""}>
              <div
                className="relative rounded-2xl overflow-hidden h-72 border border-[rgba(42,31,20,0.1)] hover:border-[rgba(42,31,20,0.18)] transition-colors"
                style={{ background: card.bg ?? "#FBF6E9" }}
              >
                {/* Label */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded-md bg-[rgba(244,236,216,0.85)] backdrop-blur-sm border border-[rgba(42,31,20,0.1)]">
                  <ImageIcon size={10} className="text-[#1F4E3D]" />
                  <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[rgba(42,31,20,0.7)]">
                    {card.label}
                  </span>
                </div>
                {/* Visual */}
                <card.Visual />
                {/* Placeholder caption */}
                <div className="absolute bottom-0 inset-x-0 px-4 py-2.5 bg-[rgba(237,227,203,0.92)] backdrop-blur-sm border-t border-[rgba(42,31,20,0.08)]">
                  <div className="text-[10px] text-[rgba(42,31,20,0.55)] leading-tight">
                    {card.placeholder}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline + Pilots + Receipts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Launch timeline */}
          <FadeIn>
            <div className="rounded-2xl border border-[rgba(42,31,20,0.12)] bg-[#FFFCF2] p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={14} className="text-[#1F4E3D]" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(42,31,20,0.6)]">
                  Launch timeline
                </span>
              </div>
              <ul className="space-y-3.5">
                {timeline.map((t) => (
                  <li key={t.label} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                        t.status === "done"
                          ? "bg-[#1F4E3D]"
                          : t.status === "now"
                          ? "bg-[#B8782E] animate-pulse"
                          : "bg-[rgba(42,31,20,0.2)]"
                      }`}
                    />
                    <div className="flex-1 flex items-baseline justify-between gap-3">
                      <span className="text-sm text-[rgba(42,31,20,0.78)]">
                        {t.label}
                      </span>
                      <span className="text-[10px] tracking-widest uppercase text-[rgba(42,31,20,0.5)] shrink-0">
                        {t.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Pilot businesses */}
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-[rgba(42,31,20,0.12)] bg-[#FFFCF2] p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={14} className="text-[#1F4E3D]" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(42,31,20,0.6)]">
                  Pilot cohort
                </span>
              </div>
              <ul className="space-y-3">
                {pilots.map((p, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      p.filled
                        ? "border-[rgba(42,31,20,0.1)] bg-[rgba(42,31,20,0.03)]"
                        : "border-[rgba(31,78,61,0.35)] bg-[rgba(31,78,61,0.06)]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                        p.filled ? "bg-[rgba(31,78,61,0.12)]" : "border border-dashed border-[rgba(31,78,61,0.4)]"
                      }`}
                    >
                      {p.filled ? (
                        <Check size={12} className="text-[#1F4E3D]" />
                      ) : (
                        <span className="text-[10px] text-[#1F4E3D]">+</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm ${p.filled ? "text-[rgba(42,31,20,0.85)]" : "text-[#1F4E3D] font-medium"}`}>
                        {p.name}
                      </div>
                      <div className="text-[10px] text-[rgba(42,31,20,0.55)] mt-0.5">
                        {p.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-[rgba(42,31,20,0.5)] mt-4 leading-relaxed">
                Real names published here once each pilot business confirms. No
                stock testimonials.
              </p>
            </div>
          </FadeIn>

          {/* Gift card receipts explainer */}
          <FadeIn delay={0.16}>
            <div className="rounded-2xl border border-[rgba(42,31,20,0.12)] bg-[#FFFCF2] p-7 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <Receipt size={14} className="text-[#1F4E3D]" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(42,31,20,0.6)]">
                  Public receipts
                </span>
              </div>
              <p className="text-sm text-[rgba(42,31,20,0.7)] leading-relaxed mb-4">
                Every month, we publish the actual receipts for every gift card we
                buy and every grant we fund — visible on the Hub, by date and
                business.
              </p>
              <div className="rounded-lg border border-[rgba(42,31,20,0.1)] bg-[rgba(42,31,20,0.03)] p-4 mt-auto">
                <div className="text-[9px] uppercase tracking-[0.25em] text-[rgba(42,31,20,0.5)] mb-2">
                  Sample receipt
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[rgba(42,31,20,0.78)]">Joe&apos;s Pizza</span>
                  <span className="text-[#1F4E3D] font-mono">$50.00</span>
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1 text-[rgba(42,31,20,0.55)]">
                  <span>Gift card · Apr 14, 2026</span>
                  <span>Receipt #0142</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
