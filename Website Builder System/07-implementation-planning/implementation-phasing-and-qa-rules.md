# Implementation Phasing and QA Rules

This file defines how to structure the 5-phase build plan, what gets built in each phase, how to define page implementation order, and what QA and launch-readiness criteria must be met.

---

## Part 1: Page Implementation Order

Build pages in this priority sequence:

1. **Homepage** — the most complex page; establishes the pattern for everything else
2. **Primary service page(s)** — next highest conversion impact; tests service template pattern
3. **Contact / CTA destination** — must be functional early for testing the full conversion path
4. **About page** — relatively simple, needed for complete trust path testing
5. **Services overview** (if separate from individual pages)
6. **Gallery** (if applicable) — image-heavy, good to build early to surface asset issues
7. **Remaining service pages** — template already established, fast to complete
8. **City/service-area pages** — template-based, build after service template is confirmed
9. **Thank-you / confirmation page** — simple, needed before form testing
10. **FAQ, Blog, other supporting pages** — lowest conversion priority
11. **Legal pages** (Privacy Policy, ToS) — minimal content, last

This order ensures the highest-conversion pages are functional and testable early, template patterns are established before templated pages are built in bulk, and assets are tested against real pages before final polish.

---

## Part 2: The 5-Phase Build Plan

### Phase 1 — Foundation

**What gets built:**
- Project scaffold: `next create`, install Tailwind, configure TypeScript
- `tailwind.config.ts` — design system tokens mapped from `06-design-system`
- `globals.css` — CSS custom properties, base typography reset, Tailwind directives
- `data/site.ts` — global site config
- `data/navigation.ts` — nav and footer structure
- `app/layout.tsx` — root layout with Header and Footer shell (unstyled)
- `components/ui/SectionWrapper.tsx` — spacing + background container primitive
- `components/ui/Button.tsx` — all variants implemented
- `next.config.ts` — image domains, redirects if needed
- `public/` — image folders created, favicon placed

**Dependencies:** None — this is the foundation everything else depends on.

**Success criteria:**
- `next dev` runs without errors
- Tailwind config loads design system tokens correctly (verify with test class)
- Button component renders all variants correctly
- Layout shows header and footer shell on all routes

---

### Phase 2 — Shared Components

**What gets built:**
- `components/layout/Header.tsx` — fully styled desktop nav + logo + CTA button
- `components/layout/MobileNav.tsx` — hamburger + drawer, animated, accessible
- `components/layout/Footer.tsx` — fully styled with all columns and links
- `components/ui/StarRating.tsx` — SVG star row
- `components/ui/Card.tsx` — base card with variants
- `components/ui/Badge.tsx` — tag/label/chip
- `components/sections/TrustBar.tsx` — review count + star rating
- `components/sections/CTASection.tsx` — standalone CTA band (all variants)
- `components/sections/TestimonialsSection.tsx` — testimonial grid
- `components/sections/ContactForm.tsx` — form with server action + Resend
- `data/testimonials.ts` — testimonial data populated
- `lib/actions.ts` — form server action

**Dependencies:** Phase 1 must be complete (tokens, Button, SectionWrapper).

**Success criteria:**
- All shared components render correctly on a test page
- ContactForm submits → Resend delivers email → redirect to `/thank-you`
- Mobile nav opens/closes correctly with keyboard accessibility
- No layout shift on desktop or mobile for Header

---

### Phase 3 — Pages

**Build in page implementation order (see Part 1).**

For each page:
- Create `app/[route]/page.tsx`
- Create page data file in `data/pages/[page].ts`
- Compose page from shared sections + any page-specific components
- Export correct metadata
- Add schema markup if applicable (homepage, contact, service pages)

**For templated pages (services, cities):**
- Build the template fully for one instance first
- Confirm it's correct before generating remaining pages from the same pattern
- Use `generateStaticParams()` for dynamic routes

**Dependencies:** Phase 2 must be complete (shared sections available to compose).

**Success criteria:**
- All pages render without errors
- All internal links navigate correctly
- All pages have unique metadata (title + description)
- All dynamic route pages generate correctly from data arrays
- Forms work on all pages that have forms
- All images display with correct aspect ratios on desktop and mobile

---

### Phase 4 — Polish

**What gets built:**
- Scroll-triggered animations added to section reveals
- Hover states verified across all interactive elements
- Spacing and typography reviewed against design system on all pages
- Mobile layout reviewed at 375px, 430px, 768px
- Before/after slider finalized and tested on mobile
- Gallery grid finalized with image loading behavior
- Footer spacing and link alignment finalized
- Trust bar and guarantee badge visual refinement
- OG images created and tested with social preview tools
- Favicon and browser tab title verified
- Loading performance check (Lighthouse)
- Analytics events verified

