# Frontend Structure Rules

This file defines the folder and file structure, component architecture layers, section-variant discipline, naming conventions, and anti-pattern enforcement for the frontend codebase.

---

## Part 1: Folder Structure with Responsibility Definitions

This is the recommended folder structure for a Type B or B+D local-service-business website (the primary use case). Adjust depth and folder count for simpler or more complex projects.

```
/
├── app/                        # Next.js App Router pages and layouts
│   ├── layout.tsx              # Root shell: fonts, global metadata, analytics
│   ├── page.tsx                # Homepage (direct composition)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx            # Service overview page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual service pages (template-driven)
│   ├── locations/              # Only if location pages are justified
│   │   └── [slug]/
│   │       └── page.tsx
│   └── service-area/           # Only if service-area page is justified
│       └── page.tsx
│
├── components/
│   ├── ui/                     # UI primitives — no page context
│   ├── sections/               # Full-width page sections
│   ├── layouts/                # Layout shells and wrappers
│   └── features/               # Feature-specific component sets
│
├── data/                       # All content and config — not scattered in components
│   ├── config/
│   ├── pages/
│   ├── services/
│   └── features/
│
├── lib/                        # Utilities, helpers, types — no UI
│   ├── utils/
│   ├── types/
│   ├── metadata/
│   └── schema/
│
├── public/                     # Static assets
│   └── images/
│
└── styles/                     # Global CSS — minimal
    └── globals.css
```

---

## Part 2: Folder Responsibility Definitions

**`app/`**
Contains Next.js App Router page files only. Pages should be thin — they import layout shells and section compositions from `components/`, and receive data from `data/`. A page file should rarely exceed 50 lines.

The homepage (`app/page.tsx`) is a direct composition — it explicitly assembles the sections this specific homepage uses, in order. It is not driven by a config array. A developer reading it should immediately understand the page structure.

Service pages (`app/services/[slug]/page.tsx`) are template-driven — they render a `ServicePageTemplate` component and pass the relevant service data file.

**`components/ui/`**
UI primitives: the smallest composable units with no page context. These carry the design system into code.

Examples: `Button`, `Badge`, `Tag`, `Icon`, `Divider`, `Card`, `Avatar`, `StarRating`, `Spinner`

Rules:
- No hardcoded business content
- No section-level layout
- Accept props for content, variant, size, and state
- Almost always server components (no internal state unless the primitive requires it)
- Directly map to design system tokens via Tailwind classes

**`components/sections/`**
Full-width page sections. These are the primary visual building blocks of the site. Each section owns one clear visual/functional zone.

Examples: `Hero`, `ServicesGrid`, `TestimonialsStrip`, `FAQ`, `CTABlock`, `ServiceAreaSection`, `ReviewBadge`, `ProcessSteps`, `GalleryGrid`, `ContactForm`

Rules:
- Sections receive their content via props from the page or from a data import — they do not fetch their own content
- Sections do not hardcode business content
- Each section has a clear single job — do not build a "ServiceAndTestimonialAndCTA" mega-section
- Server components by default; client components only when the section contains interactive behavior (accordion FAQ, form submission, gallery lightbox)
- Section variants are controlled via a `variant` prop, not separate files (see Part 4)

**`components/layouts/`**
Layout shells, wrappers, and structural containers. Responsible for the persistent chrome, page containers, and spacing frameworks.

Examples: `SiteHeader`, `SiteFooter`, `PageContainer`, `SectionWrapper`, `GridLayout`, `TwoColumnLayout`

Rules:
- Layout components own spacing, max-width, responsive stacking, and background color zones
- Layout components do not own section content
- `SectionWrapper` provides consistent vertical padding, optional background, and horizontal centering — sections should use it consistently rather than each section managing its own vertical rhythm
- `SiteHeader` and `SiteFooter` are server components that receive data from the global config

**`components/features/`**
Feature-specific component sets that are too large or too domain-specific to live in `sections/` or `ui/`.

Examples:
- `features/booking/` — booking widget, calendar, availability display
- `features/gallery/` — lightbox, grid, before-after slider
- `features/reviews/` — Google Reviews embed, review card, review strip
- `features/map/` — map component with lazy-load wrapper
- `features/chat/` — chat widget integration shell

Rules:
- A feature folder only exists if the feature is confirmed in upstream planning
- Feature components are isolated — they do not bleed state or styling into adjacent sections
- Feature components that require client-side behavior are explicitly marked as client components
- Do not create feature folders for features that can live cleanly as a single section component

**`data/`**
All business content and site configuration. Nothing that a content editor, agency operator, or developer would reasonably want to change should be scattered inside component files.

This folder is explained in detail in `frontend-content-data-rules.md`.

**`lib/`**
Non-UI logic. Utilities, TypeScript types, metadata helpers, schema generators.

- `lib/utils/` — general utility functions (formatting, validation, string helpers)
- `lib/types/` — shared TypeScript interfaces and types (ServiceData, LocationData, etc.)
- `lib/metadata/` — functions that generate page-level metadata objects from data files
- `lib/schema/` — functions that generate JSON-LD schema from config data

Rules:
- `lib/` contains no UI components and no business content
- Types belong here, not scattered across component files
- Schema generation belongs here because it is data logic, not UI logic

**`public/images/`**
Static images organized by context:

```
public/images/
├── hero/
├── services/
├── team/
├── gallery/
├── logos/
└── og/            # Open Graph images
```

Rules:
- Image files use descriptive hyphenated names: `driveway-cleaning-austin.jpg` not `IMG_4821.jpg`
- All images served through `next/image` with explicit dimensions
- Never reference images with hardcoded `public/` prefix in component files — use `/images/...` paths

