# Critique Rules

This file defines what information the design system needs from the wireframe PRD and how to evaluate whether that information is present — regardless of what format the wireframe document takes.

---

## What the Design System Needs From Any Wireframe Document

Before building the design system, the following must be findable — in some form — across the wireframe PRD and the prior stage documents (discovery brief, planning PRD):

### A. Component Inventory
- What reusable components appear in the wireframes? (buttons, cards, forms, nav, testimonial blocks, trust bars, hero layouts, etc.)
- Without this: Cannot define component rules. Must infer from page descriptions — risk of missing components.

### B. Page Count and Structure Type
- How many pages are there? Are they template-based or unique?
- Without this: Cannot calibrate how much visual variation is needed vs. how much systemic consistency is required.

### C. Trust and Proof Placement
- Where do testimonials, reviews, and trust signals appear across the site?
- Without this: Cannot define trust-styling rules or ensure consistent proof visual treatment.

### D. CTA Location and Type
- Where do CTAs appear? What form do they take (button, form, phone link, embedded widget)?
- Without this: Cannot define CTA visual hierarchy or button rules correctly.

### E. Visual Direction Input
- At minimum, one of the following must exist: visual references, vibe description (opposite-pair choices from discovery), or a concrete design direction note.
- Without this: Cannot translate brand feel. Must proceed with assumptions, which creates high revision risk.

### F. Content Density Pattern
- Is this a content-heavy site or a lean, minimal site?
- Are any pages data-heavy (pricing tables, service grids) vs. narrative-focused (about, landing)?
- Without this: Cannot calibrate spacing rhythm or section density correctly.

### G. Special Interaction Components
- Are there any interactive components — accordions, sliders, before/after toggles, booking widgets, tabs?
- Without this: Cannot define interaction state rules for non-standard components.

---

## Critique Criteria

Check each of the following and record findings:

### 1. Visual Direction Completeness

**Check:** Is there usable visual direction from discovery or planning — references, vibe description, banned styles, color constraints, or font preferences?

**Weak signals:**
- Only vague adjectives with no discovery translation ("modern," "clean," "premium")
- No references and no vibe description
- Discovery brief explicitly flagged visual direction as missing

**If missing:** This is a send-back trigger if it is the only foundation for the visual system.

---

### 2. Component Coverage

**Check:** Can you identify all major components that will need design rules?

**Weak signals:**
- Wireframe mentions "proof section" or "trust block" without any indication of what form it takes (card? inline quote? review widget?)
- Navigation described only as "sticky nav" without indicating if it has dropdowns, a mobile menu pattern, or a CTA button
- Forms mentioned without indicating field count or step structure

**If weak:** Infer from business type and planning context. Label as assumption.

---

### 3. CTA Visual Hierarchy Clarity

**Check:** Is it clear which CTAs are primary vs. secondary, and how many CTA types exist across the site?

**Weak signals:**
- Every section ends with a generic "CTA here" note
- No distinction between primary and secondary CTAs
- Multiple CTA types with no hierarchy

**If weak:** Infer from planning PRD's CTA strategy. Label as assumption.

---

### 4. Trust and Proof Treatment Specifics

**Check:** Is there enough information about how proof content appears to design consistent trust blocks?

**Weak signals:**
- "Testimonials section" mentioned but no indication of how many testimonials, whether they are text-only or include photos, or how they are laid out
- No review count or star display mentioned

**If weak:** Use business type defaults (see `design-system-rules.md` trust section). Label as assumption.

---

### 5. Density and Spacing Philosophy

**Check:** Does the wireframe indicate whether pages are lean/minimal or content-rich?

**Weak signals:**
- Pages described purely as section lists without any indication of section length, content volume, or breathing room
- No indication of whether the design should feel spacious or efficient

**If missing:** Infer from audience and positioning. Label as assumption.

---

### 6. Mobile Treatment Notes

**Check:** Are there any mobile-specific wireframe notes that create design constraints?

**Weak signals:**
- No mobile notes at all (acceptable if the design system will define mobile behavior from scratch)
- Mobile notes that contradict the desktop structure (flag as conflict)

---

## Send-Back Threshold

Send the wireframe PRD back to `04-wireframes` if **any** of the following are true:

1. No visual direction exists anywhere across the input documents — no references, no vibe, no style notes, no banned patterns, and no planning notes on brand feel. The design system cannot begin without this.
2. The component inventory is so incomplete that major components (nav, buttons, forms, hero treatment) have no wireframe basis at all.
3. There is a direct contradiction between the wireframe structure and the planning PRD that would cause the design system to make wrong foundational decisions.

A weak but usable document does NOT trigger a send-back. Missing visual direction with enough other context to infer from does NOT trigger a send-back. Only cases where the design system genuinely cannot start without resolution.

---

## Critique Category Labels

Use these in the critique section output:

- `[VISUAL-DIRECTION]` — Visual style or brand feel gap
- `[COMPONENT]` — Missing or ambiguous component definition
- `[TRUST]` — Weak or missing trust/proof treatment definition
- `[CTA]` — Weak or ambiguous CTA hierarchy
- `[DENSITY]` — Missing density or spacing philosophy direction
- `[MOBILE]` — Mobile treatment contradiction or gap
- `[CONFLICT]` — Contradiction between wireframe and prior stage documents
- `[BLOAT]` — Wireframe-level complexity that would cause design system overreach
