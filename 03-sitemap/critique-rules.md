# Critique Rules

This file defines how to evaluate the planning PRD from `02-planning` before building the sitemap. Every criterion must be checked. Structural problems must be named directly in the critique section of the sitemap PRD.

---

## How to Run the Critique

Read the full planning PRD. Check each criterion below. For each issue found, record:
- Category
- Specific problem
- Why it blocks or complicates sitemap decisions
- How it will be handled if proceeding (flag / infer / defer)

After the full check, apply the send-back threshold.

---

## Critique Criteria

### A. Primary CTA and Conversion Clarity

**What to check:**
- Is the primary CTA defined with a specific mechanism (call, form, booking widget)?
- Is there a clear CTA placement strategy (which pages carry the CTA)?
- Is the conversion path traceable — can you draw a line from entry page to conversion?

**Problems that block IA:**
- No primary CTA defined → cannot determine CTA-path pages or conversion page requirements
- CTA mechanism unknown → cannot decide whether a dedicated contact/booking page is needed or if inline forms are sufficient
- Multiple equal CTAs → cannot build a clear conversion hierarchy into the structure

---

### B. Audience and User Journey

**What to check:**
- Is the core audience defined well enough to make navigation decisions?
- Is the user journey defined (arrival → trust → evaluation → conversion)?
- Are page-type responsibilities stated?

**Problems that block IA:**
- No audience → cannot determine what pages users need to evaluate trust and offer
- No user journey → cannot structure page sequence or internal linking
- No page-type responsibilities → no basis for deciding what pages must exist vs. what can be cut

---

### C. Feature List and Scope

**What to check:**
- Are features classified (required now / useful optional / deferred)?
- Is it clear which features need dedicated pages vs. sections?
- Are any features listed that imply complex multi-page structures that weren't discussed (e.g., ecommerce, portals, multilingual)?

**Problems that block IA:**
- No feature decisions → cannot determine which page types exist
- Ambiguous features → may produce wrong page count and structure

---

### D. Structural Ambiguity

**What to check:**
- Are there planning-level page instructions that are vague or contradictory?
- Does the planning PRD say "services page" when it probably means multiple individual service pages?
- Does the planning PRD mention local SEO without specifying whether that means city pages, service-area pages, or just on-page optimization?

**Problems that affect IA:**
- Ambiguous page instructions → forced to make assumptions about structure
- Inconsistent references to pages → risk of building the wrong hierarchy

---

### E. Local SEO Signals

**What to check:**
- Is the geographic scope specific enough to make SEO page decisions?
- Is there any indication of whether city pages, neighborhood pages, or service-area pages are relevant?
- Is there a local competitor SEO context?

**Note:** Missing local SEO direction is not a send-back trigger — it will be decided by this skill. But if the geographic scope is completely undefined, flag it.

---

### F. Content and Asset Availability

**What to check:**
- Are major content gaps flagged that would affect page existence decisions?
- For example: if there are no case studies, a case studies page should not be in the sitemap
- If there are no team bios or photos, a dedicated team page may not be supportable

**Note:** This is not a send-back trigger. Use content availability to inform page decisions, not to block the process.

---

## Send-Back Threshold

Send the planning PRD back to `02-planning` if **any** of the following are true:

1. **No primary CTA is defined** — cannot build a conversion-path structure
2. **No core audience is defined** — cannot determine evaluation page needs
3. **No page-type responsibilities are stated** — the entire structural basis for the sitemap is missing
4. **Feature list is completely absent** — cannot know what page types exist
5. **Build type (new / redesign) is unclear** — affects whether pages are added or migrated

A single weakness that can be inferred or assumed does NOT trigger a send-back. The threshold is: "I cannot build a sitemap at all without this."

---

## After the Critique — If Not Sending Back

For each weakness found:

**If the weakness can be inferred:** Make a reasonable inference, use it in the sitemap, label it `[ASSUMPTION]`.

**If the weakness creates a structural risk but can be worked around:** Note the risk explicitly. State what the sitemap assumes and what the revision risk is.

**If the weakness is minor:** Note it in the unresolved issues section.

---

## After a Return Cycle — If Issues Remain

Do not send back a second time. Instead, explicitly state:

> "The following planning gaps remain unresolved. The sitemap decisions below are made with the best available information. These gaps create the following structural risks: [list]. These may require sitemap revision if the gaps are resolved differently later."

Then build the best sitemap possible.

---

## Structural Critique Categories (for the critique section)

Use these category labels in your critique output:

- `[CONVERSION]` — CTA or conversion path problem
- `[AUDIENCE]` — Audience or journey definition problem
- `[SCOPE]` — Feature or page scope ambiguity
- `[STRUCTURE]` — Logical hierarchy or grouping problem
- `[SEO]` — Local SEO or URL logic gap
- `[CONTENT]` — Missing content that affects page viability
- `[BLOAT]` — Page or feature bloat inherited from discovery or planning
- `[CONFLICT]` — Two planning decisions that contradict each other
