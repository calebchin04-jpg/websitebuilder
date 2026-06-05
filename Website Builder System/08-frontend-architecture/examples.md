# Frontend Architecture Agent — Worked Examples

Three worked examples showing how the architecture agent makes structural decisions for different site types. Abbreviated to show key decisions and reasoning, not the full template output.

---

## Example 1 — Local Service Business (Pressure Washing)

**Business:** Peak Ridge Pressure Washing, Austin TX
**Pages:** Homepage, About, Contact, Services overview, 5 individual service pages, Service-area page
**Features:** Contact form, Google Reviews strip, map on contact page, simple gallery
**Team:** Solo developer building this site

---

### Architecture Verdict

**Type:** B — Service-Business Modular Site
**Bias:** Hybrid — page-type driven for service pages, direct composition for homepage/about/contact

The 5 service pages share a structural template (hero, definition, process, pricing, FAQ, CTA). This is genuine repetition that justifies a `ServicePageTemplate` component. The homepage, about, and contact pages are unique enough compositions that forcing them into a template would destroy custom feel.

**Modularity level:** Moderate. There are 5 real shared sections (Hero, ServicesGrid, CTABlock, FAQ, TestimonialsStrip) and one repeated page template (ServicePageTemplate). Beyond that, keep it direct.

---

### Key Structural Decisions

**What gets a ServicePageTemplate:**
The `ServicePageTemplate` component receives a `ServiceData` object and renders the confirmed section sequence. The template accepts optional section flags so the roof-soft-wash page (which needs a process explanation section) differs from the driveway-cleaning page (which does not need it but does have a before/after image pair).

```typescript
// The template accepts per-service configuration:
type ServicePageData = {
  slug: string
  name: string
  heroImage: ImageData
  definition: { body: string }
  process?: ProcessData          // Optional
  included?: string[]            // Optional
  beforeAfter?: BeforeAfterData  // Optional
  pricing: PricingData
  faq?: FAQItem[]                // Optional
  relatedServiceSlugs: string[]
}
```

The template renders these sections in order, skipping optional ones when null. This is not a config-array-driven renderer — it is an explicit composition that responds to the presence or absence of optional data.

**What does NOT get templated:**
The homepage. The homepage hero, services preview, local proof section, and CTA block are composed explicitly in `app/page.tsx`. It is 50 lines, imports 5 section components, and clearly shows every section on the page. A content editor reading it immediately understands the homepage structure.

---

### Component Decisions

**Hero variants justified:**
```
variant="home"    — split layout, full-size, real photography, micro-zone included
variant="inner"   — centered, reduced height, text-forward, used on all service pages
```

Two variants because the structure genuinely differs. The home hero carries media, a trust strip, and two CTAs. The inner hero is simpler. Same data shape for the core fields (headline, subheadline, primaryCTA), which confirms this is a variant and not a separate component.

**FAQ is a client component:**
The FAQ section uses an accordion. Accordion state (which item is open) requires `useState`. FAQ is a client component. Everything else on service pages is a server component.

**Gallery stays isolated:**
The gallery is confirmed as a simple static grid with a lightbox. It lives in `components/features/gallery/`. The grid is a server component. The lightbox (which intercepts clicks and shows a modal) is a client component. They are separate files — the server component imports the client lightbox only when needed.

---

### Data Architecture Decision

The business name and phone number appear in: the site header, the site footer, the contact page, the schema markup, and the hero trust line. These are centralized in `data/config/business.ts` — one change propagates everywhere.

The 5 service descriptions, pricing details, and FAQ items are in `data/services/index.ts` as a typed array. Each service page calls `getServiceBySlug(params.slug)` and passes the result to `ServicePageTemplate`. No service content is hardcoded in any component.

---

### What Was Rejected

**No location pages for Cedar Park, Round Rock, etc.** — rejected by 17-feature-local-seo. The frontend architecture does not create location page scaffolding for pages that do not exist.

