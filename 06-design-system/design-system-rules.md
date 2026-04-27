# Design System Rules

This file defines the rules and decision criteria for each layer of the visual design system. Apply these in order when building the design system output.

---

## 1. Color System

### Role-first, not value-first
Define what each color does before assigning values. Every color in the system must have a named role.

**Required color roles:**
- **Primary:** Brand identity color. Used for primary CTAs, key highlights, active states. High contrast on white/light surfaces.
- **Primary Dark:** Deeper version of primary. Used for hover states on primary elements, section backgrounds if needed.
- **Neutral Base:** The dominant UI color — backgrounds, surfaces, text areas. Usually a white or off-white.
- **Neutral Mid:** Supporting surfaces, card backgrounds, dividers, subtle separators. Slightly off-base.
- **Neutral Strong:** Borders, disabled states, subdued UI chrome.
- **Text Primary:** The main body and heading text. Near-black or dark gray — never pure #000000 (too harsh).
- **Text Secondary:** Supporting text, captions, labels, muted info. Lighter than primary.
- **Accent:** Optional. A secondary brand color for non-CTA highlights. Should complement primary, not compete with it. Omit if it adds noise.
- **Success:** Confirmation states, form success, positive trust cues. Green family — muted, not neon.
- **Warning:** Important notices, optional fields, attention. Amber/yellow family — muted.
- **Error:** Form validation, destructive state, broken states. Red family — muted, not alarming.

### Color restraint rules:
- Maximum 2 brand colors in active use at once (primary + optional accent)
- Do not use more than 3 background tones across the whole site (white/off-white, light neutral, and optionally one brand-tinted section)
- Semantic colors (success, warning, error) are for UI states only — they should not appear in hero sections or decorative contexts
- Primary color should not appear in large surface areas — it should feel intentional and powerful when it does appear

### Trust-related color rules:
- Avoid neon, oversaturated, or harsh palettes for trust-oriented businesses
- Blue families communicate trust and stability broadly — use with restraint, not as default
- Warm neutrals (cream, warm white, soft beige) convey approachability — good for local/community-focused brands
- Dark backgrounds require extra care: they can communicate premium but reduce approachability — match to register

---

## 2. Typography System

### Define four text roles:
- **Display / H1:** The largest heading. Used for hero headings and major page titles. Weight 700–800. Should be confident, not decorative.
- **Heading / H2–H3:** Section headings. Weight 600–700. Clear hierarchy below display.
- **Body:** Default reading text. Weight 400. Size 16–18px. Line height 1.55–1.7. Optimized for readability.
- **UI Label / Small:** Button text, nav labels, captions, tags. Weight 500–600. Size 13–15px.
- **Supporting / Fine Print:** Legal text, footnotes. Weight 400. Size 12–13px. Not used for primary content.

### Font pairing rules:
- 1–2 typefaces maximum across the whole system
- If 2 typefaces: one for headings, one for body. They should not compete visually.
- Safe heading directions: geometric sans (Geist, Inter, DM Sans), humanist sans (Outfit, Plus Jakarta, Nunito Sans), editorial serif (Playfair Display, Lora, Source Serif) for premium/editorial contexts
- Safe body directions: system-neutral sans (Inter, system-ui), warm readable sans (Nunito, DM Sans)
- Avoid: display fonts with poor legibility at body size, mixing two serif fonts, mixing two very similar fonts, using script fonts at any UI scale
- Do not use a font because it is currently popular — use it because it fits the visual register

### Typography hierarchy rules:
- Heading hierarchy is communicated through weight contrast and size difference — not color difference alone
- Body text must never be below 16px on desktop, 15px on mobile for primary content
- Line length: 55–75 characters per line for body text — constrain with `max-width` on text containers
- Headings should not have excessively high line height — tighter line height (1.1–1.3) for large headings

---

## 3. Spacing and Layout Rhythm System

### Base unit:
Use an 8px base unit. All spacing values should be multiples of 4 or 8.

**Spacing scale direction:**
- XS: 4px — fine adjustments, tight inline spacing
- SM: 8–12px — component internal spacing, label-to-field gaps
- MD: 16–24px — card padding, group separators
- LG: 32–48px — section internal padding, content block gaps
- XL: 64–96px — section-to-section vertical spacing
- 2XL: 96–128px — major section divisions, hero padding

### Section spacing rules:
- Use consistent vertical rhythm between sections — do not alternate between cramped and spacious randomly
- The vertical padding of a section should communicate its importance — major sections breathe more
- On mobile, section vertical padding should be 50–65% of desktop values (narrower screen means less whitespace needed proportionally)

### Container width rules:
- Max content width: 1200–1280px for standard content, 1440px for hero/full-bleed sections
- Text content max width: 680–720px for single-column body text (readability constraint)
- Card grids: 3-column on desktop, 2-column on tablet, 1-column on mobile (standard)

### Alignment rules:
- Left-aligned body text for readability (not centered)
- Center-aligned: acceptable for short hero headlines, CTA blocks, and stat callouts only
- Never center-align long body paragraphs

