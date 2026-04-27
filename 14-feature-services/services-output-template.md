# Services Output Template

Use this template to produce the full services feature output. Fill every section. Label all assumptions explicitly. Do not leave sections blank — if a section is not applicable, write "N/A — [reason]."

---

## SERVICES FEATURE PACKAGE
**Project:** [Business Name]
**Business Type:** [e.g., Home Services / Clinic / Consultant / Salon]
**Stage:** 14-feature-services — output complete
**Service count:** [Total number of services identified]
**Service structure:** [Flat list / Grouped categories / Featured + secondary / Single primary]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Service-Layer Strategy Summary

**Clarity problem:**
[What is the core problem with how this business's services are currently structured or presented? Be specific: "The business offers 8 services with no clear hierarchy and overlapping names" or "The business has one dominant service but lists three secondary services at equal visual weight."]

**Service structure solution:**
[One paragraph describing the structural approach that solves the clarity problem — grouping logic, hierarchy approach, depth decisions, and what will be prominent vs. supporting.]

**Appropriate depth level:**
[Light / Moderate / Deep — with one sentence explaining why this level fits this business and audience.]

**Primary conversion path from the services layer:**
[What action should a visitor take after engaging with the services layer? "Call for a quote" / "Fill out the intake form" / "Book online" — and where that CTA leads.]

---

## Section 2 — Service Inventory and Grouping Review

**All services identified:**

| Service name | Source | Classification | Notes |
|---|---|---|---|
| [Service name] | [01-discovery / Client input] | [Primary / Secondary / Supporting / Peripheral] | [Any naming or overlap issues] |
| … | … | … | … |

**Naming problems identified:**
[List any service names that are vague, jargon-heavy, duplicative, or that a target audience member would not recognize. For each, state the recommended rename and why.]

**Overlap problems identified:**
[List any services that overlap in scope. State whether they should be merged, parent/child structured, or kept separate with clearer distinction.]

**Recommended final service list:**

| Final service name | Classification | Formerly known as (if renamed) |
|---|---|---|
| [Service name] | Primary / Secondary / Supporting | [Original name if different] |
| … | … | … |

---

## Section 3 — Service Hierarchy

**Primary services (lead placement — homepage and navigation):**
- [Service 1] — [one sentence on why this leads]
- [Service 2 if applicable]

**Secondary services (visible but subordinate):**
- [Service name] — [one sentence on treatment]

**Supporting/peripheral services (minimal or no homepage presence):**
- [Service name] — [where it lives: footer, about page, contact intake only, etc.]

**Services not recommended for prominent placement:**
[Any services from the original list that should be de-emphasized, merged, or removed from primary surfaces — and why.]

---

## Section 4 — Placement Plan

**Homepage service section:**
- Layout type: [A — Card Grid / B — Service List / C — Category Strip / D — Featured + Secondary]
- Service count shown: [#]
- Services shown: [List which services appear, in order]
- CTA path: [Where the section directs visitors]
- Position in page: [After hero / After trust strip / Mid-page — based on wireframe]

**Service overview page (if applicable):**
- URL: [from sitemap]
- Purpose: [Route to individual service pages / Present full service catalog]
- Layout: [Brief description]

**Individual service pages:**
| Page | URL | Sections included | CTA |
|---|---|---|---|
| [Service name] | /services/[slug] | [Definition, Process, Pricing, FAQ, etc.] | [Quote / Call / Book] |

**Comparison block (if applicable):**
- Location: [Service page / Dedicated pricing page / Homepage]
- Format: [Tier table / Side-by-side cards]
- Services compared: [Which services or tiers]

**CTA-adjacent service reminder (if applicable):**
- Location: [Near main CTA / Above contact form / Bottom of homepage]
- Purpose: [Brief — "Reminds visitors of available services before they submit a form"]
- Content: [2–3 service name mentions or short list]

---

## Section 5 — Recommended Sections and Pages

For each recommended module, complete the following spec.

---

### [Module name — e.g., "Homepage Service Card Grid"]

**Purpose:** [What this module does for the visitor]
**Content type:** [Cards / List / Strip / Featured block / Comparison / Package block]
**Recommended density:** [Light — 1-liners / Moderate — 2–3 sentence descriptions / Rich — depth content]
**Visual treatment:** [Matches design system — brief notes on card treatment, borders, icons, imagery]
**Mobile behavior:** [Explicit — not "it stacks": layout change, touch target size, description visibility]
**Interaction:** [Static / Hover states / Accordion / None]
**Implementation notes:** [Component name, data source, any dynamic logic]

---

### [Repeat for each recommended module]

---

## Section 6 — Pricing Handling Recommendation

**Recommended pricing model:**
[Choose one or more: No pricing / Starting-at / Range / Package blocks / Financing language / Quote-first / Mixed by service]

**Rationale:**
[2–4 sentences: Why this approach is honest and appropriate for how this business actually works. Reference the business type, conversion model, and audience expectations.]

**By service (if mixed):**

| Service | Pricing model | Notes |
|---|---|---|
| [Service name] | [Model] | [e.g., "Starting at $150 — scope is consistent enough to anchor"] |
| … | … | … |

**What to avoid for this business:**
[Specific pricing patterns that would mislead or harm trust for this particular business — and why.]

---

## Section 7 — Content and Data Structure

### Service Card Format

```
{
  name: string                 // 1–5 words
  shortDescription: string     // 1–2 sentences, 20–40 words
  href: string                 // /services/[slug]
  cta: string                  // "Get a quote" / "See what's included" / etc.
  icon?: string                // optional — only if genuinely differentiating
  proofNote?: string           // optional — 1 line, specific and real
}
```

### Service Overview Page Format

```
{
  pageTitle: string
  metaDescription: string
  headline: string             // H1 — service name or category name
  leadText: string             // 1–2 sentence framing
  services: ServiceCard[]      // list of service cards
  cta: { label: string; href: string }
}
```

### Individual Service Page Format

```
{
  pageTitle: string
  metaDescription: string
  headline: string             // H1 — service name
  framingSubheading: string    // who it is for + what they get
  definition: {
    body: string               // 2–4 paragraphs or structured content
  }
  process?: {                  // optional
    steps: Array<{ name: string; description: string }>
  }
  included?: string[]          // optional — bullet list of inclusions
  proof?: {                    // optional
    quote: string
    attribution: string
  }
  pricing?: PricingBlock       // optional — see pricing block format below
  faq?: Array<{ question: string; answer: string }>
  relatedServices?: Array<{ name: string; href: string; description: string }>
  cta: { label: string; href: string }
}
```

### Pricing Block Format

```
{
  model: 'starting-at' | 'range' | 'packages' | 'quote-first'
  startingAt?: { price: number; scopeNote: string }
  range?: { low: number; high: number; variable: string }
  packages?: Array<{
    name: string
    description: string
    inclusions: string[]
    price: number | string     // number or "Starting at $X"
    recommended: boolean
    cta: { label: string; href: string }
  }>
  quoteFirst?: { body: string; cta: { label: string; href: string } }
}
```

### Comparison Block Format (when applicable)

```
{
  headline: string
  options: Array<{
    name: string
    useCaseNote: string        // "Best for [situation]"
    features: Array<{
      label: string
      included: boolean | string
    }>
    price: number | string
    recommended: boolean
    cta: { label: string; href: string }
  }>
}
```

---

## Section 8 — Mobile and Accessibility Notes

**Mobile service section priorities:**
[List the 3–5 most important mobile-specific requirements for this service layer — e.g., "Service cards must be full-width and scannable without zooming," "CTA must be tappable at 44px minimum"]

**Mobile adaptations by module:**

| Module | Desktop | Mobile adaptation |
|---|---|---|
| [Module name] | [Desktop treatment] | [Explicit mobile behavior] |

**Accessibility requirements:**
- [Heading hierarchy: e.g., "Each service card name must be an H3 inside a section with H2"]
- [Keyboard navigation: e.g., "Cards must be focusable; CTA buttons must have clear focus rings"]
- [Screen reader: e.g., "Service card links must have descriptive aria-labels if the CTA label is generic"]
- [Contrast: e.g., "Service descriptions must meet 4.5:1 contrast against card background"]
- [Icon handling: e.g., "Icons are decorative — aria-hidden=true; service name carries all semantic meaning"]

---

## Section 9 — Implementation Package

**Components required:**

| Component | File path | Variants | Notes |
|---|---|---|---|
| ServiceGrid | `components/sections/ServiceGrid.tsx` | `layout="grid" \| "list" \| "featured"` | Server component |
| ServiceCard | `components/ui/ServiceCard.tsx` | `size="default" \| "featured"` | Server component |
| ServicePageHero | `components/sections/ServicePageHero.tsx` | — | Server component |
| ProcessSteps | `components/ui/ProcessSteps.tsx` | `style="numbered" \| "named"` | Server component |
| PricingBlock | `components/sections/PricingBlock.tsx` | `model="starting-at" \| "packages" \| "quote-first"` | Server component |
| ComparisonBlock | `components/sections/ComparisonBlock.tsx` | — | Server component |
| ServiceFAQ | `components/sections/ServiceFAQ.tsx` | — | Client component (accordion state) |
| RelatedServices | `components/ui/RelatedServices.tsx` | — | Server component |

**Data files:**

| File | Contents |
|---|---|
| `data/services/index.ts` | Full service list with all fields |
| `data/services/[slug].ts` | Individual service page content |
| `data/services/pricing.ts` | Pricing data (if applicable) |

**Default implementation approach:**
[Static data files with no backend required unless: CMS is confirmed in upstream plan, dynamic pricing is required, or booking integration is being handled by a different agent]

**Interaction notes:**
- FAQ accordion: client-side only, no server state needed
- Comparison block highlight: CSS only, no JS required
- "Get a quote" CTAs: link to contact page or scroll to contact form — no client-side modal required unless booking agent specifies otherwise

---

## Section 10 — Verification and Escalation Notes

**Assumptions made:**

| Assumption | Based on | Risk if wrong |
|---|---|---|
| [e.g., "Assumed 3 primary services from discovery notes"] | [01-discovery partial input] | [Low — adding a 4th would require minor grid adjustment] |
| … | … | … |

**Items requiring business confirmation:**

| Item | Why it needs confirmation | When needed |
|---|---|---|
| [e.g., "Starting-at pricing of $X for Service Y"] | [Client has not confirmed pricing publicly] | [Before Phase 3 — copy finalization] |
| … | … | … |

**Items to escalate to 00:**

| Issue | Reason | Urgency |
|---|---|---|
| [e.g., "Service catalog has 4 overlapping services that cannot be resolved by renaming alone"] | [Positioning decision required — business needs to decide what it is] | [Before sitemap is finalized] |
| … | … | … |
