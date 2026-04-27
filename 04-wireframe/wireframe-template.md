# Wireframe PRD Template

Use this template to produce the full wireframe output. Fill in every section. Do not skip any. Label every assumption using the `[ASSUMPTION]` format.

---

## WIREFRAME PRD
**Project:** [Business Name]
**Date:** [Date of session]
**Stage:** 04-wireframe — output complete
**Sitemap PRD status:** [Strong / Acceptable with flags / Weak — sent back / Weak — proceeded with structural risks noted]
**Pages covered:** [Total page count]

---

## 1. Project Overview

[1–3 sentences summarizing the project for any downstream skill reading this document cold. Include: business name, type, primary offer, location, and the single most important structural fact about this wireframe — e.g., "This is a 9-page local remodeling contractor site structured around inbound call and form conversion. The homepage leads with proof because the business has 80+ reviews. All service pages follow a shared template."]

---

## 2. Wireframe Summary

**Total pages wireframed:** [Number]
**Primary CTA mechanism:** [Call / Form / Booking widget / Other]
**Conversion page:** [URL]
**Reusable templates identified:** [List — e.g., "Service page template (applies to 3 pages), City page template (applies to 4 pages)"]
**Key structural decisions:**
- [Decision 1 — e.g., "Hero leads with proof bar rather than company description because the business has 80+ Google reviews."]
- [Decision 2 — e.g., "Contact form is above the fold on the contact page — no competing content."]
- [Decision 3 — e.g., "FAQ section placed before the CTA on all service pages because user anxiety about scope and cost is the primary conversion barrier."]

---

## 3. Critique of Sitemap PRD

**Overall sitemap PRD quality:** [Strong / Acceptable / Weak]

**Issues identified:**

> **[CATEGORY]** Problem: [What is weak, missing, or wrong]. Impact on wireframing: [What layout decision it complicates]. Resolution: [How it was resolved — inferred, corrected in wireframe, or flagged].

*(List all issues. If none: "Sitemap PRD is complete and well-formed. No significant issues found.")*

---

## 4. Send-Back to 03-Sitemap *(include only if send-back was triggered)*

```
SEND-BACK TO 03-SITEMAP
Reason: [Why the sitemap PRD cannot support reliable wireframe planning]

Required fixes:
1. [Page or issue]: [What is missing or wrong]. [Why it blocks layout decisions]. [What the corrected answer must include].
2. ...

Wireframe risks from current gaps:
- [Risk]: [What layout problem will result if this is not resolved].
```

---

## 5. Overall Wireframe Logic

