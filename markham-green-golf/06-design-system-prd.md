# 06 — Design System PRD
## Markham Green Golf Club

**Project:** Markham Green Golf Club
**Build type:** Redesign of existing site (markhamgreen.com)
**Date:** April 20, 2026
**Stage:** 06-design-system — output complete
**Visual register:** 70% toward premium — golf club quality and authority without private-club exclusivity
**Wireframe PRD status:** Acceptable with flags — operational data placeholders carry forward; no wireframe layout changes required

---

## 1. Project Overview

Markham Green Golf Club is a public 9-hole golf course in Markham, Ontario requiring a 5-page redesign that must simultaneously signal "proper golf club" (dark green palette, serif headings, quality photography) and "genuinely welcoming to casual golfers" (accessible copy, transparent pricing, warm surfaces). The most important design priority: the visual system must make the $44 green fee feel like a good deal at a real course, not a warning signal about quality. Photography is load-bearing — the design system is built around real course imagery.

---

## 2. Design System Summary

**Visual direction in one sentence:** "Dark green golf-club authority meets warm neighbourhood approachability — quality typography and real photography carry the register, warm cream surfaces keep it from feeling exclusive."

**Color approach:** Dark green primary palette (hero, trust bar, CTA bands, footer) + warm cream/off-white body surfaces (content sections) + gold/amber as a single CTA accent. Near-black for depth. Two active brand colors maximum at any time.

**Typography approach:** Two-typeface system — serif for headings (authority/golf-club register), geometric sans-serif for body and UI (readability/modernity). Weight and size create hierarchy; color variation is minimal.

**Spacing approach:** 8px base unit. Generous section vertical padding (80–96px desktop) to maintain quality feel without stuffing. Comfortable reading rhythm.

**Motion level:** Subtle — scroll-triggered fade-in only. No parallax, no looping elements, no hover animations on non-interactive elements. Rationale: casual golfer audience making leisure decisions; animated distractions reduce the calm, confident brand register.

**Key constraints:**
1. Real course photography only — no stock imagery of generic golfers; the design system's visual trust depends on real Markham Green photos
2. Gold accent used on CTAs and hover states only — never as a section background, text color, or dominant element
3. Phone number tap-to-call must be visible in the sticky header on mobile — non-negotiable structural brand requirement

---

## 3. Critique of Wireframe PRD

**Overall wireframe PRD quality:** Acceptable

**Issues identified:**
> **[Photography dependency]** Problem: Wireframe plans hero and photography-grid sections without confirmed photography quality. Design impact: The hero and photography-grid sections cannot be fully designed until drone shots are reviewed — overlay opacity, crop decisions, and the existence of a 3-column grid depend on photo quality. Resolution: Design system defines the system for quality photography and notes the contingency; photography review is the pre-build dependency.

> **[Inline CTAs on Lessons page]** Problem: Wireframe calls for "compact inline CTA" within each program section on `/lessons` but does not define the component. Design impact: Need a compact CTA variant that does not compete visually with the full CTA band. Resolution: Design system defines a compact inline CTA variant (text + small button, no background band).

---

## 5. Overall Visual Direction

**Brand-feel translation:**

