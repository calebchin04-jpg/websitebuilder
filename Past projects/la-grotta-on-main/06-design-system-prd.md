# DESIGN SYSTEM PRD
**Project:** La Grotta On Main
**Build type:** Redesign
**Date:** 2026-04-19
**Stage:** 06-design-system — output complete
**Visual register:** Warm-personal / Mid-premium (60% polished, 40% approachable)
**Wireframe PRD status:** Strong

---

## 1. Project Overview

La Grotta On Main is a 29-year-old family-owned Italian and Mediterranean restaurant in historic Unionville, Ontario, targeting couples planning a meaningful dinner out. The single most important design priority is this: the site must feel like a real, warm, exceptional restaurant within 5 seconds — not a template, not a chain, not a generic Italian cliché. Every visual decision serves that goal. Photography leads. Typography signals heritage and permanence. Whitespace communicates confidence. Gold is used as emphasis, never decoration.

---

## 2. Design System Summary

**Visual direction in one sentence:** Warm editorial heritage — generous whitespace, photography-forward layouts, a refined serif/sans typographic pair, and a restrained black/white/gold palette that communicates 29 years of earned quality without trying too hard.

**Color approach:** Near-black base text on warm white surfaces, with gold used strictly as an emphasis/CTA accent. A deep near-black surface for the footer and final CTA band. No competing colors, no per-section palette variation.

**Typography approach:** Mixed serif/sans-serif pair. Serif for display headings and hero text (heritage, permanence, editorial quality). Clean humanist sans-serif for body, UI, and navigation (readability, modernity). Weight and size create hierarchy — not color.

**Spacing approach:** 8px base unit. Generous section padding (open density). This is a restaurant designed for couples on a leisurely evening, not a utility site — the layout should breathe.

**Motion level:** Between subtle and moderate. Scroll-triggered fade-and-rise on section entry. Smooth transitions on interactive elements. Subtle parallax on hero only. No looping, no auto-play, nothing that distracts from content.

**Key constraints:**
1. Gold is used for CTAs, key emphasis, and the trust bar only — never as a background fill, section color, or decoration
2. No Italian restaurant visual clichés: no vine motifs, no red/green, no checkered patterns, no decorative script as primary headings
3. Photography is structural — no section that calls for photography may be replaced with illustration, gradient, or placeholder color

---

## 3. Critique of Wireframe PRD

**Overall wireframe PRD quality:** Strong

**Issues identified:**

> **[PHOTOGRAPHY DEPENDENCY]** Problem: Multiple sections (hero, story, signature dishes, gallery) require quality photography, and photo quality is unconfirmed. Design impact: The design system is being built for a photography-led layout — if photos are insufficient, the visual system may need to compensate with stronger typographic sections or overlay treatments. Resolution: Design system defines image treatment rules (overlay, cropping, framing) that are designed to elevate moderate-quality photography. Flagged as a risk.

> **[PHONE NUMBER DISPLAY SIZE]** Problem: Wireframe specifies the phone number on `/contact` should be "the largest text element on the page" — larger than standard headings. Design impact: The type scale must explicitly accommodate a display-size phone number treatment. Resolution: A dedicated "display callout" size is added to the type scale for this purpose.

---

## 4. Send-Back to 04-Wireframes

*Not triggered.*

---

## 5. Overall Visual Direction

**Brand-feel translation:**

| Input | Translated rule |
|---|---|
| "Sharper, less raw" (client) | Every component has defined proportions. No arbitrary sizing. Typography has clear weight contrast between heading and body. No unstyled default HTML elements in the build. |
| "Bull & Last reference — structure and polish, not color" | Generous vertical whitespace between sections (80–120px desktop). Photography fills full-width containers without overcropping. Text blocks are max-width constrained for readability. Sections have single clear jobs. |
| "Between subtle and moderate animation" | Scroll-triggered fade-up on section entry (16px rise, opacity 0→1, 450ms ease-out). Hover transitions on all interactive elements (200ms). Hero parallax at 0.15 depth factor maximum. Nothing loops. |
| "Keep existing color scheme (black/white/gold)" | Black/near-black for text and dark surfaces. Warm white/off-white for page backgrounds. Gold as single accent — CTA buttons, trust bar emphasis, decorative rule lines only. |
| "Not too distracting" | No looping animations. No auto-playing media. No background animations. No hover effects that move layout elements. Motion is entry-only or interaction-only. |
| "No Italian restaurant clichés" | Banned: vine/grape motifs, script font as primary heading, red/green palette, checkered or rustic texture backgrounds, candle iconography. |
| "Heritage restaurant, 29 years, earned permanence" | Serif display typeface for headings (editorial, not decorative). Generous leading. Conservative radius on all components. No trendy design patterns (glassmorphism, blobs, dark gradients). |
| "Family-owned warmth, not corporate" | Photography of real space — not stock. Text blocks use first-person where appropriate. Slight horizontal asymmetry acceptable in story sections. No symmetrical corporate grid rigidity. |

