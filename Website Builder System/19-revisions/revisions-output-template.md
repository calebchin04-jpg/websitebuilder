# Revisions Output Template

Use this template to produce the full revision plan. Fill every section. Label all assumptions. If a section does not apply, write "N/A — [reason]" rather than leaving it blank.

---

## REVISION PLAN
**Project:** [Business Name]
**Stage:** 19-revisions — output complete
**Revision trigger:** [QA findings / Client request / Implementation issue / Content change / Post-launch feedback / Expansion request]
**Revision type:** [A — Micro Fix / B — Page-Level / C — Shared Pattern / D — Strategic Correction / E — Scope Expansion]
**Blast radius:** [Level 1 / 2 / 3 / 4 / 5]
**Revision mode:** [Direct Fix / Controlled Multi-Area / Upstream Reopen / Expansion Pass]
**Date:** [Build-time date]

---

## Section 1 — Revision Intake Summary

**What triggered this revision:**
[Plain-language description of the source — who flagged it, where it came from, what they said]

**Artifact being revised:**
[Specific page / component / document / build area being changed]

**The actual problem in plain language:**
[State what is wrong or weak without jargon. One or two sentences. Be specific.]

**Is this a correction, improvement, or expansion?**
[Correction — something is wrong / Improvement — something is weak / Expansion — new scope]

---

## Section 2 — Revision Classification

**Revision type:** [A / B / C / D / E — name]
**Revision mode:** [Direct Fix Pass / Controlled Multi-Area Pass / Upstream Reopen Pass / Expansion Pass]
**Blast-radius level:** [1 / 2 / 3 / 4 / 5]
**Issue scope:** [Local / Cross-page / Systemic / Expansion]

**Classification rationale:**
[1–2 sentences: why this type and blast radius — what makes it local vs. shared vs. systemic]

---

## Section 3 — Preservation Statement

**What is already working and must not change:**
[List specifically — pages, sections, components, approved decisions that are stable]

**Approved upstream decisions that still stand:**
| Stage | Decision | Status |
|---|---|---|
| 02-planning | [Decision description] | Preserved |
| 03-sitemap | [Decision description] | Preserved |
| 04-wireframe | [Decision description] | Preserved |
| 05-brand-direction | [Decision description] | Preserved |
| 06-design-system | [Decision description] | Preserved |
| 07-implementation | [Decision description] | Preserved |

**Components / patterns that must remain untouched:**
[List any shared components that are working correctly and must not be touched by this revision]

---

## Section 4 — Conflict Check

**Does this revision conflict with any of the following?**

| Area | Conflict? | Detail |
|---|---|---|
| Business strategy (02) | Yes / No | [If yes: describe conflict] |
| Page structure (03/04) | Yes / No | [If yes: describe conflict] |
| Brand direction (05) | Yes / No | [If yes: describe conflict] |
| Design system (06) | Yes / No | [If yes: describe conflict] |
| Implementation logic (07) | Yes / No | [If yes: describe conflict] |
| Accessibility standards | Yes / No | [If yes: describe conflict] |
| Trust / proof integrity | Yes / No | [If yes: describe conflict] |
| Mobile quality | Yes / No | [If yes: describe conflict] |

**Conflict resolution:**
[If any conflict exists: explain the tradeoff and state the safest path. If no conflict: "None — revision is aligned with all approved upstream decisions."]

---

## Section 5 — Recommended Revision Scope

**What will change:**
```
[List precisely — page, section, component, field, rule. One item per line.]
```

**What will NOT change:**
```
[List explicitly — adjacent areas being intentionally preserved. One item per line.]
```

**Scope boundary justification:**
[1–2 sentences: why the scope is drawn here and not wider or narrower]

---

## Section 6 — Revision Plan

*(One action block per change. Keep each block tight and implementation-ready.)*

---

### Action [N] — [Short name of the change]

**Affected area:** [Page / section / component / field]

**Change goal:** [What this action achieves — specific and measurable]

**Why it matters:** [The problem this solves or the improvement this delivers]

**Implementation direction:**
[Specific enough that a developer or build agent can act on it without interpretation]
```
[Code direction, copy replacement, config change, or structural instruction]
```

**Consistency guardrail:**
[What to check so this change does not drift against the design system, brand register, or other pages]

**Mobile check:**
[How this change behaves or must behave on mobile — explicit, not assumed]

---

*(Repeat for each action)*

---

## Section 7 — Shared Pattern Impact Check

**Does this revision touch any shared component or global pattern?**
[Yes / No]

**If yes — affected shared areas:**
| Component / Pattern | Pages Affected | Change Required | Risk of Drift |
|---|---|---|---|
| [Component name] | [Page list] | [What must change] | [Low / Medium / High] |

**Consistency rule for shared pattern update:**
[If a shared component is changing, define the one consistent rule that applies everywhere. Do not allow inconsistent patchwork.]