| Input (from discovery/planning) | Translated rule |
|---|---|
| "Refined but welcoming" | Dark green hero and CTA band surfaces create the authority register; warm cream content sections prevent it from feeling closed or cold |
| "Dark hunter green primary" | Hero, trust bar, footer, and CTA band sections use #1a3a2a range as the primary surface color |
| "Near-black for depth" | Specific sections that need maximum authority (trust bar, certain CTA bands) use #0f1f17 range rather than pure black |
| "Warm cream for body" | Content sections (course overview, pricing, lessons, staff) use a warm off-white (#f8f5f0 range) — not pure white (#ffffff), which reads cold |
| "Gold/amber as accent only" | Gold appears only on CTA button backgrounds, hover states, and one decorative element per section maximum. Never as a section background. |
| "Serif headings — authority register" | All H1 through H3 headings use the serif typeface. UI elements (nav, buttons, labels) use the sans-serif. No exceptions. |
| "Clean sans-serif for body/UI" | Body text, navigation links, button labels, form labels all use the sans-serif. |
| "No generic golf themes" | No clip-art flags, no cartoon golf ball graphics, no stock photos of anonymous golfers in polos. Course-specific photography only. |
| "No private-club exclusivity signals" | No formal dress code imagery, no "members" language in nav, no gold-heavy palatial design treatment |
| "Subtle animation level" | Only scroll-triggered fade-ins. No parallax, no loops. |

**Visual register placement:** 70% toward premium, 30% approachable. Premium is expressed through palette depth, serif typography, and photography-forward layout. Approachable is expressed through warm surface tones, direct copy, and accessible pricing visibility.

**Primary design priority:** Photography-forward credibility — the hero course photograph must be the first visual impression, and it must make the course look real, maintained, and worth playing. Typography and palette serve the photography, not the other way around.

---

## 6. Color System

**Palette overview:** Deep green and near-black provide the authority foundation. Warm cream surfaces the content. Single gold accent for CTAs. The palette reads "proper golf club" without gold-and-marble excess.

| Role | Direction | Usage rule |
|---|---|---|
| Surface Dark (Primary) | Hunter green, #1a3a2a range — deep, botanical, not neon | Hero background, trust bar, CTA bands, footer. Not used on body content sections. |
| Surface Dark Alt | Near-black green, #0f1f17 range | Trust bar background, final CTA band variant, footer bottom strip. Maximum depth moments. |
| Surface Light (Primary Body) | Warm off-white / cream, #f8f5f0 range | Default background for all content sections (pricing, staff, course info, lessons). Not pure white. |
| Surface Light Alt | Slightly cooler off-white, #f4f4f4 range | Alternate section background for visual rhythm (every other content section). |
| Accent (CTA/Hover only) | Warm gold / amber, #c8a84b range — muted, not bright | CTA button backgrounds, hover states on primary buttons, occasional highlight line on section headers. Used sparingly — 1 element per section maximum. |
| Text Primary | Near-black, #1a1a1a range | All headings (on light surfaces), primary body text |
| Text Inverse | Warm white, #f5f0e8 range | All text on dark green surfaces (hero, trust bar, footer) |
| Text Secondary | Medium warm gray, #6b6560 range | Supporting text, captions, labels on light surfaces |
| Border | Light warm gray, #e5e0d8 range | Card borders, form input borders, table dividers on light surfaces |
| Success | Muted green, #16a34a range | Form success states |
| Error | Muted red, #dc2626 range | Form errors |

**Contrast requirements:**
- Text Primary (#1a1a1a) on Surface Light (#f8f5f0): must exceed 7:1 — likely ~12:1, well above AAA
- Text Inverse (#f5f0e8) on Surface Dark (#1a3a2a): must meet 4.5:1 minimum — verify at exact token values
- Accent (#c8a84b) on Surface Dark: verify CTA button text is legible at 4.5:1 minimum; use Text Inverse (#f5f0e8) as button label if gold doesn't pass

**Anti-AI color check:**
- [x] No gradient fills on large surfaces — solid color surfaces only
- [x] No neon or oversaturated primary — deep hunter green is botanical and desaturated
- [x] No per-section different accent colors — gold is the only accent; consistent throughout
- [x] Maximum 2 active brand colors in the UI at once — green and gold; black/cream are neutrals

---

## 7. Typography System

**Typeface direction:**
- Headings: Cormorant Garamond or Playfair Display — both have the classic authority register appropriate for a golf club. Cormorant Garamond is slightly more refined and narrow; Playfair Display is bolder and more contemporary. Either works. Final selection is the implementation stage's call within this direction.
- Body and UI: Inter — clean, highly readable, geometric enough to feel modern but not cold. Pairs well with both serif options. Inter is the safe choice; DM Sans is an acceptable alternative.

**Type scale:**

| Role | Size range (desktop) | Size range (mobile) | Weight | Line height | Usage |
|---|---|---|---|---|---|
| Display / H1 | 48–64px | 32–40px | 600 (serif — lighter than bold for serifs) | 1.1–1.2 | Hero headline only |
| Heading / H2 | 32–40px | 24–30px | 600 | 1.2–1.3 | Section headings |
| Subheading / H3 | 22–26px | 18–22px | 600 | 1.3–1.4 | Sub-section headings, staff names, pricing tier labels |
| Body | 16–18px | 15–17px | 400 | 1.6–1.7 | All body text — generous line height for readability |
| UI Label | 13–15px | 13–14px | 500–600 (sans-serif) | 1.3 | Nav links, button text, tags, form labels |
| Fine Print | 12–13px | 12px | 400 | 1.5 | Legal text, pricing footnotes, form disclaimers |
| Price Display | 28–36px | 22–28px | 700 (sans-serif) | 1.1 | Green fee tier prices — strong visual weight, sans-serif not serif |

**Typography rules:**
- Serif typeface is for headings only (H1–H3) — never used for body text, UI labels, or prices
- Price Display uses the sans-serif at high weight — prices must be instantly readable, not elegantly typeset
- Body text max-width: 680px — maintain comfortable line length in text-heavy sections
- Center-align only in hero headlines and CTA band headlines — all other text is left-aligned
- No centered body paragraphs — not even on About page
- Heading color on dark surfaces: Text Inverse (#f5f0e8). Heading color on light surfaces: Text Primary (#1a1a1a).

---

## 8. Spacing and Layout Rhythm

**Base unit:** 8px

**Spacing scale:**

| Token name | Value range | Use |
|---|---|---|
| space-xs | 4px | Fine inline spacing, icon gaps |
| space-sm | 8–12px | Component internals, tag padding |
| space-md | 16–24px | Card padding internals, element groups within sections |
| space-lg | 32–48px | Between section sub-elements (card to card, step to step) |
| space-xl | 64–80px | Section vertical padding on desktop |
| space-2xl | 80–96px | Hero section padding, major section padding on desktop |

**Container widths:**
- Full-bleed: 100vw — hero photography background, trust bar, CTA bands, footer
- Standard content: max-width 1280px, centered, horizontal padding 32px
- Narrow content (body text, bios): max-width 680px
- Pricing tier cards container: max-width 960px — not stretching card layouts to full width

**Density level:** Open — generous section padding, comfortable white space within cards. Rationale: leisure/recreation purchase decisions are low-urgency; the site should feel unhurried and confident, not packed with competing information.

**Mobile spacing adjustments:** Section vertical padding at 48–64px on mobile. Card padding at 16–20px. Container horizontal padding 20px. Inter-section gaps reduced proportionally.

---

## 9. Radius, Shadow, and Surface Rules

**Border radius:**
- Buttons: 4–6px — slightly rounded, not pill-shaped, not sharp corners; professional but not corporate
- Cards: 6–8px — matches button radius family
- Form inputs: 4–6px — matches system
- Images (hero, photography grid): 0px — full-bleed images have no border radius; they extend to the section edge
- Staff profile photos: 6–8px or circular (1:1 ratio) — small rounded rectangle or circle crop; not rectangular
- Pricing tier cards: 6–8px
- Tags/badges: 4px

**Shadow system:**
- Cards (on warm cream background): subtle — `0 1px 4px rgba(0,0,0,0.06)` or a 1px border (#e5e0d8) — not both
- Cards (interactive hover, if any): `0 4px 16px rgba(0,0,0,0.08)` — slight lift
- Sticky header: `0 1px 8px rgba(0,0,0,0.08)` — separates from page content on scroll
- No shadows on dark-surface sections (trust bar, CTA bands) — color contrast handles section separation
- Banned: Colored glow shadows, oversized blur radius (>20px), stacked multi-shadow systems, green-tinted shadows

**Section surface pattern:**
- Surface Dark (Primary): Hero, Trust Bar, footer, primary CTA band — dark hunter green #1a3a2a range
- Surface Dark Alt: Final CTA band variant or trust bar — near-black #0f1f17 range
- Surface Light (Primary): Default content sections — warm cream #f8f5f0
- Surface Light Alt: Alternate content sections — slightly different off-white #f4f4f4
- Maximum 2 surface types visible on screen at any one time — avoid section-by-section surface rainbow

---

## 10. Button Rules

**Primary CTA button (used for "Book a Tee Time," "Contact Greg"):**
- Height: 48–52px
- Horizontal padding: 24–28px
- Font: sans-serif, 15–16px, weight 600
- Letter spacing: 0.02em — slight track, not all-caps
- Radius: 4–6px (matches card system)
- Default background: Gold/amber — #c8a84b range
- Default text: Near-black or dark green (#1a2a1a) — verify contrast at 4.5:1
- Hover: Background darkens 12–15% — `#a8882a` range — no glow, no border change
- Active: Scale 0.98
- Disabled: 40% opacity, not-allowed cursor
- Hero variant (large): 52–56px height, 28–32px horizontal padding — same style

**Secondary button (used for "Call the Pro Shop," "See Full Pricing"):**
- Height: 44–48px — match primary
- Style: Outlined — 1.5px border in Text Inverse (on dark surfaces) or Text Primary (on light surfaces)
- Background: Transparent
- Text: Matches border color
- Hover (on dark surface): Background fills with rgba(255,255,255,0.1) — slight light fill
- Hover (on light surface): Background fills with rgba(0,0,0,0.05)

**Compact inline CTA (lessons page program sections):**
- Style: Small text link with right arrow — "Book a Lesson →" 
- Font: 14px sans-serif, weight 600, accent gold or Text Primary
- No button border, no background fill
- Used within content sections only — not as a standalone band

**Ghost / text button:**
- No border, no fill, underline on hover
- Low-priority navigation actions only (e.g., "View full pricing →")

**CTA label convention:** Action verbs with specific objects — "Book a Tee Time," "Contact Greg," "Call the Pro Shop," "See Full Pricing." Not "Learn More," "Click Here," or "Submit."

---

## 11. Card Rules

**Pricing tier card:**
- Background: Surface Light (cream)
- Padding: 20–24px
- Radius: 6–8px
- Border: 1px #e5e0d8
- No shadow — border defines the card
- Layout: Tier label (H3 sans-serif) top, price (Price Display) prominent center, condition note (small body text) below
- Highlighted tier (e.g., Weekday as "most popular"): optional accent border (1.5px gold) — used at most once

**Staff card (brief variant — homepage):**
- Background: Surface Light
- Padding: 20–24px
- Radius: 6–8px
- Layout: Photo/initials (circle crop, 64×64px) left, name + title + credential right, or stacked
- No shadow on light surface — border (1px #e5e0d8)

**Staff card (full variant — About page):**
- Background: Surface Light
- Padding: 24–28px
- Radius: 6–8px
- Layout: Photo/initials top (80×80px circle), name (H3 serif), title, credential, 2–3 sentence bio (body text)
- Border: 1px #e5e0d8

**Trust bar items:**
- No card structure — items are inline within the trust bar band
- Each item: icon or stat (optional) + 1–2 line label in Text Inverse
- Vertical dividers between items (1px rgba(255,255,255,0.2)) on desktop, hidden on mobile

---

## 12. Form Rules

*Note: This build has no contact form — the lesson inquiry CTA is a mailto: link and the primary CTA is a phone link. Form rules are defined here for completeness and for future use if a lesson inquiry form is added in Phase 2.*

**Input fields (if added later):**
- Height: 44–48px
- Label: Above field, 13–14px, sans-serif weight 500, Text Primary
- Placeholder: Lighter than label — #9b9590 — never used as a label substitute
- Focus border: 2px, gold accent (#c8a84b) — replaces default border on focus, no box-shadow ring
- Error state: 2px red-family border (#dc2626) + error message below field in red text
- Radius: 4–6px (matches system)

**Form layout (if added later):**
- Max width: 560px
- Field spacing: 20px between fields
- Submit: Full primary button style, full form width
- Reassurance copy: 13px text below submit — "We'll be in touch within 1 business day"

---

## 13. Navigation Rules

**Desktop:**
- Height: 64–72px
- Background: Surface Dark (dark green #1a3a2a) — the header is part of the dark brand register; it should feel like a proper golf club header, not a generic white bar
- Text: Text Inverse (#f5f0e8)
- Sticky: Yes — sticks immediately from page load (not scroll-triggered); always present
- Logo: Left-aligned — serif logotype treatment if no logo file, or logo image
- Nav links: Right-aligned, 14–15px sans-serif, weight 500, Text Inverse
- Nav link hover: Underline — not background fill
- CTA button: Far right — gold/amber primary button ("Book a Tee Time")
- Active page indicator: Underline or slightly brighter text

**Mobile:**
- Height: 60px
- Same dark green background — maintains brand register on mobile
- Logo/wordmark: Left
- CTA button (compact): Right — "Book" or abbreviated label if needed for space; tap-to-call
- Hamburger: Right of CTA — 44×44px minimum tap target
- Drawer: Slide from right or top overlay — dark green surface, full-width nav links (48px+ height each), CTA button at bottom of drawer

---

## 14. Imagery and Media Rules

**Photography:**
- Real course photography only — Markham Green Golf Club drone shots and course images exclusively
- No stock photography of generic golfers, anonymous courses, or posed business imagery
- Subject matter: Fairways, greens, course conditions, natural light; real golfers (if any appear) should be candid, not posed; clubhouse exterior if attractive
- Tone: Warm, natural lighting — early morning or late afternoon golden hour preferred; not overlit or heavily filtered
- Dark overlay on hero images: 35–50% opacity dark green overlay — allows text legibility without destroying the photography
- Aspect ratio for hero: 16:9 minimum, full viewport width — or full-height with center crop for portrait viewports

**Photography grid (homepage Section 6):**
- 3 images on desktop (3-column equal-height row)
- 2 images on mobile (2-column)
- Image aspect ratio: 3:2 or 4:3 — consistent within the grid, not mixed
- No captions required unless images have specific course identification value
- No border radius on grid images — full-bleed within their grid cells

**Staff profile photos:**
- 1:1 ratio with circular or slightly rounded crop
- 80×80px on About page (full), 64×64px on homepage (brief)
- If no headshot available: initials on dark green circular background — "SH" for Scott Haynes, etc.
- No filter or tinting on staff photos — real faces, natural color

**Icons:**
- Style: Lucide React icons — line-weight, outline style — consistent with existing project standards
- Size: 18–20px in trust bar and utility uses; 16px in body text contexts
- Color: Text Inverse on dark surfaces, Text Secondary on light surfaces
- One icon family only — no mixing styles

---

## 15. Motion and Animation Rules

**Motion level:** Subtle

**Allowed:**
- Scroll fade-in: `opacity: 0 → 1` + `translateY: 10px → 0`, 420ms ease-out, `animation-fill-mode: both` — CSS-only using `@keyframes fadeUp`, staggered classes `.fade-up-1` through `.fade-up-4` with 80ms delays (matching established pattern from mr-rooter-markham)
- Button hover: Background color transition, 200ms ease
- Mobile nav drawer: Slide-in, 250ms ease
- Header scroll shadow: box-shadow transition when sticky kicks in, 200ms ease

**Banned:**
- Parallax scrolling
- Auto-playing video backgrounds
- Looping decorative animations
- Animated counters or stat counting
- Hover animations on non-interactive elements (images, section backgrounds)
- Staggered animations on large grids (pricing table rows, photo grid)
- Any animation that delays content visibility on first load

**Reduced motion:** All animations must degrade gracefully. Include:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 16. Trust Styling Rules

**Proof placement priority:**
- Google rating + PGA credential visible within the first scroll on the homepage (trust bar immediately below hero)
- Staff credentials visible above the fold on the About page (Section 2 starts with staff, not course history)
- Pricing table visible within 1 scroll on `/course` (minimal page hero, pricing table is the first full section)

**Trust bar treatment:**
- Dark surface (near-black or dark green) — visually distinctive from hero above
- 3–4 items max — star rating, PGA credential, community signal, optional fourth
- Items in Text Inverse, small icon or no icon, compact horizontal layout
- On mobile: 2-column grid or scrollable strip

**Staff section treatment:**
- Real name displayed at heading level (H3 or H4)
- Credential stated completely on first appearance: "PGA of Canada Professional" — not abbreviated
- Photo treated as trust signal: quality matters. If headshot is low quality, initials placeholder is preferable to a blurry or dark photo.

**Contact visibility:**
- Phone number `(905) 294-6156` must be present in the sticky header as a tap-to-call link on mobile
- Phone number must appear in the footer on all pages
- Phone number appears as text in CTA band bands alongside the "Book a Tee Time" button

---

## 17. Accessibility Rules

- Text contrast: Text Primary on Surface Light must exceed 7:1 (AAA). Text Inverse on Surface Dark must meet 4.5:1 minimum — verify at exact color tokens. Gold accent on dark green must meet 4.5:1 for button text.
- Focus indicator: 2px solid gold accent (#c8a84b) or white outline, 2px offset — visible on both dark and light surfaces
- Tap targets: 44×44px minimum on all mobile interactive elements. CTA buttons: 48px minimum height.
- Motion: `prefers-reduced-motion` respected for all animations
- Color as sole information carrier: Not used — pricing tier differentiation uses labels, not color alone; form errors use text messages, not color alone
- Form labels: Always visible above field — no placeholder-as-label (future forms)
- Alt text: All photography requires descriptive alt text (e.g., "Markham Green Golf Club — view of the 3rd hole fairway")

---

## 18. Anti-AI Design Check

- [x] No gradient fills on large surfaces — solid color surfaces only; photography handles visual depth
- [x] No glassmorphism on content components — no frosted glass cards over photography
- [x] No neon or oversaturated palette — deep botanical green + muted warm cream + muted gold
- [x] No blob/shape backgrounds — photography and color blocks only, no abstract shape layers
- [x] Conservative, consistent radius — 4–8px system, no extreme pill shapes or sharp corners mixed
- [x] No abstract icon-value rows — trust bar uses factual statements (PGA credential, Google rating), not icon+vague claim rows
- [x] Cards structured intentionally — pricing tier cards and staff cards have defined layouts, not default grid card templates
- [x] Stats section uses real, verifiable numbers only — Google rating and review count are placeholder until confirmed; if unconfirmed, stat is not displayed
- [x] Hero photography is real and business-relevant — Markham Green course photos only; no generic golf stock
- [x] 2–3 section surface tones maximum — dark green, near-black, warm cream, light cream (4 technically, but dark green + near-black are variants of the same dark family)
- [x] Shadows used sparingly — cards use either 1px border OR light shadow, not both; hero and CTA bands have no shadow
- [x] Animations minimal and purposeful — CSS fade-up only, no decorative motion
- [x] No SaaS UI decoration — no feature grids with check icons, no pricing tiers with "most popular" badges (except one optional accent border on pricing)

**Result:** Pass — no violations requiring revision. The pricing tier card "most popular" accent border is optional; if used, it is one instance with a gold border (not a banner or badge graphic).

---

## 19. Desktop Visual Behavior

The sticky header sits in the dark green register — dark green background, Text Inverse links, gold CTA button — maintaining brand continuity from header to hero (both dark surfaces). The hero is full-viewport or near-full-viewport with the course photograph as background; the dark overlay (35–50% green-tinted) allows the headline and CTA to read without destroying the image. Content sections alternate between Surface Light and Surface Light Alt — the rhythm of dark header → dark hero → light content → dark trust bar → light content → dark CTA band → light content → dark footer creates a cadence that is visually interesting without being arbitrary. Maximum content width 1280px centered. Section padding: 80–96px vertical. Typography weight contrast between serif H2 headings and 16–18px body text creates clear content hierarchy.

---

## 20. Mobile Visual Behavior

Header maintains dark green background at 60px height with logo, compact "Book" CTA button (tap-to-call), and hamburger icon. Hero image is center-cropped for portrait viewport — course photography still prominent at 70–80vh height. Section padding reduces to 48–64px on mobile. Pricing tier cards stack vertically — each tier as its own full-width block (label, price, condition note). Staff cards stack to single column. The photography grid becomes 2-column on mobile. Trust bar uses a 2-column grid layout (2 items per row). All CTA buttons are full-width on mobile in section contexts. Font sizes step down to mobile range defined in the type scale.

---

## 21. Implementation Notes

**Framework:** Next.js 15 App Router, TypeScript, Tailwind CSS 3.4 — matching existing project standards.

**Color implementation:** Define all color tokens as CSS custom properties at `:root` in `globals.css`, then extend into `tailwind.config.ts` under `colors`. Pattern follows the established mr-rooter-markham approach:
```css
:root {
  --color-surface-dark: #1a3a2a;      /* Hunter green — primary dark surface */
  --color-surface-dark-alt: #0f1f17;  /* Near-black green — max depth */
  --color-surface-light: #f8f5f0;     /* Warm cream — primary body surface */
  --color-surface-light-alt: #f4f4f4; /* Cool off-white — alternate body surface */
  --color-accent: #c8a84b;            /* Warm gold — CTAs and hover states only */
  --color-accent-hover: #a8882a;      /* Darkened gold for hover */
  --color-text-primary: #1a1a1a;      /* Near-black — headings and body on light */
  --color-text-inverse: #f5f0e8;      /* Warm white — text on dark surfaces */
  --color-text-secondary: #6b6560;    /* Warm gray — supporting text */
  --color-border: #e5e0d8;            /* Warm light gray — card borders */
  --color-success: #16a34a;
  --color-error: #dc2626;
}
```

**Typography implementation:** Load Cormorant Garamond (or Playfair Display) and Inter via `next/font/google`. Use CSS variables `--font-serif` and `--font-sans`. Tailwind config extends fontFamily with both. Apply serif to all heading elements via base Tailwind styles or a heading wrapper component.

**Animation implementation:** CSS-only `@keyframes fadeUp` in `globals.css` with `.fade-up`, `.fade-up-1` through `.fade-up-4` staggered classes — same pattern as mr-rooter-markham. `animation-fill-mode: both` ensures content is visible without JS.

**Photography optimization:** Use Next.js `<Image>` component with explicit `width` and `height` for all course photos. WebP format. Sizes attribute for responsive serving. Priority flag on hero image. This is critical for LCP (Largest Contentful Paint) performance.

**Booking URL toggle:** `siteConfig.bookingUrl: string | null` — if null, primary CTA renders as `<a href="tel:+19052946156">Book a Tee Time</a>`; if populated, renders as `<a href={siteConfig.bookingUrl} target="_blank">Book a Tee Time</a>`.

---

## 22. General Suggestions and Examples

**Section wrapper pattern (follows SectionWrapper from existing projects):**
```tsx
// bg variants: "dark" | "dark-alt" | "light" | "light-alt"
<SectionWrapper bg="dark" id="trust-bar">...</SectionWrapper>
```

**Pricing tier card example structure:**
```
[Weekday]          ← H3 sans-serif, Text Primary
[$44]              ← Price Display (28–36px, weight 700, sans-serif)
[Mon–Fri, excl. holidays]  ← body text, Text Secondary
```

**Trust bar item example structure:**
```
[★★★★★ 4.3 on Google · 87 reviews]   ← inline, Text Inverse
[|]                                     ← divider
[Scott Haynes · PGA of Canada Pro]     ← inline, Text Inverse
```

**Staff card initials placeholder example:**
```css
.staff-initials {
  background-color: var(--color-surface-dark);
  color: var(--color-accent);
  border-radius: 50%;
  font-family: var(--font-sans);
  font-weight: 600;
}
```

---

## 23. Assumptions Made

> `[ASSUMPTION]` **Photography quality:** Design system is built for hero-grade drone photography. If images are unusable, the design system requires adjustment: hero becomes a typographic treatment on dark green rather than a photographic background; photography grid section is replaced with a simpler illustration or omitted. **Impact:** Core visual direction changes if photography fails — photography review before build is a hard dependency.

> `[ASSUMPTION]` **Logo file not available at build:** Header uses a serif logotype treatment ("Markham Green Golf Club" in Cormorant Garamond/Playfair Display, Text Inverse, appropriate size) until client provides a logo file. **Impact:** Header must accommodate both the logotype and a future logo image without layout rework.

> `[ASSUMPTION]` **Cormorant Garamond vs. Playfair Display:** Both are specified as acceptable. Implementation stage selects based on visual testing with real photography. Cormorant is recommended for its refinement at display sizes; Playfair is recommended if the design feels too light on mobile. **Impact:** Font selection is reversible at implementation — no downstream redesign required.

> `[ASSUMPTION]` **Google review star color:** Trust bar stars use the gold accent color (#c8a84b) — same as CTA accent — to maintain color consistency. If this reads as a conflict, stars use Text Inverse white with a gold variant at lower opacity. **Impact:** Minor visual treatment decision; does not affect layout.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Photography quality | Drone shots not yet reviewed | Agency on receipt from client | Before build begins |
| Logo file | Not received from client | Client | Before header component is built; logotype fallback used until received |
| Google rating + review count | Not confirmed | Client | Before trust bar copy is finalized; placeholder used |
| Staff headshots | Not confirmed | Client | Before staff card components are built; initials placeholder defined |

---

## 25. Blockers and Risks

**Blockers:**
- Photography must be reviewed before the build begins. The hero component and photography grid section cannot be completed without confirming that drone shots are hero-grade.

**Risks:**
- **Photography risk (critical):** If drone shots are unusable, the entire visual direction (photography-forward, dark-overlay hero) must be redesigned before coding begins. The dark green palette works without photography, but the trust register drops from "quality golf club" to "competent local business template."
- **Font availability risk:** Cormorant Garamond is available via Google Fonts. If license constraints or performance concerns arise, Playfair Display is a direct fallback with nearly identical brand positioning.
- **Gold legibility on dark green:** At specific brightness levels, #c8a84b on #1a3a2a may not pass 4.5:1 contrast. Exact values must be verified at token-definition time. If contrast fails, the CTA button text switches to Text Inverse (#f5f0e8) — gold bg, white text — which has higher contrast and remains visually consistent.

---

## 26. Handoff to Next Stage (07-Implementation-Plan)

**Design system status:** Complete with flags — photography review and logo file are pre-build dependencies.

**What 07-implementation-plan must preserve from this design system:**
- CSS custom property token system at `:root` — all color roles as defined; no new colors introduced without flagging
- 8px spacing base unit — all values in multiples
- Serif headings (Cormorant Garamond or Playfair Display) for H1–H3 only; sans-serif (Inter) for all body/UI
- Gold accent used only on CTA buttons and hover states — never as a section background or dominant element
- `prefers-reduced-motion` CSS block in `globals.css` — always present
- Photography-forward hero — `<Image>` with priority flag, WebP, explicit dimensions
- `siteConfig.bookingUrl` toggle — must be implemented before launch

**What flexibility exists for build planning:**
- Exact serif font choice (Cormorant Garamond vs. Playfair Display) — test both at implementation
- Exact color values within the defined ranges — final hex values set at CSS token definition
- Internal spacing values within defined ranges (e.g., 80px vs. 96px section padding)
- Staff card layout variant (photo left vs. photo above) — test for visual rhythm

---

## 27. Instructions for Build and Code Skills

### 07-Implementation-Plan
> Design system defines all visual rules. Build planning must account for: (1) `next/font/google` for Cormorant Garamond (or Playfair Display) and Inter — both loaded with CSS variable output; (2) Hero component using Next.js `<Image>` with `priority` flag and responsive `sizes` prop — LCP performance is critical; (3) Sticky dark green header component — dark surface maintained on all pages at all scroll positions; (4) `SectionWrapper` component with `bg` prop variants: `"dark"` (#1a3a2a), `"dark-alt"` (#0f1f17), `"light"` (#f8f5f0), `"light-alt"` (#f4f4f4); (5) CSS-only `@keyframes fadeUp` animation classes in `globals.css` — no JavaScript scroll observers; (6) `siteConfig.ts` with `bookingUrl: string | null` field — CTA render logic depends on this.

### Code / frontend implementation
> CSS custom properties at `:root` in `globals.css`. Tailwind `tailwind.config.ts` extends colors with `surface-dark`, `surface-dark-alt`, `surface-light`, `surface-light-alt`, `accent`, `accent-hover`, `text-primary`, `text-inverse`, `text-secondary`, `border-warm`. Component build order: (1) globals.css tokens + Tailwind config + font loading; (2) Button component (primary, secondary, compact inline variants); (3) SectionWrapper; (4) Sticky Header + mobile drawer; (5) Footer; (6) TrustBar; (7) PricingTierCard; (8) StaffCard (brief + full variants); (9) CTABand; (10) PhotoGrid; (11) page assemblies. Anti-AI checklist must pass before any page is considered complete.
