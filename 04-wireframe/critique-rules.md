# Critique Rules

This file defines how to evaluate the sitemap PRD from `03-sitemap` before building the wireframe PRD. Every criterion must be checked. Problems must be named directly in the critique section of the wireframe PRD output.

---

## How to Run the Critique

Read the full sitemap PRD. Also reference the planning PRD from `02-planning` for user journey and CTA context. For each criterion below, record any issues found using this format:

> **[CATEGORY]** Problem: [What is weak, missing, or wrong]. Impact on wireframing: [What layout decision it blocks or distorts]. Resolution: [Inferred / Flagged / Deferred / Send back].

After the full check, apply the send-back threshold.

---

## Critique Criteria

### A. Page Purpose Clarity

**What to check:**
- Does every page have a clear, specific purpose statement?
- Is the purpose actionable enough to guide section planning? ("Move users from overview to service details and toward contact" is actionable. "Information page" is not.)
- Do any two pages have overlapping purposes — serving the same user need or conversion job?

**Problems that block wireframing:**
- Vague purpose statement → section structure becomes guesswork
- No purpose statement at all → cannot determine what sections the page needs or in what order
- Two pages with the same purpose → unclear which page carries which sections and CTA; risk of structural duplication

---

### B. CTA and Conversion Logic

**What to check:**
- Is there a clear primary CTA for the site (from the planning PRD)?
- Does the sitemap specify which pages carry the primary CTA?
- Is the conversion path traceable — can you follow a user from an entry page to conversion through the page structure?
- Are secondary CTAs defined for pages that don't carry the primary CTA?

**Problems that block wireframing:**
- No CTA defined → cannot decide CTA section requirements, form placement, or sticky-CTA logic
- CTA mechanism unknown (call vs. form vs. booking widget) → cannot determine whether a contact form section, phone-forward section, or embedded booking module is the right structural choice
- No traceable conversion path → cannot determine section order priority (which content must appear before the CTA, which builds trust, which reduces friction)

---

### C. Missing or Contradictory Pages

**What to check:**
- Are critical pages absent? (Contact page, thank-you page, at least one service page, homepage)
- Does the sitemap reference a page in one place that doesn't exist in the page hierarchy?
- Are there pages in the hierarchy that have no purpose statement or content requirements at all?
- Does the sitemap contradict the planning PRD on page structure? (e.g., planning says "booking page" but sitemap has no booking page)

**Problems that block wireframing:**
- Missing critical pages → wireframe PRD will be structurally incomplete; cannot define CTA destination or conversion flow
- Contradictions → wireframe built on an inconsistent structural foundation

---

### D. Content and Asset Availability

**What to check:**
- Are content gaps flagged that would affect section existence? (e.g., no before/after photos → gallery section logic is uncertain)
- Are pages included that require content that doesn't exist? (e.g., a testimonials page with no stated testimonials, a case studies page with no cases)
- Is the content volume per page clear enough to determine section vs. page boundary? (e.g., "3 services" clearly suggests individual service pages; "some services" does not)

**Problems that complicate wireframing:**
- Unresolved content gaps → must make structural decisions that may need to be undone when content arrives
- Unknown content volume → page/section boundary decisions are guesses; risk of over-or under-structuring

---

### E. Template and Reuse Logic

**What to check:**
- Does the sitemap indicate which pages share a layout template? (e.g., "all city pages use the same template")
- If template-sharing is implied (multiple service pages, multiple city pages), is the template logic consistent — do all templated pages have the same required content?
- Are there pages described as unique that should probably share a template?

**Problems that complicate wireframing:**
- Template-sharing implied but not stated → wireframe will incorrectly treat templated pages as unique
- Template pages described with different required content → template boundary is wrong and must be reconciled before wireframing
- Missed template opportunities → wireframe will create unnecessary variation, making build more complex

---

### F. Page Scope — Bloat and Under-Scope

**What to check:**
- Are any pages obviously over-scoped — asked to accomplish too many jobs in one page, making it structurally incoherent?
- Are any pages obviously under-scoped — so thin in purpose or content that they should be a section on another page rather than a standalone page?
- Are any pages included with no clear justification in the user journey?

**Problems that complicate wireframing:**
- Over-scoped pages → section structure will be incoherent; CTA logic unclear; too many competing messages
- Under-scoped pages → wireframe will be artificially thin; will likely need to recommend merging at this stage
- Unjustified pages → waste wireframe effort on pages that may not survive to build

---

### G. Above-the-Fold Logic

**What to check:**
- For high-traffic entry pages (homepage, service pages, city/location pages), does the sitemap content list include what users need to see in the first screen?
- Is there anything in the sitemap's content requirements that is almost certainly wrong in terms of priority? (e.g., "history of the company" listed before "what we do and why call us")

**Note:** Weak above-the-fold logic is usually fixable in wireframing without a send-back. Flag it and correct it in the wireframe PRD.

---

## Send-Back Threshold

Send the sitemap PRD back to `03-sitemap` if **two or more** of the following are true:

1. **Two or more pages have no purpose statement or only placeholder/generic descriptions** — cannot build section logic without knowing the page's job
2. **Primary CTA is missing or directly contradicted between sitemap and planning PRD** — cannot build any page's conversion section or CTA flow
3. **The conversion path is untraceable** — no way to determine which pages are trust-building, which are evaluation, and which are conversion
4. **The sitemap directly contradicts the planning PRD on a structural foundation** (core audience, primary CTA, or primary offer) — wireframe would be built on wrong assumptions
5. **More than two critical pages are absent** (homepage, at least one service page, contact page, thank-you page) — wireframe PRD would be structurally incomplete

A single resolvable weakness does NOT trigger a send-back. The threshold is: "The wireframe structure will be unreliable without this, and I cannot label my way out of it with assumptions."

---

## After the Critique — If Not Sending Back

For each weakness found:

**If the weakness can be reasonably inferred:** Make the inference, use it in the wireframe, label it `[ASSUMPTION]`.

**If the weakness creates a layout risk but can be worked around:** Note the risk explicitly in the wireframe. State what was assumed and what the revision risk is if the assumption is wrong.

**If the weakness is minor:** Note it in the Unresolved Issues section of the wireframe PRD.

**If the weakness involves above-the-fold logic or section order:** Correct it in the wireframe directly, note the correction, and explain the rationale.

---

## After a Return Cycle — If Issues Remain

Do not send back a second time. Run the post-send-back checkpoint as defined in `SKILL.md`. State the specific remaining problems and the specific wireframe risks they create. Ask the user whether to proceed. Then build with labeled assumptions on every affected decision.

---

## Critique Category Labels

Use these labels in the critique section of the wireframe PRD output:

- `[PURPOSE]` — Page purpose is vague, missing, or duplicated across pages
- `[CTA]` — CTA or conversion path problem
- `[MISSING]` — A required page or critical content is absent
- `[CONTENT]` — Content gap that affects section existence or page scope
- `[TEMPLATE]` — Template-sharing logic is unclear, contradictory, or missed
- `[BLOAT]` — Page is over-scoped or tries to do too many structural jobs
- `[THIN]` — Page is too weak to warrant a standalone structure; should be a section
- `[CONFLICT]` — Contradiction between sitemap and planning PRD
- `[ABOVE-FOLD]` — Content priority is wrong; above-the-fold logic will not work
