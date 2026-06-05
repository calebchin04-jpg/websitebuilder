# Gallery Questions

Standard question set for Phase 2 of the gallery agent session flow.

Read the frozen upstream inputs (00–09) before asking any of these. Only ask questions that are not answered by the locked docs.

Maximum 3 questions. Prioritize by impact on gallery scope.

---

## Question Bank

### Before/after assets

> Does the business have real before-and-after photo pairs — same space, shot before demo and after completion?

Options:
- Yes — matched before/after pairs exist
- After-only — no before shots available
- Unknown — assume not available

**Ask when:** The business type makes before/after proof highly valuable (renovation, cleaning, dental, painting) and the discovery brief does not mention whether B&A assets exist.

**Skip when:** The business type makes B&A irrelevant (photographer, salon, landscaping with no "before" context).

**Impact:** Determines whether a before/after slider component is warranted. If unavailable, do not design for it.

---

### Service page gallery placement

> Should individual service pages embed a small gallery of relevant project photos, or should all gallery content live only on the dedicated portfolio/gallery page?

Options:
- Service pages only link to the main gallery page
- Embed 3–4 relevant photos per service page
- Embed photos on the highest-value service pages only

**Ask when:** The sitemap includes individual service pages with distinct categories, and the implementation plan does not specify whether service pages carry embedded visual proof.

**Skip when:** There are no individual service pages, or the implementation plan explicitly states that gallery content is centralized.

**Impact:** Affects implementation scope (service page component) and data structure (per-service image arrays).

---

### Dedicated gallery page

> Should there be a dedicated gallery or portfolio page, or should all visual proof live inline on the homepage and service pages?

Options:
- Yes — dedicated gallery/portfolio page plus inline proof sections
- Inline only — no dedicated gallery page
- Already exists in the sitemap — confirm only

**Ask when:** The sitemap is ambiguous, or the business type is borderline for a full gallery page.

**Skip when:** A portfolio or gallery page is already in the sitemap.

---

### Real asset count

> Approximately how many real project photos does the business currently have?

Options:
- Fewer than 6
- 6–12
- 12–20
- 20+

**Ask when:** The discovery brief does not give any indication of asset availability, and the business type could go either way on gallery depth.

**Skip when:** The discovery brief or planning output mentions a specific asset set, or the business clearly has extensive project documentation.

**Impact:** Determines whether a full gallery, lightweight proof strip, or no gallery is the right recommendation.

---

## Selection Priority

If fewer than 3 questions are needed, prioritize in this order:

1. Before/after assets — determines a major optional feature
2. Service page placement — affects implementation scope
3. Asset count — validates the feature verdict
4. Dedicated gallery page — usually answerable from the sitemap

---

## What Not to Ask

Do not ask questions already answered by:
- The sitemap (whether a portfolio page exists)
- The services data (what categories exist)
- The implementation plan (image handling approach)
- The discovery brief (asset availability or business type)

Do not ask open-ended "what kind of gallery do you want?" questions. Offer specific options. The user selected this agent to make decisions, not to be asked what they already know.
