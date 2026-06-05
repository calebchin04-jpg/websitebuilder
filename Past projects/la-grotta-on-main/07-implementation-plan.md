# IMPLEMENTATION PLANNING PRD
**Project:** La Grotta On Main
**Build type:** Redesign
**Date:** 2026-04-19
**Stage:** 07-implementation-planning — output complete
**Stack:** Next.js 15 (App Router) + React + Tailwind CSS + TypeScript
**Prior-stage quality:** Strong

---

## 1. Project Overview

La Grotta On Main is a 7-page static restaurant website (Next.js 15 App Router, Tailwind CSS, TypeScript) with no dynamic routes, no CMS, and one server-side integration: a Private Functions inquiry form handled via Resend. The site is photography-led with a gallery tab-filter + lightbox, a sticky header with mobile drawer nav, a fixed tap-to-call bottom bar, and a FAQ accordion. The single most important implementation consideration is mobile conversion: the phone number must be tap-callable and visible without scrolling on every page, on every device.

---

## 2. Implementation Planning Summary

**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS v3 + TypeScript
**Total pages:** 7
**Dynamic routes:** None — all routes are static flat pages
**Integrations active:** Resend (inquiry form), GA4 (analytics), Google Maps embed (Contact page), `next/font` (Playfair Display + DM Sans)
**CMS:** Not required — all content in TypeScript data files
**Animation level:** Between subtle and moderate (scroll-triggered fades, hover transitions, hero parallax, accordion/lightbox transitions)
**Build complexity:** Medium — primarily static, with 4 interactive client components (MobileNav, GalleryGrid, FAQAccordion, InquiryForm)

---

## 3. Critique of Prior-Stage Materials

**Overall prior-stage quality:** Strong

**Issues identified:**

