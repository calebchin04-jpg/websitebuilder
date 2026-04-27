# 07 — Implementation Plan
## Markham Green Golf Club

**Project:** Markham Green Golf Club
**Build type:** Redesign of existing site (markhamgreen.com)
**Date:** April 20, 2026
**Stage:** 07-implementation-planning — output complete
**Stack:** Next.js 15 App Router + React + Tailwind CSS 3.4 + TypeScript
**Prior-stage quality:** Acceptable with flags — design system and wireframes complete; photography review and logo file are pre-build dependencies.

---

## 1. Project Overview

Markham Green Golf Club is a 5-page static redesign of markhamgreen.com built in Next.js 15 App Router + TypeScript + Tailwind CSS. Pages: Homepage (`/`), Course & Green Fees (`/course`), Lessons & Camps (`/lessons`), About / Pro Shop (`/about`), Privacy Policy (`/privacy-policy`). No dynamic routes, no CMS, no server actions — primary CTA is a tel: phone link, lesson inquiry is a mailto: link. The most important implementation consideration: the `siteConfig.bookingUrl` toggle that swaps the primary CTA from `tel:(905)294-6156` to an external booking URL with a single config change; this must work correctly before launch.

---

## 2. Implementation Planning Summary

**Stack:** Next.js 15 App Router + TypeScript + Tailwind CSS 3.4
**Total pages:** 5 (all static — no dynamic routes)
**Dynamic routes:** None
**Integrations active:**
- Google Maps embed (`/about` page — deferred until physical address confirmed)
- LocalBusiness JSON-LD schema (in `app/layout.tsx`)
- `next/font/google` for Cormorant Garamond (or Playfair Display) + Inter
- Next.js `<Image>` for all photography
- `siteConfig.bookingUrl` toggle (no external API — config-only)

**CMS:** Not required — static data files
**Animation level:** Subtle — CSS-only `@keyframes fadeUp` with staggered delay classes
**Build complexity:** Simple — 5 static pages, no server actions, no form submission, no dynamic routing

---

## 3. Critique of Prior-Stage Materials

**Overall prior-stage quality:** Acceptable

**Issues identified:**
> **[Photography dependency]** Problem: Drone photography quality not yet confirmed. Implementation impact: Hero component and PhotoGrid section cannot be completed without real images. Resolution: Build with placeholder images using Next.js `<Image>` component with correct sizing and alt text. Placeholder is replaced with real photography when received.

> **[No Resend integration]** Problem: No form exists in this build — lesson inquiry is a mailto: link, tee time CTA is a tel: link. Implementation impact: No `lib/actions.ts`, no `lib/schema.ts`, no react-hook-form, no Resend setup required. This simplifies the build significantly. Resolution: Confirmed — no contact form in Phase 1.

> **[Google Maps embed deferred]** Problem: Physical address not yet confirmed. Implementation impact: Maps embed component exists in `/about` contact block but renders a placeholder until address is confirmed. Resolution: Component built with conditional render — shows address placeholder if address is empty string; shows Maps embed when address is populated in `siteConfig`.

---

## 5. Recommended Stack

**Stack:** Next.js 15 App Router + React + Tailwind CSS 3.4 + TypeScript

**Why this stack for this project:**
- 5 completely static pages generate at build time with zero runtime overhead. No server actions, no API routes, no database — this is a brochure site. Next.js static generation is the simplest and most performant approach.
- Matches the established project standard (mr-rooter-markham, la-grotta-on-main), enabling component reuse and consistent patterns.
- Photography-heavy design benefits from Next.js `<Image>` component's automatic WebP conversion, lazy loading, and responsive `sizes` prop — critical for LCP performance on the hero.

---

## 6. Technical Architecture

**Architecture type:** Composition-based static server rendering. All page components are Server Components by default. No client components required in the base build — no state, no event handlers, no browser APIs needed for the core pages.

**Component layers:**
1. Layout (`Header`, `Footer`) — Server Components
2. Sections (page-level blocks) — Server Components
3. UI primitives (`Button`, `SectionWrapper`, `PricingTierCard`, `StaffCard`, etc.) — Server Components
4. Mobile navigation drawer — Client Component (requires toggle state)

**Server vs client component decisions:**

