# Frontend Content and Data Rules

This file defines how business content, site configuration, and page-level data should be organized in the frontend codebase — what gets centralized, what stays per-page, and what should never be scattered.

---

## Part 1: Core Principle

Business content and configuration should be separated from UI logic. A developer should be able to change the business's phone number in one place and have it update everywhere. A content editor should be able to update a service description without hunting through component files.

This does not mean building a CMS. It means organizing content into data files that feed components, rather than hardcoding content inside components.

**The three-tier content model:**

1. **Global config** — site-wide business facts that appear in multiple places
2. **Page-level data** — content specific to one page, organized per-page
3. **Feature-level data** — content for a specific feature area (services list, testimonials, FAQs)

---

## Part 2: Global Config (`data/config/`)

Global config holds business facts that appear in more than one place on the site. If changing this information would require editing multiple files, it belongs here.

**`data/config/site.ts` — Site-wide metadata and identity:**
```typescript
export const siteConfig = {
  businessName: 'Peak Ridge Pressure Washing',
  tagline: 'Residential and Commercial Pressure Washing in Austin, TX',
  url: 'https://peakridgepressurewashing.com',
  locale: 'en-US',
  defaultOgImage: '/images/og/default.jpg',
}
```

**`data/config/business.ts` — Business details used in schema, footer, contact, and local SEO:**
```typescript
export const businessConfig = {
  legalName: 'Peak Ridge Pressure Washing LLC',
  telephone: '+15125550000',
  email: 'hello@peakridge.com',
  address: {
    streetAddress: null,          // null for service-area businesses without public address
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    country: 'US',
  },
  coordinates: { lat: 30.2672, lng: -97.7431 },
  openingHours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], open: '08:00', close: '18:00' },
    { days: ['Saturday'], open: '09:00', close: '14:00' },
  ],
  serviceArea: ['Austin', 'Cedar Park', 'Round Rock', 'Georgetown', 'Pflugerville'],
  googleMapsUrl: 'https://maps.google.com/?cid=XXXXXXXX',
  aggregateRating: { ratingValue: 4.9, reviewCount: 83 },  // null until confirmed
}
```

**`data/config/navigation.ts` — Nav links and CTAs:**
```typescript
export const navigationConfig = {
  primaryLinks: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Service Area', href: '/service-area' },
    { label: 'Contact', href: '/contact' },
  ],
  primaryCTA: { label: 'Get a Free Quote', href: '/contact' },
  phone: '+15125550000',
  phoneDisplay: '(512) 555-0000',
}
```

**`data/config/footer.ts` — Footer links, legal, and secondary info:**
```typescript
export const footerConfig = {
  columns: [...],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  copyrightName: 'Peak Ridge Pressure Washing LLC',
}
```

**Rules:**
- Every piece of information in `data/config/` must be referenced, not duplicated, wherever it is used
- Phone number, business name, and address appear in the config once — components import them
- Config files export typed constants, not default exports — this makes imports explicit

---

## Part 3: Page-Level Data (`data/pages/`)

Page-specific content that belongs to one page and has no reuse value elsewhere.

**`data/pages/home.ts`:**
```typescript
export const homePageData = {
  hero: {
    headline: 'Austin's Most Trusted Pressure Washing Team',
    subheadline: 'Residential and commercial cleaning for driveways, homes, roofs, and patios.',
    primaryCTA: { label: 'Get a Free Quote', href: '/contact' },
    secondaryCTA: { label: 'View Our Services', href: '/services' },
    trustLine: '★★★★★ 4.9 · 83 Google reviews',
    image: { src: '/images/hero/house-washing-austin.jpg', alt: 'House being washed in Austin TX' },
  },
  servicesPreview: {
    heading: 'What We Do',
    services: ['house-washing', 'driveway-cleaning', 'roof-soft-wash'],  // slugs from services data
  },
  localProof: {
    heading: 'Trusted by Austin Homeowners',
    testimonialIds: ['t-001', 't-004', 't-007'],  // IDs from testimonials data
  },
  // etc.
}
```

**`data/pages/about.ts`:**
```typescript
export const aboutPageData = {
  hero: {
    heading: 'About Peak Ridge',
    subheading: 'Family-owned and operated in Austin since 2018.',
  },
  story: { body: '...' },
  teamMembers: [...],
  values: [...],
}
```