> **[GOLD HEX VALUE]** Problem: Exact gold hex not confirmed — design system gives direction (warm amber, ~#C4973B–#D4A843 range) but not a locked value. Implementation impact: Tailwind config and CSS custom properties cannot be finalized until the gold value is confirmed and contrast-tested. Resolution: Build proceeds with a placeholder gold value (`#C9A052`) that matches the design system direction — must be replaced with the value extracted from the actual La Grotta logo before launch.

> **[PHOTOGRAPHY ASSETS]** Problem: Photos not yet sourced/curated. Implementation impact: Hero, dish cards, gallery, story section, and Private Functions hero all require real photos. Build proceeds with placeholder images in `/public/images/` — real photos slot in at Phase 4. Resolution: Placeholder image slots are defined in the file structure; all `<Image>` components use typed `src` props from data files so swapping is a data-layer change only.

---

## 4. Send-Back

*Not triggered. Prior-stage materials are technically complete.*

---

## 5. Recommended Stack

**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS v3 + TypeScript

**Why this stack for this project:**
- 7 fully static pages with no user-specific content and no database — static generation at build time (`generateStaticParams` not needed; all pages are fixed routes). Zero server runtime cost.
- Next.js `<Image>` component handles the photography-heavy layout's lazy loading, responsive `srcSet`, and WebP conversion automatically — critical for the gallery and hero performance targets.
- Tailwind CSS maps directly to the design system's 8px spacing scale and CSS custom property color system with minimal configuration overhead.

**Alternate if needed:** Astro with React islands — acceptable substitute. The 4 interactive components (MobileNav, GalleryGrid, FAQAccordion, InquiryForm) become Astro islands with `client:load`. All Tailwind config is identical. No significant architectural change.

---

## 6. Technical Architecture

**Architecture type:** Static generation, server components by default, minimal client interactivity.

**Component layers:**
1. **Layout** (`components/layout/`) — server components: Header, Footer, MobileNavOverlay shell
2. **Sections** (`components/sections/`) — server components unless they contain state
3. **UI primitives** (`components/ui/`) — server or client as required
4. **Page-specific** — assembled in `app/[page]/page.tsx`, not in separate component files

**Server vs client component decisions:**

| Component | Type | Reason |
|---|---|---|
| Header | Server | No state — renders logo, nav links, CTA button |
| MobileNav | Client | Toggle open/close state + focus trap |
| MobileBottomBar | Server | Static phone number link — no state |
| Hero | Server | Static content + background image |
| TrustBar | Server | Static stat data |
| FamilyStory | Server | Static content |
| SignatureDishes | Server | Static data-driven cards |
| GalleryTeaser | Server | Static 6-image grid |
| GalleryGrid | Client | Tab filter state + lightbox open/close state |
| ReviewStrip | Server | Static review data |
| PrivateFunctionsCallout | Server | Static content |
| CTABand | Server | Static CTA — phone link |
| FAQAccordion | Client | Open/close state per item |
| InquiryForm | Client | Form state + validation + server action call |
| MenuContent | Server | Static menu data |
| ContactInfo | Server | Static business info |
| GoogleMap | Client | iframe embed — needs `use client` for hydration |
| Footer | Server | Static links + contact info |
| ScrollReveal | Client | IntersectionObserver wrapper |

**Data flow:** `app/[page]/page.tsx` imports from `data/` → passes typed props to section components. No section imports data directly. All business constants flow through `data/site.ts`.

---

## 7. Routing and Page Architecture

**All pages and their routes:**

| Page | URL | App Router file | Dynamic? |
|---|---|---|---|
| Homepage | `/` | `app/page.tsx` | No |
| Menu | `/menu` | `app/menu/page.tsx` | No |
| Gallery | `/gallery` | `app/gallery/page.tsx` | No |
| Private Functions | `/private-functions` | `app/private-functions/page.tsx` | No |
| Contact | `/contact` | `app/contact/page.tsx` | No |
| Thank You | `/thank-you` | `app/thank-you/page.tsx` | No |
| Privacy Policy | `/privacy-policy` | `app/privacy-policy/page.tsx` | No |
| 404 | — | `app/not-found.tsx` | No |

**Static generation:** All pages use default static generation. No `generateStaticParams` needed. No `revalidate`. Build produces fully static HTML for all 7 pages.

---

## 8. Pseudo-Project Folder/File Structure

```
la-grotta-on-main/
├── app/
│   ├── layout.tsx                        # Root layout: Header, Footer, MobileNav, BottomBar, fonts
│   ├── page.tsx                          # Homepage
│   ├── globals.css                       # Tailwind directives + CSS custom properties
│   ├── menu/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── private-functions/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── thank-you/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts                        # XML sitemap generation
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                    # Sticky header: logo + nav + CTA button
│   │   ├── MobileNav.tsx                 # Client: hamburger drawer + overlay
│   │   ├── MobileBottomBar.tsx           # Fixed tap-to-call bar (hidden on /contact)
│   │   └── Footer.tsx                    # Links, address, hours, social, legal
│   │
│   ├── sections/
│   │   ├── Hero.tsx                      # Full-viewport hero with overlay + CTAs
│   │   ├── TrustBar.tsx                  # 3-stat proof strip
│   │   ├── FamilyStory.tsx               # 2-col story + image
│   │   ├── SignatureDishes.tsx           # 3-col dish card grid
│   │   ├── GalleryTeaser.tsx             # 6-image grid + "View All" link (server)
│   │   ├── GalleryGrid.tsx               # Client: tab filter + full grid + lightbox
│   │   ├── ReviewStrip.tsx               # Google rating + 2-3 review cards
│   │   ├── PrivateFunctionsCallout.tsx   # Secondary audience pointer
│   │   ├── CTABand.tsx                   # Full-width CTA section (variant prop)
│   │   ├── FAQAccordion.tsx              # Client: expandable FAQ items
│   │   ├── InquiryForm.tsx               # Client: form + validation + server action
│   │   ├── MenuContent.tsx               # Menu categories + items
│   │   ├── ContactBlock.tsx              # Phone (large) + hours + address
│   │   └── GoogleMap.tsx                 # Client: Google Maps iframe embed
│   │
│   └── ui/
│       ├── Button.tsx                    # primary / secondary / ghost variants + sizes
│       ├── DishCard.tsx                  # Image + name + description
│       ├── ReviewCard.tsx                # Stars + quote + attribution
│       ├── SectionWrapper.tsx            # Container + vertical padding + bg variant
│       ├── ScrollReveal.tsx              # Client: IntersectionObserver fade-up wrapper
│       └── StarRating.tsx                # SVG gold stars (accepts rating: number)
│
├── data/
│   ├── site.ts                           # Business constants: name, phone, address, email, hours, socials
│   ├── navigation.ts                     # Main nav items + footer link columns
│   ├── dishes.ts                         # Signature dish cards (name, description, image)
│   ├── gallery.ts                        # Gallery images by category (Food/Interior/Patio/Events)
│   ├── menu.ts                           # Full menu categories + items
│   ├── reviews.ts                        # Review cards (quote, author, source, rating)
│   ├── faq.ts                            # FAQ items for Private Functions page
│   └── pages/
│       ├── home.ts                       # Hero content, story text, CTA band text
│       ├── menu.ts                       # Page header content
│       ├── gallery.ts                    # Page header content
│       ├── private-functions.ts          # Hero content, offer details
│       ├── contact.ts                    # Headline, reassurance text
│       └── thank-you.ts                  # Confirmation message content
│
├── lib/
│   ├── actions.ts                        # Server action: submitInquiryForm (Resend)
│   ├── utils.ts                          # cn() classname utility + helpers
│   └── analytics.ts                      # GA4 event helpers (if needed)
│
├── public/
│   └── images/
│       ├── hero/                         # hero-main.jpg, hero-private.jpg
│       ├── story/                        # story-interior.jpg
│       ├── dishes/                       # dish-rack-of-lamb.jpg, dish-seabass.jpg, etc.
│       ├── gallery/
│       │   ├── food/
│       │   ├── interior/
│       │   ├── patio/
│       │   └── events/
│       ├── logo/                         # logo.svg (or .png), logo-white.svg
│       └── og/                           # og-default.jpg (1200×630)
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 9. Naming Conventions

- **Component files:** PascalCase (`Hero.tsx`, `DishCard.tsx`, `MobileNav.tsx`)
- **Data files:** camelCase (`site.ts`, `dishes.ts`, `faq.ts`)
- **Page files:** `page.tsx` in route folders per App Router convention
- **CSS classes:** Tailwind utilities only — no BEM, no custom class names for components
- **TypeScript types:** PascalCase with `type` keyword (`type Dish`, `type ReviewItem`, `type FAQItem`, `type GalleryImage`)
- **Exported constants:** camelCase (`export const siteConfig`, `export const dishes`, `export const galleryImages`)
- **Image files:** lowercase, hyphens (`hero-main.jpg`, `dish-rack-of-lamb.jpg`, `story-interior.jpg`)
- **Route folders:** kebab-case matching URL slugs (`private-functions/`, `thank-you/`, `privacy-policy/`)

---

## 10. Major File Responsibilities

| File | Responsible for |
|---|---|
| `app/layout.tsx` | Root HTML shell, `next/font` loading for Playfair Display + DM Sans, Header, Footer, MobileNav, MobileBottomBar, GA4 script, LocalBusiness schema injection |
| `app/globals.css` | Tailwind directives (`@tailwind base/components/utilities`), all CSS custom properties (`--color-*`, `--font-*`), global focus indicator, `prefers-reduced-motion` overrides, mobile bottom bar body padding |
| `tailwind.config.ts` | Design system token mapping: color aliases, font families, extended type scale, custom shadows, spacing additions |
| `data/site.ts` | Single source of truth for: restaurant name, phone number, address, email, hours, Instagram handle, Facebook URL — imported by Header, Footer, ContactBlock, schema |
| `data/navigation.ts` | Main nav link array (label + href) and footer link columns — imported by Header and Footer |
| `lib/actions.ts` | `submitInquiryForm` server action: validates input, calls Resend API, returns success/error — imported only by `InquiryForm.tsx` |
| `lib/utils.ts` | `cn()` utility (clsx + tailwind-merge), any shared formatting helpers |
| `components/ui/SectionWrapper.tsx` | Consistent section container: `max-width`, horizontal padding, vertical padding scale, `bg` variant prop (surface-1, surface-2, dark) — used by every section |
| `components/ui/Button.tsx` | All button variants (primary/secondary/ghost), sizes (lg/md/sm), renders as `<button>` or `<a>` based on `href` prop |
| `components/ui/ScrollReveal.tsx` | IntersectionObserver fade-up wrapper, respects `prefers-reduced-motion`, accepts `delay` prop for staggered children |

---

## 11. Reusable Component Architecture

**Globally reusable sections (used on 2+ pages):**
- `CTABand` → used on: Homepage (final), Menu (bottom), Gallery (bottom), Private Functions (after form)
- `SectionWrapper` → used on: all pages, all sections
- `ScrollReveal` → used on: all animated sections across all pages
- `Button` → used on: Header, Hero, CTABand, InquiryForm, GalleryTeaser, PrivateFunctionsCallout

**Section variants needed:**
- `<Hero variant="home" />` — full viewport height, two CTAs, positioning line, hero overlay
- `<Hero variant="inner" />` — 50–60vh, single CTA, page title, used on Private Functions
- `<CTABand variant="standard" />` — full headline + gold CTA button + reassurance line
- `<CTABand variant="slim" />` — phone number only, no headline (top of Menu page)

**Page-specific components (not shared):**
- `GalleryGrid` — only on `/gallery` (the full-page grid with tabs + lightbox)
- `GalleryTeaser` — only on Homepage (6-image static teaser)
- `MenuContent` — only on `/menu`
- `FAQAccordion` — only on `/private-functions`
- `InquiryForm` — only on `/private-functions`
- `ContactBlock` — only on `/contact`
- `GoogleMap` — only on `/contact`

---

## 12. Props vs Config/Data Decisions

**Sourced from `data/site.ts`:** Restaurant name, phone number, address, email, hours, Instagram handle, Facebook URL — every component that displays this data imports from here. Phone number is never hardcoded in a component.

**Sourced from `data/dishes.ts`:** Signature dish cards on Homepage. Type: `type Dish = { name: string; description: string; image: string }`.

**Sourced from `data/gallery.ts`:** Gallery images organized by category. Type: `type GalleryImage = { src: string; alt: string; category: 'food' | 'interior' | 'patio' | 'events' }`.

**Sourced from `data/menu.ts`:** Full menu categories and items. Type: `type MenuCategory = { name: string; items: MenuItem[] }`. Type: `type MenuItem = { name: string; description: string; price?: string }`.

**Sourced from `data/reviews.ts`:** Review cards. Type: `type ReviewItem = { quote: string; author: string; source: 'Google' | 'OpenTable'; rating: number }`.

**Sourced from `data/faq.ts`:** FAQ accordion items. Type: `type FAQItem = { question: string; answer: string }`.

**Sourced from `data/pages/*.ts`:** Hero headlines, body copy, CTA labels for each page — isolates content from component structure.

**Hardcoded in components:** Aria labels, animation durations, breakpoint behavior, icon sizes, structural HTML.

**Passed as props:** Section variants, content objects from page data files, `className` for layout overrides.

---

## 13. Tailwind Configuration

```typescript
// tailwind.config.ts — direction mapping from design system
theme: {
  extend: {
    colors: {
      'surface-1': 'var(--color-surface-1)',      // warm white
      'surface-2': 'var(--color-surface-2)',      // light warm gray
      'surface-dark': 'var(--color-surface-dark)',// deep near-black
      'gold': 'var(--color-gold)',                // warm amber accent
      'gold-hover': 'var(--color-gold-hover)',    // gold darkened 12-15%
      'text-primary': 'var(--color-text-primary)',// near-black
      'text-secondary': 'var(--color-text-secondary)',
      'text-inverse': 'var(--color-text-inverse)',// warm white (on dark)
      'border-default': 'var(--color-border)',    // light warm gray
    },
    fontFamily: {
      serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
    },
    boxShadow: {
      'card': '0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
      'card-hover': '0 4px 16px rgba(0,0,0,0.10)',
      'header': '0 1px 8px rgba(0,0,0,0.08)',
      'modal': '0 8px 40px rgba(0,0,0,0.20)',
    },
    borderRadius: {
      'btn': '5px',       // buttons
      'card': '9px',      // cards
      'input': '5px',     // form inputs
      'pill': '9999px',   // tabs only
    },
  }
}
```

**CSS custom properties in `globals.css`:**
```css
:root {
  --color-surface-1: #F9F6F1;        /* warm white — placeholder, confirm from brand */
  --color-surface-2: #F2EFE9;        /* light warm gray */
  --color-surface-dark: #141210;     /* deep near-black */
  --color-gold: #C9A052;             /* warm gold — PLACEHOLDER: extract from logo */
  --color-gold-hover: #B08A3E;       /* gold -13% */
  --color-text-primary: #1A1714;     /* near-black */
  --color-text-secondary: #6B6359;   /* medium-dark warm gray */
  --color-text-inverse: #F9F6F1;     /* warm white */
  --color-border: #E2DDD6;           /* light warm gray */
}
```

---

## 14. Responsive Implementation Notes

**Key breakpoints:**
- Mobile base: 375px–767px (Tailwind base classes)
- Tablet: 768px–1023px (`md:` prefix)
- Desktop: 1024px+ (`lg:` prefix)
- Wide: 1280px+ (`xl:` — max-width container cap)

**Layout-specific responsive behavior:**

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | Logo + Reserve button + Hamburger | Same | Full horizontal nav |
| MobileBottomBar | Fixed bottom, full-width | Fixed bottom, full-width | Hidden (`lg:hidden`) |
| Hero | 85–90vh, stacked content bottom-half | 90vh | 100vh, centered overlay |
| TrustBar | 2×2 grid | 4-item row | 4-item row with dividers |
| FamilyStory | Stacked: image then text | 2-col (image 40%, text 60%) | 2-col |
| SignatureDishes | 1-col cards | 2-col grid | 3-col grid |
| GalleryTeaser | 2×3 grid | 3×2 grid | 3×2 grid |
| GalleryGrid | 2-col uniform | 3-col | 3-col |
| ReviewStrip | 1-col stacked | 2-col | 3-col (badge + 2 cards) |
| MenuContent | 1-col, full-width | 1-col constrained | Max-width 720px centered |
| InquiryForm | Full-width | Max 560px centered | Max 560px centered |
| ContactBlock | Stacked | Stacked | Hours left / Address right |

**Critical mobile requirements (brand-layer):**
- Both CTAs in the Hero must be visible at 375px without scrolling — hero content positioned in lower half
- Phone number in Header is visible at mobile (small variant, not hidden behind hamburger) — `"Reserve"` button covers this requirement
- MobileBottomBar always present on all pages except `/contact` — body `pb-[56px]` prevents occlusion

---

## 15. Animation Implementation Plan

**Motion level:** Between subtle and moderate

**Implementation method:** CSS transitions for interactions + custom `useScrollReveal` hook (IntersectionObserver) for scroll entry. No Framer Motion — project doesn't warrant the bundle size. Hero parallax via CSS `@supports` scroll-driven animation with a JS fallback using `requestAnimationFrame` at reduced CPU budget.

**What animates:**

| Element | Animation | Implementation |
|---|---|---|
| Section entry | opacity 0→1, translateY 20px→0, 450ms ease-out | `<ScrollReveal>` wrapper component |
| Card grid entry | Same as section, 60ms stagger between cards | `<ScrollReveal delay={index * 60}>` |
| Button hover (primary) | background-color transition | `transition-colors duration-[180ms]` |
| Button hover (secondary) | background-color fill-in | `transition-colors duration-[180ms]` |
| Nav link hover | color transition | `transition-colors duration-150` |
| Mobile nav open | opacity + translateX slide-in | `transition-[opacity,transform] duration-250` |
| Mobile nav close | Reverse | Same |
| Hero parallax | background-position Y at 0.15× scroll | CSS scroll-driven or rAF at 60fps cap |
| Gallery tab switch | Grid opacity 0.5→1 | `transition-opacity duration-250` |
| Gallery lightbox open | Overlay opacity 0→1, image scale 0.95→1 | `transition-[opacity,transform] duration-300` |
| FAQ accordion open | max-height 0→auto + opacity 0→1 | CSS `max-height` transition 300ms |
| Sticky header shadow | box-shadow appears after scroll | `transition-shadow duration-200` |

**What does NOT animate:** Footer, Privacy Policy content, Thank You page content, TrustBar stats, phone number in header, menu text content, body text in any section.

**Reduced motion:**
```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
`ScrollReveal` component checks `window.matchMedia('(prefers-reduced-motion: reduce)')` and renders children at final state immediately if true.

