"use client"

import { useEffect, useState, type ReactElement } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { FadeIn } from "./fade-in"
import { Section } from "./section"

// ── Keyframes ─────────────────────────────────────────────────────────────────

const css = `
  @keyframes floatDot {
    from { transform: translateY(0px); }
    to   { transform: translateY(-5px); }
  }
  @keyframes rippleOut {
    0%   { transform: scale(0.6); opacity: 0.5; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  @keyframes shimmerSlide {
    0%   { left: -50%; }
    100% { left: 150%; }
  }
  @keyframes barPulse {
    0%   { opacity: 0.25; }
    100% { opacity: 0.6; }
  }
  @keyframes blinkDot {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.15; }
  }

  /* ─── Per-card hover reactions ─── */

  /* Hub — customer particles fly toward center node, votes tick up */
  .wyg-hub-line { transition: stroke 0.45s ease, stroke-width 0.45s ease; }
  .wyg-hub-dot  { transition: filter 0.45s ease; }
  .group:hover .wyg-hub-line { stroke: rgba(31,78,61,0.55) !important; stroke-width: 1.1; }
  .group:hover .wyg-hub-dot  { filter: drop-shadow(0 0 5px rgba(31,78,61,0.45)); }
  .wyg-hub-pill { transition: border-color 0.4s ease, background 0.4s ease; }
  .group:hover .wyg-hub-pill { border-color: rgba(31,78,61,0.4) !important; background: rgba(31,78,61,0.04) !important; }
  .wyg-hub-particle {
    position: absolute; width: 5px; height: 5px; border-radius: 50%;
    background: rgba(31,78,61,0.85); opacity: 0;
    box-shadow: 0 0 6px rgba(31,78,61,0.5);
    pointer-events: none;
  }
  @keyframes wyg-hub-fly {
    0%   { opacity: 0; transform: translate(var(--fx), var(--fy)) scale(0.4); }
    18%  { opacity: 1; }
    85%  { opacity: 1; transform: translate(0,0) scale(1); }
    100% { opacity: 0; transform: translate(0,0) scale(2.2); }
  }
  .group:hover .wyg-hub-particle { animation: wyg-hub-fly 1.3s cubic-bezier(0.55,0,0.55,1) infinite; }
  .wyg-hub-vote { transition: color 0.4s ease; position: relative; }
  .group:hover .wyg-hub-vote { color: #1F4E3D !important; }
  @keyframes wyg-hub-plus {
    0%   { opacity: 0; transform: translateY(0); }
    25%  { opacity: 1; transform: translateY(-4px); }
    100% { opacity: 0; transform: translateY(-14px); }
  }
  .wyg-hub-plus {
    position: absolute; right: -16px; top: -2px;
    font-size: 8px; color: #1F4E3D; font-weight: 700;
    opacity: 0; pointer-events: none;
  }
  .group:hover .wyg-hub-plus { animation: wyg-hub-plus 1.4s ease-out infinite; }

  /* NFC — card wiggles, waves oscillate stronger */
  .wyg-nfc-card { transition: box-shadow 0.5s ease, border-color 0.5s ease; transform-origin: center; }
  @keyframes wyg-nfc-wiggle {
    0%, 100% { transform: translateY(-4px) scale(1.08) rotate(-4deg); }
    25%      { transform: translateY(-6px) scale(1.08) rotate(-10deg); }
    50%      { transform: translateY(-4px) scale(1.08) rotate(0deg); }
    75%      { transform: translateY(-6px) scale(1.08) rotate(2deg); }
  }
  .group:hover .wyg-nfc-card {
    animation: wyg-nfc-wiggle 0.7s ease-in-out infinite;
    box-shadow: 0 16px 32px rgba(45,74,110,0.32);
    border-color: rgba(184,120,46,0.6) !important;
  }
  @keyframes wyg-nfc-oscillate {
    0%   { opacity: 0; transform: scale(0.4); border-color: rgba(45,74,110,0.9); }
    25%  { opacity: 1; }
    100% { opacity: 0; transform: scale(2.6); border-color: rgba(45,74,110,0.15); }
  }
  .group:hover .wyg-nfc-ring {
    animation: wyg-nfc-oscillate 1.1s cubic-bezier(0.25,0.6,0.4,1) infinite !important;
    border-width: 1.5px !important;
  }
  .wyg-nfc-tap { transition: color 0.4s ease, transform 0.4s ease; }
  .group:hover .wyg-nfc-tap { color: rgba(45,74,110,0.95) !important; transform: scale(1.08); }

  /* Deals — closed lock cover slides up to reveal the deal */
  .wyg-deal-cover {
    position: absolute; inset: 0; z-index: 5;
    background: linear-gradient(160deg, #EDE3CB 0%, #d5c9a8 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: transform 0.6s cubic-bezier(0.7,0,0.3,1);
  }
  .group:hover .wyg-deal-cover { transform: translateY(-110%); pointer-events: none; }
  .wyg-deal-locked-content { transition: opacity 0.22s ease; }
  .group:hover .wyg-deal-locked-content { opacity: 0; pointer-events: none; }
  .wyg-deal-unlocked-content { opacity: 0; transition: opacity 0.3s ease 0.4s; }
  .group:hover .wyg-deal-unlocked-content { opacity: 1; }
  .wyg-deal-shackle {
    transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
    transform-origin: 22% 60%; transform-box: fill-box;
  }
  .group:hover .wyg-deal-shackle { transform: rotate(-32deg) translateY(-1px); }
  .wyg-deal-box  { transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), border-color 0.45s ease, background 0.45s ease, box-shadow 0.45s ease; }
  .group:hover .wyg-deal-box { transform: scale(1.08); border-color: rgba(184,120,46,0.7) !important; background: rgba(184,120,46,0.18) !important; box-shadow: 0 0 24px rgba(184,120,46,0.22); }
  .group:hover .wyg-deal-shimmer { animation-duration: 1.1s !important; }
  .wyg-deal-percent { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  .group:hover .wyg-deal-percent { transform: scale(1.05); }

  /* Giveaway — Mario-style leaderboard climb */
  .wyg-leader-row { transition: transform 0.4s ease, color 0.4s ease; }
  @keyframes wyg-leader-climb {
    0%   { transform: translateY(0); }
    10%  { transform: translateY(2px); }
    20%  { transform: translateY(-6px); }
    35%  { transform: translateY(-2px); }
    50%  { transform: translateY(-14px); }
    65%  { transform: translateY(-10px); }
    80%  { transform: translateY(-26px); }
    100% { transform: translateY(-36px); }
  }
  @keyframes wyg-leader-drop-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(6px); }
    100% { transform: translateY(18px); }
  }
  @keyframes wyg-leader-drop-2 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(10px); }
    100% { transform: translateY(18px); }
  }
  .group:hover .wyg-leader-row-0 { animation: wyg-leader-drop-2 1s cubic-bezier(0.4,0,0.2,1) forwards; }
  .group:hover .wyg-leader-row-1 { animation: wyg-leader-drop-1 1s cubic-bezier(0.4,0,0.2,1) forwards; }
  .group:hover .wyg-leader-row-2 { animation: wyg-leader-climb 1.05s cubic-bezier(0.45,0.05,0.55,0.95) forwards; }
  .wyg-leader-you { transition: background 0.5s ease 0.9s, padding 0.3s ease; padding: 2px 4px; margin: 0 -4px; border-radius: 6px; }
  .group:hover .wyg-leader-you { background: rgba(92,46,78,0.14); }
  .wyg-leader-rank-num { transition: color 0.4s ease 0.9s; }
  .group:hover .wyg-leader-you .wyg-leader-rank-num { color: #B8782E !important; font-weight: 700; }
  .wyg-leader-bump  { opacity: 0; transform: translateY(4px); transition: opacity 0.3s ease 1s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) 1s; font-size: 8px; color: #B8782E; font-weight: 700; margin-left: 6px; letter-spacing: 0.08em; display: inline-block; }
  .group:hover .wyg-leader-bump { opacity: 1; transform: translateY(0); }
  .wyg-leader-pool  { transition: color 0.4s ease; }
  .group:hover .wyg-leader-pool { color: rgba(92,46,78,0.95) !important; }

  /* Video — play button hides, faux video plays */
  .wyg-video-play { transition: opacity 0.3s ease, transform 0.3s ease; }
  .group:hover .wyg-video-play { opacity: 0; transform: scale(0.7); pointer-events: none; }
  .wyg-video-playing {
    position: absolute; inset: 0;
    opacity: 0; transition: opacity 0.4s ease 0.15s;
    pointer-events: none; overflow: hidden;
  }
  .group:hover .wyg-video-playing { opacity: 1; }
  @keyframes wyg-video-progress {
    0%   { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }
  @keyframes wyg-video-marquee {
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes wyg-video-bar-eq {
    0%, 100% { transform: scaleY(0.3); }
    50%      { transform: scaleY(1); }
  }
  .wyg-video-eq-bar { transform-origin: bottom; }
  .group:hover .wyg-video-rec  { animation-duration: 0.45s !important; }
  @keyframes wyg-scan-scroll { 0% { opacity: 0.04; transform: translateY(0); } 50% { opacity: 0.12; } 100% { opacity: 0.04; transform: translateY(6px); } }
  .group:hover .wyg-video-scan { animation: wyg-scan-scroll 0.35s linear infinite; }
  .wyg-video-title { transition: color 0.4s ease, letter-spacing 0.4s ease; }
  .group:hover .wyg-video-title { color: rgba(255,243,224,0.85) !important; letter-spacing: 0.32em; }

  /* Report — bars rise from 0 in sequence on hover */
  .wyg-report-bar  { transform-origin: bottom; transition: background 0.55s ease, box-shadow 0.55s ease; }
  @keyframes wyg-report-bar-rise {
    0%   { transform: scaleY(0); }
    70%  { transform: scaleY(1.18); }
    100% { transform: scaleY(1); }
  }
  .group:hover .wyg-report-bar {
    background: rgba(58,120,102,0.78) !important;
    box-shadow: 0 0 8px rgba(58,120,102,0.3);
    animation: wyg-report-bar-rise 0.7s cubic-bezier(0.34,1.56,0.64,1) var(--bar-delay,0ms) forwards !important;
  }
  .wyg-report-stat { transition: color 0.4s ease, transform 0.4s ease; }
  .group:hover .wyg-report-stat { color: #1F4E3D !important; transform: translateY(-2px); }
  @keyframes wyg-report-sweep {
    0%   { opacity: 0; transform: translateX(-100%); }
    20%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { opacity: 0; transform: translateX(110%); }
  }
  .wyg-report-sweep {
    position: absolute; top: 0; bottom: 0; width: 30px;
    background: linear-gradient(90deg, transparent, rgba(58,120,102,0.45), transparent);
    opacity: 0; pointer-events: none;
  }
  .group:hover .wyg-report-sweep { animation: wyg-report-sweep 1.2s ease-in-out 0.7s infinite; }
`

