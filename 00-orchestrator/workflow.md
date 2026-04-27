# Workflow: 7-Stage Production Pipeline

This document defines the required sequence for every website build. No stage may be skipped. No stage may begin before the previous stage's gate is passed.

---

## Pipeline Overview

```
[1] Questions → [2] Plan → [3] Sitemap → [4] Wireframe Plan → [5] Design System → [6] Build Plan → [7] Code
```

Speed of delivery is the lowest priority. Do not rush stages. Better inputs produce better outputs.

---

## Stage 1 — Questions

**Trigger:** Any new website project request, regardless of how detailed the brief is.

**Handled by:** `01-discovery`

**Required inputs to start:**
- A user request of any kind (even vague)

**What happens:**
Ask clarifying questions to collect the minimum required information. Do not ask all questions at once. Group them logically. Stop asking once all gate conditions are met.

Always ask for 2–3 visual reference websites at this stage. If the user cannot provide them, ask them to describe the feeling they want instead. Do not skip this step.

**Completion gate — ALL of the following must be true:**
- [ ] Business name is confirmed
- [ ] Business type is confirmed (home services / clinic / salon / consultant / fitness / agency / other)
- [ ] Primary conversion action is named (call, book, quote request, purchase, form fill)
- [ ] Target customer is described in at least one sentence
- [ ] Geographic scope is confirmed (single city, metro area, regional, national)
- [ ] At least one of the following is true: visual references provided OR user has explicitly described the feeling they want
- [ ] Any known constraints are documented (no CMS, limited budget, must launch in X weeks, existing brand, etc.)

**Blockers:**
- User gives a vague brief with no business context → ask all gate questions before advancing
- User provides some info but skips the visual references → ask specifically before advancing
- User says "just start" without meeting gate conditions → explain that questions protect the design quality and ask them anyway

---

## Stage 2 — Plan

**Trigger:** Stage 1 gate passed.

**Handled by:** `02-planning`

**Required inputs to start:**
- All Stage 1 gate conditions confirmed

**What happens:**
Produce a structured project plan that defines the goals, trust requirements, CTAs, design direction, feature list, and constraints. This is the single source of truth for the whole project. Everything downstream derives from it.

Design direction adjectives from Stage 1 (words like "clean," "modern," "premium") must be translated into at least 3 concrete rules before this stage is complete. Vague labels are not allowed to pass the gate.

**Completion gate — ALL of the following must be true:**
- [ ] Business context is summarized (1–3 sentences)
- [ ] Primary site goal is stated as a measurable outcome (e.g., "increase inbound calls," not "get more clients")
- [ ] Primary CTA is named and its placement intent is noted (e.g., "Call Now — sticky header + hero + section footer")
- [ ] Secondary CTA is named if applicable
- [ ] Trust requirements are listed (e.g., reviews required, certifications must show, before/after expected)
- [ ] Feature list is confirmed: explicitly list what is IN and what is OUT
- [ ] At least 3 concrete design direction rules are written (not adjectives — actual rules about typography tone, spacing, color restraint, animation level, etc.)
- [ ] Constraints are documented
- [ ] Any backend requirements are explicitly called out (forms, booking, payments, etc.) or marked as none

**Blockers:**
- Design direction is still only adjectives → translate them before advancing
- Feature list is ambiguous → confirm each item as in or out explicitly
- CTA is unnamed → block and ask

---

## Stage 3 — Sitemap

**Trigger:** Stage 2 gate passed.

**Handled by:** `03-sitemap`

**Required inputs to start:**
- Confirmed Plan from Stage 2

**What happens:**
Define the full page structure of the site. Every page that will be built must be named. Navigation hierarchy must be defined. Determine primary nav, footer nav, and any utility pages (404, thank-you, policy pages).

**Completion gate — ALL of the following must be true:**
- [ ] All pages are listed by name
- [ ] Primary navigation is defined (which pages appear in the main nav, in what order)
- [ ] Footer navigation is defined
- [ ] Page hierarchy is clear (parent/child relationships for any nested pages)
- [ ] Any conditional pages are flagged (e.g., pages that only exist if a feature is active)
- [ ] Sitemap is consistent with the feature list in the Plan (no pages for deactivated features)

**Blockers:**
- Sitemap includes pages for features marked OUT in Stage 2 → resolve conflict before advancing
- Navigation structure is ambiguous → define it explicitly

---

## Stage 4 — Wireframe Plan

**Trigger:** Stage 3 gate passed.

**Handled by:** `04-wireframes`

**Required inputs to start:**
- Confirmed Sitemap from Stage 3