---

## 16. SEO and Metadata Plan

**Metadata structure:** Next.js App Router `export const metadata` per page + root layout base.

**Root layout (`app/layout.tsx`):**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://lagrottaonmain.ca'),
  title: { template: '%s | La Grotta On Main', default: 'La Grotta On Main — Italian Restaurant in Unionville' },
  description: 'Family-owned Italian and Mediterranean restaurant in historic Unionville, Ontario. Serving Unionville for 29 years.',
  openGraph: { type: 'website', locale: 'en_CA', siteName: 'La Grotta On Main' },
}
```

**Per-page metadata:**

| Page | Title | Description |
|---|---|---|
| `/` | `La Grotta On Main — Italian Restaurant in Unionville` | Family-owned Italian restaurant in historic Unionville, ON. Reserve your table: (905) 940-0235. |
| `/menu` | `Our Menu` | View the full Italian and Mediterranean menu at La Grotta On Main, Unionville. |
| `/gallery` | `Gallery` | Photos of food, interior, patio, and events at La Grotta On Main in Unionville, Ontario. |
| `/private-functions` | `Private Functions & Events` | Host your private dinner or event at La Grotta On Main. Family-owned restaurant in Unionville, ON. |
| `/contact` | `Reserve a Table` | Call La Grotta On Main to reserve your table. Located at 205 Main St, Unionville, ON. (905) 940-0235. |
| `/thank-you` | `Thank You` | (no-index) |
| `/privacy-policy` | `Privacy Policy` | (no-index) |

**LocalBusiness schema** (`application/ld+json` injected in `app/layout.tsx`):
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "La Grotta On Main",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "205 Main Street",
    "addressLocality": "Unionville",
    "addressRegion": "ON",
    "postalCode": "L3R 2G8",
    "addressCountry": "CA"
  },
  "telephone": "+19059400235",
  "email": "lagrottaonmain@gmail.com",
  "url": "https://lagrottaonmain.ca",
  "servesCuisine": ["Italian", "Mediterranean"],
  "priceRange": "$$",
  "openingHours": ["[CONFIRM WITH CLIENT]"],
  "sameAs": [
    "https://www.instagram.com/lagrottaonmain",
    "https://www.facebook.com/lagrottaonmain"
  ]
}
```