**Visual register placement:** 60% toward polished/premium, 40% toward warm/approachable. The equivalent of a very good local restaurant that has been open for 29 years — not a luxury institution, not a casual family trattoria.

**Primary design priority:** Atmospheric credibility through photography and typographic restraint. The site must feel like La Grotta On Main specifically — not like "an Italian restaurant website."

---

## 6. Color System

**Palette overview:** Warm neutrals anchored by near-black and warm white. A single gold accent used with strict restraint. A deep near-black surface for the footer, final CTA band, and the hero overlay. The palette reads as classic, considered, and warm — not cold minimalism and not decorative maximalism.

| Role | Direction | Usage rule |
|---|---|---|
| Background / Surface 1 | Warm white — very slightly cream-tinted, not pure #FFFFFF | Page backgrounds, primary section surfaces |
| Surface 2 | Very light warm gray — barely perceptible tint | Alternate section backgrounds for visual rhythm; use maximum 2–3 times per page |
| Surface Dark | Deep near-black — warm undertone, not cool charcoal | Footer, final CTA band, hero overlay base |
| Text Primary | Very dark near-black — rich, not pure #000 | All headings, primary body text, navigation links |
| Text Secondary | Medium-dark warm gray | Supporting copy, captions, metadata, form labels |
| Text Inverse | Warm white | All text on dark surfaces (footer, dark CTA band, hero overlay) |
| Gold Accent | Warm gold — amber-leaning, not yellow, not bronze | Primary CTA button fill, trust bar accent details, section rule/divider lines, hover states on key interactive elements |
| Gold Hover | Gold darkened 12–15% | Hover state on gold CTA buttons only |
| Border / Divider | Light warm gray | Card borders, input field borders, section dividers where needed |
| Success | Muted sage green | Form submission success states only |
| Error | Muted warm red | Form field errors only |

**Gold usage rules (strict):**
- Gold fills: CTA buttons (primary) and the trust bar accent only
- Gold as line/rule: thin horizontal rule lines (1px) under section headings — used sparingly, maximum 1 per page
- Gold as text: only for the trust bar stats ("29 Years", "4.3★") to create visual emphasis
- Gold is NEVER used as: section background, card background, icon fill, decorative shape, border on non-CTA elements, gradient component

**Contrast requirements:**
- Text Primary on Surface 1: must exceed 7:1 (AAA)
- Text Secondary on Surface 1: must meet 4.5:1 minimum
- Text Inverse on Surface Dark: must exceed 7:1
- Gold Accent with white text on CTA buttons: must meet 4.5:1 — verify chosen gold value against white text

**Anti-AI color check:**
- [x] No gradient fills on large surfaces
- [x] No neon or oversaturated colors
- [x] No per-section different accent colors
- [x] Maximum 2 active brand colors in the UI at once (near-black text + gold accent)

---

## 7. Typography System

**Typeface direction:** Two-typeface system.
- **Display / headings:** Serif — editorial, heritage feel. Candidates: Playfair Display, Cormorant Garamond, or Lora. Must have good weight range (Regular 400 + Bold 700 minimum). Should feel considered and permanent, not decorative. Playfair Display is the recommended choice — strong editorial quality, excellent at large sizes, well-supported in Google Fonts.
- **Body / UI / navigation:** Humanist sans-serif — clean, readable, modern without being trendy. Candidates: DM Sans, Inter, or Outfit. Must have clean numerals (for the phone number and star ratings). DM Sans is the recommended choice — warm humanist quality that pairs well with Playfair, excellent readability at small sizes.

**Type scale:**

| Role | Desktop size | Mobile size | Weight | Line height | Typeface | Usage |
|---|---|---|---|---|---|---|
| Display / H1 | 52–60px | 32–40px | 700 (Bold) | 1.1–1.15 | Serif | Hero headings only |
| Heading / H2 | 32–40px | 24–30px | 700 (Bold) | 1.2–1.25 | Serif | Section headings |
| Subheading / H3 | 22–26px | 18–22px | 600 (SemiBold) | 1.3 | Serif or Sans (consistent per context) | Sub-section heads, card titles |
| Body Large | 18–20px | 17–18px | 400 | 1.65–1.75 | Sans | Story section body, lead paragraphs |
| Body | 16–17px | 15–16px | 400 | 1.6–1.7 | Sans | Standard body copy, menu text, form labels |
| UI Label | 13–15px | 13–14px | 500–600 | 1.4 | Sans | Button text, nav links, category tabs, tags |
| Caption | 12–13px | 12px | 400 | 1.5 | Sans | Image captions if used, legal fine print |
| Display Phone | 44–52px | 36–44px | 700 | 1.0 | Sans | Phone number on `/contact` page only |
| Trust Stat | 28–36px | 22–28px | 700 | 1.1 | Sans | Trust bar stats (29 Years, 4.3★) |

