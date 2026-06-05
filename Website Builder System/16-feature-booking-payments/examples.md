# Examples

Two worked examples. Example 1 is Glow Studio (approachable brand, Type A direct appointment, personal services). Example 2 is Peak Ridge Remodeling (authoritative-mid brand, Type B request-first with hybrid consult booking, mixed-scope home services). Both show upstream input summary → full 15-section output.

---

## Example 1 — Glow Studio: Type A · Direct Appointment · Personal Services

### Upstream input summary
- **Business:** Facial and skincare studio — Denver, CO. Solo esthetician, owner-operated.
- **Services:** Signature Facial ($95, 60 min), Express Facial ($65, 30 min), Chemical Peel ($120, 45 min)
- **Scope:** Fixed price, fixed duration for all services. No variable-scope work.
- **No-show risk:** Significant — solo operator, lost slot = lost revenue, no way to fill last-minute cancellations
- **Existing systems:** Nothing. Starting from scratch.
- **Brand register:** Warm, approachable, premium-adjacent. Not clinical.
- **Primary trust barrier:** "Is this a real professional or just someone doing facials out of their house?"
- **02-planning CTA:** "Book Now" — confirmed as intended
- **Urgency dimension:** None — no emergency contact need

---

### BOOKING & PAYMENTS FEATURE PACKAGE
**Project:** Glow Studio
**Page(s):** Homepage, Services Page, /book
**Stage:** 16-feature-booking-payments — output complete
**Flow type:** A — Direct Appointment
**Scope type:** Fixed
**No-show risk:** Significant
**Brand register:** Approachable
**Prior-stage quality:** Strong

---

#### Section 1 — Feature Verdict

**Booking:** YES — all three services are directly bookable
**Online payment:** NO — payment at time of service. Deposit only.
**Deposits:** YES — significant no-show risk with a solo operator. Lost slot = direct revenue loss.

**Recommended flow type:** A — Direct Appointment

**Verdict rationale:** All services are fixed price and fixed duration. The owner manages one client at a time. A no-show has direct, unrecoverable cost. Direct booking with a deposit is the right structure — it commits the client without requiring full payment upfront, which would feel premature for a skincare visit.

---

#### Section 2 — Critique of Upstream Inputs

| Issue | Source | Problem | Resolution |
|---|---|---|---|
| None identified | — | Upstream inputs are well-matched for Type A | No changes needed |

**What was correct and should be preserved:**
- "Book Now" CTA intent — correctly identified as direct booking
- Fixed pricing confirmed at discovery stage — booking is viable
- Solo operator context — confirms deposit is justified

---

#### Section 3 — Business-Model Fit Analysis

**What this business sells:** Time slots — fixed 30, 45, or 60-minute appointments with a single esthetician.

**How the buying process actually works:**
1. Visitor discovers Glow Studio online
2. Reads about services, prices, and esthetician credentials
3. Decides on a service
4. Picks a date and time
5. Leaves a deposit to hold the slot
6. Shows up, receives service, pays balance

**Why that matters:** The scope is 100% predictable before any conversation. Price, duration, and deliverable are all fixed. Self-serve booking matches what the customer expects from a boutique studio. Direct booking is not just appropriate — it's what the visitor will expect when they see fixed prices listed.

**Services classified:**
| Service | Scope | Bookable? | Payable Online? | Flow |
|---|---|---|---|---|
| Signature Facial ($95, 60 min) | Fixed | Yes | Deposit only | A |
| Express Facial ($65, 30 min) | Fixed | Yes | Deposit only | A |
| Chemical Peel ($120, 45 min) | Fixed | Yes | Deposit only | A |

---

#### Section 4 — Ownership Boundaries

**This skill owns:** Full booking flow design for all three services. Deposit logic and trust framing. CTA wording. Placement across homepage and services page. Confirmation messaging.

**Handed to 12-feature-forms:** General contact form for questions not requiring a booking.

**Handed to 09-backend-architecture:** Confirmation email and SMS system. Calendar sync with owner's personal calendar. Stripe webhook handling for deposit confirmation.

**Handed to 06-design-system:** Visual treatment of the booking widget, calendar style, deposit payment step, confirmation screen design.

---

#### Section 5 — Recommended Conversion Flow

