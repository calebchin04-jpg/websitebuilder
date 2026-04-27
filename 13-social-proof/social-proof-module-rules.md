# Social Proof Module Rules

This file defines the complete specification for every available social-proof module — what each does, when to use it, how it should look, how it behaves on mobile, and what it must never do.

---

## Module A — Hero Proof Bar

**Purpose:** Surface the single strongest trust signal immediately below the hero CTA before the visitor scrolls.

**Use when:** `proof_tier == strong` OR `proof_tier == moderate` AND `google_rating >= 4.0` AND `google_review_count >= 10`

**Content:**
```
★★★★★  [rating] stars · [count] Google reviews
```

**Rules:**
- One line only — never expand this into a larger block
- Star icons must have an `aria-label` ("4.8 out of 5 stars")
- If proof_tier is thin or none, replace with: `Licensed · Insured · [City/Region] Since [Year]`
- Never show a review count below 10

**Mobile:** Same single line, slightly smaller type, never wraps mid-number. If it cannot fit on one line at 375px, abbreviate: "★★★★★ 4.8 · 127 reviews"

**Anti-patterns:**
- Do not expand into a two-line block in the hero
- Do not include a quote excerpt — that belongs in Module C
- Do not show if the rating is below 4.0

---

## Module B — Trust Badge Strip

**Purpose:** Rapid-scan professional legitimacy through credentials and licenses.

**Use when:** At least 1 verified certification, license, insurance confirmation, or membership exists. Renders at any proof tier.

**Content per badge:**
```
[icon]  [Short label]  [Optional sub-label in smaller text]
e.g.    🛡  Licensed & Insured  |  CA Contractor #XXXXX
        ✓   BBB Accredited
        ✓   [Trade Org] Member
        ✓   Satisfaction Guaranteed
```

**Rules:**
- Maximum 5 badges. More than 5 = clutter.
- Each badge must have a text label — never icon-only
- Sub-labels are optional but strongly recommended for licenses with verifiable numbers
- Do not include unverified badges — mark as `verified: false` in data until confirmed
- Do not pad with generic icons ("clock icon = fast service") — only real credential badges

**Visual treatment:**
- Horizontal row of chip-style elements on desktop
- Clean, muted style — not the hero of the section, just a quick read
- Icon + bold label + optional smaller sub-label

**Mobile:** Wrap to 2-column grid below 3 items. If > 4 badges, 2-column grid always.

**Anti-patterns:**
- Do not create a "wall of badges" with 8–10 items
- Do not use logos that belong to organizations the business hasn't actually joined
- Do not make the badge strip the primary hero of a page section

---

## Module C — Testimonials Section

**Purpose:** Human-voice social proof. The main dedicated proof zone of the page.

**Three variants based on proof tier:**

### C1 — Full Quote Cards (strong tier)
```
Layout:     3-column card grid desktop → single column stack mobile
Per card:   - Quote text: 2–4 sentences, no more
            - Reviewer: First name + last initial
            - Star rating: 5 stars shown with aria-label
            - Platform tag: "Google" | "Yelp" | "Direct" | etc.
            - Job-type tag (optional): "Roof replacement" | "Deep clean" | etc.
Max cards:  3 in the primary section. More can go in a secondary expanded view.
```

### C2 — Theme Summary + 1–2 Quotes (moderate tier)
```
Layout:     Intro paragraph + 1–2 quote cards below
Summary:    "Our customers most often mention [theme 1], [theme 2], and [theme 3]
             — based on [N] reviews."
            MUST be labeled as a theme summary, not presented as a direct quote.
Quote cards: Same format as C1, maximum 2
```

### C3 — Operator-Led Block (thin/none tier)
```
Layout:     Owner statement block — no testimonial cards
Content:    First-person statement from the owner
            Must be specific, real, and claimable
            "We have been doing [service] in [City] since [Year].
             Every job includes [specific standard]. That's our promise."
No fake quotes. No empty card grids.
```

**Rules across all variants:**
- Reviewer names: first name + last initial only (privacy)
- Quotes must be real or clearly marked as paraphrased theme summaries
- Never more than 3 cards in the primary proof section
- Section heading must be specific — not "What Our Customers Say" → prefer "What [City] Homeowners Are Saying" or similar
- Do not use a testimonial carousel unless there are at least 6 real quotes to cycle through

**Mobile — C1/C2:** Single column stack, each card full width, quote text max ~4 lines before a "read more" toggle if needed.
**Mobile — C3:** Simple stacked text block, no card chrome needed.

**Anti-patterns:**
- Do not use a large empty carousel with 1–2 entries
- Do not use fake reviewer names, avatars, or profile photos
- Do not repeat the same sentiment twice in different cards
- Do not use quotes longer than 4 sentences

---

## Module D — Review Summary Block

**Purpose:** At-a-glance aggregate social proof in stat form.

**Use when:** `google_review_count >= 10` and `google_rating >= 4.0`

**Content:**
```
[Rating] / 5    |    [Count]+ Google Reviews    |    [Year]+ Years Serving [City]
```

**Rules:**
- Three stats maximum — do not add a fourth
- Stats must come from real data, not estimates
- Link the review count stat to the Google Business profile if `place_id` is available
- Do not show if review count is below 10

**Visual treatment:**
- Large number, small label below or beside
- Clean horizontal layout, centered or left-aligned per brand register
- Muted dividers between stats

**Mobile:** 3 stats stack vertically, centered. Each stat gets its own line with number large and label small below.