**Typography rules:**
- Body text containers: max-width 680–720px to maintain readable line length (≈70 characters)
- Heading hierarchy: weight and size differentiate levels — not color. Headings are near-black on light surfaces, warm white on dark surfaces.
- Never center-align body paragraphs — center alignment is permitted only for hero taglines (2 lines max), trust bar stats, and CTA band headlines
- No italic body text — italic is reserved for review quote attributions only
- Letter-spacing on display headings: slightly loosened (0.01–0.02em) to match the editorial register. Body text: default (0)
- Menu text uses Body size (16–17px) with clear category headers in H3 — no smaller than 14px for any readable dish text on mobile

---

## 8. Spacing and Layout Rhythm

**Base unit:** 8px

**Spacing scale:**

| Name | Value range | Primary use |
|---|---|---|
| space-xs | 4px | Fine internal spacing (icon-to-text gap, star spacing) |
| space-sm | 8–12px | Tight component internals (input padding vertically, badge padding) |
| space-md | 16–24px | Card internal padding, element groups within sections |
| space-lg | 32–48px | Between cards in a grid, between form fields, section internal rhythm |
| space-xl | 64–80px | Between major content blocks within a section |
| space-2xl | 80–120px | Section-to-section vertical padding (desktop) |
| space-3xl | 120–160px | Hero top/bottom padding, major anchor sections |

**Container widths:**
- Full-bleed: 100vw — hero photography, footer, dark CTA band sections
- Standard content: max-width 1200px, centered, horizontal padding 32–40px on desktop
- Narrow text content: max-width 720px — story section body, menu text blocks
- Form container: max-width 560–600px — Private Functions inquiry form
- Trust bar content: max-width 960px — keeps stats well-spaced without over-stretching

**Density level:** Open. This is a heritage restaurant, not a utility dashboard. Sections breathe. The Bull & Last reference is the standard — generous vertical spacing, content that doesn't feel packed. The visitor should feel unhurried.

**Mobile spacing:**
- Section vertical padding: 56–72px (approximately 65% of desktop values)
- Card padding: 16–20px
- Container horizontal padding: 16–20px
- Trust bar: compact 2×2 grid (2 stats per row, 2 rows) at 16px padding

---

## 9. Radius, Shadow, and Surface Rules

**Border radius:**
- Buttons: 4–6px — slightly rounded, not pill-shaped, not square. Conservative.
- Cards (dish cards, review cards): 8–10px
- Form inputs: 4–6px — matches button family
- Gallery images: 0px — images are sharp-edged, not rounded. Rounding restaurant photography feels wrong at this register.
- Hero image: 0px — full bleed, no radius
- Tags / category tabs: 4px or pill-shaped (full radius) — tabs can be pill for softer feel

**Shadow system:**
- Standard cards (on Surface 1): `0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)` — very light, almost imperceptible depth
- Card hover lift: `0 4px 16px rgba(0,0,0,0.10)` — subtle elevation on hover for interactive cards
- Lightbox / modal overlay: `0 8px 40px rgba(0,0,0,0.20)` — stronger depth for overlays
- Sticky header (after scroll): `0 1px 8px rgba(0,0,0,0.08)` — light separation from page content
- Banned: colored shadows, glow effects (any color), layered stacked shadows, blur radius above 48px

**Section surface pattern:**
- Surface 1 (warm white): default background — majority of sections
- Surface 2 (very light warm gray): alternate sections — use for: trust bar, gallery section background, subtle visual rhythm breaks. Maximum 3 uses per page.
- Surface Dark (deep near-black): footer and final CTA band only. Creates strong visual anchor at page bottom.
- No other surface colors. No brand-colored section backgrounds. No gold section backgrounds.

---

## 10. Button Rules

**Primary CTA button (gold fill):**
- Background: Gold Accent
- Text: dark near-black (not white — verify contrast on chosen gold; if contrast fails, use deep near-black text)
- Height: 48–52px (desktop), 52–56px (mobile — larger tap target)
- Horizontal padding: 24–32px
- Font: UI Label size (14–15px), weight 600, sans-serif
- Radius: 4–6px
- Hover: Gold darkened 12–15%, no glow, no shadow lift
- Active: scale(0.98), 80ms
- Disabled: 35% opacity, not-allowed cursor
- Focus: 2px offset outline in gold