```
Step 1: Visitor reads services + prices on homepage or services page
Step 2: Taps "Book [Service Name]" — pre-selects that service
Step 3: Selects date + time from live availability (Cal.com or Calendly)
Step 4: Enters name, phone, email
Step 5: Pays $25 deposit to hold the slot (Stripe Checkout)
Step 6: Confirmation screen + confirmation email with appointment details
Step 7: Reminder SMS/email sent 24 hours before
Step 8: Client arrives, receives service, pays remaining balance in person
```

**Visitor state:**
1. Evaluating → 2. Intending to book → 3. Committing to time → 4. Identifying → 5. Depositing → 6–7. Confirmed → 8. Customer

**Confirmation type:** Auto-confirmed (real-time availability via booking tool)
**Response window:** Immediate

---

#### Section 6 — Booking Strategy

**What can be booked:** All three services — Signature Facial, Express Facial, Chemical Peel. Each has its own duration and slot type.

**What cannot be booked:** N/A — all services are fixed scope.

**Confirmation expectations:** Auto-confirmed. Slot is immediately held on payment of deposit.

**Rescheduling / cancellation:** Via booking tool link in confirmation email. If cancelled within 24 hours of appointment, deposit is forfeited. If cancelled 48+ hours prior, deposit is fully refunded.

**Mobile booking behavior:** Week-view slot selector (not dense monthly calendar). Single-column form below slot selection. Full-width "Pay $25 Deposit" button. Stripe Checkout opens in hosted page on deposit step — does not break out of mobile flow.

**Trust copy near booking UI:**
```
"Your $25 deposit holds your appointment and is applied to your service at checkout.
 Cancel 48+ hours in advance for a full refund."
```

---

#### Section 7 — Deposit Strategy

**Deposit enabled:** YES
**Deposit amount:** $25 fixed
**What it reserves:** Appointment slot and the esthetician's availability
**Applied to final invoice:** Yes — credited at checkout
**Refund window:** Full refund if cancelled 48+ hours before appointment
**Refund conditions:** Full refund (48+ hours) / Forfeited (less than 48 hours)

**Trust copy for deposit step:**
```
"Your $25 deposit holds your appointment slot. It's fully applied to your service
 when you arrive. Cancel 48+ hours in advance and we'll refund it in full.
 Questions? Text us at [phone number]."
```

**Services where deposit should NOT apply:** N/A — deposit applies to all three services equally.

**Deposit trigger:** At booking — required to confirm the appointment.

---

#### Section 8 — Payment Strategy

**N/A — No online full-payment checkout.**

Rationale: Balance is paid at the time of service in person. Collecting full payment online would feel transactional for a personal skincare service and create unnecessary refund complexity. Deposit only is the right model here.

---

#### Section 9 — CTA and Placement Strategy

**Primary CTA:** `Book a Facial`
**Secondary CTA:** `Call With Questions`

**CTA rationale:** "Book a Facial" is specific and honest — it describes exactly what the visitor is doing. "Book Now" would work but is less specific. "Call With Questions" keeps a human path open for first-time visitors who aren't ready to commit.

**Placement map:**
| Zone | CTA | Notes |
|---|---|---|
| Sticky header | "Book a Facial" | Right-aligned, persistent |
| Hero | Primary: "Book a Facial" / Secondary: "See Services" | "See Services" scrolls to service cards |
| Service cards | "Book [Service Name]" per card | Pre-selects that service in booking flow |
| /book page | "Confirm Booking" at final step | After deposit payment |
| Mobile bottom bar | "Book a Facial" + "Call" | "Call" smaller, right side |
| Footer | "Book an Appointment" | Utility link to /book |

**Mobile CTA priority:** "Book a Facial" is the primary tap target. "Call" is secondary — there is no urgency dimension, so phone is a fallback, not a lead.

---

#### Section 10 — Form / Interaction Requirements

**Form type:** Appointment booking — single service selection, date/time, contact details, deposit.

**Essential fields:**
```
1. Service selection — pre-selected from routing, dropdown if direct to /book
2. Date + time — live slot selection via Cal.com or Calendly
3. First name
4. Last name
5. Phone number (required — for appointment reminder)
6. Email address
7. [Deposit payment step — Stripe Checkout]
```

