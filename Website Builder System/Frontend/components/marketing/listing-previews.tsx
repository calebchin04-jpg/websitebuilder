"use client"

import { useState, useEffect } from "react"
import { Section } from "./section"
import { FadeIn } from "./fade-in"

/* ── Inline visuals — distinct from what-you-get.tsx ── */

function ListingCardVisual() {
  const [votes, setVotes] = useState(247)
  const [ping, setPing] = useState(false)
  useEffect(() => {
    const t = setInterval(() => {
      setVotes(v => v + 1)
      setPing(true)
      setTimeout(() => setPing(false), 600)
    }, 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "4px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
        {["#C0594F", "#DFA75C", "#2F7A5F"].map((c) => (
          <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c, opacity: 0.7 }} />
        ))}
        <div style={{ flex: 1, height: 12, borderRadius: 3, background: "rgba(42,31,20,0.07)", marginLeft: 4, display: "flex", alignItems: "center", paddingLeft: 8 }}>
          <span style={{ fontSize: 7, color: "rgba(42,31,20,0.4)", letterSpacing: "0.02em" }}>gta-hub.com/markham/your-business</span>
        </div>
      </div>
      <div style={{ background: "#FFFCF2", border: "1px solid rgba(42,31,20,0.1)", borderRadius: 8, padding: "12px 14px", display: "flex", gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 6, background: "rgba(31,78,61,0.12)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 18, height: 18, borderRadius: 3, background: "rgba(31,78,61,0.4)" }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2A1F14", marginBottom: 3 }}>Your Business</div>
          <div style={{ fontSize: 9, color: "rgba(42,31,20,0.5)", marginBottom: 6 }}>123 Main St · Markham, ON</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["Directory", "Hub member"].map((tag) => (
              <div key={tag} style={{ fontSize: 7.5, background: "rgba(31,78,61,0.09)", color: "#1F4E3D", borderRadius: 20, padding: "2px 7px", fontWeight: 600 }}>{tag}</div>
            ))}
          </div>
        </div>
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <div style={{
            fontSize: 9, fontWeight: 700,
            color: ping ? "#1F4E3D" : "#B8782E",
            transform: ping ? "scale(1.25)" : "scale(1)",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}>{votes}</div>
          <div style={{ fontSize: 7, color: "rgba(42,31,20,0.4)" }}>votes</div>
        </div>
      </div>
      <div style={{ background: "rgba(42,31,20,0.03)", border: "1px solid rgba(42,31,20,0.06)", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, opacity: 0.5 }}>
        <div style={{ width: 30, height: 30, borderRadius: 5, background: "rgba(42,31,20,0.08)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ width: "55%", height: 7, borderRadius: 3, background: "rgba(42,31,20,0.1)", marginBottom: 5 }} />
          <div style={{ width: "35%", height: 6, borderRadius: 3, background: "rgba(42,31,20,0.07)" }} />
        </div>
      </div>
    </div>
  )
}

function TapVisual() {
  const [phase, setPhase] = useState<"idle" | "approaching" | "tapped" | "retracting">("idle")

  useEffect(() => {
    const run = () => {
      setPhase("approaching")
      setTimeout(() => setPhase("tapped"), 500)
      setTimeout(() => setPhase("retracting"), 900)
      setTimeout(() => setPhase("idle"), 1400)
    }
    const t = setTimeout(run, 600)
    const interval = setInterval(run, 3000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [])

  const phoneX = phase === "approaching" ? 44 : phase === "tapped" ? 56 : phase === "retracting" ? 10 : 0
  const ripple = phase === "tapped"

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 160, position: "relative" }}>
      {/* NFC card — stays still on the left */}
      <div style={{
        width: 90, height: 60, borderRadius: 8,
        background: "linear-gradient(135deg,#1F4E3D,#0F2A20)",
        border: "1px solid rgba(184,120,46,0.4)",
        flexShrink: 0, position: "relative",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "7px 9px",
        zIndex: 1,
      }}>
        <div style={{ fontSize: 6, letterSpacing: "0.3em", color: "rgba(223,167,92,0.7)", textTransform: "uppercase" }}>Crossroads</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 6, color: "rgba(223,167,92,0.45)", letterSpacing: "0.15em" }}>NFC · QR</div>
          <div style={{ width: 12, height: 12, border: "1.5px solid rgba(184,120,46,0.5)", borderRadius: 2 }} />
        </div>
      </div>

      {/* Phone — slides toward card */}
      <div style={{
        marginLeft: 28,
        position: "relative", width: 58, height: 110, borderRadius: 12,
        background: "#1A1410",
        border: `2px solid ${ripple ? "rgba(79,161,124,0.7)" : "rgba(255,255,255,0.1)"}`,
        flexShrink: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 4,
        transform: `translateX(${phoneX}px)`,
        transition: phase === "approaching"
          ? "transform 0.45s cubic-bezier(0.4,0,0.2,1), border-color 0.15s ease"
          : phase === "retracting"
          ? "transform 0.5s cubic-bezier(0.2,0.8,0.2,1), border-color 0.15s ease"
          : "transform 0.15s ease, border-color 0.15s ease",
        zIndex: 2,
      }}>
        {/* Ripple rings on tap */}
        {ripple && [1, 2].map(n => (
          <div key={n} style={{
            position: "absolute", borderRadius: "50%",
            border: "1.5px solid rgba(79,161,124,0.5)",
            animation: `nfc-ripple 0.6s ease-out ${n * 0.12}s forwards`,
            width: 40, height: 40,
          }} />
        ))}
        <div style={{ width: 20, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 6 }} />
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: ripple ? "rgba(31,78,61,0.55)" : "rgba(31,78,61,0.3)",
          border: `1px solid ${ripple ? "rgba(79,161,124,0.8)" : "rgba(31,78,61,0.5)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.15s ease",
        }}>
          <div style={{ fontSize: 8, color: "#4FA17C", fontWeight: 700, letterSpacing: "0.05em" }}>HUB</div>
        </div>
        <div style={{ fontSize: 6.5, color: ripple ? "rgba(79,161,124,0.9)" : "rgba(255,255,255,0.3)", transition: "color 0.15s ease", marginTop: 4 }}>
          {ripple ? "✓ detected" : "tap here"}
        </div>
      </div>

      <style>{`
        @keyframes nfc-ripple {
          from { transform: scale(1); opacity: 0.8; }
          to   { transform: scale(3.2); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function DealRevealVisual() {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const cycle = () => {
      setRevealed(true)
      setTimeout(() => setRevealed(false), 2000)
    }
    const t = setInterval(cycle, 3800)
    cycle()
    return () => clearInterval(t)
  }, [])
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 160, gap: 10, cursor: "pointer" }}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
    >
      {/* Coupon card */}
      <div style={{
        width: 200, borderRadius: 10, overflow: "hidden",
        border: "1px solid rgba(184,120,46,0.3)",
        background: revealed ? "linear-gradient(135deg,rgba(184,120,46,0.12),rgba(184,120,46,0.05))" : "rgba(42,31,20,0.04)",
        transition: "background 0.4s ease",
      }}>
        {/* Serrated top edge */}
        <div style={{ height: 8, background: "repeating-linear-gradient(90deg, #F4ECD8 0px, #F4ECD8 6px, transparent 6px, transparent 12px)", opacity: 0.6 }} />
        <div style={{ padding: "10px 16px 14px", textAlign: "center" }}>
          <div style={{ fontSize: 7.5, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,120,46,0.65)", marginBottom: 8, fontWeight: 600 }}>
            {revealed ? "Unlocked" : "Vote to unlock"}
          </div>
          <div style={{
            fontSize: revealed ? 26 : 13,
            fontWeight: 800,
            color: revealed ? "#B8782E" : "rgba(42,31,20,0.2)",
            letterSpacing: revealed ? "-0.02em" : "0.1em",
            transition: "all 0.4s ease",
            filter: revealed ? "none" : "blur(6px)",
          }}>
            {revealed ? "15% OFF" : "██████"}
          </div>
          <div style={{ fontSize: 8, color: revealed ? "rgba(42,31,20,0.5)" : "transparent", marginTop: 6, transition: "color 0.3s ease 0.15s" }}>your next visit · resets in 18h</div>
        </div>
        <div style={{ height: 8, background: "repeating-linear-gradient(90deg, #F4ECD8 0px, #F4ECD8 6px, transparent 6px, transparent 12px)", opacity: 0.6 }} />
      </div>
      <div style={{ fontSize: 9, color: "rgba(42,31,20,0.4)" }}>{revealed ? "Deal revealed" : "hover to preview"}</div>
    </div>
  )
}