**Sitemap:** `app/sitemap.ts` returns all 5 public pages (excludes `/thank-you` and `/privacy-policy`).
**Robots:** `app/robots.ts` — allow all except `/thank-you` and `/privacy-policy`.
**OG image:** Static `/public/images/og/og-default.jpg` (1200×630) — a high-quality interior or food photo with restaurant name overlay.

---

## 17. Integration Requirements

**Inquiry form (Private Functions):**
- Validation: React Hook Form (lightweight, no dependency on Zod for a 4-field form)
- Submission: Next.js Server Action in `lib/actions.ts`
- Email delivery: Resend (`resend` npm package) — sends to `lagrottaonmain@gmail.com`
- Fields: `name` (string, required), `email` (email, required), `occasion` (string, required), `message` (string, required)
- Spam protection: honeypot field (`<input type="text" name="_honey" tabIndex={-1} aria-hidden="true" style={{display:'none'}} />`) checked in server action
- On success: `redirect('/thank-you')` via Next.js `redirect()`
- On error: return error state to form — display inline error message, do not reset fields

**GA4 analytics:**
- Implementation: `next/script` with `strategy="afterInteractive"` in `app/layout.tsx`
- GA4 Measurement ID stored in `NEXT_PUBLIC_GA_ID` environment variable
- No custom events required at launch — page view tracking only

