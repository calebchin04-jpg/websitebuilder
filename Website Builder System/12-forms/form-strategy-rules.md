# Form Strategy Rules

## Core Decision Standard

When designing any form, answer these questions first:

1. What does the business actually need to know?
2. What is the minimum information required for a useful next step?
3. What fields are essential vs. nice to have?
4. Would multi-step reduce friction or just make the flow longer?
5. What trust signals reduce hesitation at the point of completion?
6. What can be postponed until after submission rather than asked upfront?
7. How can the form feel premium and intentional rather than generic?

---

## Form Type Selection

Choose the lightest form type that fits the goal.

| Form Type | Use When |
|---|---|
| Simple contact form | Basic inquiry, no qualification needed |
| Quote / estimate request | Service business needing project context |
| Service inquiry form | Multiple service offerings, basic routing needed |
| Project brief form | Creative or complex services needing scope |
| Consultation request | Professional services, appointment-based |
| Multi-step qualification | High-ticket services needing real pre-qualification |
| Short lead form + follow-up | Volume-first, qualification happens post-submit |

**Default to the simplest type that serves the conversion goal.** Do not recommend a more complex form type unless it clearly improves both quality and usability.

---

## Qualification Balance

The form is not the sale. For most service businesses, the form is a handoff — it transfers a motivated prospect into the business's follow-up process.

**Over-qualification risks:**
- Users abandon before submitting
- Form feels like an application, not a request
- Business gets fewer but not meaningfully better leads
- Completion drops without corresponding quality improvement

**Under-qualification risks:**
- Business spends time on poor-fit leads
- Follow-up calls start without useful context
- Estimators / salespeople lack information to prepare

**The right balance point depends on:**
- Average project or contract value (higher value = more qualification is acceptable)
- Follow-up process (if the business calls every lead, the call handles qualification)
- Service complexity (commodity services need less; bespoke needs more)
- Competition (if competitors have shorter forms, friction hurts you more)

---

## Field Rules

Every field must justify its existence before it is included.

**Include a field when:**
- The business genuinely uses it before or during the follow-up
- The user expects to provide it (name, contact info)
- It changes how the business responds (project type, service selection)
- Removing it would create a worse first interaction

**Remove a field when:**
- The business doesn't act on it until a later stage
- It can be gathered during a follow-up call or visit
- It feels intrusive before the user has built trust
- It duplicates information already captured another way

**Field ordering logic:**
1. Personal fields first (name, contact) — low-friction, establishes the person
2. Qualifier fields second (project type, service) — medium-friction, asks for a decision
3. Enrichment fields last (description, budget, timeline) — high-friction, optional where possible

---

## Form Type Rules by Business Type

### Local service business (home services, trades, contractors)
- Simple contact or estimate request
- Name, phone, email, service type, optional description
- Phone is critical — primary contact method for this audience
- Multi-step almost never justified unless project scope is genuinely complex

### Professional services (law, finance, consulting)
- Consultation request
- Name, phone, email, service area or issue type, optional message
- May add scheduling if business has a defined booking flow
- Budget/timeline optional unless genuinely used to route the lead

### E-commerce / product
- Not a form agent task — escalate to checkout/cart agent

### SaaS / software
- Demo request or trial form
- Name, email, company, role, optional use-case
- Phone usually not required for first touch

### Creative services (agency, design, photography)
- Project brief form or short inquiry
- Name, email, project type, timeline, rough budget range (if used to qualify)
- Upload of reference/brief doc often appropriate

---

## Complexity Escalation Rules

Add complexity only when one of these is true:

**Add multi-step when:**
- Single-step field count exceeds 7 visible fields
- Different project types require genuinely different field sets
- User research or conversion data shows single-step abandonment

**Add conditional logic when:**
- A user's answer meaningfully changes what they need to fill out
- Showing all fields at once creates visible clutter or confusion

**Add uploads when:**
- The business uses the uploaded file before the first contact (not just "nice to have")
- The file type is predictable (photos, brief, floor plan, document)
- The upload reduces back-and-forth in the follow-up

**Add scheduling when:**
- The business has a defined booking system
- The next step after form submit is a scheduled call or visit
- Inline scheduling does not depend on the form submission being reviewed first

**Do not add any of the above** if the only reason is to make the form feel more sophisticated or to match a competitor's feature set.
