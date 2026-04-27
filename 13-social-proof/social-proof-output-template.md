# Social Proof Output Template

Use this template to produce the full social-proof feature output. Fill every section. Label all assumptions. Do not leave sections blank — if a section is not applicable, write "N/A — [reason]."

---

## SOCIAL PROOF FEATURE PACKAGE
**Project:** [Business Name]
**Page(s):** [Homepage / Service Pages / Landing Page]
**Stage:** 13-social-proof — output complete
**Proof tier:** [strong / moderate / thin / none]
**Business type:** [home-services / health-wellness / professional-services / retail-food-hospitality]
**Brand register:** [Approachable / Mid-range / Authoritative — from 05-brand-direction]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Trust Strategy Summary

**Primary trust barrier:**
[One sentence: "The visitor is most likely to distrust this business because [specific fear]."]

**Proof system selected:**
[Describe the core proof anchor and why — e.g., "Google reviews are the primary anchor. Certifications provide secondary credibility. Owner block used as human trust layer given thin testimonial pool."]

**Proof density level:**
[Restrained / Moderate / Dense — and the reason for this density given brand register and proof tier]

**Proof tier:** [strong / moderate / thin / none]
**Computed from:** [Describe what data produced this tier — rating, count, testimonials available, etc.]

---

## Section 2 — Social-Proof Inventory

### Available Assets
| Asset | Value / Description | Status | Strength |
|---|---|---|---|
| Google rating | [e.g., 4.9 stars] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Google review count | [e.g., 83] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Testimonial quotes | [e.g., 5 real quotes from Google export] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Certifications | [e.g., Licensed & Insured, BBB Accredited] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Years in business | [e.g., 11 years, since 2013] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Owner/operator details | [Name, photo availability, bio] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Guarantees | [e.g., satisfaction guarantee, free re-service] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |
| Service-area details | [e.g., Austin + 4 surrounding cities] | Confirmed / Unconfirmed / Placeholder | Strong / Moderate / Weak |

### Missing or Weak Assets
| Asset | Missing | Why It Matters | Fallback |
|---|---|---|---|
| [Asset name] | [Missing / Below threshold] | [What trust gap this creates] | [What replaces it] |

### Risk Flags
[List any proof assets that exist but carry risk: unverifiable claims, borderline credibility, outdated certifications, paraphrased quotes that need labeling, etc.]

---

## Section 3 — Proof Hierarchy

Which signals appear first, later, and which are removed or de-emphasized:

**Tier 1 — Lead with this:**
[Strongest signal and why it leads]

**Tier 2 — Reinforce with this:**
[Secondary signal]

**Tier 3 — Support with this:**
[Tertiary signal]

**Removed or de-emphasized:**
[Signals that exist but should not be featured — and why]

**Rationale for this hierarchy:**
[1–2 sentences explaining why this priority order serves the trust barrier for this business type]

---

## Section 4 — Placement Plan

| Page Zone | Module | Proof Tier Required | Notes |
|---|---|---|---|
| Hero area | [Module A — Proof Bar / Certification fallback] | [strong / moderate / any] | [Any conditional logic] |
| Below hero / intro | [Module B — Badge Strip] | [any] | [Number of badges] |
| Mid-page proof zone | [Module C — Testimonials Section, variant: C1/C2/C3] | [varies] | [Section heading] |
| Mid-page stats | [Module D — Review Summary Block] | [moderate / strong] | [Only if count ≥ 10] |
| Services section | [Module H — Service Trust Inserts] | [moderate / strong] | [Quote vs. badge per service] |
| Contact form | [Module E — Form Reassurance Zone] | [any] | [Which 2–3 items to use] |
| Footer | [Module F — Footer Trust Strip] | [any] | [Content for this tier] |
| Owner/operator | [Module G — Owner Block] | [all tiers, priority if thin/none] | [Photo available?] |

---

## Section 5 — Module Specs

*(Include a spec block for each module included in the placement plan)*

---

### Module [Letter] — [Module Name]

**Purpose:** [What this module does on this specific page for this specific business]

**Proof tier required:** [strong / moderate / thin / none / any]

**Content:**
[Exact content for this module — real data, real quotes, real badge labels. Mark all placeholders clearly.]

**Visual treatment:**
[Layout type, density, card style, icon use, alignment — reference 06-design-system tokens where applicable]

