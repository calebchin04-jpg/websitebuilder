# Booking & Payments Output Template

Use this template to produce the full booking/payments feature output. Fill every section. Label all assumptions explicitly. If a section does not apply (e.g., deposits are not recommended), write "N/A — [reason]" rather than leaving it blank.

---

## BOOKING & PAYMENTS FEATURE PACKAGE
**Project:** [Business Name]
**Page(s):** [Homepage / Service Pages / Booking Page / Consultation Page]
**Stage:** 16-feature-booking-payments — output complete
**Flow type:** [A — Direct Appointment / B — Request-First / C — Consultation-Led / D — Payment-Only / E — None / Hybrid]
**Scope type:** [Fixed / Semi-fixed / Variable / Mixed]
**No-show risk:** [Significant / Mild / Not relevant / Unknown]
**Brand register:** [Approachable / Mid-range / Authoritative — from 05-brand-direction]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Feature Verdict

**Booking:** [YES / NO / LIMITED — state clearly what is allowed]
**Online payment:** [YES / NO / LIMITED]
**Deposits:** [YES / NO / CONDITIONAL — state trigger]

**Recommended flow type:** [A / B / C / D / E / Hybrid with description]

**Verdict rationale:**
[2–3 sentences: why this verdict matches the business model. Be direct. Do not hedge.]

---

## Section 2 — Critique of Upstream Inputs

*(Identify everything vague, unrealistic, bloated, or mismatched in the upstream outputs. This section must be honest even when critical.)*

| Issue | Source Stage | Problem | Resolution |
|---|---|---|---|
| [e.g., "Book Now" CTA for variable-scope service] | 02-planning | [Misrepresents commitment level — no calendar can be confirmed without inspection] | [Replace CTA with "Request Estimate"] |

**What was correct and should be preserved:**
[List any upstream decisions that are well-matched and should not be overridden]

---

## Section 3 — Business-Model Fit Analysis

**What this business actually sells:**
[Time slots / Jobs / Consultations / Fixed packages / Relationships — be specific]

**How the buying process actually works:**
[Step-by-step description of how a real customer goes from problem → paid customer for this business. This is the ground truth the website must match.]

**Why that matters for this feature:**
[Explain the direct connection between the real buying process and the flow type recommendation]

**Services classified by scope type:**
| Service | Scope | Bookable? | Payable Online? | Flow |
|---|---|---|---|---|
| [Service name] | [Fixed/Variable] | [Yes/No] | [Yes/No/Post-qual] | [A/B/C/D/E] |

---

## Section 4 — Ownership Boundaries

**What this skill owns for this project:**
[List specifically — which flows, which CTAs, which forms are in scope for this output]

**What is handed off to 12-feature-forms:**
[Any request/contact/intake forms that are part of Type B or general contact flow]

**What is handed off to 09-backend-architecture:**
[Calendar sync, webhook handling, email/SMS automation, subscription billing, CRM sync — list specifically]

**What is handed off to 06-design-system:**
[Visual treatment of booking UI, calendar widget style, payment button, confirmation screen design]

---

## Section 5 — Recommended Conversion Flow

**User path from intent to commitment:**

```
Step 1: [Entry point + visitor state]
Step 2: [Action + what they are doing — booking / requesting / qualifying / paying / reserving]
Step 3: [...]
Step N: [Confirmation + next step expectation]
```

**Visitor state at each step:**
[Clarify whether the visitor is evaluating / intending / selecting / committing / confirmed — at each step]

**Confirmation type:** [Auto-confirmed / Pending review]
**Response window (if pending):** [e.g., "within 1 business day"]

---

## Section 6 — Booking Strategy

*(Complete this section only if booking is justified. Write N/A — [reason] if not.)*

**What can be booked:**
[List specific services, durations, and conditions]

**What cannot be booked:**
[List services that must go through request-first or consultation-first — and why]

**Confirmation expectations:**
[Auto-confirm or pending — and what the visitor is told at each state]

**Rescheduling / cancellation path:**
[How — phone, email, link — and what happens to a deposit if one exists]

**Mobile booking behavior:**
[Explicit description — not "it stacks." Describe date picker behavior, field layout, CTA placement on mobile.]

**Trust copy required near booking UI:**
```
[List the specific reassurance messages that must appear near the booking form]
```

---

## Section 7 — Deposit Strategy

*(Complete this section only if deposits are justified. Write N/A — [reason] if not.)*

**Deposit enabled:** [Yes / No / Conditional on service value threshold]
**Deposit amount:** [$X fixed / X% of service price]
**What it reserves:** [Exact statement — e.g., "Your appointment slot and our travel time"]
**Applied to final invoice:** [Yes / No]
**Refund window:** [e.g., "Full refund if cancelled 48+ hours before appointment"]
**Refund conditions:** [Full / Partial / Non-refundable — with specific conditions]