[3–5 sentences explaining the overall structural reasoning for this site's wireframe approach. Why is the site structured this way at the section level? What is the primary conversion logic? How do the sections across all pages work together to move users from arrival to conversion? What are the 2–3 most important structural decisions made and why?]

---

## 6. Reusable Section/Component Patterns

Catalog all reusable patterns identified across this site. For each, define its structure, what pages use it, and any variation rules.

---

### PATTERN: [Pattern Name]

**Used on:** [List pages]
**Job:** [What this pattern accomplishes structurally]
**Contains:**
- [Content element 1]
- [Content element 2]
- [Content element 3]

**Desktop:** [Layout convention — e.g., "Two-column: text left, image right" or "Full-width centered"]
**Mobile:** [Stacking or behavior — e.g., "Stacked: text first, then image" or "Single-column"]
**Variations:** [Any variation rules — e.g., "Homepage version includes review count; service page version includes service-specific subheadline"]

---

*(Repeat for each reusable pattern. See `wireframe-rules.md` for the standard pattern catalog.)*

---

## 7. Page-by-Page Wireframes

For each page, fill in the full section below. Do not skip any page in the sitemap.

---

### PAGE: [Page Name] — `[/url]`

**Page goal:** [One sentence — what this page must accomplish]
**Page role in journey:** [Where this page sits in the user's path — entry, trust, evaluation, conversion, structural]
**Conversion role:** [Primary conversion / Service evaluation / Trust/proof / Local SEO entry / Structural/utility]

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | [Section name] | [One-sentence job] |
| 2 | [Section name] | [One-sentence job] |
| 3 | [Section name] | [One-sentence job] |
| 4 | [Section name] | [One-sentence job] |
| ... | | |

---

#### Section Details

**Section 1: [Section name]**
- **Job:** [What this section accomplishes]
- **Content requirements:**
  - [Headline type — e.g., "Primary value proposition headline"]
  - [Supporting text — e.g., "1–2 sentence positioning statement"]
  - [CTA — e.g., "Primary CTA button — call or form"]
  - [Image/visual — e.g., "Project photo or on-site team photo"]
  - [Proof — e.g., "Star rating + review count embedded in hero"]
- **Notes:** [Any structural note specific to this section]

**Section 2: [Section name]**
- **Job:** [What this section accomplishes]
- **Content requirements:**
  - [Item]
  - [Item]
- **Notes:** [Any structural note]

*(Repeat for all sections on this page.)*

---

#### CTA Logic

**Primary CTA:** [Action + mechanism — e.g., "Call now — click-to-call phone number"]
**Primary CTA placement:** [Where — e.g., "Hero, after testimonials, final CTA band"]
**Secondary CTA:** [Action — e.g., "See our work → /gallery"]
**Secondary CTA placement:** [Where]
**CTA rationale:** [1–2 sentences explaining why this placement strategy serves the page's conversion goal]

---

#### Trust and Proof Placement

**Where proof appears:** [List sections and what type of proof — e.g., "Hero: star rating + review count. After service detail: 2–3 testimonials specific to this service. CTA band: guarantee callout."]
**Rationale:** [Why proof is placed here rather than elsewhere — what friction it reduces at that point]

---

#### Desktop Wireframe Notes

[3–5 sentences describing desktop layout behavior. Cover: multi-column layouts and their column counts, sticky header behavior, any fixed-position elements, content density decisions, and any section-specific layout decision a designer must know before building the visual system.]

---

#### Mobile Wireframe Notes

[3–5 sentences describing what changes on mobile. Cover: stacking orders for multi-column sections, sticky CTA bar decision, navigation collapse, form handling, gallery handling, and any content density reductions. Do not repeat what is the same as desktop — only describe what changes.]

---

#### Layout Rationale

[2–4 sentences explaining the overall layout logic for this page. Why is the section order structured this way? What does the sequence accomplish for the user's journey from arrival to conversion? Are there any non-obvious layout decisions that need explanation for downstream skills?]

---

*(Repeat the full page block for every page in the sitemap.)*

---

## 8. Assumptions Made

Format:
> `[ASSUMPTION]` **Topic:** [What was assumed]. **Why:** [User was vague / sitemap was unclear / content unknown / inferred from business type]. **Impact:** [What downstream decision this affects and what the risk is if the assumption is wrong].

- [ASSUMPTION] ...

---

## 9. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| [Issue] | [Reason] | [Skill / user] | [Before design / before build / before launch] |

---

## 10. Blockers and Risks

*(Include only if present)*

**Blockers:** [Must be resolved before `05-design-system` can begin]

**Risks:** [Known structural risks that don't block design but may require wireframe revision later — e.g., "City page content is placeholder — if real city-specific content is significantly different in volume, section structure may need adjustment."]

---

## 11. Handoff to 05-Design-System

**Wireframe PRD status:** Complete / Complete with flags

**Instruction for 05-design-system:**
> The wireframe PRD above defines the section-level structure for all [N] pages. Begin the visual system design with this structure as the foundation. Key constraints to preserve:
> 1. [Structural constraint — e.g., "Trust bar must appear immediately below the hero on the homepage — do not bury this further down the page in the visual layout."]
> 2. [Structural constraint — e.g., "Contact form must be above the fold on the contact page — the visual system must not add hero or header content that pushes the form below the fold."]
> 3. [Structural constraint — e.g., "FAQ sections use accordion behavior — the design system must include an accordion component."]
>
> Freedom the design system has:
> - Visual language, color, typography, and aesthetic direction are fully open — the wireframes make no visual decisions
> - Component styling within sections (card style, button shape, typography scale) is entirely in the design system's domain
> - Animation and motion decisions are the design system's call
> - Spacing rhythm within sections is the design system's call — section order is fixed, internal spacing is not
>
> Priority pages for design: [List 1–3 pages that need design attention first, with brief reason]

---

## 12. Instructions for Later Skills

### 06-Build Plan
> Page count: [N]. Reusable templates: [List]. Component patterns that require build decisions: [Accordion, gallery, form, sticky header, map embed, booking widget — list what applies]. Pages that share templates: [List]. CMS-managed sections: [List or "none"]. [Any structural note relevant to build planning — e.g., "Service pages share a single template with variable content — build as one template, not 3 individual pages."]

### 07+ Feature Folders
> [Feature-specific notes. E.g., "If a gallery feature folder is activated: the gallery page uses a 3-column grid on desktop, 2-column on mobile, with fullscreen on tap. No masonry — uniform grid."]
> [E.g., "If a booking/payments feature folder is activated: booking widget lives on the contact page, embedded below the form headline, above the contact form — not on a separate page."]
> [E.g., "If a local SEO feature folder is activated: all city pages use the city page template defined in Section 6 of this document. Template does not change per city — only city-specific content (intro paragraph, local reviews if available) changes."]
