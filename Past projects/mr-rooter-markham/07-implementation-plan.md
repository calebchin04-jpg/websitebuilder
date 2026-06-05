# IMPLEMENTATION PLANNING PRD
**Project:** Mr. Rooter Plumbing of Markham
**Build type:** Redesign
**Date:** 2026-04-20
**Stage:** 07-implementation-planning — output complete
**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 3.4 + TypeScript
**Prior-stage quality:** Strong

---

## 1. Project Overview

13-page local plumbing service site for Mr. Rooter Plumbing of Markham — Next.js 15 App Router, static generation, TypeScript, Tailwind CSS. Features: contact form via Resend + react-hook-form + Zod, FAQ accordion (client component), mobile nav drawer (client component), scroll reveal (intersection observer), MobileBottomBar (global fixed layout component). Dynamic route: `/services/[slug]` for 5 service detail pages generated from `data/services.ts`. No CMS, no database, no auth. Most important implementation constraint: the phone number is a structural brand requirement — it must render as a `tel:` link in the sticky header, MobileBottomBar, Hero, CTABand, and Footer. Never plain text.

---

## 2. Implementation Planning Summary

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3.4
**Total pages:** 13
**Dynamic routes:** `/services/[slug]` (5 service pages via `generateStaticParams`)
**Integrations active:** Resend (contact form email delivery), next/font/google (Inter), next/image (optimized images)
**Optional/deferred:** Google Analytics 4 (env var gated, not required for launch), Google Maps embed on /service-areas (optional)
**CMS:** Not required — static TypeScript data files
**Animation level:** Subtle (fade-on-scroll via Intersection Observer, hover transitions via Tailwind)
**Build complexity:** Medium

---

## 3. Critique of Prior-Stage Materials

**Overall prior-stage quality:** Strong

**Issues identified:**

> **[DATA]** Problem: `data/reviews.ts` structure not yet defined — review count and content are placeholder. Implementation impact: ReviewStrip and /reviews page cannot be fully implemented until review data is confirmed. Resolution: Build with placeholder data array structure. Shape is defined in this plan. Real data to be filled before launch.

> **[ASSETS]** Problem: Hero image, service page images, and logo file are unconfirmed. Implementation impact: Hero component requires a confirmed image path. Resolution: Implement with placeholder image paths (`/images/hero/hero-bg.jpg`). Phase 4 (polish) is blocked until assets are provided — this is a known risk noted in prior stages.

> **[COMPONENT]** Problem: RadioCard component for Urgency selector (ContactForm) requires custom implementation — not a standard HTML input. Implementation impact: Small additional component to build in Phase 2. Resolution: Plan includes RadioCard as a UI primitive.

No send-back triggered. All prior-stage materials provide sufficient implementation foundation.

---

## 5. Recommended Stack

**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 3.4 + TypeScript

**Why this stack for this project:**
13 mostly-static pages with one dynamic route (`/services/[slug]`) benefit from static generation via `generateStaticParams` — all pages pre-rendered at build time, zero server runtime required. Server Components by default reduces JS bundle for a content-heavy local service site where load speed directly impacts emergency caller conversion. Tailwind CSS matches the existing project pattern (la-grotta-on-main, peak-ridge-remodeling) and enables rapid implementation of the design system.

**No alternate required.** Default stack is appropriate for this project scope.

---

## 6. Technical Architecture

**Architecture type:** Composition-based server-rendered with selective client interactivity.

**Component layers:**
1. Layout (Header, Footer, MobileNav, MobileBottomBar) — rendered in `app/layout.tsx`
2. Sections (page-building blocks) — server components by default; client only when interaction required
3. UI primitives (Button, SectionWrapper, ScrollReveal, etc.) — server or client as specified
4. Page-specific components (none for this project — all reuse shared sections)

**Server vs client component decisions:**

| Component | Type | Reason |
|---|---|---|
| Header | Server | No interaction beyond sticky CSS |
| MobileNav | Client | `useState` for drawer open/close |
| MobileBottomBar | Server | Static — two link elements |
| Footer | Server | Static |
| Hero | Server | Static content |
| OfferBanner | Server | Static content |
| TrustBar | Server | Static content |
| ServicesGrid | Server | Static cards |
| WhyUs | Server | Static content |
| ReviewStrip | Server | Static cards |
| ServiceAreas | Server | Static content |
| CTABand | Server | Static content |
| ContactBlock | Client | Contains ContactForm |
| ContactForm | Client | react-hook-form + Zod + server action |
| FAQAccordion | Client | `useState` for open/close per item |
| ScrollReveal | Client | Intersection Observer |
| RadioCard | Client | Selection state |
| ServiceDetail | Server | Template with data props |

**Data flow:** Page files import data from `data/` → pass as props to section components. Sections do not import data directly (exception: `siteConfig` constants like phone number may be imported directly in layout-level components).

---

## 7. Routing and Page Architecture