**Excluded:**
```
- Notes field — not needed for standard facial appointments
- Address — client comes to the studio
- Account creation
- How did you hear about us
```

**Step logic:** 2-step max
- Step 1: Service + date/time selection
- Step 2: Contact details + deposit payment

**Date/time selection:** Live week view via Cal.com. Mobile-optimized scroll. Real availability only.

**Submit button:** `Pay $25 Deposit & Confirm` — amount always visible on button.

**Post-submit screen:**
```
Auto-confirm:
"You're all set! Your [Service Name] is confirmed for [Day, Date] at [Time].
 We'll send you a reminder the day before. See you then."

[Address, what to know before your appointment, cancellation link]
```

**Confirmation email:** Sent immediately. Includes: appointment details, address, cancellation/rescheduling link, what to expect.

---

#### Section 11 — UX / Trust / Accessibility Rules

**Clarity rules:**
- Total deposit amount visible before Stripe Checkout opens — never hidden until payment step
- "Appointment confirmed" only shown after deposit is successfully paid
- Cancellation policy shown on booking page, confirmation screen, and confirmation email

**Reassurance copy:**
```
Near booking form:
  "Secure your spot with a $25 deposit — applied to your service at checkout."

Near deposit step:
  "[Trust copy from Section 7]"

On confirmation screen:
  "Questions? Text [phone] or email [email]. We're happy to help."
```

**Accessibility:** All fields with visible labels. Keyboard-navigable date picker. Stripe handles payment accessibility. Tap targets 44×44px minimum. Confirmation screen focus-managed.

**Error states:**
```
Phone invalid: "Please enter a valid 10-digit US phone number"
Slot taken: "That time was just booked. Please choose another slot."
Payment fails: "Payment could not be processed. Please try again or call us at [number]."
```

---

#### Section 12 — Integration Recommendation

**Recommended path:** Cal.com (free tier) + Stripe Checkout for deposit

**Phase 1:** Cal.com embedded on /book page. Stripe Checkout for $25 deposit via Cal.com + Stripe integration. Email confirmation via Cal.com native.

**Phase 2:** Add SMS reminder via Cal.com or Resend + Twilio when volume warrants it.

**Phase 3 (flag to 09):** If managing rescheduling requests or syncing to a studio calendar becomes complex, flag for custom integration.

---

#### Section 13 — Implementation Notes

**Components:**
```
BookingPage.tsx — embeds Cal.com widget, wraps in trust copy
ServiceCard.tsx — "Book [Service]" CTA with pre-selection param
DepositStep.tsx — Stripe Checkout redirect with trust copy above button
ConfirmationScreen.tsx — appointment details, next steps, contact fallback
MobileBookingBar.tsx — sticky bottom bar: "Book a Facial" + "Call"
```

**Config:**
```json
{
  "booking_config": {
    "flow_type": "A",
    "booking_enabled": true,
    "payment_enabled": false,
    "deposit_enabled": true,
    "deposit": {
      "amount_type": "fixed",
      "amount": 25,
      "credited_to_invoice": true,
      "refund_window_hours": 48,
      "trust_copy": "Your $25 deposit holds your appointment and is applied to your service at checkout. Cancel 48+ hours in advance for a full refund."
    },
    "services": [
      { "id": "signature-facial", "name": "Signature Facial", "duration_minutes": 60, "price": 95, "bookable": true, "deposit_required": true },
      { "id": "express-facial", "name": "Express Facial", "duration_minutes": 30, "price": 65, "bookable": true, "deposit_required": true },
      { "id": "chemical-peel", "name": "Chemical Peel", "duration_minutes": 45, "price": 120, "bookable": true, "deposit_required": true }
    ],
    "confirmation_type": "auto",
    "booking_tool": "cal.com",
    "booking_tool_embed_url": "[TBD — client to provide Cal.com link]",
    "payment_tool": "stripe-checkout",
    "emergency_phone_cta": false
  }
}
```

**Flag to 09:** Stripe webhook for deposit confirmation. Email/SMS notification pipeline.

---

#### Section 14 — Risks and Failure Modes

