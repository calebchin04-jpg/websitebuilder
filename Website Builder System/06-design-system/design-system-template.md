# Design System PRD Template

Use this template to produce the full design system output. Fill in every section. Use direction + concrete ranges — not vague principles, not full token sheets with locked hex values.

---

## DESIGN SYSTEM PRD
**Project:** [Business Name]
**Build type:** [New build / Redesign]
**Date:** [Date of session]
**Stage:** 05-design-system — output complete
**Visual register:** [Position on spectrum: Approachable ←→ Premium]
**Wireframe PRD status:** [Strong / Acceptable with flags / Weak — sent back / Weak — proceeded with assumptions]

---

## 1. Project Overview

[2–3 sentences for any downstream skill reading cold. Business name, type, audience, and the single most important design priority for this project — e.g., "Trust-first local service site where proof placement and real photography drive conversion" or "Premium editorial salon where visual quality is the primary product signal."]

---

## 2. Design System Summary

**Visual direction in one sentence:** [e.g., "Restrained, proof-forward local service design with real photography, clean hierarchy, and a single strong CTA accent color."]

**Color approach:** [Brief — e.g., "Neutral base with one confident primary accent. No competing brand colors."]

**Typography approach:** [Brief — e.g., "Single typeface with weight variation for hierarchy. Humanist sans-serif."]

**Spacing approach:** [Brief — e.g., "8px base unit. Generous section spacing. Comfortable card padding."]

**Motion level:** [None / Subtle / Moderate — and one sentence of rationale]

**Key constraints:** [Top 2–3 hard rules from this design system — e.g., "No decorative gradients. Real photography only. CTA button must always be visually dominant."]

---

## 3. Critique of Wireframe PRD

**Overall wireframe PRD quality:** [Strong / Acceptable / Weak]

**Issues identified:**
> **[CATEGORY]** Problem: [What is weak or missing]. Design impact: [What visual problem it creates]. Resolution: [How it was handled].

*(If none: "Wireframe PRD is complete and sufficient for design system work. No significant issues.")*

---

## 4. Send-Back to 04-Wireframes *(include only if triggered)*

```
SEND-BACK TO 04-WIREFRAMES
Reason: [Why the wireframe PRD is insufficient for design system work]

Required fixes:
1. [Topic]: [What is missing]. [Why it blocks a design decision]. [What to provide].
2. ...

Design risks from current gaps:
- [Risk]: [Visual problem that is likely if this is not resolved].
```

---

## 5. Overall Visual Direction

**Brand-feel translation:**

| Input (from discovery/planning) | Translated rule |
|---|---|
| "[Vague word]" | [Concrete visual rule] |
| "[Vague word]" | [Concrete visual rule] |
| "[Reference site]" | [Extracted principle] |
| "[Banned style]" | [What this rules out] |

**Visual register placement:** [Specific point on spectrum — e.g., "65% toward premium, 35% approachable — polished professional local expert."]

**Primary design priority:** [The single most important visual goal — e.g., "Trust through restraint and proof visibility." or "Quality communication through photography and typographic confidence."]

---

## 6. Color System

**Palette overview:** [Brief description of the palette direction — tone, warmth, restraint level]

| Role | Direction | Usage rule |
|---|---|---|
| Primary | [Color family + tone — e.g., "Deep blue, navy family, desaturated"] | CTAs, links, active states, key highlights only |
| Primary Hover | [Slightly darker than primary] | Hover state on all primary-colored interactive elements |
| Neutral Base | [White or very light off-white — e.g., "Warm white, slight cream tint"] | Page backgrounds, primary surface |
| Neutral Mid | [Light gray or light warm neutral] | Card backgrounds, subtle section alternation, input backgrounds |
| Neutral Strong | [Medium gray] | Borders, dividers, disabled states |
| Text Primary | [Near-black, dark gray — e.g., "Very dark neutral, not pure black"] | All headings, primary body text |
| Text Secondary | [Medium-dark gray] | Supporting text, labels, captions |
| Accent | [If used: color family — e.g., "Warm amber, used sparingly"] | Highlight callouts, guarantee badges, non-CTA highlights only |
| Success | [Muted green] | Form success, confirmation states |
| Warning | [Muted amber] | Attention notices |
| Error | [Muted red] | Form errors, destructive actions |

**Contrast requirements:**
- Text Primary on Neutral Base: must exceed 7:1 (AAA preferred)
- Text Secondary on Neutral Base: must meet 4.5:1 minimum
- Primary on white (button text): must meet 4.5:1 minimum

