# Non-AI Resource Reference Index

This file is the lookup table for all design breakdowns in this folder. When an agent needs to code a specific section, find the relevant pattern here and read the corresponding breakdown file.

---

## How to Use This Index

1. Identify what you are about to build (hero, testimonials, CTA, gallery, etc.)
2. Find the section below that matches
3. Read the listed breakdown file — specifically the sections relevant to your component
4. Extract the formula, layout logic, and specific code/class patterns
5. Apply them. Do not copy verbatim — translate the pattern to the current project's tokens.

---

## Lookup Table by Section / Component

### Hero Section

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Outcome-first headline formula, dual CTA hierarchy (primary + social login), atmospheric background | SaaS, service businesses, professional services |
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | Action verb + specific outcome headline, stat beneath CTAs as social proof, rotating logo background | SaaS, tools, B2B services |
| New Sushism | `[ANCHOR-SCROLL-PER-PERSON-EDITORIAL-CHAPTERS-SPARSE-CTA]` | Cultural positioning statement as hero, no CTA above fold, brand name as visual anchor | Hospitality, restaurant, artisan, cultural brands |
| Mammut | `[SCROLL-TRIGGERED-PRODUCT-REVEAL-FIXED-IMAGE-ROTATING-USP-HOTSPOT-OVERLAY]` | Environment-first hero (conditions before product), stats as drama, scroll to earn the product | Outdoor, performance, campaign microsites |
| Lusion | `[SCROLL-NARRATIVE-WORK-GRID-THIN-COPY-SHOWREEL-HERO]` | Precise capability statement, scroll prompt replaces CTA, site as proof | Creative studios, agencies, portfolio sites |
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Process commitment as headline ("Trust built through every experience"), one yellow button only, partnership-framed CTA ("Build With Us") | B2B, professional services, construction, dual-audience firms |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Split hero: copy LEFT + embedded lead form RIGHT, glassmorphism form panel, form visible above fold | Local service businesses, franchise networks, quote-first conversion |

**Key patterns to extract from hero breakdowns:**
- Headline formula (what type of claim is made — outcome, capability, cultural)
- CTA count and hierarchy (single, dual, none)
- What the background communicates (product, atmosphere, motion)
- Whether proof appears in the hero or is deferred

---

### Navigation

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Persistent CTA in nav ("Start now" + "Contact sales"), always available anchor | Service/SaaS |
| Lusion | `[SCROLL-NARRATIVE-WORK-GRID-THIN-COPY-SHOWREEL-HERO]` | Sticky fixed nav with minimal items + contact CTA, scroll prompt discipline | Agencies, portfolio |
| New Sushism | `[ANCHOR-SCROLL-PER-PERSON-EDITORIAL-CHAPTERS-SPARSE-CTA]` | Anchor scroll navigation, section-as-chapter model, nav as table of contents | Hospitality, single-page editorial |
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Two-tier nav: primary = client-facing (Expertise, Projects), secondary = organizational (Careers, Locations). Dual-audience routing with no audience selector | Firms serving clients + talent/subs simultaneously |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Sticky nav contains embedded mini-form (persistent lead capture). Dropdown nav with Residential/Commercial/Franchising as co-equal items | Franchise service, local multi-location |

---

### CTA Placement and Pattern

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | CTA table: nav + hero + mid-page soft + developer + footer full-block. Never feels aggressive but never far away | Service/SaaS |
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | One CTA repeated obsessively at every persuasion point. Risk-free framing removes objection at each touchpoint | SaaS, free-trial models |
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Single yellow button in hero only. All other CTAs are blue text links. "Let's chat." footer entry — lowercase, conversational, low-friction. CTA scarcity = power | B2B, premium professional services |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Three simultaneous capture points: sticky nav form + hero form + mid-page CTA. Phone tel: link as persistent CTA on mobile. "Get My Free Quote" as primary button text | Local service, quote-driven businesses |
| Walker Home Services | `[FIXED-BOTTOM-DUAL-CTA-PHONE-BOOK-LOCAL-SERVICE]` | Fixed bottom bar: phone LEFT (primary) + book RIGHT (secondary). Always visible regardless of scroll position. Color-inversion hover with only 2 brand colors. `body { padding-bottom: 90px }` required | Local service businesses, any call/book-driven conversion |

