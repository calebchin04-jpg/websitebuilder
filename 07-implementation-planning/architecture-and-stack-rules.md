# Architecture and Stack Rules

This file defines the default recommended stack, how to structure the technical architecture, routing logic, component layering, styling integration, responsive implementation, animation constraints, SEO/metadata, and integration approaches.

---

## Part 1: Default Stack

### Recommended: Next.js + React + Tailwind CSS + TypeScript

**Why this stack for local business websites:**
- **Next.js App Router:** Server components by default reduce client-side bundle size. Built-in metadata API handles SEO cleanly. File-based routing maps directly to the sitemap structure. Static generation (SSG) is ideal for pages with no dynamic content — fast, cheap to host.
- **React:** Component model maps well to the section-based layouts of local business websites. Reusable sections become reusable components with props.
- **Tailwind CSS:** Utility-first means no separate CSS files per component. Design system values map cleanly to Tailwind config. Responsive variants (`md:`, `lg:`) are explicit and readable. No specificity conflicts.
- **TypeScript:** Makes data structures explicit. Prevents silent errors in props and config files. Essential when the AI coder is building many similar components from a shared pattern.

### Rules for applying this stack:
- Use App Router (`app/` directory), not Pages Router
- Default to Server Components. Add `'use client'` only where interactivity is required (forms, interactive UI, animation triggers)
- Use `next/image` for all images — compression, lazy loading, and format optimization are automatic
- Use `next/font` for typography — no layout shift, no external request on render
- Metadata API (`export const metadata`) for per-page SEO — not `<Head>` tags

---

### Alternate Stack Notes

If the client or agency has a strong preference or constraint, the plan can adapt:

| Alternate | When to consider | Key difference from default |
|---|---|---|
| Astro + React | Very content-heavy, minimal interactivity | Better for near-zero JS sites; less flexible for interactive components |
| Remix + React + Tailwind | Needs server-side form handling, progressive enhancement | Similar architecture; stronger form/mutation story |
| SvelteKit | Team prefers Svelte | Smaller bundle; less ecosystem maturity for component libraries |
| Plain HTML/CSS + Alpine.js | Absolute minimal build; client doesn't need React | Works for very simple 3–5 page brochure sites with no dynamic features |

**Default unless stated otherwise.** Do not switch stacks to satisfy novelty. Switch only when there is a genuine technical reason.

---

## Part 2: Technical Architecture

### Architecture overview

This is a **composition-based server-rendered architecture** with selective client-side interactivity.

```
App (layout.tsx)
  ↓ Global providers (if needed — minimal)
  ↓ Header/Navigation (server component, with client MobileNav)
  ↓ Page (server component — each page in app/[route]/page.tsx)
       ↓ Section components (server or client depending on interactivity)
            ↓ UI primitives (Button, Card, StarRating, etc.)
  ↓ Footer (server component)
```

### Component layer definitions

**Layer 1 — Layout components** (`components/layout/`)
- Render on every page via `app/layout.tsx`
- Examples: Header, Footer, MobileNav, Navigation
- Server components by default. MobileNav is client component (toggle state).

**Layer 2 — Section components** (`components/sections/`)
- Reusable sections used across multiple pages
- Examples: Hero, TestimonialsSection, CTASection, TrustBar, ContactForm
- Server by default. ContactForm is client component (form state).
- Props-driven: accept content from data files via the page component

**Layer 3 — UI primitives** (`components/ui/`)
- Smallest reusable elements
- Examples: Button, Card, Badge, StarRating, SectionWrapper
- Purely presentational. No data fetching. Server or client depending on interaction.

**Layer 4 — Page-specific components** (`app/[route]/components/` if needed)
- One-off components used only on a specific page
- Only create if the component is genuinely not reusable anywhere else
- Examples: an elaborate About page timeline, a gallery grid used only on `/gallery`

### Where data flows

Data flows **down** from page to section:

```
data/pages/home.ts  →  app/page.tsx  →  <Hero data={hero} />
data/testimonials.ts  →  app/page.tsx  →  <TestimonialsSection items={testimonials} />
data/services.ts  →  app/services/page.tsx  →  <ServicesGrid services={services} />
```

Page components import from `data/` and pass props to section components. Section components do not import data directly (except through props or server-side data access where justified).

---

## Part 3: Routing and Page Architecture

Match `03-sitemap` exactly. Every page in the sitemap becomes a file at `app/[url-path]/page.tsx`.

```
Sitemap URL       →  App Router file
/                 →  app/page.tsx
/about            →  app/about/page.tsx
/services         →  app/services/page.tsx
/services/[slug]  →  app/services/[service-slug]/page.tsx
/gallery          →  app/gallery/page.tsx
/contact          →  app/contact/page.tsx
/thank-you        →  app/thank-you/page.tsx
/privacy-policy   →  app/privacy-policy/page.tsx
/service-areas/[slug] → app/service-areas/[city-slug]/page.tsx
```

**Dynamic routes:**
- Service pages with multiple services: use `[service-slug]` dynamic route
- City/service-area pages: use `[city-slug]` dynamic route
- Generate statically using `generateStaticParams()` from the service or city data array

**Layout inheritance:**
- `app/layout.tsx` → root layout: Header + Footer, font loading, global metadata base
- `app/(legal)/layout.tsx` → optional group for legal pages with simplified layout (no hero, no nav CTA)
- Do not create separate layouts unless there is a genuine layout difference

---

## Part 4: Styling Integration

**Tailwind configuration** (`tailwind.config.ts`):
Map the design system directly into Tailwind:
- `theme.extend.colors` → all named color roles from the design system
- `theme.extend.fontFamily` → defined typefaces
- `theme.extend.spacing` → custom spacing scale if beyond defaults
- `theme.extend.borderRadius` → design system radius values
- `theme.extend.boxShadow` → design system shadow definitions
- `theme.extend.fontSize` → full type scale as named tokens

**CSS custom properties** (`globals.css`):
Define color roles as CSS variables for semantic use:
```css
:root {
  --color-primary: [value from design system];
  --color-text-primary: [value];
  /* etc. */
}
```

**Component styling approach:**
- Use Tailwind utility classes directly in JSX
- Use `cn()` utility (from `clsx` + `tailwind-merge`) for conditional class logic
- Do NOT use CSS Modules unless there is a specific conflict that can't be resolved with Tailwind
- Do NOT use styled-components or emotion — adds unnecessary runtime overhead

---

## Part 5: Responsive Implementation

**Breakpoints (Tailwind defaults — use these unless design system specifies otherwise):**
- `sm`: 640px (rarely used for site-level layout breakpoints)
- `md`: 768px (tablet — common column-to-stack breakpoint)
- `lg`: 1024px (desktop starting point for multi-column layouts)
- `xl`: 1280px (content max-width threshold)

**Core responsive patterns:**
- **Mobile-first:** Write base classes for mobile, add `md:` and `lg:` modifiers for larger screens
- **Grid stacking:** Single column mobile → multi-column desktop. Use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Typography scaling:** Tailwind responsive text sizes (`text-3xl md:text-4xl lg:text-5xl`)
- **Spacing scaling:** Section padding reduces on mobile (`py-12 md:py-16 lg:py-24`)
- **Navigation:** Desktop horizontal nav + mobile hamburger. Two separate states, not CSS-only toggle (use `useState` in client component)
- **Images:** Always use `next/image` with `fill` + `sizes` prop for responsive image behavior
- **CTA buttons:** Full-width on mobile (`w-full md:w-auto`)
- **Before/after slider:** Must be touch-compatible on mobile

---

## Part 6: Animation Implementation

Translate design system motion rules into technical constraints:

**For "Subtle" motion level (default):**
- Scroll-triggered reveal: Use CSS `@keyframes` + `IntersectionObserver` via a lightweight custom hook, OR use `framer-motion` with `whileInView` for simpler implementation
- Fade-in on scroll: `opacity-0 translate-y-4` → `opacity-100 translate-y-0` on intersection
- Button hover: Tailwind `transition-colors duration-200` — no JS needed
- Mobile nav: Tailwind `transition-transform duration-250` on the drawer element

**Recommended animation library decision:**
- **No library (CSS + IntersectionObserver):** Preferred for minimal builds where only fade-in is needed
- **Framer Motion:** Use when more than 2 animation types are needed, or when exit animations are required (mobile nav, modals)
- **Do NOT use:** GSAP (overkill), anime.js (unnecessary), React Spring (more complex API for no benefit on simple sites)

**Required behavior:**
- All animations must respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```
  OR handle in the animation hook/component with `useReducedMotion()`

**Animation constraints:**
- No looping animations in production
- No auto-play video backgrounds
- Page transition: none by default (Next.js page transitions require extra setup — skip unless explicitly requested)
- Do not add entrance animations to every element — only to sections and key components on initial scroll entry

---

## Part 7: SEO and Metadata Implementation

**Per-page metadata (Next.js App Router):**
```typescript
// app/[page]/page.tsx
export const metadata: Metadata = {
  title: '[Page Title] | [Business Name]',
  description: '[Page description — 140–160 chars]',
  openGraph: {
    title: '[Page Title]',
    description: '[OG description]',
    images: [{ url: '/og/[page].jpg', width: 1200, height: 630 }],
  },
};
```

**Global metadata base** (`app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('[site-url]'),
  title: { template: '%s | [Business Name]', default: '[Business Name] — [Tagline]' },
  // ...
};
```

**Required per page:**
- `<title>` — unique per page, includes business name
- `<meta name="description">` — unique, 140–160 chars, includes primary keyword
- OG title + description + image
- Canonical URL (Next.js handles this automatically with App Router if not overridden)

**Local SEO additions (when applicable):**
- `LocalBusiness` JSON-LD schema on homepage and contact page
- `Service` schema on individual service pages
- `BreadcrumbList` schema on service and city sub-pages
- Implement as a `<SchemaOrg>` component that renders a `<script type="application/ld+json">` tag
- Place schema components as last children in the page, before closing `</body>`

**Semantic markup requirements:**
- `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` as appropriate
- Only one `<h1>` per page
- Heading hierarchy: `h1` → `h2` → `h3` — never skip levels
- `<ul>` / `<li>` for nav links and list content
- `<address>` for contact information

---

## Part 8: Integration Approaches

### Contact Form
- Default: server action (Next.js App Router) + Resend for email delivery
- No database required for simple lead forms
- Client component with React Hook Form for validation
- Submit → server action → Resend API → redirect to `/thank-you`
- Honeypot field for basic spam prevention

### Booking Widget
- Default: embed third-party widget (Calendly, Acuity, Mindbody, Vagaro, Square Appointments)
- Embed as `<iframe>` or via the provider's JavaScript snippet in a client component
- Do NOT build custom booking logic unless the provider has no embed option
- Style the container — cannot style the widget itself

### Maps
- Default: Google Maps embed (iframe) for simple location display
- For interactive maps: `@vis.gl/react-google-maps` or `react-leaflet` if more control is needed
- Always lazy-load the map (below the fold — use `loading="lazy"` on iframe)

### Analytics
- Google Analytics 4: via `@next/third-parties/google` (official Next.js package)
- No manual script injection needed
- Place in `app/layout.tsx`
- Add conversion event tracking in the form submit success handler

### Live Chat
- Embed provider script in a client component
- Lazy-load: only initialize after first user interaction or after 3 seconds
- Do not block page render

### Before/After Slider
- Use a lightweight custom implementation with `useState` + mouse/touch event handlers
- Avoid heavy libraries for a simple drag-to-reveal slider
- Two images stacked, clip-path controlled by a state value