| Component | Type | Reason |
|---|---|---|
| `app/layout.tsx` | Server | Root layout, no interactivity |
| `Header` | Server | Static links and CTA — no JS state |
| `MobileNav` | Client | `useState` for drawer open/close |
| `Footer` | Server | Static content |
| `Hero` | Server | Static image + text + links |
| `TrustBar` | Server | Static content |
| `CourseOverview` | Server | Static content |
| `PricingPreview` | Server | Static pricing data |
| `LessonsCallout` | Server | Static content |
| `StaffSection` | Server | Static content |
| `PhotoGrid` | Server | Next.js Image components, no interactivity |
| `CTABand` | Server | Static content |
| `PricingTable` | Server | Static data table |
| `CourseInfo` | Server | Static content |
| `LessonPrograms` | Server | Static pricing content |
| `StaffFull` | Server | Static content with conditional map |
| `ContactBlock` | Server | Conditional map embed render |
| `PrivacyContent` | Server | Static legal text |

**Data flow:** `data/site.ts` → imported by page components and sections that need it. Section components receive data as props from page components or import directly from data files. No prop drilling across more than 2 levels.

---

## 7. Routing and Page Architecture

**All pages and their routes:**

| Page | URL | App Router file | Dynamic? |
|---|---|---|---|
| Homepage | `/` | `app/page.tsx` | No |
| Course & Green Fees | `/course` | `app/course/page.tsx` | No |
| Lessons & Camps | `/lessons` | `app/lessons/page.tsx` | No |
| About / Pro Shop | `/about` | `app/about/page.tsx` | No |
| Privacy Policy | `/privacy-policy` | `app/privacy-policy/page.tsx` | No |
| 404 | — | `app/not-found.tsx` | No |

**Static generation notes:** All pages are statically generated at build time. No `generateStaticParams` required — no dynamic routes.

---

## 8. Project Folder/File Structure