**Key pattern to extract:** Read the full CTA placement table in each breakdown. Note: location → CTA text → purpose. Apply the same table structure to the project being built.

---

### Social Proof / Testimonials

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | 12+ testimonials in grid, full name + title + star rating + platform badge. Dense section contrasts with airy sections — intentional rhythm | Any business with reviews |
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Case studies with specific metrics (not "they loved us" but "X% revenue increase"). Parallelogram-framed photography with real people | Enterprise, B2B |
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Named contacts in testimonials (full name + title + direct email). Talent testimonials address anxiety points directly. No client testimonials on B2B pages — process transparency replaces them | B2B, professional services |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Stats strip after hero: count + stars + jobs completed. Inline SVG stars with `fill="currentColor"` + gold color class. `fb-count="true"` attribute targets count-up animation on scroll | Local service, review-driven businesses |

**Key patterns:**
- Specificity requirement: "Doug and Lisa F." not "Happy Customer"
- Platform badge adds external validation (Google G, Houzz badge, etc.)
- Dense testimonial grid after airy feature sections creates intentional rhythm shift

---

### Trust Strip / Logo Carousel

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | 48+ logos across 3 rotating rows, "Trusted by X brands" as headline | Any B2B or high-intent service |
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Named logo carousel, brands everyone recognizes | Enterprise credibility |

---

### Service / Product Cards

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Pangram Pangram | `[EDITORIAL-COMMERCE-LAYERED-CARD-GRID-ROTATING-USP-SLIDES]` | Card grid with uniform height/padding, status badges, hover states, list/grid toggle | E-commerce, multi-service, creative product |
| Mammut | `[SCROLL-TRIGGERED-PRODUCT-REVEAL-FIXED-IMAGE-ROTATING-USP-HOTSPOT-OVERLAY]` | USP carousel: benefit rotates while product image stays fixed. Material → function → performance spec structure | Technical products, premium services with multiple differentiators |

---

### Gallery / Portfolio Grid

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Lusion | `[SCROLL-NARRATIVE-WORK-GRID-THIN-COPY-SHOWREEL-HERO]` | Work grid with thin copy, visual-led, scroll narrative. Work does the talking | Agency, visual-proof businesses |
| Pangram Pangram | `[EDITORIAL-COMMERCE-LAYERED-CARD-GRID-ROTATING-USP-SLIDES]` | Layered card grid, full-width editorial breaks in grid rhythm | Creative, product, portfolio |
| Palmer Dinnerware | `[FULL-BLEED-CINEMATIC-SCROLL-MINIMAL-SECTIONS-NO-CTA]` | Full-bleed cinematic photography presentation, slow pacing, each image its own moment | Luxury, product photography, hospitality |

---

### Scroll-Triggered Reveals / Animations

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Mammut | `[SCROLL-TRIGGERED-PRODUCT-REVEAL-FIXED-IMAGE-ROTATING-USP-HOTSPOT-OVERLAY]` | Scroll-triggered product appearance, fixed sticky image with rotating text alongside, environmental metric gauges | Campaign microsites, product launches |
| Active Theory | `[CANVAS-SPA-PROGRAMMATIC-SCROLL-ZERO-DOCUMENT-STRUCTURE]` | Programmatic scroll as primary navigation, canvas-based SPA, zero standard document structure | Creative agency site (complex — only if justified) |
| Palmer Dinnerware | `[FULL-BLEED-CINEMATIC-SCROLL-MINIMAL-SECTIONS-NO-CTA]` | Cinematic slow scroll pacing, section transitions that feel like film cuts | Luxury, minimal, editorial |

---

### Typography Patterns

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | 700+ weight for headlines, 400–500 for body, high contrast between levels, no decorative fonts | Clean, functional, professional |
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | Large bold headlines with negative letter-spacing (-3px to -0.5px), muted gray body text, weight hierarchy instead of color hierarchy | Dark-themed, tech-forward |
| Pangram Pangram | `[EDITORIAL-COMMERCE-LAYERED-CARD-GRID-ROTATING-USP-SLIDES]` | Typography IS the product demo. Headlines set in the product font. Extreme hierarchy through size and weight | Creative, type-forward |
| New Sushism | `[ANCHOR-SCROLL-PER-PERSON-EDITORIAL-CHAPTERS-SPARSE-CTA]` | Bilingual hierarchy, kanji + Latin letterform rhythm, uppercase reserved for brand labels only | Hospitality, cultural, bilingual |