**Rules:**
- Page data files should not duplicate config data — reference it from `data/config/`
- Service slugs on the homepage reference the services data array — they do not re-copy service content
- Testimonial IDs reference the testimonials data — they do not re-paste testimonial text
- Page data files are TypeScript — they are typed with interfaces from `lib/types/`

---

## Part 4: Service and Feature Data (`data/services/`, `data/features/`)

**`data/services/index.ts` — The master service list:**
```typescript
export const services: ServiceData[] = [
  {
    slug: 'house-washing',
    name: 'House Washing',
    shortDescription: 'Full exterior cleaning for siding, brick, and stucco.',
    metaTitle: 'House Washing in Austin, TX | Peak Ridge',
    metaDescription: '...',
    heroImage: { src: '/images/services/house-washing.jpg', alt: '...' },
    sections: {
      definition: { body: '...' },
      process: { steps: [...] },
      included: [...],
      pricing: { model: 'starting-at', startingAt: { price: 249, scopeNote: 'single-story homes' } },
      faq: [...],
    },
    relatedServiceSlugs: ['driveway-cleaning', 'gutter-cleaning'],
  },
  // ...
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
```

**Feature data follows the same pattern:**

`data/features/testimonials.ts` — All testimonials with IDs for referencing
`data/features/faqs.ts` — Global or shared FAQ items
`data/features/gallery.ts` — Gallery items with before/after pairs
`data/features/reviews.ts` — Individual review objects (not fabricated — real sources only)

**Rules:**
- Service data files are the single source of truth for service content
- Pages never hardcode service copy — they import from the data layer
- Feature data files hold reference data; section components render it
- Data files are typed with interfaces from `lib/types/`
- Helper functions (getServiceBySlug, getTestimonialsByIds) live in the data file alongside the data array

---

## Part 5: What Should Never Be Scattered

This list defines content that must live in the data layer, never in component or page files:

| Content | Location | Anti-pattern |
|---|---|---|
| Business name | `data/config/site.ts` | Written in 4 different components |
| Phone number | `data/config/business.ts` | Hardcoded in Header, Footer, CTABlock, ContactPage |
| Address | `data/config/business.ts` | Hardcoded in Footer and ContactPage separately |
| Opening hours | `data/config/business.ts` | Hardcoded in Footer, schema, and ContactPage separately |
| Service names | `data/services/index.ts` | Written in NavLinks, ServicesGrid, ServiceAreaPage independently |
| Review count/rating | `data/config/business.ts` | Hardcoded in Hero and schema separately |
| CTA labels | `data/config/navigation.ts` | Hardcoded in multiple CTABlock instances |
| Nav links | `data/config/navigation.ts` | Hardcoded directly in SiteHeader component |
| Service area cities | `data/config/business.ts` | Hardcoded in ServiceAreaSection and schema and footer separately |

---

## Part 6: CMS Readiness Without Over-Engineering

For projects not using a CMS (agency edits code directly), the TypeScript data file approach above is the right answer. It is:
- Editable by developers
- Type-safe
- Version-controlled
- Fast to build with

For projects that might add a CMS later:
- Keep data interfaces clean and typed — they become CMS content types
- Keep page composition separate from data — pages import data rather than define it inline
- Do not hardcode content inline in components — any inline content is migration work later
- The shape of `ServiceData`, `LocationData`, etc. in `lib/types/` should be CMS-portable

**Do not pre-build CMS integration if it is not confirmed.**
Building a CMS adapter layer for a site that will be edited as code is over-engineering. If CMS is a future requirement, the data file structure above will support a clean migration. Build it when it is needed.

---

## Part 7: Content Editability Tiers

Grade each content item by how often it changes and who changes it:

**Tier 1 — Changes constantly (agency or client adjusts frequently):**
- Pricing, promotions, hours, phone number, service area
- Must live in `data/config/business.ts` — one place, one change

**Tier 2 — Changes per-project or per-season:**
- Service descriptions, testimonials, team members, gallery images
- Live in `data/services/` and `data/features/` — clearly organized, easy to find

**Tier 3 — Changes rarely:**
- Homepage hero copy, page headings, value propositions
- Live in `data/pages/` — organized per page, changed when messaging evolves

**Tier 4 — Almost never changes:**
- Navigation structure, layout behavior, component architecture
- Lives in component code and config — not expected to change between revisions

This tier model helps decide where content belongs and how accessible it should be to non-developers.
