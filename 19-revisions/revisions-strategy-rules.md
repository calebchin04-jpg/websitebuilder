# Revisions Strategy Rules

This file defines how to intake a revision request, classify it correctly, assess blast radius, apply guardrails, and decide whether to patch locally or reopen upstream.

---

## Part 1: Revision Intake — Four Questions to Answer First

Before any plan is made, answer these four questions from the available inputs:

**1. What triggered this revision?**
- QA findings from 18-qa-review
- Client or stakeholder feedback
- Implementation error or build issue
- Content or business detail change (phone number, address, service change)
- Post-launch user or conversion feedback
- Expansion request

**2. What artifact is being revised?**
- A PRD or planning document
- A wireframe
- The design system
- An implementation plan
- A live build (code, components, pages)
- Content / config / data
- A specific component or shared pattern

**3. What kind of problem is this?**
- Bug / error — something is factually wrong or broken
- UX weakness — it works but underperforms on trust, clarity, or conversion
- Content correction — copy, claims, facts, or structure need updating
- Design inconsistency — visual behavior diverged from the approved system
- Mobile failure — the mobile experience is broken or weak
- Accessibility failure — meets a QA accessibility finding
- Trust failure — proof, CTA honesty, or credibility is damaged
- Scope expansion — new work requested that wasn't in the original scope

**4. How local or wide is the problem?**
- Does it affect one element, one section, one page, all instances of a pattern, or the whole system?

Do not proceed past intake without answering these four questions. Default to the most conservative classification when uncertain.

---

## Part 2: Revision Type Classification

### Type A — Micro Fix
**Fits when:**
- The change is to a single element, field, or line
- No architecture, component structure, or shared pattern is involved
- Change is recoverable if wrong

**Examples:**
- CTA wording from "Get Started" → "Request a Free Estimate"
- Phone number update
- Headline correction
- Small spacing or typography token adjustment
- Image swap with a better photo
- Alt text correction
- Meta description update

**Default behavior:** Direct fix pass. Tight scope. Short changelog.

---

### Type B — Page-Level Improvement
**Fits when:**
- One full page or one section within a page needs targeted rework
- Other pages of the same type are not materially affected
- The issue is specific to this page's content or structure, not a shared system pattern

**Examples:**
- Homepage hero section is weak for this specific business
- Contact page has too many fields for the audience
- A specific service page lacks the right proof signal
- Location page is thin on local trust content

**Default behavior:** Controlled single-page revision. May lightly touch shared components but does not change their global rules.

---

### Type C — Shared Pattern Revision
**Fits when:**
- The problem exists in a component or pattern used across multiple pages
- Fixing it on one page without fixing all instances creates inconsistency
- A shared component's rules need updating

**Examples:**
- All service cards are missing a trust signal
- The CTA button pattern is using the wrong wording model sitewide
- The mobile nav has a UX issue across all pages
- The form's reassurance zone is absent everywhere
- All testimonial cards are oversized on mobile

**Default behavior:** Identify every affected instance. Define one consistent correction rule. Apply uniformly. Avoid inconsistent patchwork.

---

### Type D — Strategic Correction
**Fits when:**
- The problem cannot be solved well without changing an upstream decision
- Patching the symptom would create a worse, more confusing result
- A planning, sitemap, wireframe, brand, or design-system decision was wrong

**Examples:**
- The primary CTA model is wrong for the business type (e.g., "Book Now" for a roofer)
- The audience emphasis is off — the site speaks to the wrong buyer
- The trust strategy is fundamentally mismatched to the proof available
- The page hierarchy creates a user journey that doesn't match the buying process

**Default behavior:** Do not patch blindly. Identify the minimum upstream stage to reopen. Preserve all downstream work that is not affected by the upstream correction.

---

### Type E — Scope Expansion
**Fits when:**
- The request adds something new that was never in the original scope
- It is not a correction of something broken — it is genuinely new

**Examples:**
- Add a gallery page that wasn't planned
- Add a blog or content section
- Add a second language
- Add a booking flow that wasn't originally specced
- Add new service-area pages
- Add a membership or subscription feature

**Default behavior:** Declare it as expansion. Do not let it be smuggled into a revision pass. Define new scope, dependencies, and which skills need to run.

---

## Part 3: Blast-Radius Levels

Classify every revision by blast radius before planning changes.

| Level | Scope | Examples |
|---|---|---|
| 1 | Single element | One button, one heading, one image, one metadata field |
| 2 | Single section | One hero block, one trust strip, one CTA zone |
| 3 | Single page | Entire homepage, one service page |
| 4 | Shared pattern / component | All service cards, nav, all CTAs, shared form |
| 5 | Systemic / upstream | Design system rule, CTA strategy, page architecture |

**Rule:** Default to the smallest true blast radius. Do not escalate unless necessary. If a Level 3 fix can be contained to Level 2, contain it.

---

## Part 4: Preservation Logic

Before listing what changes, always list what must not change. This is not optional.

**Questions to answer in the preservation statement:**
- What pages or sections are confirmed as working well?
- Which upstream decisions have been approved and should not be reopened?
- Which components are used in stable areas that must not drift?
- What trust, proof, or clarity elements must be maintained through the revision?
- What mobile behavior is currently working and must not be damaged?

**Preservation defaults when upstream approval is unclear:**
- If a decision is in a locked upstream document (02 through 07) and the revision does not directly target it, treat it as preserved
- If a feature agent output is not the subject of the revision, treat it as preserved
- If content is factually confirmed (real phone number, real business name, real certifications), treat it as locked

