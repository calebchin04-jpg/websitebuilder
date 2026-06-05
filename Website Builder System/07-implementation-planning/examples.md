# Examples

Two examples in document-comparison format. Example 1 is Marcus Pro Wash (strong prior-stage package). Example 2 shows a weak prior-stage package triggering a send-back.

---

## Example 1 — Marcus Pro Wash: Strong prior context → Strong implementation plan

### Prior-stage summary
- **Pages (from 03-sitemap):** 14 pages — Homepage, Services overview, 3 individual service pages (pressure-washing, soft-washing, deck-cleaning), Gallery, About, Service Areas overview, 4 city pages (Austin, Cedar Park, Round Rock, Georgetown), Contact, Thank-You, Privacy Policy
- **Features active:** Contact form, before/after gallery slider, Google Maps embed, click-to-call, GA4 analytics
- **CMS:** Not required — agency manages all edits
- **Design system:** Deep navy primary, warm white base, humanist sans-serif, subtle animation (fade-in on scroll)
- **Brand requirements:** Review count + star rating above fold on homepage, Marcus's real photo in hero, phone number in sticky header
- **Integrations:** Resend for form delivery, GA4 for analytics

---

### Critique

> **Overall quality:** Strong. No send-back required.
>
> `[INTEGRATION]` Booking widget not specified — but planning PRD confirmed booking is deferred. No action needed.
>
> `[ANIMATION]` Design system says "subtle" but doesn't specify whether CSS or Framer Motion. Decision made at implementation level: CSS + IntersectionObserver — no library needed for fade-in only. Labeled as assumption.

---

### Implementation planning PRD (abbreviated)

**Stack:** Next.js + React + Tailwind + TypeScript (default — no reason to deviate for a 14-page static site)

**Total pages:** 14
**Dynamic routes:** `/services/[service-slug]` (3 pages), `/service-areas/[city-slug]` (4 pages)
**Integrations:** Resend (form), GA4 (`@next/third-parties/google`), Google Maps embed
**CMS:** None — static data files
**Animation level:** Subtle — CSS + IntersectionObserver

---

**Filled folder structure (Marcus Pro Wash):**