| Page | URL | App Router file | Dynamic? |
|---|---|---|---|
| Homepage | `/` | `app/page.tsx` | No |
| Services Overview | `/services` | `app/services/page.tsx` | No |
| Drain Cleaning | `/services/drain-cleaning` | `app/services/[slug]/page.tsx` | Yes |
| Sewer Line | `/services/sewer-line` | `app/services/[slug]/page.tsx` | Yes |
| Water Heater | `/services/water-heater` | `app/services/[slug]/page.tsx` | Yes |
| Emergency Plumbing | `/services/emergency` | `app/services/[slug]/page.tsx` | Yes |
| Backwater Valve | `/services/backwater-valve` | `app/services/[slug]/page.tsx` | Yes |
| Service Areas | `/service-areas` | `app/service-areas/page.tsx` | No |
| About | `/about` | `app/about/page.tsx` | No |
| Reviews | `/reviews` | `app/reviews/page.tsx` | No |
| Contact | `/contact` | `app/contact/page.tsx` | No |
| Thank You | `/thank-you` | `app/thank-you/page.tsx` | No |
| Privacy Policy | `/privacy-policy` | `app/privacy-policy/page.tsx` | No |
| 404 | `*` | `app/not-found.tsx` | — |
| Sitemap | `GET /sitemap.xml` | `app/sitemap.ts` | — |
| Robots | `GET /robots.txt` | `app/robots.ts` | — |

**Static generation notes:**
- `generateStaticParams` in `app/services/[slug]/page.tsx` sources from `data/services.ts`:
  ```ts
  export async function generateStaticParams() {
    return services.map(s => ({ slug: s.slug }))
  }
  ```
- All 5 service pages pre-rendered at build time
- `dynamicParams = false` to 404 any unknown service slug

---

## 8. Pseudo-Project Folder/File Structure