---

### Stats / Metrics Display

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Dedicated "moment" for stats — they don't compete with copy. Hard specificity: $1.9tn, 135+, 99.999% | Any claim-making section |
| Mammut | `[SCROLL-TRIGGERED-PRODUCT-REVEAL-FIXED-IMAGE-ROTATING-USP-HOTSPOT-OVERLAY]` | Stats as drama: depth, temperature, wind speed as instrument readings. Bold numerical format with units prominent | Performance, outdoor, technical |

**Key rule from breakdowns:** Hard stats with specificity beat vague claims. "65+ Google reviews" beats "Hundreds of happy clients."

---

### Footer

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Full CTA block as dedicated footer section (not an afterthought), then actual footer below | Any site where conversion matters |
| Pageflows | `[REPEATED-CTA-TESTIMONIAL-GRID-DARK-BG-WARM-ACCENT]` | Repeated CTA in footer as final recovery point, consistent with mid-page CTA style | SaaS, service |

---

### Forms / Lead Capture

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Complete form HTML with glassmorphism panel, 2-col name row, zip routing, Residential/Commercial radio, phone masking pattern, hidden UTM tracking fields, sticky nav form, CSS for all input states | Any local service site where quote/estimate is the primary CTA |

**Specific code patterns to extract from Painter Bros:**
- Hero split grid CSS: `grid-template-columns: 1fr minmax(24rem, .5fr); min-height: 85vh`
- Glassmorphism form panel: `background-color: rgba(255,255,255,0.5); backdrop-filter: blur(5px)`
- Form input CSS variables (border colors, focus state gold highlight)
- Hidden UTM tracking fields (ppc-source, referer, location)
- Phone tel: link implementation with `.link-phone-local` JS swap target
- Location personalization JS: `.loc` data attributes → zip index → phone number replacement
- Hero image preload JS (prevents flash on page load)
- Inline SVG star pattern with `fill="currentColor"` for themeable rating stars

---

### Fixed Persistent CTAs / Sticky Bars

Use this section when deciding which persistent CTA pattern to apply. These are mutually exclusive patterns — pick the one that fits the business type and conversion model.

| Breakdown | File Tag | Pattern Type | When to Use |
|---|---|---|---|
| Walker Home Services | `[FIXED-BOTTOM-DUAL-CTA-PHONE-BOOK-LOCAL-SERVICE]` | Fixed bottom bar (always visible, phone + book) | Local service business, call OR book as primary conversion, mobile-heavy traffic. Implementation spec: `11-navigation/sticky-cta-bar-pattern.md` |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Sticky nav with embedded form (persists on scroll) | Franchise/multi-location, quote form is the primary capture, long page |
| Stripe | `[PROGRESSIVE-DISCLOSURE-SINGLE-COLUMN-PERSISTENT-CTA]` | Single button in nav (always in header, never aggressive) | SaaS, professional services, B2B — one action, no phone |
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Single dominant button + text link CTAs (no persistent bar) | Premium/B2B — CTA scarcity is the strategy |

**Decision rule:**
- Local service + phone + book → Walker Home Services pattern (bottom bar)
- Local service + form + quote → Painter Bros pattern (sticky nav form)
- SaaS/professional + one CTA → Stripe pattern (nav button)
- Premium/B2B → HITT pattern (sparse CTAs, no sticky bar)
- Do NOT combine Walker bottom bar + Painter Bros sticky form — too many persistent elements

---

### Interactive Map / Location / Directions

Use when the business has a physical location and the contact page needs a "find us" section beyond a static address.

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| Belmont Campus Map | `[INTERACTIVE-MAP-CLICK-POPUP-SLIDE-PANEL-MULTI-MODE-DIRECTIONS]` | Pan/zoom map canvas with scroll-hijack prevention, branded SVG marker pin, click-to-popup info card (name/address/phone/hours + "Get Directions"), slide-in directions panel with Drive/Walk/Bike/Transit tabs, OSRM turn-by-turn routing, route polyline draw, transit Google Maps deep-link fallback. Full Next.js SSR guard pattern included. | Any local service business, restaurant, medical office, studio, retail — any business with a physical address visitors need to reach |

