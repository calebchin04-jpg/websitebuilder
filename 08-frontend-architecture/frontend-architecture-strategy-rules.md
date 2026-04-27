# Frontend Architecture Strategy Rules

This file defines how to classify the frontend, choose the right architecture model, set the right level of abstraction, and make the core structural decisions before any folder or component work begins.

---

## Part 1: Site Classification Questions

Before recommending any architecture, answer these questions from upstream inputs:

**1. What kind of site is this?**
- Simple brochure (few pages, low feature complexity, low repetition)
- Service-business marketing site (multiple service pages, local SEO, lead-gen focus, moderate feature set)
- Local multi-page lead-gen site (many service/location combos, repeated page types, possibly content-thin)
- Content-heavy site (blog, resources, many dynamic pages)
- Feature-rich hybrid (booking, payments, gallery, chat, CMS, strong interactivity)

**2. How much content/section reuse exists across page types?**
- Low: most pages are unique enough that shared sections add little value
- Medium: 3–5 section patterns repeat across pages, worth abstracting
- High: service pages, location pages, FAQ pages all follow strong template patterns

**3. Which pages are truly repeated templates vs. unique compositions?**
- Repeated: service pages, location pages, blog post pages — same structure, different content
- Unique: homepage, about page, contact page — usually deserve direct composition, not templates

**4. How much interactivity does the site have?**
- Low: mostly static content, form submission, no real client-side state
- Medium: accordion FAQs, mobile navigation, booking widget, gallery lightbox
- High: booking/payment flows, user-gating, complex forms, chat integration

**5. Is there a CMS?**
- Yes confirmed: content structure needs to align with CMS schema
- No (agency edits code): content lives in TypeScript data files, not a CMS
- Maybe later: build content files in a way that could migrate to a CMS without structural rewrite

Answer all five before proceeding.

---

## Part 2: Frontend Architecture Model Selection

Select one of four models. This determines the overall structural bias.

**Type A — Lean Marketing Site**

Profile:
- 4–8 pages
- Minimal feature complexity
- Most sections are unique per page
- Low content repetition
- No repeated page templates

Architecture bias:
- Direct page composition — most pages built as explicit compositions, not template-driven
- Minimal data indirection — inline content is acceptable for small, stable pages
- Fewer folder layers
- Abstraction reserved for genuinely shared elements only (navigation, footer, CTA buttons)

When to choose:
- Small brochure sites
- Single-service businesses with simple page sets
- Sites where adding more abstraction than the project needs creates maintenance overhead

**Type B — Service-Business Modular Site**

Profile:
- 8–20 pages
- Multiple service pages following the same structural template
- Optional: location pages, service-area pages
- Repeated section patterns (hero, services, testimonials, FAQ, CTA)
- Moderate feature set (forms, Google Maps, review strips, basic gallery)

Architecture bias:
- Strong page-type architecture: `ServicePage`, `LocationPage` templates exist
- Reusable shared sections: Hero, ServicesGrid, TestimonialsStrip, FAQ, CTABlock
- Central business config
- Per-page/per-feature content data files
- Disciplined section variants
- Mix of server and client components

When to choose:
- Local service business sites (the primary use case for this system)
- Sites where service pages and location pages repeat structurally
- Sites with a clear shared visual language but meaningful per-page content differences

**Type C — Content-Heavy Site**

Profile:
- Many pages driven by content (blog, resources, case studies)
- Dynamic page generation from data or CMS
- Stronger content/data separation
- Route conventions matter more

Architecture bias:
- Stronger content layer separation
- generateStaticParams or equivalent for dynamic routes
- Content types with consistent schema
- Separation between content rendering and UI composition

When to choose:
- Blogs with many posts
- Resource libraries
- Sites where content volume is the main complexity driver

**Type D — Feature-Rich Hybrid**

Profile:
- Multiple interactive feature modules (booking, payments, gallery, chat, portal)
- Mixed static marketing and dynamic interactive behavior
- Stronger need for feature module isolation
- Some backend-dependent frontend behavior

Architecture bias:
- Explicit feature-module folder separation
- Stronger client/server component boundary discipline
- Guarded state patterns
- Form/integration abstraction layers
- More formal component interfaces

When to choose:
- Sites with booking/payment systems
- Sites with member portals or gating
- Sites where multiple complex features coexist

**Hybrid B+D is the most common right answer** for this system's target (local business websites with booking, forms, gallery, and local SEO features).

---

## Part 3: Abstraction Depth Rules

Not every pattern should be abstracted. Over-abstraction creates maintenance burden and flattens custom feel. Under-abstraction creates duplication debt.

**Abstract now (build as reusable shared components) when:**
- The pattern appears on 3+ pages in essentially the same structural form
- The pattern drives a core visual language element (Hero, CTABlock, ServiceCard, TestimonialCard)
- Changing the pattern later would require editing many files without a shared component
- The component has clear, stable props with well-defined data shape

**Keep direct / page-specific when:**
- The section only appears on one page
- The section's content is complex and unique enough that forcing it into a shared shape would require messy prop hacks
- Abstracting early would require inventing imagined future uses
- The page is genuinely unique in structure (homepage is usually in this category)

**Never abstract when:**
- Two sections look visually similar but have different data shapes, interaction models, or semantic meaning
- The abstraction would require a boolean-flag maze to handle all cases
- The shared component would become bigger and harder to understand than two separate, clear components

**The prop-soup rule:**
If a component requires more than 6–8 props to handle its variants, it has grown too large. Split it. A component with 15 props is not flexible — it is a hidden configuration system that no one will understand in 3 months.

---

## Part 4: The Anti-Template Mandate

This system produces premium custom websites. The architecture must support that.

**What "anti-template" means architecturally:**
- The homepage is not a fill-in-the-blanks template. It is composed directly with the sections this specific homepage needs.
- Service pages share a template structure, but each service page has its own data file, its own copy voice, and its own optional sections. The template enables consistency, not sameness.
- No section component should silently enforce a visual pattern that every page must follow. Sections should be usable where they fit and absent where they do not.

**How architecture can accidentally enforce template feel:**
- A `PageTemplate` component that requires a hero, then services, then FAQ, then CTA — in that order, always — makes every page feel identical
- A `Section` wrapper that forces identical padding and background color on every section removes visual rhythm
- A data-driven "render sections from config array" pattern flattens the compositional specificity that makes pages feel custom

**How to preserve custom feel architecturally:**
- Pages are composed explicitly — the developer sees what sections are on each page
- Shared sections accept sufficient customization (heading, body, variant, layout direction) without requiring it
- Section variants are named by their real purpose, not by position ("ServicesGridCompact" not "HomepageSection3")
- The homepage and about page are direct compositions, not template instances

---

## Part 5: Architecture Decision Output Checklist

Before finalizing the architecture strategy, confirm these are answered:

- [ ] Site type is classified (A / B / C / D / B+D hybrid)
- [ ] Abstraction depth is decided (what gets abstracted now, what stays direct)
- [ ] Page types are classified: which are templates, which are direct compositions
- [ ] Content/data approach is decided: global config, per-page files, or inline
- [ ] CMS assumption is confirmed (yes / no / deferred)
- [ ] Interactivity level is classified (low / medium / high)
- [ ] Client vs. server component default is stated
- [ ] Primary repeated page types are identified (service pages, location pages, etc.)
- [ ] Anti-template mandate is explicitly reflected in the proposed structure