**Anti-AI color check:**
- [ ] No gradient fills on large surfaces
- [ ] No neon or oversaturated primary
- [ ] No per-section different accent colors
- [ ] Maximum 2 active brand colors in the UI at once

---

## 7. Typography System

**Typeface direction:** [1–2 typefaces, named or described by category — e.g., "Single typeface: a geometric or humanist sans-serif. Inter, DM Sans, or Geist are strong candidates. Weight variation handles all hierarchy."]

**Type scale:**

| Role | Size range | Weight | Line height | Usage |
|---|---|---|---|---|
| Display / H1 | 40–56px desktop, 28–36px mobile | 700–800 | 1.1–1.2 | Hero heading, major page titles |
| Heading / H2 | 28–36px desktop, 22–28px mobile | 600–700 | 1.2–1.3 | Section headings |
| Subheading / H3 | 20–24px desktop, 18–22px mobile | 600 | 1.3–1.4 | Sub-section headings, card titles |
| Body | 16–18px | 400 | 1.55–1.7 | All body text |
| UI Label | 13–15px | 500–600 | 1.4 | Button text, nav links, tags |
| Fine Print | 12–13px | 400 | 1.5 | Legal text, footnotes |
| Stat / Callout | 36–56px | 700–800 | 1.0–1.1 | Large number callouts (if used) |

**Typography rules:**
- [Rule 1 — e.g., "Body text max-width: 680–720px to maintain readable line length"]
- [Rule 2 — e.g., "Headings use weight, not color, to establish hierarchy"]
- [Rule 3 — e.g., "No centered body paragraphs — center-align short hero lines only"]

---

## 8. Spacing and Layout Rhythm

**Base unit:** 8px

**Spacing scale:**

| Token name | Value range | Use |
|---|---|---|
| space-xs | 4px | Fine inline spacing |
| space-sm | 8–12px | Component internals, tight groups |
| space-md | 16–24px | Card padding, element groups |
| space-lg | 32–48px | Section internal padding, content block gaps |
| space-xl | 64–96px | Section-to-section vertical spacing |
| space-2xl | 96–128px | Major section padding (hero, feature sections) |

**Container widths:**
- Full-bleed: 100vw (hero photography, dark sections)
- Standard content: max-width 1200–1280px, centered, horizontal padding 24–32px
- Narrow content (body text): max-width 680–720px
- Form containers: max-width 520–600px

**Density level:** [Tight / Balanced / Open — with one sentence of rationale based on audience and visual register]

**Mobile spacing adjustments:** [Section vertical padding at 55–65% of desktop. Card padding at 16–20px. Container horizontal padding at 16–20px.]

---

## 9. Radius, Shadow, and Surface Rules

**Border radius:**
- Buttons: [Range — e.g., "6–8px"]
- Cards: [Range — e.g., "8–12px — match button radius family"]
- Form inputs: [Range — e.g., "6–8px"]
- Images: [e.g., "0px default. 8px for non-hero thumbnail images. Circular for profile/team."]
- Tags/chips: [e.g., "4px or pill-shaped"]

**Shadow system:**
- Cards (on light background): [e.g., "Very light shadow: ~0 1px 6px rgba(0,0,0,0.06)"]
- Cards (interactive hover): [e.g., "Slightly stronger: ~0 4px 16px rgba(0,0,0,0.10)"]
- Modals / dropdowns: [e.g., "~0 8px 32px rgba(0,0,0,0.12)"]
- Section and header: [e.g., "No shadow — use surface color variation instead"]
- Banned: [e.g., "Colored glow shadows, stacked shadows, oversized blur shadows"]

**Section surface pattern:**
- Surface 1: [Neutral Base — primary background, most sections]
- Surface 2: [Neutral Mid — alternate sections for rhythm]
- Surface 3: [Optional light-tinted brand section — used once or twice maximum]
- Surface Dark: [Optional dark section — footer or strong CTA block only]

---

## 10. Button Rules

**Primary CTA button:**
- Height: [44–52px]
- Horizontal padding: [20–28px]
- Font weight: [600]
- Font size: [15–16px]
- Radius: [Matches system]
- Default: [Color direction]
- Hover: [Darken 10–15% — no glow]
- Active: [Scale 0.98]
- Disabled: [40% opacity, not-allowed cursor]

**Secondary button:**
- Style: [Outlined or ghost]
- Height: [Match primary]
- Border: [1.5–2px]
- Hover: [Light fill]

**Ghost / text button:**
- No border, no fill
- Use only for low-priority actions