**Instances to update:**
```
[List every page/location where the shared component must be updated]
```

---

## Section 8 — Mobile / Accessibility / Trust Safeguards

**Mobile checks required:**
- [ ] [Specific element] — mobile layout/stacking behavior confirmed
- [ ] Tap targets ≥ 44×44px on any revised interactive elements
- [ ] Content density check — revised section not overcrowded on small screens
- [ ] CTA visibility — primary action visible without scrolling on mobile
- [ ] [Any specific mobile behavior unique to this revision]

**Accessibility checks required:**
- [ ] All revised form fields retain visible labels
- [ ] Color contrast unaffected (or improved) by visual changes
- [ ] Any new interactive elements are keyboard-navigable
- [ ] Error states remain specific and actionable
- [ ] Semantic HTML structure preserved
- [ ] [Any specific accessibility issue flagged by 18-qa-review]

**Trust and clarity checks:**
- [ ] No proof element removed without replacing its function
- [ ] CTA wording still matches the actual commitment level
- [ ] Factual claims remain accurate after copy changes
- [ ] No fake urgency, fake proof, or decorative trust padding introduced
- [ ] Contact information still accurate and visible
- [ ] [Any specific trust element that must be verified after this revision]

---

## Section 9 — Upstream Reopen Decision

**Must any upstream stage be reopened?**
[Yes / No]

**If yes:**
| Stage | Reopen? | Reason | Minimum scope of reopen | Downstream work preserved |
|---|---|---|---|---|
| 02-planning | [Yes/No] | [Why] | [What specifically must change] | [What stays] |
| 03-sitemap | [Yes/No] | [Why] | [What specifically must change] | [What stays] |
| 04-wireframe | [Yes/No] | [Why] | [What specifically must change] | [What stays] |
| 05-brand-direction | [Yes/No] | [Why] | [What specifically must change] | [What stays] |
| 06-design-system | [Yes/No] | [Why] | [What specifically must change] | [What stays] |
| 07-implementation | [Yes/No] | [Why] | [What specifically must change] | [What stays] |

**If no:**
"This revision should remain local. No upstream stages need reopening. The issue is a [local / shared pattern] problem solvable within the revision scope."

---

## Section 10 — Changelog

*(One entry per changed item. This is the official revision record.)*

```
─────────────────────────────────────────────────
Item:        [Page / section / component / field — be specific]
Change:      [What it was → what it is now]
Reason:      [Why this was wrong, weak, or outdated]
Source:      [QA finding / Client request / Implementation issue / Content update]
Scope:       [Local / Shared / Systemic]
Untouched:   [Adjacent areas explicitly left alone]
QA re-check: [Yes / No]
─────────────────────────────────────────────────
Item:        [...]
Change:      [...]
Reason:      [...]
Source:      [...]
Scope:       [...]
Untouched:   [...]
QA re-check: [...]
─────────────────────────────────────────────────
```

**Overall revision scope summary:**
[1–2 sentences: what this revision pass changed at a high level, and what it intentionally left alone]

---

## Section 11 — Acceptance Criteria

*(How to know the revision is done correctly. Must be concrete and testable — not "looks better.")*

```
[ ] [Specific, verifiable condition — e.g., "CTA button on homepage reads 'Request a Free Estimate' on all breakpoints"]
[ ] [Specific, verifiable condition — e.g., "Phone number in header and footer both show [number]"]
[ ] [Specific, verifiable condition — e.g., "All service cards on desktop and mobile display the trust badge"]
[ ] [Specific, verifiable condition — e.g., "Form reassurance zone is visible above submit button at 375px viewport"]
[ ] [Specific, verifiable condition — e.g., "No shared component changed outside the defined revision scope"]
[ ] [Specific mobile acceptance criterion]
[ ] [Specific accessibility acceptance criterion]
[ ] [Specific trust/content accuracy criterion]
```

---

## Section 12 — Final Handoff

**Revision status:** [Complete / Pending client approval / Requires upstream reopen first]

**Hand off to:**
[Implementation / coding stage — if changes are ready to build]
[18-qa-review — if re-verification is needed after changes]
[Upstream stage — if a prior stage must reopen first]
[Client / stakeholder — if approval is needed before build]

**For implementation:**
```
Priority order for changes:
  1. [Highest-impact or dependency-blocking change]
  2. [...]
  3. [...]

Shared component changes must be applied before page-level changes that depend on them.

Stripe / environment / config changes: [List any if applicable]
```

**QA re-review required:** [Yes — specify what / No]

**Open items before build can proceed:**
```
[ ] [e.g., "Client must confirm updated phone number before header revision is built"]
[ ] [e.g., "New photography must be delivered before hero image swap"]
[ ] [e.g., "06-design-system must update the CTA token before the shared button revision"]
```