**Large CTA variant (hero use):**
- Height: 52–58px
- Horizontal padding: 28–36px
- Font size: 15–16px

**Secondary button (outlined):**
- Border: 1.5px, near-black on light surfaces / warm white on dark surfaces
- Background: transparent
- Text: near-black on light / warm white on dark
- Height: matches primary
- Hover: light fill (5–8% opacity of text color)
- Use: hero secondary CTA ("View Menu"), wherever a softer option sits alongside primary

**Ghost / text button:**
- No border, no background
- Underline on hover
- Use only for low-priority inline navigation actions (e.g., "View All Photos →" link below gallery teaser)

**CTA label convention:** Warm invitation verbs. "Reserve Your Table" / "Call to Book" / "View Menu" / "Send Enquiry" — never "Submit," "Click Here," "Learn More" as primary CTA labels.

---

## 11. Card Rules

**Dish / food card:**
- Layout: image top (fixed aspect ratio 4:3 or 3:2), content below
- Image: sharp-edged (0px radius on image itself), card has 8–10px radius
- Content padding: 16–20px
- Content: dish name (H3, serif), 1-line description (Body, sans-serif)
- No price on homepage dish cards (these are quality signals, not menu listings)
- Background: Surface 1 (warm white)
- Shadow: standard card shadow
- Hover: shadow lift only — no color change, no scale effect (feels wrong for restaurant)