**`styles/globals.css`**
Minimal. Contains:
- Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- CSS custom properties for design tokens if not fully handled by Tailwind config
- Base resets beyond what Tailwind provides
- Font-face declarations if not using next/font

Rules:
- Do not write component styles in globals.css
- Do not write page-specific styles in globals.css
- Keep this file short — if it is growing, something is wrong

---

## Part 3: Component Architecture Layers

Five layers with distinct responsibilities:

**Layer 1 — UI Primitives** (`components/ui/`)
Smallest reusable units. Map directly to design system. No business logic.
- Examples: `Button`, `Badge`, `StarRating`, `Icon`, `Card`
- Client components: only when they require internal state (e.g., a toggle)

**Layer 2 — Sections** (`components/sections/`)
Full-width compositional blocks. Own one visual zone. Receive content via props.
- Examples: `Hero`, `ServicesGrid`, `FAQ`, `CTABlock`
- Server components by default; client when interactive

**Layer 3 — Layout Shells** (`components/layouts/`)
Structural wrappers. Manage spacing, max-width, chrome.
- Examples: `SiteHeader`, `SiteFooter`, `SectionWrapper`, `PageContainer`
- Server components always

**Layer 4 — Feature Components** (`components/features/[feature]/`)
Domain-specific feature sets. Isolated from the rest of the site.
- Examples: `BookingWidget`, `GalleryLightbox`, `ReviewsStrip`
- Client components when they require interactive state

**Layer 5 — Page Compositions** (`app/[route]/page.tsx`)
Assembled in the page file from sections, layouts, and feature components. Thin — no business logic.
- Direct compositions for unique pages (homepage, about, contact)
- Template instances for repeated page types (service pages, location pages)

---

## Part 4: Section-Variant Rules

Section variants control visual and structural differences within one section type without creating duplicate components.

**When to use a variant:**
- The section appears in 2+ places with the same data shape but different visual density, layout direction, or background treatment
- Example: `Hero` appears on the homepage (split layout, large) and on service pages (smaller, centered). Same component, `variant="home" | "inner"`

**How to implement variants:**
- One component file per section type
- A `variant` prop of a discriminated union type: `variant: 'home' | 'inner' | 'landing'`
- Variants should differ in layout, density, or background — not in fundamental data shape
- If a variant requires completely different props or completely different sections, it is not a variant — it is a different component

**When NOT to use a variant:**
- Two sections have the same name but structurally different jobs (do not force them together)
- A variant would require 3+ conditional branches that make the component unreadable
- A section only appears in one context — do not preemptively add variants for imagined future use

**Variant naming:**
Use purpose-based names, not position-based names:
- `variant="home"` not `variant="large"`
- `variant="inner"` not `variant="small"`
- `variant="compact"` when visual density is the meaningful difference

**Anti-pattern: The kitchen-sink variant**
A section with `variant="A" | "B" | "C" | "D" | "with-image" | "no-image" | "dark" | "light" | "two-col" | "three-col"` is not a variant system — it is a configuration system disguised as a component. When variants proliferate beyond 3–4 meaningful options, split the component.

---

## Part 5: Naming Conventions

Consistent naming across the codebase reduces cognitive overhead and makes file navigation faster.

**Components:** PascalCase
- `Hero.tsx`, `ServicesGrid.tsx`, `TestimonialCard.tsx`, `CTABlock.tsx`

**Data files:** camelCase
- `servicesData.ts`, `siteConfig.ts`, `homepageData.ts`

**Utility functions:** camelCase
- `formatPhoneNumber.ts`, `generateMetadata.ts`, `buildSchema.ts`

**Type interfaces:** PascalCase with suffix
- `ServiceData`, `LocationData`, `SiteConfig`, `HeroProps`

**Routes/slugs:** lowercase hyphenated
- `/services/roof-soft-wash`, `/locations/round-rock`

**Image files:** lowercase hyphenated, descriptive
- `hero-house-washing-austin.jpg`, `before-driveway-cleaning.jpg`

**Tailwind classes:** no custom naming — use utility classes directly; extract to component-level patterns via `cn()` utility, not via arbitrary CSS class names

**Page files:** Next.js convention — always `page.tsx` inside a named folder
**Layout files:** Next.js convention — always `layout.tsx` inside the relevant route segment

---

## Part 6: Anti-Pattern Enforcement

**Banned patterns — check before finalizing any architecture output:**

- [ ] Flat `/components` folder with Hero.tsx, Footer.tsx, FAQ.tsx, Button.tsx, ServiceCard.tsx all at the same level — no responsibility hierarchy
- [ ] Business content hardcoded inside component files: `<h1>Peak Ridge Pressure Washing</h1>` in `Hero.tsx`
- [ ] Giant page files that import 15 sections inline and also define helper functions and also contain the CTA copy
- [ ] Section components that reach into a global store to get their own content
- [ ] Client-side rendering of a section that has no interactive behavior
- [ ] A `PageTemplate` component with 20 optional boolean props that conditionally renders different sections
- [ ] Prop interfaces that accept arbitrary object shapes: `content: any` or `data: Record<string, unknown>`
- [ ] Duplicate sections: `HomeHero.tsx`, `ServiceHero.tsx`, `LandingHero.tsx` that are 90% the same code
- [ ] The same phone number, business name, or address written in 6 different component files
- [ ] A `utils.tsx` file that contains both TypeScript utility functions and React components
- [ ] An `index.ts` barrel export for every folder, even folders with 2 files (barrel exports add build overhead and confusion; only use for clearly stable, high-reuse primitive libraries)