---

## Part 5: Conflict Resolution

When a revision request conflicts with an approved upstream decision:

```
CONFLICT TYPE → RESPONSE

Conflicts with business strategy (02):
  → Call it out. Explain what the strategy decision was and why the revision fights it.
  → Offer a constrained alternative that satisfies the intent without violating strategy.
  → Do not silently comply.

Conflicts with brand direction (05):
  → Explain the register mismatch.
  → Offer a brand-consistent alternative.
  → If the business has genuinely evolved, flag 05 for minimal reopen.

Conflicts with design system (06):
  → Do not introduce a one-off visual decision that contradicts the system.
  → Either apply the system correctly or flag 06 for reopen.
  → Never create a visual exception that has no rule behind it.

Conflicts with trust / accessibility / mobile quality:
  → Block the revision as proposed.
  → Explain what would be damaged.
  → Offer the safest alternative that solves the intent.

Conflicts only with taste / preference (no strategy impact):
  → Acknowledge the preference.
  → Evaluate whether it moves quality up or down.
  → If neutral or up: include with a note.
  → If down: explain and offer an alternative.
```

---

## Part 6: Upstream Reopen Decision Logic

Only recommend reopening an upstream stage when the problem genuinely belongs there.

```
Reopen 02-planning when:
  - The core audience, CTA model, or primary conversion goal is wrong
  - The business's services have changed materially
  - The trust strategy is fundamentally mismatched

Reopen 03-sitemap when:
  - The page hierarchy is wrong in a way that actively hurts the user journey
  - A page that should exist doesn't, or a page exists that actively damages the structure

Reopen 04-wireframe when:
  - Section order, hierarchy, or flow within a page is wrong
  - A section is missing that the page clearly needs
  - The wireframe contradicts the confirmed strategy in a meaningful way

Reopen 05-brand-direction when:
  - The brand register is wrong for the business
  - The positioning has materially shifted since the brand work was done
  - The tone has drifted across the site in a way that can't be fixed by content edits

Reopen 06-design-system when:
  - A system-level visual rule is wrong (not just one component behaving wrong)
  - Color roles, type scale, or component density are structurally misaligned
  - One component fix would require creating an unauthorized exception

Reopen a feature agent when:
  - A feature's logic was wrong from the start
  - The implementation exposed a flaw in the feature spec
  - Patching the build would fight the spec
```

**Default:** Do not reopen more than needed. Prefer minimum viable upstream correction. Preserve all downstream work that the upstream change does not affect.

---

## Part 7: Revision Source of Truth — Priority Order

When inputs conflict, resolve in this order:

```
1. Confirmed factual business information (address, phone, license numbers, certifications)
2. Approved planning and strategy decisions (02-planning)
3. Approved sitemap / page structure (03-sitemap)
4. Approved wireframe decisions (04-wireframe)
5. Approved brand direction (05-brand-direction)
6. Approved design system (06-design-system)
7. Approved implementation constraints (07-implementation-planning)
8. Validated QA findings (18-qa-review)
9. Client or stakeholder revision requests
10. Local polish preferences
```

If a lower-priority input conflicts with a higher-priority approved decision, the higher priority wins — and the conflict must be called out, not silently resolved.

---

## Part 8: Revision Guardrails — Full List

These apply to every revision pass without exception:

```
1.  Do NOT rewrite unaffected pages just because you are editing nearby areas.
2.  Do NOT change shared styles or components unless the issue is actually shared.
3.  Do NOT widen a local revision into a brand or architecture redesign.
4.  Do NOT let a stakeholder preference override a stronger strategic decision silently.
5.  Do NOT introduce generic filler copy to fill gaps.
6.  Do NOT create visual drift away from the approved design system.
7.  Do NOT create logic drift away from the approved CTA flow or user journey.
8.  Do NOT add backend complexity unless the revision truly requires it.
9.  Do NOT break mobile-first behavior while solving desktop issues.
10. Do NOT remove trust, proof, or clarity elements without replacing their function.
11. Do NOT fix one conversion issue by increasing noise or pressure elsewhere.
12. Do NOT treat an expansion request as if it were a simple revision.
13. Do NOT leave undocumented changes.
14. Do NOT "clean up" large areas unless that cleanup is explicitly in scope and justified.
15. Do NOT accept vague goals without translating them into constrained, quality-safe actions.
16. Do NOT introduce fake proof, fake urgency, or decorative trust badges.
17. Do NOT make the site more generic in the process of making it more polished.
18. Do NOT create one-off visual exceptions that have no system rule behind them.
```

---

## Part 9: Changelog Standard

Every revision pass must produce a changelog. The changelog must be:

- Diff-minded: state what changed, not what was intended
- Specific: name the page, section, component, and field
- Sourced: state what triggered each change
- Scoped: state whether the change was local, shared, or systemic
- Complete: list intentionally untouched areas, not just what changed
- Flagged: note whether QA re-review is required for each item

**Format per changelog entry:**
```
Item:         [What changed — specific page, section, field, component]
Change:       [What it was → what it is now]
Reason:       [Why this was wrong or weak]
Source:       [QA finding / client request / implementation issue / content update]
Scope:        [Local / Shared / Systemic]
Untouched:    [What adjacent areas were explicitly left alone]
QA re-check:  [Yes / No]
```
