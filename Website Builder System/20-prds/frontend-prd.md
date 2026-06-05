# Frontend PRD
## Website Builder System — Frontend Reference Document

**Version:** 1.0  
**Scope:** Frontend product layer — all client-site builds produced by this system  
**Not a client document. Not a design-system file. Not a coding tutorial.**

---

## 1. Document Purpose

This PRD defines the frontend product standard for the website-builder system. It is the durable reference document for what the user-facing website layer is trying to produce, how it should behave, what quality bar it must meet, and what principles all later build and coding stages must inherit.

**Where it fits:**  
This document sits between the earlier upstream stages (discovery, planning, sitemap, wireframes, brand direction, design system, implementation planning) and the later execution stages (feature agents 10–17, build, QA, revisions). It does not replace those stages. It synthesizes what they mean for the frontend and makes the standard explicit and reusable across every client build.

**What it is not:**  
It is not a design-system token file. It is not a backend architecture document. It is not a client brief or page-by-page wireframe. It is not a coding tutorial. It is the product thinking layer between strategy and execution.

---

## 2. Product Context

This system produces done-for-you websites for local service businesses and adjacent business/client website types. The agency operates the system. The client is a business owner who needs a credible, trustworthy, conversion-ready website. The end user is a local homeowner, resident, or customer deciding whether to contact or hire the business.

**Target business types include (but are not limited to):**
- Home services and remodeling contractors
- Cleaning, landscaping, painting, roofing trades
- Local professional services (law, finance, accounting, consulting)
- Healthcare and wellness (dentists, therapists, chiropractors, med spas)
- Salons, barbers, fitness studios
- Restaurants, hospitality, retail
- Creative services (photographers, designers, architects)
- Any local or regional business where the website's job is to convert a visitor into a lead, booking, or contact

**What this system is not for:**
- Drag-and-drop SaaS builders
- No-code end-customer editors
- Flashy startup landing pages
- Dashboard-first app products
- Generic theme packs
- E-commerce platforms

**Scale of a typical build:**  
5–12 pages, 8–20 components, 1–3 optional feature modules, no app-like behavior, clean mobile-first execution, editable by the agency without rebuilding from scratch.

---

## 3. Frontend Mission

The frontend of this system exists to help a local business appear credible, trustworthy, and worth contacting — and then make that contact as easy as possible.

This is not decoration. This is not a portfolio piece. This is not a showcase of technical capability. The frontend is a conversion instrument built on trust.

**The frontend must make the visitor believe:**
- This business is real, local, and established
- The work quality is genuinely good
- The process is clear and not scary
- The next step is obvious and low-risk
- Contacting this business is safe and worth doing

Every frontend decision — layout, typography, component structure, copy placement, interaction — should be weighed against that mission first.

**The mission in one sentence:**  
Produce a frontend that earns trust, makes the offer clear, and converts visits into contact attempts — without feeling generic, generated, or gimmicky.

---

## 4. Core Frontend Principles

These are the stable principles the frontend must follow across every build. They do not change per client. Individual builds will differ in palette, content, and feature set — but these principles remain constant.

**P1 — Clarity before cleverness**  
The visitor should understand what the business does, who it serves, and what to do next within the first scroll. No amount of visual polish compensates for unclear communication.

**P2 — Trust before conversion**  
The frontend does not push people toward action. It earns the confidence that makes people want to act. Proof (reviews, photos, named people, specific claims) is infrastructure, not decoration.

**P3 — Mobile-first, not mobile-also**  
Mobile is the primary design surface. Desktop is the expanded version. Every layout decision must be made for mobile first, and every component must be tested against thumb-reachability and readability on a 390px screen.

**P4 — Content drives structure, not the reverse**  
Section layout, component choice, and page hierarchy should emerge from what the business needs to communicate — not from what looks interesting in a layout grid.

**P5 — Restraint is premium**  
The best-looking business websites are not the most decorated. They are the most edited. Less animation. Less visual complexity. Cleaner type. More whitespace. More confidence.

**P6 — Real feels better than polished**  
Named founders, real project photos, specific neighborhood references, and honest review counts create more trust than perfect visual design. The frontend must support and amplify authenticity rather than bury it under visual noise.