**Google Maps embed (Contact page):**
- Static iframe embed — no Maps JavaScript API required, no API key needed for basic embed
- URL: `https://maps.google.com/maps?q=205+Main+Street+Unionville+ON&output=embed`
- Rendered in `GoogleMap.tsx` as a `"use client"` component (required for iframe hydration)
- Height: 300px desktop, 250px mobile — responsive via Tailwind height classes

**`next/font` (typography):**
```typescript
// app/layout.tsx
import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})
```

**Environment variables required:**
```
RESEND_API_KEY=           # Resend API key for form delivery
NEXT_PUBLIC_GA_ID=        # GA4 Measurement ID
```

---

## 18. Accessibility Requirements

- **Semantic HTML:** Every page has exactly one `<h1>`. Heading hierarchy maintained (`h1` → `h2` → `h3`). Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
- **Focus indicators:** Defined in `globals.css` — `2px solid var(--color-gold)` with `2px offset`. Applied to all interactive elements via `focus-visible:outline`.
- **Tap targets:** All mobile interactive elements minimum 44×44px — enforced via Tailwind `min-h-[44px] min-w-[44px]` on buttons and nav links.
- **Form labels:** All `<input>` and `<textarea>` elements have explicit `<label htmlFor="...">` — no placeholder-as-label.
- **Image alt text:** All `<Image>` components require a non-empty `alt` prop. Decorative images (hero overlay, background textures) use `alt=""`. Gallery images: descriptive alt from `data/gallery.ts`.
- **Mobile nav:** When open — `aria-expanded="true"` on toggle button, focus trap active (Tab cycles within nav), `Escape` key closes. When closed — focus returns to hamburger button.
- **Gallery lightbox:** When open — focus trap active, `Escape` closes, left/right arrow keys navigate images, `aria-label` on lightbox container.
- **FAQ accordion:** Each trigger is a `<button>` with `aria-expanded`. Panel has `role="region"` and `aria-labelledby` pointing to trigger id.
- **Skip link:** `<a href="#main-content" className="sr-only focus:not-sr-only">` at top of layout for keyboard navigation.
- **Color contrast:** All design system color pairs verified at 4.5:1 minimum. Gold on near-black text on CTA buttons verified before build.
- **Language:** `<html lang="en">` in root layout.

