# Frontend Architecture Output Template

Use this template to produce the full frontend architecture output. Fill every section. Label all assumptions explicitly. Write "N/A — [reason]" where a section does not apply.

---

## FRONTEND ARCHITECTURE PACKAGE
**Project:** [Business Name]
**Site type:** [e.g., Local service business — pressure washing, Austin TX]
**Stage:** 08-frontend-architecture — output complete
**Frontend type:** [A / B / C / D / B+D hybrid — with label]
**Architecture bias:** [Direct / Page-type-driven / Section-variant-driven / Data-config-driven / Hybrid]
**Default stack:** Next.js + React + TypeScript + Tailwind CSS
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Architecture Verdict

**Frontend type:** [e.g., Type B — Service-Business Modular Site]
**Reason:** [2–3 sentences on why this type fits]

**Architecture bias:** [e.g., Hybrid: page-type driven for service/location pages + direct composition for homepage/about/contact]
**Reason:** [Why this bias matches the project's content structure and revision needs]

**Modularity level:** [Low / Moderate / High]
**Reason:** [How much reuse actually exists, what drives the modularity decision]

**Stack:** Next.js (App Router) + React + TypeScript + Tailwind CSS
**Stack notes:** [Any confirmed overrides, version notes, or constraints from 07-implementation-planning]

**CMS:** [Confirmed / Not in scope / Deferred — with note on how the data layer accommodates this]

**One-sentence verdict:**
[The clearest summary of the right frontend architecture for this project — what it is and what it explicitly is not.]

---

## Section 2 — Critique of Upstream Inputs

**07-implementation-planning:**
[What is strong, vague, or missing. Are there technical decisions in the implementation plan that create frontend architecture risk? Are page types correctly identified? Are component names consistent with what the frontend architecture should produce?]

**03-sitemap:**
[Are repeated page types (service pages, location pages) clearly identified? Are there page hierarchy assumptions that affect the route structure? Any pages that look like templates but are actually unique compositions?]

**04-wireframe:**
[Are section patterns consistent enough to justify shared section components? Are there one-off sections that should not be forced into a variant system? Are any wireframes under-specified in a way that creates frontend risk?]

**06-design-system:**
[Are design tokens defined concretely enough to map to Tailwind config? Are animation/motion constraints clear enough to implement? Are responsive breakpoint expectations stated?]

**Overall frontend risks from upstream:**
[List 3–5 specific risks — e.g., "Service page wireframes are inconsistent across pages, making a service page template difficult to define clearly"]

---

## Section 3 — Frontend Architecture Strategy

[1–2 paragraphs explaining the overall approach: why the chosen type and bias are right for this project, how the architecture balances custom feel with reuse, and what the architecture is specifically designed to prevent (common failure modes for this kind of site).]

---

## Section 4 — Ownership Boundaries

**What 08-frontend-architecture owns on this project:**
[List the specific structural decisions being made]

**What belongs to other agents:**

| Decision | Owner |
|---|---|
| [e.g., "Service page copy and content structure"] | 14-feature-services |
| [e.g., "Local SEO metadata generation strategy"] | 17-feature-local-seo |
| [e.g., "Visual design tokens and component visual style"] | 06-design-system |
| [e.g., "Backend form handling logic"] | 09-backend-architecture |
| [e.g., "Booking widget backend integration"] | 09-backend-architecture |
| [e.g., "Page hierarchy and URL decisions"] | 03-sitemap |

---

## Section 5 — Routing and Page Architecture

**Route structure:**
```
app/
├── layout.tsx                    # [Purpose: root shell, fonts, global metadata]
├── page.tsx                      # Homepage — direct composition
├── about/page.tsx
├── contact/page.tsx
├── services/
│   ├── page.tsx                  # Service overview — [template or direct?]
│   └── [slug]/page.tsx           # Individual service — ServicePageTemplate
├── service-area/page.tsx         # [Include only if justified — note reason]
└── locations/[slug]/page.tsx     # [Include only if location pages are justified]
```

**Layout shell logic:**
- Root layout (`app/layout.tsx`): [What it includes — fonts, global metadata, SiteHeader, SiteFooter, analytics]
- Inner layouts (if any): [e.g., a `(marketing)/layout.tsx` group if page types need different shells]
- Layout variants: [e.g., "Service pages use the same root layout — no separate layout shell needed"]

**Page-type template logic:**

| Page type | Implementation | Data source |
|---|---|---|
| Homepage | Direct composition | `data/pages/home.ts` |
| About | Direct composition | `data/pages/about.ts` |
| Contact | Direct composition | `data/pages/contact.ts` |
| Service overview | Direct composition | `data/services/index.ts` |
| Individual service pages | `ServicePageTemplate` | `data/services/[slug].ts` via `getServiceBySlug()` |
| Location pages (if applicable) | `LocationPageTemplate` | `data/locations/[slug].ts` via `getLocationBySlug()` |
| Service-area page | Direct composition | `data/config/business.ts` (serviceArea) |

**Static generation for repeated page types:**
```typescript
// app/services/[slug]/page.tsx
export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}
```

---

## Section 6 — Folder and File Structure

```
/
├── app/
│   └── [route structure from Section 5]
│
├── components/
│   ├── ui/                   # [Primitives — list key components]
│   ├── sections/             # [Section components — list key sections]
│   ├── layouts/              # [Layout shells — list]
│   └── features/             # [Feature folders — only confirmed features]
│       ├── [feature-1]/
│       └── [feature-2]/
│
├── data/
│   ├── config/
│   │   ├── site.ts
│   │   ├── business.ts
│   │   ├── navigation.ts
│   │   ├── footer.ts
│   │   └── features.ts       # Feature flags
│   ├── pages/
│   │   ├── home.ts
│   │   ├── about.ts
│   │   └── contact.ts
│   ├── services/
│   │   └── index.ts
│   └── features/
│       ├── testimonials.ts
│       ├── faqs.ts
│       └── [other feature data]
│
├── lib/
│   ├── utils/
│   │   └── cn.ts
│   ├── types/
│   │   ├── service.ts
│   │   ├── location.ts
│   │   └── config.ts
│   ├── metadata/
│   │   └── generateMetadata.ts
│   └── schema/
│       └── buildLocalBusinessSchema.ts
│
├── public/
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── team/
│       ├── gallery/
│       └── og/
│
└── styles/
    └── globals.css
```

**Key folder responsibilities:**
[Brief explanation for any folder whose purpose is not obvious from the name — focus on any project-specific decisions]

---

## Section 7 — Component Architecture

**UI primitives (components/ui/):**

| Component | Purpose | Client? |
|---|---|---|
| `Button` | CTA buttons, form submits — variant: primary/secondary/ghost | No |
| `Badge` | Service labels, trust badges | No |
| `StarRating` | Render star rating from numeric value | No |
| `Card` | Generic card surface with slot for content | No |
| `Icon` | SVG icon wrapper | No |
| [others as needed] | | |

**Section components (components/sections/):**

| Component | Purpose | Client? | Variants |
|---|---|---|---|
| `Hero` | Above-fold opening section | No | `variant="home" \| "inner"` |
| `ServicesGrid` | Homepage service card grid | No | `variant="grid" \| "list" \| "featured"` |
| `CTABlock` | Full-width CTA zone | No | `variant="standard" \| "compact"` |
| `FAQ` | Accordion FAQ section | **Yes** — accordion state | — |
| `TestimonialsStrip` | Review/testimonial display | No | — |
| `ProcessSteps` | Numbered process steps | No | — |
| `ContactForm` | Contact/quote form | **Yes** — form state | — |
| [others] | | | |

**Layout components (components/layouts/):**

| Component | Purpose |
|---|---|
| `SiteHeader` | Persistent header with nav and CTA |
| `SiteFooter` | Persistent footer with links and business details |
| `SectionWrapper` | Consistent vertical padding, background, max-width per section |
| `PageContainer` | Max-width and horizontal padding for page content |

**Feature components (components/features/):**
[List only confirmed features — e.g., gallery, booking, map]

| Feature folder | Key components | Client? |
|---|---|---|
| `features/map/` | `MapEmbed`, `StaticMapImage` | `MapEmbed`: Yes (lazy load) |
| `features/gallery/` | `GalleryGrid`, `GalleryLightbox` | `GalleryLightbox`: Yes |
| [others] | | |

**Reuse decision notes:**
[Anything non-obvious about why a specific component is abstracted vs. staying page-specific]

**Anti-prop-soup rules for this project:**
[Specific prop interface rules based on this project's component set — e.g., "Hero props must not exceed 8 top-level fields; image and CTA are sub-objects"]

---

## Section 8 — Section-Variant Rules

**Sections with variants on this project:**

| Section | Variants | What differs | What stays the same |
|---|---|---|---|
| `Hero` | `home`, `inner` | Size, layout direction, media presence | Content fields, CTA structure |
| `ServicesGrid` | `grid`, `list`, `featured` | Layout density, card size | Service card data shape |
| `CTABlock` | `standard`, `compact` | Vertical padding, heading size | CTA button, contact info |

**Sections that are page-specific (no variants):**
[Sections that appear on only one page and should not be forced into a shared component system — e.g., the homepage "About the Business" intro block, the contact page map zone]

**Variant naming rules for this project:**
[Confirm variant names are purpose-based, not position-based]

**Variant anti-patterns to avoid on this project:**
[Any specific variant anti-patterns that are a risk given this project's complexity]

---

## Section 9 — Content / Config / Data Structure

**Global config files:**

| File | Key contents |
|---|---|
| `data/config/site.ts` | businessName, tagline, url, defaultOgImage |
| `data/config/business.ts` | telephone, address, hours, serviceArea, aggregateRating |
| `data/config/navigation.ts` | primaryLinks, primaryCTA, phone |
| `data/config/footer.ts` | columns, legalLinks, copyrightName |
| `data/config/features.ts` | Feature flags for optional features |

**Per-page data files:**
[List with brief note on what each contains]

**Service data structure:**
[Abbreviated TypeScript interface for `ServiceData` based on the confirmed service feature decisions]

**Feature data files:**
[List confirmed feature data files and their key shape]

**Content centralization decisions:**
[What is centralized for this project, what stays per-page — any project-specific exceptions to the standard model]

---

## Section 10 — Responsive Implementation Rules

**Mobile-first confirmation:** All Tailwind classes written mobile-first with upward modifiers.

**Primary breakpoint:** `md` (768px) — main layout changes happen here.

**Section-specific responsive rules:**

| Section | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| `Hero (home)` | Stacked — text then image | [Behavior] | Split layout |
| `ServicesGrid` | Single column | 2 columns | 3 columns |
| `SiteHeader` | Hamburger menu + persistent CTA | [Behavior] | Full horizontal nav |
| `CTABlock` | Full-width stacked | [Behavior] | Inline CTA with side content |
| [other sections] | | | |

**Navigation mobile rules:**
[Explicit: how mobile nav opens/closes, CTA visibility, keyboard behavior]

**Typography responsive rules:**
[Key heading sizes at mobile vs. desktop — from design system]

**Mobile CTA persistence:**
[Is there a sticky bottom CTA bar on mobile? When? Which pages?]

---

## Section 11 — Styling / Motion / Accessibility / Performance Rules

**Styling integration:**
- `cn()` utility used for variant class composition
- `SectionWrapper` handles vertical padding and background zones
- Arbitrary Tailwind values (`[...]`) restricted to: [specific cases if any]
- Design system token mapping: [confirm Tailwind config extends with design system values]

**Motion rules:**
- Animation level: [from design system — minimal / moderate / rich]
- Scroll-reveal: [used? which sections? wrapper component name]
- CSS-only transitions: [hover states, focus states — specify]
- `prefers-reduced-motion`: honored via [method]

**Accessibility non-negotiables for this project:**
- Skip-to-main-content link: [present / location]
- Focus rings: [style specification]
- Form labels: [all inputs labeled via `<label>` or `aria-label`]
- Image alt text: [rules confirmed]
- Heading hierarchy: [H1 on each page — confirm placement]

**Performance rules:**
- Server components default: [confirm all non-interactive sections are server components]
- Image handling: `next/image` with `priority` on: [specify which images]
- Third-party scripts: [loaded via `next/script` with `strategy` specified per script]
- Feature lazy-loading: [confirm map, gallery, chat are lazy-loaded]

---

## Section 12 — Feature Module Integration Rules

**Confirmed features and integration approach:**

| Feature | Integration approach | Frontend boundary |
|---|---|---|
| Contact form | Client component + `app/api/contact/route.ts` | Form markup and validation in frontend; email sending in API route |
| [Gallery] | `components/features/gallery/` — lightbox is client component | Static image data from `data/features/gallery.ts` |
| [Map] | `components/features/map/` — lazy-loaded embed | Controlled by `featureFlags.map` in config |
| [Booking] | Third-party widget embedded in `components/features/booking/` | Business logic in external platform; frontend renders the widget shell |

**Feature flag usage:**
[Confirm which features are toggled via `data/config/features.ts` and how flags are consumed in page compositions]

**Future-safe feature isolation:**
[Note which features could be removed without touching base site architecture — confirm they are isolated]

---

## Section 13 — Frontend / Backend Boundary

**Stays frontend-only:**
[List what is unambiguously frontend — e.g., all rendering, form markup, validation, display of service data]

**Deferred to 09-backend-architecture or hosted tools:**

| Concern | Owner |
|---|---|
| Form submission handling | `app/api/contact/route.ts` + email service (e.g., Resend) |
| Booking availability and scheduling | External booking platform |
| Payment processing | Stripe hosted checkout / external |
| [Other integrations] | [Owner] |

**API routes on this project:**
[List any `app/api/` routes needed and their purpose — keep this list short]

**Not building backend for:**
[Explicitly state what is out of scope — e.g., "No custom authentication. No custom CMS API. No database-backed content."]

---

## Section 14 — Risks and Failure Modes

**Risk 1 — [Specific risk]**
[e.g., "Homepage becoming a section-config-array rendered page. Mitigation: homepage is always a direct composition. Reviewed in Section 5."]

**Risk 2 — [Specific risk]**
[e.g., "Business content scattered in component files after revisions. Mitigation: centralized data layer enforced in Section 9. Review data files before each build."]

**Risk 3 — [Specific risk]**
[e.g., "Client components used by default for simplicity. Mitigation: hard rule — server component by default, client component requires justification noted in the component file."]

**Risk 4 — [Specific risk]**
[e.g., "Service page template enforcing identical section order on every page. Mitigation: ServicePageTemplate accepts optional section flags from service data files."]

**Risk 5 — [Specific risk]**
[e.g., "Variant proliferation making the Hero component a configuration maze. Mitigation: maximum 3 Hero variants defined now; any additional variant triggers a component split review."]

---

## Section 15 — Final Handoff

**What is defined and ready for build:**
[One paragraph: folder structure, component layers, data organization, routing, responsive rules, and feature integration are all defined. A developer has what they need to begin building.]

**What requires confirmation before build:**
[Specific items — e.g., "Confirmed aggregateRating values needed before schema and hero trust line can be populated. Booking feature integration approach needs confirmation from client before 16-feature-booking-payments is activated."]

**Assumptions made:**
| Assumption | Based on | Risk if wrong |
|---|---|---|
| [e.g., "No CMS — agency edits data files directly"] | [07-implementation-planning assumption] | [Medium — data file structure would need migration to CMS schema] |
| [e.g., "3 confirmed service pages based on sitemap"] | [03-sitemap] | [Low — adding pages is a matter of adding data files and generating static params] |

**Handoff to coding stage:**
- Folder structure: confirmed in Section 6
- Component list: confirmed in Section 7 with client/server designation
- Data file structure: confirmed in Section 9 with TypeScript interfaces
- Routing: confirmed in Section 5
- Responsive rules: confirmed in Section 10 per section
- Feature flags: confirmed in Section 12

**What implementers must preserve:**
- Content must never be hardcoded in component files — always flows from `data/`
- Server component default must be maintained — adding `'use client'` requires justification
- Mobile-first Tailwind class order must be maintained — no desktop-first patches
- Section variant names must remain purpose-based — not position-based
- `SectionWrapper` must be used consistently — sections do not set their own max-width independently