**Dependencies:** Phase 3 must be complete.

**Success criteria:**
- All pages pass design system visual review
- No broken hover states or missing transitions
- All mobile breakpoints look correct
- Lighthouse performance score ≥ 85 on mobile
- OG images render correctly in social preview

---

### Phase 5 — QA and Launch Checks

Run the full QA checklist defined in Part 3 below.

**Dependencies:** Phase 4 must be complete.

**Success criteria:** All QA items pass or have documented exceptions approved by the team.

---

## Part 3: QA Criteria and Acceptance Checklist

### Technical

- [ ] All pages load without JS errors in browser console
- [ ] All internal links work (no 404s)
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] Contact form submits correctly and delivers email
- [ ] Thank-you redirect works after form submission
- [ ] `generateStaticParams` generates all expected dynamic pages
- [ ] No `console.warn` or `console.error` outputs in production build
- [ ] `next build` completes without errors
- [ ] No TypeScript errors

### Content

- [ ] Business name, phone, and address are correct throughout
- [ ] All service names match what the client approved
- [ ] All testimonials use real names and accurate content
- [ ] Before/after photos are labeled correctly
- [ ] All CTAs use the correct label and destination URL
- [ ] No placeholder text ("Lorem ipsum," "[Service Name]," etc.) remains

### Design System

- [ ] Typography scale matches design system on all pages
- [ ] Color roles are applied correctly (primary CTA = primary color, etc.)
- [ ] Card styles are consistent across all uses
- [ ] Button variants are consistent
- [ ] Section spacing rhythm is consistent
- [ ] No design system violations (anti-AI design check passed)

### Responsive

- [ ] Homepage renders correctly at 375px, 768px, 1024px, 1280px
- [ ] All pages render correctly at 375px minimum
- [ ] Navigation menu works on mobile (open/close, keyboard accessible)
- [ ] Hero image aspect ratio is correct on mobile
- [ ] Before/after slider works on touch devices
- [ ] All forms are usable on mobile
- [ ] Tap targets are at least 44×44px on mobile

### Accessibility

- [ ] One `<h1>` per page, heading hierarchy correct
- [ ] All images have meaningful `alt` text (or `alt=""` for decorative images)
- [ ] All form inputs have visible labels
- [ ] Focus states are visible on all interactive elements
- [ ] Color contrast passes minimum 4.5:1 for body text
- [ ] `aria-label` on icon-only buttons (hamburger menu, close button)
- [ ] `prefers-reduced-motion` is respected

### SEO

- [ ] Every page has a unique `<title>` and `<meta description>`
- [ ] OG tags are present on all pages
- [ ] `LocalBusiness` JSON-LD schema is on homepage and contact page
- [ ] `Service` schema is on each individual service page
- [ ] Canonical URLs are correct
- [ ] `robots.txt` exists (Next.js can generate via `app/robots.ts`)
- [ ] `sitemap.xml` is generated (Next.js can generate via `app/sitemap.ts`)
- [ ] No duplicate title tags across pages

### Integrations

- [ ] Contact form delivers to the correct email address
- [ ] Booking widget (if active) loads correctly and is functional
- [ ] Map (if active) loads and shows correct location
- [ ] Analytics events fire correctly (form submit, click-to-call)
- [ ] Google Analytics is tracking page views in GA4 dashboard

### Performance

- [ ] Lighthouse mobile performance score ≥ 85
- [ ] Largest Contentful Paint (LCP) ≤ 3.5s on mobile (target ≤ 2.5s)
- [ ] No render-blocking resources
- [ ] All images are served in modern format (WebP/AVIF via `next/image`)
- [ ] No unused large JavaScript bundles (check with `next build` bundle analysis)

---

## Part 4: Launch Readiness Checklist

Pre-launch items beyond QA:

- [ ] DNS is configured and pointing to hosting
- [ ] SSL certificate is active
- [ ] Production environment variables are set (Resend API key, Analytics ID, etc.)
- [ ] Google Search Console domain is verified
- [ ] Google Business Profile is linked/updated with new site URL
- [ ] Google Analytics 4 property is connected
- [ ] `next.config.ts` has correct production configuration
- [ ] Redirect rules are in place for any changed URLs (if redesign)
- [ ] A backup or version-control state exists before go-live
- [ ] Client has reviewed and approved final content
- [ ] Click-to-call links tested on a real phone
- [ ] Form submission tested end-to-end (submit → email received → thank-you page)
