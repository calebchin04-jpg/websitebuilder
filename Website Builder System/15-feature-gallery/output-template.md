# Output Template

Use this structure for every gallery package. Do not skip sections. Use "Not applicable." for sections that genuinely do not apply — do not omit them.

---

## 1. Feature Verdict

State the verdict clearly:
- A. Full gallery justified
- B. Lightweight proof strip only
- C. Before-and-after only
- D. No gallery needed

Give a clear, specific reason tied to this business.

---

## 2. Critique of Upstream Inputs

Critically review the current visual-proof strategy from the upstream docs.

Identify:
- What is structurally correct and should be kept
- What is weak, missing, or wrong
- What would have been better decided upstream
- Any implementation issues in existing gallery code (if reviewing an existing build)

Do not be passive. If the upstream gallery strategy is weak, say so directly.

---

## 3. Role of Visual Proof in This Website

Explain what the gallery is supposed to achieve in this specific user journey.

Cover:
- What buying anxieties or trust gaps the gallery addresses
- What questions a visitor is asking that the gallery should answer
- What would happen to conversion if the gallery were removed

---

## 4. Ownership Boundaries

Clarify what this agent owns and what is left to other agents or build stages.

Keep this short. Its purpose is to prevent scope drift.

---

## 5. Recommended Gallery Strategy

State the recommended gallery format or combination of formats.

Explain:
- Why this format fits the business
- What is explicitly omitted and why (lightbox, masonry, B&A, filters, etc.)

Reference: `gallery-strategy-rules.md`

---

## 6. Placement Strategy

For each gallery placement (homepage strip, service pages, dedicated page), state:
- Whether it should exist
- Where it sits in the page hierarchy
- Why this placement is correct

---

## 7. Gallery Structure Specification

Define for each gallery instance:
- Section goal
- Image count (minimum and target)
- Category logic and filter rules
- Caption requirements
- CTA placement and copy
- Lightbox rules
- Fallback behavior when limited assets exist

---

## 8. Before-and-After Slider Specification

Include only if B&A assets exist and the feature is justified.

If not applicable, write: "Not applicable. Treat as unavailable until matched pairs are confirmed."

If applicable, define:
- Placement and context
- Minimum valid pair count
- Mobile behavior
- Accessibility requirements
- What makes a weak or invalid B&A pair for this business

---

## 9. Asset Requirements

State what assets are needed for the recommended gallery structure.

Cover:
- Image types and formats
- Preferred orientation
- Minimum resolution
- Quantity by category
- Staging / quality expectations
- What should never be used
- Placeholder rules

Reference: `asset-requirements.md`

---

## 10. Content and Caption Rules

Define caption direction for this specific business.

Cover:
- Caption formula to use
- 4–6 example captions tailored to this business
- Alt text format
- Gallery headline and intro copy direction
- What weak captions look like for this business type

Reference: `caption-rules.md`

---

## 11. UX / Accessibility / Performance Rules

Define:
- Caption visibility behavior (hover vs. persistent vs. below-card)
- Aria attributes required or to be removed
- Filter accessibility (aria-pressed, role="group")
- Loading strategy (lazy, priority props)
- Interaction behavior (hover scale, lightbox trigger, swipe)
- Contrast requirements

Reference: `mobile-gallery-rules.md`

---

## 12. Design Constraints for Later Skills

Practical notes for the design system and implementation stages.

Cover:
- Aspect ratio requirements
- Card styles to maintain or change
- Caption overlay gradient approach
- Filter button active state requirements
- Any design-system tokens the gallery relies on

---

## 13. Implementation Notes

Practical, actionable notes for the agent building this gallery.

Cover:
- What already exists and must not be changed
- What needs to be added or fixed (with specific code-level guidance where helpful)
- Data structure changes needed
- Component reuse opportunities
- Anything that affects `09` (backend/storage)

---

## 14. Risks and Failure Modes

Name what would make this gallery weak, fake-looking, or untrustworthy.

Cover:
- Asset risks (stock photos, low quality)
- Caption risks (filler, missing, hover-only)
- Category imbalance risks
- Mobile experience risks
- Conversion path risks (gallery without CTA)

---

## 15. Final Handoff

A clean handoff section for later build/coding stages.

State:
- The 3–5 most important things the implementing agent must do
- Any flags that need client confirmation
- Any escalations to `09` or other agents
