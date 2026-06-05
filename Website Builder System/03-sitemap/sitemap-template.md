# Sitemap PRD Template

Use this template to produce the full sitemap output. Fill in every section. Do not skip any.

---

## SITEMAP PRD
**Project:** [Business Name]
**Build type:** [New build / Redesign]
**Date:** [Date of session]
**Stage:** 03-sitemap — output complete
**Planning PRD status:** [Strong / Acceptable with flags / Weak — sent back / Weak — proceeded with structural risks noted]

---

## 1. Project Overview

[1–3 sentences summarizing the project for any downstream skill reading this document cold. Include: business name, type, primary offer, location, and the single most important structural fact about this sitemap — e.g., "This is a 7-page local service site structured around direct call conversion" or "This is a 14-page multi-service site with 4 city pages for local SEO in the Austin metro."]

---

## 2. Sitemap Summary

**Total pages:** [Number]
**Navigation structure:** [Flat / Parent-child / Multi-tier]
**Primary conversion page:** [URL]
**Local SEO pages included:** [Yes — N pages / No]
**CMS-managed pages:** [List pages, or "None — static site"]

**Page count breakdown:**
- Core pages: [N]
- Service pages: [N]
- Trust/credibility pages: [N]
- Local SEO pages: [N]
- Utility/legal pages: [N]
- CTA path pages: [N]

---

## 3. Critique of Planning PRD

**Overall planning PRD quality:** [Strong / Acceptable / Weak]

**Issues identified:**

> **[CATEGORY]** Problem: [What is weak or missing]. Impact on IA: [What it makes harder]. Resolution: [Inferred / Flagged / Deferred to skill].

*(List all issues. If none: "Planning PRD is complete and well-formed. No significant issues found.")*

---

## 4. Send-Back to 02-Planning *(include only if send-back was triggered)*

```
SEND-BACK TO 02-PLANNING
Reason: [Statement of why the planning PRD cannot support sitemap decisions]

Required fixes:
1. [Foundation]: [Missing item]. [Why it blocks IA]. [What a correct answer looks like].
2. ...

Structural risks from current gaps:
- [Risk]: [What will likely go wrong in the sitemap if unresolved].
```

---

## 5. Information Architecture Logic

[3–5 sentences explaining the overall structural reasoning for this site. Why is the site organized this way? What is the primary navigation metaphor? How does the structure support the user journey? Why were certain decisions made (e.g., single services page vs. multiple, separate team page vs. section on about)?]

**Key structural decisions:**
- [Decision 1 — e.g., "Services are individual pages because each targets a distinct local search query."]
- [Decision 2 — e.g., "No separate reviews page — testimonials live as sections because the volume doesn't warrant a dedicated page."]
- [Decision 3 — e.g., "About and Team are merged because the business is owner-operated with a 2-person team."]

---

## 6. Full Page Hierarchy

```
[Business Name] Website

├── / (Homepage)
├── /about
├── /services
│   ├── /services/[service-1]
│   ├── /services/[service-2]
│   └── /services/[service-3]
├── /gallery
├── /service-areas
│   ├── /[city-1]-[service]
│   ├── /[city-2]-[service]
│   └── /[city-3]-[service]
├── /contact
│
├── [CTA Path — not in nav]
│   └── /thank-you
│
└── [Utility / Legal — footer only]
    ├── /privacy-policy
    ├── /terms-of-service
    └── 404 (server-handled)
```

*(Adapt this tree to the actual site. Show all pages.)*

---

## 7. Navigation Structure

### Main Navigation

```
[Logo / Business Name] | [Nav Item 1] | [Nav Item 2] | [Nav Item 3] | [Nav Item 4] | [CTA Button]
```

| Nav Label | Page | URL | Notes |
|---|---|---|---|
| [Label] | [Page name] | [/slug] | [Any notes — e.g., "has dropdown"] |
| [Label] | [Page name] | [/slug] | |
| [CTA label] | [Contact/Booking] | [/contact] | Visually distinct button, rightmost |

**Dropdown behavior (if applicable):**
- "[Parent label]" → dropdown to: [child 1 label / /slug], [child 2 label / /slug]

### Footer Navigation

| Column heading | Links |
|---|---|
| [Column 1 — e.g., Company] | [Link 1], [Link 2], [Link 3] |
| [Column 2 — e.g., Services] | [Link 1], [Link 2], [Link 3] |
| [Column 3 — e.g., Service Areas] | [Link 1], [Link 2], [Link 3] |
| Legal | Privacy Policy, Terms of Service |

---

## 8. Page Groups and Rationale

### Group 1: Core Pages
**Rationale:** [Why these pages form the essential site skeleton]
**Pages:** [List]

### Group 2: Services
**Rationale:** [Why the service structure is organized this way — single page vs. multiple, how it supports the CTA and SEO strategy]
**Pages:** [List]

### Group 3: Trust and Credibility
**Rationale:** [Why these pages build trust and what specific trust job each performs]
**Pages:** [List]

### Group 4: Local SEO / Location *(if applicable)*
**Rationale:** [Why these pages are included, what geographic and search intent they serve, why they are justified for this specific business]
**Pages:** [List]

### Group 5: Utility and Legal
**Rationale:** Standard operational pages. Required for data collection compliance and operational completeness.
**Pages:** [List]

---

## 9. Page-by-Page Purpose Statements

For each page, define:
- **Purpose:** One sentence stating the page's strategic job
- **User need it serves:** What the visitor is trying to accomplish or understand
- **Business need it serves:** What conversion or trust goal the business needs from it
- **Primary CTA on this page:** The action the visitor should take after this page
- **Content it must contain:** High-level content requirements (not section layout — that is `04-wireframes`)