**Decision rule:**
- Physical business location + contact page → add this pattern AFTER the contact form
- Multi-location business → pass `extraLocations` array to render additional markers
- Transit directions required → handled via Google Maps deep-link (no separate API)
- No physical location → skip entirely, do not use a map as decoration

**Implementation notes (from breakdown):**
- Use `react-leaflet` + `leaflet` + `@types/leaflet`
- Always wrap with `dynamic(() => import(...), { ssr: false })` — Leaflet uses `window`
- Import `leaflet/dist/leaflet.css` inside the `'use client'` component, not in `layout.tsx`
- OSRM coordinate order is `[lng, lat]` — Leaflet order is `[lat, lng]` — this mismatch is the most common bug
- Default to driving mode for business sites (not walking — that is the campus map default)
- Map goes AFTER the contact form — map answers a lower-priority question than the form

---

### Dual-Audience Architecture

| Breakdown | File Tag | What It Demonstrates | Best For |
|---|---|---|---|
| HITT | `[DUAL-AUDIENCE-NAV-TIER-SEPARATED-PROOF-CENTRAL-SINGLE-DOMINANT-CTA]` | Two-tier nav separates client and talent paths. Shared hero language serves both. Proof section central (serves both). Talent section sequenced after client proof. Named contacts instead of forms. "Let's chat." footer CTA | Any firm serving clients + staff/talent/subs without wanting homepage fragmentation |
| Painter Bros | `[FRANCHISE-LOCAL-HERO-FORM-SPLIT-PHONE-FIRST-LOCATION-PERSONALIZED]` | Client + franchise opportunity co-exist in single nav tier. "Work for Painter Bros" and "Franchising" as peer items alongside Residential/Commercial | Franchise businesses marketing to both customers and potential franchisees |

**Key decision when building dual-audience:**
- If one audience is clearly primary: use HITT's two-tier nav model (primary nav = main audience, secondary nav = second audience)
- If audiences are roughly equal: use Painter Bros' single-tier model (co-equal nav items)
- Never use an audience selector toggle or "Are you a client or partner?" prompt

---

## Breakdown Quick Reference (by Business Type Fit)

| Business Type | Primary References | Secondary |
|---|---|---|
| Local service (remodeling, landscaping, painting) | Walker Home Services (sticky bottom bar, phone + book), Painter Bros (hero form, stats strip) | HITT (dual-audience if hiring), Stripe (CTA discipline), Pageflows (testimonials), Palmer (photography), Belmont (map + directions on contact page) |
| Franchise / multi-location service | Painter Bros (location personalization JS, sticky form) | Stripe (CTA discipline), Belmont (multi-marker map for multiple locations) |
| B2B / professional services | HITT (dual-audience, process trust, CTA scarcity) | Stripe (single-column, metrics), Pageflows (testimonials), Belmont (map if office visits happen) |
| Construction / contracting | HITT (project proof gallery, process transparency) | Painter Bros (form-first capture, phone CTA), Belmont (map on contact page) |
| SaaS / tech product | Stripe, Pageflows | — |
| Restaurant / hospitality | New Sushism, Palmer Dinnerware | Stripe (for CTA pattern) |
| Creative agency / portfolio | Lusion, Active Theory | Pangram Pangram |
| Luxury product | Palmer Dinnerware, Mammut | — |
| E-commerce / creative product | Pangram Pangram, Mammut | Pageflows |
| Outdoor / performance | Mammut | Palmer |

---

## What to Extract When Reading a Breakdown

When you open a breakdown file to code a specific section, read and extract:

1. **The formula** — the exact structure described (e.g., "Headline: [Outcome] + [Who it's for] → [CTA]")
2. **The spacing/rhythm notes** — how much padding, what creates the section feel
3. **The specific CSS patterns** mentioned (e.g., negative letter-spacing values, specific height measurements)
4. **What was deliberately avoided** — the "what this deliberately avoids" sections tell you what NOT to do
5. **The trust/proof logic** — why specific elements appear where they do

Do not copy a breakdown site's actual design. Extract the structural logic and apply it using the current project's design tokens.