**No CMS adapter layer** — not confirmed. Data lives in TypeScript files. Clean interfaces (`ServiceData`, `LocationData`) mean CMS migration is possible later without architectural rewrite.

**No animation library** — the design system specifies minimal motion. CSS transitions only (`transition-colors`, `hover:opacity-90`). No Framer Motion dependency added to keep the bundle lean and animation scope controlled.

---

---

## Example 2 — Multi-Service Clinic (Storefront, Type A)

**Business:** Revive Aesthetic Studio
**Pages:** Homepage, About, Contact/Booking, 6 individual service pages, Reviews page
**Features:** Online booking widget (Acuity embed), Contact form, Review strip, Map on contact page
**Additional:** Strong brand register requirement — premium, authoritative, not generic

---

### Architecture Verdict

**Type:** B+D — Service-Business Modular with Feature-Rich elements
**Bias:** Page-type driven for service pages + feature module isolation for booking

The booking integration is the distinguishing factor. Acuity (or equivalent) is embedded as a widget. The widget shell lives in `components/features/booking/` and is isolated from the rest of the page architecture. The booking page is a direct composition that renders the `BookingWidget` within the site's layout shell.

**Premium brand requirement — architectural implication:**
The authoritative brand register means every section must feel intentionally composed, not formulaic. This reinforces the anti-template mandate. The homepage must feel custom. Service page layouts are templated for consistency, but the template is less prescriptive than for a simpler site — it allows more layout variation per service (some services have a before/after image, some have a credential block, some have a FAQ, some do not).

---

### Key Structural Decisions

**ServicePageTemplate for this clinic is more flexible:**
```typescript
type ServicePageData = {
  name: string
  heroVariant: 'split' | 'centered'  // Layout direction is per-service
  definition: { body: string }
  credentials?: CredentialData[]      // Optional — for injectables and regulated services
  process?: ProcessData               // Optional — for services with multi-step protocols
  beforeAfter?: BeforeAfterData       // Optional — for visual-result services
  pricing: PricingData
  consultation: { body: string; ctaLabel: string }  // Required — consultation-first model
  faq?: FAQItem[]
}
```

Each service determines its own hero layout direction (split or centered), which credential block to show, and whether before/after images are relevant. This is more data-driven than Example 1 because the service variety is greater and the brand mandate requires less visual sameness.

**Premium section treatment — SectionWrapper:**
The `SectionWrapper` component on this project accepts a `density` prop that translates to generous vs. standard vertical padding. Premium sections breathe more. The design system specifies this — the frontend architecture enforces it via the wrapper component rather than per-section padding decisions.

---

### Booking Integration Boundary

The booking widget is an Acuity embed. The frontend team's job:
- Create `components/features/booking/BookingWidget.tsx` — a client component that renders the Acuity iframe or widget script
- Handle the widget's load state (show a loading skeleton while the iframe initializes)
- Ensure the widget is fully accessible from the keyboard — tab focus must not be trapped in the iframe
- Ensure the widget is responsive — Acuity's embed adapts, but the container must be sized correctly

The booking business logic (availability, scheduling, confirmation emails) is Acuity's responsibility. The frontend architecture explicitly does NOT implement booking logic — it creates the shell.

**What 09-backend-architecture owns here:**
If booking confirmation emails need to trigger additional business logic (CRM updates, custom confirmation copy), that is backend architecture territory. The frontend architecture notes this boundary and defers.

---

### What Was Different From Example 1

- More flexible service page template (per-service layout direction)
- Booking feature module required (not a toggle — it is the main conversion path)
- More generous spacing via `SectionWrapper` density prop
- Map is on the contact/booking page (Type A storefront — real public location)
- Reviews page exists as a standalone page (enough review volume to justify it)
- Font loading: the brand uses a specific premium typeface — loaded via `next/font/google` in root layout, never via `@import` in CSS

