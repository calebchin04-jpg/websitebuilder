"use client"

import { FadeIn } from "./fade-in"

const SPOTS_REMAINING = 23

const bullets = [
  "First 2 months free — no card, no commitment",
  "After the trial, Founding 30 rate is locked in forever",
  "One-time $20 setup fee — only charged if you continue past the trial",
  "No contracts · Cancel anytime",
  "First 15 spots: first-come-first-served · Remaining 15: by application",
]

const tiers = [
  { name: "Small",  note: "listing · 1 link",            regular: "$10", founding: "$5"     },
  { name: "Medium", note: "photo · 2 links · report",     regular: "$50", founding: "$25"    },
  { name: "Large",  note: "gallery · unlimited links",    regular: "$75", founding: "$37.50" },
]

export function Founding30() {
  return (
    <section
      style={{
        backgroundColor: "#FBF6E9",
        position: "relative",
        overflow: "hidden",
        paddingLeft: 75,
        paddingRight: 75,
        paddingTop: 80,
        paddingBottom: 96,
      }}
    >
      {/* Radial vignette — forest green glow at bottom */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(31,78,61,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>

        {/* ── Headline block ── */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>

            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#2A1F14",
                marginBottom: 0,
              }}
            >
              Be one of the first 30.
              <br />
              <span style={{ color: "#B8782E" }}>Keep the discount forever.</span>
            </h2>

            <p style={{ marginTop: 20, fontSize: 16, color: "rgba(42,31,20,0.58)", lineHeight: 1.6, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              2 months completely free, then 50% off your tier for life. No commitment — cancel anytime.
            </p>
          </div>
        </FadeIn>

        {/* ── Card + bullets row ── */}
        <FadeIn delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* LEFT — bullets */}
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(42,31,20,0.4)", marginBottom: 20 }}>
                What&apos;s included
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {bullets.map((bullet) => (
                  <li key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 17, color: "rgba(42,31,20,0.7)", lineHeight: 1.55 }}>
                    <span style={{ color: "#B8782E", flexShrink: 0, marginTop: 1, fontWeight: 700, fontSize: 18 }}>—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — pricing card */}
            <div
              style={{
                background: "#FFFCF2",
                border: "1px solid rgba(42,31,20,0.12)",
                borderRadius: 16,
                padding: "32px 32px 28px",
                boxShadow: "0 8px 40px rgba(31,78,61,0.1), 0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8782E", marginBottom: 20 }}>
                Founding 30 rate · locked for life
              </h3>

              {/* Pricing rows */}
              <div style={{ border: "1px solid rgba(42,31,20,0.1)", borderRadius: 10, overflow: "hidden", marginBottom: 28 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.8fr", padding: "10px 18px", background: "rgba(42,31,20,0.03)", borderBottom: "1px solid rgba(42,31,20,0.08)", gap: 8 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(42,31,20,0.45)" }}>Tier</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(42,31,20,0.45)", textAlign: "right" }}>Regular</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8782E", textAlign: "right" }}>Your rate</span>
                </div>
                {tiers.map((tier, i) => (
                  <div
                    key={tier.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.4fr 0.8fr 0.8fr",
                      padding: "14px 18px",
                      gap: 8,
                      borderBottom: i < tiers.length - 1 ? "1px solid rgba(42,31,20,0.07)" : "none",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#2A1F14" }}>{tier.name}</div>
                      <div style={{ fontSize: 10, color: "rgba(42,31,20,0.42)", marginTop: 2 }}>{tier.note}</div>
                    </div>
                    <span style={{ fontSize: 13, textDecoration: "line-through", color: "rgba(42,31,20,0.38)", textAlign: "right" }}>{tier.regular}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#1F4E3D", textAlign: "right" }}>{tier.founding}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  background: "#1F4E3D",
                  color: "#FBF6E9",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "20px 0",
                  borderRadius: 10,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "background 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#2A6651"
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(31,78,61,0.3)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1F4E3D"
                  ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"
                }}
              >
                Reserve My Free 2-Month Trial →
              </a>

              <p style={{ marginTop: 14, fontSize: 11, textAlign: "center", color: "rgba(42,31,20,0.45)", lineHeight: 1.5 }}>
                No card required · We confirm your spot before anything is charged
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