---

### [Page name] — `[/url]`

**Purpose:** [One clear sentence]

**User need:** [What the visitor wants from this page]

**Business need:** [What the business gains from this page]

**CTA on this page:** [Action + destination]

**Required content:**
- [Content item 1]
- [Content item 2]
- [Content item 3]

---

*(Repeat for every page in the sitemap. All pages must be covered.)*

---

## 10. User Paths

Define the major paths visitors take through the site. These are structural paths — not visual flows.

### Primary Path: [Name — e.g., "Direct converter — arrives and books"]
```
[Entry point] → [Page 2] → [Page 3] → [Conversion]
```
**User type:** [Who takes this path]
**Likely entry page:** [URL]
**Key decision pages:** [Where they evaluate trust or offer]
**Conversion page:** [URL]

---

### Secondary Path: [Name — e.g., "Researcher — compares before deciding"]
```
[Entry point] → [Page 2] → [Page 3] → [Page 4] → [Conversion]
```
*(Repeat for each major path — typically 2–4 paths for a local business site)*

---

### CTA Paths

| Starting page | CTA trigger | Destination page | Post-conversion |
|---|---|---|---|
| [Page] | [Button/action] | [/contact or /booking] | [/thank-you or inline message] |

---

## 11. Internal Linking Logic

**Structural links (must exist):**

| From page | Link type | To page | Reason |
|---|---|---|---|
| Homepage | Nav + inline CTA | /contact | Primary CTA path |
| Every page | Header nav | /contact | CTA always accessible |
| /services | Inline cards/links | /services/[each] | Services overview to detail |
| /services/[each] | CTA section | /contact | Service page to conversion |
| /about | CTA section | /contact | Trust page to conversion |
| /gallery | CTA section | /contact | Proof page to conversion |
| /[city pages] | CTA | /contact | Local page to conversion |

**Cross-link recommendations:**
- [From page] → [To page]: [Reason — e.g., "Service pages should cross-link to related services to reduce bounce"]

**Do not link:**
- Legal pages to anything except footer
- /thank-you to anything except homepage
- CTA path pages into nav flows

---

## 12. Local SEO Page Structure *(include only if applicable)*

**Decision:** [Include city pages / Include service-area overview only / No local SEO pages — with one-sentence rationale]

**Local SEO page set:**

| Page name | URL | Target keyword(s) | Content differentiation |
|---|---|---|---|
| [City 1 + Service] | [/slug] | [Primary keyword] | [What makes this page unique vs. others] |
| [City 2 + Service] | [/slug] | [Primary keyword] | |

**URL pattern used:** [Pattern A city-first / Pattern B service-first — and reason]

**Content standard for each page:**
- [Required content element 1 — e.g., city-specific intro paragraph]
- [Required content element 2 — e.g., local trust signals — reviews from that area if available]
- [Required content element 3 — e.g., service-area map or coverage statement]
- [Required content element 4 — e.g., same primary CTA as main service pages]

---

## 13. URL Structure Summary

| Page | URL | Nav placement |
|---|---|---|
| Homepage | `/` | Main nav (logo) |
| [Page] | `/[slug]` | [Main nav / Footer / Utility / CTA path] |
| [Page] | `/[parent]/[slug]` | [Placement] |
*(List all pages)*

---

## 14. Assumptions Made

Format:
> `[ASSUMPTION]` **Topic:** [What was assumed]. **Why:** [Source or reason]. **Impact:** [Downstream risk if wrong].

- [ASSUMPTION] ...

---

## 15. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| [Issue] | [Reason] | [Skill / user] | [Before wireframe / before build] |

---

## 16. Blockers and Risks

*(Include only if present)*

**Blockers:** [Must be resolved before 04-wireframes can begin]

**Risks:** [Known risks that don't block now — e.g., "City page content will be placeholder at launch — SEO value delayed until real content is produced"]

---

## 17. Handoff to 04-Wireframes

**Sitemap status:** Complete / Complete with flags

**Instruction for 04-wireframes:**
> The sitemap above defines all pages. Begin wireframe section planning for each page in this order: [suggested order — typically Homepage first, then primary service pages, then supporting pages]. For each page, the wireframe plan must follow the page purpose and required content defined in Section 9 of this document. The user journey in Section 10 must inform the section hierarchy — conversion-path pages should have minimal friction and CTA-forward layouts. [Any specific wireframe constraints from the planning PRD that remain relevant.]

**Priority pages for wireframe (do these first):**
1. [Page] — reason: [highest conversion impact]
2. [Page] — reason: [most content decisions to resolve]
3. [Page]

---

## 18. Instructions for Later Skills

### 05-Design System
> The site has [N] pages with [structure type]. Navigation type is [flat/parent-child]. [Any structural notes that affect design system decisions — e.g., "City pages use the same layout template as service pages — the design system should define a reusable service/location page template," or "Thank-you page should be minimal and reassuring — design system should have a confirmation page variant."]

### 06-Build Plan
> Page count is [N]. Local SEO pages: [N pages, all using the same template]. CTA path pages: [list]. CMS-managed pages: [list or "none"]. URL structure follows [pattern]. [Any routing or structural notes relevant to build planning — e.g., "Service pages share a parent template," "City pages are generated from a single template with variable content."]

### 07+ Feature Folders
> [Any page-level notes for specific feature folders. E.g., "16-booking-payments: booking widget lives on /book or as a modal triggered from /contact," "15-gallery: gallery page is at /gallery, not embedded only on homepage."]