```
markham-green-golf/
├── app/
│   ├── layout.tsx                    # Root: fonts, metadata base, Header, Footer, JSON-LD schema
│   ├── page.tsx                      # Homepage — assembles homepage sections
│   ├── globals.css                   # CSS custom properties + Tailwind base + @keyframes fadeUp
│   ├── course/
│   │   └── page.tsx                  # Course & Green Fees page
│   ├── lessons/
│   │   └── page.tsx                  # Lessons & Camps page
│   ├── about/
│   │   └── page.tsx                  # About / Pro Shop page
│   ├── privacy-policy/
│   │   └── page.tsx                  # Privacy Policy
│   ├── not-found.tsx                 # 404 page
│   ├── robots.ts                     # robots.txt generation
│   └── sitemap.ts                    # sitemap.xml generation
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Sticky dark green header, logo/wordmark, nav, CTA button
│   │   ├── Footer.tsx                # Dark green footer, 3-column, phone + nav + social
│   │   └── MobileNav.tsx             # Client Component — hamburger drawer
│   ├── sections/
│   │   ├── Hero.tsx                  # Homepage: full-viewport photo, headline, season date, CTAs
│   │   ├── TrustBar.tsx              # Immediately below hero: Google rating + PGA cred + community
│   │   ├── CourseOverview.tsx        # 9-hole description + pricing preview (3 tiers) + link to /course
│   │   ├── LessonsCallout.tsx        # Salazar Academy intro + 3 programs + link to /lessons
│   │   ├── StaffSection.tsx          # Homepage: brief — Scott + Greg only, name + title + credential
│   │   ├── PhotoGrid.tsx             # 3-column photography grid (course drone shots)
│   │   ├── CTABand.tsx               # Full-width dark band: headline + "Book a Tee Time" button
│   │   ├── PageHero.tsx              # Inner pages: banner-height hero for /course, /lessons, /about
│   │   ├── PricingTable.tsx          # Full green fees table — all tiers — used on /course
│   │   ├── CourseInfo.tsx            # Course specs (par, yards, layout) — used on /course
│   │   ├── LessonPrograms.tsx        # 3 program sections (Private, Ladies, Junior) — used on /lessons
│   │   ├── StaffFull.tsx             # Full 4-person staff profiles — used on /about
│   │   ├── CourseBackground.tsx      # Course history + community story — used on /about
│   │   └── ContactBlock.tsx          # Address + hours + phone + conditional Maps embed — /about
│   └── ui/
│       ├── Button.tsx                # Polymorphic: primary (gold), secondary (outlined), ghost
│       ├── SectionWrapper.tsx        # Section container: padding + bg variant + max-width
│       ├── PricingTierCard.tsx       # Single pricing tier: label + price + condition note
│       ├── StaffCard.tsx             # Staff card: brief (homepage) and full (about) variants
│       ├── PhoneLink.tsx             # tel: link with tap-to-call formatting
│       └── BookingCTA.tsx            # Polymorphic CTA: tel: link or bookingUrl, driven by siteConfig
│
├── data/
│   ├── site.ts                       # siteConfig: name, phone, address, hours, bookingUrl, rating
│   ├── navigation.ts                 # mainNav array + footerNav columns
│   ├── staff.ts                      # Staff profiles: all 4 members, names, credentials, bios
│   ├── pricing.ts                    # Green fees all tiers + lesson pricing all packages
│   └── reviews.ts                    # Google rating + review count (placeholder until confirmed)
│
├── lib/
│   └── utils.ts                      # cn() utility (clsx + tailwind-merge)
│
├── public/
│   └── images/
│       ├── hero/                     # Hero background image (course drone shot)
│       ├── course/                   # Course photography for PhotoGrid section
│       ├── staff/                    # Staff headshots (when received)
│       └── og/                       # OG image (1200×630) for social sharing
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 9. Naming Conventions

**Files:** PascalCase for components (`Button.tsx`, `PricingTierCard.tsx`), camelCase for data/utility files (`site.ts`, `pricing.ts`, `utils.ts`)

**Components:** PascalCase matching filename (`export function PricingTierCard`)

**CSS classes:** Tailwind utilities only — no custom class names except in `globals.css` for animation (`fade-up-1`, `fade-up-2`, etc.)

**Data types/interfaces:** PascalCase with `type` keyword — `type StaffMember`, `type PricingTier`

**Exported constants:** camelCase — `export const siteConfig`, `export const greenFees`, `export const staff`

**Image files:** All lowercase, hyphens — `course-hero.jpg`, `scott-haynes.jpg`, `hole-3-fairway.jpg`

---

## 10. Major File Responsibilities

| File | Responsible for |
|---|---|
| `app/layout.tsx` | Root layout: Header + Footer composition, next/font loading, metadataBase, LocalBusiness JSON-LD schema |
| `app/globals.css` | Tailwind directives, CSS custom properties (all design tokens), `@keyframes fadeUp`, `.fade-up-1` through `.fade-up-4`, `prefers-reduced-motion` block |
| `tailwind.config.ts` | Design system token mapping: `colors`, `fontFamily`, `borderRadius`, `boxShadow` — maps CSS vars to Tailwind class names |
| `data/site.ts` | All global business constants: `name`, `phone`, `address` (placeholder), `hours` (placeholder), `bookingUrl` (null until active), `googleRating` (placeholder), `reviewCount` (placeholder), `seasonOpenDate` |
| `data/navigation.ts` | `mainNav` array (4 items + CTA), `footerNav` columns |
| `data/staff.ts` | 4 staff members with name, title, credential, bio (placeholder), photo path |
| `data/pricing.ts` | `greenFees` array (all tiers), `lessonPricing` object (all packages) |
| `components/ui/BookingCTA.tsx` | Booking CTA logic: renders `tel:` link when `siteConfig.bookingUrl` is null; renders external link when populated |
| `components/ui/SectionWrapper.tsx` | Section container: `bg` prop variants (`dark`, `dark-alt`, `light`, `light-alt`), `id` prop, consistent padding |
| `components/ui/Button.tsx` | All button variants (primary/secondary/ghost) + size variants + polymorphic (renders `<a>` when `href` provided, `<button>` otherwise) |

---

## 11. Reusable Component Architecture

**Globally reusable sections (used on 2+ pages):**
- `CTABand` → used on: Homepage, `/course`, `/lessons`, `/about`
- `PageHero` → used on: `/course`, `/lessons`, `/about` (not homepage — homepage has full `Hero`)
- `Header` + `Footer` → used on: all pages (via `app/layout.tsx`)

**Section variants needed:**
- `<Hero />` — full-viewport homepage-only hero (photography + overlay + headline + season date + CTAs)
- `<PageHero />` — inner-page banner height (30–40vh) — page title + positioning statement + CTA
- `<StaffSection />` — homepage brief variant (Scott + Greg only, credentials only)
- `<StaffFull />` — About page full variant (4 members, bios)
- `<CTABand />` — consistent across all pages; receives `headline` prop for page-specific copy

**Page-specific components (not shared):**
- `PricingTable` — used only on `/course`; unique full-table layout
- `CourseInfo` — used only on `/course`; course specs block
- `LessonPrograms` — used only on `/lessons`; 3-section program layout
- `CourseBackground` — used only on `/about`; course history section
- `ContactBlock` — used only on `/about`; address + hours + conditional map embed

---

## 12. Props vs Config/Data Decisions

**Uses `data/site.ts`:** Business name, phone, address (placeholder), hours (placeholder), `bookingUrl` (null), Google rating + review count (placeholder), season open date. All business facts live here — never hardcoded in components.

**Uses `data/pricing.ts`:** Green fees tiers array (used in `PricingTable` and `CourseOverview`), lesson pricing object (used in `LessonPrograms`).

**Uses `data/staff.ts`:** Staff profiles array — used in `StaffSection` (filtered to Scott + Greg) and `StaffFull` (all four members).

**Uses `data/navigation.ts`:** `mainNav` and `footerNav` — imported in `Header` and `Footer`.

**Uses `data/reviews.ts`:** Google rating and review count — imported by `TrustBar`.

**Hardcoded in component:** ARIA labels, animation class names (`.fade-up-1` etc.), image aspect ratio constraints, icon sizes.

**Passed as props:** `CTABand` headline text, `PageHero` headline + subheadline, `SectionWrapper` bg variant.

---

## 13. Tailwind Configuration Notes

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'surface-dark':     'var(--color-surface-dark)',      // #1a3a2a
      'surface-dark-alt': 'var(--color-surface-dark-alt)',  // #0f1f17
      'surface-light':    'var(--color-surface-light)',     // #f8f5f0
      'surface-light-alt':'var(--color-surface-light-alt)', // #f4f4f4
      'accent':           'var(--color-accent)',            // #c8a84b
      'accent-hover':     'var(--color-accent-hover)',      // #a8882a
      'text-primary':     'var(--color-text-primary)',      // #1a1a1a
      'text-inverse':     'var(--color-text-inverse)',      // #f5f0e8
      'text-secondary':   'var(--color-text-secondary)',    // #6b6560
      'border-warm':      'var(--color-border)',            // #e5e0d8
    },
    fontFamily: {
      serif: ['var(--font-serif)', 'Georgia', 'serif'],     // Cormorant Garamond or Playfair Display
      sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'], // Inter
    },
    borderRadius: {
      DEFAULT: '6px',
      sm: '4px',
      lg: '8px',
    },
    boxShadow: {
      card: '0 1px 4px rgba(0,0,0,0.06)',
      'card-hover': '0 4px 16px rgba(0,0,0,0.08)',
      header: '0 1px 8px rgba(0,0,0,0.08)',
    },
  }
}
```