**Size variants:**
- Large (hero CTA): [52–56px]
- Standard: [44–52px]
- Small (inline/compact): [36–40px]

**CTA label convention:** [e.g., "Action verbs: 'Get a Free Quote', 'Book Now', 'Call Marcus'. Not: 'Submit', 'Click Here', 'Learn More' as primary CTAs."]

---

## 11. Card Rules

**Standard card:**
- Background: [Neutral Base or Neutral Mid]
- Padding: [20–28px]
- Radius: [System]
- Shadow: [Light, or border if on non-white background]
- Hover (if interactive): [Shadow lift or border intensify]
- No gradient fills on standard cards

**Service card:**
- [Specific treatment — e.g., "Image top, padding below, title, 1–2 line description, arrow or CTA"]
- Image aspect ratio: [e.g., "16:9 or 3:2"]

**Testimonial card:**
- [Specific treatment — e.g., "Quote text first, then reviewer name + title, optionally photo"]
- [Star rating if used: actual star SVGs, not text or emoji]

**Trust bar / logo row:**
- Grayscale logos, consistent height, generous horizontal spacing

---

## 12. Form Rules

**Input fields:**
- Height: [44–52px]
- Label: [Above field, 13–15px, weight 500]
- Placeholder: [Lighter than label — never a label substitute]
- Focus border: [2px, primary color or accessible blue]
- Error state: [Red-family border + error text below — not tooltip]
- Radius: [System]

**Form layout:**
- Max width: [520–600px]
- Field spacing: [16–24px between fields]
- Submit button: [Full primary button style, full width of form or sized to label]
- Reassurance copy: [Short line near submit — e.g., "No spam. We'll follow up within 1 business day."]

---

## 13. Navigation Rules

**Desktop:**
- Height: [60–72px]
- Background: [White or near-white. Solid — not transparent on load.]
- Sticky: [Yes — defined behavior: sticks after scroll passes hero, or immediately]
- Shrink on scroll: [Optional — if used, max height reduction is 10–12px]
- Logo: [Left-aligned]
- Links: [Right-aligned]
- CTA button: [Far right, primary button style]
- Active state: [Underline or color change]
- Hover: [Color shift — not background fill on nav links]

**Mobile:**
- Hamburger icon: [Right side, minimum 44px tap area]
- Menu pattern: [Slide-out drawer or full-overlay]
- Mobile nav links: [Full-width, 48px+ minimum height per item]
- Mobile CTA: [Prominent in mobile nav — same label as desktop]

---

## 14. Imagery and Media Rules

**Photography:**
- [Real vs. stock guidance for this project — e.g., "Real on-site photography required. No generic business stock."]
- Tone: [e.g., "Warm, natural lighting. Not heavily filtered or overlit."]
- Subject: [e.g., "Owner at work, before/after results, completed projects. Not people shaking hands."]

**Aspect ratios:**
- Hero: [16:9 or full-bleed / custom]
- Service cards: [3:2 or 16:10]
- Team/profile: [1:1 with circle or subtle radius crop]
- Gallery: [Mixed OK in masonry grid, but consistent within row layouts]

**Icons:**
- Style: [Outline / filled / line-weight — pick one]
- Size: [Consistent within context — e.g., feature icons all 24px or 32px]
- Family: [One family only]

**Before/after:**
- [Slider component or side-by-side — decision for this project]
- [Clear labeling, real photography only]

---

## 15. Motion and Animation Rules

**Motion level:** [None / Subtle / Moderate]

**Allowed:**
- [e.g., Scroll fade-in: opacity 0→1 + translateY 16→0, 400ms ease-out]
- [e.g., Button hover: background-color transition, 200ms ease]
- [e.g., Mobile nav: slide-in, 250ms ease]

**Banned:**
- [List project-specific banned animations]
- Auto-playing videos/backgrounds
- Looping decorative animations
- Staggered animations on large content grids
- Parallax (unless tested and subtle)

**Reduced motion:** [All animations must degrade gracefully with `prefers-reduced-motion: reduce`]

---

## 16. Trust Styling Rules

**Proof placement priority:**
- [e.g., "Review count + star rating visible within first 2 scrolls on every key page"]

**Testimonial treatment:**
- [Real names required. Photos if available. Star SVGs for ratings.]

**Trust bar treatment:**
- [Grayscale logos. Consistent height. Small label above.]

**Guarantee badge:**
- [Simple, clean, high-contrast — no glossy/cartoon badge treatment]

