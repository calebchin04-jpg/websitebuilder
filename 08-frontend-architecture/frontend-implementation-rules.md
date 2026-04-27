# Frontend Implementation Rules

This file defines responsive implementation rules, styling integration discipline, motion/interaction architecture, accessibility expectations, performance guard-rails, feature module integration, and the frontend/backend boundary.

---

## Part 1: Responsive Implementation Rules

**Mobile-first is the default. Not "responsive." Not "works on mobile." Mobile-first.**

This means:
- Write base Tailwind styles for mobile viewport first
- Add responsive modifiers (`md:`, `lg:`) to adapt upward for larger screens
- Never write desktop layout first and patch it downward

**The wrong approach:**
```tsx
// Desktop-first — banned
<div className="grid grid-cols-3 max-md:grid-cols-1">
```

**The correct approach:**
```tsx
// Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

**Breakpoint discipline:**

Use a consistent set of breakpoints aligned with the design system. Default Tailwind breakpoints are appropriate:
- `sm` (640px): minor adjustments — type size, padding tweaks
- `md` (768px): primary layout changes — stacking to side-by-side, nav changes
- `lg` (1024px): full desktop — max content widths, expanded components
- `xl` (1280px): wide desktop — content max-width cap, generous whitespace

**Rules:**
- Most layout changes happen at `md` — this is where stacked → side-by-side transitions occur
- Use `sm` sparingly — avoid having many `sm:` modifiers that are very close to the default mobile styles
- Do not use pixel values for custom breakpoints inside components — if the design system does not define a breakpoint, it does not exist
- Never use `@media` queries directly in component files — all responsive behavior goes through Tailwind utility classes

---

**Section stacking behavior:**

Every section component must specify how it stacks on mobile. "It uses a grid so it will stack automatically" is not a specification.

Required decisions per section:
- What order do elements appear in on mobile? (text before image? CTA before description?)
- How does a 3-column grid become a 1-column list on mobile?
- Does the section's visual treatment change on mobile (full-bleed image vs. contained image)?
- Are any elements hidden on mobile that are visible on desktop? (justify it — hiding useful content for screen size is usually wrong)

**Component width and container discipline:**

Use a consistent `PageContainer` or `SectionWrapper` layout component that enforces:
- Max content width (typically `max-w-6xl` or `max-w-7xl` with `mx-auto`)
- Consistent horizontal padding on all viewports (`px-4 sm:px-6 lg:px-8`)
- Sections never set their own max-width independently — they rely on the shared container

This prevents the common failure where sections have slightly different max-widths, creating misaligned content edges.

---

**Navigation responsiveness:**

The `SiteHeader` component must explicitly handle:
- Desktop: horizontal nav with primary CTA button
- Mobile: hamburger menu trigger + full-screen or drawer navigation
- Sticky header behavior: explicitly specified (scroll behavior, height change, shadow)
- The primary CTA must remain accessible on mobile — it cannot be inside the hamburger menu only

Mobile nav is a client component (it has open/close state). The header shell itself can be a server component if the nav state is isolated.

---

**Typography responsiveness:**

Font sizes should use the design system's type scale, applied with responsive modifiers:
```tsx
// Section heading example
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
```

Rules:
- Do not set font sizes with arbitrary pixel values — use the Tailwind type scale
- Headings must wrap gracefully on mobile — test H1 at 375px and ensure no more than 3 lines
- Body text should not be smaller than `text-sm` on mobile

---

## Part 2: Styling Integration Discipline

**How Tailwind utilities should be applied:**

Tailwind utilities are applied directly in JSX. This is intentional and correct for this system. However, long utility strings need management:

**For complex, reusable class patterns — use a `cn()` utility:**
```typescript
// lib/utils/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This prevents Tailwind class conflicts when composing variants.

**For section-level styling consistency — use `SectionWrapper` props:**
Rather than each section independently setting background colors and padding:
```tsx
<SectionWrapper background="white" padding="standard">
  {/* section content */}
</SectionWrapper>
```

**Anti-drift rules:**
- Do not use arbitrary value Tailwind syntax (`text-[17px]`, `mt-[43px]`) except for values that genuinely cannot be represented with the design system's scale
- Do not add custom CSS classes for patterns that Tailwind already handles
- If the same utility combination appears in 5+ components, consider whether it belongs in `globals.css` as a `@apply` pattern — but use this sparingly
- Never write inline `style={{}}` props for layout or color unless a specific dynamic value is required

---

## Part 3: Motion and Interaction Architecture

This system uses restrained, tasteful motion. The architecture must support this without encouraging excess.

**Client component boundary for animation:**

Animation that triggers on scroll or on user interaction requires a client component. Mark these explicitly:
```tsx
'use client'

// ScrollReveal.tsx — wraps children with a reveal animation
export function ScrollReveal({ children }: { children: React.ReactNode }) { ... }
```

Usage: sections can import `ScrollReveal` as a wrapper without becoming client components themselves.

**Framer Motion or CSS transitions:**
- Simple transitions (hover, focus, opacity): CSS only via Tailwind (`transition-colors`, `hover:opacity-90`)
- Scroll-triggered reveals: Framer Motion or Intersection Observer — isolated in wrapper components
- Page transitions: minimal — avoid full-page animations that slow perceived navigation
- No auto-play video backgrounds, parallax, or animated gradients unless explicitly specified in the design system

