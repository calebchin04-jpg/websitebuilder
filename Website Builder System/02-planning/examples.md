# Examples

Three examples showing how `02-planning` should behave. Each example covers: input brief quality, critique behavior, send-back or follow-up decisions, and abbreviated planning PRD output.

---

## Example 1 — Strong discovery brief, clean planning output

**Scenario:** Marcus Pro Wash (Austin pressure washing). Well-formed brief from discovery.

---

**Input brief summary (from 01-discovery):**
- Business: Marcus Pro Wash, residential pressure and soft washing, Austin TX
- Audience: Homeowners 35–60, property-proud, "done right not cheap" mindset, fear of surface damage
- CTA: Call directly (phone) — owner closes better on calls
- Differentiator: Technique-first + 15+ reviews specifically mentioning surface care + free re-clean guarantee
- Proof: 47 Google reviews at 4.9, strong before/after photos
- Pages: Home, Services, Gallery, About, Contact, Service Areas
- Visual: Clean, big photography, Marcus on-site, no blue gradient hero, no stock photos
- Features mentioned: quote form as secondary CTA

---

**Phase 1 — Critique:**

> **Overall brief quality:** Strong
>
> **Weaknesses identified:**
>
> - **CTA / Mechanism:** "Call directly" is clear, but no phone number format or sticky click-to-call behavior was specified. Minor — handled in planning.
> - **Secondary CTA:** Quote form was mentioned as secondary but no form fields were specified. Minor — will define baseline fields in functional requirements.
> - **Visual:** Animation level not specified. Minor — assumed subtle, labeled.
>
> No send-back required. No follow-up round needed. Proceeding to output.

---

**Abbreviated planning PRD (key sections only):**

**Business goals:**
- Grow the number of new residential clients in Austin per month
- Position Marcus Pro Wash as the premium-tier choice in the Austin pressure washing market

**Website goals:**
- Primary: Generate 15+ inbound calls per month from Austin homeowners via website
- Secondary: Generate 5+ quote request form submissions per month

**Core audience:**
Austin homeowner, 35–60, owns and cares about their property, willing to pay more for a service that won't damage their siding or deck. Their core fear is hiring someone who uses the wrong technique. Their core evaluation criteria: proof of care (reviews mentioning process and results) and a clear guarantee.

**Core CTA:** Call Marcus — click-to-call button in sticky header, hero, post-gallery, and contact page.

**Strategic direction:**
This site's job is to confirm, in under 10 seconds, that Marcus is the careful, trusted expert — not the cheapest option. The site should not feel like a generic contractor template. It should feel like a craftsperson's portfolio: before/after evidence first, then services, then CTA. Every page should make the call feel safe and low-risk.

**Feature decisions:**

| Feature | Decision | Reason |
|---|---|---|
| Hero section | Required Now | Entry point — proof-first layout |
| Before/after gallery | Required Now | Primary differentiation vehicle |
| Click-to-call | Required Now | Primary CTA mechanism |
| Quote form | Required Now | Secondary CTA for non-callers |
| Reviews section | Required Now | 47 reviews at 4.9 is strong signal |
| Service areas page | Required Now | Austin-local SEO value |
| Blog | Deferred | No content plan; SEO benefit insufficient for scope cost |
| Live chat | Deferred | Solo operator cannot monitor |
| CMS | Deferred | Agency manages site |

**Handoff to 03-sitemap:**
> Build the sitemap around these pages: Home, Services, Gallery (before/after), About Marcus, Service Areas (Austin + key neighborhoods), Contact. Do not add pages not listed. Service area page should be structured for local SEO — consider breaking into 2–3 neighborhood-specific sub-areas if targeting multiple zones.

---

## Example 2 — Weak discovery brief, send-back triggered

**Scenario:** Generic "marketing agency" website request. Vague brief.

---

**Input brief summary (from 01-discovery):**
- Business: "Digital Edge," a marketing agency
- Audience: "Small businesses that need marketing help"
- CTA: "Contact us / learn more about our services"
- Differentiator: "We're results-driven and really care about our clients"
- Proof: "Some case studies — not sure if we can share them"
- Pages: Home, About, Services, Contact, Blog, Team, Portfolio, Pricing, Resources
- Visual: "Modern, premium, cutting-edge"
- Constraints: None stated

---

**Phase 1 — Critique:**

> **Overall brief quality:** Weak
>
> **Weaknesses identified:**
>
> - **Audience:** "Small businesses that need marketing" is everyone. No specific industry, situation, size, pain point, or decision context. Cannot design or plan for this. *Send-back required.*
> - **CTA:** "Contact us / learn more" is not a CTA. Two vague options, no mechanism, no ranking. Cannot define conversion strategy without this. *Send-back required.*
> - **Differentiation:** "Results-driven and care about clients" is what every agency says. No provable claim, no specific capability. Usable for planning only if we infer from the offer, which is currently undefined.
> - **Proof:** "Some case studies — not sure if we can share" is not a usable proof asset. Trust strategy cannot be defined.
> - **Feature list:** 9 pages listed including blog, resources, and pricing — no prioritization. Risk of scope bloat that dilutes quality.
> - **Visual:** "Modern, premium, cutting-edge" are adjectives with no concrete rules. Not a send-back item on its own — flagged for `05-design-system`.
>
> **Send-back threshold met:** 3 of the 6 planning-critical foundations are missing (audience, CTA, differentiation). Sending back to `01-discovery`.

---

**Formatted send-back:**