**Form trust cue:**
- [Short reassurance line near submit]

**Contact visibility:**
- [Phone number in sticky nav or within first scroll on every page]

---

## 17. Accessibility Rules

- Text contrast: [Minimum ratios by text size as defined in design-system-rules.md]
- Focus indicator: [2–3px solid outline, primary or accessible blue, 2px offset]
- Tap targets: [44×44px minimum on mobile]
- Motion: [Respect prefers-reduced-motion]
- Color as sole information carrier: [Not allowed — always pair with shape/icon/text]
- Form labels: [Always visible above field — no placeholder-as-label]

---

## 18. Anti-AI Design Check

Run the checklist from `anti-ai-design-rules.md`:

- [ ] No gradient surfaces
- [ ] No glassmorphism on content components
- [ ] No neon/oversaturated palette
- [ ] No blob/shape backgrounds
- [ ] Conservative, consistent radius
- [ ] No abstract icon-value rows
- [ ] Cards structured intentionally, not by template default
- [ ] Stats section uses real, verifiable numbers only (or omitted)
- [ ] Hero photography is real and business-relevant
- [ ] 2–3 section surface tones maximum
- [ ] Shadows used sparingly
- [ ] Animations minimal and purposeful
- [ ] No SaaS UI decoration for non-product businesses

**Result:** [Pass / Violations found — list what was revised]

---

## 19. Desktop Visual Behavior

[3–5 notes on desktop-specific visual behavior beyond the component rules — e.g., "Full-bleed hero image with content overlay area left-aligned. Maximum content width 1280px centered. Navigation items have comfortable 24px between links. Section padding is generous (80–100px vertical) on desktop to maintain premium feel."]

---

## 20. Mobile Visual Behavior

[3–5 notes on mobile-specific visual behavior — e.g., "Hero image cropped to 4:3 or 1:1 on mobile. CTA button full-width in hero on mobile. Section padding reduced to 48–64px. Navigation collapses to hamburger immediately. Phone number must be tap-to-call and prominently visible."]

---

## 21. Implementation Notes

[Practical notes for the AI coder — e.g., "Use Tailwind CSS utility classes. Build with a consistent component library structure. All color values should be defined as CSS custom properties at the :root level. Typography uses next/font or system font loading."]

[Framework-specific notes if known from planning.]

[Any visual decisions that require specific component library support — e.g., "Booking widget must match form style."]

---

## 22. General Suggestions and Examples

[Optional section for specific implementation guidance — e.g., example spacing class names, example color variable naming, example button class structure. Keep this as practical hints, not architectural decisions.]

---

## 23. Assumptions Made

Format:
> `[ASSUMPTION]` **Topic:** [What was assumed]. **Why:** [Missing input / inferred from context]. **Impact:** [What changes if wrong].

- [ASSUMPTION] ...

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| [Issue] | [Reason] | [Stage/skill] | [Before build plan / before code] |

---

## 25. Blockers and Risks

*(Include only if present)*

**Blockers:** [Must be resolved before build planning begins]

**Risks:** [e.g., "Photography does not exist yet — design system assumes real photos. If stock photos are used as fallback, trust scoring will decrease."]

---

## 26. Handoff to Next Stage (06-build-plan)

**Design system status:** Complete / Complete with flags

**What 06-build-plan must preserve from this design system:**
- The color role system — no new colors introduced in build without flagging
- The spacing base unit (8px) — all spacing values must be multiples
- The component hierarchy — buttons, cards, forms follow the rules above
- The motion level: [defined level] — do not introduce animations beyond what is defined
- Anti-AI check results — any violation introduces technical debt

**What flexibility exists for build planning:**
- Exact font choice within the defined family direction
- Exact implementation approach (component library, CSS framework, custom)
- Minor spacing value adjustments within the defined ranges

---

## 27. Instructions for Build and Code Skills

### 06-build-plan
> The design system above defines all visual rules. Build planning must account for: [list any component complexity that affects build scope — e.g., "Before/after slider requires a JavaScript component," "Mobile nav requires a drawer component with focus trapping," "Star rating requires an SVG star component."] All visual decisions are frozen except where flexibility is explicitly noted above.

### Code / frontend implementation skills
> Implement the design system as CSS custom properties at `:root`. Use the spacing scale as utility classes. Build components in this order: [suggested priority — e.g., "1. Base typography + color. 2. Button variants. 3. Form components. 4. Card components. 5. Navigation. 6. Section templates."]. The anti-AI checklist must be run again as a visual QA check before the first draft is considered complete.