**Trust copy for deposit step:**
```
[Exact copy that must appear before the payment button]
```

**Services where deposit should NOT apply:**
[List any service types where deposit would create friction without benefit]

**Deposit trigger:**
[At booking / After qualification / Only for services over $X value]

---

## Section 8 — Payment Strategy

*(Complete this section only if payment is justified. Write N/A — [reason] if not.)*

**Payment category:** [Deposit / Consultation fee / Invoice payment / Fixed-package checkout / Subscription]

**What users can pay for online:**
[List specific services/packages with confirmed fixed prices]

**When payment occurs in the journey:**
[At booking / After consultation / Post-qualification / Immediately at purchase]

**Public or post-qualification:**
[Public self-serve checkout / Business sends payment link after scope confirmed]

**What must NOT be paid online:**
[List any variable-scope services that must never have an upfront payment flow]

**Payment tool:** [Stripe Checkout / Square / Stripe Payment Link / Calendly+Stripe / Other]

**Trust cues required at payment step:**
```
- [e.g., "Secure checkout powered by Stripe" + lock icon]
- [e.g., Refund policy visible before payment button]
- [e.g., Phone number for questions]
- [e.g., Total amount on the payment button: "Pay $X"]
```

---

## Section 9 — CTA and Placement Strategy

**Primary CTA:** `[Exact wording]`
**Secondary CTA:** `[Exact wording]`

**CTA rationale:**
[1–2 sentences: why these words match the actual commitment level]

**Placement map:**

| Page Zone | CTA | Notes |
|---|---|---|
| Sticky header | [CTA text] | [Condition or note] |
| Hero | Primary: [text] / Secondary: [text] | [Layout note] |
| Service pages | [Per-service CTA] | [Routing logic] |
| Booking/contact page | [CTA text] | [Flow type served here] |
| Mobile primary action | [CTA text] | [Phone vs. booking priority] |
| Footer | [CTA text] | [Utility link] |

**Mobile CTA priority:**
[Phone CTA vs. Booking CTA — which leads, which is secondary, how they are arranged on mobile]

---

## Section 10 — Form / Interaction Requirements

**Form type:** [Booking request / Service request / Consultation booking / Checkout — per flow type]

**Essential fields:**
```
1. [Field name — required / optional]
2. [...]
```

**Excluded fields:**
```
[List fields that must NOT be in this form — and why]
```

**Step logic:**
[Single-step form / 2-step max — describe what each step contains]

**Date/time selection:**
[Live calendar / Week view / Preferred date dropdowns / None — with mobile behavior described]

**Service-selection logic:**
[Pre-selected from page routing / Dropdown / Visual selector — describe routing behavior]

**Submit button wording:** `[Exact wording]`

**Post-submit screen copy:**
```
[Exact confirmation message — auto-confirm vs. pending-confirm variants]
```

**Confirmation email content:**
[What the confirmation email must include — subject, key body content, calendar invite yes/no]

---

## Section 11 — UX / Trust / Accessibility Rules

**Clarity rules for this flow:**
```
- [e.g., "Never say 'booking confirmed' if the booking is pending review"]
- [e.g., "Total deposit amount must be visible before any payment step begins"]
- [...]
```

**Reassurance copy required:**
```
Near booking form:
  - [What must appear here]

Near deposit/payment step:
  - [What must appear here]

On confirmation screen:
  - [What must appear here]
```

**Accessibility requirements:**
- [ ] All form fields have visible labels (not placeholder-only labels)
- [ ] Date/time pickers are keyboard-navigable
- [ ] Error messages are specific: "Please enter a valid 10-digit phone number"
- [ ] Focus states visible on all interactive elements
- [ ] Payment UI inherits hosted provider accessibility (Stripe/Square)
- [ ] Required fields marked with asterisk AND aria-required="true"
- [ ] Confirmation screen is screen-reader readable (not just a styled modal)
- [ ] Tap targets minimum 44×44px on all mobile booking/payment actions
- [ ] No payment or booking meaning encoded in color alone

**Error state rules:**
```
[Phone invalid]: [Exact message]
[Email invalid]: [Exact message]
[Slot taken]: [Exact message + recovery action]
[Payment fails]: [Exact message + fallback path]
[Form submission fails]: [Data preservation rule + fallback]
```

---

## Section 12 — Integration Recommendation

**Recommended path:** [Native form only / Calendly / Cal.com / Square / Stripe Checkout / Stripe Payment Link / Hybrid / Custom — flag to 09]

**Rationale:** [Why this is the lightest realistic solution for this business]