**P7 — Editable by the agency, predictable for the client**  
The system produces sites that the agency can maintain and update without rebuilding. Component structure, data organization, and naming conventions must be consistent enough that a second build is faster than the first.

**P8 — Features earn their place**  
Every feature added to a client site must justify its existence relative to the business's conversion model. A gallery is not included because galleries exist. A booking module is not included because it looks advanced. Only justified features ship.

---

## 5. Quality Bar

**What "good" means in this system:**

A frontend output passes quality review when a first-time visitor could land on any page, immediately understand the business, trust it enough to consider contacting them, and find the contact action within one intentional interaction.

**Specific quality indicators:**

| Area | Standard |
|---|---|
| First impression | Clear headline, visible trust signal, obvious CTA above the fold on mobile |
| Visual hierarchy | Headings, body text, and CTAs are clearly differentiated in weight and scale |
| Typography | Custom type scale — not browser defaults. Tight tracking on headings. Relaxed line-height on body. |
| Color | Brand-specific palette with sufficient contrast. No generic blue or neutral gray corporate defaults. |
| Proof | At least one real, specific proof signal visible without scrolling on the homepage |
| Conversion path | A user can find the primary contact or booking action from any page in ≤2 clicks |
| Mobile usability | Phone number tappable in header. CTA buttons full-width. Form usable with thumbs. |
| Content specificity | No placeholder copy renders. Business-specific content throughout. |
| Accessibility | Readable contrast, labeled forms, semantic heading hierarchy, no hover-only interactions |
| Anti-template | No pattern that could appear unchanged on a competitor's site |

**What "good" is not:**

- A technically functional site with generic copy
- A visually polished site with a broken mobile form
- A well-animated site where the value proposition is unclear
- A site that looks premium but feels AI-generated on closer reading
- A site with a broken license placeholder in the footer

---

## 6. UX and Conversion Philosophy

The frontend is not a hard-sell machine. It is an environment that earns confidence and removes friction. The goal is that when a visitor is ready to act, the path is obvious and the risk feels low.

**Conversion philosophy:**

**Clarity first.** If the visitor doesn't understand what the business does in the first 5 seconds, no CTA will save it.

**Trust before ask.** The primary CTA should appear after — not instead of — real proof. A CTA that appears before proof has been established asks the visitor to trust before they have reason to.

**Friction is the enemy of real conversions.** A complicated booking flow, a long form before the visitor is ready, or a contact process that requires too many steps will defeat conversions even on a well-designed site.

**Proof is not optional.** For local service businesses especially, reviews, project photos, named team members, specific claims (years in business, project count, warranty terms) are not decorative elements — they are the conversion mechanism. The frontend must place them where decisions happen.

**The next step must always be visible.** From any page on the site, a visitor should be able to find the primary conversion action without having to figure it out. This means CTAs are persistent (header), repeated at logical intervals, and obvious at page ends.

**CTA language matters.** "Get a Free Estimate" or "Book a Consultation" is better than "Submit" or "Contact Us." The CTA should describe what the visitor gets, not what they do.

**Trust signals near decisions.**  
- Trust cues (reviews, guarantee, warranty, license, credentials) must appear near CTAs
- Forms must include privacy reassurance and response-time expectations
- Success states must confirm the action and explain what happens next

**Process clarity reduces hesitation.**  
For most service businesses, explaining the first step removes the biggest anxiety: "I don't know what happens after I click this." A clear, honest 3–5 step process section reduces friction more effectively than any design choice.

---

## 7. Mobile-First Requirements

Mobile is the primary context. All layout and interaction decisions begin here.

**Navigation:**
- Mobile header must include: logo/wordmark, tap-to-call phone link, hamburger menu
- Primary CTA must be reachable from the mobile nav or header without opening the hamburger
- Mobile nav must not require multiple taps to reach any top-level page
- Sticky header is required — users must be able to call or navigate at any scroll position

**CTA buttons:**
- Full-width on mobile
- Minimum height: 48px (prefer 52px)
- Touch target: minimum 44×44px for all interactive elements
- Active state must be visually distinct (scale or background change)
- Loading/pending state must prevent double-tap submission