---

## 4. Radius, Shadow, and Surface Rules

### Radius:
- Buttons: 4–8px (conservative and trustworthy) or 6–10px (friendly but not childish). Never pill-shaped by default unless explicitly part of the brand.
- Cards: 6–12px. Match button radius style.
- Form inputs: 4–8px. Should feel consistent with buttons.
- Badges/tags/chips: 4px or pill-shaped — fine here.
- Images: 0px by default. If rounding is used, use 8–12px maximum. Circular crops only for profile/team photos.
- Rule: Radius should be consistent across component families. Do not mix wildly rounded cards with sharp buttons.

### Shadow:
- Use shadows sparingly — they are a trust signal only when used with restraint
- Cards: subtle shadow (e.g., `0 1px 4px rgba(0,0,0,0.06)` or equivalent direction)
- Elevated modals/dropdowns: more visible shadow (`0 8px 32px rgba(0,0,0,0.12)` or equivalent)
- Banned: stacked shadows, colored glow shadows, heavy dark shadows on light cards
- Default: no shadow on sections, dividers, or headers — use surface color variation instead

### Surfaces:
- Alternate between 2–3 surface tones for section backgrounds (white, off-white/light neutral, optionally light-brand-tinted)
- Section backgrounds are how visual rhythm is created — do not rely only on spacing
- Avoid: gradient backgrounds across full sections, dark-then-light-then-dark unpredictable alternation

---

## 5. Component Rules

### Buttons

**Primary button:**
- Background: primary color. Text: high-contrast (white or very dark depending on primary).
- Size: 44–52px height (tap-comfortable). 16–24px horizontal padding.
- Weight: 600. Size: 15–16px. Letter-spacing: 0 to +0.01em.
- Hover: darken primary by 10–15% or lift with subtle shadow. Not glow.
- Active: depress slightly (scale 0.98).
- Disabled: 40% opacity. Cursor: not-allowed.

**Secondary button:**
- Outlined: 1.5–2px border in primary or neutral-strong. Transparent or white/neutral background.
- Size: match primary button.
- Hover: light fill of primary at 8–12% opacity.

**Ghost / text button:**
- No border, no background. Text in primary or text-primary color.
- Hover: underline or light background highlight.
- Use only for low-priority actions.

**CTA button in hero or section:**
- May be slightly larger (52–56px height) for prominence. Otherwise same as primary.

### Cards

- Padding: 20–32px internally
- Background: white or neutral-mid surface
- Border or shadow: subtle — one or the other, not both
- Radius: consistent with system
- Hover: if interactive, subtle lift (shadow increase) or border-color change
- Do not put gradients on standard cards

### Forms

- Input height: 44–52px
- Label: above the field, 13–15px, weight 500, text-secondary or text-primary
- Placeholder: lighter than label text — placeholder is not a label substitute
- Focus state: primary-color outline or border — visible and clear
- Error state: red-family border + error message below field (not tooltip)
- Success state: green-family indicator after successful validation
- Submit button: full primary button style
- Form width: constrained — do not let forms stretch edge-to-edge on wide screens

### Navigation

- Desktop: horizontal nav bar, sticky or fixed, height 60–72px
- Logo: left-aligned
- Links: right-aligned, with CTA button at far right (visually distinct)
- Active state: underline or color change — clearly indicates current page
- Hover: color shift or underline — not background fill by default
- Mobile: hamburger menu or slide-out drawer — not a dropdown on mobile
- Mobile nav: full-width stacked links, large tap targets (48px minimum height per item)
- Background: white/light or very dark — high contrast. Never transparent on scroll until hero clears.

### Testimonial / Review Blocks

- Include: reviewer name, optionally photo, optionally title or context, review text, optionally star rating
- Do not use: generic avatars, initials-only circles, fake-looking placeholder graphics
- Layout options: horizontal scroll card row, 3-column grid, or single featured quote with attribution
- Visual treatment: clean quote text, strong typography contrast from body text, no decorative quotation mark SVGs unless they are tasteful and small

### Trust Bars (logo rows, certification badges)

- Visual: grayscale logos preferred — color logo rows look chaotic
- Spacing: generous padding, horizontally balanced
- Size: consistent height across logos (normalize)
- Label above: "Trusted by..." or "Certified by..." — small, muted label
- Do not: use random colored badge shapes, inconsistent logo sizes

---

## 6. Component State Rules

Define all interactive components with these states where applicable:

| State | Visual behavior |
|---|---|
| Default | Base appearance as defined |
| Hover | Subtle color shift, shadow increase, or underline — no transform by default |
| Focus | Visible outline (2–3px, primary color or accessible blue) — never remove focus visible |
| Active | Slight scale down (0.98) or darker fill |
| Disabled | 40% opacity, cursor: not-allowed, no hover effects |
| Loading | Spinner or skeleton state — same dimensions as component |
| Error | Red-family border/outline + error text below |
| Success | Green-family indicator + confirmation text |

---

## 7. Section and Layout Rhythm Rules