| Risk | Likelihood | Impact | Prevention |
|---|---|---|---|
| Cal.com widget fails to load | Low | Visitor has no booking path | Always show phone number below widget as fallback |
| Stripe deposit fails | Low | Slot not confirmed — visitor confused | Show "call to complete booking" fallback immediately |
| Owner forgets to block unavailable slots | Medium | Double booking | Train owner on calendar management before launch |
| Deposit amount too low to deter no-shows | Unknown | Continued no-show problem | Review after 60 days — consider raising to $35 if needed |

---

#### Section 15 — Final Handoff

```
FLOW TYPE: A
BOOKING ENABLED: true
PAYMENT ENABLED: false
DEPOSIT ENABLED: true — $25 fixed, credited to service

PRIMARY CTA: "Book a Facial"
SECONDARY CTA: "Call With Questions"

BOOKING TOOL: Cal.com
BOOKING EMBED URL: [TBD — client to provide]
PAYMENT TOOL: Stripe Checkout (via Cal.com + Stripe integration)
STRIPE KEYS: In .env — NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY

CONFIRMATION TYPE: auto
DEPOSIT TRUST COPY: [See Section 7]

ESCALATIONS TO 09: Stripe webhook, email/SMS pipeline
ESCALATIONS TO 12-feature-forms: General contact form
ESCALATIONS TO 06-design-system: Booking widget style, deposit step, confirmation screen
```

---

---

## Example 2 — Peak Ridge Remodeling: Type B + Hybrid · Request-First · Mixed-Scope Home Services

### Upstream input summary
- **Business:** Full-service remodeling contractor — kitchens, bathrooms, additions, decks — Denver metro area
- **Services:** Kitchen remodel (variable), bathroom remodel (variable), deck build (semi-fixed), free in-home estimate (consultation)
- **Scope:** Primarily variable — jobs require site visit before any pricing. Deck has a rough range. Estimate is a defined 60-min appointment.
- **No-show risk:** Mild for estimate appointments — occasional no-shows, but not a major operational problem
- **Existing systems:** Nothing. Starting from scratch.
- **Brand register:** Mid-range to authoritative — confident, local, trustworthy. Not approachable-casual.
- **Primary trust barrier:** "Can I trust this company with a $40,000+ project in my home?"
- **02-planning CTA:** "Book Now" — this is a problem. Needs to be corrected.
- **Urgency dimension:** None — remodeling is not emergency

---

### BOOKING & PAYMENTS FEATURE PACKAGE
**Project:** Peak Ridge Remodeling
**Page(s):** Homepage, Service Pages, /estimate, /contact
**Stage:** 16-feature-booking-payments — output complete
**Flow type:** B — Request-First (primary) + Hybrid A for estimate booking
**Scope type:** Mixed (variable primary, semi-fixed deck, fixed estimate appointment)
**No-show risk:** Mild for estimate appointments
**Brand register:** Mid-range / Authoritative
**Prior-stage quality:** Acceptable — CTA strategy requires correction

---

#### Section 1 — Feature Verdict

**Booking:** LIMITED — estimate appointment booking only. No booking for remodeling services themselves.
**Online payment:** NO — payment happens via invoice after project is scoped, bid, and contracted. No public payment page.
**Deposits:** CONDITIONAL — project deposits only after a contract is signed. Not collected via website. Business sends payment link post-contract.

**Recommended flow type:** B — Request-First for all remodeling services. Hybrid: Type A for estimate booking only.

**Verdict rationale:** Every remodeling job requires a site visit before any price or timeline can be given. Direct booking for a kitchen remodel would be operationally dishonest — the business cannot confirm a project start date without seeing the space. The only thing that can be booked online is the free estimate appointment, which is a fixed 60-minute slot with a known duration. Everything else is request-first. Payment and deposits are post-contract — not website-driven.

---

#### Section 2 — Critique of Upstream Inputs

| Issue | Source | Problem | Resolution |
|---|---|---|---|
| "Book Now" as primary CTA | 02-planning | Misrepresents commitment level. Peak Ridge cannot confirm a project start online — they need a site visit first. "Book Now" implies a confirmed slot or service. | Replace with "Request a Free Estimate" as primary CTA. "Book Estimate" for the specific estimate appointment path. |
| No separation of estimate booking from general service request | 04-wireframe | A kitchen remodel inquiry and an estimate scheduling request are different actions that should route differently. | Create two distinct paths: "Request [Service]" routes to the service request form. "Book a Free Estimate" routes to the estimate scheduling flow. |

