# Data and File Structure Rules

This file defines the generic pseudo-project folder/file structure, naming conventions, data organization strategy, and component architecture decisions.

---

## Part 1: Pseudo-Project Folder Structure

This structure applies to any local business website built with the default stack (Next.js + React + Tailwind + TypeScript). Placeholder conventions:
- `[project-name]` → the client's business slug (e.g., `marcus-pro-wash`)
- `[service-slug]` → individual service name in URL format (e.g., `pressure-washing`)
- `[city-slug]` → city name in URL format (e.g., `austin`, `cedar-park`)

```
[project-name]/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout: Header, Footer, font loading, base metadata
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Tailwind base + CSS custom properties
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx                  # Services overview
│   │   └── [service-slug]/
│   │       └── page.tsx              # Individual service page (dynamic route)
│   │
│   ├── gallery/                      # Only if gallery is active
│   │   └── page.tsx
│   │
│   ├── service-areas/                # Only if local SEO pages are active
│   │   ├── page.tsx                  # Service areas overview
│   │   └── [city-slug]/
│   │       └── page.tsx              # City-specific page (dynamic route)
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── thank-you/
│   │   └── page.tsx
│   │
│   ├── privacy-policy/
│   │   └── page.tsx
│   │
│   └── not-found.tsx                 # Custom 404
│
├── components/
│   │
│   ├── layout/                       # Renders on every page via layout.tsx
│   │   ├── Header.tsx                # Desktop nav + logo + CTA button
│   │   ├── Footer.tsx                # Footer columns, links, legal
│   │   ├── Navigation.tsx            # Desktop nav link list (server component)
│   │   └── MobileNav.tsx             # Mobile hamburger + drawer ('use client')
│   │
│   ├── sections/                     # Reusable full-width page sections
│   │   ├── Hero.tsx                  # Hero section — accepts variant prop
│   │   ├── ServicesGrid.tsx          # Grid of service cards (overview)
│   │   ├── ServiceDetail.tsx         # Single service page content block
│   │   ├── TestimonialsSection.tsx   # Review cards grid
│   │   ├── TrustBar.tsx              # Star rating + review count badge
│   │   ├── GuaranteeBadge.tsx        # Guarantee callout block
│   │   ├── BeforeAfterSlider.tsx     # Before/after slider ('use client')
│   │   ├── GalleryGrid.tsx           # Photo gallery grid
│   │   ├── CTASection.tsx            # Standalone CTA band section
│   │   ├── ContactForm.tsx           # Lead form with server action ('use client')
│   │   ├── ServiceAreaMap.tsx        # Location/area map section
│   │   ├── AboutSection.tsx          # About/founder story section
│   │   └── FAQAccordion.tsx          # FAQ with accordion ('use client')
│   │
│   ├── ui/                           # Smallest reusable UI primitives
│   │   ├── Button.tsx                # Primary, secondary, ghost variants
│   │   ├── Card.tsx                  # Base card wrapper
│   │   ├── Badge.tsx                 # Tag/label/chip
│   │   ├── StarRating.tsx            # SVG star row component
│   │   ├── SectionWrapper.tsx        # Container + spacing + background variant
│   │   └── SchemaOrg.tsx             # JSON-LD structured data injector
│   │
│   └── icons/                        # Only if custom SVG icons are used
│       └── [icon-name].tsx
│
├── data/                             # All content and configuration data
│   │
│   ├── site.ts                       # Global site config (see Part 2)
│   ├── navigation.ts                 # Nav structure + footer link columns
│   ├── services.ts                   # Service definitions array
│   ├── testimonials.ts               # Testimonial/review objects array
│   ├── service-areas.ts              # City/area definitions (if applicable)
│   │
│   └── pages/                        # Per-page content data
│       ├── home.ts                   # Homepage section content
│       ├── about.ts                  # About page content
│       ├── contact.ts                # Contact page content + business info
│       ├── gallery.ts                # Gallery image manifest (if applicable)
│       └── faq.ts                    # FAQ items (if applicable)
│
├── lib/                              # Utilities and helpers
│   ├── utils.ts                      # cn() + general helpers
│   ├── actions.ts                    # Server actions (form submission)
│   └── analytics.ts                  # Analytics event helpers (if applicable)
│
├── public/                           # Static assets (not processed by Next.js)
│   │
│   ├── images/
│   │   ├── hero/                     # Hero background/foreground images
│   │   ├── team/                     # Founder/team photos
│   │   ├── services/                 # Service card images
│   │   ├── before-after/             # Before/after image pairs
│   │   ├── gallery/                  # Gallery images
│   │   └── og/                       # Open Graph social images
│   │
│   └── favicon.ico
│
├── tailwind.config.ts                # Design system token mapping
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json
```

---

