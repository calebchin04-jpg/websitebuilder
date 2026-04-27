# Wireframe Rules

This file defines how to make section-level structural decisions: what sections to include, how to order them, when to merge or remove them, how CTAs should be placed, where trust signals belong, and what reusable patterns to use.

These rules apply to business and client websites only. They are structural rules, not visual rules.

---

## Section Decision Framework

Every section that appears in a wireframe must pass this test:

> **What is the single job this section performs for the user at this point in the page?**

If you cannot answer that question clearly in one sentence, the section should be removed, merged, or split. If the same answer applies to two consecutive sections, merge them.

Sections exist to move users forward — toward trust, evaluation, or conversion. A section that does not advance the user toward one of those three states is fluff.

---

## Page Conversion Roles

Before building section order for any page, classify the page's conversion role:

| Role | Definition | Section priority |
|---|---|---|
| **Primary conversion** | The page where users take the most important action (book, call, submit form) | CTA first, friction last, form always visible |
| **Service/evaluation** | The page where users determine if the offer fits their need | Problem/solution first, trust in the middle, CTA at end |
| **Trust/proof** | The page where skeptical users build enough confidence to act | Proof forward, story second, CTA at end |
| **Entry/orientation** | The page where users arrive cold and need fast orientation (usually homepage) | Hero forward, proof early, path-to-next clear |
| **Detail/support** | Service or location sub-page supporting SEO and secondary evaluation | Relevance first, proof middle, CTA at end |
| **Structural/utility** | Pages like privacy policy, 404, thank-you | Functional only — do not over-engineer these |

---

## Section Order Logic

### Orientation/Entry Pages (Homepage and landing variants)

The above-the-fold section must establish: who this is for, what they do, and why trust is warranted — before the user decides whether to scroll. Every other priority is secondary.

Default section order for orientation pages:

1. **Hero** — Identity, primary value, immediate CTA trigger
2. **Trust signal / proof bar** — Immediate credibility injection above the scroll line or immediately below hero (not buried)
3. **Services or offer overview** — What they do (not exhaustive — summarize and link)
4. **Why this provider / differentiator** — Why this business specifically, not just the category
5. **Proof section** — Testimonials, reviews, cases, before/afters
6. **Process / what to expect** — Reduce friction for users who are evaluating but uncertain
7. **Secondary service or feature block** *(only if needed)*
8. **Final CTA section** — Re-trigger the primary action with urgency or reassurance

**When to deviate:**
- Move proof higher if the business has exceptional social proof (100+ reviews, well-known clients, strong before/afters) — it earns more trust above-the-fold than any copywriting
- Move process higher if the primary user anxiety is about what happens after they contact — reduce that friction earlier
- Skip the "why this provider" block if the business does not have a clear differentiator — do not manufacture one

---

### Service / Evaluation Pages

The user arrived because they are evaluating a specific service. Get to the point.

Default section order for service pages:

1. **Service hero** — What the service is, who it's for, primary CTA
2. **Problem/outcome frame** — What problem it solves, or what outcome it delivers
3. **Service detail or scope** — What is included, what the process looks like, common scope notes
4. **Proof specific to this service** — Testimonials or before/afters related to this service specifically (not generic)
5. **FAQ or objection block** — Answer the 2–4 most common questions or hesitations about this service
6. **CTA section** — Final conversion trigger with reassurance (guarantee, response time, etc.)

**When to deviate:**
- Add a "who is this for" section if the service has multiple customer types with different use cases
- Move FAQ higher if the primary barrier to conversion is uncertainty rather than interest
- Add related services block at the bottom if cross-linking is strategically useful — but only after the CTA, never before

---

### Trust/Proof Pages (About, Testimonials/Reviews, Gallery, Case Studies)

Users who arrive here are skeptical. Lead with proof, not story.

Default section order for trust pages:

1. **Proof statement or credentials** — Star ratings, review count, project count, years, awards — whatever is strongest
2. **Gallery or portfolio** (if visual proof page) — Lead with the best work, not explanatory text
3. **Story or background** (if about page) — After proof is established, the story lands differently
4. **Team or people** (if applicable) — Only if they add credibility, not just to fill space
5. **Process or philosophy** (if not covered elsewhere)
6. **CTA** — Move the now-convinced user to the next step

**Note on standalone reviews/testimonials pages:** Most local business websites do not need a dedicated testimonials page. If reviews are fewer than 20–30 strong ones, keep them as a section on the homepage and service pages. Only add a dedicated reviews page if the volume and variety warrant it.

---

### Contact / Conversion Pages

The user is ready to act. Remove every obstacle.

Default section order for contact pages:

1. **Headline + reassurance** — Short, direct statement that confirms this is the right place and sets expectations (e.g., "Free estimate — response within 24 hours")
2. **Contact form or booking widget** — Immediately visible, above the fold on desktop, first thing on mobile
3. **Alternative contact** — Phone number, email, any alternative to the form — for users who want a human faster
4. **Location / map** (if relevant — for businesses where physical location matters)
5. **Brief trust reinforcement** — A single review, a guarantee callout, or a simple reassurance line. Keep this minimal.
6. **Do NOT add:** full testimonials section, service lists, gallery block, or anything that gives users a reason to scroll away from the form

---

### Local SEO / City Pages

These pages serve a dual job: rank for local search and convert visitors who arrive from that search.

Default section order for local SEO pages (assumes shared template):

1. **Local hero** — Confirm coverage, establish relevance, immediate CTA
2. **Service availability in this area** — Brief list of available services with links to service pages
3. **Local trust signals** — Reviews or social proof from that area specifically (if available); if not available, use general reviews with a note about service area coverage
4. **Service area coverage map or description** — Confirm specific coverage (neighborhoods, zip codes, radius)
5. **CTA** — Same primary CTA as service pages

**Note:** City pages must not duplicate full service descriptions. Service detail lives on the service pages. City pages confirm coverage, establish relevance, and route users to service pages.

---

## Section Decision Rules

### When to merge sections