**Interaction behavior:**
[None / Expand-to-read / Carousel (only if ≥ 6 real entries) / External link to review platform]

**Mobile behavior:**
[Explicit description of mobile layout — not "it stacks." Describe what happens to each element.]

**Implementation notes:**
[Component name, variant, data source, any conditional rendering logic]

---

*(Repeat for each module)*

---

## Section 6 — Content / Data Structure

### Testimonial Object
```json
{
  "id": "string",
  "quote": "string — 2–4 sentences, real or clearly paraphrased theme",
  "reviewer_name": "string — first name + last initial only",
  "star_rating": 5,
  "platform": "google | yelp | houzz | healthgrades | direct | other",
  "job_type_tag": "string | null",
  "date_approximate": "string | null",
  "is_paraphrased": false,
  "verified": false
}
```

### Badge / Certification Object
```json
{
  "id": "string",
  "label": "string — e.g. 'Licensed & Insured'",
  "sub_label": "string | null — e.g. 'CA Contractor #XXXXXX'",
  "icon_slug": "string — maps to icon library",
  "verification_url": "string | null",
  "expiry_date": "string | null",
  "verified": false
}
```

### Review Summary Object
```json
{
  "platform": "google",
  "rating": null,
  "review_count": null,
  "place_id": "string | null",
  "last_verified": "string | null"
}
```

### Guarantee Object
```json
{
  "label": "string — e.g. '100% Satisfaction Guarantee'",
  "description": "string | null — 1 sentence",
  "is_factual": false
}
```

### Proof Inventory Object (build-time input)
```json
{
  "proof_tier": "strong | moderate | thin | none",
  "google": {
    "rating": null,
    "review_count": null,
    "place_id": null
  },
  "testimonials": [],
  "badges": [],
  "years_in_business": null,
  "founded_year": null,
  "owner": {
    "name": null,
    "title": null,
    "photo_available": false,
    "bio_short": null,
    "guarantee_statement": null
  },
  "guarantees": [],
  "service_area": null
}
```

---

## Section 7 — Mobile + Accessibility Notes

**Mobile behavior summary:**
[Overall description of how proof modules behave on mobile — what appears near CTAs, what stacks, what is condensed]

**Module-specific mobile rules:**
| Module | Mobile behavior |
|---|---|
| A — Hero Proof Bar | [e.g., Single line, never wraps, falls back to cert line if count < 10] |
| B — Badge Strip | [e.g., 2-col grid below 3 items] |
| C — Testimonials | [e.g., Single column stack, quote cards full width] |
| D — Review Summary | [e.g., 3 stats stack vertically, centered] |
| E — Form Reassurance | [e.g., Stacks below fields, above submit, always visible] |
| F — Footer Strip | [e.g., Wraps to 2 lines max] |
| G — Owner Block | [e.g., Photo stacks above text] |

**Accessibility requirements:**
- [ ] Star ratings include `aria-label="X out of 5 stars"`
- [ ] All badges have visible text labels alongside icons
- [ ] Trust sections use semantic `<section>` with `<h2>` or `aria-label`
- [ ] Any carousel or slider is keyboard-navigable with visible focus states
- [ ] Trust meaning is never encoded only in color or icon
- [ ] Minimum 4.5:1 contrast ratio on all proof text
- [ ] Reviewer names use first name + last initial only (no full names)
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Platform logos have descriptive `alt` text (e.g., `alt="Google"`)

---

## Section 8 — Escalation Flags

*(List any items requiring a decision or input outside this agent's authority. If none, write "None.")*

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| [Issue] | [Missing input / Unverified claim / Client decision / Scope boundary] | [Description] | [Client / Project lead / Prior stage / Agent 00] | [Before Phase N / Before launch] |

**Must be verified before launch:**
- [ ] All certification/license numbers rendered on the page
- [ ] All star ratings and review counts — confirm currency
- [ ] All testimonial quotes — confirm real, confirm permission to publish
- [ ] Any guarantee language — confirm this is a real business policy
- [ ] Owner name, photo, bio — confirm accuracy and consent
- [ ] Any award or recognition badges — confirm named, real, and current

**Paraphrased content:**
[List any content marked `is_paraphrased: true` and the specific labeling that must appear in the UI]