// ── Visual mockups ────────────────────────────────────────────────────────────

export function HubVisual() {
  // Local discovery network: 1 central "Your Business" node + surrounding businesses/customers
  const center = { cx: 350, cy: 95 }
  const surrounding = [
    { cx: 90,  cy: 50,  r: 4.5, delay: "0s"    },
    { cx: 200, cy: 25,  r: 3.5, delay: "0.4s"  },
    { cx: 280, cy: 70,  r: 4,   delay: "0.7s"  },
    { cx: 450, cy: 35,  r: 3.5, delay: "0.2s"  },
    { cx: 560, cy: 60,  r: 4.5, delay: "0.9s"  },
    { cx: 620, cy: 130, r: 3.5, delay: "1.1s"  },
    { cx: 500, cy: 165, r: 4,   delay: "0.5s"  },
    { cx: 360, cy: 175, r: 3.5, delay: "1.3s"  },
    { cx: 220, cy: 160, r: 4,   delay: "0.6s"  },
    { cx: 110, cy: 140, r: 3.5, delay: "0.3s"  },
  ]
  // Primary connections from central node to each surrounding node
  // Secondary connections form a loose ring between nearby outer nodes
  const secondaryLinks: [number, number][] = [
    [0, 1], [1, 2], [3, 4], [4, 5], [5, 6], [6, 7], [8, 9], [9, 0],
  ]
  // Particles fly inward toward central node
  const particles = [
    { fx: "-180px", fy: "-30px", delay: "0s"    },
    { fx: "170px",  fy: "-20px", delay: "0.3s"  },
    { fx: "-150px", fy: "40px",  delay: "0.6s"  },
    { fx: "200px",  fy: "50px",  delay: "0.9s"  },
    { fx: "-90px",  fy: "60px",  delay: "1.2s"  },
    { fx: "110px",  fy: "-50px", delay: "1.5s"  },
  ]

  return (
    <div className="relative w-full mt-6 overflow-hidden" style={{ height: 158 }}>
      {particles.map((p, i) => (
        <span
          key={i}
          className="wyg-hub-particle"
          style={{
            top: "50%",
            left: "50%",
            animationDelay: p.delay,
            ...({ "--fx": p.fx, "--fy": p.fy } as Record<string, string>),
          }}
        />
      ))}

      <svg viewBox="0 0 700 220" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-full">
        {/* Primary spokes — central → each surrounding */}
        {surrounding.map((s, i) => (
          <line key={`p${i}`}
            className="wyg-hub-line"
            x1={center.cx} y1={center.cy} x2={s.cx} y2={s.cy}
            stroke="rgba(31,78,61,0.18)" strokeWidth="0.9"
          />
        ))}
        {/* Secondary connections — loose ring */}
        {secondaryLinks.map(([a, b], i) => (
          <line key={`s${i}`}
            x1={surrounding[a].cx} y1={surrounding[a].cy}
            x2={surrounding[b].cx} y2={surrounding[b].cy}
            stroke="rgba(31,78,61,0.09)" strokeWidth="0.7"
            strokeDasharray="2 3"
          />
        ))}

        {/* Surrounding nodes */}
        {surrounding.map((s, i) => (
          <circle key={`n${i}`}
            className="wyg-hub-dot"
            cx={s.cx} cy={s.cy} r={s.r}
            fill="rgba(31,78,61,0.42)"
            style={{ animation: `floatDot 2.5s ease-in-out ${s.delay} infinite alternate` }}
          />
        ))}

        {/* Central highlight ring (pulse) */}
        <circle cx={center.cx} cy={center.cy} r="28"
          fill="none" stroke="rgba(31,78,61,0.25)" strokeWidth="1"
          style={{ transformOrigin: `${center.cx}px ${center.cy}px`, animation: "rippleOut 2.2s ease-out infinite" }}
        />
        {/* Central node — "Your Business" */}
        <circle cx={center.cx} cy={center.cy} r="9"
          fill="rgba(31,78,61,0.92)"
        />
        {/* Label below central node */}
        <text x={center.cx} y={center.cy + 28}
          fontSize="11" fontWeight="600" textAnchor="middle"
          fill="rgba(42,31,20,0.82)"
        >
          Your Business
        </text>
        <text x={center.cx} y={center.cy + 44}
          fontSize="8.5" textAnchor="middle"
          fill="rgba(42,31,20,0.5)"
        >
          Markham · 247 votes
        </text>
      </svg>
    </div>
  )
}