```
marcus-pro-wash/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                            # Homepage
│   ├── globals.css
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [service-slug]/page.tsx         # 3 service pages
│   ├── gallery/page.tsx
│   ├── service-areas/
│   │   ├── page.tsx
│   │   └── [city-slug]/page.tsx            # 4 city pages
│   ├── contact/page.tsx
│   ├── thank-you/page.tsx
│   ├── privacy-policy/page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                      # Sticky nav + logo + "Get a Free Quote" CTA button
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileNav.tsx                   # 'use client'
│   ├── sections/
│   │   ├── Hero.tsx                        # Variants: home, inner-page
│   │   ├── ServicesGrid.tsx                # Services card grid (overview + homepage)
│   │   ├── ServiceDetail.tsx               # Individual service page content
│   │   ├── TestimonialsSection.tsx
│   │   ├── TrustBar.tsx                    # 47 Google reviews ★4.9 — above fold on homepage
│   │   ├── GuaranteeBadge.tsx
│   │   ├── BeforeAfterSlider.tsx           # 'use client' — touch-compatible
│   │   ├── GalleryGrid.tsx
│   │   ├── CTASection.tsx                  # Variants: band, inline
│   │   ├── ContactForm.tsx                 # 'use client'
│   │   ├── ServiceAreaMap.tsx              # Google Maps iframe embed
│   │   └── AboutSection.tsx               # Marcus portrait + story + guarantee
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── StarRating.tsx
│       ├── SectionWrapper.tsx
│       └── SchemaOrg.tsx
│
├── data/
│   ├── site.ts                             # Marcus Pro Wash constants
│   ├── navigation.ts
│   ├── services.ts                         # 3 services: pressure-washing, soft-washing, deck-cleaning
│   ├── testimonials.ts                     # Review data (pulled from Google reviews)
│   ├── service-areas.ts                    # 4 cities
│   └── pages/
│       ├── home.ts                         # Hero copy, section content
│       ├── about.ts                        # Marcus story, guarantee detail
│       ├── contact.ts                      # Form intro, location details
│       └── gallery.ts                      # Image manifest
│
├── lib/
│   ├── utils.ts                            # cn() + helpers
│   ├── actions.ts                          # Form server action → Resend
│   └── analytics.ts                        # GA4 event helpers
│
├── public/images/
│   ├── hero/                               # marcus-at-work.jpg
│   ├── team/                               # marcus-portrait.jpg
│   ├── services/                           # 3 service images
│   ├── before-after/                       # Pairs: driveway-before.jpg / driveway-after.jpg, etc.
│   ├── gallery/                            # Gallery images
│   └── og/                                 # OG images per page
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

**Key component decisions:**

| Component | Type | Decision rationale |
|---|---|---|
| TrustBar | Server | Static review data from `data/site.ts` — no client state needed |
| BeforeAfterSlider | Client | Drag/touch interaction requires `useState` + event handlers |
| ContactForm | Client | Form state + React Hook Form validation |
| MobileNav | Client | Toggle open/close state |
| Hero | Server | Static content passed via props from page data |
| ServiceAreaMap | Server | Google Maps iframe — no JS interaction needed |

---

**Data/config decisions:**

- `siteConfig.reviews.count` and `siteConfig.reviews.rating` drive TrustBar — one source of truth
- `services` array drives both ServicesGrid cards AND `generateStaticParams` for `/services/[service-slug]`
- `service-areas` array drives city-page `generateStaticParams` AND ServiceAreaMap display
- All Marcus-specific content (story, guarantee text) in `data/pages/about.ts` — not hardcoded in component

---

**Tailwind config directions:**
```typescript
// Key mappings from Marcus Pro Wash design system:
colors: {
  primary: { DEFAULT: 'var(--color-primary)' },     // deep navy
  'neutral-base': 'var(--color-neutral-base)',        // warm white
  'neutral-mid': 'var(--color-neutral-mid)',          // light warm gray
  'text-primary': 'var(--color-text-primary)',        // near-black
  'accent': 'var(--color-accent)',                    // warm amber (guarantee badge only)
}
```

---

**Animation implementation:**
- Method: custom `useReveal` hook with `IntersectionObserver` + Tailwind CSS transitions
- Framer Motion NOT used (only fade-in needed — library overhead unjustified)
- BeforeAfterSlider: custom mouse/touch event handlers — no animation library
- Mobile nav: Tailwind `transition-transform duration-250` on drawer element

---

**SEO plan:**

| Page | Title pattern | Schema |
|---|---|---|
| `/` | `Austin Pressure Washing — Marcus Pro Wash` | LocalBusiness |
| `/services/pressure-washing` | `Pressure Washing in Austin, TX \| Marcus Pro Wash` | Service |
| `/services/soft-washing` | `Soft Washing Austin \| Marcus Pro Wash` | Service |
| `/service-areas/austin` | `Pressure Washing Austin, TX \| Marcus Pro Wash` | LocalBusiness + AreaServed |
| `/contact` | `Contact Marcus Pro Wash — Get a Free Quote` | LocalBusiness |

---

**Page implementation order:**
1. Homepage (most complex, establishes all patterns)
2. `/services/pressure-washing` (service template established here)
3. `/contact` (form delivery tested end-to-end)
4. `/about`
5. `/services` (overview)
6. `/services/soft-washing`, `/services/deck-cleaning`
7. Four city pages (template already done)
8. `/thank-you`
9. `/gallery`
10. `/service-areas` (overview)
11. `/privacy-policy`
12. `not-found.tsx`

---

**Phase summary:**

| Phase | Duration estimate | Key gate |
|---|---|---|
| 1 — Foundation | Day 1 | `next dev` runs, tokens load |
| 2 — Shared components | Days 1–2 | ContactForm delivers email |
| 3 — Pages | Days 2–4 | All 14 pages render, metadata correct |
| 4 — Polish | Day 4–5 | Mobile review passes, Lighthouse ≥ 85 |
| 5 — QA + Launch | Day 5 | Full checklist passes |

---

## Example 2 — Generic weak package: Send-back triggered

**Prior-stage package summary:**
- Design system: "Use blue as the main color. Clean modern layout."
- No page list provided
- Wireframes: "Standard business website layout"
- Features: "Contact form and maybe booking"
- No integration method specified
- No component inventory
- Brand direction: "Professional and trustworthy"

---

### Critique

> **Overall quality:** Weak — send-back triggered.
>
> `[PAGES]` No page list exists. Cannot define routing architecture, page files, or implementation order.
>
> `[DESIGN-SYSTEM]` "Blue as main color, clean modern" is not a design system. Cannot configure Tailwind, define component behavior, or determine animation rules.
>
> `[INTEGRATION]` "Maybe booking" is not an integration decision. If booking is in scope, a specific provider must be named. This affects component architecture, data structure, and CMS decisions.
>
> `[COMPONENTS]` No component inventory exists. Cannot define reusable architecture.
>
> **Send-back threshold met: 4 of 4 implementation-critical foundations missing.**

---

### Send-back

```
SEND-BACK TO 06-DESIGN-SYSTEM (and 03-sitemap)
Reason: Implementation planning cannot begin without a page list 
or a design system with concrete values.

Required fixes:

1. Page list (from 03-sitemap): Provide the complete list of pages 
   with URLs. Minimum: homepage, about, services, contact. 
   Without this, no routing or file structure can be defined.

2. Design system (from 06-design-system): "Blue and clean" is not 
   implementable. Required minimum: named color roles with direction 
   (primary, neutral-base, text-primary), typography scale (sizes 
   and weights for H1/H2/body/label), spacing scale, button rules, 
   and animation level.

3. Integration decision: Is booking in scope or not? If yes, name 
   the specific provider (Calendly, Acuity, etc.) — this changes 
   whether a client component or iframe embed is needed. If no, 
   remove it from the feature list.

4. Component inventory: From the wireframe PRD, list the named 
   sections that appear on each page. These map directly to 
   components. Without this, the component architecture is undefined.

Implementation risks from current gaps:
- Without page list: will produce wrong routing and file structure
- Without design system values: Tailwind cannot be configured; 
  coder will invent visual decisions that violate brand intent
- Without booking decision: component architecture and data 
  structure may need to be rebuilt mid-project
```

---

### What happens after a good return

Once the revised package arrives with:
- A confirmed 8-page list with URLs
- Design system with color roles, type scale, spacing, animation level
- Booking confirmed as Calendly embed, not custom
- Component inventory from wireframes

The implementation plan becomes straightforward:
- 8 pages → `app/` routing defined
- Calendly → client component with iframe embed, no booking data model needed
- Design system → Tailwind config defined
- Component inventory → `components/sections/` list defined
- No dynamic routes (no service sub-pages or city pages in this project)
- Animation: CSS-only (subtle level confirmed)
- Phase 1 can begin immediately