**Animation architecture rules:**
- Animation wrappers live in `components/ui/` or `lib/motion/` — not scattered in section files
- Sections do not define their own animation logic — they use wrapper components
- If more than 3 sections use the same animation behavior, extract it to a shared wrapper
- The `prefers-reduced-motion` media query must be respected — wrap all motion utilities with a reduced-motion check

---

## Part 4: Accessibility Implementation Expectations

Accessibility is structural, not optional bolt-on work.

**Semantic structure:**
- One `<h1>` per page — set in the page composition, not in multiple sections
- Section headings follow a clear H2 → H3 → H4 hierarchy — no skipping levels
- `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` used semantically
- Section landmarks have accessible names when more than one of the same type exists on a page: `<section aria-label="Our Services">`

**Interactive components:**
- All interactive UI components accept and forward `className` and `aria-*` props
- `Button` component renders as `<button>` by default, `<a>` when `href` is provided
- Never use `<div onClick>` where a `<button>` is semantically correct
- Focus styles must be visible — `outline-none` is banned without a visible replacement
- Focus ring: `focus-visible:ring-2 focus-visible:ring-[brand-color] focus-visible:outline-none`

**Navigation:**
- Mobile nav must be keyboard-accessible — focus trap when drawer is open, escape key closes
- Skip-to-main-content link is required: `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>`
- Active nav states must be visually and programmatically indicated: `aria-current="page"`

**Forms:**
- All form inputs have associated `<label>` elements — not just placeholder text
- Error states communicate both visually and via `aria-describedby`
- Required fields use `aria-required="true"` in addition to visual indication

**Images:**
- Decorative images: `alt=""`
- Informative images: descriptive alt text that explains what the image communicates, not just what it shows
- `next/image` enforces this via required `alt` prop

**Reduced motion:**
```tsx
// lib/utils/motion.ts
export const motionPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
  }
}

// Apply conditionally:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

---

## Part 5: Performance Guard-Rails

**Server components are the default.** Client components are the exception — only when the component needs:
- Browser APIs
- Event listeners
- `useState` or `useEffect`
- Third-party interactive libraries

If a component is purely rendering data and markup, it is a server component. Do not add `'use client'` without a specific reason.

**Image performance:**
- Use `next/image` for all images — it handles WebP conversion, lazy loading, and responsive sizes
- Set `priority={true}` only for above-the-fold images (hero image, LCP candidate)
- Provide accurate `width` and `height` props to prevent layout shift
- Use `sizes` prop for responsive images in grids or flexible containers

**Third-party integrations:**
- Google Maps iframes: lazy-load — do not block initial render
- Review widgets: evaluate performance cost before adding. Static review data rendered as HTML is usually better than a third-party widget
- Chat widgets: load after page interaction (user scroll or delay), never blocking
- Analytics scripts: load in `next/script` with `strategy="afterInteractive"` or `strategy="lazyOnload"`

**Bundle discipline:**
- Do not import heavy libraries at the page level — import at the component level to enable tree-shaking
- Check bundle size when adding a new dependency: `@next/bundle-analyzer`
- Avoid lodash full-import: use specific imports or native equivalents
- Avoid moment.js: use date-fns or native Intl

---

## Part 6: Feature Module Integration Rules

Feature modules are optional additions. They should plug into the architecture without touching the base site structure.

**Feature module isolation:**
- Each feature lives in `components/features/[feature-name]/`
- Feature components import from `components/ui/` but not from other features
- Features do not modify base layout components
- Feature data lives in `data/features/[feature-name].ts`

**Feature toggle pattern:**
When a feature is optional per-project, use a config flag rather than commenting out code:
```typescript
// data/config/features.ts
export const featureFlags = {
  gallery: true,
  booking: false,
  chat: false,
  localSeoLocationPages: true,
}
```

Pages and layout components check feature flags before rendering feature sections:
```tsx
import { featureFlags } from '@/data/config/features'

{featureFlags.gallery && <GallerySection items={galleryData} />}
```

**Feature module integration points:**
- Features are added to page compositions explicitly — the homepage explicitly includes the gallery section if gallery is enabled
- Features are never auto-injected into page templates via global config loops
- A feature that is disabled leaves no dead code paths in rendered output

---

## Part 7: Frontend / Backend Boundary

**Frontend owns:**
- All UI rendering and layout
- Form markup and client-side validation
- Displaying data from data files or CMS
- Integration shells for hosted third-party tools (booking widgets, chat, payment forms)
- Static or ISR-rendered pages from confirmed data sources

**Frontend does not own:**
- Server-side form handling — form submissions go to a backend API route or a hosted form service (Formspree, Resend, etc.)
- Payment processing — handled by Stripe hosted forms or equivalent; the frontend only embeds the integration
- Booking availability logic — handled by the booking platform API; the frontend renders the widget
- Authentication and session management — belong to backend architecture
- Database queries — even in Next.js Server Components, database logic belongs to `09-backend-architecture`

**API routes in Next.js:**
`app/api/` routes are the boundary. Frontend components call API routes; API routes handle server-side logic.

- Form submissions: `app/api/contact/route.ts` — validates and forwards to email service
- This is still considered "frontend" in a Next.js context, but the logic belongs to the backend architecture agent when it is more complex than a simple API relay

**Hosted tool integration rules:**
- Booking widgets, chat platforms, and review aggregators are embedded via script tags or iframe wrappers
- These integrations are isolated in `components/features/` — they do not affect base component structure
- If a hosted tool requires specific HTML structure in the page, that structure lives in a feature component, not in the page template directly
- Do not build custom booking or payment logic from scratch when a hosted solution exists — flag the integration boundary clearly and leave it to `09-backend-architecture`