```
SEND-BACK TO 01-DISCOVERY
Reason: The discovery brief is insufficient for strategic planning. The following items must be resolved before planning can proceed.

Required fixes:

1. Audience: "Small businesses that need marketing" is too broad 
   to plan around. Who is Digital Edge's most common or most 
   valuable client? What industry are they in? What specific 
   marketing problem brought them to the agency? Describe one 
   real client they've worked with and what that client needed.

2. Primary CTA: "Contact us / learn more" is not a usable CTA. 
   What specific action should a visitor take when they're 
   interested? Options: schedule a strategy call, request a 
   proposal, fill out an intake form, call directly. Which one 
   is it — and is there only one?

3. Differentiator: "Results-driven and care about clients" is 
   what every agency says. What specifically does Digital Edge 
   do or produce that a competitor cannot claim? Is there a 
   niche, a specific channel they're exceptional at, a 
   guarantee, a pricing model, a speed of delivery, or 
   a type of result they're known for?

Non-blocking weaknesses (fix if possible but not required before return):

- Proof assets: Determine whether case studies can be shared 
  before we design the social proof strategy. This affects 
  page structure significantly.
- Feature list: 9 pages with no prioritization. Discovery 
  should push the client to identify which 5 are essential 
  for launch. This will affect scope and quality.
```

---

**After return — revised brief (partial):**
- Audience updated: "B2B service businesses with 5–25 employees — consultants, agencies, law firms. They need more qualified leads and aren't getting them from their current website or Google Ads."
- CTA updated: "Schedule a free 30-minute strategy call via Calendly"
- Differentiator: Still vague but slightly better — "We specialize in B2B lead gen through LinkedIn + Google — we don't do social media management or brand design"
- Proof: 3 case studies confirmed, can share them

---

**Phase 2 — Follow-up (1 round, after return):**
Differentiation is still thin. One targeted question:
> Digital Edge focuses on LinkedIn + Google for B2B lead gen. Is there a specific result type or a verifiable outcome you can point to — e.g., "Our clients average X qualified leads per month after 90 days," or a specific niche you've worked in repeatedly (e.g., law firms, SaaS)?

User responds: "We've worked mostly with law firms and professional services. Average client sees 2–3x increase in qualified inquiries within 60 days."

Now proceeding. Differentiation is usable.

---

**Abbreviated planning PRD (feature decisions only):**

| Feature | Decision | Reason |
|---|---|---|
| Calendly booking widget | Required Now | Primary CTA mechanism |
| Case studies (3) | Required Now | Primary trust asset; determines site structure |
| Services description | Required Now | Buyer needs to confirm fit before booking |
| Team/about | Required Now | B2B trust is personal — who they're working with matters |
| Blog | Deferred | No content plan; adds scope without conversion value at launch |
| Resources section | Deferred | Same reason as blog |
| Portfolio separate page | Merged into case studies | Three case studies don't warrant a separate portfolio page |
| Pricing page | Useful Optional | Professional services buyers often don't show pricing — discuss with client, default to "no" |

---

## Example 3 — Medium brief, follow-up round used, assumptions labeled

**Scenario:** Local yoga studio. Brief is acceptable but has a key planning gap — it's unclear who owns the site post-launch.

---

**Input brief summary (from 01-discovery):**
- Business: "Flow Studio," yoga and meditation, Brooklyn NY
- Audience: Urban women 28–45, professional, high-stress, want calm + routine, not beginner-yoga-curious — already practice
- CTA: Book a class — online booking via Mindbody
- Differentiator: Small class sizes (max 12), advanced instruction, no drop-in chaos
- Proof: 62 Google reviews at 4.8, testimonials available
- Pages: Home, Schedule + Booking, About, Teachers, Pricing, Contact
- Visual: Calm, editorial, earthy tones, minimal animation
- CMS: Not mentioned

---

**Phase 1 — Critique:**

> **Overall brief quality:** Acceptable with one flag.
>
> **Weaknesses:**
> - **Post-launch ownership:** Not stated. If the studio owner will update the schedule or pricing herself, CMS is required. If the agency manages everything, it's not. This is a planning-critical decision that affects build scope significantly.
>
> No other significant weaknesses. No send-back required.

---

**Phase 2 — Follow-up round (1 question):**

> One gap before I can complete the plan:
>
> **Post-launch ownership:** After launch, will the studio owner need to update the class schedule, pricing, or other content herself? Or will the agency manage all edits? The answer determines whether we need a CMS built in.

**User:** "She wants to update the schedule herself but doesn't want anything complicated."

→ CMS required. Headless or simple CMS option needed. Flagged for build plan.

---

**Feature decisions (abbreviated):**

| Feature | Decision | Reason |
|---|---|---|
| Online booking (Mindbody integration) | Required Now | Primary CTA mechanism |
| Schedule page | Required Now | Core conversion path for existing practitioners |
| CMS (simple) | Required Now | Client updates schedule post-launch |
| Teachers page | Required Now | Small-class credibility depends on knowing who teaches |
| Reviews section | Required Now | 62 at 4.8 is strong |
| Blog | Deferred | Not mentioned, no content plan |
| Gift cards / retail | Deferred | Not in scope for this build |

**Assumptions:**
> `[ASSUMPTION]` **CMS platform:** Assuming a simple headless CMS (e.g., Sanity or Contentful) or a lightweight option appropriate for a non-technical user managing schedule and pricing only. **Why:** Platform not specified. **Impact:** Build plan must confirm the right CMS option before coding begins.

---

**Handoff to 03-sitemap:**
> Build sitemap around: Home, Schedule + Booking (Mindbody embed), Pricing, Teachers, About, Contact. The Schedule page is the highest-conversion page — it must be accessible from primary nav. CMS scope: schedule content and pricing only; the rest of the site is static.