**Form usability on mobile:**
- All fields full-width on mobile
- `type="tel"` for phone, `type="email"` for email — correct keyboard types are required
- Labels must be persistent above fields — no floating labels that disappear
- Submit button full-width, minimum 52px height
- Error messages positioned immediately below the relevant field

**Section and content:**
- All sections stack to single-column on mobile unless explicitly designed as 2-column
- No side-by-side elements on mobile that compress readability
- Minimum font size: 14px for captions, 16px for body, 20px+ for section headings on mobile
- Spacing must not be so compressed that sections feel crowded on a 390px screen

**Proof and trust:**
- At least one trust signal must be visible above the fold on the homepage on mobile
- Phone number must be tappable (not just visible)
- Star rating must be readable at mobile scale (at least 16×16px per star)

**What mobile must not do:**
- Rely on hover states for any content that is meaningful proof or navigation
- Show captions, labels, or actions only on hover
- Use interactions that require precise pointer control
- Stack so many sections that the primary CTA is buried below 3+ screen-lengths of content
- Render text so small that contrast becomes effectively unreadable even if it technically passes

---

## 8. Page and Section Expectations

**Page-level expectations:**

Every page has a primary job. The content, sections, and CTAs on that page should serve that job — nothing more.

| Page | Primary job |
|---|---|
| Homepage | Establish trust and route visitors to their relevant service or contact |
| Service page | Convince a visitor this business can handle their specific project |
| About page | Humanize the business and establish credibility and longevity |
| Contact/estimate page | Convert a ready visitor into a submitted lead or call |
| Portfolio/gallery page | Show proof of real completed work |
| Service area pages | Establish local relevance for search and visiting users |
| Thank-you page | Confirm the action, set expectations, offer alternatives |

**Section hierarchy rules:**

- Every page must have exactly one H1
- H2s define major sections; H3s define sub-items within a section
- Do not use headings for visual sizing only — heading level must reflect content hierarchy
- Sections must not repeat the same proof type back-to-back (e.g., two consecutive testimonial sections)
- A CTA section at the bottom of every page is required, but its heading and subtext should vary per page

**Section sequencing principles:**

Pages should generally follow: establish context → deliver proof → explain next step → provide action.