```
mr-rooter-markham/
├── app/
│   ├── layout.tsx                     # Root layout: fonts, metadata base, Header, Footer, MobileBottomBar
│   ├── page.tsx                       # Homepage
│   ├── globals.css                    # Tailwind directives + CSS custom properties
│   ├── not-found.tsx                  # 404 page
│   ├── robots.ts                      # Allow all → sitemap URL
│   ├── sitemap.ts                     # All 13 pages + dynamic service slugs
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx                   # Services overview
│   │   └── [slug]/
│   │       └── page.tsx               # Dynamic service detail
│   ├── service-areas/
│   │   └── page.tsx
│   ├── reviews/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── thank-you/
│   │   └── page.tsx
│   └── privacy-policy/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Sticky header: logo, nav, phone, CTA button
│   │   ├── Footer.tsx                 # Dark 3-col footer: services, company, contact
│   │   ├── MobileNav.tsx              # Hamburger drawer (Client Component)
│   │   └── MobileBottomBar.tsx        # Fixed mobile [Call Now] [Schedule Service]
│   ├── sections/
│   │   ├── OfferBanner.tsx            # Yellow $30 off bar (global, top of all pages)
│   │   ├── Hero.tsx                   # Homepage hero: headline, phone CTA, micro-badges
│   │   ├── TrustBar.tsx               # Dark 4-stat bar
│   │   ├── ServicesGrid.tsx           # 5-service card grid
│   │   ├── WhyUs.tsx                  # 4-column differentiators
│   │   ├── ReviewStrip.tsx            # 3 review cards
│   │   ├── ServiceAreas.tsx           # Coverage cities
│   │   ├── CTABand.tsx                # Red emergency CTA band
│   │   ├── ContactBlock.tsx           # Form + info sidebar (wraps ContactForm)
│   │   ├── ServiceDetail.tsx          # Reusable service page template
│   │   ├── PageHero.tsx               # Inner-page hero (non-homepage)
│   │   ├── FAQSection.tsx             # Accordion FAQ (wraps FAQAccordion)
│   │   ├── ReviewsGrid.tsx            # Full reviews grid for /reviews page
│   │   └── CityBlocks.tsx             # Named city sections for /service-areas
│   └── ui/
│       ├── Button.tsx                 # primary | secondary | secondary-inverse | ghost
│       ├── SectionWrapper.tsx         # Section container: bg + padding + max-width
│       ├── ScrollReveal.tsx           # Intersection observer fade-in (Client Component)
│       ├── ServiceCard.tsx            # Icon + name + description + link
│       ├── ReviewCard.tsx             # Stars + quote + attribution
│       ├── FAQAccordion.tsx           # Accordion with open/close state (Client Component)
│       ├── RadioCard.tsx              # Styled radio button (Client Component)
│       ├── PhoneLink.tsx              # tel: link with consistent styling
│       └── StarRating.tsx             # 5 SVG star rating
│
├── data/
│   ├── site.ts                        # siteConfig: name, phone, address, hours, rating
│   ├── navigation.ts                  # mainNav, footerColumns
│   ├── services.ts                    # All 5 services with full content
│   ├── reviews.ts                     # Customer testimonials array
│   ├── service-areas.ts               # Coverage areas with copy
│   └── pages/
│       ├── home.ts                    # Homepage section content
│       ├── about.ts                   # About page content
│       ├── contact.ts                 # Contact page content
│       └── service-areas.ts           # Service areas page content (city blocks)
│
├── lib/
│   ├── utils.ts                       # cn() = clsx + tailwind-merge
│   ├── actions.ts                     # submitContactForm server action → Resend
│   └── schema.ts                      # Zod schema for ContactForm
│
├── public/
│   └── images/
│       ├── hero/
│       │   └── hero-bg.jpg            # Homepage hero background
│       ├── services/
│       │   ├── drain-cleaning.jpg
│       │   ├── sewer-line.jpg
│       │   ├── water-heater.jpg
│       │   ├── emergency.jpg
│       │   └── backwater-valve.jpg
│       ├── logo/
│       │   └── mr-rooter-logo.png     # (or text fallback until confirmed)
│       └── og/
│           └── og-default.jpg         # 1200×630 OG image
│
├── .env.local.example                 # RESEND_API_KEY, RESEND_TO_EMAIL, NEXT_PUBLIC_SITE_URL
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 9. Naming Conventions

- **Component files:** PascalCase — `Hero.tsx`, `MobileBottomBar.tsx`, `FAQAccordion.tsx`
- **Page files:** lowercase — `page.tsx` (Next.js App Router convention)
- **Data files:** camelCase — `services.ts`, `siteConfig` (exported constant), `mainNav`
- **Type definitions:** PascalCase with `type` — `type Service = {...}`, `type Review = {...}`
- **CSS variables:** kebab-case with prefix — `--color-brand-red`, `--color-surface-dark`
- **Tailwind config extensions:** kebab-case matching CSS variable names — `brand-red`, `surface-dark`
- **Image files:** lowercase, hyphens — `hero-bg.jpg`, `drain-cleaning.jpg`
- **Dynamic route folders:** bracket + kebab — `[slug]`

---

## 10. Major File Responsibilities

| File | Responsible for |
|---|---|
| `app/layout.tsx` | Root HTML structure; Inter font loading; global metadata base; OfferBanner, Header, Footer, MobileBottomBar render |
| `app/globals.css` | Tailwind `@tailwind` directives; all CSS custom properties (design system tokens); base reset overrides; focus-visible styles; `prefers-reduced-motion` override; `pb-16` mobile body padding utility |
| `tailwind.config.ts` | Theme extension: color variables, font family, custom spacing tokens, border radius values, box shadow values |
| `data/site.ts` | `siteConfig` — single source of truth: `name`, `phone`, `phoneHref`, `email`, `address`, `hours`, `googleRating`, `reviewCount`, `foundedYear`, `siteUrl`, `directionsUrl` |
| `data/navigation.ts` | `mainNav` array (label, href, active matcher), `footerColumns` array (heading, links) |
| `data/services.ts` | `services` array — each service: `slug`, `name`, `shortDescription`, `fullDescription`, `icon` (lucide component name), `features`, `faqs`, `relatedServices`, `metaTitle`, `metaDescription` |
| `data/reviews.ts` | `reviews` array — each: `text`, `author`, `service`, `rating` |
| `lib/actions.ts` | `submitContactForm(formData)` — server action: validate with Zod, send via Resend, return status |
| `lib/schema.ts` | Zod schema `contactFormSchema` — validates all ContactForm fields |
| `lib/utils.ts` | `cn(...inputs)` — `clsx` + `tailwind-merge` composition |
| `components/ui/SectionWrapper.tsx` | `<SectionWrapper bg="surface-1" size="standard" id="...">` — wraps all sections with consistent padding + background + max-width container |
| `components/ui/Button.tsx` | All button variants: `primary`, `secondary`, `secondary-inverse`, `ghost`. Size variants: `lg`, `md`, `sm`. Polymorphic: renders as `<a>` when `href` prop is provided. |
| `components/layout/MobileBottomBar.tsx` | Fixed `h-16` bar at mobile viewport bottom — two buttons: Call (tel:) + Schedule Service (link to /contact) |

---

## 11. Reusable Component Architecture

**Globally reusable sections (used on 2+ pages):**
- `CTABand` → Homepage, /about, /service-areas, /reviews
- `PageHero` → /services overview, /about, /service-areas, /reviews, /contact (as minimal version)
- `FAQSection` → All 4 non-emergency service detail pages
- `ServiceCard` (via `ServicesGrid`) → Homepage, /services overview

**Section variants needed:**
- `<PageHero variant="standard" />` — light grey background, left-aligned, 300–400px height — for most inner pages
- `<PageHero variant="emergency" />` — dark (#111827) background, center-aligned, large phone CTA — for /services/emergency only
- `<ContactBlock />` — full ContactForm + sidebar — used on Homepage AND /contact
- On Homepage (ContactBlock): two-column layout, within a section
- On /contact (ContactBlock): occupies the whole page content area with minimal surrounding content

**Page-specific sections (not shared):**
- `Hero.tsx` — Homepage only. Full viewport height, background image.
- `TrustBar.tsx` — Homepage only (full 4-stat version).
- `ServicesGrid.tsx` — Homepage (5 service cards) + /services overview (5 service cards, slightly different layout).
- `WhyUs.tsx` — Homepage only.
- `ReviewStrip.tsx` (3 cards) — Homepage only.
- `ReviewsGrid.tsx` (8–12 cards) — /reviews only.
- `CityBlocks.tsx` — /service-areas only.
- `ServiceDetail.tsx` — Dynamic service pages only.

---

## 12. Props vs Config/Data Decisions

**Sourced from `data/site.ts` (siteConfig):**
- Business name, phone (formatted + href), address, hours, Google rating, review count, founded year
- Used in: Header, Footer, MobileBottomBar, TrustBar, Hero, CTABand, ContactBlock, JSON-LD schema, sitemap.ts

**Sourced from `data/services.ts`:**
- Service slug, name, descriptions, features, FAQs, related services, meta title, meta description
- Used in: ServicesGrid (card content), /services overview, `generateStaticParams`, ServiceDetail template, sitemap.ts

**Sourced from `data/reviews.ts`:**
- Review text, author, service type, rating
- Used in: ReviewStrip (homepage — first 3), ReviewsGrid (/reviews — all)

**Sourced from `data/service-areas.ts`:**
- City name, intro copy, local context copy
- Used in: ServiceAreas section (homepage), CityBlocks (/service-areas)

**Sourced from `data/pages/[page].ts`:**
- Page-specific content that doesn't fit in a shared data file: Hero headline, About page narrative, Thank You confirmation copy

**Hardcoded in components:**
- Animation durations (400ms, 200ms, 250ms)
- Aria labels on icon-only buttons
- Breakpoint behavior constants (e.g., `MobileBottomBar` only renders via CSS `md:hidden` not conditional rendering)
- lucide-react icon size values

**Passed as props:**
- Section content objects from page data files
- `variant` prop for PageHero, CTABand, Button
- `id` prop for SectionWrapper (anchor links)

---

## 13. Tailwind Configuration Notes

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': 'var(--color-brand-red)',
        'brand-red-hover': 'var(--color-brand-red-hover)',
        'surface-dark': 'var(--color-surface-dark)',
        'surface-dark-alt': 'var(--color-surface-dark-alt)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'accent-yellow': 'var(--color-accent-yellow)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-inverse': 'var(--color-text-inverse)',
        'border-default': 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'btn': '6px',
        'card': '8px',
        'input': '6px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.12)',
        'header': '0 1px 4px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}

export default config
```