---

## 19. Page Implementation Order

1. **Homepage** — highest priority; all reusable components built and tested here first
2. **Contact** — second priority; validates the phone CTA implementation and mobile bottom bar
3. **Menu** — validates menu data structure and mobile menu readability
4. **Gallery** — validates the GalleryGrid client component (tabs + lightbox) and image loading
5. **Private Functions** — validates FAQAccordion and InquiryForm with Resend integration
6. **Thank You** — minimal page; built alongside Private Functions
7. **Privacy Policy** — minimal page; built last

---

## 20. Phased Build Plan

| Phase | What gets built | Success gate |
|---|---|---|
| 1 — Foundation | `next.config.ts`, `tailwind.config.ts`, `globals.css` (CSS custom props), `data/site.ts`, `lib/utils.ts`, `next/font` setup, `app/layout.tsx` shell (Header + Footer stubs) | `next dev` runs, fonts load, CSS custom properties resolve in browser |
| 2 — UI Primitives | `Button.tsx`, `SectionWrapper.tsx`, `ScrollReveal.tsx`, `StarRating.tsx`, `DishCard.tsx`, `ReviewCard.tsx` | All primitives render correctly, Button variants all pass visual review |
| 3 — Layout Components | `Header.tsx` (full), `MobileNav.tsx` (with focus trap), `MobileBottomBar.tsx`, `Footer.tsx` | Header sticky behavior works, mobile nav opens/closes with focus trap, bottom bar visible on mobile |
| 4 — Homepage Sections | `Hero.tsx`, `TrustBar.tsx`, `FamilyStory.tsx`, `SignatureDishes.tsx`, `GalleryTeaser.tsx`, `ReviewStrip.tsx`, `PrivateFunctionsCallout.tsx`, `CTABand.tsx` + `app/page.tsx` assembly | Homepage renders completely, all sections visible, scroll animations fire |
| 5 — Remaining Pages | All remaining page sections + page files: Menu, Gallery (`GalleryGrid.tsx`), Private Functions (`FAQAccordion.tsx` + `InquiryForm.tsx`), Contact (`ContactBlock.tsx` + `GoogleMap.tsx`), Thank You, Privacy Policy | All 7 pages render, nav links correct, form submits to `/thank-you` |
| 6 — Integrations | `lib/actions.ts` (Resend), GA4 script, `app/sitemap.ts`, `app/robots.ts`, LocalBusiness schema | Form delivers email to lagrottaonmain@gmail.com, GA4 tracking active |
| 7 — Polish | Real photos swapped in, scroll animations tuned, hero parallax, mobile review pass, OG image, favicon | All breakpoints correct, real photography in place |
| 8 — QA + Launch | Full QA checklist (below), performance audit, accessibility audit | All checklist items pass, Lighthouse mobile ≥ 85 |