**Anti-patterns:**
- Do not show a "0+" or "5+ reviews" stat — it signals thin proof
- Do not mix unverified stats into this block
- Do not combine this with the Hero Proof Bar — one is the at-a-glance stat block, the other is the hero micro-line

---

## Module E — Form-Adjacent Reassurance Zone

**Purpose:** Address last-moment hesitation immediately before the form submit action.

**Use when:** Always. Every page with a contact or booking form gets this module. Content adapts to proof tier.

**Content (select 2–3 items, do not use all):**
```
✓   No commitment — just a conversation
✓   [Owner/Business name] responds within [timeframe]
✓   Licensed and insured
✓   [X] families served in [City/Region]   ← only if count is real
✓   ★ [Rating] on Google · [Count] reviews  ← only if proof_tier ≥ moderate
✓   Free [estimate / consultation / call]
✓   [Guarantee statement]
```

**Rules:**
- Maximum 3 items — do not list everything
- Select items based on what is most likely to address the primary trust barrier for this business type
- Never include a fake metric (invented count, invented response time)
- "Licensed and insured" is always eligible — include it when certifications are confirmed

**Visual treatment:** Small text, icon-optional, sits directly above or beside the submit button. Not a featured section — just a quiet reassurance strip.

**Mobile:** Stacks cleanly below form fields, above submit button. Always visible without scrolling when the form is in view.

**Anti-patterns:**
- Do not make this a large trust section that competes with the form
- Do not repeat exactly what the testimonials section already said
- Do not include items that aren't factual

---

## Module F — Footer Trust Strip

**Purpose:** Last-touch credibility reminder at page bottom.

**Use when:** Always. Every page footer gets a compact version.

**Content:**
```
[Badge icon] Licensed & Insured   ·   ★ [Rating] Google   ·   Free Estimates
```
Or for thin/none tier:
```
[Badge icon] Licensed & Insured   ·   [City] Since [Year]   ·   [Guarantee phrase]
```

**Rules:**
- Maximum 3 items
- Same icons as Module B if possible — visual consistency
- Keep text very short — this is a footer strip, not a section

**Mobile:** Wraps to 2 lines max. Never a 3-column grid on mobile.

**Anti-patterns:**
- Do not recreate the full badge strip in the footer
- Do not repeat long quotes or testimonials
- Do not place review counts here that differ from the main review summary

---

## Module G — Owner / Operator Credibility Block

**Purpose:** Humanize the business. Replace anonymous brand with a real named person. Most powerful when proof_tier is thin or none.

**Use when:** `owner_name` is provided. Priority increases as proof tier decreases.

**Content:**
```
[Owner photo — optional but recommended]
[Owner name + title]
[2-sentence bio: specific experience + local connection]
[1 personal guarantee or philosophy statement — must be factual and claimable]
```

**Example structure:**
```
Marcus Rivera — Owner & Lead Technician
"I've been pressure washing in Austin since 2014. Every job I personally inspect before we pack up — not because I have to, but because my name is on the truck."
```

**Rules:**
- Bio must be specific — years, location, named experience
- Photo is optional but strongly improves trust when available
- The guarantee statement must be something the business actually stands behind
- Do not write a corporate mission statement — write as a real person

**Visual treatment:**
- Clean card or split-image layout
- Not a giant portrait — restrained use of the photo
- Name and title clearly labeled

**Mobile:** Stack photo above text. Keep bio to 2 sentences max. Guarantee statement on its own line.

**Anti-patterns:**
- Do not write a generic "our team is passionate about excellence" statement
- Do not use a stock photo for the owner
- Do not invent a backstory

---

## Module H — Service-Section Trust Insert

**Purpose:** Reinforce credibility at the moment a visitor is evaluating a specific service.

**Use when:** Service sections exist on the page AND at least one relevant testimonial or badge can be tied to that service.

**Content (choose one per service block, not both):**
```
Option 1 — Relevant quote:
  "[Short quote directly relevant to this service]"
  — [First name L.], [City] (Google)

Option 2 — Relevant badge:
  [Certification icon + label specifically relevant to this service]
  e.g., "Licensed Plumber · Master License #XXXXX"
```

**Rules:**
- One insert per service block — not a full testimonials section
- Must be relevant to the specific service — do not reuse a generic quote across all services
- Only include if a genuinely relevant asset exists — do not force it

**Mobile:** Sits below the service description, above the service CTA. Compact single line or small card.

**Anti-patterns:**
- Do not use the same quote in multiple service blocks
- Do not add a trust insert when no relevant proof exists for that service
- Do not expand this into a full testimonial section within the services grid

---

## Module Anti-Pattern Reference

These patterns must never appear in any output:

| Anti-pattern | Why it fails |
|---|---|
| Empty testimonial carousels | Signals the business couldn't fill the space — worse than no carousel |
| "Trusted by thousands" without a number | Unverifiable claim — damages credibility |
| 6+ badge icons crammed in one strip | Clutter reads as desperation, not authority |
| Identical sentiment repeated in multiple quote cards | Proves the quotes aren't curated — looks fake |
| Generic reviewer names ("John S.", "Sarah M." with no context) | Unverifiable, looks fabricated |
| Star rating shown with fewer than 5 reviews | Exposes thin proof — omit entirely |
| Logo rows with brands that aren't real clients | Fake "social proof" is worse than no proof |
| Review counts that can't be verified | Damages trust the moment someone checks |
| Long quote walls (8+ sentence testimonials) | Nobody reads them — defeats the purpose |
| Trust section heading "What Our Customers Say" | Generic template language — always replace |
