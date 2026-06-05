# Examples

Two examples in document-comparison format. Example 1 continues the Marcus Pro Wash thread. Example 2 uses a new business (a luxury aesthetic clinic) to show a different visual context and a send-back scenario.

---

## Example 1 — Marcus Pro Wash: Strong input → Strong design system

**Business:** Marcus Pro Wash (Austin pressure washing)
**Visual register:** 45% approachable, 55% polished professional
**Input:** Wireframe PRD is complete. Discovery provided 2 visual references, banned styles, real photography available, animation level: subtle.

---

### Critique of wireframe PRD

> **Overall quality:** Strong
>
> `[COMPONENT]` Testimonial section is described as "review cards" but doesn't specify whether they include reviewer photos or just names. Assumed: name + review text + star rating. No photos available. Labeled assumption.
>
> `[TRUST]` Before/after gallery is described as a "grid" in the wireframe but before/afters are typically stronger as a slider on individual work items. Decision: define slider component as part of design system, not a static grid.
>
> No send-back required.

---

### Visual direction translation

| Input | Translated rule |
|---|---|
| "No blue gradient hero sections that every contractor uses" | No gradient fills on hero or any section background. Flat color or real photo only. |
| "Marcus on-site, not stock photos" | Hero must feature Marcus in work context. No stock photography anywhere on the site. |
| "Clean layout, big photos, minimal text" | Sections use generous whitespace. Photography is full-bleed or large-format. Copy is concise — no long paragraphs. |
| "Bold and confident, not aggressive" | Primary color is strong and deliberate, not pastel. Typography uses confident weight (700+). No softening decorative elements. |
| "No clip-art icons, no fake-looking photos" | Icons are minimal and used only for genuine function (not abstract values). Photography = Marcus + real work only. |
| Reference: Site A (clean contractor site) | Principle extracted: "Proof-first above fold. CTA visible immediately. Large photography. Minimal nav."] |

**Visual register:** Positioned at 50% — polished enough to justify a premium price, approachable enough for a homeowner who's never hired a pressure washer.

---

### Color system

