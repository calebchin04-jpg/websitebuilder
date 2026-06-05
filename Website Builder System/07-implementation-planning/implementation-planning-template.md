# Implementation Planning PRD Template

Use this template to produce the full implementation planning output. Fill in every section. Label all assumptions.

---

## IMPLEMENTATION PLANNING PRD
**Project:** [Business Name]
**Build type:** [New build / Redesign]
**Date:** [Date of session]
**Stage:** 07-implementation-planning — output complete
**Stack:** [Default: Next.js + React + Tailwind + TypeScript | or alternate if justified]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — sent back / Weak — proceeded with assumptions]

---

## 1. Project Overview

[2–3 sentences for any coder reading cold. Business name, type, page count, active features, stack, and the single most important implementation consideration — e.g., "14-page local service site, Next.js App Router, static generation, contact form via Resend, before/after slider component required" or "12-page B2B consultant site, Calendly booking integration, case study pages with JSON data, no CMS."]

---

## 2. Implementation Planning Summary

**Stack:** [Default or justified alternate]
**Total pages:** [N]
**Dynamic routes:** [List — e.g., `/services/[service-slug]`, `/service-areas/[city-slug]`]
**Integrations active:** [List — e.g., Resend (forms), GA4 (analytics), Google Maps (embed), Calendly (booking)]
**CMS:** [Required / Not required — static data files]
**Animation level:** [None / Subtle / Moderate — from design system]
**Build complexity:** [Simple / Medium / Complex]

---

## 3. Critique of Prior-Stage Materials

**Overall prior-stage quality:** [Strong / Acceptable / Weak]

**Issues identified:**
> **[CATEGORY]** Problem: [Specific technical issue]. Implementation impact: [What coding problem it creates]. Resolution: [How it was handled — assumption made / deferred decision / flagged].

*(If none: "Prior-stage materials are technically complete and well-formed.")*

---

## 4. Send-Back *(include only if triggered)*

```
SEND-BACK TO [STAGE]
Reason: [Why prior materials block implementation planning]

Required fixes:
1. [Topic]: [What is missing]. [Why it blocks implementation]. [What to provide].

Implementation risks from current gaps:
- [Risk]: [Specific coding problem that will result].
```

---

## 5. Recommended Stack

**Stack:** Next.js 15+ (App Router) + React + Tailwind CSS + TypeScript

**Why this stack for this project:**
- [1–2 sentences specific to this project — e.g., "14 mostly-static pages benefit from static generation. Server components reduce JS bundle for a photography-heavy site."]
- [Any project-specific consideration that reinforces the default choice]

**Alternate if needed:** [e.g., "If Astro is preferred: pages/ directory structure maps identically, Tailwind config is identical, before/after slider becomes an Astro island. No other significant changes."]

---

## 6. Technical Architecture

**Architecture type:** Composition-based server-rendered with selective client interactivity.

**Component layers:**
1. Layout (Header, Footer, Nav) — server components
2. Sections (reusable page sections) — server or client as required
3. UI primitives (Button, Card, Badge) — server or client
4. Page-specific components (if any) — local to page directory

**Server vs client component decisions:**
| Component | Type | Reason |
|---|---|---|
| Header | Server | No interactivity |
| MobileNav | Client | Toggle state required |
| ContactForm | Client | Form state + validation |
| Hero | Server | Static content |
| BeforeAfterSlider | Client | Drag interaction |
| FAQAccordion | Client | Open/close state |
| [Other] | [Type] | [Reason] |

**Data flow:** Page imports data → passes props to sections. Sections do not import data directly.

---

## 7. Routing and Page Architecture

**All pages and their routes:**

| Page | URL | App Router file | Dynamic? |
|---|---|---|---|
| Homepage | `/` | `app/page.tsx` | No |
| [Page] | `/[slug]` | `app/[slug]/page.tsx` | No |
| [Service page] | `/services/[service-slug]` | `app/services/[service-slug]/page.tsx` | Yes — `generateStaticParams` |
| [City page] | `/service-areas/[city-slug]` | `app/service-areas/[city-slug]/page.tsx` | Yes — `generateStaticParams` |
*(List all pages)*

**Static generation notes:**
- `generateStaticParams` source for service pages: `data/services.ts` (services array → map to slugs)
- `generateStaticParams` source for city pages: `data/service-areas.ts` (areas array → map to slugs)

---

## 8. Pseudo-Project Folder/File Structure

*(Use the generic structure from `data-and-file-structure-rules.md`, filled in for this specific project)*