**CSS custom property definitions in `globals.css`:**
```css
:root {
  --color-surface-dark: #1a3a2a;
  --color-surface-dark-alt: #0f1f17;
  --color-surface-light: #f8f5f0;
  --color-surface-light-alt: #f4f4f4;
  --color-accent: #c8a84b;
  --color-accent-hover: #a8882a;
  --color-text-primary: #1a1a1a;
  --color-text-inverse: #f5f0e8;
  --color-text-secondary: #6b6560;
  --color-border: #e5e0d8;
  --color-success: #16a34a;
  --color-error: #dc2626;
}
```

---

## 14. Responsive Implementation Notes

**Key breakpoints:**
- Mobile: 375–767px (base Tailwind classes)
- Tablet: 768px+ (`md:` prefix)
- Desktop: 1024px+ (`lg:` prefix)
- Wide: 1280px+ (`xl:` prefix — content max-width containers)

**Layout-specific responsive behavior:**
- `Header`: desktop = horizontal bar (64–72px); mobile = 60px with logo + compact CTA + hamburger
- `MobileNav`: desktop = hidden; mobile = drawer from right, full-width links
- `Hero`: desktop = full-viewport with photography; mobile = 80vh crop, centered headline
- `TrustBar`: desktop = 3–4 items horizontal; mobile = 2×2 grid
- `CourseOverview` pricing preview: desktop = 3 cards side-by-side; mobile = stacked single column
- `PricingTable`: desktop = HTML table with label/price/condition columns; mobile = stacked `PricingTierCard` components
- `StaffSection` (homepage): desktop = 2-column card row; mobile = stacked
- `StaffFull` (about): desktop = 2×2 grid or 4-column; mobile = stacked single column
- `PhotoGrid`: desktop = 3-column equal-height row; mobile = 2-column
- `ContactBlock`: desktop = 2-column (details left, map right); mobile = stacked (details above, map below)
- `CTABand`: full-width on both desktop and mobile; button full-width on mobile