Homepage example:
> Hero (what + who + why contact) → Trust bar (quick credibility) → Services (what's offered) → Differentiators (why us) → Gallery (visual proof) → Process (how it works) → Testimonials (social proof) → CTA (action)

Service page example:
> Hero (specific service + CTA) → Trust bar → Service description + scope → Testimonials (service-specific) → Process (project-specific) → FAQ → CTA

The pattern is: establish relevance → prove capability → reduce anxiety → request action.

**Trust placement rules:**
- At least one trust signal (review count, rating, years in business, warranty) must appear above the fold on the homepage
- Trust signals must appear adjacent to CTAs — not only in a dedicated trust section far from the conversion action
- On forms and contact pages, privacy reassurance must appear directly below the submit button
- Service pages must have visual proof (gallery images or hero photo) and social proof (testimonials) before the CTA at the bottom

**CTA rules:**
- Primary CTA must appear in the header (persistent)
- Primary CTA must appear once in the hero section
- Primary CTA must appear at the bottom of every page in a CTA section
- On long pages (service pages, about page), a secondary mid-page CTA is recommended
- CTAs in different placements may have different label text but must link to the same destination
- Never have a page that ends without a CTA

---

## 9. Component and Pattern Expectations

**Component philosophy:**
Components should be reusable, data-driven, and composable. No component should be built for a single use unless its complexity genuinely cannot be generalized. Components should accept props that represent business content — not raw style overrides.

**Core component types every build should use:**

| Component | Purpose |
|---|---|
| Hero | Page entry point — headline, subheadline, CTA, optional image |
| TrustBar / CredentialsBar | Quick credibility scan — ratings, years, projects, warranty |
| ServicesGrid | Service card set — image, name, description, link |
| TestimonialsSection | Social proof — real quotes, attribution, review source |
| ProcessSteps | How it works — numbered or lettered sequential steps |
| CTASection | Page-end conversion — heading, subheadline, button, reassurance |
| ContactForm | Lead capture — fields, validation, success state |
| GalleryGrid | Visual proof — filterable or static image grid |
| Header | Navigation — logo, nav, phone, mobile hamburger |
| Footer | Trust + navigation + contact + legal |

**Data-driven content architecture:**  
Every client-specific content item (headline, phone number, services, testimonials, portfolio images, service areas) should live in a centralized data layer — not hardcoded inside JSX. This is not optional. It is a system requirement that enables the agency to update content without touching component logic.

The data layer should follow this hierarchy:
- `data/site.ts` — global business config (name, phone, email, address, hours, reviews)
- `data/services.ts` — service definitions
- `data/testimonials.ts` — review content
- `data/service-areas.ts` — local coverage data
- `data/pages/*.ts` — page-specific content (hero copy, section headings, etc.)

**Component prop discipline:**
- Props should map to content concepts: `heading`, `subheading`, `items`, `cta`, `background`
- Props should not expose raw style tokens as strings — use semantic variants (`background: 'base' | 'surface'`, `variant: 'primary' | 'dark'`)
- Required content should be required props. Optional enrichment should be optional props with sensible defaults.

**Section alternation:**
Adjacent sections should alternate between `base` and `surface` backgrounds to create visual rhythm and separation without borders or dividers. Never use the same background for more than two consecutive sections.

**Pattern expectations:**

*Hero:*
- Home hero: full headline at display size, subheadline, primary + secondary CTA, review badge, guarantee line
- Page/service hero: smaller headline, subheadline, breadcrumb, primary CTA, optional hero image
- Never: overcrowded heroes with 3+ CTAs, badge stacks, or heavy animation

*Cards:*
- Consistent aspect ratio for image-top cards (4:3 preferred)
- Content hierarchy: image → heading → description → link/action
- Hover should only add subtle depth (scale-[1.03] or shadow increase) — never change content or layout on hover
- Never: cards with 3+ hover effects, cards that expand or morph on hover, cards in every section

*Testimonials:*
- Must include: quote, name, project type, location, star rating, review source
- Should include: specific project details that answer objections
- Never: vague praise ("Great work!"), anonymous quotes, fake-looking headshots
- The "Read all reviews" link must point to a verified, real review platform URL

*Forms:*
- Labels above inputs, always visible
- Inline error messages directly below the relevant field
- Submit button with pending state (spinner + disabled)
- Privacy note below submit button
- Honeypot spam protection
- Server-side validation (do not trust client-side only)

*Navigation:*
- Desktop: logo + nav links + phone + CTA button
- Mobile: logo + phone icon + hamburger
- Sticky: yes
- Dropdown: allowed for services, max 1 level deep
- Active state: required on current page

*Footer:*
- Required: business name, phone, email, address, hours, copyright, privacy policy
- Required: nav links organized by category (company, services, service areas)
- Required: no placeholder content renders in production (license numbers, URLs, names)
- Optional: social links, review badge, certifications

---

## 10. Content and Asset Handling

The agency will frequently begin a build before all final content and photos are available. The frontend must handle this gracefully without degrading to fake or misleading states.

**Placeholder discipline:**

A placeholder must never render as visible content in any deployment intended for public view. Placeholders are for development only.

Types of content that require real values before deployment:
- License and registration numbers
- Review platform URLs and social profile links
- Team member names and photos
- Business phone, email, and address
- Project photos and hero images
- Testimonial quotes and attribution

Types of content that can be temporarily approximate:
- Section heading copy (can be refined post-launch)
- Service descriptions (can be expanded post-launch)
- FAQ content (can be added iteratively)

**Image handling rules:**
- All images must use the framework's optimized image component (e.g., `next/image`)
- All images must have meaningful `alt` text — not empty, not filename, not "image"
- `sizes` prop must reflect the actual rendered width at each breakpoint
- Above-the-fold images must use priority loading
- Gallery and portfolio images should lazy load
- No image should be used as proof if it is stock photography presented as real work
- If a real photo is unavailable, use a transparent or neutral placeholder — never a stock photo in a proof context

**Content architecture:**
- All client-editable content must be in data files, not inside JSX
- A new developer or agency editor should be able to update the site's business name, phone, and services without touching component code
- Data files should be the single source of truth for: business config, services, testimonials, portfolio images, service areas, and page-level content

**Layout resilience:**
- Components must not break when optional fields are absent (no undefined crashes)
- Section headings with empty subheadings should render cleanly without empty `<p>` tags
- Image cards must gracefully handle missing images (background color fallback, not broken layout)
- Forms must function even if optional fields are absent from the data config

---

## 11. Feature Modularity Rules

**Core principle:**
Every feature is optional. Every feature must earn its place. A feature that is present on a build without justification creates maintenance overhead, page bloat, and diluted focus.

**Feature activation criteria:**

A feature should be included when:
- It directly supports the business's primary conversion model
- The business has the assets or content to support it (real photos, real reviews, real policies)
- Its absence would create a meaningful trust or usability gap
- It is proportionate to a marketing website, not an application

A feature should be excluded when:
- The business has no meaningful content for it
- It would require maintaining placeholder or fake content
- A simpler pattern achieves the same trust or conversion result
- Its complexity exceeds what the business can maintain

**Standard features (present in most builds):**
- Homepage, services, about, contact — always
- ServicesGrid — always if multiple services exist
- TestimonialsSection — always if real reviews exist
- ContactForm — always
- Footer with contact info — always
- ProcessSteps — recommended for any service business with a defined workflow

**Optional features (activated when justified):**
- GalleryGrid / portfolio page — justified for visual-proof businesses with real assets
- ServiceAreaMap — justified for geo-targeted local businesses
- Service area sub-pages — justified when local SEO is a priority
- FAQAccordion — justified when common objections exist and answers are specific
- BookingModule — justified when the business uses appointment scheduling
- BlogSection — justified when the business produces genuine content
- BeforeAfterSlider — justified only when matched image pairs exist
- PrivacyPolicy page — always include but may be minimal

**Feature interface contracts:**
Each optional feature must have a defined activation pattern:
- A feature that is not needed must be completely removed from the build (not hidden with CSS)
- A feature that is conditional must check for required data before rendering
- A feature must not render with placeholder or empty content

---

## 12. Accessibility Expectations

Accessibility is a baseline requirement, not a bonus feature. The following expectations apply to every build.

**Heading hierarchy:**
- Every page has exactly one H1
- H2 introduces major sections
- H3 introduces sub-items within a section
- Headings are never used solely for visual sizing

**Semantic structure:**
- `<nav>` for navigation (with `aria-label` if multiple nav regions exist)
- `<main>` for page content
- `<section>` with `aria-label` for major page sections
- `<article>` for self-contained items (testimonials, blog posts, service cards)
- `<footer>` for site footer
- `<address>` for business contact information
- `<blockquote>` and `<cite>` for testimonials
- `<ol>` for ordered steps, `<ul>` for unordered lists

**Forms:**
- Every input has a visible `<label>` associated via `for`/`id`
- Required fields use `aria-required="true"`
- Error messages use `role="alert"` or `aria-live` and are associated via `aria-describedby`
- Submit buttons have `aria-disabled` during pending state
- No placeholder-only labels

**Focus states:**
- All interactive elements must have a visible focus ring
- Default browser focus styles must not be removed without replacement
- Tab order must match visual reading order

**Touch targets:**
- Minimum 44×44px for all interactive elements
- This includes: navigation links, buttons, filter pills, file upload controls, close buttons

**Color and contrast:**
- Body text on background: minimum 4.5:1 contrast ratio
- Error states must not rely on color alone — include an icon or text indicator
- Placeholder text must meet minimum 3:1 contrast

**Motion:**
- Scroll-triggered animations must respect `prefers-reduced-motion`
- Animation must be disabled or reduced when the OS preference is set
- No animations that cause rapid flashing or persistent movement that cannot be stopped

**Images:**
- All meaningful images require descriptive alt text
- Decorative images use `alt=""`
- Gallery captions must not be `aria-hidden` if they contain proof information
- SVG icons used as interactive elements need accessible labels

**Interactive components:**
- Dropdowns and accordions must use `aria-expanded`
- Filter groups must use `role="group"` with `aria-label`
- Toggle buttons must use `aria-pressed`
- Modal/overlay components must trap focus and restore on close

---

## 13. SEO-Facing Frontend Expectations

The frontend is responsible for the structural and semantic layer that supports search visibility. Deep technical SEO is handled separately. The frontend must not undermine it.

**Page structure for SEO:**
- Every page has a unique, descriptive `<title>` tag (defined in data or page-level config)
- Every page has a `<meta name="description">` that is specific to that page
- H1 must contain the primary topic of the page (not a generic greeting)
- Internal links must use descriptive anchor text
- Service pages must contain the service type and city/region in the page content

**Local SEO support:**
- The business name, city, state, and service type must appear in body content — not only in metadata
- Service area pages should include neighborhood-level specificity when available
- Schema.org structured data must be present on: homepage (LocalBusiness or subtype), contact page (ContactPage), service pages (Service), and review sections (AggregateRating)
- The full business address must appear in the footer on every page

**Heading content for SEO:**
- H1 on service pages should follow the pattern: `[Service Type] in [City, State]`
- H1 on service area pages: `[Service Type] in [City], [State]`
- H2s should include natural-language phrases relevant to the service — not keyword-stuffed

**Metadata consistency:**
- OG image defined on homepage, service pages, and any page that may be shared
- `robots: { index: false }` on thank-you, admin, and any non-public pages
- No duplicate H1s across pages

**Internal linking:**
- Service pages should link to relevant gallery/portfolio examples
- Service area pages should link to relevant service pages
- The homepage should link to each primary service page
- Footer navigation should provide a full site link structure

**What SEO must not become:**
- City-stuffed content that reads unnaturally
- Keyword-heavy headings that read as spam
- Duplicate content across service area pages with only the city name swapped
- Schema markup with placeholder or incorrect values

---

## 14. Performance and Responsiveness Expectations

**Perceived performance:**
The frontend must feel fast. Users do not wait for slow local business websites — they leave. Performance is a conversion factor as much as it is a technical standard.

**Image performance:**
- All images rendered through the framework's optimized image component
- `priority` prop on above-the-fold images (hero, first gallery row)
- `loading="lazy"` behavior on all below-fold images
- `sizes` prop defined correctly for every image based on actual breakpoint rendering widths
- Format: the system handles WebP conversion automatically through the image component — raw JPEG/PNG inputs are acceptable
- No base64-inlined decorative images

**Animation and interaction:**
- Scroll-triggered reveal animations should be subtle (0.4–0.6s, translateY max 16px, opacity 0→1)
- Staggered animation delays should not exceed 4–5 items in a sequence
- No animations on page load that block reading the headline
- No entrance animations on elements the user has already scrolled past
- CSS transitions only for hover states (no JavaScript-driven micro-animations on standard components)
- No heavy third-party animation libraries for what can be achieved in CSS

**Responsiveness:**
- Layout must be tested at 390px (small phone), 768px (tablet), 1280px (desktop)
- No horizontal scroll at any viewport width
- All section content must be readable without zooming on 390px
- Touch targets meet 44px minimum at all breakpoints
- Grid breakpoints: `grid-cols-1 → sm:grid-cols-2 → lg:grid-cols-3` is the standard rhythm

**Third-party dependencies:**
- No heavy UI component libraries that add significant bundle weight without proportional value
- Maps: use embedded iframe (Google Maps embed) rather than a map SDK for simple service-area display
- Icons: inline SVG preferred over icon library imports; if using a library, use tree-shaking
- Analytics, chat widgets, and third-party scripts: deferred load, never render-blocking

**Bundle discipline:**
- `'use client'` directive only where client-side interactivity is genuinely required
- Default to server components for content rendering
- Forms: Server Actions preferred over client-side fetch for submissions
- Filter logic on small datasets (gallery filters, FAQ accordion): client-side `useState` is appropriate and does not require a server round-trip

---

## 15. Anti-Generic / Anti-AI Constraints

The system exists to produce websites that feel designed and intentional — not generated. This is a quality constraint, not an aesthetic preference. Generic-looking sites do not convert as well, do not build trust as effectively, and undermine the agency's premium positioning.

**Patterns the frontend must explicitly reject:**

*Visual design:*
- Over-glossy gradients as the primary visual motif
- Neon or technology-first palettes on service business sites
- Glassmorphism (frosted/blur card overlays) used without genuine purpose
- Floating abstract blob shapes as background decoration
- Shadow on every element — shadow should be used sparingly and for functional depth only
- Giant border radius on everything (rounded-3xl, full-pill cards) as a default
- Grid layouts with 4+ identical cards repeating the same visual pattern

*Content patterns:*
- Generic "Why Choose Us" sections with icon + one-line copy and no specific claims
- "We are dedicated to quality" or similar buzzword filler with no evidence
- Testimonial cards without attribution, project type, or specific detail
- Star ratings displayed without a real review platform link
- Review counts that are not tied to a verifiable source
- "Premium," "world-class," "industry-leading" claims without supporting proof

*UX patterns:*
- Hover-only content on any meaningful proof or navigation element
- Animation stacks where every element enters differently with no coherent rhythm
- Overcrowded hero sections with 3+ elements competing for attention
- Repeated CTA sections with identical copy across every page
- Process sections with 3 steps that say nothing specific about this business

*Technical patterns:*
- Placeholder content rendering publicly in any field (`#[PLACEHOLDER]`, `(555) 000-0000`, `info@example.com`)
- Social links that go to profile URLs that have not been verified
- Review platform links that may 404 or redirect to a wrong business
- Unused feature sections left on pages "just in case"

**What makes a site feel intentional instead:**
- A color palette that was chosen for this business type, not picked from a generic UI kit
- Typography that has real hierarchy and weight variation — not everything in one weight
- Content that could only be about this specific business (named people, specific numbers, real locations)
- Testimonials that answer a specific objection or fear the target customer has
- A gallery where you can tell the work is from the same business in the same region
- A process section where the steps reflect how this business actually works
- A hero that names the problem and the geography, not just the service category

---

## 16. Editability and Maintainability Expectations

**The system's long-term value is faster second builds and cheaper maintenance.**  
If every site is a custom chaos of one-off components, the system fails its purpose. If every site is a rigid template, the system produces generic output. The correct target is: consistent architecture, variable content.

**Data layer discipline:**
- Every string visible to users should trace back to a data file, not hardcoded JSX
- The following must be editable from data files with no component code changes:
  - Business name, phone, email, address, hours
  - All service names, descriptions, and scope items
  - All testimonials
  - All portfolio images and captions
  - All service area cities and neighborhood lists
  - All page headlines, subheadlines, and CTA labels
  - The guarantee line, warranty claim, review count, and star rating

**Component discipline:**
- Every component must be buildable from its props alone — no component should reach outside its scope to import content directly (except through shared data files)
- No one-off layout components built for a single page that could be generalized
- No hardcoded client-specific colors or sizes inside component code — all visual choices should come from the design system token layer
- Deprecated or unused components must be removed, not commented out

**File organization:**
- `app/` — route pages only
- `components/` — all reusable UI
- `components/sections/` — full-page section components
- `components/layout/` — header, footer, nav
- `components/ui/` — atomic UI elements (Button, Badge, StarRating, etc.)
- `data/` — all client content
- `lib/` — utilities, hooks, server actions

**Revision readiness:**
- A revision agent (19-revisions) must be able to update content by editing data files only
- A revision agent must be able to swap a section component without touching other sections
- A revision agent must be able to add a new service page by adding to `data/services.ts` and creating a route file — not by modifying existing components
- The QA review (18-qa-review) must be able to trace any rendered string back to its data source

**Naming conventions:**
- Data keys use camelCase and match the content concept: `headline`, `subheadline`, `cta`, `items`, `imageSrc`
- Component names use PascalCase and describe their content type: `TestimonialsSection`, `ServicesGrid`, `CTASection`
- Route files follow the framework convention: `app/page.tsx`, `app/about/page.tsx`, `app/services/[service-slug]/page.tsx`

---

## 17. Frontend / Backend Boundary

**The frontend is responsible for:**
- Rendering all user-visible content
- Form layout, field logic, validation states, and error display
- Client-side form validation (UX layer — not security)
- Loading states and pending states
- Success state rendering after form submission
- Image display, gallery logic, filter state
- Navigation, routing, and page transitions
- Schema markup and metadata
- Accessibility attributes and semantic structure
- Client-side interactivity (accordion, filter, mobile nav toggle)

**The backend is responsible for:**
- Server-side form validation (security layer)
- Email delivery on form submission
- File storage and retrieval for uploads
- CRM integration and lead routing
- Authentication if any gated content exists
- API integrations with third-party services
- Database operations
- Environment variable management

**The boundary in practice:**
- Form actions use Server Actions — the frontend defines what is submitted, the backend defines what happens to it
- The frontend must not hardcode API keys, credentials, or endpoint URLs — these belong in environment variables
- The frontend does not decide lead routing logic — it submits to a Server Action and receives a success/failure response
- The frontend does not render CRM data or operational business data — it renders static or build-time content from data files

**Grey areas:**
- Image upload: the frontend owns the UI (file input, validation, preview, remove controls); the backend owns where the file goes and how it is delivered to the business
- Booking: the frontend owns the scheduling UI and step flow; the backend owns calendar availability and confirmation logic
- Reviews: the frontend owns display of review data; the source of that data (manual data file vs. live API pull) is a backend decision

---

## 18. Acceptance Standard

A frontend output produced by this system passes when it meets all of the following:

**Strategic:**
- [ ] Site matches the approved strategy from discovery and planning stages
- [ ] Primary CTA is correct, clear, and consistent with the business's conversion model
- [ ] All activated features are justified — no features present that were not approved

**Content:**
- [ ] No placeholder text renders publicly anywhere in the build
- [ ] All external URLs (social, review platform, map links) are verified against real destinations
- [ ] Business details (phone, email, address, hours) are consistent across all pages and components
- [ ] All team/founder names and photos are real and confirmed available

**UX:**
- [ ] A first-time visitor can understand what the business does from the homepage within the first scroll
- [ ] The primary conversion action is reachable from any page in ≤2 clicks
- [ ] Trust signals appear adjacent to or before every primary CTA
- [ ] No page is a dead end (every page ends with a CTA or clear next step)

**Mobile:**
- [ ] Phone number is tappable from the header on mobile
- [ ] All CTA buttons are full-width and minimum 48px height on mobile
- [ ] No content is visible only on hover
- [ ] Form is usable with thumbs — correct keyboard types, labels visible, error messages clear

**Accessibility:**
- [ ] Every page has exactly one H1
- [ ] All form inputs have associated visible labels
- [ ] All interactive elements have visible focus states
- [ ] Gallery captions are not `aria-hidden` if they contain proof information
- [ ] `prefers-reduced-motion` override exists for scroll animations

**Anti-template:**
- [ ] No generic buzzword-filler copy blocks with no specific claims
- [ ] No stock photography used in proof contexts
- [ ] No placeholder-looking testimonials without specific project details
- [ ] Palette is brand-specific, not a generic UI kit default
- [ ] At least one section on the homepage could only describe this business

**Implementation:**
- [ ] All client content is editable from data files without touching component code
- [ ] Components do not contain hardcoded client-specific content
- [ ] No unused components or sections remain in the codebase

---

## 19. Final Handoff

**How later stages should use this PRD:**

**Feature agents (10–17):**  
This PRD defines the quality floor for every feature you build. Before shipping a component, verify it meets the mobile, accessibility, trust, and anti-template standards in sections 7, 12, and 15. Every feature must justify its activation. Every component must be data-driven and reusable.

**Build / coding stage:**  
Use this PRD as the implementation conscience. When a decision isn't covered by the design system or a specific feature spec, this PRD is the tiebreaker. Default to: clarity over cleverness, mobile-first, data-driven, no hover-only content, no placeholders in production, semantic HTML, real proof over decorative trust signals.

**QA review (18-qa-review):**  
The acceptance standard in Section 18 is your checklist. The anti-generic constraints in Section 15 are your benchmark for whether the site feels designed or generated. The common failure patterns in `common-failure-patterns.md` were derived from real failures in builds against this PRD.

**Revisions (19-revisions):**  
Any revision must maintain the data-driven architecture in Section 10 and the file organization in Section 16. Content changes go in data files. Component behavior changes go in component files. Do not bypass the data layer to make a one-off edit faster.

**Future builds:**  
This PRD should be the first document a new build inherits. It defines what "done well" looks like before a single line of code is written. Earlier stages produce client-specific outputs. This document produces system-level quality standards. It should be updated when the system learns something new — not when a single client's preferences differ from it.

---

*This document is a living system reference. Update it when a pattern produces consistently better or worse output than expected. Do not update it for one-off client preferences.*
