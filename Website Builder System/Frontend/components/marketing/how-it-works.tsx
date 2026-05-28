"use client"

import { useEffect, useRef, useState } from "react"

const STEPS = [
  {
    num: 1,
    tag: "Goes Live Within 24 Hrs",
    heading: "Your business goes live on the Digital Hub.",
    body: "A permanent listing on the interactive Markham directory — name, address, phone, photos, and links. Visible to every resident who visits the platform.",
    accent: false,
  },
  {
    num: 2,
    tag: "We Handle Everything",
    heading: "Flyers land in 10,000 homes. NFC card installed.",
    body: "A professionally designed brochure reaches 40,000 residents with your QR code. We install a custom NFC card in your store — customers tap once to vote, no app needed.",
    accent: false,
  },
  {
    num: 3,
    tag: "The Loop Closes",
    heading: "Real customers come back.",
    body: "Every vote unlocks an exclusive deal from your business on the spot. We use 30% of our monthly revenue to buy gift cards directly from you — then give them away to voters as prizes.",
    accent: true,
  },
  {
    num: 4,
    tag: "No Payment Required",
    heading: "Sign up and choose your tier.",
    body: "Pick Small ($5), Medium ($25), or Large ($37.50) per month as a Founding 30 member. Your 2-month free trial starts immediately.",
    accent: false,
  },
]