---

## 21. QA and Acceptance Criteria

**Performance:**
- [ ] LCP < 2.5s on mobile (4G connection simulation)
- [ ] CLS < 0.1 (hero image has explicit dimensions, no layout shift)
- [ ] All gallery images lazy-loaded — no blocking initial render
- [ ] `next/font` fonts load without FOUT on repeat visits

**Mobile conversion (brand-critical):**
- [ ] Phone number tap-to-call works on iOS Safari and Android Chrome
- [ ] MobileBottomBar visible on all pages except `/contact`
- [ ] Both Hero CTAs visible without scrolling on 375px viewport
- [ ] All tap targets ≥ 44px on mobile
- [ ] Menu page text readable at 375px without zooming (minimum 15px font)

**Functionality:**
- [ ] Inquiry form submits successfully — email received at lagrottaonmain@gmail.com
- [ ] Inquiry form honeypot blocks bot submissions
- [ ] Form redirects to `/thank-you` on success
- [ ] Gallery tab filter switches categories without page reload
- [ ] Gallery lightbox opens, navigates, and closes (keyboard + click/tap)
- [ ] FAQ accordion opens/closes correctly — one or multiple open allowed
- [ ] Mobile nav opens/closes with focus trap — Escape key works
- [ ] Google Maps embed loads on `/contact`

**Design system compliance:**
- [ ] Gold used only on: CTA buttons, trust bar stats, review card left border, rule lines — nowhere else
- [ ] No Italian restaurant clichés in imagery or components (vine motifs, etc.)
- [ ] Typography hierarchy correct on all pages (one H1, no skipped levels)
- [ ] No looping or auto-play animations anywhere
- [ ] `prefers-reduced-motion` disables all animations — test in browser settings

**SEO:**
- [ ] All 5 public pages have unique `<title>` and `<meta description>`
- [ ] LocalBusiness schema validates in Google Rich Results Test
- [ ] XML sitemap accessible at `/sitemap.xml`
- [ ] `robots.txt` excludes `/thank-you` and `/privacy-policy`
- [ ] OG image renders correctly when URL shared on social

**Accessibility:**
- [ ] All pages pass axe DevTools scan with 0 critical violations
- [ ] Keyboard navigation works through all interactive elements
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces mobile nav state correctly

---

## 22. Launch Readiness Checklist

**Client must confirm before launch:**
- [ ] Hours of operation confirmed and entered in `data/site.ts`
- [ ] Menu accuracy confirmed — `data/menu.ts` matches current menu
- [ ] Private Functions details confirmed (capacity, FAQ answers)
- [ ] Real photography assets provided and placed in `/public/images/`
- [ ] High-res logo file in place (`/public/images/logo/`)
- [ ] Gold hex value confirmed from logo, CSS custom properties updated
- [ ] Copy review completed — story section, all headlines approved

**Technical pre-launch:**
- [ ] `RESEND_API_KEY` set in production environment
- [ ] `NEXT_PUBLIC_GA_ID` set in production environment
- [ ] `metadataBase` URL confirmed as `https://lagrottaonmain.ca`
- [ ] Schema `openingHours` field populated with confirmed hours
- [ ] OG image (`/public/images/og/og-default.jpg`) in place at 1200×630
- [ ] Favicon set (`/public/favicon.ico` or `app/favicon.ico`)
- [ ] Domain pointed to deployment (Vercel recommended — zero-config Next.js)
- [ ] Previous site URLs checked — redirect any paths that exist in search index

---

## 23. Assumptions Made

- `[ASSUMPTION]` **Topic:** Gold hex placeholder value `#C9A052`. **Why:** Exact value not confirmed. **Impact:** Must be replaced before any QA — all contrast ratios depend on the real value.

