# Social Proof Strategy Rules

This file defines how to read upstream inputs, compute the proof tier, select the right proof system, and determine placement and density across the page.

---

## Part 1: Reading Upstream Inputs

Before selecting any modules or writing any content, extract these four things from the upstream package:

**1. The primary trust barrier**
What is the single biggest reason a visitor might not contact this business?
- Source: `01-discovery` (pain points, objections, audience fears) + `05-brand-direction` (anti-identities)
- Expressed as: "The visitor is most likely to distrust this business because [specific fear]."

**2. The available proof assets**
What real proof does this business actually have?
- Source: `01-discovery` (reviews, certifications, years, testimonials, guarantees)
- List each asset and mark it: confirmed / unconfirmed / placeholder

**3. The brand register**
What tone and visual density does the brand allow?
- Source: `05-brand-direction` and `06-design-system`
- Register determines density ceiling — authoritative brands have lower density ceilings than approachable brands

**4. The high-friction moments**
Where on the page are visitors most likely to hesitate before acting?
- Source: `02-planning` (user journey, CTA strategy) + `04-wireframe` (form location, CTA placement)
- Expressed as: the hero CTA zone, the contact form, each service section CTA, and the footer

If any of these four cannot be answered from upstream inputs, flag it in Section 8 and state your assumption.

---

## Part 2: Computing the Proof Tier

The proof tier controls module selection, density, and fallback behavior. Compute it from available data:

| Tier | Condition |
|---|---|
| **strong** | Google rating ≥ 4.5 AND review count ≥ 50 |
| **moderate** | Google rating ≥ 4.0 AND review count 10–49, OR 3+ strong verified testimonials available |
| **thin** | Review count < 10, limited testimonials — other proof assets (certs, years) available |
| **none** | No review presence, no testimonials — only credentials, guarantees, or operator credibility |

When exact data is unavailable at build time, default to `thin` and note the assumption.

---

## Part 3: Proof System Selection

Based on proof tier, select the primary proof anchor:

**strong tier:**
- Primary anchor: Google rating + review count
- Secondary: curated testimonial quotes (3 max)
- Tertiary: certification strip, years in business, guarantee

**moderate tier:**
- Primary anchor: curated testimonial quotes (2–3)
- Secondary: Google rating if ≥ 4.0 (omit if below)
- Tertiary: certifications, years, guarantee/promise

**thin tier:**
- Primary anchor: certifications / licenses / insurance
- Secondary: years in business + service-area trust
- Tertiary: owner/operator credibility block
- Optional: review-theme summary (only if grounded in real feedback patterns, clearly labeled)

**none tier:**
- Primary anchor: certifications + owner credibility
- Secondary: guarantee / service promise
- Tertiary: process trust cues ("how we work")
- No review modules, no empty carousels

---

## Part 4: Proof Density Rules

Density is controlled by the brand register AND the proof tier. Use the lower of the two ceilings.

**Approachable register:**
- Can support higher density — human-voice quotes, named reviewers, warm language
- Strong tier: up to 3 quote cards + review summary + badge strip
- Thin tier: 1 operator block + 2–3 badges + 1 promise statement

**Authoritative register:**
- Restrained density — no quote walls, no badge overload
- Strong tier: 1 review summary stat + 1–2 selected quotes + credential strip
- Thin tier: credential strip only + 1 guarantee statement

**Mid-register:**
- Apply personality dimensions from `05-brand-direction` to resolve ambiguity
- Default: restrained unless proof tier is strong and business type benefits from density

**Universal density rule:**
When trust density and premium cleanliness conflict, bias toward the more restrained solution. Only increase density when the proof is genuinely strong and the business type benefits from it.

---

## Part 5: Proof Priority Order

When choosing which signals to emphasize, apply this order unless business context strongly suggests otherwise:

1. Google reviews or review-platform rating presence
2. Strong testimonial snippets
3. Certifications, licenses, insurance, professional badges
4. Years in business and local track record
5. Before-and-after proof or case examples
6. Owner or operator credibility
7. Guarantees, warranties, and service promises
8. Local service-area trust cues
9. Process-based trust cues ("how we work")
10. Partner logos or client logos — only when truly relevant

Do not re-order this without a specific business-context reason documented in your output.

---

## Part 6: Business-Type Proof Emphasis

Different business types have different primary trust barriers. Adjust proof emphasis accordingly:

**Home services (plumber, roofer, cleaner, electrician, landscaper):**
- Primary fear: "Will they show up? Will they do it right? Are they safe in my home?"
- Emphasize: Google reviews/rating, insurance confirmation, named testimonials, service-area specificity
- De-emphasize: logo rows, abstract authority claims

**Health and wellness (dentist, chiropractor, therapist, med spa, trainer):**
- Primary fear: "Are they qualified? Will I be safe? Is this worth the cost?"
- Emphasize: credentials, licenses, professional memberships, before/after (if appropriate), guarantee of care
- De-emphasize: high volume review counts (quality > quantity here)

**Professional services (lawyer, accountant, consultant, financial advisor):**
- Primary fear: "Can I trust them with something important? Are they competent?"
- Emphasize: credentials, years of practice, named case outcomes, professional associations
- De-emphasize: casual review-style quotes, high-volume counters

**Retail / food / hospitality (restaurant, salon, bakery, shop):**
- Primary fear: "Is this worth my time and money? What's the experience like?"
- Emphasize: real quotes about the experience, repeat-customer language, atmosphere signals
- De-emphasize: technical credential strips

---

## Part 7: When to Use Fallback Proof Systems

If the business has weak review volume or no testimonials:

**Do not:**
- Fake density with empty carousels
- Force testimonial sections with no real content
- Use "trusted by thousands" without a real number
- Show a star rating widget with fewer than 5 reviews

**Do instead:**
- Lead with certifications and licensing as the primary trust anchor
- Build an operator credibility block (owner name, bio, photo if available)
- Use explicit guarantee / service promise language (only when factual)
- Apply service-area and local specificity as implicit trust signals
- Use process trust cues: "Here is how we work and why it produces consistent results"
- Write review-theme summaries only if grounded in real, confirmed feedback patterns — never fabricated

**Appearance standard for thin/none tiers:**
The page must look intentionally restrained and professional — not empty or apologetic. A credential-led trust section that is clean and specific outperforms a padded testimonial carousel with fake quotes every time.

---

## Part 8: Placement Decision Logic

Proof placement must follow friction points — where the visitor is most likely to hesitate.

**Hero area:**
- Include a proof bar only if proof_tier is strong or moderate
- Fallback: certification line ("Licensed · Insured · [City] Since [Year]")

**Below hero / intro area:**
- Badge strip always renders here if certifications exist (any tier)

**Mid-page proof zone:**
- Primary testimonials/reviews section — the main dedicated proof block
- Position after the services section or before the CTA section

**Service sections:**
- One trust insert per service block: 1 relevant quote OR 1 relevant badge — not both
- Only include when proof is available and specific to that service

**Contact form area:**
- Form-adjacent reassurance zone always renders above the submit button
- Content adapts to proof tier (strong: rating + quote; thin: certification + promise)

**Footer:**
- Compact trust strip always renders: 2–3 badges + years + short promise line

**Mobile call-area:**
- Star rating beside tap-to-call only if proof_tier ≥ moderate
- Fallback: "Licensed & Insured" beside the call button