- When two consecutive sections have the same job (e.g., two trust sections in a row)
- When a section is too thin to hold on its own (e.g., a 3-line "our values" block that isn't driving anything)
- When the user's mental flow is disrupted by the separation (e.g., splitting "what we do" and "how it works" across sections when they explain one coherent thing)

### When to split sections

- When one section is doing two jobs and users need to register each job separately (e.g., "services + process" crammed together when both need room to breathe)
- When the CTA is buried inside a content section and should stand alone to convert
- When proof content is so strong it should be its own prominent block rather than a footnote inside another section

### When to remove a section

- When it has no job
- When it duplicates another section on the same page
- When it delays the CTA without adding trust or reducing friction
- When it exists only to make the page look "complete"
- When the content to fill it doesn't exist

### When to reorder sections

- Move proof higher when the business has strong proof and the user's primary barrier is trust
- Move CTA higher when the user's intent is high and the page's job is to confirm fit and convert (e.g., city pages, high-intent service pages)
- Move FAQ/objection handling higher when user anxiety is the primary conversion barrier
- Move process lower when it is relevant but not the primary selling point

---

## CTA Placement Rules

### Primary CTA placement

- Always in the hero section
- Always again after the first major trust/proof block
- Always at the end of the page
- On long pages: every 3–4 sections

### Secondary CTA placement

- Defined when the primary CTA is a high-commitment action (e.g., "book now" or "call us") — users who are not ready for that need an alternative next step
- Secondary CTA examples: "see our work" / "read testimonials" / "learn about our process"
- Secondary CTAs should appear alongside the primary CTA in the hero, and at mid-page as an alternative
- Do not make secondary CTAs visually equal to primary — they must be clearly subordinate

### When NOT to add a CTA

- Do not add a CTA to structural/legal pages (privacy policy, terms)
- Do not add a mid-page CTA to a section that is already delivering proof (it interrupts trust-building)
- Do not repeat the same CTA in every section — use judgment about where the conversion trigger is natural

### CTA form placement

- The contact form is its own section on the contact page — full-width, no competing content
- On other pages, inline form modules (short form — name, phone, message at most) can appear in the CTA section if the business wants to capture leads without a page navigation
- Full forms do not belong in heroes or proof sections

---

## Trust and Proof Placement Rules

### Where proof reduces friction most

- Immediately after the hero (or embedded in the hero) — stops skeptical users from leaving
- After the service detail section — confirms the service delivers what was described
- Before the CTA section on any high-stakes page — reduces hesitation at the conversion point
- On the contact page, minimal proof immediately next to the form — not a full section, just a line or a single review

### Types of proof and where they belong

| Proof type | Best placement |
|---|---|
| Review count + star rating | Hero or immediately below hero |
| Testimonial quotes | After service detail, or dedicated proof section |
| Before/after photos | Gallery section or embedded in service pages |
| Project count / years | Hero subtext, trust bar, or about page |
| Guarantee or risk-reversal | Near CTAs — reduces hesitation |
| Case studies | After proof section, or on dedicated case study page |
| Awards / certifications | Trust bar, footer, or about page |

### Proof placement anti-patterns

- All proof at the bottom of the page after the CTA — users who don't scroll never see it
- Generic "why choose us" lists with no specific proof — this is not proof, it is assertion
- Testimonials without names, photos, or attribution — unverifiable testimonials reduce trust rather than building it
- Stats/numbers presented without context or source — manufactured credibility is worse than no credibility

---

## Reusable Section/Component Patterns

Identify these patterns early. Wireframe them once and reference them across pages.

### Pattern: Hero — Standard

Used on: Homepage, service overview page
Contains: Primary headline, supporting subheadline, primary CTA, secondary CTA, primary image or visual
Desktop: Two-column layout (text left, image right) or full-width with text overlay
Mobile: Stacked — headline → subheadline → image → CTA

### Pattern: Hero — Service Page Variant

Used on: Individual service pages, city pages
Contains: Service-specific headline, short positioning statement, primary CTA, service-relevant image
Leaner than standard hero — less copy, faster to the point

### Pattern: Trust Bar

Used on: Homepage (immediately below hero), optionally on contact page
Contains: Star rating + review count, key stats (years in business, projects completed), any notable credentials
Desktop: Single horizontal bar, 3–5 items
Mobile: Scrollable or 2-column compact grid

### Pattern: Service Grid

Used on: Services overview page, homepage services section
Contains: Service cards — each with a title, one-line description, and link to service page
Desktop: 2- or 3-column card grid
Mobile: Single-column stacked cards

### Pattern: Proof / Testimonial Block

Used on: Homepage, service pages, about page
Contains: 2–4 testimonial cards (name, quote, context), review count reference
Desktop: 2- or 3-column card row, or horizontal carousel
Mobile: Single-column or horizontal scroll

### Pattern: Process Steps

Used on: Homepage, service pages, about page
Contains: Numbered or labeled steps explaining what happens when you hire this business
Desktop: Horizontal numbered steps, or vertical numbered list with connector
Mobile: Vertical stacked numbered steps

### Pattern: FAQ / Objection Block

Used on: Service pages, contact page
Contains: 3–6 Q&A pairs addressing the most common hesitations about this service or business
Desktop: Accordion or two-column Q&A layout
Mobile: Accordion (collapsed by default to save space)

### Pattern: CTA Band

Used on: Every page, typically at the bottom
Contains: Strong action headline, primary CTA button, optional secondary CTA or reassurance line
Desktop: Full-width band, centered content
Mobile: Same — stacked headline → CTA → reassurance

### Pattern: Gallery Block

Used on: Gallery page, homepage (sample only)
Contains: Grid of project images
Desktop: 2- or 3-column masonry or uniform grid
Mobile: 2-column grid or single-column scroll

### Pattern: Contact Block

Used on: Contact page (full version), optional short version on other pages
Full version contains: Form (name, phone, message, optional service type), alternative contact (phone, email), business hours if relevant, map if physical location matters
Short version contains: Phone number + email + brief prompt — for use in footers or sidebar CTA areas

### Pattern: Map / Service Area Block

Used on: Contact page, city pages, service area overview page
Contains: Embedded map or service area description, coverage confirmation
Desktop: Map or styled geographic description block
Mobile: Same, map may need reduced height

---

## Anti-Patterns to Avoid

These section patterns appear frequently in weak wireframes and should be challenged every time they appear:

- **"About the company" in the hero** — Users arrive asking "can you help me?" not "who are you?" Move positioning and credibility above company story.
- **Proof buried below the fold on entry pages** — If the business has reviews, they earn placement in or near the hero. Proof after the third scroll is proof that doesn't convert.
- **FAQ used as padding** — FAQs must answer questions users actually ask. If the "FAQ" contains no questions, it is filler.
- **Three identical CTAs in a row** — Repeating the same CTA multiple times in immediate succession reads as desperation. Space CTAs with content between them.
- **Generic "why choose us" icon rows** — Four icons with vague labels (Quality! Speed! Trust! Value!) and no specific proof are worse than nothing. These sections should either contain real specifics or be removed.
- **Full service descriptions on city pages** — City pages confirm coverage. Service detail belongs on service pages only.
- **Contact form on every page** — A short CTA band is usually better mid-page than a full embedded form. Reserve the full form for the contact page.
- **Team page with no credibility signal** — A team page with headshots and names but no context for why the team is credible is a vanity page. It must earn its place.
- **Process section before trust is established** — Users who don't yet trust the business will skip the process section. Earn trust first.
- **Blog listed in main nav for a business with no posts** — Blog sections on live sites without content hurt credibility. Do not include a blog in the nav or wireframe structure unless content exists or is committed to.

---

## Conversion Logic Per Page Type

Every page should answer: what action does a user take at the end of this page?

| Page type | Ideal action | How the page earns it |
|---|---|---|
| Homepage | Click CTA to contact, call, or see service detail | Proof-forward hero → trust bar → service summary → testimonials → CTA |
| Service page | Click CTA to contact or book | Establish relevance → explain service → prove it works → remove objections → CTA |
| About page | Click CTA or go to service page | Establish credibility → build connection → CTA back to conversion path |
| Gallery/portfolio | Click CTA or go to service page | Let work speak → CTA while trust is high |
| Contact page | Submit form or call | Remove friction → form visible immediately → alternative contact clear |
| City/location page | Click CTA to contact or view services | Confirm coverage → prove local credibility → route to services → CTA |
| Thank-you page | Return to homepage or browse | Confirm receipt → set expectations → optional next step |
