# Form Questions

Standard question set for Phase 2 of the forms agent session flow.

Read the frozen upstream inputs (00–09) before asking any of these. Only ask questions that are not already answered by the locked docs.

Maximum 4 questions per session. Prioritize by impact.

---

## Question Bank

### Placement

> Does the form need to appear anywhere besides the primary contact page — for example, embedded on service pages, in a global CTA section, or in a modal?

Options:
- Primary contact / landing page only
- Also embedded on service pages (shorter variant)
- Also in the global CTA section
- In a modal triggered by CTA buttons sitewide

**Ask when:** The sitemap or wireframe shows multiple CTA touchpoints and the implementation plan is unclear about form reuse.

**Skip when:** The build plan explicitly states form placement.

---

### Qualification depth

> Should the form ask for budget range, timeline, or project scope to pre-qualify leads before the first follow-up?

Options:
- No — keep it lean (contact info + service type only)
- Add timeline only (when are you hoping to start?)
- Add budget range only
- Add both budget and timeline

**Ask when:** The business is high-ticket or appointment-limited and lead quality matters more than lead volume.

**Skip when:** The discovery brief or planning output already defines the qualification level.

---

### Success state

> After submitting, should the user be redirected to a thank-you page or should the form show an inline success state on the same page?

Options:
- Redirect to a dedicated thank-you page (better for conversion tracking)
- Inline success state — stay on the same page

**Ask when:** The implementation plan does not specify the post-submit behavior.

**Skip when:** A thank-you page is already in the sitemap or the implementation plan specifies redirect.

---

### Photo / file upload

> Should users be able to attach files (photos, briefs, plans) when submitting?

Options:
- No — keep it simple, gather files during follow-up
- Optional photo upload (inspiration or existing space, 1–3 images)
- Optional document upload (brief, floor plan, spec sheet)
- Both photos and documents

**Ask when:** The business could use pre-submission files to prepare for a follow-up call or visit.

**Skip when:** The backend/integration plan already addresses file handling or the business type makes uploads irrelevant.

---

### Multi-step

> Is this a high-ticket or complex service where a multi-step form would genuinely improve lead quality — or should it stay as a single step?

Options:
- Single step (recommended for most local service businesses)
- Multi-step — the project scope requires it

**Ask when:** The service complexity or ticket size is in a gray zone where multi-step might be justified.

**Skip when:** The business type clearly calls for one pattern (e.g., local trades = single step; complex enterprise = multi-step).

---

## Selection Priority

If 4 questions are the maximum and all 5 above are relevant, prioritize in this order:

1. Placement — affects scope significantly
2. Photo / file upload — affects backend and implementation scope
3. Success state — affects routing and analytics
4. Qualification depth — affects field count and conversion balance
5. Multi-step — ask only if the above answers suggest it might be warranted

---

## What Not to Ask

Do not ask questions that are already answered by:
- The discovery brief (business type, audience, CTA)
- The planning output (feature list, conversion strategy)
- The implementation plan (stack, email provider, storage)
- The sitemap (page structure, dedicated contact page presence)

Do not ask open-ended "what do you think?" questions. Offer specific options. The user selected this agent to make decisions, not to be asked what they already know.