---

## 15. Animation Implementation Plan

**Motion level from design system:** Subtle

**Implementation method:** CSS-only `@keyframes` — same approach as mr-rooter-markham. No IntersectionObserver, no Framer Motion. `animation-fill-mode: both` ensures content is visible regardless of JS execution timing.

```css
/* globals.css */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade-up   { animation: fadeUp 420ms ease both; }
.fade-up-1 { animation: fadeUp 420ms ease  80ms both; }
.fade-up-2 { animation: fadeUp 420ms ease 180ms both; }
.fade-up-3 { animation: fadeUp 420ms ease 280ms both; }
.fade-up-4 { animation: fadeUp 420ms ease 360ms both; }
```

**What animates:**

| Element | Animation | Implementation |
|---|---|---|
| Trust bar items | `.fade-up-1` through `.fade-up-3` | CSS class on each item |
| Homepage section content blocks | `.fade-up-1` through `.fade-up-4` | CSS class on each grid/row item |
| Pricing tier cards (course page) | `.fade-up-1` through `.fade-up-N` | CSS class on each card |
| Staff cards | `.fade-up-1` through `.fade-up-4` | CSS class on each card |
| Button hover | `transition-colors duration-200` | Tailwind |
| Mobile nav drawer | `transition-transform duration-250` | Tailwind |
| Header scroll shadow | CSS transition on `box-shadow` | Tailwind `transition-shadow` |

**What does NOT animate:** Hero section text (appears on load, no delay), photography images, footer, CTA band headline.

**Reduced motion:** Global `@media (prefers-reduced-motion: reduce)` block in `globals.css` — all animation-duration and transition-duration forced to `0.01ms`.

---

## 16. SEO and Metadata Plan

**Metadata structure:** Next.js App Router `export const metadata` in each page file.

**Global metadata base in `app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://markhamgreen.com'),
  title: { default: 'Markham Green Golf Club', template: '%s | Markham Green Golf Club' },
  description: 'Public 9-hole golf course in Markham, Ontario. Affordable green fees, professional instruction by Salazar Golf Academy. Book a tee time: (905) 294-6156.',
  openGraph: { type: 'website', siteName: 'Markham Green Golf Club', images: ['/images/og/markham-green.jpg'] },
}
```

**Per-page metadata:**

| Page | Title | Description focus |
|---|---|---|
| `/` | `Markham Green Golf Club — Public Golf in Markham, ON` | Green fees, booking, community course |
| `/course` | `Green Fees & Course Info` | Pricing tiers, 9-hole public course |
| `/lessons` | `Golf Lessons & Junior Camps — Salazar Golf Academy` | Private lessons, Ladies Learn to Golf, junior camps |
| `/about` | `About / Pro Shop` | Staff, PGA credentials, contact, hours |
| `/privacy-policy` | `Privacy Policy` | Legal |

**LocalBusiness JSON-LD schema in `app/layout.tsx`:**
```json
{
  "@context": "https://schema.org",
  "@type": "GolfCourse",
  "name": "Markham Green Golf Club",
  "telephone": "(905) 294-6156",
  "address": { /* placeholder — must be completed before launch */ },
  "openingHours": [ /* placeholder — must be completed before launch */ ],
  "geo": { /* placeholder — lat/lng from confirmed address */ },
  "areaServed": ["Markham", "York Region", "Stouffville", "Unionville"],
  "url": "https://markhamgreen.com",
  "priceRange": "$$"
}
```