export function HowItWorks() {
  const outerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [tierSel, setTierSel] = useState(1)

  useEffect(() => {
    function onScroll() {
      const el = outerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = el.offsetHeight - window.innerHeight
      if (scrolled <= 0) { setActiveStep(0); return }
      if (scrolled >= scrollable) { setActiveStep(STEPS.length - 1); return }
      const step = Math.floor((scrolled / scrollable) * STEPS.length)
      setActiveStep(Math.min(STEPS.length - 1, step))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const fill = document.getElementById("hiw-stat-fill")
    if (!fill) return
    if (activeStep === 2) {
      setTimeout(() => fill.classList.add("hiw-go"), 500)
    } else {
      fill.classList.remove("hiw-go")
    }
  }, [activeStep])

  const step = STEPS[activeStep]

  return (
    <div
      ref={outerRef}
      id="how-it-works"
      className="hiw-outer border-t border-[rgba(42,31,20,0.1)]"
      style={{ height: `${STEPS.length * 100 + 100}vh` }}
    >
      <style>{`
        .hiw-outer { background: #FBF6E9; }

        /* ── Sticky panel ── */
        .hiw-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #FBF6E9;
        }

        /* ── Intro ── */
        .hiw-intro {
          flex-shrink: 0;
          width: 100%;
          padding: 2.5rem 90px 1.5rem;
          text-align: center;
        }
        .hiw-eyebrow {
          font-size: 0.65rem; letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(42,31,20,0.5); margin-bottom: 0.75rem;
        }
        .hiw-intro h2 {
          font-size: clamp(1.6rem,3vw,2.4rem); font-weight: 700;
          letter-spacing: -0.025em; color: #2A1F14; line-height: 1.1;
        }

        /* ── Two-column layout ── */
        .hiw-wrap {
          display: flex;
          flex: 1;
          min-height: 0;
          padding: 0 90px 2.5rem;
          gap: 5rem;
          align-items: center;
        }

        /* LEFT */
        .hiw-left {
          width: 520px; flex-shrink: 0;
          display: flex; align-items: center;
          height: 100%;
        }
        .hiw-browser {
          width: 100%;
          background: #FFFCF2;
          border: 1px solid rgba(42,31,20,0.12);
          border-radius: 14px; overflow: hidden;
          box-shadow: 0 24px 60px rgba(31,78,61,0.18);
        }
        .hiw-bar {
          background: #EDE3CB; padding: 12px 17px;
          display: flex; align-items: center; gap: 7px;
          border-bottom: 1px solid rgba(42,31,20,0.1);
        }
        .hiw-dot { width:12px; height:12px; border-radius:50%; }
        .hiw-url {
          flex:1; margin-left:9px;
          background: rgba(42,31,20,0.05); border-radius:5px;
          padding: 5px 12px; font-size:0.8rem;
          color: rgba(42,31,20,0.55); letter-spacing:0.02em;
        }
        .hiw-screen { height: 420px; position: relative; overflow: hidden; }

        /* visual states */
        .hiw-vstate {
          position: absolute; inset: 0; padding: 1.8rem;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.45s ease, transform 0.45s ease;
          pointer-events: none;
        }
        .hiw-vstate.hiw-on { opacity:1; transform:translateY(0); pointer-events:auto; }

        /* VS1: listing */
        .hiw-listing-head { display:flex; align-items:center; gap:0.95rem; margin-bottom:1.2rem; }
        .hiw-listing-icon {
          width:54px; height:54px; border-radius:12px; flex-shrink:0;
          background: linear-gradient(135deg,#2A6651,#1F4E3D);
          display:flex; align-items:center; justify-content:center; font-size:1.55rem;
        }
        .hiw-listing-name { font-weight:600; font-size:1.1rem; color:#2A1F14; }
        .hiw-live-badge {
          display:inline-flex; align-items:center; gap:5px;
          background:rgba(31,78,61,0.1); border:1px solid rgba(31,78,61,0.25);
          border-radius:20px; padding:3px 11px;
          font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase;
          color:#1F4E3D; margin-top:3px;
        }
        .hiw-live-dot {
          width:6px; height:6px; background:#1F4E3D; border-radius:50%;
          animation: hiw-blink 2s infinite;
        }
        @keyframes hiw-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hiw-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-bottom:1.2rem; }
        .hiw-info-cell { background:#F4ECD8; border-radius:8px; padding:0.6rem 0.85rem; }
        .hiw-info-lbl { font-size:0.68rem; color:rgba(42,31,20,0.5); text-transform:uppercase; letter-spacing:0.06em; }
        .hiw-info-val { font-size:0.92rem; color:#2A1F14; margin-top:1px; }
        .hiw-vis-bar {
          background:#F4ECD8; border-radius:8px; padding:0.72rem 0.95rem;
          display:flex; align-items:center; justify-content:space-between;
        }
        .hiw-vis-lbl { font-size:0.82rem; color:rgba(42,31,20,0.55); }
        .hiw-vis-val { font-size:0.88rem; color:#1F4E3D; font-weight:600; }

        /* VS2: hub + NFC */
        .hiw-s3-lbl { font-size:0.82rem; color:rgba(42,31,20,0.55); margin-bottom:1.05rem; }
        .hiw-s3-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; }
        .hiw-hub-wrap { border-radius:7px; overflow:hidden; aspect-ratio:3/4; background:#e8e3db; display:block; }
        .hiw-nfc-wrap {
          border:1px solid rgba(42,31,20,0.12); border-radius:9px;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:2px; position:relative; overflow:hidden; aspect-ratio:3/4; background:#F4ECD8;
        }
        .hiw-nfc-wrap::after {
          content:''; position:absolute; inset:0;
          background:rgba(31,78,61,0.1); opacity:0; pointer-events:none;
          animation: hiw-tap-flash 3.5s ease-out infinite; animation-delay:1.35s;
        }
        @keyframes hiw-tap-flash { 0%,100%{opacity:0} 2%{opacity:1} 18%{opacity:0} }
        .hiw-phone {
          width:33px; height:57px; background:#2A1F14; border-radius:7px;
          border:1.5px solid #524439; position:relative;
          animation: hiw-phone-drop 3.5s cubic-bezier(0.4,0,0.2,1) infinite;
          flex-shrink:0; z-index:2;
        }
        .hiw-phone::before {
          content:''; position:absolute; top:5px; left:50%; transform:translateX(-50%);
          width:12px; height:2px; background:#4A3E33; border-radius:1px;
        }
        .hiw-phone-screen {
          position:absolute; top:11px; left:2px; right:2px; bottom:5px;
          background:#0a1740; border-radius:4px;
          display:flex; align-items:center; justify-content:center;
        }
        .hiw-nfc-icon {
          width:14px; height:14px; border:1.5px solid rgba(184,120,46,0.85); border-radius:50%; position:relative;
        }
        .hiw-nfc-icon::before {
          content:''; position:absolute; inset:-5px;
          border:1px solid rgba(184,120,46,0.5); border-radius:50%;
        }
        @keyframes hiw-phone-drop {
          0%   { transform:translateY(-31px); }
          36%  { transform:translateY(6px); }
          58%  { transform:translateY(6px); }
          90%  { transform:translateY(-31px); }
          100% { transform:translateY(-31px); }
        }
        .hiw-waves { width:60px; height:24px; position:relative; flex-shrink:0; }
        .hiw-wave {
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%) scale(0.2);
          border:1px solid #B8782E; border-radius:50%; opacity:0;
          animation: hiw-wave-pop 3.5s ease-out infinite;
        }
        .hiw-wave:nth-child(1){ width:14px; height:14px; animation-delay:1.35s; }
        .hiw-wave:nth-child(2){ width:28px; height:28px; animation-delay:1.52s; }
        .hiw-wave:nth-child(3){ width:47px; height:47px; animation-delay:1.70s; }
        @keyframes hiw-wave-pop {
          0%  { opacity:0; transform:translate(-50%,-50%) scale(0.2); }
          10% { opacity:1; }
          65% { opacity:0; transform:translate(-50%,-50%) scale(1.1); }
          100%{ opacity:0; transform:translate(-50%,-50%) scale(1.1); }
        }
        .hiw-card {
          width:83px; height:52px;
          background:linear-gradient(135deg,#0F2A20,#1F4E3D);
          border-radius:6px; border:1px solid rgba(184,120,46,0.4);
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          box-shadow:0 0 14px rgba(31,78,61,0.2); position:relative; overflow:hidden;
        }
        .hiw-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:14px;
          background:rgba(184,120,46,0.12);
        }
        .hiw-card span {
          font-size:0.57rem; letter-spacing:0.07em; text-transform:uppercase;
          color:#DFA75C; font-weight:600; white-space:nowrap;
        }
        .hiw-card-lbl {
          font-size:0.62rem; color:rgba(42,31,20,0.55);
          text-transform:uppercase; letter-spacing:0.07em; flex-shrink:0; margin-top:5px;
        }
        .hiw-reach {
          grid-column:1/-1; text-align:center;
          font-size:0.85rem; color:rgba(42,31,20,0.55);
        }
        .hiw-reach strong { color:#1F4E3D; font-size:1.18rem; }

        /* VS3: customers */
        .hiw-s4-lbl { font-size:0.82rem; color:rgba(42,31,20,0.55); margin-bottom:1.05rem; }
        .hiw-review {
          background:#F4ECD8; border-radius:9px; padding:0.82rem 0.95rem;
          display:flex; gap:0.82rem; margin-bottom:0.6rem;
        }
        .hiw-avatar {
          width:36px; height:36px; border-radius:50%; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          font-size:0.82rem; font-weight:600;
        }
        .hiw-stars { font-size:0.77rem; color:#B8782E; margin-bottom:2px; }
        .hiw-rtext { font-size:0.86rem; color:rgba(42,31,20,0.65); }
        .hiw-stat { background:#F4ECD8; border-radius:9px; padding:0.77rem 0.95rem; margin-top:0.6rem; }
        .hiw-stat-lbl { font-size:0.7rem; color:rgba(42,31,20,0.5); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:7px; }
        .hiw-stat-bar { height:6px; background:rgba(42,31,20,0.1); border-radius:3px; overflow:hidden; }
        .hiw-stat-fill { height:100%; width:0; background:linear-gradient(90deg,#1F4E3D,#3A7866); border-radius:3px; transition:width 1s ease 0.3s; }
        .hiw-stat-fill.hiw-go { width:72%; }
        .hiw-stat-num { font-size:0.85rem; color:#1F4E3D; margin-top:6px; }

        /* VS4: signup */
        .hiw-s1-title { font-size:1.18rem; font-weight:600; color:#2A1F14; margin-bottom:5px; }
        .hiw-s1-sub { font-size:0.85rem; color:rgba(42,31,20,0.55); margin-bottom:1.18rem; }
        .hiw-input {
          display:block; width:100%; box-sizing:border-box;
          background:#F4ECD8; border:1px solid rgba(42,31,20,0.15); border-radius:7px;
          padding:0.65rem 0.95rem; font-size:0.88rem; color:#2A1F14; margin-bottom:0.7rem;
          outline:none; font-family:inherit; transition:border-color 0.2s;
        }
        .hiw-input::placeholder { color:rgba(42,31,20,0.35); }
        .hiw-input:focus { border-color:#1F4E3D; }
        .hiw-tiers { display:flex; gap:0.6rem; margin-bottom:0.9rem; }
        .hiw-tier {
          flex:1; background:#F4ECD8; border:1px solid rgba(42,31,20,0.15);
          border-radius:9px; padding:0.82rem 0.6rem; text-align:center;
          cursor:pointer; transition:border-color 0.2s, background 0.2s;
        }
        .hiw-tier:hover { border-color:rgba(31,78,61,0.35); }
        .hiw-tier.sel { border-color:#1F4E3D; background:rgba(31,78,61,0.07); }
        .hiw-tier-price { font-size:1.18rem; font-weight:600; color:#2A1F14; }
        .hiw-tier-size { font-size:0.71rem; color:rgba(42,31,20,0.55); }
        .hiw-cta {
          width:100%; background:#1F4E3D; color:#FBF6E9;
          border:none; border-radius:8px; padding:0.77rem;
          font-size:0.95rem; font-weight:600; cursor:pointer; text-align:center;
          transition:background 0.2s, box-shadow 0.2s;
        }
        .hiw-cta:hover { background:#2A6651; box-shadow: 0 12px 32px rgba(31,78,61,0.25); }

        /* RIGHT: single step, animated in */
        .hiw-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }
        @keyframes hiw-step-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hiw-step-text {
          animation: hiw-step-in 0.4s ease forwards;
        }
        .hiw-step-circle {
          width:28px; height:28px; border-radius:50%;
          background:#1F4E3D; color:#FBF6E9; border:1px solid #1F4E3D;
          display:inline-flex; align-items:center; justify-content:center;
          font-size:0.7rem; font-weight:600; margin-bottom:1rem;
        }
        .hiw-pill {
          display:inline-flex; align-items:center;
          border:1px solid rgba(31,78,61,0.35); border-radius:30px;
          padding:3px 11px; font-size:0.62rem; letter-spacing:0.1em;
          text-transform:uppercase; color:#1F4E3D; background:rgba(31,78,61,0.06);
          margin-bottom:1.2rem;
        }
        .hiw-step-heading {
          font-size:clamp(1.5rem,2.5vw,2.2rem); font-weight:700;
          letter-spacing:-0.025em; line-height:1.2; margin-bottom:0.8rem; color:#2A1F14;
        }
        .hiw-step-heading.accent { color:#1F4E3D; }
        .hiw-step-body { font-size:0.95rem; color:rgba(42,31,20,0.65); line-height:1.75; max-width:460px; }

        /* Progress dots */
        .hiw-progress {
          display: flex;
          gap: 8px;
          margin-top: 2.5rem;
          align-items: center;
        }
        .hiw-dot-ind {
          height: 6px; width: 6px;
          border-radius: 3px;
          background: rgba(42,31,20,0.15);
          transition: all 0.35s ease;
        }
        .hiw-dot-ind.active {
          background: #1F4E3D;
          width: 24px;
        }
      `}</style>

      <div className="hiw-sticky">
        {/* Intro */}
        <div className="hiw-intro">
          <div className="hiw-eyebrow">How it works</div>
          <h2>From sign-up to foot traffic in four steps.</h2>
        </div>

        <div className="hiw-wrap">
          {/* LEFT — browser mockup */}
          <div className="hiw-left">
            <div className="hiw-browser">
              <div className="hiw-bar">
                <div className="hiw-dot" style={{ background: "#ff5f57" }} />
                <div className="hiw-dot" style={{ background: "#febc2e" }} />
                <div className="hiw-dot" style={{ background: "#28c840" }} />
                <div className="hiw-url">gtahub.ca / join</div>
              </div>
              <div className="hiw-screen">

                {/* VS1 — listing live */}
                <div className={`hiw-vstate${activeStep === 0 ? " hiw-on" : ""}`}>
                  <div className="hiw-listing-head">
                    <div className="hiw-listing-icon">🏪</div>
                    <div>
                      <div className="hiw-listing-name">Your Business</div>
                      <div className="hiw-live-badge"><div className="hiw-live-dot" />Now Live</div>
                    </div>
                  </div>
                  <div className="hiw-info-grid">
                    <div className="hiw-info-cell">
                      <div className="hiw-info-lbl">Address</div>
                      <div className="hiw-info-val">123 Main St</div>
                    </div>
                    <div className="hiw-info-cell">
                      <div className="hiw-info-lbl">Phone</div>
                      <div className="hiw-info-val">(416) 555-0199</div>
                    </div>
                    <div className="hiw-info-cell">
                      <div className="hiw-info-lbl">Photos</div>
                      <div className="hiw-info-val" style={{ color: "#1F4E3D" }}>6 uploaded</div>
                    </div>
                    <div className="hiw-info-cell">
                      <div className="hiw-info-lbl">Links</div>
                      <div className="hiw-info-val" style={{ color: "#1F4E3D" }}>Website + Maps</div>
                    </div>
                  </div>
                  <div className="hiw-vis-bar">
                    <div className="hiw-vis-lbl">Visible to residents</div>
                    <div className="hiw-vis-val">40,000+ ↑</div>
                  </div>
                </div>

                {/* VS2 — hub flyer + NFC */}
                <div className={`hiw-vstate${activeStep === 1 ? " hiw-on" : ""}`}>
                  <div className="hiw-s3-lbl">Deployed to your area this week</div>
                  <div className="hiw-s3-grid">
                    <div className="hiw-hub-wrap">
                      <svg viewBox="0 0 140 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                        <defs>
                          <radialGradient id="hiw-bg-g" cx="50%" cy="48%" r="70%">
                            <stop offset="0%"   stopColor="#ece5d5" />
                            <stop offset="100%" stopColor="#b8af9d" />
                          </radialGradient>
                          <clipPath id="hiw-hub-clip"><circle cx="70" cy="90" r="22" /></clipPath>
                        </defs>
                        <rect width="140" height="180" fill="url(#hiw-bg-g)" rx="3" />
                        <text x="70" y="14" textAnchor="middle" fontFamily="'Arial Black',sans-serif" fontSize="7.5" fontWeight="900" fill="#2A1F14">Markham</text>
                        <text x="70" y="24" textAnchor="middle" fontFamily="'Arial Black',sans-serif" fontSize="7.5" fontWeight="900" fill="#2A1F14">Community Hub</text>
                        <text transform="translate(7,58) rotate(-90)"   textAnchor="middle" fontFamily="sans-serif" fontSize="4" letterSpacing="1.1" fontWeight="700" fill="rgba(42,31,20,0.65)">EXPLORE</text>
                        <text transform="translate(133,58) rotate(90)"  textAnchor="middle" fontFamily="sans-serif" fontSize="4" letterSpacing="1.1" fontWeight="700" fill="rgba(42,31,20,0.65)">WELLNESS</text>
                        <text transform="translate(7,128) rotate(-90)"  textAnchor="middle" fontFamily="sans-serif" fontSize="4" letterSpacing="1.1" fontWeight="700" fill="rgba(42,31,20,0.65)">SERVICE</text>
                        <text transform="translate(133,128) rotate(90)" textAnchor="middle" fontFamily="sans-serif" fontSize="4" letterSpacing="1.1" fontWeight="700" fill="rgba(42,31,20,0.65)">OFFICE</text>
                        <line x1="70" y1="90" x2="21" y2="38"  stroke="#8B2E2E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="40" y2="38"  stroke="#8B2E2E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="21" y2="56"  stroke="#8B2E2E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="100" y2="38" stroke="#1F4E3D" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="119" y2="38" stroke="#1F4E3D" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="119" y2="56" stroke="#1F4E3D" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="21" y2="118" stroke="#2D4A6E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="40" y2="136" stroke="#2D4A6E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="21" y2="154" stroke="#2D4A6E" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="100" y2="118" stroke="#5A4A3A" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="119" y2="136" stroke="#5A4A3A" strokeWidth="0.9" opacity="0.7" />
                        <line x1="70" y1="90" x2="100" y2="154" stroke="#5A4A3A" strokeWidth="0.9" opacity="0.7" />
                        {[[21,38],[40,38],[21,56],[40,56],[21,74],[40,74]].map(([x,y],i)=>(
                          <polygon key={i} transform={`translate(${x},${y})`} points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill={i%2===0?"#A0463F":"#8B2E2E"} stroke="#6B2D2A" strokeWidth="0.8"/>
                        ))}
                        {[[100,38],[119,38],[100,56],[119,56],[100,74],[119,74]].map(([x,y],i)=>(
                          <polygon key={i} transform={`translate(${x},${y})`} points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill={i%2===0?"#3A7866":"#1F4E3D"} stroke="#0F2A20" strokeWidth="0.8"/>
                        ))}
                        {[[21,118],[40,118],[21,136],[40,136],[21,154],[40,154]].map(([x,y],i)=>(
                          <polygon key={i} transform={`translate(${x},${y})`} points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill={i%2===0?"#3F5B7C":"#2D4A6E"} stroke="#1F3552" strokeWidth="0.8"/>
                        ))}
                        {[[100,118],[119,118],[100,136],[119,136],[100,154],[119,154]].map(([x,y],i)=>(
                          <polygon key={i} transform={`translate(${x},${y})`} points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill={i%2===0?"#7A6850":"#5A4A3A"} stroke="#3A2E1F" strokeWidth="0.8"/>
                        ))}
                        <circle cx="70" cy="90" r="22" fill="#2A1F14" />
                        <rect x="48" y="68" width="22" height="22" fill="#8B2E2E" clipPath="url(#hiw-hub-clip)" opacity="0.85" />
                        <rect x="70" y="68" width="22" height="22" fill="#1F4E3D" clipPath="url(#hiw-hub-clip)" opacity="0.85" />
                        <rect x="48" y="90" width="22" height="22" fill="#2D4A6E" clipPath="url(#hiw-hub-clip)" opacity="0.85" />
                        <rect x="70" y="90" width="22" height="22" fill="#5A4A3A" clipPath="url(#hiw-hub-clip)" opacity="0.85" />
                        <circle cx="70" cy="90" r="22" fill="rgba(42,31,20,0.5)" />
                        <rect x="57" y="77" width="26" height="26" fill="#FBF6E9" stroke="#ddd" strokeWidth="0.3" />
                        <rect x="58.5" y="78.5" width="9" height="9" fill="#2A1F14" /><rect x="59.5" y="79.5" width="7" height="7" fill="#FBF6E9" /><rect x="60.5" y="80.5" width="5" height="5" fill="#2A1F14" />
                        <rect x="74.5" y="78.5" width="9" height="9" fill="#2A1F14" /><rect x="75.5" y="79.5" width="7" height="7" fill="#FBF6E9" /><rect x="76.5" y="80.5" width="5" height="5" fill="#2A1F14" />
                        <rect x="58.5" y="94.5" width="9" height="9" fill="#2A1F14" /><rect x="59.5" y="95.5" width="7" height="7" fill="#FBF6E9" /><rect x="60.5" y="96.5" width="5" height="5" fill="#2A1F14" />
                        <rect x="74.5" y="94.5" width="2" height="2" fill="#2A1F14" /><rect x="77.5" y="94.5" width="2" height="2" fill="#2A1F14" />
                        <rect x="80.5" y="95.5" width="2" height="2" fill="#2A1F14" /><rect x="74.5" y="97.5" width="4" height="2" fill="#2A1F14" />
                        <rect x="80.5" y="98.5" width="2" height="2" fill="#2A1F14" /><rect x="76.5" y="100.5" width="2" height="2" fill="#2A1F14" />
                        <rect x="79.5" y="101.5" width="2" height="2" fill="#2A1F14" /><rect x="74.5" y="101.5" width="2" height="2" fill="#2A1F14" />
                      </svg>
                    </div>
                    <div className="hiw-nfc-wrap">
                      <div className="hiw-phone">
                        <div className="hiw-phone-screen"><div className="hiw-nfc-icon" /></div>
                      </div>
                      <div className="hiw-waves">
                        <div className="hiw-wave" /><div className="hiw-wave" /><div className="hiw-wave" />
                      </div>
                      <div className="hiw-card"><span>Tap to Vote</span></div>
                      <div className="hiw-card-lbl">No app needed</div>
                    </div>
                    <div className="hiw-reach">Reaching <strong>40,000</strong> residents</div>
                  </div>
                </div>

                {/* VS3 — customers return */}
                <div className={`hiw-vstate${activeStep === 2 ? " hiw-on" : ""}`}>
                  <div className="hiw-s4-lbl">Customer activity this month</div>
                  <div className="hiw-review">
                    <div className="hiw-avatar" style={{ background: "rgba(31,78,61,0.12)", color: "#1F4E3D" }}>SK</div>
                    <div>
                      <div className="hiw-stars">★★★★★</div>
                      <div className="hiw-rtext">Won a gift card — came back and brought my family!</div>
                    </div>
                  </div>
                  <div className="hiw-review">
                    <div className="hiw-avatar" style={{ background: "rgba(45,74,110,0.15)", color: "#2D4A6E" }}>MR</div>
                    <div>
                      <div className="hiw-stars">★★★★★</div>
                      <div className="hiw-rtext">Tapped NFC, deal unlocked instantly. Love this.</div>
                    </div>
                  </div>
                  <div className="hiw-stat">
                    <div className="hiw-stat-lbl">Return visit rate this month</div>
                    <div className="hiw-stat-bar">
                      <div className="hiw-stat-fill" id="hiw-stat-fill" />
                    </div>
                    <div className="hiw-stat-num">+72% repeat customers</div>
                  </div>
                </div>

                {/* VS4 — sign up */}
                <div className={`hiw-vstate${activeStep === 3 ? " hiw-on" : ""}`}>
                  <div className="hiw-s1-title">Join as a Founding Member</div>
                  <div className="hiw-s1-sub">2-month free trial · no card required</div>
                  <input className="hiw-input" type="text" placeholder="Business name" />
                  <input className="hiw-input" type="email" placeholder="Email address" />
                  <div className="hiw-tiers">
                    {[{ price: "$5", size: "Small" }, { price: "$25", size: "Medium" }, { price: "$37.50", size: "Large" }].map((t, i) => (
                      <button key={i} className={`hiw-tier${tierSel === i ? " sel" : ""}`} onClick={() => setTierSel(i)}>
                        <div className="hiw-tier-price">{t.price}</div>
                        <div className="hiw-tier-size">{t.size}</div>
                      </button>
                    ))}
                  </div>
                  <button className="hiw-cta">Start free trial →</button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT — single step text, keyed to re-animate on change */}
          <div className="hiw-right">
            <div key={activeStep} className="hiw-step-text">
              <div className="hiw-step-circle">{step.num}</div>
              <div className="hiw-pill">{step.tag}</div>
              <h3 className={`hiw-step-heading${step.accent ? " accent" : ""}`}>{step.heading}</h3>
              <p className="hiw-step-body">{step.body}</p>
            </div>
            <div className="hiw-progress">
              {STEPS.map((_, i) => (
                <div key={i} className={`hiw-dot-ind${i === activeStep ? " active" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