**What was correct:**
- Free in-home estimate as a conversion goal — correctly identified
- No online payment goal — correctly excluded
- Mid-authoritative brand register — correctly defined

---

#### Section 3 — Business-Model Fit Analysis

**What this business sells:** Large-scope construction jobs. Every job is custom. The buying process is long: inquiry → estimate → proposal → contract → deposit → project.

**How the buying process actually works:**
1. Homeowner has a project in mind
2. They research contractors, read reviews, evaluate trust
3. They contact to request an estimate — not to book work
4. Contractor visits the home, assesses the scope
5. Contractor sends a written proposal with pricing
6. Homeowner reviews and signs a contract
7. Deposit is collected (typically 10–30% of project cost)
8. Project is scheduled and executed
9. Progress payments and final invoice paid via check or payment link

**Why that matters:** Steps 1–5 are the website's responsibility. Steps 6–9 are operational. The website must never promise a project start date, a confirmed price, or a booking of any service. It must generate qualified estimate requests and build enough trust for the homeowner to invite a stranger into their home.

**Services classified:**
| Service | Scope | Bookable? | Payable Online? | Flow |
|---|---|---|---|---|
| Kitchen remodel | Variable | No | No | B — request |
| Bathroom remodel | Variable | No | No | B — request |
| Home addition | Variable | No | No | B — request |
| Deck build | Semi-fixed | No (request price range only) | No | B — request |
| Free in-home estimate | Fixed (60 min appointment) | Yes | No (free) | A hybrid |

---

#### Section 4 — Ownership Boundaries

**This skill owns:** Routing logic between estimate booking and service request. CTA wording correction. Estimate booking flow structure. Deposit strategy specification (noting it is not website-driven). Placement of request and booking CTAs.

**Handed to 12-feature-forms:** The service request form for all remodeling inquiries (kitchen, bathroom, addition, deck). This is a qualified lead form, not a booking form.

**Handed to 09-backend-architecture:** Email notification on estimate booking. Calendar sync for estimate appointments. Payment link delivery post-contract (Stripe or equivalent).

**Handed to 06-design-system:** Visual treatment of estimate booking widget, request form sections.

---

#### Section 5 — Recommended Conversion Flow

**Path 1 — Service request (kitchen, bath, addition, deck):**
```
Step 1: Visitor reads service page — sees what Peak Ridge does for this service
Step 2: Taps "Request [Service] Estimate" — routes to service request form
Step 3: Submits: service type, brief description, address, contact info, timeline
Step 4: "We'll be in touch within 1 business day to schedule your in-home estimate."
Step 5: Peak Ridge calls, qualifies, schedules estimate visit
[Steps 6+ are operational — not website-driven]
```

**Path 2 — Estimate booking (direct to scheduling):**
```
Step 1: Visitor taps "Book a Free Estimate" from hero or header
Step 2: Selects date + time from available estimate appointment slots
Step 3: Enters name, phone, email, address, brief project description
Step 4: "Your estimate appointment is requested. We'll confirm within 1 business day."
Step 5: Peak Ridge confirms and assigns an estimator
```

**Confirmation type:** Pending review for both paths (Peak Ridge must confirm estimate appointments — no auto-confirm until business is ready to manage a live calendar).

---

#### Section 6 — Booking Strategy

**What can be booked:** Free in-home estimate appointment — 60 minutes, no charge.

**What cannot be booked:** Any remodeling service. Project start dates. No "book a kitchen remodel" flow of any kind.

**Confirmation:** Pending. Copy: "Your estimate appointment has been requested. We'll confirm the time within 1 business day and reach out to introduce your estimator."

**Cancellation:** Via phone or email. No deposit involved — no financial complexity on cancellation.

**Mobile booking behavior:** Simplified date + preferred time window (morning / afternoon / flexible) — do not show a granular hourly calendar until live availability is connected. Form is single-column, 5 fields max. No sticky booking bar needed — this is not a high-frequency appointment business.

**Trust copy near booking UI:**
```
"Estimates are free, no-obligation, and take about an hour at your home.
 One of our project leads will walk through your space, ask questions,
 and follow up with a written proposal. No pressure, no surprises."
```