| Role | Direction |
|---|---|
| Primary | Deep navy-blue or slate blue family. Strong contrast on white. Communicates reliability and expertise. Not tech-blue. |
| Primary Hover | 12–15% darker than primary. No glow. |
| Neutral Base | Clean white or warm white (#fafaf8 direction). |
| Neutral Mid | Very light warm gray or light beige. Card backgrounds, alternating sections. |
| Neutral Strong | Medium gray for borders, dividers, disabled. |
| Text Primary | Near-black, dark gray — approximately #1a1a1a direction. Never pure black. |
| Text Secondary | Medium-dark gray. |
| Accent | Optional warm amber or burnt orange — used ONLY for guarantee badge and one or two key callouts. Not used broadly. |
| Success/Error | Muted green and muted red. Form states only. |

**Anti-AI color check:** Pass. No gradients. No neon. No per-section different accent colors. Two brand colors maximum.

---

### Typography system

**Direction:** Single typeface. Humanist sans-serif — warm, readable, confident. Candidates: Plus Jakarta Sans, Outfit, or DM Sans. Final choice at implementation.

| Role | Size (desktop) | Size (mobile) | Weight | Notes |
|---|---|---|---|---|
| H1 (hero) | 48–54px | 32–38px | 800 | Short hero statement |
| H2 (section) | 30–36px | 24–28px | 700 | Section headings |
| H3 (sub/card) | 20–22px | 18–20px | 600 | Service names, card titles |
| Body | 17px | 16px | 400 | Line height 1.65 |
| UI Label | 14–15px | 13–14px | 600 | Buttons, nav, tags |
| Fine Print | 13px | 12px | 400 | Legal, footnotes |

Rules: Max body text width 700px. Left-aligned body. Center-aligned hero headline and star/review count. No centered body paragraphs.

---

### Spacing

Base unit: 8px. Density: Balanced — breathing room without excessive luxury whitespace.

Section vertical padding: 72–88px desktop, 48–56px mobile.
Card padding: 24px.
Container max-width: 1248px standard, 720px text-only.

---

### Radius and shadow

- Buttons: 6px
- Cards: 8px
- Inputs: 6px
- Images: 0px default, 8px for thumbnail gallery items
- Card shadow: very light (0 1px 6px rgba(0,0,0,0.07))
- Card hover: lift (0 4px 18px rgba(0,0,0,0.10))

---

### Component specifics

**Primary button:** Deep navy background, white text. Height 48px. Horizontal padding 24px. Weight 600. Radius 6px. Hover: 13% darker.

**Hero CTA button:** Same but 52px height for additional prominence.

**Testimonial block:** Text quote, reviewer name + city (not full address), 5-star SVG row. Clean card with neutral-mid background. No photos (not available). Grid of 3 on desktop, stack on mobile.

**Before/after:** Slider component. Both images same aspect ratio (4:3). Slider handle is primary color. "Before" / "After" labels in UI-label style, overlaid at bottom corners.

**Trust bar:** Google Reviews count + star average displayed prominently above testimonials. Not a "logo row" — this is a number badge. Example: ★★★★★ 47 Google Reviews — displayed with large stat number.

**Guarantee badge:** Simple pill or shield shape in accent color (amber/orange). Text: "Free Re-Clean Guarantee." Not glossy. Not cartoon. Just visible and clean.

---

### Motion

Level: Subtle.

- Section content: fade-in on scroll, 400ms ease-out, translateY +16px→0
- Buttons: background-color transition, 200ms ease
- Before/after slider: smooth drag/scrub
- Mobile nav: slide-in drawer, 250ms ease
- Nothing else. No counter animations, no hero text animations, no looping anything.

Reduced motion: all animations disabled.

---

### Trust styling

- Review count badge (47 ★4.9) visible in hero or immediately below on desktop
- Guarantee callout visible near primary CTA on homepage
- Marcus's real photo in hero and about section — no stock
- Phone number in sticky nav and in hero
- Testimonial names are real names with city attribution
- Before/after gallery is early in scroll order — within first 3 sections on homepage

---

### Anti-AI check results

- [ ] No gradient surfaces ✓
- [ ] No glassmorphism ✓
- [ ] No neon palette ✓ (deep navy is strong and trustworthy)
- [ ] No blob backgrounds ✓
- [ ] Conservative radius ✓ (6–8px)
- [ ] No abstract icon-value rows ✓ (icons not used for abstract values)
- [ ] Cards intentional ✓ (testimonials and service cards — both have real purpose)
- [ ] Stats are real ✓ (47 Google reviews at 4.9 — verified)
- [ ] Hero photo is real ✓ (Marcus on-site)
- [ ] 2–3 surface tones ✓
- [ ] Shadows minimal ✓
- [ ] Animations minimal ✓

**Result: Pass.**

---

### Handoff to 06-build-plan

> Design system is complete. Build planning must account for: before/after slider component (requires JS), mobile nav drawer (requires focus trapping), star rating SVG component, and Google Reviews badge display. All visual rules are frozen. Photography assets must exist before implementation begins — design depends on real photos in hero and gallery.

---

## Example 2 — Aura Clinic (Aesthetic Medicine): Weak direction → Send-back → Resolved design system

**Business:** Aura Clinic, aesthetic medicine (Botox, fillers, skin treatments), Miami FL
**Audience:** Women 30–55, professional, quality-conscious, discreet
**Input:** Wireframe PRD arrived without visual direction. Discovery notes: "We want luxury. Like a spa but more medical. Clean. No cheap-looking designs."

---

### Critique

> **Overall wireframe PRD quality:** Weak — visual direction missing.
>
> `[VISUAL-DIRECTION]` No references provided. "Luxury" and "spa but medical" are vague and contradictory — luxury spa visuals (candles, marble textures, warm dim) conflict with medical clinic trust requirements (clean, clinical, precise). Cannot resolve this without direction.
>
> `[COMPONENT]` Wireframe mentions "before/after section" but does not indicate how many results are available. If only 3, a slider is better than a grid.
>
> **Send-back threshold met.** Visual direction is so absent that any design system built would be a guess.

---

### Send-back

```
SEND-BACK TO 04-WIREFRAMES
Reason: Visual direction is absent. Cannot build a consistent 
design system for a premium medical aesthetics clinic without 
resolving the core visual register question.

Required fixes:

1. Visual references: Provide 2–3 websites the client likes. 
   These can be aesthetic clinics, luxury hotels, editorial 
   magazines, or any site with the right visual feeling. Without 
   this, we cannot resolve the "luxury vs. medical" tension.

2. Tone resolution: "Luxury spa" and "medical clinic" pull in 
   opposite visual directions. Which register takes priority?
   - Warmer, editorial, beauty-forward (closer to Vogue spa editorial)
   - Cooler, clinical, precision-forward (closer to a cosmetic 
     surgeon with exceptional results)
   One of these must win, or the design will split the difference 
   and feel neither.

3. Color direction: Any constraints? Brand colors? Anything 
   the client specifically hates?

Design risks from current gaps:
- Without register resolution: design system will default to 
  generic med-spa aesthetic (rose gold, blush, millennial pink) 
  which is overdone and does not differentiate.
```

---

### After return — revised input

References provided: Net-a-Porter (clean editorial, strong typography), Tata Harper skincare site (natural luxury, photography-forward), and one high-end dermatology clinic site.

Direction resolved: **Precision-luxury** — not warm spa, but elevated and quiet. Clinical structure with editorial quality photography. Not cold — considered. Color: very neutral palette, near-monochrome, one warm accent.

---

### Visual direction translation (post-return)

| Input | Translated rule |
|---|---|
| "Precision-luxury" | Generously spaced. Typography-forward. Color is almost monochromatic — restraint communicates premium. Nothing decorative that doesn't earn its place. |
| Net-a-Porter reference | Strong typographic hierarchy. High-quality photography. Very clean surfaces. No UI noise. |
| Tata Harper reference | Photography is the product. Generous whitespace. Earthy but refined. Text is secondary to imagery. |
| "Not cheap-looking" | No gradient fills. No pink/rose clichés. No bubble-round components. |
| Medical trust requirement | Real before/after results (not illustrations). Doctor credentials prominently placed. HIPAA/disclaimer language present. |

**Visual register:** 75% toward premium / 25% approachable. This is high-end medical, not a neighborhood spa.

---

### Color system

| Role | Direction |
|---|---|
| Primary | Near-black charcoal or very dark warm gray. Not pure black. Used for headings, CTAs, key UI. |
| Neutral Base | Very warm white — slightly creamy. Not clinical white. |
| Neutral Mid | Light warm beige or warm light gray. Cards, alternate sections. |
| Accent | One warm accent: champagne gold or dusty bronze. Very restrained — not decoration, used for guarantee marks and small callouts. |
| Text Primary | Same near-black as primary. |
| Text Secondary | Medium warm gray. |
| Success/Error | Standard. Form states only. |

**No pink.** No rose gold. No blush backgrounds. These are over-saturated in the med-spa category and immediately signal "template."

---

### Typography

**Direction:** Pairing: Refined serif for headings (Playfair Display, Cormorant, or Libre Baskerville) with a clean neutral sans for body (Inter or DM Sans). The serif communicates precision and elevated quality. The sans ensures readability.

| Role | Desktop size | Weight | Notes |
|---|---|---|---|
| H1 | 44–54px | 400–500 | Light-weight serif. Confidence through restraint. |
| H2 | 28–34px | 400–500 | |
| H3 | 20–24px | 400 | |
| Body | 16–17px | 400 | Sans-serif. 1.65 line height. |
| Label | 13–14px | 500 | Sans-serif. |

Note: Light-weight serif headings are appropriate here — "luxury" register often uses lighter weights on larger type, not heavy headings. This is specific to this visual register.

---

### Anti-AI check results

Violations found and corrected:

- Initial instinct toward blush/rose color: **removed** — too generic for the positioning
- Wireframe had "icon feature row" (icons for: Precision, Safety, Results, Comfort): **replaced** with before/after proof section and doctor credentials — the icons were filler
- Temptation toward glassmorphism on hero: **rejected** — reduces clinical readability

**Final check: Pass after revisions.**

---

### Trust styling note (medical-specific)

Medical aesthetic clinics have unique trust requirements:

- Doctor/practitioner credentials must be prominent and specific (not just "licensed professional")
- Before/after photos must be labeled as actual patient results (not models), which requires specific legal copy
- Consultation CTA should not feel high-pressure — "Book a Consultation" over "Get Started Now"
- Privacy reassurance is important for this audience — discreet service, confidential
- Form reassurance: "Your information is private and will only be used to contact you about your consultation."
