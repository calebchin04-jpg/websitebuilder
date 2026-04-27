# Hero Output Template

Use this template to produce the full hero feature output. Fill every section. Label all assumptions. Do not leave sections blank — if a section is not applicable, write "N/A — [reason]."

---

## HERO FEATURE PACKAGE
**Project:** [Business Name]
**Page:** [Homepage / Service Page / Landing Page]
**Stage:** 10-hero — output complete
**Hero type:** [Proof-First / Offer-First / Story-First / Authority-First]
**Layout:** [A — Split / B — Centered / C — Media-Forward / D — Type-Only]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Hero Strategy Summary

**Primary conversion job:**
[One sentence: "This hero must make [target audience] immediately understand [key message] and take action by [CTA]."]

**Primary trust barrier:**
[One sentence: "The visitor is most likely to leave without converting because [specific fear or doubt]."]

**Brand register:**
[Approachable / Mid-range / Authoritative — from 05-brand-direction]

**Hero type selected:** [Name]
**Reason:** [1–2 sentences explaining why this type was chosen over the alternatives]

**Micro-zone decision:** [Include / Exclude]
**Micro-zone type (if included):** [Review count strip / Logo row / Proof statement row / Credentials row / Social proof snippet]
**Reason:** [1 sentence]

---

## Section 2 — Content Hierarchy

What the visitor must understand, in priority order:

1. **First (0–2 seconds):** [The single most important thing]
2. **Second (2–4 seconds):** [The supporting detail or proof]
3. **Third (4–6 seconds):** [The action available to them]

[Note: The layout and copy must reinforce this hierarchy — do not let proof signals visually compete with the primary message]

---

## Section 3 — Final Recommended Copy

**Headline:**
> [Headline text — 6–12 words]

**Subheadline:**
> [Subheadline text — 10–20 words, single sentence]

**Primary CTA:**
Label: `[Verb-first label, 2–5 words]`
Destination: `[/contact or /book or tel:+1xxxxxxxxxx]`

**Secondary CTA (if applicable):**
Label: `[Label]`
Destination: `[URL]`
Justification: [Why a secondary CTA is warranted here]

**Trust/proof line (if applicable):**
> [Short inline trust signal — maximum 10 words — near CTA]

**Micro-zone content (if included):**
> [Exact content for the micro-zone strip — use the format for the chosen micro-zone type]

---

## Section 4 — Backup Copy Options

*(1–2 alternate headlines with brief rationale — for client review or if primary is rejected)*

**Backup A:**
> [Alternate headline]
**Rationale:** [Why this is a valid alternative and when it might be preferred]

**Backup B (optional):**
> [Alternate headline]
**Rationale:** [Why this is a valid alternative and when it might be preferred]

---

## Section 5 — Layout Logic

**Layout type:** [A / B / C / D — name]

**Layout rationale:**
[2–3 sentences: why this layout was chosen based on brand register, available photography, and hero type]

**Media direction:**
- Subject: [What to show — founder, finished work, environment, abstract]
- Composition: [Specific framing or content notes]
- Tone: [Lighting, color temperature, setting]
- Minimum dimensions: [e.g., 1600×900px for desktop, 800×800px square crop for mobile]
- File name (placeholder): `[descriptive-name.jpg]`

**Text legibility solution (for media-based layouts):**
[How text reads over the image — overlay, separate surface, background blur, or N/A for type-only]

**Desktop layout description:**
[Brief description of the desktop composition — column widths, dominant element, CTA position]

---

## Section 6 — Trust/Proof Logic

**Primary proof signal in hero:**
[What it is, where it appears in the layout, why this is the right signal for this audience]

**Proof placement:**
[Above headline / Below subheadline / Below CTA / Micro-zone — explain rationale]

**Micro-zone structure (if applicable):**
[Describe the visual structure of the micro-zone strip: content, spacing, icon or no-icon, centered or left-aligned]

**What was excluded and why:**
[Any proof signals considered but not used above the fold — and why they were moved or omitted]

---

## Section 7 — Mobile Behavior

**Layout at mobile:**
[Explicit description — not "it stacks." Describe what happens to each element.]

**Headline at mobile:**
- Size token: [e.g., text-3xl on mobile, text-5xl on desktop — from 06-design-system type scale]
- Line wrap: [Confirm headline is ≤ 3 lines at 375px]

**CTA at mobile:**
- Width: [Full-width (`w-full`) / Contained — specify]
- Position: [Confirm above-fold on mobile]

**Image/media at mobile:**
- Crop behavior: [Landscape crop / Portrait crop / Background color fallback / Full-bleed with overlay]
- Aspect ratio at mobile: [e.g., 4:3, 1:1, 16:9]

**Micro-zone at mobile:**
[How the micro-zone adapts: single line / stacked / scrollable / hidden at mobile if not feasible]

**Trust/proof line at mobile:**
[Visible above fold: Yes / No — if No, explain where it moves]

---

## Section 8 — Asset Requirements

| Asset | Description | Format | Minimum size | Status |
|---|---|---|---|---|
| Hero image (desktop) | [Description] | JPG / WebP | 1600×900px | [Confirmed / Needed / Placeholder] |
| Hero image (mobile crop) | [Description] | JPG / WebP | 800×600px | [Confirmed / Needed / Same as desktop] |
| [Logo 1] | [For micro-zone logo row if applicable] | SVG / PNG | — | [Confirmed / Needed] |

**Photography notes:**
[Any specific direction for the photographer or designer: location, subject, style reference]

**Fallback if assets are unavailable:**
[Layout D type-only treatment, or specific color background from design system — describe exactly]

---

## Section 9 — Implementation Notes

**Component:** `components/sections/Hero.tsx`
**Variant prop value:** `variant="[home / inner-page / landing]"`
**Data file:** `data/pages/[page].ts` → hero object

**Component type:** [Server / Client]
**Reason:** [Why — static content = Server; animation trigger or interactive element = Client]

**Key props:**
```typescript
// Hero component receives from page data file:
{
  headline: string
  subheadline: string
  cta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  trustLine?: string
  image: { src: string; alt: string; mobileSrc?: string }
  variant: 'home' | 'inner-page'
}
```

**Micro-zone component (if applicable):**
`components/sections/[TrustBar / LogoRow / ProofRow / CredentialsRow].tsx`

**Animation:**
[None / Fade-in on load / Scroll-triggered — specify which elements and method from design system]

**Accessibility notes:**
[Decorative image alt="", meaningful image alt text, CTA aria-label if button text is ambiguous]

---

## Section 10 — Escalation Flags

*(List any items requiring a decision or input outside this agent's authority. If none, write "None.")*

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| [Issue] | [Missing input / Contradiction / Client decision / Scope boundary] | [Specific description] | [Client / Project lead / Prior stage] | [Before Phase 1 / Before Phase 3 / Before launch] |