---

#### Section 7 — Deposit Strategy

**Deposit enabled:** CONDITIONAL — project deposits only, after contract is signed.
**Website involvement:** NONE — deposit is not collected via the website.
**Method:** Stripe Payment Link sent by Peak Ridge after contract execution.
**Amount:** Typically 10–25% of project cost — set per contract, not a fixed website amount.

**Why not on the website:** The project scope and price are unknown at first contact. Collecting a deposit before a quote would be misleading and create serious refund/dispute risk. The website should never imply a financial commitment before the proposal stage.

**Trust copy near estimate booking:**
```
[Nothing about deposits at this stage — mentioning deposits before trust is established
 or scope is confirmed would create anxiety and suppress conversion.]
```

---

#### Section 8 — Payment Strategy

**N/A — No online payment through the website.**

Rationale: All payment happens post-contract. Peak Ridge sends payment links via Stripe or check. A public payment page would imply standardized pricing that does not exist. No payment UI should appear on the website at any stage.

If the business later wants an "invoice payment" link for existing clients, that is a private, post-contract link — not a public website page. Flag to 09 if a client portal is eventually needed.

---

#### Section 9 — CTA and Placement Strategy

**Primary CTA:** `Request a Free Estimate`
**Secondary CTA:** `Call Now` (tel: link)

**CTA rationale:** "Request a Free Estimate" correctly describes what happens — the visitor is requesting a visit, not booking a service. It sets the right expectation: the estimate is free, there is no commitment, and the business will follow up. "Book Now" was wrong and is corrected here.

**Placement map:**
| Zone | CTA | Notes |
|---|---|---|
| Sticky header | "Request Estimate" right-aligned + phone number visible | Phone always in header |
| Hero | Primary: "Request a Free Estimate" / Secondary: "Call Now" | "Call Now" as tel: link |
| Service pages | "Request [Kitchen/Bathroom/Deck] Estimate" per service | Routes to request form pre-tagged |
| /estimate page | "Book Estimate Appointment" | Full estimate booking flow |
| Contact page | Service request form (owned by 12) | General inbound |
| Mobile | "Call Now" primary tap — full-width or sticky bottom | "Request Estimate" secondary |
| Footer | Phone number prominent + "Request Estimate" link | |

**Mobile CTA priority:** "Call Now" leads on mobile. Remodeling is a high-consideration, high-trust purchase. The phone call is often how trust is built before any form is submitted. "Request Estimate" is secondary.

---

#### Section 10 — Form / Interaction Requirements

**Estimate booking form:**
```
Fields:
  1. Service type — dropdown: Kitchen / Bathroom / Addition / Deck / Other
  2. Preferred date — date picker or calendar
  3. Preferred time — Morning / Afternoon / Flexible (dropdown, not granular)
  4. Full name
  5. Phone number
  6. Email
  7. Property address (required — estimator must know where to go)
  Optional: "Brief description of your project" (1 open field)

Submit: "Request My Free Estimate"
Step logic: Single-page form
```

**Service request form (handed to 12-feature-forms):**
```
Fields:
  1. Service type — dropdown
  2. Brief description of the project
  3. Approximate timeline — ASAP / 1–3 months / 3–6 months / Planning ahead
  4. Property address
  5. Full name
  6. Phone
  7. Email

Submit: "Send My Request"
No date/time selector — Peak Ridge schedules the estimate after reviewing the request
```

**Post-submit confirmation:**
```
Estimate booking:
  "Your estimate appointment has been requested for [Date / Preferred Time].
   We'll confirm the exact time within 1 business day and send you the
   details for your visit. Questions? Call us at [number]."

Service request:
  "Thanks — we've received your [Service] request. A member of our team
   will reach out within 1 business day to discuss your project and
   schedule your free in-home estimate."
```

---

#### Section 11 — UX / Trust / Accessibility Rules

**Clarity rules:**
- Never say "booking confirmed" for an estimate appointment — it is pending review until Peak Ridge confirms
- Never show a project start date or price range at the request stage
- "Free estimate" must be visible before the request form — not revealed after submission