**CSS custom properties in `app/globals.css`:**
```css
:root {
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
  --color-border: #E5E7EB;
  --color-success: #16A34A;
  --color-error: #DC2626;
  --font-inter: 'Inter', system-ui, sans-serif;
}
```

---

## 14. Responsive Implementation Notes

**Breakpoints for this project:**
- Mobile: `<768px` (base Tailwind classes — `sm:` is 640px, treat 768px as `md:` boundary)
- Tablet: `768px–1023px` (`md:` prefix)
- Desktop: `1024px+` (`lg:` prefix)
- Wide: `1280px+` (`xl:` — for max-width constraints)

**Layout-specific responsive behavior:**

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | Logo + hamburger only; no phone/nav | Logo + hamburger | Logo + nav links + phone + CTA button |
| MobileBottomBar | Visible (`flex`) | Hidden (`md:hidden`) | Hidden |
| Hero | Dark gradient bg; stacked content; full-width CTA button | Same as mobile | Background image + overlay; max-width content |
| TrustBar | 2×2 grid (`grid-cols-2`) | 4 columns (`sm:grid-cols-4`) | 4 columns |
| ServicesGrid | 2 columns (`grid-cols-2`) | 2–3 columns | 3 columns (`lg:grid-cols-3`) |
| WhyUs | 2×2 grid (`grid-cols-2`) | 2×2 | 4 columns (`lg:grid-cols-4`) |
| ReviewStrip | Single column, stacked | 2 columns | 3 columns |
| ContactBlock | Stacked (form → sidebar) | Stacked | 2-column (7/5 split) |
| ServiceDetail ServiceBody | Single column (text → image) | Single column | 2-column (text 60%, image 40%) |
| CityBlocks | Single column | 2-column | 2-column |
| ReviewsGrid | Single column | 2-column | 3-column |

**Mobile page padding:** All pages require `pb-16` (64px) to account for MobileBottomBar on mobile. Apply via root layout body or a wrapper div:
```tsx
// app/layout.tsx
<body className="... pb-16 md:pb-0">
```

---

## 15. Animation Implementation Plan

**Motion level:** Subtle