```
[project-name]/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          # Homepage
│   ├── globals.css
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [service-slug]/page.tsx
│   ├── [other pages per sitemap]/
│   ├── contact/page.tsx
│   ├── thank-you/page.tsx
│   ├── privacy-policy/page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── layout/ (Header, Footer, Navigation, MobileNav)
│   ├── sections/ (list active sections for this project)
│   └── ui/ (Button, Card, Badge, StarRating, SectionWrapper)
│
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── services.ts
│   ├── testimonials.ts
│   ├── [other data files per active features]
│   └── pages/ (home.ts, about.ts, contact.ts, ...)
│
├── lib/ (utils.ts, actions.ts, analytics.ts)
├── public/images/ (hero/, team/, services/, before-after/, og/)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 9. Naming Conventions

**Files:** PascalCase for components (`Button.tsx`), camelCase for data/utility files (`services.ts`, `utils.ts`)

**Components:** PascalCase matching filename (`export function Button`)

**CSS classes:** Tailwind utilities only — no custom class names for components

**Data types/interfaces:** PascalCase with `type` keyword (`type Service = { ... }`)

**Exported constants:** camelCase (`export const siteConfig`, `export const services`)

**Dynamic route folders:** Brackets with kebab-case descriptor (`[service-slug]`, `[city-slug]`)

**Image files:** All lowercase, hyphens (`marcus-portrait.jpg`, `driveway-before.jpg`)

---

## 10. Major File Responsibilities

| File | Responsible for |
|---|---|
| `app/layout.tsx` | Root layout: Header, Footer, font loading, global metadata base |
| `app/globals.css` | Tailwind directives, CSS custom properties for design system tokens |
| `tailwind.config.ts` | Design system token mapping (colors, typography, spacing, radius, shadow) |
| `data/site.ts` | All global business constants: name, phone, address, CTA, reviews |
| `data/navigation.ts` | Main nav items and footer link columns |
| `lib/actions.ts` | Server actions for form submission |
| `lib/utils.ts` | `cn()` utility + any shared helper functions |
| `components/ui/SectionWrapper.tsx` | Consistent section container with spacing + background variants |
| `components/ui/Button.tsx` | All button variants (primary, secondary, ghost) + size variants |
| `components/sections/ContactForm.tsx` | Form UI + validation + server action call |

---

## 11. Reusable Component Architecture

**Globally reusable sections (used on 2+ pages):**
- [Section name] → used on: [list pages]
- [Section name] → used on: [list pages]

**Section variants needed:**
- `<Hero variant="home" />` — full-height, large type, before/after proof above fold
- `<Hero variant="inner-page" />` — reduced height, breadcrumb, simpler layout
- `<CTASection variant="band" />` — full-width color band
- `<CTASection variant="card" />` — contained card version

**Page-specific components (not shared):**
- [Component name] — used only on [page] — reason not shared: [explanation]

---

## 12. Props vs Config/Data Decisions

**Uses `data/site.ts`:** Business name, phone, address, primary CTA, review count/rating

**Uses `data/services.ts`:** All service page content, service card content, service metadata

**Uses `data/testimonials.ts`:** All testimonial/review content across all pages

**Uses `data/pages/[page].ts`:** Section-specific content unique to one page (hero headline, about narrative)

**Hardcoded in component:** Aria labels, animation durations, fixed breakpoint behavior, icon sizes

**Passed as props:** Section-specific variants, content objects from page data files

---

## 13. Tailwind Configuration Notes

Map directly from `06-design-system` output. Key mappings:

```typescript
// tailwind.config.ts excerpt (directions — fill actual values from design system)
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: 'var(--color-primary)', dark: 'var(--color-primary-dark)' },
      neutral: { base: 'var(--color-neutral-base)', mid: 'var(--color-neutral-mid)', ... },
      text: { primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)' },
    },
    fontFamily: {
      sans: ['[font-name]', 'system-ui', 'sans-serif'],
    },
    fontSize: { /* type scale from design system */ },
    spacing: { /* any custom spacing tokens */ },
    borderRadius: { /* design system radius values */ },
    boxShadow: { /* design system shadow values */ },
  }
}
```

---

## 14. Responsive Implementation Notes

**Key breakpoints for this project:**
- Mobile: 375px–767px (base classes)
- Tablet: 768px–1023px (`md:` prefix)
- Desktop: 1024px+ (`lg:` prefix)
- Wide desktop: 1280px+ (`xl:` prefix — mostly for max-width content containers)

**Layout-specific responsive behavior:**
- [Section/component]: [Specific behavior at each breakpoint]
- Navigation: Desktop horizontal → mobile hamburger at `md`
- Services grid: 1 col mobile → 2 col tablet → 3 col desktop
- Hero: Full image mobile, overlay layout desktop

---

## 15. Animation Implementation Plan

**Motion level from design system:** [Subtle / None / Moderate]

**Implementation method:** [CSS + IntersectionObserver hook / Framer Motion — with rationale]

**What animates:**
| Element | Animation | Implementation |
|---|---|---|
| Section reveal on scroll | Fade-in + translate-up | Custom `useReveal` hook + CSS |
| Button hover | Color transition | Tailwind `transition-colors duration-200` |
| Mobile nav | Slide-in | Tailwind `transition-transform duration-250` |
| [Other] | [Type] | [Method] |

**What does NOT animate:** [List — e.g., "Text within sections, images, footer, trust bar badges"]

**Reduced motion:** Global `@media (prefers-reduced-motion: reduce)` override in `globals.css`

---

## 16. SEO and Metadata Plan

**Metadata structure:** Next.js App Router `export const metadata` per page

**Global metadata base in `app/layout.tsx`:**
- `metadataBase`: site URL
- Title template: `'%s | [Business Name]'`
- Default OG image: `/images/og/default.jpg`

**Per-page requirements:**
| Page | Title pattern | Has Schema |
|---|---|---|
| Homepage | `[Business Name] — [Tagline]` | LocalBusiness |
| `/services/[slug]` | `[Service Name] in [City] | [Business Name]` | Service |
| `/service-areas/[slug]` | `[Service] in [City], [State] | [Business Name]` | LocalBusiness with area |
| `/contact` | `Contact [Business Name]` | LocalBusiness |
*(List all pages)*

**Sitemap and robots:**
- `app/sitemap.ts` — generates XML sitemap from page list + service/city data arrays
- `app/robots.ts` — basic allow all / disallow admin

---

## 17. Integration Requirements

**Contact form:**
- Library: React Hook Form (validation) + Resend (delivery)
- Fields: [List specific fields — e.g., Name, Phone, Service Type, Message]
- Server action in `lib/actions.ts`
- On success: redirect to `/thank-you`
- Spam protection: honeypot field

**[Other integrations — booking, maps, analytics, etc.]:**
- [Integration name]: [Implementation approach] — [where it lives in the file structure]

---

## 18. Accessibility Requirements

- Semantic HTML structure on all pages (see architecture rules)
- All interactive elements keyboard-navigable
- Focus indicator: visible on all buttons, links, inputs (defined in `globals.css`)
- All form inputs have `<label>` elements (not placeholder-as-label)
- Images: `alt` text on all `<Image>` components
- Mobile nav: focus trap while open, `aria-expanded` on toggle button
- Before/after slider: keyboard-controllable via arrow keys
- Color contrast: verified for all text-on-background combinations from design system

---

## 19. Page Implementation Order

*(See `implementation-phasing-and-qa-rules.md` Part 1 for full logic)*

1. Homepage
2. [Primary service page]
3. Contact page
4. About page
5. Services overview
6. Remaining service pages
7. City/service-area pages (if applicable)
8. Thank-you page
9. Gallery
10. Legal pages

---

## 20. Phased Build Plan

*(See `implementation-phasing-and-qa-rules.md` Part 2 for full phase definitions)*

| Phase | What gets built | Success gate |
|---|---|---|
| 1 — Foundation | Scaffold, tokens, globals, layout shell, Button | `next dev` runs, tokens load, Button renders |
| 2 — Shared components | Header, Footer, Nav, all sections, ContactForm | All shared components render + form delivers email |
| 3 — Pages | All pages composed from sections | All pages render, metadata correct, dynamic routes generate |
| 4 — Polish | Animations, mobile review, OG images, performance | All breakpoints correct, Lighthouse ≥ 85 |
| 5 — QA + Launch | Full QA checklist | All checklist items pass |

---

## 21. QA and Acceptance Criteria

*(Full checklist in `implementation-phasing-and-qa-rules.md` Part 3 — reference it directly)*

**Project-specific QA notes:**
- [Any acceptance criteria specific to this project — e.g., "Before/after slider must work on iOS Safari," "Click-to-call must be tested on actual phone"]

---

## 22. Launch Readiness Checklist

*(Full checklist in `implementation-phasing-and-qa-rules.md` Part 4 — reference it directly)*

**Project-specific launch items:**
- [e.g., "Redirect old URLs from previous site to new structure"]
- [e.g., "Client to confirm business hours are current"]

---

## 23. Assumptions Made

Format:
> `[ASSUMPTION]` **Topic:** [What was assumed]. **Why:** [Missing input / inferred]. **Impact:** [What changes if wrong].

- [ASSUMPTION] ...

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| [Issue] | [Reason] | [Person/stage] | [Before phase 1 / before page build / before launch] |

---

## 25. Blockers and Risks

*(Include only if present)*

**Blockers:** [Must be resolved before build can begin]

**Risks:** [e.g., "Photography not yet provided — Phase 3 can proceed with placeholder images but Phase 4 polish cannot complete without real assets."]

---

## 26. Handoff to Coding Stage

**What to build first:** [Phase 1 — Foundation. Start with `tailwind.config.ts` and the design system token mapping.]

**What can be reused across pages:** [List global sections and components]

**What must remain page-specific:** [List one-off components + page-specific data files]

**Data/content structure to respect:**
- All business constants from `data/site.ts` — do not hardcode elsewhere
- All service content from `data/services.ts` — used for service pages AND service cards on homepage
- Testimonials from `data/testimonials.ts` — shared across Homepage and About

**Design/brand/wireframe decisions that must not change:**
- [e.g., "Review count and star rating must appear above the fold on the homepage — this is a brand-layer requirement from 05-brand-direction"]
- [e.g., "CTA button must always be visually dominant — do not reduce its prominence for layout convenience"]
- [e.g., "No animation on the hero section text — design system specifies still entry for the hero heading"]

**Technical flexibility that remains:**
- Exact Tailwind class values within design system ranges
- Component internal structure (how a card is marked up) as long as it matches design system visual output
- Whether Framer Motion or CSS-only animation is used — match the defined behavior, not the library
- Minor implementation details not specified in prior stages