**Reassurance copy:**
```
Near estimate booking form:
  "[Trust copy from Section 6]"

Near service request form (owned by 12, specified here):
  "Free estimates. No-obligation proposals. We'll call to confirm within 1 business day."

On confirmation screen:
  "You'll hear from us at [phone] or [email] within 1 business day.
   Prefer to call? [phone number]"
```

**Accessibility:** All fields with visible labels. Address field clearly labeled. Dropdown fields keyboard-navigable. Required fields marked. Error messages specific and actionable.

**Error states:**
```
Phone: "Please enter a valid phone number so we can confirm your appointment"
Address: "We need your address to schedule your in-home estimate"
Form fails: "Something went wrong — please call us at [number] to request your estimate"
```

---

#### Section 12 — Integration Recommendation

**Phase 1 (launch):** Native form + email notification to Peak Ridge. No live calendar. "Preferred date/time" dropdowns only. Peak Ridge confirms manually within 1 business day. Stripe Payment Link sent post-contract externally — no website integration needed.

**Phase 2:** Cal.com for estimate appointment scheduling — connect to estimator's real availability. Automated confirmation email via Resend.

**Phase 3 (flag to 09):** If multiple estimators need separate calendars or routing logic, or if client invoice payment portal is needed — full backend spec required.

---

#### Section 13 — Implementation Notes

**Components:**
```
EstimateRequestForm.tsx — date preference + contact + address + project type
ServiceRequestForm.tsx  — detailed inquiry form (owned by 12, referenced here)
ConfirmationScreen.tsx  — pending-review message + contact fallback
```

**Config:**
```json
{
  "booking_config": {
    "flow_type": "B",
    "booking_enabled": true,
    "payment_enabled": false,
    "deposit_enabled": false,
    "services": [
      { "id": "kitchen", "name": "Kitchen Remodel", "bookable": false, "flow_type_override": "B" },
      { "id": "bathroom", "name": "Bathroom Remodel", "bookable": false, "flow_type_override": "B" },
      { "id": "deck", "name": "Deck Build", "bookable": false, "flow_type_override": "B" },
      { "id": "estimate", "name": "Free In-Home Estimate", "duration_minutes": 60, "bookable": true, "flow_type_override": "A" }
    ],
    "confirmation_type": "pending",
    "confirmation_window": "1 business day",
    "booking_tool": "native",
    "payment_tool": null,
    "emergency_phone_cta": false
  }
}
```

**Flag to 09:** Email notification on form submission. Future Cal.com integration when ready. Future Stripe payment link workflow for deposits and invoices.

---

#### Section 14 — Risks and Failure Modes

| Risk | Likelihood | Impact | Prevention |
|---|---|---|---|
| "Book Now" language survives into build | Medium | Misrepresents commitment, creates confusion when estimate needs manual confirmation | Enforce CTA correction from this output — "Request a Free Estimate" everywhere |
| Estimate slots shown without real availability | High if calendar added prematurely | Visitor picks a time Peak Ridge can't honor | Use preferred date/time dropdowns until real Cal.com integration is live |
| Visitor expects project booking, not estimate | Medium | Confusion when follow-up is about estimate scheduling, not project start | Confirm "free estimate" framing is clear on every entry point |
| Payment link sent too early (before contract) | Low | Homeowner confused about what they're paying | Deposit is entirely post-contract, sent externally — remove any payment language from website |

---

#### Section 15 — Final Handoff

```
FLOW TYPE: B (primary) + A hybrid for estimate appointment
BOOKING ENABLED: Limited — estimate appointment only
PAYMENT ENABLED: false
DEPOSIT ENABLED: false on website — post-contract only, external link

PRIMARY CTA: "Request a Free Estimate"
SECONDARY CTA: "Call Now"
CTA CORRECTION FROM 02-PLANNING: Replace "Book Now" everywhere

BOOKING TOOL: Native form (Phase 1) / Cal.com when ready (Phase 2)
CONFIRMATION TYPE: pending — "within 1 business day"
PAYMENT TOOL: none on website — Stripe Payment Link sent post-contract externally

ESCALATIONS TO 09: Email notification on form submission, Cal.com integration (Phase 2)
ESCALATIONS TO 12-feature-forms: Service request form for all remodeling services
ESCALATIONS TO 06-design-system: Estimate form layout, confirmation screen, request form style
```