**Phase 1 (fastest launch path):**
[What can be live without backend complexity — e.g., native form + manual follow-up + Stripe link sent externally]

**Phase 2 (when volume justifies automation):**
[When and what to upgrade — e.g., add Calendly + Stripe deposit once booking volume warrants it]

**Phase 3 (flag to 09 if needed):**
[What requires real backend architecture — list specifically]

**Integration notes:**
```
Tool: [Name]
Embed URL or config: [Placeholder / to be provided by client]
Stripe key env vars needed: [List if applicable]
Email notification: [Tool or flag to 09]
```

---

## Section 13 — Implementation Notes

**Component architecture:**
```
[Component name].tsx — [What it does]
[Component name].tsx — [What it does]
[...]
```

**Data / config schema:**
```json
{
  "booking_config": {
    "flow_type": "[A/B/C/D/E]",
    "booking_enabled": false,
    "payment_enabled": false,
    "deposit_enabled": false,
    "deposit": {
      "amount_type": "fixed | percentage",
      "amount": null,
      "credited_to_invoice": true,
      "refund_window_hours": null,
      "trust_copy": null
    },
    "services": [],
    "confirmation_type": "auto | pending",
    "confirmation_window": null,
    "booking_tool": null,
    "booking_tool_embed_url": null,
    "payment_tool": null,
    "emergency_phone_cta": false,
    "emergency_phone_number": null
  }
}
```

**Environment variables required:**
```
[NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY — if Stripe is used]
[STRIPE_SECRET_KEY — server-side only, flag to 09]
[NEXT_PUBLIC_CALENDLY_URL — if Calendly is used]
[NEXT_PUBLIC_CAL_LINK — if Cal.com is used]
```

**Fallback behavior:**
```
Calendar tool fails:  [Exact fallback copy + contact path]
Payment step fails:   [Exact fallback copy + contact path]
Slot conflict:        [Exact message + recovery UX]
No availability:      [Exact message + next step]
Form submission fails: [Data preservation rule]
```

**What must be flagged to 09-backend-architecture:**
```
[ ] Email/SMS confirmation system
[ ] Stripe webhook handling
[ ] Calendar sync (Google/Outlook)
[ ] CRM sync on booking/payment
[ ] Subscription/recurring billing
[ ] Multi-staff availability management
[ ] Admin booking management dashboard
[ ] Waitlist / notification logic
```

---

## Section 14 — Risks and Failure Modes

| Risk | Likelihood | Impact | Prevention |
|---|---|---|---|
| [e.g., Calendar shows unavailable slots] | [High/Med/Low] | [Trust collapses on first interaction] | [Prevention action] |
| [e.g., Deposit with no refund policy shown] | [Med] | [Abandonment at payment step] | [Require trust copy above payment button] |

**Escalation items:**
[List anything that could not be resolved from upstream inputs and requires client clarification before build]

---

## Section 15 — Final Handoff

**To: Build / coding stage**

```
FLOW TYPE: [A/B/C/D/E]
BOOKING ENABLED: [true/false]
PAYMENT ENABLED: [true/false]
DEPOSIT ENABLED: [true/false]

PRIMARY CTA: [Exact wording]
SECONDARY CTA: [Exact wording]

BOOKING TOOL: [Tool name or "native form"]
BOOKING EMBED URL: [URL or "TBD — client to provide"]
PAYMENT TOOL: [Tool name or "Stripe Payment Link — sent by business externally"]
STRIPE KEYS: [In .env — see environment variables section]

CONFIRMATION TYPE: [auto / pending]
CONFIRMATION WINDOW: [e.g., "within 1 business day" / "immediately"]

TRUST COPY — BOOKING FORM: [From Section 6]
TRUST COPY — DEPOSIT STEP: [From Section 7]
TRUST COPY — PAYMENT STEP: [From Section 8]
TRUST COPY — CONFIRMATION SCREEN: [From Section 10]

ESCALATIONS TO 09: [List from Section 13]
ESCALATIONS TO 12-feature-forms: [List specific forms]
ESCALATIONS TO 06-design-system: [Visual treatment items]
```

**Pre-build verification checklist:**
```
[ ] Flow type confirmed and documented
[ ] Every service classified as bookable or request-only
[ ] CTA wording matches actual commitment level
[ ] Calendar tied to real availability OR fallback dropdowns used
[ ] Deposit config complete (amount, refund policy, trust copy)
[ ] No payment exposed for variable-scope services
[ ] Confirmation type confirmed with business owner
[ ] Fallback path exists for tool failures
[ ] Mobile behavior explicitly defined for all flows
[ ] All Stripe keys in .env — not hardcoded
[ ] 09-backend-architecture briefed on server-logic items
[ ] Business owner has approved the flow before build begins
```