**Review / testimonial card:**
- Quote text first (Body, sans-serif, italic)
- Attribution below: first name, "via Google" or "via OpenTable" (Caption, non-italic)
- Star rating: SVG star icons in gold, not emoji, not text
- No reviewer photo required (most Google reviews don't include one)
- Background: Surface 2 or Surface 1
- Left border accent: 2–3px gold vertical rule on left edge — subtle brand touch

**Trust bar items:**
- No card treatment — trust bar is a single horizontal band
- Items are stat + label pairs (number/rating above, label below)
- Stats in Trust Stat type size (28–36px), gold-tinted or bold
- Labels in UI Label size, Text Secondary color
- Horizontal dividers between items on desktop (1px, light warm gray)

**Private Functions feature list items:**
- Icon (outline style) + short heading + 1-line description
- Inline layout (icon left, text right) — not card-based
- No border, no shadow — these are list items, not cards

---

## 12. Form Rules

**Input fields:**
- Height: 48px
- Label: above field, Body size (15px), weight 500, Text Primary color
- Placeholder: Text Secondary color, weight 400 — descriptive hint, never a label substitute
- Border: 1.5px, Border/Divider color by default
- Focus border: 2px, Gold Accent (consistent with brand)
- Radius: 4–6px (matches button system)
- Error state: border changes to Error color (muted red), error message below field in Caption size, red text
- Background: Surface 1 (warm white)

**Textarea (message field):**
- Min-height: 120px
- Same border and focus rules as input
- Resize: vertical only

**Form layout (Private Functions inquiry):**
- Max-width: 560px, centered on desktop
- Field spacing: 20–24px between fields
- Submit button: full-width of the form container, Primary CTA button style
- Reassurance copy below submit: "We'll be in touch within 24 hours" — Caption size, Text Secondary, centered

**Form success:**
- Redirect to `/thank-you` — no inline success message needed

---

## 13. Navigation Rules

**Desktop sticky header:**
- Height: 64–72px
- Background: Surface 1 (warm white), solid — not transparent on load
- Sticky: immediately on scroll — no delay, no hide-on-scroll behavior
- Logo: left-aligned, max-height 36–40px within header
- Nav links: right-aligned, UI Label size, Text Primary color
- Link spacing: 28–32px between nav items
- Active state: gold accent underline (2px) below active page link
- Hover: Text Primary → Gold Accent color transition, 150ms ease
- CTA button: rightmost, primary gold button style, left margin 16–24px from last nav link
- Scroll shadow: `0 1px 8px rgba(0,0,0,0.08)` applies after first scroll

**Mobile header:**
- Height: 56–64px
- Layout: Logo left | "Reserve" button center-right | Hamburger icon rightmost
- "Reserve" button: small variant (height 36–40px), gold fill, visible without opening menu
- Hamburger: 44×44px tap target, near-black icon
- Menu open: full-screen overlay, dark near-black background, nav links in Display/H1 size centered, warm white text. Close button top-right.
- Mobile nav link tap target: full-width, 56px minimum height
- CTA button repeated in mobile menu: full-width, primary style

**Mobile tap-to-call bottom bar:**
- Height: 52–56px
- Background: Surface Dark (deep near-black)
- Content: phone icon (left) + "Call to Reserve — (905) 940-0235" (center) — warm white text, UI Label size
- Full-width, fixed to bottom of viewport
- Z-index: above all page content, below modals
- Hidden on `/contact` page
- Must not overlap page content — body padding-bottom accounts for bar height on all pages

---

## 14. Imagery and Media Rules

**Photography — general:**
- Real photography only. No stock photography of people, generic food, or interior templates.
- Sources: Yelp listing photos, @lagrottaonmain Instagram — curate for quality and warmth
- Rejected photos: anything blurry, poorly lit, phone-camera-casual, or inconsistent with the mid-premium register
- All selected photos should feel warm (natural or incandescent lighting, not fluorescent or cold flash)

**Hero photography:**
- Subject: interior atmosphere (fireplace, table settings, warm lighting) OR patio in warm weather — not a single food dish
- Must fill the full hero container — no letterboxing, no white bars
- Overlay: Surface Dark at 35–50% opacity — enough to ensure warm white text is readable (7:1 contrast) without losing the warmth and atmosphere of the image
- The overlay must not make the image feel dark/moody/nightclub — if the base photo is warm, the overlay preserves that warmth
- Avoid portrait-orientation photos in the hero — they crop poorly at wide desktop ratios

**Dish photography (Signature Dishes cards):**
- Aspect ratio: 4:3 — consistent across all dish cards
- Subject: the dish clearly centered, plated, warm-lit
- Avoid: dishes with poor plating, cluttered backgrounds, or harsh flash lighting
- If only 2 dishes have acceptable photos, use 2 cards — do not pad with inferior imagery

**Gallery photography:**
- All gallery images use a uniform cell aspect ratio: 1:1 (square) or 4:3 — do not mix ratios in the grid
- Lightbox view: full-size, original ratio, dark overlay background
- Lazy loading: all gallery images load on scroll — first 6 load on page arrival

**Private Functions hero:**
- Subject: event table setup, private dining room, or intimate gathering — not the regular dining room
- Overlay rules same as main hero

**Story section image:**
- Subject: interior warmth OR owner/family if available and client consents
- Aspect ratio: flexible — can be 3:4 (portrait) on desktop where it sits alongside text
- Treatment: no overlay needed — this image is in a content section, not a full-bleed hero

**Aspect ratio summary:**
- Hero (desktop): 16:9 or custom wide-crop (full viewport width × 100vh)
- Hero (mobile): 4:3 or 3:4 depending on crop — ensure key subject is preserved
- Dish cards: 4:3
- Gallery grid cells: 1:1 (square) uniform
- Story section image: 3:4 (portrait) or 4:3 (landscape) — context-dependent
- Private Functions hero: same as main hero

**Icons:**
- Style: outline (stroke-based), not filled
- Weight: consistent 1.5–2px stroke across all icons
- Size: 20–24px in UI contexts, 32px for feature list items
- Family: Lucide or Heroicons (both freely available, consistent quality)
- Use: navigation, mobile bottom bar phone icon, form field icons (if used), feature list on Private Functions

---

## 15. Motion and Animation Rules

**Motion level:** Between subtle and moderate

**Allowed animations:**

| Animation | Trigger | Properties | Duration | Easing |
|---|---|---|---|---|
| Section entry fade-up | Scroll into viewport (IntersectionObserver) | opacity 0→1, translateY 20px→0 | 450ms | ease-out |
| Card entry (staggered) | Scroll into viewport | Same as section entry, 60ms stagger between cards | 400ms | ease-out |
| Button hover | Mouse enter | background-color transition | 180ms | ease |
| Nav link hover | Mouse enter | color transition | 150ms | ease |
| Mobile nav open | Hamburger tap | Overlay opacity 0→1 + scale slight | 250ms | ease-out |
| Mobile nav close | Close tap | Reverse of open | 200ms | ease-in |
| Hero parallax | Page scroll | background-position Y at 0.15× scroll factor | — | CSS scroll-driven |
| Lightbox open | Image tap/click | Overlay opacity 0→1, image scale 0.95→1 | 300ms | ease-out |
| Lightbox close | X button / Escape | Reverse | 200ms | ease-in |
| Tab filter switch (Gallery) | Tab click | Grid fade: opacity 0.6→1 | 250ms | ease |
| Accordion open (FAQ) | Item click | Height auto expand + opacity 0→1 | 300ms | ease-out |

**Banned:**
- Looping animations of any kind
- Auto-playing video or animated backgrounds
- Parallax on any section other than the hero
- Entrance animations that delay content by more than 600ms
- Hover effects that move or shift layout elements (hover zoom on cards is banned — it feels cheap at this register)
- Typewriter effects or character-by-character text reveals
- Counting number animations (e.g., 0 → 29 years counting up)
- Scroll-jacking or custom scroll behavior

**Reduced motion:** All animations degrade to instant with `@media (prefers-reduced-motion: reduce)`. No exceptions.

---

## 16. Trust Styling Rules

**Trust bar treatment:**
- Single horizontal band, full-width content area
- 3–4 stat items: "4.3 on Google ★★★★☆" / "29 Years in Unionville" / "Family Owned & Operated"
- Stats in Trust Stat type size (28–36px), near-black or gold-tinted
- Labels in UI Label size, Text Secondary
- Vertical rule dividers between stats on desktop (1px, light warm gray)
- Background: Surface 2 (very light warm gray) — visually separates from hero above

**Review card treatment:**
- Star rating: SVG gold stars, 5-star scale, actual rating shown (4.3 means 4 filled + partial)
- Quote: italic Body type, max 2–3 sentences — no long reviews
- Attribution: Caption size, "— [First Name], via Google" — non-italic, Text Secondary
- Left border: 2–3px vertical gold rule (subtle brand stamp)
- Real names only — no "Anonymous" or "Happy Customer"
- No Tripadvisor attribution anywhere on the site

**Phone number on `/contact`:**
- Display Phone type size (44–52px desktop, 36–44px mobile)
- Near-black color on Surface 1
- Tap-to-call link wrapping entire number on mobile
- On mobile: full-width button treatment (Surface Dark background, warm white text, minimum 56px height) — the phone number IS the primary CTA button on this page

**CTA band trust signal:**
- Reassurance line below CTA button in Body/Caption size, Text Secondary: phone number displayed as text
- No additional proof elements in the CTA band — it is a conversion endpoint, not a proof section

**Contact visibility rule:**
- Phone number appears in the sticky header (UI Label size, gold or bold) on all pages
- Mobile: sticky header + fixed bottom bar — both always present except on `/contact`

---

## 17. Accessibility Rules

- **Text contrast:**
  - Text Primary on Surface 1: 7:1 minimum (AAA)
  - Text Secondary on Surface 1: 4.5:1 minimum (AA)
  - Text Inverse on Surface Dark: 7:1 minimum
  - Gold CTA button text on gold: verify 4.5:1 — adjust gold value if needed; near-black text on gold is the safe fallback

- **Focus indicators:** 2px solid outline, Gold Accent color, 2px offset from element. Visible on all focusable elements (buttons, links, inputs, accordion toggles, gallery items, tabs).

- **Tap targets:** 44×44px minimum on all mobile interactive elements. Navigation links in mobile menu: 56px height minimum. Bottom bar: 52–56px full-width.

- **Motion:** `prefers-reduced-motion: reduce` disables all CSS transitions and animations. IntersectionObserver animations do not play — elements start at final state.

- **Color not sole carrier:** Star ratings use numeric text (e.g., "4.3") in addition to visual stars. Error states use an error icon + text, not red border alone. Active nav state uses underline + color (not color alone).

- **Form labels:** Always visible above their field. No placeholder-as-label. Required fields marked with visible indicator (asterisk or "required" text).

- **Images:** All non-decorative images require meaningful alt text. Decorative images (background overlays, pure aesthetic photos) use `alt=""`. Gallery images: alt text describes subject ("Interior dining room at La Grotta On Main").

- **Semantic HTML:** H1 on every page (one only). Heading hierarchy maintained (no skipping from H1 to H3). Nav landmark, main landmark, footer landmark. Form fields associated with labels via `for`/`id` pairing.

---

## 18. Anti-AI Design Check

- [x] No gradient fills on large surfaces — banned. Gold is flat fill only.
- [x] No glassmorphism — banned for all components
- [x] No neon or oversaturated palette — warm gold is the only accent, appropriately muted
- [x] No blob or abstract shape backgrounds — banned
- [x] Conservative, consistent radius — 4–10px range, no extreme pill on non-tab elements
- [x] No abstract icon-value rows — Private Functions uses icons but with real, specific content
- [x] Cards structured intentionally — dish cards, review cards, and feature items each have distinct structures appropriate to their content
- [x] Stats use real, verifiable numbers — "4.3 on Google" (real), "29 Years" (real). No fabricated stats.
- [x] Hero photography is real and business-relevant — sourced from Yelp/Instagram; no stock people
- [x] 2 section surface tones maximum active at once — Surface 1 and Surface 2, with Surface Dark only at footer/CTA band
- [x] Shadows used sparingly — light card shadow + header scroll shadow only
- [x] Animations minimal and purposeful — scroll entry fades + interaction transitions only
- [x] No SaaS UI decoration — no dashboard patterns, no feature grids with gradient icons

**Result:** Pass. No violations found.

---

## 19. Desktop Visual Behavior

Full-bleed hero fills the viewport — 100vw × 100vh. Content overlay area is left-aligned or centered depending on photography subject. Standard content sections use max-width 1200px centered with 32–40px horizontal padding. Section vertical padding is 80–120px — generous, unhurried. The sticky header (64–72px) is always visible; all section `scroll-margin-top` values account for header height for anchor navigation. The trust bar is visually narrow (56–72px height) — a single quiet band between the hero and the story section. The gallery grid on desktop is 3 columns, uniform square cells, with 12–16px gutters. The dish cards on the homepage are a 3-column grid with 24px gutters. On very wide viewports (above 1440px), sections are bounded by max-width containers — the design does not stretch beyond 1280px of content.

---

## 20. Mobile Visual Behavior

Hero is 85–90vh on mobile — prevents the hero from consuming the full screen and hides the page content below. Both CTA buttons (Reserve + View Menu) must be visible in the hero viewport without scrolling on a 375px screen — hero content is vertically centered in the lower 50% of the hero area to leave room for the image impact above. Section vertical padding reduces to 56–72px. Navigation collapses to header with persistent "Reserve" button and hamburger. The fixed bottom bar (52px) is always present — body content has equivalent bottom padding to prevent it from being occluded. Gallery collapses to 2-column square grid. Dish cards go single-column full-width. The story section image comes before the text in the stacked mobile layout. All font sizes are as specified in the type scale — no smaller than 15px for body, 12px for captions.

---

## 21. Implementation Notes

**Framework:** Next.js 14+ (App Router), Tailwind CSS v3

**Color implementation:** Define all colors as CSS custom properties at `:root`. Tailwind `extend` maps these custom properties to utility classes. Example:
```css
:root {
  --color-surface-1: /* warm white */;
  --color-surface-dark: /* deep near-black */;
  --color-gold: /* warm gold accent */;
  --color-text-primary: /* near-black */;
  --color-text-secondary: /* medium-dark warm gray */;
}
```

**Typography implementation:** Use `next/font` for Google Fonts loading (Playfair Display + DM Sans). Both fonts preloaded with `display: swap`. Font variables exposed as CSS custom properties and mapped to Tailwind config.

**Spacing:** Use Tailwind's default 8px-based spacing scale (p-4 = 16px, p-8 = 32px, etc.) — extends cleanly to the defined scale without custom tokens.

**Animation:** Use Tailwind's `transition` utilities for hover states. For scroll-triggered entry animations, use a lightweight IntersectionObserver hook — do not install a full animation library (Framer Motion is acceptable but only if already in the stack; do not add for this project alone).

**Gallery:** The tab filter and lightbox require JavaScript. Recommended: a simple React `useState` for tab filtering, and a minimal lightbox library (yet-another-react-lightbox or similar) — no heavy carousels.

**Accordion (FAQ):** Use a simple React `useState` open/close per item. CSS `max-height` transition for smooth open/close. No external accordion library needed.

**Form handler:** Formspree or Resend for the Private Functions inquiry form. Redirect to `/thank-you` on success.

**Schema:** `application/ld+json` LocalBusiness schema in the `<head>` of every page via a Next.js layout component.

**Mobile bottom bar:** Fixed-position component in the root layout. `hidden` class on `/contact` route. `pb-[52px]` or equivalent on `<main>` to prevent content occlusion.

---

## 22. General Suggestions

**Tailwind config additions:**
```js
// tailwind.config.ts
extend: {
  fontFamily: {
    serif: ['var(--font-playfair)', 'Georgia', 'serif'],
    sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
  },
  colors: {
    gold: 'var(--color-gold)',
    'gold-hover': 'var(--color-gold-hover)',
    'surface-dark': 'var(--color-surface-dark)',
  }
}
```

**Component build order:**
1. CSS custom properties + Tailwind config
2. Base typography (font loading, heading classes, body classes)
3. Button components (primary, secondary, ghost, large variant)
4. Sticky header + mobile nav + bottom bar
5. Hero section component
6. Trust bar component
7. Card components (dish card, review card)
8. Gallery grid + lightbox
9. Section templates (CTA band, story section, etc.)
10. Form component (Private Functions)
11. Footer component
12. Page-level assembly

---

## 23. Assumptions Made

- `[ASSUMPTION]` **Topic:** Playfair Display + DM Sans as the typeface pair. **Why:** No brand fonts were specified in discovery; direction was "serif or refined sans appropriate to heritage restaurant." Playfair Display meets the editorial/heritage requirement and has strong large-size display quality. DM Sans provides warm humanist body readability. **Impact:** If client has existing brand fonts, these must be substituted before build begins.

- `[ASSUMPTION]` **Topic:** Gold accent color is warm amber-leaning (approximately #C4973B–#D4A843 range). **Why:** "Gold/warm neutrals" from existing palette — exact hex not captured in discovery. **Impact:** Exact value must be extracted from the current La Grotta site logo or brand assets before implementation. Contrast against near-black text on buttons must be verified.

- `[ASSUMPTION]` **Topic:** Warm white background is slightly cream-tinted (approximately #FAFAF8–#F9F6F1 range). **Why:** Pure white (#FFFFFF) would feel cold against the warm gold accent and the restaurant's warm atmosphere. A barely-perceptible cream tint maintains warmth without appearing yellowed. **Impact:** If client has strong preference for pure white, this is adjustable without structural consequence.

- `[ASSUMPTION]` **Topic:** Photography quality is adequate for a photography-led design. **Why:** Cannot directly access Yelp or Instagram photos. **Impact:** If photos are below acceptable quality, the design system's overlay and framing techniques should be applied aggressively — and a photography session should be recommended before launch.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Exact gold hex value | Not captured — must be extracted from current logo/brand | Agency extracts from current site assets | Before build begins |
| Confirmed typeface approval | Typeface pair is a recommendation — not client-confirmed | Client reviews and approves or requests alternative | Before build begins |
| Photo quality assessment | Cannot access Yelp/Instagram photos directly | Agency curates photos before gallery + hero are built | Before homepage and gallery are built |
| Logo file (high-res) | Not yet received from client | Client provides | Before build begins |

---

## 25. Blockers and Risks

**Blockers:**
- Exact gold hex value must be confirmed before button and trust bar components are built — all gold-colored elements depend on a verified contrast-passing value.
- Logo file needed before header component is built.

**Risks:**
- **Photography quality (high):** The design system is built for a photography-led visual hierarchy. If available photos are insufficient in quality or warmth, the emotional impact of the hero and gallery will be significantly reduced. Overlay treatments can compensate to a degree — but they cannot rescue fundamentally poor photography.
- **Typeface loading performance (low):** Two Google Fonts (Playfair Display + DM Sans) add HTTP requests. Using `next/font` with `display: swap` and variable font files mitigates this. Monitor LCP — if the serif display font delays the hero heading render, consider subsetting to Latin characters only.

---

## 26. Handoff to Next Stage (07-implementation-planning)

**Design system status:** Complete with flags (gold hex and logo file pending)

**What downstream skills must preserve:**
- The color role system — no new colors introduced without flagging. Gold is the only accent.
- The two-typeface system (serif display + sans body/UI) — do not add a third typeface
- The spacing base unit (8px) — all spacing values are multiples
- The motion rules — no animations beyond what is defined; no looping; no hover zoom on images
- Anti-AI check results — all items pass; any regression must be flagged
- Gold usage rules — CTA buttons and trust bar only; never as section background or decoration
- Photography treatment — real photos only; overlay rules for hero; lazy loading on gallery

**What flexibility exists:**
- Exact hex values within the defined color directions
- Minor spacing adjustments within defined ranges
- Exact font weight choices within the defined weight ranges (e.g., 600 vs. 650 for subheadings)
- Specific Tailwind utility class implementation details

---

## 27. Instructions for Build and Code Skills

### 07-implementation-planning / 08-frontend-architecture
> Design system is defined. Key components requiring build decisions: (1) Gallery tab filter + lightbox — React state + lightweight lightbox library; (2) Sticky header with mobile drawer nav — focus trap required when mobile nav is open; (3) Fixed mobile bottom bar — must be excluded from `/contact` route; (4) FAQ accordion — CSS max-height transition, React useState; (5) IntersectionObserver for scroll entry animations — custom hook, degrades with prefers-reduced-motion; (6) Hero parallax — CSS scroll-driven or JS requestAnimationFrame at 0.15 depth factor. All color values as CSS custom properties at `:root`. Typography via `next/font`. Tailwind CSS for all utility styling.

### Code / frontend implementation skills
> Build components in this order: base tokens (CSS vars + Tailwind config) → typography + button variants → sticky header + mobile nav + bottom bar → hero → trust bar → card components → gallery grid + lightbox → section templates (CTA band, story, reviews) → form → footer → page assembly. Run the anti-AI visual QA checklist before first draft is considered complete. Gold hex contrast against button text must be verified (minimum 4.5:1) before any CTA button is shipped.