function GiftPoolVisual() {
  const entries = ["Joe's Pizza", "Style Studio", "Your Business", "Maple Dental", "Fresh Cuts", "The Book Nook"]
  const [winner, setWinner] = useState<number | null>(null)
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    const runDraw = () => {
      setWinner(null)
      setDrawing(true)
      // Shuffle highlight rapidly then land on winner
      let flashes = 0
      const flashInterval = setInterval(() => {
        setWinner(Math.floor(Math.random() * entries.length))
        flashes++
        if (flashes >= 10) {
          clearInterval(flashInterval)
          const finalWinner = Math.floor(Math.random() * entries.length)
          setWinner(finalWinner)
          setDrawing(false)
        }
      }, 120)
    }
    runDraw()
    const t = setInterval(runDraw, 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ padding: "8px 0", height: 160, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
      <div style={{ fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(42,31,20,0.45)", marginBottom: 2 }}>
        Monthly draw — all members entered
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {entries.map((name, i) => {
          const isWinner = winner === i && !drawing
          const isFlashing = winner === i && drawing
          return (
            <div key={name} style={{
              fontSize: 8.5,
              fontWeight: isWinner ? 700 : 400,
              padding: "3px 8px",
              borderRadius: 20,
              border: `1px solid ${isWinner ? "rgba(184,120,46,0.6)" : isFlashing ? "rgba(31,78,61,0.4)" : "rgba(42,31,20,0.1)"}`,
              background: isWinner ? "rgba(184,120,46,0.12)" : isFlashing ? "rgba(31,78,61,0.08)" : "rgba(42,31,20,0.03)",
              color: isWinner ? "#B8782E" : isFlashing ? "#1F4E3D" : "rgba(42,31,20,0.55)",
              transition: "all 0.1s ease",
              whiteSpace: "nowrap",
            }}>
              {isWinner ? "🎁 " : ""}{name}
            </div>
          )
        })}
      </div>
      {winner !== null && !drawing && (
        <div style={{ marginTop: 4, fontSize: 8, color: "#B8782E", fontWeight: 600 }}>
          {entries[winner]} wins this month's gift card
        </div>
      )}
      <div style={{ marginTop: "auto", paddingTop: 6, borderTop: "1px solid rgba(42,31,20,0.08)", fontSize: 8, color: "rgba(42,31,20,0.4)" }}>
        Every member has an equal chance · drawn end of month
      </div>
    </div>
  )
}

function ReportCardVisual() {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
  const values = [42, 67, 55, 81, 74, 95]
  const [heights, setHeights] = useState(values.map(() => 0))
  const [views, setViews] = useState(1240)
  useEffect(() => {
    const t = setTimeout(() => setHeights(values), 120)
    const ticker = setInterval(() => setViews(v => v + Math.floor(Math.random() * 3) + 1), 1400)
    return () => { clearTimeout(t); clearInterval(ticker) }
  }, [])
  return (
    <div style={{ height: 160, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: 4 }}>
      <div style={{ display: "flex", gap: 16 }}>
        {[[String(views.toLocaleString()), "views"], ["89", "taps"], ["34", "deals"], ["+18%", "vs last mo"]].map(([v, l]) => (
          <div key={l}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#1F4E3D", lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ fontSize: 7.5, color: "rgba(42,31,20,0.45)", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 64 }}>
        {months.map((m, i) => (
          <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <div style={{
              width: "100%",
              height: `${heights[i]}%`,
              borderRadius: "3px 3px 0 0",
              background: i === 5
                ? "linear-gradient(180deg,#1F4E3D,#2F7A5F)"
                : "rgba(31,78,61,0.2)",
              transition: `height ${0.5 + i * 0.08}s cubic-bezier(0.2,0.8,0.2,1)`,
            }} />
            <div style={{ fontSize: 7, color: "rgba(42,31,20,0.4)" }}>{m}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 8, color: "rgba(42,31,20,0.4)", borderTop: "1px solid rgba(42,31,20,0.08)", paddingTop: 6 }}>
        March 2026 · auto-delivered on the 1st
      </div>
    </div>
  )
}

function MarketingVideoVisual() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = () => {
      setPlaying(true)
      setProgress(0)
      let p = 0
      const tick = setInterval(() => {
        p += 1.8
        setProgress(Math.min(p, 100))
        if (p >= 100) {
          clearInterval(tick)
          setTimeout(() => {
            setPlaying(false)
            setProgress(0)
          }, 600)
        }
      }, 55)
      return tick
    }
    const t = setTimeout(() => {
      const tick = start()
      const loop = setInterval(() => {
        const t2 = start()
        return () => clearInterval(t2)
      }, 7000)
      return () => { clearInterval(tick); clearInterval(loop) }
    }, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ height: 160, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {/* Video thumbnail */}
      <div style={{
        flex: 1,
        borderRadius: 6,
        background: "linear-gradient(135deg, #0F2A20 0%, #1F4E3D 60%, #2F7A5F 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
      }}>
        {/* Subtle grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 18px,rgba(255,255,255,0.03) 18px,rgba(255,255,255,0.03) 19px),repeating-linear-gradient(90deg,transparent,transparent 18px,rgba(255,255,255,0.03) 18px,rgba(255,255,255,0.03) 19px)" }} />
        {/* Business name watermark */}
        <div style={{ position: "absolute", top: 8, left: 10, fontSize: 7, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(223,167,92,0.55)", fontWeight: 700 }}>Your Business</div>
        {/* Play / pause icon */}
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: playing ? "rgba(251,246,233,0.15)" : "rgba(251,246,233,0.9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s ease",
          position: "relative", zIndex: 1,
        }}>
          {playing
            ? <div style={{ display: "flex", gap: 3 }}><div style={{ width: 3, height: 10, borderRadius: 1, background: "#FBF6E9" }} /><div style={{ width: 3, height: 10, borderRadius: 1, background: "#FBF6E9" }} /></div>
            : <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "5px 0 5px 9px", borderColor: "transparent transparent transparent #1F4E3D", marginLeft: 2 }} />
          }
        </div>
        {/* Duration badge */}
        <div style={{ position: "absolute", bottom: 7, right: 8, fontSize: 7, fontWeight: 700, color: "rgba(251,246,233,0.7)", background: "rgba(0,0,0,0.3)", borderRadius: 3, padding: "2px 5px" }}>0:45</div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 3, borderRadius: 2, background: "rgba(42,31,20,0.1)", overflow: "hidden", marginBottom: 6 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "#B8782E", borderRadius: 2, transition: "width 0.05s linear" }} />
      </div>
      <div style={{ fontSize: 8, color: "rgba(42,31,20,0.4)", borderTop: "1px solid rgba(42,31,20,0.08)", paddingTop: 6 }}>
        Professionally produced · posted to your listing
      </div>
    </div>
  )
}

const panels = [
  {
    label: "Your Hub Listing",
    description: "Your business, permanently listed in the Markham directory.",
    detail: "Your business gets a permanent page on the Markham Digital Hub — the local directory residents actually use. It shows your name, address, phone, photos, and up to two links (menu, booking, etc.). Every time someone votes for you, your vote count climbs in real time, pushing you higher in the local ranking. You stay listed for as long as you're a member — we build it for you within 24 hours of signup, no setup required on your end.",
    Visual: ListingCardVisual,
  },
  {
    label: "Your NFC Card",
    description: "Customers tap once — no app, no friction.",
    detail: "We mail you a custom-branded card to display at your counter, door, or table. Customers can tap it with their phone via NFC or scan the QR code — whichever works for them, no app required. Either way, they instantly cast a vote for your business, get entered into the monthly draw, and unlock your deal. We replace the card for free if it's ever lost or damaged.",
    Visual: TapVisual,
  },
  {
    label: "Unlockable Deal",
    description: "Your offer reveals the moment someone votes for you.",
    detail: "You set an offer — a percentage off, a free item, a bonus with purchase — and it stays hidden until a customer votes for you. The moment they tap, the deal reveals on their screen. It resets automatically after 18 hours, so customers have a reason to come back. You control what the offer is and can update it anytime through your dashboard.",
    Visual: DealRevealVisual,
  },
  {
    label: "Monthly Giveaway",
    description: "Community dollars cycling back to local businesses.",
    detail: "Every month, we take 30% of our revenue and spend it on gift cards bought directly from member businesses. Three businesses win each month — each receiving 10% of that month's pool. We give those gift cards to randomly selected voters as prizes. Every member is entered automatically at no extra cost. If your business wins, you get paid for the card, and a customer walks through your door with money to spend.",
    Visual: GiftPoolVisual,
  },
  {
    label: "Impact Report",
    description: "Real numbers delivered every month.",
    detail: "On the first of every month, you get a plain-language report showing how many people viewed your listing, how many tapped your NFC card, how many deals were unlocked, and how your numbers compare to the previous month. No dashboards to log into — it shows up in your inbox. It's the same data we use internally to track which businesses are getting the most out of the platform.",
    Visual: ReportCardVisual,
  },
  {
    label: "Free Marketing Video",
    description: "A professionally produced video for your business, on us.",
    detail: "We produce a short, professional video for your business — no equipment or prep work needed on your end. A team member visits your location, films a 45-second walkthrough, and delivers a polished final cut within a week. The video gets posted directly to your Hub listing and is yours to share anywhere. Included once per membership year.",
    Visual: MarketingVideoVisual,
  },
]

export function ListingPreviews() {
  const [active, setActive] = useState<number | null>(null)
  const [displayPanel, setDisplayPanel] = useState(0)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)

  return (
    <Section bg="#F4ECD8" style={{ paddingBottom: 5 }}>
      <FadeIn>
        <div className="mb-10" style={{ paddingTop: 6 }}>
          <h2
            className="font-bold leading-[1.18] tracking-[-0.025em] text-[#2A1F14]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Here&apos;s what&apos;s waiting for you.
          </h2>
          <p className="mt-4 text-sm text-[rgba(42,31,20,0.62)] leading-relaxed">
            Six things, working together inside your listing.
          </p>
        </div>
      </FadeIn>

      {/* Desktop strip — negative margins escape Section's 75px gutters */}
      <div className="hidden lg:flex gap-1.5 overflow-hidden" style={{ marginLeft: -75, marginRight: -75 }}>
        {panels.map((panel, i) => {
          const isActive = active === i
          return (
            <div
              key={panel.label}
              onMouseEnter={() => { setActive(i); setDisplayPanel(i) }}
              onMouseLeave={() => setActive(null)}
              style={{
                flexGrow: isActive ? 3.4 : 0.55,
                height: isActive ? 480 : 300,
                alignSelf: "flex-end",
                transition: "flex-grow 0.5s cubic-bezier(0.2,0.7,0.2,1), height 0.5s cubic-bezier(0.2,0.7,0.2,1)",
                background: "#FBF7EE",
                border: `1px solid ${isActive ? "rgba(31,78,61,0.45)" : "rgba(42,31,20,0.1)"}`,
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                minWidth: 0,
              }}
            >
              {/* Visual */}
              <div style={{
                position: "absolute",
                inset: 0,
                padding: "24px 24px 90px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <panel.Visual />
              </div>

              {/* Label bar — fixed 120px so gradient cutoff is the same across all panels */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: 120,
                background: "linear-gradient(to top, rgba(42,31,20,0.92) 50%, transparent)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "0 18px 18px",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B8782E", marginBottom: 8 }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: "#FBF6E9", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                  {panel.label}
                </div>
                <div style={{
                  fontSize: 11,
                  color: "rgba(251,246,233,0.65)",
                  marginTop: 4,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s",
                  lineHeight: 1.4,
                }}>
                  {panel.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop detail bar */}
      <div
        className="hidden lg:block"
        style={{
          marginLeft: -75,
          marginRight: -75,
          maxHeight: active !== null ? 240 : 0,
          opacity: active !== null ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.2,0.7,0.2,1), opacity 0.25s ease",
          background: "rgba(42,31,20,0.88)",
        }}
      >
        <div style={{ padding: "22px 75px 26px", display: "flex", gap: 40, alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, width: 140 }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8782E", fontWeight: 700, lineHeight: 1.4 }}>
              {panels[displayPanel].label}
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: "rgba(251,246,233,0.78)", lineHeight: 1.7, flex: 1 }}>
            {panels[displayPanel].detail}
          </p>
        </div>
      </div>

      {/* Mobile stack */}
      <div className="flex lg:hidden flex-col gap-4">
        {panels.map((panel, i) => (
          <div key={panel.label} style={{ background: "#FBF7EE", border: "1px solid rgba(42,31,20,0.1)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "20px 20px 0" }}>
              <panel.Visual />
            </div>
            <div style={{ padding: "16px 20px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#B8782E", flexShrink: 0 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#2A1F14", letterSpacing: "-0.01em" }}>{panel.label}</div>
              </div>
              <div style={{ fontSize: 13, color: "rgba(42,31,20,0.62)", lineHeight: 1.5 }}>{panel.description}</div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: "#1F4E3D",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                {mobileExpanded === i ? "Show less" : "Learn more"}
                <span style={{ fontSize: 9 }}>{mobileExpanded === i ? "▲" : "▼"}</span>
              </button>
              <div style={{
                maxHeight: mobileExpanded === i ? 400 : 0,
                opacity: mobileExpanded === i ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.2,0.7,0.2,1), opacity 0.3s ease",
              }}>
                <p style={{ margin: "12px 0 0", fontSize: 13, color: "rgba(42,31,20,0.7)", lineHeight: 1.65 }}>
                  {panel.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