**Implementation method:** Custom `useScrollReveal` hook using Intersection Observer API. No Framer Motion (adds bundle weight; Tailwind CSS transitions are sufficient for this project's animation requirements).

**What animates:**

| Element | Animation | Implementation |
|---|---|---|
| Section content on scroll | `opacity: 0→1` + `translateY: 12px→0`, 400ms ease-out | `ScrollReveal` client component with `useEffect` + `IntersectionObserver` |
| Card grid stagger | 0ms / 75ms / 150ms delay per card | `ScrollReveal` `delay` prop on each card |
| Button hover | `background-color` change | Tailwind `transition-colors duration-200` |
| Card hover | `box-shadow` lift + `translateY(-2px)` | Tailwind `transition-all duration-200` |
| Mobile nav drawer | `translateX(320px→0)`, 250ms ease-out | Tailwind `transition-transform duration-250` + conditional class |
| FAQ accordion open/close | `max-height` expand/collapse, 250ms | CSS `max-height` transition (avoid `height: auto`) |
| RadioCard selection | `border-color` + `background`, 150ms | Tailwind `transition-all duration-150` |
| Header scroll shadow | `box-shadow` on/off | CSS class added via scroll event listener in Header |

**What does NOT animate:**
- Phone numbers and CTA buttons — must be immediately visible and stable
- TrustBar stats — render immediately (no fade-in, already in a high-attention zone)
- OfferBanner — static
- MobileBottomBar — static (never animates in/out)
- Forms — no transition on field focus (just border color change)

**ScrollReveal component pattern:**
```tsx
// components/ui/ScrollReveal.tsx
'use client'
export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  // useRef + IntersectionObserver
  // adds 'opacity-100 translate-y-0' class when intersecting
  // initial: 'opacity-0 translate-y-3'
  // transition: 'transition-all duration-400 ease-out'
  // delay via inline style
}
```

**Reduced motion:** In `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 16. SEO and Metadata Plan

**Global metadata base in `app/layout.tsx`:**
```ts
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mrrootermarkham.ca'),
  title: { template: '%s | Mr. Rooter Plumbing of Markham', default: 'Mr. Rooter Plumbing of Markham' },
  description: 'Licensed plumbers in Markham, Ontario since 1995. No overtime charges, flat-rate pricing, 24/7 emergency service.',
  openGraph: {
    siteName: 'Mr. Rooter Plumbing of Markham',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630 }],
  },
}
```

**Per-page metadata:**

| Page | Title | Meta Description |
|---|---|---|
| Homepage | "Plumber in Markham, ON — 24/7, No Overtime \| Mr. Rooter" | "Trusted Markham plumber since 1995. Flat-rate pricing, no overtime charges, 24/7 emergency service. Call (905) 472-9100." |
| /services | "Plumbing Services in Markham, ON \| Mr. Rooter" | "Drain cleaning, sewer repair, water heaters, backwater valves & emergency plumbing in Markham. Licensed and insured." |
| /services/drain-cleaning | "Drain Cleaning in Markham, ON \| Mr. Rooter Plumbing" | "Expert drain cleaning in Markham. Same-day service, no overtime charges. Call (905) 472-9100 — 24/7." |
| /services/sewer-line | "Sewer Line Repair in Markham, ON \| Mr. Rooter Plumbing" | "Sewer line repair and replacement in Markham. Flat-rate pricing, Done Right Promise®. Call (905) 472-9100." |
| /services/water-heater | "Water Heater Repair & Installation in Markham \| Mr. Rooter" | "Water heater repair and installation in Markham. Tankless options available. No overtime charges. 24/7." |
| /services/emergency | "Emergency Plumber in Markham — 24/7 \| Mr. Rooter" | "Emergency plumber in Markham available 24/7. Same rate any hour — no overtime charges. Call (905) 472-9100 now." |
| /services/backwater-valve | "Backwater Valve & Sump Pump in Markham \| Mr. Rooter" | "Backwater valve and sump pump installation in Markham. Protect your home from flooding. Free estimate." |
| /service-areas | "Plumber Serving Markham, Stouffville, Unionville & York Region" | "Mr. Rooter Plumbing serves Markham, Stouffville, Unionville, Richmond Hill and all of York Region since 1995." |
| /about | "About Mr. Rooter Plumbing of Markham — Local Since 1995" | "Locally-owned plumbing since 1995. Done Right Promise®, licensed and insured. Your Markham neighbour for 30+ years." |
| /reviews | "Customer Reviews — Mr. Rooter Plumbing of Markham" | "See what Markham homeowners say about Mr. Rooter Plumbing. Real reviews, real results." |
| /contact | "Contact Mr. Rooter Plumbing of Markham — Request Service" | "Request plumbing service in Markham. Contact us online or call (905) 472-9100 — 24/7 emergency line." |
| /thank-you | "Request Received \| Mr. Rooter Plumbing of Markham" | N/A (noindex) |
| /privacy-policy | "Privacy Policy \| Mr. Rooter Plumbing of Markham" | N/A (noindex) |

**LocalBusiness JSON-LD schema (in `app/layout.tsx` or root page):**
```ts
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: siteConfig.name,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: 'Markham',
    addressRegion: 'ON',
    postalCode: siteConfig.address.postalCode,
    addressCountry: 'CA',
  },
  areaServed: ['Markham', 'Stouffville', 'Unionville', 'Richmond Hill', 'York Region'],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: [...], opens: '00:00', closes: '23:59' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: siteConfig.reviewCount },
  priceRange: '$$',
  url: siteConfig.siteUrl,
}
```

**`app/sitemap.ts`:**
```ts
import { services } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  const staticRoutes = ['', '/services', '/service-areas', '/about', '/reviews', '/contact'].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.7,
  }))
  
  return [...staticRoutes, ...serviceRoutes]
}
```

**`app/robots.ts`:**
```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/thank-you', '/api/'] },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
```

---

## 17. Integration Requirements

**Contact form:**
- Library: `react-hook-form` (form state + validation UI) + Zod (schema validation) + Resend (email delivery)
- Fields: `name` (string), `phone` (string), `email` (email), `serviceType` (enum: 5 service slugs + 'other'), `urgency` (enum: 'emergency' | 'scheduled'), `message` (string, optional)
- Zod schema in `lib/schema.ts`:
  ```ts
  export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name required'),
    phone: z.string().min(10, 'Valid phone number required'),
    email: z.string().email('Valid email required'),
    serviceType: z.enum(['drain-cleaning', 'sewer-line', 'water-heater', 'emergency', 'backwater-valve', 'other']),
    urgency: z.enum(['emergency', 'scheduled']),
    message: z.string().optional(),
    _honeypot: z.string().max(0).optional(), // spam trap
  })
  ```
- Server action in `lib/actions.ts`:
  ```ts
  'use server'
  export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
    // 1. Validate with Zod
    // 2. Check honeypot
    // 3. Send via Resend to siteConfig.email
    // 4. Return { success: true } or { success: false, error: string }
  }
  ```
- Client behavior: on success → `router.push('/thank-you')`
- Environment variables: `RESEND_API_KEY`, `RESEND_TO_EMAIL` (business inbox), `NEXT_PUBLIC_SITE_URL`

**next/font/google (Inter):**
- Load in `app/layout.tsx` via `next/font/google`
- `variable: '--font-inter'` → used in Tailwind config

**next/image:**
- All images use `<Image>` from `next/image`
- `next.config.ts`: configure `images.remotePatterns` if any external image domains are used
- Hero background: use CSS `background-image` with a static image OR `<Image>` with `fill` + `object-cover`

**Google Analytics 4 (optional, not required for launch):**
- Gate via `NEXT_PUBLIC_GA_ID` env var
- Implement in `lib/analytics.ts` as a simple script component
- Add to `app/layout.tsx` conditionally

---

## 18. Accessibility Requirements

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` on all pages. One `<h1>` per page.
- **Heading hierarchy:** H1 → H2 → H3, never skipped. Service detail pages: H1 = service name, H2 = section headings within page.
- **Skip link:** `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>` — first element in `<body>`.
- **Focus indicator:** `outline: 2px solid var(--color-brand-red); outline-offset: 2px` on `:focus-visible` for all interactive elements. Never `outline: none` without replacement.
- **MobileNav:** Focus trap while open using `useEffect` to trap `Tab` key within drawer. `aria-expanded={isOpen}` on hamburger button. `aria-label="Close navigation"` on close button.
- **Form labels:** Every `<input>`, `<select>`, `<textarea>` has a `<label htmlFor="...">` — never use placeholder as sole label.
- **Alt text:** All `<Image>` components have descriptive `alt` props. Decorative icons: `aria-hidden="true"`. Buttons with icon-only content: `aria-label="..."`.
- **Tap targets:** Minimum `44×44px` — all buttons, nav links, accordion triggers.
- **Phone links:** `<a href="tel:9054729100">` — screen readers announce telephone links correctly.
- **Color contrast:** All text/background combinations from design system are AA compliant (verified in design system stage). Verify white-on-red (#C41515) at build time with contrast checker.
- **Reduced motion:** Global override in `globals.css` (Section 15).

---

## 19. Page Implementation Order

1. **Homepage** — establishes all shared component patterns; highest conversion priority
2. **/services/emergency** — second-highest conversion priority; tests the emergency variant of PageHero
3. **/contact** — contact form implementation; Resend integration tested here
4. **/services/drain-cleaning** — first service page; establishes ServiceDetailTemplate
5. **Remaining service pages** (sewer-line, water-heater, backwater-valve) — all use the same template, fast to complete after drain-cleaning
6. **/services** overview — simple routing grid; reuses ServiceCard
7. **/about** — trust/credibility page
8. **/service-areas** — CityBlocks component
9. **/reviews** — ReviewsGrid; depends on confirmed review data
10. **/thank-you** — post-form confirmation
11. **/privacy-policy** — static text content
12. **not-found.tsx** — minimal 404 page
13. **sitemap.ts + robots.ts** — SEO infrastructure

---

## 20. Phased Build Plan

| Phase | What gets built | Success gate |
|---|---|---|
| 1 — Foundation | `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `app/globals.css` (tokens), `lib/utils.ts` (`cn()`), `data/site.ts` | `npm run dev` runs, CSS variables load, no errors |
| 2 — UI Primitives | `Button.tsx`, `SectionWrapper.tsx`, `ScrollReveal.tsx`, `PhoneLink.tsx`, `StarRating.tsx`, `ServiceCard.tsx`, `ReviewCard.tsx`, `FAQAccordion.tsx`, `RadioCard.tsx` | All primitives render in isolation |
| 3 — Layout Shell | `Header.tsx`, `Footer.tsx`, `MobileNav.tsx`, `MobileBottomBar.tsx`, `OfferBanner.tsx`, `app/layout.tsx`, `data/navigation.ts` | Site chrome renders on all pages; mobile nav opens/closes; MobileBottomBar visible on mobile |
| 4 — Data Files | `data/services.ts`, `data/reviews.ts`, `data/service-areas.ts`, `data/pages/home.ts`, `data/pages/about.ts`, `lib/schema.ts` | All data files compile with no TypeScript errors |
| 5 — Contact Form | `lib/actions.ts`, `ContactBlock.tsx`, `app/contact/page.tsx`, `app/thank-you/page.tsx`, `.env.local.example` | Form submits → email received → redirect to /thank-you |
| 6 — Homepage | All homepage sections assembled, `app/page.tsx` | Homepage renders all 9 sections; phone CTA above fold on mobile; TrustBar visible; no TypeScript errors |
| 7 — Service Pages | `ServiceDetail.tsx`, `PageHero.tsx`, `FAQSection.tsx`, `app/services/[slug]/page.tsx` with `generateStaticParams`, `app/services/page.tsx` | All 5 service pages render; dynamic routes work; `/services/emergency` uses emergency variant |
| 8 — Remaining Pages | `/about`, `/service-areas`, `/reviews`, `/privacy-policy` | All pages render with correct content and metadata |
| 9 — SEO & Schema | `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, JSON-LD schema in layout, per-page metadata exports | Sitemap returns all 13 URLs; JSON-LD validates via Google Rich Results Test |
| 10 — Polish | Hero image, service images, OG image, scroll animations, mobile review pass | Lighthouse ≥ 90 mobile; all breakpoints correct; no layout issues |
| 11 — QA + Launch | Full QA checklist pass | All items pass; contact form tested on live domain |

---

## 21. QA and Acceptance Criteria

**Functional:**
- [ ] Contact form submits successfully and delivers email to business inbox
- [ ] Form redirect to /thank-you on success
- [ ] Form shows inline validation errors on required fields
- [ ] Emergency urgency selection shows inline phone number prompt
- [ ] Honeypot field present but not visible to users
- [ ] All phone numbers are `tel:` links and trigger phone dialer on mobile
- [ ] MobileBottomBar [Call Now] triggers phone dialer on mobile
- [ ] Mobile nav drawer opens and closes; focus trapped while open
- [ ] FAQ accordion opens/closes; only one answer visible at a time (or all independent — design choice, document it)
- [ ] Dynamic service routes render all 5 service pages
- [ ] 404 page renders for unknown URLs

**Visual:**
- [ ] Site does not look like a franchise template or generic contractor website
- [ ] Brand red (#C41515) used only on CTA buttons, CTABand, emergency hero — not as section background elsewhere
- [ ] Phone number visible without scrolling on mobile homepage (above fold)
- [ ] MobileBottomBar visible on all mobile pages (≤768px), hidden on desktop
- [ ] TrustBar appears immediately below hero with no visible gap
- [ ] No layout overflow at any tested viewport width (375px, 768px, 1024px, 1280px)
- [ ] Typography scale correct across all breakpoints
- [ ] Focus indicators visible on all interactive elements

**SEO:**
- [ ] `<h1>` present on every page (one per page, not zero or two)
- [ ] Meta title and description present on all pages
- [ ] `<a rel="canonical">` or Next.js canonical set correctly
- [ ] JSON-LD LocalBusiness schema validates (Google Rich Results Test)
- [ ] sitemap.xml returns all 13 page URLs
- [ ] robots.txt correct (allow all, disallow /thank-you and /api/)
- [ ] All images have `alt` text

**Performance:**
- [ ] Lighthouse performance ≥ 90 on mobile
- [ ] Largest Contentful Paint (LCP) ≤ 2.5s on mobile
- [ ] No layout shift from un-sized images (all `<Image>` have `width`/`height` or `fill` with explicit container)
- [ ] Hero background image preloaded (`<link rel="preload">` or `priority` prop on hero Image)
- [ ] Inter font loaded via `next/font/google` (no FOUT)

**Accessibility:**
- [ ] Keyboard navigation works for all interactive elements
- [ ] Skip link renders on focus
- [ ] All form inputs have visible labels
- [ ] MobileNav focus trap works correctly
- [ ] No console errors in axe/accessibility audit

---

## 22. Launch Readiness Checklist

**Pre-launch:**
- [ ] Logo file confirmed and implemented (or text fallback documented as intentional)
- [ ] Hero background image finalized (not placeholder)
- [ ] All 5 service page images placed in `/public/images/services/`
- [ ] OG image (`og-default.jpg`, 1200×630) created and placed
- [ ] Google review count verified and `siteConfig.reviewCount` updated with real number
- [ ] Business hours, address, and phone in `data/site.ts` verified with client
- [ ] Done Right Promise® copy verified with client / Neighbourly documentation
- [ ] Backwater valve city rebate info verified
- [ ] `RESEND_API_KEY` and `RESEND_TO_EMAIL` environment variables set in production
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain
- [ ] Domain configured and DNS pointing to hosting
- [ ] `npm run build` passes with no TypeScript errors or build warnings
- [ ] Google Business Profile listing URL updated with new site URL

**Post-launch monitoring:**
- [ ] Contact form tested on live domain (submit → email received)
- [ ] All page URLs tested in browser (no 404s)
- [ ] Mobile layout tested on real device (iOS Safari + Android Chrome)
- [ ] Google Search Console: site submitted, sitemap submitted

---

## 23. Assumptions Made

- `[ASSUMPTION]` **Topic:** No CMS or database required. **Why:** Planning PRD explicitly excluded CMS. Agency maintains data files and redeploys. **Impact:** Client cannot self-edit. If client needs self-editing, a CMS (Sanity, Contentlayer, or MDX) must be added — significant scope increase.

- `[ASSUMPTION]` **Topic:** MobileBottomBar rendered server-side, hidden via CSS on desktop. **Why:** Simpler than conditional rendering; CSS `md:hidden` is sufficient. **Impact:** The bar's HTML is always in the DOM. If this has SEO or accessibility concerns, switch to conditional rendering with a `useWindowSize` hook.

- `[ASSUMPTION]` **Topic:** Resend used for transactional email. **Why:** Matches existing project pattern (la-grotta-on-main). **Impact:** Requires RESEND_API_KEY env var. If client has a different email provider, update `lib/actions.ts` accordingly.

- `[ASSUMPTION]` **Topic:** No Google Analytics for launch. **Why:** Not required; adds complexity; client hasn't confirmed GA ID. **Impact:** Gated via `NEXT_PUBLIC_GA_ID` env var — add the ID to enable analytics post-launch without code changes.

- `[ASSUMPTION]` **Topic:** Hero uses CSS background-image or `<Image fill>` pattern. **Why:** Full-bleed with overlay requires a background approach. **Impact:** Next.js `<Image>` with `fill` prop and `object-cover` is the recommended approach — uses the image optimization pipeline. Fallback: CSS `background-image` if Next.js Image behavior is problematic with the overlay.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Production domain name | Not confirmed | Client | Before Phase 9 (sitemap/robots) |
| Logo file | Not provided by client | Client | Before Phase 3 (Header component) |
| Hero image | Not yet sourced | Agency | Before Phase 10 (polish) |
| Service page images (5) | Not yet sourced | Agency | Before Phase 10 (polish) |
| Google review count | Not verified | Agency via GBP | Before Phase 8 (TrustBar copy) |
| Resend to-email address | Not confirmed | Client | Before Phase 5 (contact form testing) |

---

## 25. Blockers and Risks

**Blockers (before build starts):**
- None — build can begin with Phase 1 (Foundation) immediately.

**Risks:**
- **Hero image quality:** The highest-risk visual element. Phase 10 (polish) is blocked until a hero image that passes the anti-stock-cliché test is sourced.
- **Review count placeholder:** `siteConfig.reviewCount` will be a placeholder number during build. Must be updated before launch — displaying a false count is a trust failure.
- **Resend API rate limits:** Resend free tier has sending limits. Confirm plan before launch if expected form volume is high.
- **White-on-red contrast:** `#FFFFFF` on `#C41515` must be verified with a contrast checker during Phase 2 (Button component). If it fails, adjust red to `#B51212` or `#A01010`.

---

## 26. Handoff to Coding Stage

**What to build first:** Phase 1 — Foundation. Start with `tailwind.config.ts`, `app/globals.css` (CSS tokens), and `lib/utils.ts` (`cn()`). Run `npm run dev` and verify tokens are accessible before building any components.

**What can be reused across pages:**
- `SectionWrapper`, `Button`, `PhoneLink`, `ScrollReveal` — used in almost every section
- `CTABand` — Homepage, About, Service Areas, Reviews
- `PageHero` — all inner pages
- `ServiceCard` — Homepage ServicesGrid, /services overview
- `ReviewCard` — Homepage ReviewStrip, /reviews ReviewsGrid
- Header, Footer, MobileNav, MobileBottomBar, OfferBanner — all pages via `app/layout.tsx`

**What must remain page-specific:**
- `Hero.tsx` — Homepage only. Unique full-height structure.
- `ServiceDetail.tsx` — service detail pages only; receives a full service object as props
- `ReviewsGrid.tsx` — /reviews only (uses all reviews; ReviewStrip on homepage uses first 3)
- `CityBlocks.tsx` — /service-areas only

**Data/content structure to respect:**
- All business constants from `data/site.ts` — NEVER hardcode phone number, address, hours in components
- All service content from `data/services.ts` — drives both `/services/[slug]` pages AND ServicesGrid on homepage
- All reviews from `data/reviews.ts` — ReviewStrip on homepage uses first 3; ReviewsGrid uses all

**Design/brand/wireframe decisions that must not change:**
- Phone number must be a `tel:` link at every rendering — this is a brand requirement from `05-brand-direction`
- "No Overtime Charges" must appear above the fold on mobile homepage (in Hero micro-badges) — cannot be scroll-only
- TrustBar must be immediately below Hero with no margin gap — structural requirement from `04-wireframe`
- Red (#C41515) used only as defined in `06-design-system` — no red section backgrounds except CTABand
- MobileBottomBar must have `md:hidden` — never visible on desktop
- Form must be at top of /contact page — no hero above the form

**Technical flexibility that remains:**
- Exact Tailwind class values within defined ranges (e.g., `py-20` vs `py-24` per judgment)
- Whether `useScrollReveal` uses a custom hook or a small utility — the behavior is what matters
- Internal component markup structure (how cards are structured in HTML) as long as visual output matches design system
- FAQ accordion: single-open vs. multi-open — implement single-open (one item open at a time) as default