- `[ASSUMPTION]` **Topic:** Resend used for form delivery (not Formspree). **Why:** Resend integrates natively with Next.js server actions and gives more control over email formatting than Formspree. **Impact:** If Resend is unavailable or client prefers Formspree, `lib/actions.ts` changes to a Formspree POST — no other file changes.

- `[ASSUMPTION]` **Topic:** No CMS at launch. **Why:** Post-launch editing preference unconfirmed. **Impact:** If client confirms they want to edit menu/photos/hours independently, Sanity.io is the recommended addition — it would move `data/menu.ts`, `data/gallery.ts`, and `data/site.ts` content into a Sanity dataset, with GROQ queries replacing static imports.

- `[ASSUMPTION]` **Topic:** Static Google Maps iframe (no API key). **Why:** A basic embed of a known address does not require a Maps API key. **Impact:** Google may deprecate this method — if the embed stops working, upgrade to Maps JavaScript API with an API key stored in `NEXT_PUBLIC_GOOGLE_MAPS_KEY`.

- `[ASSUMPTION]` **Topic:** React Hook Form for form validation (not Zod). **Why:** 4-field form does not warrant the Zod schema complexity. **Impact:** If forms grow more complex in a future phase, add Zod + `zodResolver` — existing RHF setup is compatible.

---

## 24. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Gold hex value | Not extracted from logo yet | Agency (extract from current site logo file) | Before Phase 1 completes |
| High-res logo file | Not received | Client provides | Before Phase 7 (polish) |
| Real photography assets | Not yet sourced/curated | Agency (Yelp + Instagram curation) | Before Phase 7 (polish) |
| Hours of operation | Not confirmed | Client confirms | Before Phase 8 (launch) |
| Menu accuracy | Not verified | Client confirms | Before Phase 8 (launch) |
| Private Functions details | Not captured | Client provides | Before Phase 5 (page build) |
| Founding story copy | Not written | Agency writes from sources | Before Phase 5 (page build) |
| `RESEND_API_KEY` | Not yet provisioned | Agency sets up Resend account | Before Phase 6 (integrations) |

---

## 25. Blockers and Risks

**Blockers:**
- Gold hex value must be confirmed before `globals.css` custom properties are finalized — all CTA buttons, trust bar, and review cards depend on it. Extract from current site logo before Phase 1 completes.

**Risks:**
- **Photography (high):** Phases 1–6 can complete with placeholder images. Phase 7 (polish) cannot complete without real photography. If photo quality from Yelp/Instagram is insufficient, a professional photography session must be recommended — this could delay launch by weeks.
- **Copy (medium):** The family story section is the highest-impact copy block on the site. If sourced copy is generic, the homepage's primary differentiator will be claimed but not felt. One 3–5 sentence input from the client (Sebastian or family) would resolve this.
- **Resend deliverability (low):** If the inquiry form emails land in spam at `lagrottaonmain@gmail.com`, a Gmail-to-Resend domain verification step is needed. Test form delivery early in Phase 6.

---

## 26. Handoff to Coding Stage

**What to build first:** Phase 1 — Foundation. Start with `tailwind.config.ts`, CSS custom properties in `globals.css`, font loading in `app/layout.tsx`, and `data/site.ts`. These are the backbone everything else builds on. Do not start any section components until the design system tokens are live and verified in the browser.

**What can be reused across pages:** Header, Footer, MobileNav, MobileBottomBar, CTABand, SectionWrapper, ScrollReveal, Button, StarRating.

**What must remain page-specific:** GalleryGrid (gallery only), GalleryTeaser (homepage only), MenuContent (menu only), FAQAccordion (private-functions only), InquiryForm (private-functions only), ContactBlock (contact only), GoogleMap (contact only).

**Data/content structure to respect:**
- Phone number is NEVER hardcoded in a component — always `siteConfig.phone` from `data/site.ts`
- All review content from `data/reviews.ts` — never inline in a component
- Gallery images from `data/gallery.ts` — the `GalleryGrid` component renders from this array; swapping photos is a data change, not a component change

**Design/brand decisions that must not change:**
- Trust bar (4.3★ + 29 years) must be the first section after the Hero on the Homepage — do not move this down for layout convenience
- MobileBottomBar must be present on all pages except `/contact` — do not remove for "cleanliness"
- Gold is used ONLY on: primary CTA button fill, trust bar stats text, review card left border accent, and thin rule lines — any other gold usage is out of spec
- No hover zoom/scale effect on images — this was explicitly excluded from the design system

**Technical flexibility that remains:**
- Exact Tailwind utility class combinations within design system ranges
- Internal HTML structure of components (as long as semantic HTML requirements are met)
- Whether CSS-only or IntersectionObserver-based scroll animations — match the defined behavior
- Minor spacing adjustments within defined ranges (e.g., `py-20` vs `py-24` for section padding)