**Note:** Schema uses `GolfCourse` type (subtype of `SportsActivityLocation`, which is a subtype of `LocalBusiness`) — more specific and better for golf-related searches.

**Sitemap and robots:**
- `app/sitemap.ts` — static list of 5 URLs with lastmod dates
- `app/robots.ts` — allow all, disallow nothing; sitemap URL pointing to `/sitemap.xml`

---

## 17. Integration Requirements

**Google Maps embed (`/about` ContactBlock):**
- Implementation: Conditional render based on `siteConfig.address` — if empty string, shows "Address coming soon" placeholder text
- When address is confirmed: standard Google Maps embed iframe or Maps Static API image
- No API key required for basic embed iframe

**`siteConfig.bookingUrl` toggle (`BookingCTA` component):**
```typescript
// components/ui/BookingCTA.tsx
export function BookingCTA({ label = 'Book a Tee Time', size = 'default' }) {
  const href = siteConfig.bookingUrl ?? `tel:${siteConfig.phoneRaw}`
  const isExternal = !!siteConfig.bookingUrl
  return (
    <Button href={href} target={isExternal ? '_blank' : undefined} size={size}>
      {label}
    </Button>
  )
}
```

**`next/font/google`:**
```typescript
// app/layout.tsx
import { Cormorant_Garamond, Inter } from 'next/font/google'
const serifFont = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','600'], variable: '--font-serif' })
const sansFont  = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-sans' })
```

**No Resend, no react-hook-form, no Zod:** No form submission in this build. These dependencies are not installed.

---

## 18. Accessibility Requirements