**What happens:**
Define the section order, content hierarchy, and layout logic for each page. This is structural planning — not visual design. No colors, no fonts, no component styles. Focus on: what sections exist, in what order, what content priority exists within each, and how the page flows on mobile.

**Completion gate — ALL of the following must be true:**
- [ ] Every page from the Sitemap has a section breakdown
- [ ] Each section has a named content hierarchy (what information appears, in what order of importance)
- [ ] Section order is justified by conversion logic (highest-priority CTA placement is intentional)
- [ ] Mobile layout notes exist for any section with non-obvious stacking or reorder behavior
- [ ] No visual design decisions have been embedded (this stage is structure only)

**Blockers:**
- Visual design decisions are mixed into the wireframe plan → remove them, defer to Stage 5
- A page from the Sitemap is missing a section breakdown → complete it before advancing

---

## Stage 5 — Design System

**Trigger:** Stage 4 gate passed.

**Handled by:** `05-design-system`

**Required inputs to start:**
- Confirmed Plan from Stage 2 (for design direction rules)
- Visual references from Stage 1

**What happens:**
Translate the design direction into a concrete, complete visual system. This system will govern every component built in Stage 7. The design system must be specific enough that two different developers would make the same visual decision when following it.

Visual references must be analyzed and translated into principles — not copied.

**Completion gate — ALL of the following must be true:**
- [ ] Typography: primary font family named, weight scale defined, size scale defined, hierarchy rules stated
- [ ] Color: palette is named (max 4 roles: primary, neutral, accent, semantic), usage rules are defined per role
- [ ] Spacing: base unit is defined, spacing scale is documented
- [ ] Buttons: primary and secondary button styles are fully described (shape, size, weight, hover behavior)
- [ ] CTA treatment: visual hierarchy of CTAs is defined (what makes the primary CTA visually dominant)
- [ ] Image treatment: rules for how images appear (aspect ratios, overlay treatment, photography tone)
- [ ] Animation level: explicitly stated as none / subtle / moderate — and defined (what "subtle" means in practice)
- [ ] Section density: explicitly stated as tight / balanced / open — and defined
- [ ] Anti-AI rule check: confirm none of the following are present: neon tech palettes without reason, glassmorphism, excessive gradients, meaningless icon rows, identical spacing everywhere, shadows on every element

**Blockers:**
- Any field above is missing → complete it before advancing
- Anti-AI check fails → revise before advancing

---

## Stage 6 — Build Plan

**Trigger:** Stage 5 gate passed.

**Handled by:** `06-build-plan`

**Required inputs to start:**
- All prior stage outputs

**What happens:**
Define exactly what will be built: stack, pages, components per page, feature modules, and what complexity is explicitly out of scope. Produce a handoff checklist that defines what "first draft complete" means for this specific project.

**Completion gate — ALL of the following must be true:**
- [ ] Frontend framework is confirmed
- [ ] Styling approach is confirmed (Tailwind, CSS modules, etc.)
- [ ] All pages from the Sitemap are listed with their component breakdown
- [ ] All active feature modules are listed with their folder reference
- [ ] Backend requirements are confirmed: what's needed, what library/service will handle it
- [ ] Explicit complexity constraints are listed (what to avoid for this build)
- [ ] "First draft complete" checklist is written (the specific criteria for considering this build done)

**Blockers:**
- Stack is not confirmed → confirm before advancing
- Any Sitemap page is missing a component breakdown → complete it
- First draft criteria are vague → make them specific and testable

---

## Stage 7 — Code

**Trigger:** Stage 6 gate passed.

**Handled by:** Active feature folders based on routing rules in `routing-rules.md`

**Required inputs to start:**
- All prior stage outputs
- Build Plan confirmed

**What happens:**
Implementation begins. Route each component or section to its correct feature folder. Follow the Build Plan exactly. Do not introduce features, design decisions, or backend complexity that were not defined in earlier stages.

If a decision arises during coding that was not covered in the Build Plan, stop and resolve it — do not invent a solution silently.

**Completion gate:**
- All items on the "first draft complete" checklist from Stage 6 are done
- Design system is applied consistently across all pages
- All active features are implemented
- Mobile layout is correct on all pages
- No deactivated features are included

**Blockers:**
- A Build Plan item is ambiguous → clarify before building it
- A design decision is not covered by the design system → route back to `05-design-system` for a ruling, then continue

---

## Revision Handling

Revisions are not a new full pipeline run. Route them according to `routing-rules.md` revision rules.

The orchestrator must confirm the revision scope before any work begins. Revisions must not cascade into unrelated areas unless the user explicitly requests it.
