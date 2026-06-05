# Critique Rules

This file defines what implementation-critical information must exist before planning begins, and how to evaluate the completeness of prior-stage outputs from an implementation perspective.

---

## What This Skill Needs From Prior Stages

### A. Complete Page Inventory (from 03-sitemap)
- A confirmed list of all pages with URLs and navigation placement
- Without this: Cannot define routing architecture, page file structure, or implementation order

### B. Feature and Integration List (from 02-planning)
- Which features are active: contact form, booking widget, gallery, before/after, maps, live chat, CMS, etc.
- Without this: Cannot define integration requirements, data structures, or component architecture for optional features

### C. Component and Section Inventory (from 04-wireframe or 06-design-system)
- The named sections and components that appear across the site
- Without this: Cannot define the component architecture or reuse strategy

### D. Design System Rules (from 06-design-system)
- Color system, typography system, spacing system, component rules at minimum
- Without this: Cannot define the Tailwind configuration, CSS variables, or base component behavior

### E. Responsive Behavior Direction (from 06-design-system)
- How the site should behave on desktop vs. mobile
- Without this: Cannot define responsive implementation expectations

### F. Animation Rules (from 06-design-system)
- What motion is allowed, what is banned, what timing philosophy applies
- Without this: Cannot define animation implementation constraints

### G. Integration/Backend Requirements (from 02-planning)
- What forms, APIs, third-party services, or dynamic functionality the site needs
- Whether CMS is required and what scope
- Without this: Cannot plan form handling, data flow, or backend integration

### H. Brand Implementation Constraints (from 05-brand-direction)
- What proof components must be structurally prominent
- What contact visibility rules exist
- Whether founder/local story has specific placement requirements
- Without this: Will produce an implementation plan that may silently deprioritize brand-critical structural rules

---

## Critique Criteria

### 1. Is the page list complete and confirmed?

**Pass:** All pages from `03-sitemap` are listed with confirmed URLs.
**Weak:** Page list is partial or still evolving. Proceed with what exists, flag as risk.
**Send-back trigger:** No page list at all.

---

### 2. Is the component inventory sufficient to define architecture?

**Pass:** Named sections/components are identifiable from wireframe and/or design system.
**Weak:** Sections are described vaguely (e.g., "trust section," "social proof area") without enough specificity to define a component.
**Resolution if weak:** Infer from business type and design system context. Label as assumption.

---

### 3. Is the design system complete enough to configure Tailwind and base components?

**Pass:** Color roles, typography scale, spacing scale, border-radius rules, and button/card rules are defined.
**Weak:** Visual direction is conceptual but values/ranges are not defined.
**Send-back trigger:** No design system exists at all — only brand direction.

---

### 4. Are integration requirements clear?

**Pass:** Every feature from `02-planning` has a named integration approach (e.g., "Resend for email delivery," "Calendly embed for booking," "Google Maps embed for location").
**Weak:** Features are listed but integration method is unspecified.
**Resolution if weak:** Apply recommended defaults (defined in `architecture-and-stack-rules.md`). Label as assumption.

---

### 5. Is responsive behavior defined enough for implementation?

**Pass:** Key responsive breakpoints or behavior changes are noted in design system.
**Weak:** Only general statements exist ("mobile-first").
**Resolution if weak:** Apply standard responsive implementation defaults. Label as assumption.

---

### 6. Are animation rules concrete enough?

**Pass:** Motion level is defined and what is allowed/banned is stated.
**Weak:** Only a motion level label ("subtle") with no translation into constraints.
**Resolution if weak:** Apply defaults for the defined motion level. Label as assumption.

---

### 7. Is the CMS decision confirmed?

**Pass:** CMS is confirmed as required/not required, with scope defined if required.
**Weak:** "Maybe" or "client might want to edit."
**Resolution if weak:** Default to no CMS (static). Flag the decision as deferred. Note what changes if CMS is added later.

---

## Send-Back Threshold

Send prior materials back if **any** of the following are true:

1. No design system exists — only brand direction and wireframes
2. No page list exists in any form
3. No feature list exists
4. A fundamental architecture decision is contradicted (e.g., CMS required but design system assumes completely static rendering)

A weak but usable package is NOT sent back — proceed with flags and assumptions.

---

## Critique Category Labels

- `[PAGES]` — Missing or incomplete page list
- `[COMPONENTS]` — Component inventory gap
- `[DESIGN-SYSTEM]` — Design system completeness issue
- `[INTEGRATION]` — Integration or backend requirement unclear
- `[RESPONSIVE]` — Responsive behavior direction insufficient
- `[ANIMATION]` — Animation rules not translated to implementation constraints
- `[CMS]` — CMS decision unresolved
- `[DATA]` — Data/content strategy gap
- `[CONFLICT]` — Two prior-stage decisions contradict each other
- `[OVERENGINEERING]` — Requested complexity disproportionate to project need
- `[UNDERENGINEERING]` — Missing implementation consideration that will cause problems later
