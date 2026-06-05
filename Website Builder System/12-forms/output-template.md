# Output Template

Use this structure for every form package. Do not skip sections. Use "Not applicable." for sections that genuinely do not apply — do not omit them.

---

## 1. Form Strategy Summary

Explain the form's job on this specific site:
- What it is trying to convert
- What the business needs to learn
- How the form balances qualification and ease
- Why this form approach is strategically correct for this business

Do not write generic contact-form copy here. This section must be specific to the business and its conversion model.

---

## 2. Form Type Recommendation

State the recommended form type and why it is the best fit.

Reference: `form-strategy-rules.md` — Form Type Selection table.

---

## 3. Field List

List every field that should appear in the form.

Format:

| Field | Type | Required | Notes |
|---|---|---|---|
| [Field name] | [Input type] | Yes / No | [Any relevant notes] |

Include the honeypot field if spam protection is needed.

---

## 4. Field Hierarchy / Order

Explain the order of fields and why they are sequenced this way.

State the principle behind the ordering (e.g., contact first → qualification second → enrichment last).

---

## 5. Step Logic

Include only if multi-step is used.

If not applicable, write: "Not applicable. Single-step form."

If applicable:
- List each step with its title and fields
- Explain why multi-step is used rather than single-step
- Define the progression logic (linear, conditional, back/next)

---

## 6. Conditional Logic

Include only if specific fields are shown, hidden, or changed based on user responses.

If not applicable, write: "Not applicable."

If applicable:
- State what triggers the condition
- State what changes (field shown, hidden, or modified)
- Explain why this improves the experience

---

## 7. Validation Rules

Define what must be validated and how from the user's perspective.

For each required or format-sensitive field, state:
- What triggers validation (blur / submit / file select)
- What the rule is (min length, format, file type/size)
- Whether the field is required or optional

Reference: `validation-and-states-rules.md` — Validation Behavior section.

---

## 8. Error States

Provide specific error copy for every field that can fail validation.

Format:

| Field | Error copy |
|---|---|
| [Field] | "[Specific error message]" |

Also define:
- Global / server error message and fallback action
- Whether the form is cleared or preserved on server error

Reference: `validation-and-states-rules.md` — Error State Rules.

---

## 9. Success States

Explain what the user sees after successful submission and what happens next.

State:
- Redirect vs. inline success state (and why)
- What the thank-you page or inline message communicates
- Response time expectation shown to user
- Fallback contact options shown
- Next steps offered

Reference: `validation-and-states-rules.md` — Success State Rules.

---

## 10. Trust / Privacy Cues

Explain what trust, consent, reassurance, or privacy language belongs near the form and why.

State exactly:
- What text appears below the submit button
- What text (if any) appears near file uploads
- Any trust signals placed adjacent to the form
- What is explicitly NOT included and why

Reference: `validation-and-states-rules.md` — Trust and Privacy Rules.

---

## 11. Upload / Scheduling / Completion Layer

Include only if one or more of the following applies:
- File upload is part of the form
- Inline scheduling follow-up is warranted
- A meaningful completion layer beyond the basic thank-you is needed

If none apply, write: "Not applicable."

If applicable, define:
- Upload: accepted file types, max count, max size per file, validation behavior, mobile behavior, UI pattern
- Scheduling: when it appears, what triggers it, what it connects to
- Completion layer: any post-submit action visible to the user beyond the thank-you message

---

## 12. Mobile Behavior

Explain exactly how the form adapts on mobile.

Cover:
- Field layout (full-width vs. side-by-side breakpoints)
- Input types for keyboard optimization
- Label behavior
- Button sizing
- Touch target sizing
- Upload behavior on mobile (if applicable)
- Step flow on mobile (if multi-step)
- Privacy note placement on small screens
- Spacing adjustments

Reference: `mobile-and-accessibility-rules.md` — Mobile Rules.

---

## 13. Optional Backend / Integration Notes

Include only if relevant to the next implementing agent.

Keep this section light. State what the backend agent or implementing agent must be aware of — do not redesign the operational system here.

If not applicable, write: "Not applicable."

---

## 14. Implementation Notes

Provide concise, actionable notes for the agent building this form.

Cover:
- What already exists and is correct (do not rebuild)
- What needs to be added or changed
- Any specific component patterns to use or avoid
- Accessibility checklist items specific to new elements
- Data file updates needed (if the project uses a data-driven architecture)

---

## 15. Escalation Flags

List anything that exceeds your ownership boundary or requires review by `00` and/or `09`.

Format:

> **Escalate to [00 / 09]:** [What the decision is and why it exceeds the form agent's scope.]

If nothing needs escalation, write: "No escalations."