- Each section should be visually self-contained — a visitor should be able to understand the section's purpose without reading the sections above or below it
- Alternating section background tones creates visual rhythm without requiring dividers
- Do not put visible borders between every section — it adds visual noise
- Within a section: heading → supporting text → content → CTA. This vertical order should be consistent.
- CTAs at section footers should be visually consistent across the site (same button style, same spacing treatment)

---

## 8. Imagery and Media Rules

**Photography tone:**
- Real over stock — real people, real work, real environments
- For local businesses: on-site photography is highest trust; lifestyle stock is second; generic business stock is last resort
- Consistent warmth and tone across all images (don't mix warm and cold-color photos)
- Avoid: overlit white-background fake-professional shots, diverse-smiling-team-at-whiteboard corporate stock, generic handshake-in-suits imagery

**Before/after visuals:**
- Use a slider component or clear side-by-side layout
- Label both sides clearly
- Before/after is a high-trust component — quality of the photos determines its conversion value

**Icons:**
- Single style throughout (all outline, all filled, or all line-weight consistent)
- Size consistent within context (e.g., all feature icons are the same size)
- Do not mix icon families (no mixing Heroicons with Font Awesome with custom SVGs unless normalized)
- Icons do not replace headings or text — they support them

**Image aspect ratios:**
- Define a consistent set — e.g., hero: 16:9 or full-bleed; service cards: 3:2 or 16:10; team photos: 1:1 (square or circle crop)
- Consistent ratios prevent layout instability and create visual cohesion

---

## 9. Motion and Animation Rules

**Default level: Subtle**
Unless explicitly specified otherwise, motion should be minimal and purposeful.

**Allowed motion:**
- Fade-in on scroll (opacity 0→1, translate Y +16→0, duration 300–500ms, ease-out)
- Hover transitions on buttons and cards (200–250ms ease)
- Navigation transitions (mobile menu open/close: 250–300ms ease)
- Page transitions: subtle fade if used at all

**Banned motion (by default):**
- Looping background animations
- Parallax scrolling effects (unless very subtle and tested for mobile)
- Staggered animations on large content grids
- Auto-playing video backgrounds
- Progress bars, counters, or animated numbers unless there is a specific strategic reason
- SVG path animations for decorative elements
- Entrance animations on every element on the page

**Timing philosophy:**
- Duration: 150ms (micro), 250ms (standard), 400ms (page-level)
- Easing: ease-out for entrances, ease-in for exits, ease-in-out for state changes
- Do not use linear timing for anything visible to the user

**Reduced motion:**
- All animations must respect `prefers-reduced-motion: reduce` — provide a no-motion fallback

---

## 10. Trust Styling Rules

Trust is not achieved through decoration — it is achieved through clarity, proof visibility, and restraint.

**What makes a site feel trustworthy visually:**
1. High contrast, readable text — if it's hard to read, it's hard to trust
2. Proof is prominent — testimonials, reviews, star ratings, before/after are above the fold or within the first 2 scrolls
3. Contact is visible without effort — phone number or booking button accessible from every page
4. Forms are clean and minimal — complicated forms feel risky
5. Real photography — fake stock photos reduce trust more than no photos
6. Visual hierarchy is clear — visitors are never confused about what to look at or do next
7. Guaranteed callouts are distinct but not flashy — a guarantee badge should be visible, not screaming
8. No visual noise competing with the message — clutter reads as chaos, which reads as unreliable

**Trust styling implementation rules:**
- Review/testimonial blocks must use real names and optionally real photos — generic initials avatars are a trust penalty
- Star ratings must be actual star SVGs — emoji or text stars reduce credibility
- Trust bars (certifications, partners, media logos) must be sized consistently and use a single treatment (grayscale preferred)
- Guarantee badges: simple, clean, high-contrast — no cartoon badges, no gold/glossy treatment
- Form reassurance text: include one short line near the form submit button ("No spam. We'll call within 1 business day.") — this is a trust micro-element

---

## 11. Accessibility Rules

These are visual design rules, not backend requirements.

**Contrast:**
- Normal text (under 18px): minimum 4.5:1 contrast ratio against background
- Large text (18px+ regular, 14px+ bold): minimum 3:1
- UI components (buttons, input borders, focus indicators): 3:1 against adjacent colors

**Text sizes:**
- Body text minimum: 16px (desktop), 15px (mobile)
- UI labels minimum: 13px
- Fine print minimum: 12px — and it should be genuinely fine print, not important information

**Focus visibility:**
- Never remove the default focus outline without replacing it with a visible custom focus style
- Focus indicator: 2–3px solid outline, primary color or accessible blue (#005FCC or equivalent direction)
- Focus offset: 2–3px outside the element

**Tap targets:**
- Minimum tap target: 44×44px on mobile
- Minimum touch-friendly link text: not single characters or very short phrases without padding

**Motion:**
- Respect `prefers-reduced-motion` — always

**Color as information:**
- Never use color alone to communicate state — always pair color with a shape, icon, or text cue (e.g., error state = red border + error icon + error text, not red border alone)