---

---

## Example 3 — Contractor (High Feature Count, Type B+D)

**Business:** Regional roofing contractor, multiple service types, inspector partner, insurance claim support
**Pages:** Homepage, About, Contact, 8 service pages, Service-area page, Finance/payment information page
**Features:** Quote form (multi-step), Insurance claim support section, Gallery (large project grid + before/after), Reviews strip, Finance calculator (static, not dynamic)
**Team:** Two developers

---

### Architecture Verdict

**Type:** D — Feature-Rich Hybrid
**Bias:** Feature module isolation + page-type driven for service pages

The quote form is a multi-step form — not a simple contact form. It collects property info, damage type, urgency, and contact details across 3 steps. This is a client component with meaningful form state. It lives in `components/features/quote-form/`.

The gallery is large (40+ project images with before/after pairs). The gallery component handles pagination or infinite scroll client-side. This is a real frontend feature, not just a section.

The finance calculator is static — it shows estimated payment ranges based on input without making API calls. It is a simple client component with local `useState`.

**Two-developer team implication:** Folder and responsibility boundaries must be clear enough that both developers can work in parallel without stepping on each other. Feature isolation is more important here than on a solo-developer project.

---

### Key Structural Decisions

**Multi-step form architecture:**
The quote form is complex enough to live in its own feature folder with multiple files:
```
components/features/quote-form/
├── QuoteForm.tsx             # Orchestrator — manages step state
├── Step1PropertyInfo.tsx     # Step 1 component
├── Step2DamageType.tsx       # Step 2 component
├── Step3ContactInfo.tsx      # Step 3 component
├── QuoteFormProgress.tsx     # Step indicator UI
└── useQuoteForm.ts           # Form state hook
```

The orchestrator (`QuoteForm.tsx`) is the client component. Individual step components receive their field values and onChange handlers as props — they can be tested independently. The `useQuoteForm` hook owns the form state and submission logic.

This is more structured than Example 1's simple `ContactForm.tsx` because the complexity justifies it. A single-file multi-step form component with 300 lines of state management would be a maintenance problem.

**Gallery feature architecture:**
```
components/features/gallery/
├── GalleryGrid.tsx           # Server component — renders grid from data
├── GalleryLightbox.tsx       # Client component — handles modal and navigation
├── BeforeAfterSlider.tsx     # Client component — interactive comparison
└── GalleryPagination.tsx     # Client component — page navigation
```

The grid is a server component — it receives gallery items from `data/features/gallery.ts` and renders the grid markup. The lightbox is client-only — it activates on image click and manages which image is displayed. This separation means the grid renders immediately without waiting for client-side hydration.

**State boundary confirmation:**
The multi-step form has meaningful local state (current step, form values). This state is not global — it does not need a context or store. It lives in the `useQuoteForm` hook. When the form is submitted, it calls `app/api/quote/route.ts`. The API route validates and sends the data to the CRM or email service.

**09-backend-architecture owns:**
- The `app/api/quote/route.ts` validation and CRM integration
- The insurance claim support flow (if it requires document uploads or partner system integration)
- Any backend required for the finance calculator if real rate data is ever needed (currently static)

---

### What Was Harder Than Expected

The finance calculator initially seemed like a simple client component — user inputs loan amount and term, component shows monthly payment estimate. But the design brief shows it needs to:
- Accept a "project estimate" input (filled from the quote form flow)
- Show financing partner logos
- Link to the finance partner application

This is still a frontend-only feature (static calculation, no API calls), but it needs to accept state from a sibling component (the quote form). This is a design question, not an architecture question. The architecture decision: the calculator is a standalone client component that accepts an optional `initialEstimate` prop. The quote form can pass its estimated total to the calculator via a URL query parameter on the finance page — no shared state, no context needed, clean boundary.

This example shows how architecture decisions clarify integration boundaries that upstream wireframes left ambiguous.
