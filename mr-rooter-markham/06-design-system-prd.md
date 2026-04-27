# DESIGN SYSTEM PRD
**Project:** Mr. Rooter Plumbing of Markham
**Build type:** Redesign
**Date:** 2026-04-20
**Stage:** 06-design-system — output complete
**Visual register:** 65% toward Premium / 35% Approachable — Trusted Professional Local
**Wireframe PRD status:** Strong

---

## 1. Project Overview

Mr. Rooter Plumbing of Markham is a 13-page local plumbing service site serving Markham and York Region, Ontario. The primary design priority is trust through restraint — the site must look like the most credible option in local search without relying on visual gimmicks, red-everywhere franchise aesthetics, or generic contractor template patterns. Every visual decision serves the dual-audience conversion goal: emergency callers need immediate orientation and a tap-to-call number; scheduled shoppers need a professional, credible look that builds confidence over multiple sections.

---

## 2. Design System Summary

**Visual direction in one sentence:** "Clean, structured, trades-professional design with a controlled use of brand red, dark navy trust surfaces, and real local photography — built to outperform every generic contractor site in Markham on visual credibility."

**Color approach:** White/light-grey primary surfaces. Dark navy for TrustBar, CTABand, and footer. Brand red (#C41515) for primary CTAs and the CTABand — nowhere else as a background. Yellow (#F59E0B) for OfferBanner only — the only warm accent.

**Typography approach:** Single typeface (Inter). Weight variation handles all hierarchy. No decorative type. Heavy on headings (700–800), clean on body (400).

**Spacing approach:** 8px base unit. Generous section padding on desktop. Purposeful density — not cramped, not airy luxury. Content-forward.

**Motion level:** Subtle. Fade-in on scroll for section content. Smooth transitions on interactive elements. No parallax, no looping, no entrance animations on CTAs.

**Key constraints:**
1. Brand red (#C41515) is used ONLY for primary CTA buttons, the CTABand background, and the emergency service page hero. Never as a section background anywhere else.
2. The phone number is a visual component — it must be styled to be immediately legible at every placement: header, hero, CTABand, footer, MobileBottomBar.
3. No visual element borrowed from the mrrooter.ca template design or generic franchise aesthetics.

---

## 3. Critique of Wireframe PRD

**Overall wireframe PRD quality:** Strong

**Issues identified:**

> **[IMAGERY]** Problem: Hero background image source is unconfirmed. Design impact: Hero visual treatment cannot be finalized without knowing whether we have real photography or stock. Resolution: Design system defines the hero treatment as a gradient-overlay-on-photography pattern. On mobile, dark gradient replaces the full-bleed image. Real photography preferred; stock must pass the "real trades work" test (no smiling contractor on white background).

> **[EMERGENCY VARIANT]** Problem: The /services/emergency page requires a "dark or red" hero background — both options were left open. Design impact: Need to decide which creates better urgency without cheapness. Resolution: Dark background (#111827) chosen over red for the emergency hero. Red at full-bleed feels alarmist and cheap. Dark navy with a large red call button conveys urgency through contrast, not alarm.

No send-back triggered. Wireframe PRD is complete and well-formed for design system work.

---

## 5. Overall Visual Direction

**Brand-feel translation:**

| Input (from discovery/planning/brand direction) | Translated rule |
|---|---|
| "Clean and professional (corporate trades)" | White dominant backgrounds. Grid-aligned content. No decorative fills. Clean borders or subtle shadows on cards. |
| "Restrained use of red" | Red (#C41515) appears ONLY on: primary CTA buttons, CTABand background, emergency hero variant, and hover states. Max 1 red element per section (the CTA button). |
| "No franchise template appearance" | No full-width red headers. No clip-art icons. No scrolling logo marquees. No "call us today!" banner patterns. Every element must have structural purpose. |
| "Local, not corporate" | Real photography where possible. City-specific text visible in hero and section copy. No abstract geometric backgrounds. |
| "Proof-first trust" | TrustBar stats, star ratings, and review cards are first-class visual elements — same visual weight as section headings. Not secondary content. |
| "Bold and confident trades" | Section headings use weight 700–800. TrustBar stats use large type (2–3rem). CTABand phone number is larger than any heading on the page. |
| Banned: "clip-art icons, cheap red-everywhere layouts, stock clichés" | Service icons: lucide-react outline style, consistent 24px, no custom illustration. No full-section red fills. Hero image must show actual plumbing work context. |
| Animation: "Subtle — fade-on-scroll only" | Fade-in + translateY(12px → 0) on scroll. No parallax. No looping. Button hover: color transition only. |

**Visual register placement:** 65% toward premium / professional, 35% approachable-local. The site should look better than every competitor in local search without looking like a luxury brand or a corporate firm.

**Primary design priority:** Trust through restraint and proof visibility. The design's job is not to impress — it is to make the visitor feel certain they've found the right plumber.

---

## 6. Color System

**Palette overview:** Controlled and purposeful. White dominates. Dark navy anchors trust sections. Red is a precision tool — used where the brand needs to say "act now." Yellow appears exactly once (OfferBanner). No warmth tint on whites — clean, not cream.

| Role | Direction | Usage rule |
|---|---|---|
| Brand Red (Primary) | `#C41515` — strong, desaturated red | CTA buttons only, CTABand background, emergency hero variant |
| Brand Red Hover | `#A31010` — 15% darker than primary | Hover state on all brand-red interactive elements |
| Dark Surface | `#111827` — very dark navy-grey | TrustBar background, Footer background, emergency hero variant (alternative to red) |
| Dark Surface Alt | `#1F2937` — slightly lighter dark | Optional: dark card backgrounds in footer, alternative section variant |
| Surface 1 | `#FFFFFF` — pure white | Primary page background, most sections |
| Surface 2 | `#F4F4F5` — neutral light grey | Alternating sections (ServicesGrid, WhyUs alternation) |
| Accent Yellow | `#F59E0B` — amber/yellow | OfferBanner background ONLY. Nowhere else. |
| Accent Yellow Hover | `#D97706` | Hover state on OfferBanner CTA link |
| Text Primary | `#111827` — same as dark surface | All headings, primary body text |
| Text Secondary | `#6B7280` — medium grey | Supporting text, labels, meta, card descriptions |
| Text Inverse | `#FFFFFF` | Text on dark or red backgrounds |
| Text Inverse Secondary | `rgba(255,255,255,0.75)` | Supporting text on dark/red surfaces |
| Border Default | `#E5E7EB` | Card borders, input borders, dividers |
| Border Focus | `#C41515` (brand red) or `#3B82F6` (accessible blue) | Form input focus ring |
| Success | `#16A34A` — muted green | Form success state |
| Error | `#DC2626` — red family | Form error state (same family as brand red, darker shade) |

**CSS custom property names (for implementation):**
```css
--color-brand-red: #C41515;
--color-brand-red-hover: #A31010;
--color-surface-dark: #111827;
--color-surface-dark-alt: #1F2937;
--color-surface-1: #FFFFFF;
--color-surface-2: #F4F4F5;
--color-accent-yellow: #F59E0B;
--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-text-inverse: #FFFFFF;
--color-text-inverse-secondary: rgba(255,255,255,0.75);
--color-border: #E5E7EB;
--color-success: #16A34A;
--color-error: #DC2626;
```

**Contrast requirements:**
- `#111827` on `#FFFFFF`: ~16.7:1 — AAA ✓
- `#6B7280` on `#FFFFFF`: ~4.6:1 — AA ✓
- `#FFFFFF` on `#C41515`: ~5.0:1 — AA ✓ (verify with actual hex)
- `#FFFFFF` on `#111827`: ~16.7:1 — AAA ✓

**Anti-AI color check:**
- [x] No gradient fills on large surfaces
- [x] No neon or oversaturated primary (red is strong but not neon)
- [x] No per-section different accent colors (yellow only on OfferBanner; red only on CTAs and CTABand)
- [x] Maximum 2 active brand colors in the UI at once (red + dark navy, or yellow + white)

---

## 7. Typography System

**Typeface direction:** Inter — geometric sans-serif loaded via next/font/google. Single typeface, all weights. Weight variation is the only typographic tool. No decorative display fonts, no serif mixing.

**Why Inter:** Clean, professional, legible at all sizes. Standard in polished digital products without feeling generic. Works extremely well for a trades professional context — readable at 12px (fine print) and impactful at 56px (hero). Neutral enough to let the content lead.

**Type scale:**

| Role | Size desktop | Size mobile | Weight | Line height | Usage |
|---|---|---|---|---|---|
| Display / H1 | 44–52px | 30–36px | 800 | 1.1 | Hero headline, emergency page headline |
| Heading / H2 | 30–36px | 24–28px | 700 | 1.2 | Section headings ("Why Markham Trusts Mr. Rooter") |
| Subheading / H3 | 20–24px | 18–20px | 600 | 1.3 | Card titles, FAQ questions, WhyUs item headings |
| Body | 16–17px | 16px | 400 | 1.6 | All body paragraphs, service descriptions |
| UI Label | 14–15px | 14px | 500–600 | 1.4 | Button labels, nav links, badge text |
| Fine Print | 12–13px | 12px | 400 | 1.5 | Privacy policy, form microcopy, legal |
| Stat / TrustBar | 28–36px | 22–28px | 700–800 | 1.0–1.1 | TrustBar numbers ("30+", "5★"), CTABand phone |
| Phone Display | 36–48px | 32–40px | 700 | 1.0 | CTABand phone number, emergency page phone |

**Typography rules:**
- Body text max-width: 680px to prevent overly long line lengths
- Headings: weight only for hierarchy — no color variation on headings (all #111827 on light surfaces, all #FFFFFF on dark/red surfaces)
- No centered body paragraphs — center-align short hero sublines and TrustBar stat labels only; all multi-sentence body text is left-aligned
- Letter spacing on UI labels: `tracking-wide` (0.025em) on button text and nav links
- No italic except blockquote testimonials
- Stat/TrustBar numbers: use `font-variant-numeric: tabular-nums` for consistent digit width

---

## 8. Spacing and Layout Rhythm

**Base unit:** 8px

**Spacing scale:**

| Token | Value | Tailwind approx | Use |
|---|---|---|---|
| xs | 4px | `gap-1` | Fine inline spacing, icon-to-text gaps |
| sm | 8–12px | `gap-2` to `gap-3` | Component internals, tight label groups |
| md | 16–24px | `gap-4` to `gap-6` | Card internal padding (top level), element groups |
| lg | 32–40px | `gap-8` to `gap-10` | Section content internal gaps, grid gaps |
| xl | 64–80px | `py-16` to `py-20` | Standard section vertical padding (desktop) |
| 2xl | 96–112px | `py-24` to `py-28` | Hero and CTABand sections (desktop) |

**Container widths:**
- Full-bleed: 100vw — hero photography, TrustBar, CTABand, Footer, OfferBanner
- Standard content: `max-w-7xl` (1280px), centered, `px-4 sm:px-6 lg:px-8`
- Narrow content (body copy blocks): `max-w-2xl` (672px)
- Form containers: `max-w-lg` (512px)

**Density level:** Balanced — content-forward, not cramped, not luxury-open. Sections have clear breathing room without feeling padded for effect. The balance matters here: emergency callers need to find the phone quickly (dense = good), but the brand needs to feel professional (too dense = cheap).

**Mobile spacing adjustments:** Section vertical padding at 60% of desktop (xl → ~48px, 2xl → ~64px). Card padding: 16–20px. Container horizontal padding: 16px (mobile), 24px (sm). Grid gaps reduced by 25%.

---

## 9. Radius, Shadow, and Surface Rules

**Border radius:**
- Buttons: `rounded-md` (6px) — professional without being sharp or bubbly
- Cards: `rounded-lg` (8px) — matches button radius family
- Form inputs: `rounded-md` (6px)
- Images (non-hero): `rounded-lg` (8px) for service page images and card images
- Hero images: 0px radius (full bleed, no cropping radius)
- Tags/badges: `rounded-full` (pill) — used only for trust badges (e.g., "24/7" badge, "Licensed" badge)
- No radius variants larger than 12px anywhere except pill badges

**Shadow system:**
- Cards (on white/surface-1): `shadow-sm` — very light: `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)`
- Cards (interactive hover): `shadow-md` — `0 4px 12px rgba(0,0,0,0.12)`
- Header (scroll state): `shadow-sm` — `0 1px 4px rgba(0,0,0,0.10)`
- Modals / dropdowns: `shadow-lg` — `0 8px 24px rgba(0,0,0,0.15)`
- Banned: Colored glow shadows (no red glow on CTA buttons), stacked shadows, oversized blur radius

**Section surface pattern:**
- Surface 1 (White `#FFFFFF`): Homepage Hero, ServicesGrid, ReviewStrip, ServiceAreas, ContactBlock, most service page sections
- Surface 2 (Light grey `#F4F4F5`): WhyUs section, alternating sections on service pages (ServiceBody → CondensedTrustBar alternation), /about CommitmentsSection
- Surface Dark (Navy `#111827`): TrustBar, CTABand (combined with brand red for CTABand), Footer, emergency hero variant
- Surface Red (`#C41515`): CTABand background ONLY. The single section with a red background surface.
- Surface Yellow (`#F59E0B`): OfferBanner ONLY.

**Section alternation rule:** Surface 1 → Surface 2 → Surface 1 → Dark CTABand → Surface 1. Maximum 2 surface tones in sequence before returning to base. Never two dark sections adjacent.

---

## 10. Button Rules

**Primary CTA button (phone call + form submit):**
- Background: `--color-brand-red` (#C41515)
- Text: `--color-text-inverse` (#FFFFFF), weight 600
- Height: 48–52px (standard), 52–56px (hero large variant)
- Horizontal padding: `px-6` (24px) to `px-8` (32px)
- Font size: 15–16px
- Radius: `rounded-md` (6px)
- Hover: background `--color-brand-red-hover` (#A31010), transition `200ms ease`
- Active: `scale-[0.98]`, transition `100ms`
- Disabled: `opacity-50 cursor-not-allowed`
- Icon (for phone CTA): phone icon from lucide-react, 16px, left of text, `gap-2`
- No shadow on buttons — color contrast is sufficient
- No glow effect

**Secondary button (Schedule Service, outlined):**
- Background: transparent
- Border: `1.5px solid --color-brand-red`
- Text: `--color-brand-red`, weight 600
- Height: match primary
- Hover: background `rgba(196,21,21,0.06)`, border `--color-brand-red-hover`
- Use: Hero secondary CTA, header "Schedule Service" on desktop

**Secondary button on dark surfaces:**
- Background: transparent
- Border: `1.5px solid rgba(255,255,255,0.6)`
- Text: `#FFFFFF`, weight 600
- Hover: background `rgba(255,255,255,0.10)`, border `rgba(255,255,255,0.9)`
- Use: CTABand secondary link ("Or Schedule Service Online →")

**Ghost / text button:**
- No border, no fill, text color with underline on hover
- Use only for "View All Services →", "Read All Reviews →" type navigation links — never as a CTA

**Size variants:**
- Hero large: 52–56px height, `px-8`, 17px font
- Standard: 48px height, `px-6`, 16px font
- Compact (inline): 40px height, `px-4`, 14px font

**CTA label convention:** Direct action verbs. "Call (905) 472-9100" or "Call Now — 24/7", "Schedule Service", "Send My Request", "Request a Free Estimate." Never: "Submit", "Click Here", "Learn More" as primary CTAs.

**MobileBottomBar button treatment:**
- Left button [Call Now]: Full brand red, white text, phone icon
- Right button [Schedule Service]: Dark surface (#111827), white text, calendar icon
- Both buttons: Full height of bar (64px), equal width (50% each), no radius (edge-to-edge bar)

---

## 11. Card Rules

**Standard card (ServiceCard, WhyUs item):**
- Background: `--color-surface-1` (#FFFFFF) when on surface-2 sections; `--color-surface-2` when on surface-1 sections
- Padding: `p-5` (20px) to `p-6` (24px)
- Radius: `rounded-lg` (8px)
- Border: `1px solid --color-border` (#E5E7EB) — subtle definition on light backgrounds
- Shadow: `shadow-sm` at rest
- Hover (interactive cards / ServiceCards): `shadow-md`, `translateY(-2px)` transition, `border-color: rgba(196,21,21,0.20)` (very subtle red border accent on hover)
- No gradient fills

**ServiceCard:**
- Icon: lucide-react icon, 28px, brand red `#C41515`
- Title: H3 style (20–22px, weight 600)
- Description: 2 lines max body text, text-secondary color
- CTA link: "Learn More →" ghost button, bottom of card, appears on hover or always visible (designer's preference — always visible recommended for accessibility)
- Aspect ratio: no fixed image in v1 — icon-first card

**WhyUs item card:**
- Slightly more minimal than ServiceCard
- Icon: 32px, brand red
- Title: H3 style
- Description: 1–2 sentences
- No CTA link within the card — the section itself has a footer CTA

**ReviewCard:**
- Background: `--color-surface-1` on light sections; `--color-surface-2` if on a patterned surface
- Top: 5-star SVG rating (all filled, amber #FBBF24)
- Body: Quote text in body style, no quotation marks needed (star rating establishes it)
- Footer: Customer name (weight 600) + "· [Service type]" (text-secondary)
- Google attribution: small Google "G" icon or "Google Review" text, text-secondary, bottom right
- Padding: `p-5` or `p-6`
- No profile photo (not available)

**TrustBar stat item:**
- Icon: lucide-react, 24–28px, `--color-text-inverse` (#FFFFFF)
- Stat: `28–36px`, weight 800, `#FFFFFF`
- Label: `14px`, weight 500, `rgba(255,255,255,0.80)`
- Desktop: 4 columns, centered, `gap-8` or `gap-12` between items
- Mobile: 2×2 grid

---

## 12. Form Rules

**Input fields:**
- Height: `h-12` (48px)
- Label: above field, `14px`, weight 500, `--color-text-primary`
- Placeholder: `--color-text-secondary` at 70% opacity — descriptive hint only, never a label substitute
- Default border: `1px solid --color-border` (#E5E7EB)
- Hover border: `--color-text-secondary` (#6B7280)
- Focus border: `2px solid --color-brand-red` — no glow, just border
- Error state: `2px solid --color-error` (#DC2626) + error text below in `12px red`
- Success state (post-submit): field or form border turns `--color-success`
- Radius: `rounded-md` (6px) — matches button system
- Background: `#FFFFFF`
- Padding: `px-3 py-2.5`

**Dropdown (Service Type select):**
- Same styling as text input
- Custom select arrow: chevron-down from lucide-react, `--color-text-secondary`

**Radio buttons (Urgency selector):**
- Use styled radio cards instead of native radios — two options side by side as pill-style selectable buttons
- "Emergency — Need Service Today" (red accent when selected)
- "Scheduled — Within a Few Days" (standard accent when selected)
- Both: `py-3 px-4`, `rounded-md`, border default, weight 500

**Form layout:**
- Max width: `max-w-lg` (512px) for standalone /contact form; full section width in ContactBlock
- Field spacing: `space-y-4` (16px between fields)
- Submit button: full width of form, primary button style, `mt-6`
- Reassurance microcopy below submit: `text-sm text-secondary` — "We'll be in touch within 2 hours during business hours."
- Emergency inline alert: if Urgency = Emergency selected, show `bg-red-50 border border-red-200 rounded-md p-3` block with phone number

**ContactBlock layout (homepage two-column):**
- Desktop: form left (col-span-7), info sidebar right (col-span-5)
- Mobile: form full width, info below

---

## 13. Navigation Rules

**Desktop:**
- Height: 64–68px (default), 56px on scroll (shrink)
- Background: `#FFFFFF` — solid always (not transparent on load)
- Sticky: Yes — immediately sticky from page load. `position: sticky; top: 0; z-index: 50`
- Scroll state: `box-shadow: 0 1px 4px rgba(0,0,0,0.10)` — subtle header shadow on scroll
- Logo: left-aligned, full logo if available; text fallback: "Mr. Rooter Markham" in weight 700, brand red
- Nav links (Services / About / Service Areas / Reviews): center, `14–15px`, weight 500, `--color-text-primary`
- Active nav link: `--color-brand-red` color
- Nav link hover: `--color-brand-red` transition `150ms`
- Phone number: right side of nav, before CTA button. `font-weight: 600`, `--color-brand-red`. Click-to-call.
- CTA button: "Schedule Service" — secondary outlined button (brand red outline), far right. `height: 40px`

**Mobile header:**
- Height: 56–60px
- Logo: left-aligned
- Hamburger icon: right side, `44×44px` tap target minimum, lucide-react `Menu` icon
- Phone number and "Schedule Service" NOT in mobile header — handled by MobileBottomBar
- Mobile nav opens as slide-in drawer from right

**Mobile nav drawer:**
- Width: `min(320px, 85vw)`
- Background: `#FFFFFF`
- Links: full width, `16px font, weight 500, py-4 px-6`, separated by border-bottom
- Close button at top of drawer: `X` icon, right-aligned
- At bottom of drawer: `[Call Now]` button (full width, primary red) + `[Schedule Service]` link
- Focus trapping in open state
- `aria-expanded` on hamburger

---

## 14. Imagery and Media Rules

**Photography:**
- Hero: Real photography preferred — plumbing van with Markham context, technician at work, pipe repair in progress. If stock: must show actual plumbing work in context (not a person on a white background). Dark gradient overlay required for text legibility.
- Service pages: one image per service. Stock acceptable. Must show the actual service in context: drain being cleaned, sewer pipe, water heater unit, etc. Not a person shaking hands.
- About page: if team photos become available, add here. Without them, no photography needed — text and affiliations carry the section.
- No smiling contractor portrait on white background anywhere on the site.
- No clip-art, vector illustration, or cartoon imagery for services.

**Image tone:**
- Natural, realistic. No heavy colour grading, no moody dark edit.
- Slightly warm or neutral is acceptable. Cold/blue-tinted is not — trades contexts benefit from warmth.

**Aspect ratios:**
- Hero: `16:9` on desktop, `4:3` on tablet, `1:1` or cropped-center on mobile
- Service page images: `16:10` or `3:2` — consistent within the ServiceBody component
- No circular crops — no team photos to crop
- OfferBanner: no photography — text only on yellow background

**Icons:**
- Family: `lucide-react` — outline style
- Size: 24px in cards and sections; 28–32px in WhyUs items; 20px in nav and form elements; 16px inline
- Color: `--color-brand-red` in service cards and WhyUs; `--color-text-inverse` in TrustBar; `--color-text-secondary` in form elements
- One family only — no mixing icon libraries

**No photography needed:** /privacy-policy, /thank-you, navigation components, form fields.

---

## 15. Motion and Animation Rules

**Motion level:** Subtle

**Allowed:**
- Scroll fade-in: `opacity: 0 → 1` + `translateY(12px → 0)`, `duration: 400ms`, `ease-out`. Applied to: section headings, card grids (staggered), and body content blocks. NOT applied to CTAs — they must always be immediately visible and stable.
- Stagger on card grids: `delay: 0, 75, 150ms` for 3-column grids (max 3 stages of stagger)
- Button hover: `background-color` transition, `200ms ease`
- Mobile nav drawer: `translateX(320px → 0)`, `250ms ease-out`
- Link/nav hover: `color` transition, `150ms ease`
- Card hover: `box-shadow` + `translateY(-2px)`, `200ms ease`
- FAQ accordion open/close: `max-height` transition, `250ms ease-in-out` (avoid height: auto; use max-height pattern)
- Form radio card selection: `border-color` + `background` transition, `150ms ease`

**Banned:**
- Parallax scroll effects
- Auto-playing video or animated backgrounds
- Looping decorative animations
- Spinning, bouncing, or pulsing elements
- Entrance animations on primary CTAs (phone number, main CTA buttons) — these must always be visible and stable
- Heavy stagger delays (no > 200ms delay on any element)
- Scroll-driven animations (other than the simple fade-in above)
- `animation-iteration-count: infinite` on anything

**Reduced motion:** All animations must wrap in:
```css
@media (prefers-reduced-motion: reduce) {
  /* disable all transitions and animations */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 16. Trust Styling Rules

**Proof placement priority:**
- TrustBar stats must be visible within the first scroll on every page that includes them (homepage always; service pages: CondensedTrustBar)
- ReviewCard star ratings: actual SVG stars, amber (#FBBF24), 5 stars rendered individually
- Google rating badge: Google "G" icon + "4.9 (200+ reviews)" — small, inline, authentic-feeling. Not a mock badge.

**TrustBar styling:**
- Dark navy background (`#111827`) — creates a clear visual band that demands attention
- Stats in large weight type (28–36px, weight 800) with icons above
- All text inverse white
- Full-width, no card borders within it — it's a continuous trust band

**Done Right Promise® badge:**
- Simple treatment: circular or rectangular badge with "Done Right Promise®" text + checkmark icon
- Color: white text on brand red, or brand red text on white — must be legible
- Size: appropriate for inline use in WhyUs section — not a hero element
- No glossy, 3D, or skeuomorphic badge styling

**ReviewCard attribution:**
- Customer name: bold, real first name + last initial only (e.g., "Michael T.")
- Service type mentioned when available (e.g., "· Drain Cleaning")
- Google logo/attribution: small, legitimate-looking — not a "Google Reviews" banner

**Phone number styling:**
- In Header (desktop): `18–20px`, weight 600, brand red, tel: link, `hover: color: --color-brand-red-hover`
- In Hero: `24–28px` on desktop within the CTA button, or displayed separately in weight 700
- In CTABand: `40–48px`, weight 700, white, full tap target
- In MobileBottomBar: inside the button — not displayed as standalone text
- In Footer: `16px`, weight 600, white, tel: link
- Rule: every phone number instance is always a `<a href="tel:9054729100">` — never plain text

**Form trust cue:**
- Below form submit button: `14px`, `--color-text-secondary`, "We'll be in touch within 2 hours during business hours."

**Emergency inline alert (on /contact when Emergency selected):**
- Subtle `bg-red-50 border border-red-100 rounded-md p-3`
- Text: "For fastest response, call us directly: (905) 472-9100"
- Phone as tel: link within the alert

---

## 17. Accessibility Rules

- **Text contrast:** `--color-text-primary` (#111827) on white: ~16.7:1 AAA ✓. `--color-text-secondary` (#6B7280) on white: ~4.6:1 AA ✓. White on brand red (#C41515): must verify — use contrast checker at build time.
- **Focus indicator:** `2px solid` outline in `--color-brand-red` or `#3B82F6` (accessible blue), `outline-offset: 2px`. Never remove focus outlines.
- **Tap targets:** Minimum `44×44px` on all interactive elements on mobile. MobileBottomBar buttons: full height of 64px bar × 50% width — well exceeds minimum.
- **Motion:** `prefers-reduced-motion: reduce` must disable all defined animations (see Section 15).
- **Color as sole indicator:** Never use color alone to convey state (e.g., form errors must include text, not just a red border; active nav link must include text weight change or underline, not just color).
- **Form labels:** Always rendered above the field — never hidden or replaced by placeholder text. Labels must have `for` attribute matching input `id`.
- **Alt text:** All images must have descriptive alt text. Icons that are decorative: `aria-hidden="true"`. Icons that convey meaning: `aria-label` on parent button.
- **Semantic HTML:** H1 per page (one only). Heading hierarchy sequential (H1 → H2 → H3, never skipped). `<main>`, `<nav>`, `<footer>`, `<section>` landmarks required.
- **Skip link:** "Skip to main content" link at top of every page, visible on focus.

---

## 18. Anti-AI Design Check

- [x] No gradient fills on large surfaces — all surfaces are solid colors
- [x] No glassmorphism on content components — no blur or frosted glass anywhere
- [x] No neon or oversaturated palette — red is controlled, yellow is isolated to OfferBanner
- [x] No blob/shape backgrounds — no decorative SVG shapes or organic backgrounds
- [x] Conservative, consistent radius — 6px buttons, 8px cards, pill only for badges
- [x] No abstract icon-value rows with AI-generic icons — lucide-react outline icons with specific service meaning
- [x] Cards structured intentionally — ServiceCard, ReviewCard, WhyUs item each have specific, justified layouts
- [x] Stats in TrustBar use real, verifiable numbers only — verify review count before launch
- [x] Hero photography must show real plumbing context — screened against stock clichés
- [x] Maximum 3 section surface tones in the entire site (white, light grey, dark navy)
- [x] Shadows used sparingly — `shadow-sm` on cards, `shadow-sm` on scrolled header only
- [x] Animations minimal and purposeful — fade-on-scroll only, no looping
- [x] No SaaS UI decoration — no feature-benefit rows with abstract gradients, no "powered by" badges, no tech startup patterns

**Result:** Pass — no violations found. Design system is clean.

---

## 19. Desktop Visual Behavior

Full-bleed sections (OfferBanner, TrustBar, CTABand, Footer) span the full viewport width. All content within them is constrained to `max-w-7xl` centered. Hero is full viewport height (`100dvh`) on desktop with a background image and dark gradient overlay (bottom third especially for text legibility). Header is sticky from page load — content does not jump when it sticks. Section vertical padding on desktop: `py-20` (80px) for standard sections, `py-24` (96px) for hero-adjacent sections. The TrustBar has no additional margin between it and the hero — they share a visual boundary (hero fades to dark, TrustBar begins dark — continuous or near-continuous dark band effect). The CTABand is the only red full-width section — its visual impact depends on it being surrounded by non-red sections; never place two colored sections adjacent.

---

## 20. Mobile Visual Behavior

Hero: dark gradient background on mobile instead of full-bleed image (improves load time and readability for emergency callers on slow connections). Content stacks vertically: H1 → subline → phone CTA button (full width) → secondary CTA (full width or text link) → micro-trust badges (horizontal row, 3 badges, reduced size). TrustBar: 2×2 grid, `py-10`. ServicesGrid: 2 columns, `gap-4`. WhyUs: 2×2 grid. ReviewStrip: single column, all 3 cards stacked. ContactBlock: form full width, sidebar below. MobileBottomBar: fixed `h-16` (64px) at bottom of viewport. All page content has `pb-16` (64px) minimum on mobile to prevent the bar from overlapping content. Section horizontal padding: `px-4` (16px) on mobile.

---

## 21. Implementation Notes

**Framework:** Next.js 15 (App Router), TypeScript, Tailwind CSS 3.4

**CSS custom properties:** Define all color roles as CSS variables at `:root` in `app/globals.css`. Tailwind should extend the theme to use these CSS variables:
```js
// tailwind.config.ts
colors: {
  'brand-red': 'var(--color-brand-red)',
  'brand-red-hover': 'var(--color-brand-red-hover)',
  'surface-dark': 'var(--color-surface-dark)',
  'surface-1': 'var(--color-surface-1)',
  'surface-2': 'var(--color-surface-2)',
  'accent-yellow': 'var(--color-accent-yellow)',
  // etc.
}
```

**Font loading:** `next/font/google` — Inter with subsets `['latin']`, variable font if available:
```ts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
```

**Component build order (recommended):**
1. CSS variables + Tailwind config
2. `cn()` utility (clsx + tailwind-merge)
3. Typography base styles (globals.css)
4. Button component (all variants)
5. SectionWrapper (bg + padding + max-width)
6. Form components (Input, Select, RadioCard, Textarea)
7. Card components (ServiceCard, ReviewCard, WhyUs item)
8. TrustBar
9. Header + MobileNav + MobileBottomBar
10. Hero
11. Remaining sections top-to-bottom

**Component classification:** Sections and layout components that use scroll event listeners or browser APIs must be Client Components (`'use client'`). Pure data-rendering components (ReviewCard, ServiceCard, TrustBar data) can be Server Components.

**ScrollReveal component:** Use Intersection Observer API, not scroll event listeners. Pattern: `opacity-0 translate-y-3 → opacity-100 translate-y-0` with `transition-all duration-400 ease-out`. Apply to section content wrappers, not to individual stat items in TrustBar (TrustBar renders fully visible).

---

## 22. General Suggestions and Examples

**Tailwind class combinations to use consistently:**

Section wrapper pattern:
```tsx
<section className="bg-surface-1 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

Dark section pattern:
```tsx
<section className="bg-surface-dark py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
    {/* content */}
  </div>
</section>
```

Red CTA section (CTABand):
```tsx
<section className="bg-brand-red py-16">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 text-white text-center">
    {/* content */}
  </div>
</section>
```

Phone number display:
```tsx
<a href="tel:9054729100" className="text-brand-red font-semibold hover:text-brand-red-hover transition-colors">
  (905) 472-9100
</a>
```

---

## 23. Assumptions Made

- `[ASSUMPTION]` **Topic:** Hero image is stock photography. **Why:** No real photography confirmed. **Impact:** Hero visual quality depends entirely on stock image selection. Poor selection will undercut the "real local business" brand. Selection criteria: actual plumbing work, real context, no white-background portraits.

- `[ASSUMPTION]` **Topic:** Emergency hero variant uses dark (#111827) not red background. **Why:** Red at full-bleed looks alarmist and cheap; dark navy with red CTA button achieves urgency through contrast. **Impact:** If brand direction prefers red hero, this can be changed — but dark navy is strongly recommended.

- `[ASSUMPTION]` **Topic:** No real logo file — text fallback. **Why:** Logo availability not confirmed. **Impact:** Header uses "Mr. Rooter Markham" text in brand red as logo treatment. Once logo file is provided, replace with image component.

- `[ASSUMPTION]` **Topic:** White text on #C41515 meets contrast minimum. **Why:** Approximate calculation shows ~5:1. **Impact:** Must verify with a contrast checker at implementation time. If it fails AA at 4.5:1, darken the red slightly to `#B51212`.

- `[ASSUMPTION]` **Topic:** Radio card pattern for Urgency selector. **Why:** Standard radio inputs are small and hard to tap. Styled radio cards provide better touch targets and clearer UI. **Impact:** Requires a custom RadioCard component — minor build complexity.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Logo file format and quality | Not confirmed by client | Client | Before build: Header component |
| Hero image final selection | Stock sourcing not done | Agency | Before build: Hero component |
| White-on-red contrast verification | Must be checked with tool | Developer | During build: CTA button implementation |
| Service page image sourcing (5 images) | Not yet sourced | Agency | Before build: ServiceBody components |

---

## 25. Blockers and Risks

**Blockers:** None — build planning can begin.

**Risks:**
- **Hero image quality:** The difference between a credible local business and a generic template often comes down to the hero photo. If stock is used, the image brief must specify: real plumbing work in a residential context, real Markham/suburban setting preferred, no studio shots. This is the highest-risk visual decision in the build.
- **Red-on-white contrast:** `#C41515` on white (#FFFFFF) for the outlined secondary button text must be verified — it should meet 4.5:1 but must be confirmed.
- **Review count placeholder:** TrustBar shows "5-Star Rated" — the review count ("200+ Google Reviews") is a placeholder. If the real count is significantly lower (e.g., 12 reviews), the copy should be changed to "5-Star Rated" without a count rather than displaying a false number.

---

## 26. Handoff to Next Stage (07-implementation-planning)

**Design system status:** Complete

**What 07-implementation-planning must preserve from this design system:**
- The color role system — no new colors introduced in build without justification
- Brand red (#C41515) used ONLY as defined (CTA buttons, CTABand, emergency hero variant)
- The spacing base unit (8px) — all spacing values in Tailwind classes are multiples of 4px/8px
- The motion level: Subtle — only fade-on-scroll and hover transitions. No new animations.
- Anti-AI check: The design must not drift toward generic patterns during implementation.
- Phone number as structural brand requirement: tel: link everywhere, always.

**What flexibility exists for build planning:**
- Exact Tailwind class choices within the defined ranges
- Component file organization and naming
- Minor spacing adjustments within defined ranges (e.g., `py-20` vs `py-24` for a specific section)

---

## 27. Instructions for Build and Code Skills

### 07-implementation-planning
> Design system is frozen. Build planning must account for: (1) FAQAccordion requires a Client Component with `useState` for open/close logic and `max-height` CSS transition; (2) MobileNav drawer requires focus trapping (can use a simple `useEffect` with focusable element query, or a library like `@radix-ui/react-dialog`); (3) ContactForm requires Client Component with `react-hook-form` + Zod; (4) ScrollReveal requires Client Component with Intersection Observer; (5) RadioCard urgency selector requires custom Client Component; (6) MobileBottomBar must be rendered in root layout, not per-page. All components respect the design system above.

### Code / frontend implementation skills
> Implement design system as CSS custom properties at `:root` in `app/globals.css`. Extend Tailwind theme in `tailwind.config.ts` to reference CSS variables. Build components in the order specified in Section 21. Run the anti-AI checklist as a visual QA step before first draft is considered complete. Every phone number rendered on the site must be a `tel:` link. Every button label must follow the CTA label convention from Section 10.