- Semantic HTML: `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>` with `id` props, `<h1>`–`<h3>` hierarchy respected on every page
- All interactive elements keyboard-navigable: links, buttons, phone links
- Focus indicator: defined in `globals.css` — `*:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }`
- `alt` text on all `<Image>` components — descriptive of course location and content
- Mobile nav: `aria-expanded` on hamburger button toggle, focus trap while drawer is open
- Phone links: `aria-label="Call Markham Green Golf Club at (905) 294-6156"` on tel: links in header
- Color contrast: dark green (#1a3a2a) on warm cream (#f8f5f0) passes AAA; gold (#c8a84b) CTA button text must be verified — use Text Inverse (#f5f0e8) as button label if contrast fails
- Pricing table: use `<table>` with `<th scope="row">` for tier labels — screen reader accessible

---

## 19. Page Implementation Order

1. **Homepage** — Most sections, establishes component library needs, highest conversion impact
2. **Course & Green Fees** — Pricing table component (most important mobile component)
3. **Lessons & Camps** — Multi-section program layout, inline CTAs
4. **About / Pro Shop** — Staff full variant, conditional map embed
5. **Privacy Policy** — Static content, 30-minute build
6. **`not-found.tsx`** — Simple, last

---

## 20. Phased Build Plan

| Phase | What gets built | Success gate |
|---|---|---|
| 1 — Foundation | `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `globals.css` (all tokens + animations), `lib/utils.ts`, font loading in `layout.tsx` | `npm run dev` starts, tokens render correctly, fonts load |
| 2 — Data Layer | `data/site.ts`, `data/navigation.ts`, `data/staff.ts`, `data/pricing.ts`, `data/reviews.ts` | All data structures defined; TypeScript strict mode passes |
| 3 — UI Primitives | `Button.tsx`, `SectionWrapper.tsx`, `PricingTierCard.tsx`, `StaffCard.tsx`, `PhoneLink.tsx`, `BookingCTA.tsx` | All components render in isolation with correct styling |
| 4 — Layout Shell | `Header.tsx`, `MobileNav.tsx` (Client Component), `Footer.tsx`, full `app/layout.tsx` | Site shell renders with sticky header, nav, and footer; mobile drawer opens/closes |
| 5 — Homepage | All homepage sections assembled in `app/page.tsx` | Homepage renders all 7 sections correctly on desktop and mobile; CTA is functional |
| 6 — Inner Pages | `/course`, `/lessons`, `/about`, `/privacy-policy` pages | All 4 inner pages render with correct sections and metadata |
| 7 — SEO + Schema | `sitemap.ts`, `robots.ts`, LocalBusiness JSON-LD schema, per-page metadata | `npm run build` produces valid sitemap; schema validates at Google's Rich Results Test |
| 8 — Photography | Replace placeholder images with real course drone shots | Hero and PhotoGrid render with actual photography; LCP < 2.5s on mobile |
| 9 — Polish + QA | Animations verified, all breakpoints checked, accessibility audit, Lighthouse | Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥95 |

---

## 21. QA and Acceptance Criteria

**Project-specific QA notes:**
- Phone number `(905) 294-6156` must be tap-to-call on mobile — test on actual iOS and Android device (not just browser emulation)
- `siteConfig.bookingUrl` toggle must be tested in both null state (tel: link) and populated state (external link) — verify both render correctly
- Pricing table on `/course` must be readable on 375px iPhone screen without horizontal scroll
- Trust bar must not be obscured by the sticky header on any page
- LocalBusiness JSON-LD schema must validate with Google's Rich Results Test before launch
- `prefers-reduced-motion` must be verified — test in macOS Accessibility settings
- All course photography must have descriptive `alt` text (not `alt=""`)
- Staff bio placeholder sections must be visually distinct from real content — clearly marked as "Bio coming soon" for client

---

## 22. Launch Readiness Checklist

**Must be complete before launch:**
- [ ] Physical address confirmed and populated in `data/site.ts` — LocalBusiness schema incomplete without it
- [ ] Operating hours confirmed and populated in `data/site.ts`
- [ ] Google rating and review count confirmed — update `data/reviews.ts`
- [ ] Year established confirmed — update trust bar and About page copy
- [ ] Course specs (par, yards, layout) provided — update `data/pricing.ts` or course page data
- [ ] Logo file received — replace text wordmark in `Header.tsx`
- [ ] Greg Salazar CTA direction confirmed — lesson inquiry email vs. phone
- [ ] Real drone photography received and placed in `public/images/`
- [ ] OG image created (1200×630px) and placed in `public/images/og/`
- [ ] Google Maps embed working with confirmed address on `/about`
- [ ] `npm run build` passes with zero TypeScript errors
- [ ] Lighthouse Performance ≥90 on mobile (PageSpeed Insights)
- [ ] Domain pointed to new build — old markhamgreen.com redirects correctly

**Project-specific launch items:**
- Verify the old markhamgreen.com does not have SEO-valuable pages that need 301 redirects (Prices → `/course`, Lessons → `/lessons`)
- Confirm with client whether social media links (Instagram/Facebook) exist and should appear in footer

---

## 23. Assumptions Made

> `[ASSUMPTION]` **No Resend or form integration:** Build has no contact form — mailto: and tel: links are the only CTA mechanisms. **Why:** Confirmed in planning/wireframe stages — lesson CTA is mailto:, tee time CTA is phone. **Impact:** If client wants a lesson inquiry form added, it requires react-hook-form + Zod + Resend integration in Phase 2 — not a complex addition but outside Phase 1 scope.

> `[ASSUMPTION]` **`GolfCourse` schema type:** Using `@type: "GolfCourse"` in JSON-LD rather than generic `LocalBusiness`. **Why:** More specific type; Google supports it and may enable richer results for golf-related searches. **Impact:** If Google does not surface rich results for GolfCourse type, fallback to `LocalBusiness` is a one-line change.

> `[ASSUMPTION]` **No 301 redirects needed from old site:** Old markhamgreen.com structure assumed minimal — basic pages that can be remapped with standard redirects. **Why:** Existing site is described as sparse and non-converting. **Impact:** If client has backlinks to specific old URLs that need preserving, `next.config.ts` redirects array must be populated before domain cutover.

> `[ASSUMPTION]` **Cormorant Garamond as serif:** Implementation defaults to Cormorant Garamond — design system permits Playfair Display. **Why:** Cormorant is more refined at display sizes. **Impact:** Font swap to Playfair Display is a one-line change in `app/layout.tsx` and `globals.css`.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Physical address | Not confirmed by client | Client | Before Phase 7 (schema); before launch |
| Operating hours | Not confirmed | Client | Before Phase 7; before launch |
| Google rating + review count | Not confirmed | Client | Before Phase 9 (polish); before launch |
| Year established | Not confirmed | Client | Before About page and trust bar copy |
| Course specs (par, yards, layout) | Not confirmed | Client | Before Phase 6 (inner pages) |
| Drone photography | Not yet reviewed | Agency/client | Before Phase 8; Phase 9 polish blocked without real photos |
| Logo file | Not received | Client | Before Phase 9 polish; text wordmark placeholder until received |
| Staff headshots | Not received | Client | Before Phase 8; initials placeholder used |
| Greg Salazar CTA direction | Not confirmed | Client | Before Phase 6 (`/lessons` page is built) |
| Social media handles | Not confirmed | Client | Before Phase 4 layout shell (footer) |
| Old site redirect requirements | Not assessed | Agency assessment | Before Phase 9 launch readiness |

---

## 25. Blockers and Risks

**Blockers:**
- Drone photography review must happen before Phase 8 and Phase 9. The hero and photography grid cannot be completed with placeholder images.
- Greg Salazar CTA direction must be confirmed before `/lessons` is built in Phase 6.

**Risks:**
- **Photography quality:** If drone shots are unusable, Phase 8 is blocked until reshoots are arranged. This is the highest timeline risk given the April 24 season open deadline.
- **Timeline:** The April 24 deadline is tight. Multiple client-dependent items remain. Recommended approach: build with placeholders through Phase 7, deploy a staging version, and gather all client-provided assets in parallel. Go live on April 24 with placeholders only for non-critical items (staff headshots, social links). Address and hours are launch blockers — pursue these first.
- **Font performance:** Cormorant Garamond is a larger Google Font file than Inter. If LCP performance is impacted, swap to `font-display: swap` and subset to Latin only — already the default with `next/font/google`.

---

## 26. Handoff to Coding Stage

**What to build first:** Phase 1 — Foundation. Start with `globals.css` (CSS tokens + animations), then `tailwind.config.ts` token mapping, then `lib/utils.ts` (cn utility), then font loading in `layout.tsx`.

**What can be reused across pages:**
- `Header` and `Footer` — defined once in `components/layout/`, used via `app/layout.tsx`
- `CTABand` — used on all 4 core pages; receives `headline` prop
- `PageHero` — used on `/course`, `/lessons`, `/about`
- `SectionWrapper` — used in every section
- `BookingCTA` — used in Header, Hero, CTABand, CourseOverview, PricingTable

**What must remain page-specific:**
- `Hero.tsx` — homepage only; full-viewport with photography + season date
- `PricingTable.tsx` — `/course` only
- `CourseInfo.tsx` — `/course` only
- `LessonPrograms.tsx` — `/lessons` only
- `StaffFull.tsx` — `/about` only
- `CourseBackground.tsx` — `/about` only
- `ContactBlock.tsx` — `/about` only

**Data/content structure to respect:**
- All business constants from `data/site.ts` — phone, address, hours, bookingUrl, rating must never be hardcoded in components
- All pricing from `data/pricing.ts` — used by both homepage pricing preview and full pricing table
- Staff data from `data/staff.ts` — filtered differently for homepage (2 people) vs. About page (4 people) but same source

**Design/brand/wireframe decisions that must not change:**
- Trust bar immediately below hero on homepage — non-negotiable structural placement from brand direction
- Pricing table on `/course` must render as stacked tier cards on mobile — not a horizontal scrolling table
- "Book a Tee Time" CTA must be present in sticky header on all pages at all scroll positions — this is a brand-layer requirement
- Phone number in sticky header must be a tap-to-call link on mobile
- Gold accent used on CTA button backgrounds only — never as a section surface color
- Serif typeface (Cormorant Garamond) for H1–H3 only — body and UI use Inter

**Technical flexibility that remains:**
- Exact Tailwind class values within the defined ranges (e.g., `py-20` vs. `py-24` for section padding)
- Staff card internal markup structure
- Whether `PhotoGrid` uses CSS Grid or Flexbox internally
- Exact font weights loaded from Google Fonts (load only what's used)
- Minor implementation details not specified in prior stages — use judgment to stay consistent with the visual direction