export function NFCVisual() {
  return (
    <div className="relative w-full mt-6 flex flex-col items-center justify-center overflow-hidden" style={{ height: 158 }}>
      {/* Pulsing rings — anchored to card center */}
      {[1, 2, 3].map(i => (
        <div key={i} className="wyg-nfc-ring absolute rounded-full border border-[rgba(45,74,110,0.45)] pointer-events-none"
          style={{
            top: "50%", left: "50%",
            width: i * 54 + 16, height: i * 54 + 16,
            transform: "translate(-50%, -50%) scale(0.6)",
            opacity: 0,
            animation: `rippleOut 2.4s ease-out ${(i - 1) * 0.7}s infinite`,
          }}
        />
      ))}

      {/* Physical NFC card */}
      <div className="wyg-nfc-card relative z-10 rounded-xl shadow-xl overflow-hidden"
        style={{
          width: 170,
          aspectRatio: "1.75 / 1",
          background: "linear-gradient(135deg,#1F4E3D 0%,#0F2A20 100%)",
          border: "1px solid rgba(184,120,46,0.35)",
        }}>
        {/* Top-left: CROSSROADS wordmark */}
        <div
          className="absolute"
          style={{
            top: 9, left: 11,
            fontSize: 7, letterSpacing: "0.32em", textTransform: "uppercase",
            color: "rgba(223,167,92,0.75)", fontWeight: 600,
          }}
        >
          Crossroads
        </div>

        {/* Top-right: wifi/NFC mark */}
        <div className="absolute" style={{ top: 7, right: 9 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(184,120,46,0.85)" strokeWidth="1.6">
            <path d="M9 17.5A5.5 5.5 0 0120 12M6 17.5A8.5 8.5 0 0120 12M3 17.5A11.5 11.5 0 0120 12"/>
          </svg>
        </div>

        {/* Bottom-left: NFC · QR label */}
        <div
          className="absolute"
          style={{
            bottom: 8, left: 11,
            fontSize: 7, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(223,167,92,0.55)", fontWeight: 500,
          }}
        >
          NFC · QR
        </div>

        {/* Bottom-right: subtle QR-square decoration */}
        <div
          className="absolute"
          style={{
            bottom: 8, right: 9, width: 14, height: 14,
            background: "rgba(223,167,92,0.18)",
            border: "1px solid rgba(184,120,46,0.4)",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Tap prompt below the card */}
      <div className="wyg-nfc-tap mt-3 animate-pulse" style={{ fontSize: 9, color: "rgba(45,74,110,0.65)" }}>
        tap to vote →
      </div>
    </div>
  )
}

export function DealsVisual() {
  return (
    <div className="relative w-full mt-6 overflow-hidden isolate" style={{ minHeight: 158, height: 158, borderRadius: 16 }}>
      {/* Revealed deal — fills entire visual, behind cover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-3 overflow-hidden"
        style={{ background: "#F4ECD8" }}>
        {/* shimmer sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="wyg-deal-shimmer absolute inset-y-0 w-1/2"
            style={{
              background: "linear-gradient(90deg,transparent,rgba(184,120,46,0.08),transparent)",
              animation: "shimmerSlide 3s linear infinite",
            }}
          />
        </div>
        <div className="wyg-deal-unlocked-content flex max-w-full flex-col items-center justify-center text-center">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B8782E" strokeWidth="1.75" style={{ marginBottom: 5, opacity: 0.85, flexShrink: 0 }}>
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 019.9-1"/>
          </svg>
          <div style={{ fontSize: 7, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,120,46,0.75)", marginBottom: 7 }}>
            Unlocked
          </div>
          <div className="wyg-deal-box rounded-lg text-center max-w-full"
            style={{
              background: "rgba(184,120,46,0.1)",
              border: "1px solid rgba(184,120,46,0.3)",
              padding: "5px 13px",
            }}>
            <div className="wyg-deal-percent" style={{ fontSize: 14, fontWeight: 700, color: "#B8782E", lineHeight: 1.1 }}>15% OFF</div>
            <div style={{ fontSize: 7.5, color: "rgba(42,31,20,0.55)", marginTop: 2 }}>your next visit</div>
          </div>
          <div style={{ fontSize: 7.5, color: "rgba(42,31,20,0.45)", marginTop: 8 }}>resets in 18h 22m</div>
        </div>
      </div>

      {/* Lock cover — fills entire visual, slides up on hover. Stays fully opaque while moving. */}
      <div className="wyg-deal-cover overflow-hidden"
        style={{ background: "linear-gradient(160deg, #E8C879 0%, #C49B4D 100%)" }}>
        <div className="wyg-deal-locked-content flex max-w-full flex-col items-center justify-center text-center px-4 py-3">
          <svg width="44" height="48" viewBox="0 0 24 26" fill="none" stroke="rgba(42,31,20,0.78)" strokeWidth="1.4" style={{ flexShrink: 0 }}>
            <path className="wyg-deal-shackle" d="M7 13 V8 a5 5 0 0 1 10 0 V13" />
            <rect x="3.5" y="13" width="17" height="11" rx="2.5" fill="rgba(42,31,20,0.08)" />
            <circle cx="12" cy="18" r="1.4" fill="rgba(42,31,20,0.78)" stroke="none" />
            <line x1="12" y1="19.2" x2="12" y2="21.4" strokeWidth="1.4" />
          </svg>
          <div style={{ fontSize: 8.5, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(42,31,20,0.72)", marginTop: 9, fontWeight: 600 }}>
            Locked
          </div>
          <div style={{ fontSize: 8, color: "rgba(42,31,20,0.55)", marginTop: 4 }}>hover to unlock</div>
        </div>
      </div>
    </div>
  )
}

export function GiveawayVisual() {
  const [hovered, setHovered] = useState(false)

  const defaultOrder = [
    { id: "joe",   name: "Joe's Pizza",   votes: 247 },
    { id: "style", name: "Style Studio",  votes: 189 },
    { id: "you",   name: "Your Business", votes: 143 },
    { id: "maple", name: "Maple Dental",  votes: 98  },
  ]

  const hoverOrder = [
    { id: "you",   name: "Your Business", votes: 273 },
    { id: "joe",   name: "Joe's Pizza",   votes: 247 },
    { id: "style", name: "Style Studio",  votes: 189 },
    { id: "maple", name: "Maple Dental",  votes: 98  },
  ]

  const rows = hovered ? hoverOrder : defaultOrder

  return (
    <div
      className="relative w-full mt-6 overflow-hidden"
      style={{ height: 158 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 8, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(42,31,20,0.5)", marginBottom: 12 }}>
        Leaderboard · April
      </div>
      {rows.map((r, i) => {
        const isYou = r.id === "you"
        const isYouNow1 = isYou && hovered
        return (
          <motion.div
            key={r.id}
            layout
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-2 mb-2 min-w-0"
            style={isYou ? { padding: "2px 4px", margin: "0 -4px 8px -4px", borderRadius: 6, background: hovered ? "rgba(184,120,46,0.14)" : "rgba(92,46,78,0.10)" } : undefined}
          >
            <span style={{
              fontSize: 9, width: 12, flexShrink: 0,
              color: isYouNow1 ? "#B8782E" : isYou ? "#5C2E4E" : "rgba(42,31,20,0.45)",
              fontWeight: isYouNow1 ? 700 : 500,
              transition: "color 0.4s ease",
            }}>{i + 1}</span>
            <span style={{
              fontSize: 10, flex: 1, minWidth: 0,
              color: isYou ? "#5C2E4E" : "rgba(42,31,20,0.7)",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {r.name}
            </span>
            <span style={{
              fontSize: 10, fontFamily: "monospace", flexShrink: 0,
              color: isYou ? "#5C2E4E" : "rgba(42,31,20,0.45)",
              animation: isYou ? "blinkDot 2s ease-in-out infinite" : "none",
            }}>{r.votes}</span>
          </motion.div>
        )
      })}
      <div className="wyg-leader-pool" style={{ marginTop: 10, paddingTop: 8, borderTop: "1px solid rgba(42,31,20,0.08)", fontSize: 8, color: "rgba(92,46,78,0.75)" }}>
        🎁 $307 gift card pool active this month
      </div>
    </div>
  )
}

function VideoVisual() {
  return (
    <div className="relative w-full mt-8 mb-3" style={{ height: 148 }}>
      <div className="w-full h-full rounded-xl overflow-hidden relative"
        style={{ background: "linear-gradient(160deg,#2D1010 0%,#150707 100%)", border: "1px solid rgba(248,242,229,0.12)" }}>
        <div className="wyg-video-scan absolute inset-0 pointer-events-none"
          style={{ opacity: 0.035, backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,1) 0px,transparent 1px,transparent 4px)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="wyg-video-play rounded-full flex items-center justify-center"
            style={{ width: 40, height: 40, background: "rgba(248,242,229,0.08)", border: "1px solid rgba(248,242,229,0.2)", animation: "blinkDot 2.5s ease-in-out infinite" }}>
            <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid rgba(184,120,46,0.95)", marginLeft: 2 }} />
          </div>
        </div>
        <div className="absolute top-2.5 inset-x-3 flex items-center justify-between" style={{ zIndex: 3 }}>
          <div className="wyg-video-title" style={{ fontSize: 8, letterSpacing: "0.25em", color: "rgba(255,243,224,0.45)" }}>CROSSROADS</div>
          <div className="wyg-video-rec" style={{ width: 6, height: 6, borderRadius: "50%", background: "#8B2E2E", animation: "blinkDot 1.3s ease-in-out infinite" }} />
        </div>

        {/* Faux "playing" layer */}
        <div className="wyg-video-playing">
          {/* Equalizer bars centered */}
          <div className="absolute inset-0 flex items-end justify-center gap-[3px] pb-8">
            {[0.6, 0.9, 0.4, 0.75, 0.5, 0.85, 0.45].map((h, i) => (
              <div
                key={i}
                className="wyg-video-eq-bar"
                style={{
                  width: 3, height: 24 * h,
                  background: "rgba(184,120,46,0.85)",
                  borderRadius: 1,
                  animation: `wyg-video-bar-eq 0.5s ease-in-out ${i * 0.07}s infinite`,
                  boxShadow: "0 0 4px rgba(184,120,46,0.45)",
                }}
              />
            ))}
          </div>
          {/* Marquee text strip */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden" style={{ height: 14 }}>
            <div
              style={{
                whiteSpace: "nowrap",
                fontSize: 8,
                letterSpacing: "0.3em",
                color: "rgba(184,120,46,0.85)",
              }}
            >
              <span style={{ display: "inline-block", animation: "wyg-video-marquee 6s linear infinite" }}>
                · YOUR BUSINESS SPOTLIGHT · TAP TO LEARN MORE · NOW PLAYING · YOUR BUSINESS SPOTLIGHT ·
              </span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="absolute bottom-0 inset-x-0 h-[2px]" style={{ background: "rgba(248,242,229,0.1)" }}>
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg,#8B2E2E,#B8782E)",
                transformOrigin: "left center",
                animation: "wyg-video-progress 4s linear infinite",
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 flex items-center justify-between"
          style={{ background: "rgba(0,0,0,0.3)" }}>
          <div style={{ fontSize: 8, color: "rgba(248,242,229,0.55)" }}>Your Business Spotlight</div>
          <div style={{ fontSize: 8, color: "rgba(248,242,229,0.35)" }}>1,234 views</div>
        </div>
      </div>
    </div>
  )
}

export function ReportVisualWide() {
  const bars = [35, 60, 42, 78, 50, 88, 65, 72, 55, 90, 68, 45]
  return (
    <div className="flex items-center gap-10 mt-6" style={{ height: 96 }}>
      <div className="flex gap-10 shrink-0">
        {[["247","Votes"],["89","Scans"],["34","Deals redeemed"],["#3","Leaderboard rank"]].map(([val, label]) => (
          <div key={label}>
            <div className="wyg-report-stat" style={{ fontSize: 24, fontWeight: 700, color: "#3A7866", lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: 9, color: "rgba(42,31,20,0.55)", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ width: 1, alignSelf: "stretch", background: "rgba(42,31,20,0.1)" }} />
      <div className="relative flex items-end gap-1 flex-1 overflow-hidden" style={{ height: 72 }}>
        {bars.map((h, i) => (
          <div key={i} className="wyg-report-bar flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: "rgba(58,120,102,0.4)",
              animation: `barPulse 2.5s ease-in-out ${i * 0.1}s infinite alternate`,
              ...({ "--bar-delay": `${i * 55}ms` } as Record<string, string>),
            }}
          />
        ))}
        <div className="wyg-report-sweep" />
      </div>
    </div>
  )
}

// ── Types & data ──────────────────────────────────────────────────────────────

type Feature = {
  id: string
  title: string
  subtitle: string
  color: string
  colSpan?: string
  Visual: () => ReactElement
  expanded: { headline: string; points: string[] }
}

const features: Feature[] = [
  {
    id: "hub",
    title: "Digital Hub listing",
    subtitle: "Always-on presence across Markham",
    color: "#1F4E3D",
    colSpan: "lg:col-span-2",
    Visual: HubVisual,
    expanded: {
      headline: "Your business, permanently listed.",
      points: [
        "A complete business profile with name, address, phone, photos, and links.",
        "Listed in the Digital Hub so local residents can discover your business by category.",
        "Ranked through community votes rather than paid ad placement.",
        "Profile setup handled after a short onboarding call.",
        "Built specifically for Markham's local business network.",
      ],
    },
  },
  {
    id: "nfc",
    title: "Custom NFC card + QR display",
    subtitle: "Physical-digital bridge, installed for you",
    color: "#2D4A6E",
    Visual: NFCVisual,
    expanded: {
      headline: "A tap or scan. Instant connection.",
      points: [
        "A custom NFC card and QR display designed, printed, and installed at your location.",
        "One-time $75 setup fee covers full installation by the founder.",
        "Customers reach your voting page instantly — no app required.",
        "Tap and scan counts surface in your monthly Impact Report.",
        "Replacements arrive within 24 hours at no additional cost.",
      ],
    },
  },
  {
    id: "deals",
    title: "Unlockable Deals",
    subtitle: "Your offer, revealed at the moment of vote",
    color: "#B8782E",
    Visual: DealsVisual,
    expanded: {
      headline: "Turn every vote into a visit.",
      points: [
        "You set the offer — a discount, a free item, or a limited promotion.",
        "The deal unlocks the moment a resident votes for your business.",
        "No coupon codes or extra steps required from the customer.",
        "Deals reset every 24 hours alongside the leaderboard.",
        "Edit or change the offer at any time from your dashboard.",
      ],
    },
  },
  {
    id: "giveaway",
    title: "Monthly gift card giveaway",
    subtitle: "Community dollars cycling back to you",
    color: "#5C2E4E",
    Visual: GiveawayVisual,
    expanded: {
      headline: "Community dollars cycling back to you.",
      points: [
        "Voters are automatically entered into a monthly prize draw.",
        "Prizes are gift cards purchased directly from member businesses.",
        "Roughly $307 per month is redistributed to local businesses at full capacity.",
        "Winners are announced on the platform, building visibility for participants.",
        "Your subscription funds the loop that drives customers back to you.",
      ],
    },
  },
  {
    id: "video",
    title: "Free marketing video",
    subtitle: "Professional content, zero effort on your end",
    color: "#8B2E2E",
    Visual: VideoVisual,
    expanded: {
      headline: "A professional spotlight on your business.",
      points: [
        "A short-form marketing video, produced and posted at no extra cost.",
        "Optimized for Instagram and TikTok, where local discovery happens.",
        "We handle scripting, filming, and posting end-to-end.",
        "Shared to Crossroads's social channels alongside your own.",
        "Content lives beyond the platform and continues to work for you.",
      ],
    },
  },
  {
    id: "report",
    title: "Monthly Impact Report",
    subtitle: "Real numbers delivered every month — Med & Lg tiers",
    color: "#3A7866",
    colSpan: "lg:col-span-3",
    Visual: ReportVisualWide,
    expanded: {
      headline: "Real numbers, every month.",
      points: [
        "Available to Medium and Large tier businesses, delivered automatically.",
        "Tracks votes, scans, deals redeemed, and leaderboard position.",
        "Designed to be readable without technical knowledge.",
        "Clear evidence of how your presence is growing in Markham.",
        "A document you can share with your team or stakeholders.",
      ],
    },
  },
]

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  // ESC key closes the modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // Ruled-paper horizontal lines — drawn as a repeating gradient
  const ruledLines =
    "repeating-linear-gradient(0deg, transparent 0, transparent 41px, rgba(184,120,46,0.18) 41px, rgba(184,120,46,0.18) 42px)"

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Backdrop — softer warm overlay */}
        <motion.div
          className="absolute inset-0 bg-[rgba(31,26,20,0.28)] backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        />

        {/* Modal panel — square sticky note, larger */}
        <motion.div
          className="relative z-10 overflow-y-auto"
          style={{
            width: "min(640px, calc(100vw - 2rem))",
            height: "min(640px, calc(100vh - 3rem))",
            background: "linear-gradient(180deg, #FFF6CF 0%, #F7E69E 100%)",
            backgroundImage: ruledLines,
            backgroundSize: "100% 42px",
            backgroundPosition: "0 56px",
            backgroundRepeat: "repeat-y",
            borderRadius: 0,
            transform: "rotate(-0.8deg)",
            fontFamily: '"Reenie Beanie", "Satoshi", cursive',
            padding: "56px 56px 56px 60px",
            boxShadow: [
              "0 1px 0 rgba(184,120,46,0.25) inset",
              "0 28px 48px -18px rgba(42,31,20,0.36)",
              "0 70px 100px -50px rgba(42,31,20,0.32)",
              "0 2px 8px rgba(42,31,20,0.14)",
            ].join(", "),
          }}
          initial={{ opacity: 0, y: 12, scale: 0.96, rotate: -2 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: -0.8 }}
          exit={{ opacity: 0, y: 12, scale: 0.96, rotate: -2 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          {/* Vertical red margin line (like real ruled paper) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0"
            style={{
              left: 44,
              width: 1.5,
              background: "rgba(192,89,79,0.32)",
            }}
          />

          {/* Decorative tape strip at top */}
          <div
            className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2"
            aria-hidden="true"
            style={{
              width: 130,
              height: 24,
              background: "linear-gradient(180deg, rgba(248,239,200,0.88) 0%, rgba(228,213,160,0.88) 100%)",
              boxShadow: "0 3px 8px rgba(42,31,20,0.22)",
              transform: "rotate(-1.8deg)",
              opacity: 0.9,
            }}
          />

          {/* Curled-corner shadow (bottom-right) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0"
            style={{
              width: 56,
              height: 56,
              background: "linear-gradient(135deg, transparent 50%, rgba(42,31,20,0.12) 50%, rgba(42,31,20,0.02) 100%)",
            }}
          />

          {/* Close button — own area, top-right */}
          <button
            onClick={onClose}
            aria-label="Close (or press Escape)"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-[rgba(42,31,20,0.55)] transition-colors hover:bg-[rgba(42,31,20,0.08)] hover:text-[rgba(42,31,20,0.85)]"
            style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}
          >
            <X size={18} />
          </button>

          {/* Content */}
          <div className="relative space-y-5 pr-10">
            {/* Eyebrow */}
            <p
              className="text-[18px] tracking-[0.18em] uppercase"
              style={{ color: feature.color, opacity: 0.82 }}
            >
              {feature.title}
            </p>

            {/* Heading */}
            <h3
              className="text-[38px] sm:text-[46px] leading-[1.05]"
              style={{ color: "#2A1F14" }}
            >
              {feature.expanded.headline}
            </h3>

            {/* Bullet list — handwritten, with extra gap below heading */}
            <ul className="space-y-3" style={{ paddingTop: 34 }}>
              {feature.expanded.points.map((pt, i) => (
                <li key={i} className="grid grid-cols-[26px_1fr] gap-3 items-start">
                  <span
                    className="mt-1 flex h-5 w-5 items-center justify-center text-[14px] shrink-0"
                    style={{
                      border: `1.5px solid ${feature.color}55`,
                      color: feature.color,
                      borderRadius: 0,
                    }}
                  >
                    ✓
                  </span>
                  <p className="min-w-0 break-words text-[25px] sm:text-[27px] leading-[1.3] text-[rgba(42,31,20,0.85)]">
                    {pt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────

function Card({ feature, onClick }: { feature: Feature; onClick: () => void }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full min-w-0 flex flex-col
      border border-[rgba(42,31,20,0.1)] hover:border-[rgba(42,31,20,0.22)] hover:-translate-y-1
      transition-[transform,border-color,box-shadow] duration-300 ease-out"
      style={{ background: "#FBF6E9", boxShadow: "0 0 0 0 transparent" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 12px 40px -10px ${feature.color}40`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
      onClick={onClick}>
      {/* top glow */}
      <div className="absolute top-0 inset-x-0 h-36 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 0%, ${feature.color}1a, transparent 65%)` }} />
      <div className="relative z-10 flex flex-col flex-1" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40, paddingBottom: 48 }}>
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="text-[15px] font-bold leading-snug" style={{ color: "#2A1F14" }}>{feature.title}</h3>
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
            border border-[rgba(42,31,20,0.15)] group-hover:border-[rgba(42,31,20,0.3)] bg-[rgba(42,31,20,0.03)] group-hover:bg-[rgba(42,31,20,0.06)]
            transition-colors">
            <ArrowUpRight size={18} className="text-[rgba(42,31,20,0.5)] group-hover:text-[rgba(42,31,20,0.85)] transition-colors" />
          </div>
        </div>
        <p className="text-[12px]" style={{ color: "rgba(42,31,20,0.55)" }}>{feature.subtitle}</p>
        <feature.Visual />
        <div className="mt-auto pt-5 flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.15em] uppercase
          transition-colors"
          style={{ color: feature.color }}>
          <span>Click to expand</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
        </div>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export function WhatYouGet() {
  const [active, setActive] = useState<Feature | null>(null)

  return (
    <Section bg="#F4ECD8">
      <style>{css}</style>

      <FadeIn>
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 24 }}>
          <div aria-hidden style={{ height: 35 }} />
          <h2 className="font-bold leading-[1.18] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#2A1F14" }}>
            Get discovered in Markham.<br />Four things, working together.
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ marginTop: 43 }}
            style={{ color: "rgba(42,31,20,0.62)" }}>
            A local directory, in-store voting, monthly giveaways, and simple
            monthly exposure — all bundled. Everything below is included at every
            tier. Click any card to learn more.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FadeIn key={f.id} delay={i * 0.06} className={`min-w-0 ${f.colSpan ?? ""}`}>
            <Card feature={f} onClick={() => setActive(f)} />
          </FadeIn>
        ))}
      </div>

      {active && <Modal feature={active} onClose={() => setActive(null)} />}
    </Section>
  )
}