## Part 2: Global Site Config (`data/site.ts`)

This file contains site-wide constants. Import wherever business information is needed.

```typescript
export const siteConfig = {
  name: '[Business Name]',
  tagline: '[Tagline or short description]',
  phone: '[phone number]',
  phoneFormatted: '[display format]',
  email: '[contact email]',
  address: {
    street: '[street]',
    city: '[city]',
    state: '[state abbreviation]',
    zip: '[zip]',
    full: '[full formatted address]',
  },
  url: 'https://[domain]',
  primaryCTA: {
    label: '[e.g., Get a Free Quote]',
    href: '/contact',
  },
  hours: '[business hours]',
  serviceArea: '[primary service area description]',
  social: {
    google: '[Google Business URL]',
    facebook: '[if applicable]',
    instagram: '[if applicable]',
  },
  reviews: {
    count: [number],
    rating: [number],
    platform: 'Google',
  },
  schema: {
    businessType: '[LocalBusiness schema type]',
    priceRange: '[$ / $$ / $$$ or N/A]',
  },
};
```

---

## Part 3: Navigation Config (`data/navigation.ts`)

```typescript
export const mainNav = [
  { label: '[Label]', href: '/[slug]' },
  // ...
  { label: '[CTA Label]', href: '/contact', isCTA: true },
];

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    // ...
  ],
  services: [
    { label: '[Service Name]', href: '/services/[slug]' },
  ],
  serviceAreas: [  // only if applicable
    { label: '[City]', href: '/service-areas/[slug]' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};
```

---

## Part 4: Service Data (`data/services.ts`)

```typescript
export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;      // path to /public/images/services/
  benefits: string[];
  surfaces?: string[];    // optional: relevant surfaces/use cases
  ctaLabel: string;
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: '[service-slug]',
    name: '[Service Name]',
    // ...
  },
];
```

The `[service-slug]` must match the folder name in `app/services/[service-slug]/`.

---

## Part 5: Props vs Config/Data Decision Rules

**Use component props when:**
- The content is unique to one page instance
- The component renders differently based on context (hero on homepage vs. hero on service page)
- The value comes from a data file imported in the page component and passed down

**Use data/config files when:**
- The data is reused across multiple pages or components (testimonials, services, nav)
- The data would be confusing or brittle if hardcoded inside a component

**Hardcode when:**
- The value will never change and has no business logic variation (aria labels, icon sizes, fixed animation durations)
- The value is a design-system constant that should not be configurable (border-radius in the component's class)
- The value is so simple that a config entry would add boilerplate without clarity

**Never hardcode:**
- Business name, phone number, address — these go in `data/site.ts`
- Service names or descriptions
- Navigation structure
- Testimonials or reviews
- SEO titles and descriptions
- Any content the client will want to update

---

## Part 6: Asset Organization Rules

**Image naming:**
- All lowercase, hyphens between words: `marcus-portrait.jpg`, `driveway-before.jpg`, `driveway-after.jpg`
- Before/after pairs: `[subject]-before.[ext]` and `[subject]-after.[ext]`
- OG images: `/public/images/og/[page-slug].jpg` — 1200×630px

**Image format guidance:**
- Photography: `.jpg` (or `.webp` if available)
- Logos and icons with transparency: `.svg` preferred, `.png` if SVG unavailable
- Favicons: `favicon.ico` in `/public/`
- OG images: `.jpg` — `.png` is fine but heavier

**Image sizing guidance:**
- Hero images: at least 1600×900px source; `next/image` handles optimization
- Gallery/before-after: at least 800px wide source
- Team/profile: at least 400×400px source

**Fonts:**
- If using `next/font`, no font files go in `/public/` — they are loaded via the package
- If self-hosting for specific reasons: place in `/public/fonts/` and reference in `globals.css`

---

## Part 7: Component Reuse Decision Rules

**Make a component globally reusable (`components/sections/` or `components/ui/`) when:**
- It appears on more than one page
- Its structure and styling are consistent even if its content differs (via props)
- It could be useful in future client projects with minor variation

**Make a component page-specific (`app/[route]/` local component) when:**
- It is structurally unique to one page and unlikely to recur
- Extracting it adds abstraction without any reuse benefit
- Examples: an elaborate timeline on the About page, a map grid used only on the service-areas overview

**Use a variant prop rather than a new component when:**
- Two instances of a component differ only in size, color, or alignment
- Examples: `<Hero variant="service-page" />` vs `<Hero variant="home" />`, `<Button variant="primary" />` vs `<Button variant="secondary" />`

**Section variants to plan for:**
- Hero: homepage variant (full-height, larger type) vs. inner-page variant (shorter, breadcrumb)
- CTA Section: full-width band vs. inline card vs. footer CTA strip
- Services: grid overview vs. detail layout
