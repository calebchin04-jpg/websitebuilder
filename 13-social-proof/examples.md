# Examples

Two examples in document-comparison format. Example 1 is Rivera Clean Co. (approachable brand register, strong proof tier, home services). Example 2 is Elara Wellness (authoritative brand register, thin proof tier, health and wellness). Both show upstream input summary → full 8-section social-proof package.

---

## Example 1 — Rivera Clean Co.: Approachable · Strong Tier · Home Services

### Upstream input summary
- **Business:** Residential and commercial pressure washing — Austin, TX and 4 surrounding cities
- **Primary CTA:** Get a Free Quote → /contact
- **Proof assets:** 83 Google reviews, 4.9 rating; licensed and insured (TX contractor); 11 years in business; owner named Marcus Rivera; 5 real quote exports from Google available
- **Target audience:** Austin-area homeowners who want the job done right by a trustworthy local crew
- **Primary trust barrier:** "Anyone can claim they're good — how do I know this company will show up and actually do quality work?"
- **Brand register:** Approachable — high confidence, high warmth, low formality, medium energy
- **Wireframe:** Split hero with trust bar below, mid-page testimonials section, contact form on homepage

---

### SOCIAL PROOF FEATURE PACKAGE
**Project:** Rivera Clean Co.
**Page(s):** Homepage
**Stage:** 13-social-proof — output complete
**Proof tier:** strong
**Business type:** home-services
**Brand register:** Approachable
**Prior-stage quality:** Strong

---

#### Section 1 — Trust Strategy Summary

**Primary trust barrier:**
The visitor is most likely to leave without converting because they've had bad experiences with contractors who didn't show up or did poor work, and they can't tell from the website alone whether Rivera is any different.

**Proof system selected:**
Google reviews (83 reviews, 4.9 stars) are the primary anchor — strong enough to use as the lead trust signal. Three curated quote cards reinforce human-voice credibility. Badge strip confirms professional standing. Owner name and tenure provide local accountability.

**Proof density level:** Moderate. Brand register allows warmth and human-voice proof. Proof tier is strong enough to support 3 quote cards + review summary + badge strip. Does not need to go denser than that.

**Proof tier:** strong
**Computed from:** 83 Google reviews at 4.9 stars — exceeds both thresholds (50+ reviews, 4.5+ rating).

---

#### Section 2 — Social-Proof Inventory

### Available Assets
| Asset | Value / Description | Status | Strength |
|---|---|---|---|
| Google rating | 4.9 stars | Confirmed | Strong |
| Google review count | 83 reviews | Confirmed | Strong |
| Testimonial quotes | 5 real quotes from Google export | Confirmed | Strong |
| Certifications | Licensed & Insured (TX) | Confirmed | Strong |
| Years in business | 11 years, since 2013 | Confirmed | Strong |
| Owner/operator details | Marcus Rivera, owner photo available | Confirmed | Strong |
| Guarantees | "Free re-service if not satisfied" | Confirmed | Moderate |
| Service-area details | Austin + Cedar Park, Round Rock, Pflugerville, Georgetown | Confirmed | Moderate |

### Missing or Weak Assets
| Asset | Missing | Why It Matters | Fallback |
|---|---|---|---|
| Before/after photography | Not yet confirmed | Strong visual proof for home services | Use job-type tags on quote cards as substitute |
| Other platform reviews | Yelp/BBB not confirmed | Cross-platform volume strengthens credibility | Google alone is sufficient at this volume |

### Risk Flags
- 5 quote exports need permission confirmation before publishing as named quotes on the website
- "Free re-service" guarantee needs business confirmation it is still current policy

---

#### Section 3 — Proof Hierarchy

**Tier 1 — Lead with this:** Google rating + review count (4.9 · 83 reviews). Volume and rating together are the clearest differentiator against competitors with fewer or no reviews.

**Tier 2 — Reinforce with this:** Three curated testimonial quote cards from real customers, each with a job-type tag (driveway, deck, commercial). Human voice after the stat anchor.

**Tier 3 — Support with this:** Licensed & Insured badge + 11 years in Austin. Confirms this is a professional, accountable business.

**Removed or de-emphasized:** Owner block deprioritized to optional mid-page element — the review volume already establishes trust; the founder doesn't need to lead. Guarantee language moved to form-adjacent zone only — not a featured section.

**Rationale:** Home-services audiences respond primarily to peer validation (reviews) and professional accountability (licensing). Review volume leads, human quotes reinforce, credentials provide the safety signal. This order matches the visitor's trust-building sequence.

---

#### Section 4 — Placement Plan

| Page Zone | Module | Proof Tier Required | Notes |
|---|---|---|---|
| Hero area | Module A — Hero Proof Bar | strong | "★★★★★ 4.9 · 83 Google reviews" |
| Below hero | Module B — Badge Strip | any | Licensed & Insured, 11 Years Austin, Free Re-Service |
| Mid-page proof zone | Module C — C1 Full Quote Cards | strong | 3 cards with job-type tags |
| Mid-page stats | Module D — Review Summary Block | strong | Rating + count + years |
| Services section | Module H — Service Trust Inserts | moderate | 1 relevant quote per service |
| Contact form | Module E — Form Reassurance Zone | any | 3 items: cert + rating + response time |
| Footer | Module F — Footer Trust Strip | any | Licensed + rating + "Free Estimates" |

---

#### Section 5 — Module Specs

---

### Module A — Hero Proof Bar

**Purpose:** Immediately confirm for the visitor that Rivera is the most reviewed local option before they scroll.

**Content:**
```
★★★★★  4.9 stars · 83 Google reviews
```

**Visual treatment:** Single line below primary CTA. Star icons in brand accent color. Text in muted body color. No border, no card chrome.

**Interaction behavior:** Taps/clicks to the testimonials section anchor (#reviews)

**Mobile behavior:** Single line, `font-size: text-sm`, never wraps. At 375px, abbreviates if needed: "★★★★★ 4.9 · 83 reviews"

**Implementation notes:** `components/sections/ProofBar.tsx` · data from `proof_inventory.google` · conditional: render only if `review_count >= 10`

---

### Module B — Badge Strip

**Purpose:** Confirm professional standing in a fast scan below the hero fold.

**Content:**
```
🛡  Licensed & Insured    ✓  11 Years in Austin    ✓  Free Re-Service Guarantee
```

**Visual treatment:** Horizontal row of 3 chips. Icon + bold short label. Muted background chip style. Consistent with design system's surface/secondary color.

**Interaction behavior:** None

**Mobile behavior:** 3 items wrap to a 2-column grid. "Free Re-Service Guarantee" wraps below on the right.

**Implementation notes:** `components/sections/BadgeStrip.tsx` · data from `proof_inventory.badges[]`

---

### Module C — Testimonials Section (C1 — Full Quote Cards)

**Purpose:** Human-voice proof that real Austin homeowners hired Rivera and got the result they expected.

**Content:**

Card 1:
```
"Marcus and his crew showed up exactly when they said they would. My driveway looks brand new — better than I expected honestly. Will be calling them every year."
— Jennifer R., Austin   ★★★★★   Google   Driveway cleaning
```

Card 2:
```
"I've used a few pressure washing companies over the years. Rivera Clean Co. is the only one I've ever called back. The deck and fence came out perfect — and they cleaned up after themselves."
— David M., Cedar Park   ★★★★★   Google   Deck + fence
```

Card 3:
```
"Hired them for our small business parking lot. Fast, professional, great results. The owner personally confirmed the job was done right. Highly recommend for commercial work."
— Teresa L., Round Rock   ★★★★★   Google   Commercial lot
```

**Section heading:** "What Austin Homeowners Are Saying"

**Visual treatment:** 3-column card grid. Each card: quote text, reviewer name, star row, platform tag, job-type chip. White card on light gray section background (or vice versa per design system). No avatar photos — name only.

**Interaction behavior:** None. No carousel needed — 3 static cards.

**Mobile behavior:** Single column stack, each card full width. Quote text displayed fully (2–3 lines per card). Stack order: card 1, card 2, card 3.

**Implementation notes:** `components/sections/TestimonialsSection.tsx` variant `"cards"` · data from `proof_inventory.testimonials[]` · all 3 must have `verified: true` before launch

---

### Module D — Review Summary Block

**Purpose:** Reinforce review strength with a stat-level visual anchor mid-page.

**Content:**
```
4.9 / 5    |    83+ Google Reviews    |    11 Years Serving Austin
```

**Visual treatment:** 3 large stats with small labels, horizontal centered layout, muted dividers. Links review count to Google profile if `place_id` is confirmed.

**Mobile behavior:** 3 stats stack vertically, centered, each on its own line. Number large (text-4xl), label small below (text-sm muted).

**Implementation notes:** `components/sections/ReviewSummary.tsx` · links externally to `https://maps.google.com/?cid=[place_id]` when available

---

### Module E — Form Reassurance Zone

**Purpose:** Remove last-moment hesitation directly before form submit.

**Content (3 items):**
```
✓   Licensed and insured
✓   4.9 stars across 83 Google reviews
✓   We respond the same business day
```

**Visual treatment:** Small text list, `text-sm`, muted color, check icons. Sits directly above submit button. Not a card — no border or background.

**Mobile behavior:** Stacks below the last form field, above the submit button. Always visible when form is in view.

**Implementation notes:** `components/forms/FormReassurance.tsx` · items configured per page in data file · response time claim must be confirmed factual before launch

---

### Module F — Footer Trust Strip

**Content:**
```
🛡 Licensed & Insured   ·   ★ 4.9 Google   ·   Free Estimates
```

**Mobile behavior:** Wraps to 2 lines: "🛡 Licensed & Insured · ★ 4.9 Google" / "Free Estimates"

**Implementation notes:** `components/layout/FooterTrustStrip.tsx` · static content, same data source as badge strip

---

#### Section 6 — Content / Data Structure

```json
{
  "proof_tier": "strong",
  "google": {
    "rating": 4.9,
    "review_count": 83,
    "place_id": "[to be confirmed]"
  },
  "testimonials": [
    {
      "id": "t1",
      "quote": "Marcus and his crew showed up exactly when they said they would. My driveway looks brand new — better than I expected honestly. Will be calling them every year.",
      "reviewer_name": "Jennifer R.",
      "star_rating": 5,
      "platform": "google",
      "job_type_tag": "Driveway cleaning",
      "is_paraphrased": false,
      "verified": false
    },
    {
      "id": "t2",
      "quote": "I've used a few pressure washing companies over the years. Rivera Clean Co. is the only one I've ever called back. The deck and fence came out perfect — and they cleaned up after themselves.",
      "reviewer_name": "David M.",
      "star_rating": 5,
      "platform": "google",
      "job_type_tag": "Deck + fence",
      "is_paraphrased": false,
      "verified": false
    },
    {
      "id": "t3",
      "quote": "Hired them for our small business parking lot. Fast, professional, great results. The owner personally confirmed the job was done right. Highly recommend for commercial work.",
      "reviewer_name": "Teresa L.",
      "star_rating": 5,
      "platform": "google",
      "job_type_tag": "Commercial lot",
      "is_paraphrased": false,
      "verified": false
    }
  ],
  "badges": [
    { "id": "b1", "label": "Licensed & Insured", "icon_slug": "shield", "verified": false },
    { "id": "b2", "label": "11 Years in Austin", "icon_slug": "calendar", "verified": false },
    { "id": "b3", "label": "Free Re-Service Guarantee", "icon_slug": "check-circle", "verified": false }
  ],
  "years_in_business": 11,
  "founded_year": 2013,
  "owner": {
    "name": "Marcus Rivera",
    "title": "Owner & Lead Technician",
    "photo_available": true,
    "bio_short": "I've been pressure washing in Austin since 2013. Every job I personally inspect before we pack up.",
    "guarantee_statement": "If you're not satisfied, we come back and make it right — no questions."
  },
  "guarantees": [
    { "label": "Free Re-Service Guarantee", "description": "If you're not satisfied with the result, we return and re-do the work at no charge.", "is_factual": false }
  ],
  "service_area": "Austin, Cedar Park, Round Rock, Pflugerville, Georgetown"
}
```

---

#### Section 7 — Mobile + Accessibility Notes

**Mobile behavior summary:** The hero proof bar and badge strip ensure proof is visible before the first scroll. On mobile the testimonial cards stack single-column — quick to read, no carousel friction. Form reassurance zone always above the submit button.

| Module | Mobile behavior |
|---|---|
| A — Hero Proof Bar | Single line, text-sm, never wraps, links to #reviews |
| B — Badge Strip | 2-col grid wrap |
| C — Testimonials | Single column stack, 3 full-width cards |
| D — Review Summary | 3 stats stack vertically, centered |
| E — Form Reassurance | Below fields, above submit, always in view |
| F — Footer Strip | 2-line wrap max |

**Accessibility:**
- Star ratings: `aria-label="4.9 out of 5 stars"` on all star groups
- Badge icons: `aria-hidden="true"`, label text always visible
- Testimonials section: `<section aria-label="Customer reviews">`
- Platform labels ("Google") visible as text beside or below star rows
- No trust meaning encoded in color alone
- Minimum 4.5:1 contrast on all quote and badge text

---

#### Section 8 — Escalation Flags

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| Testimonial quote permission | Client decision | 3 Google quotes need explicit client confirmation to publish on site | Client / Marcus Rivera | Before Phase 3 build |
| Google place_id | Missing input | Required for review count external link | Client | Before Phase 3 build |
| "Same business day" response claim | Client decision | Must confirm this is accurate before rendering in form reassurance zone | Client | Before launch |
| Re-service guarantee policy | Client decision | Must confirm current policy before publishing guarantee language | Client | Before launch |
| License number | Missing input | Sub-label on badge strip needs TX contractor license number | Client | Before launch |

---

---

## Example 2 — Elara Wellness Studio: Authoritative · Thin Tier · Health & Wellness

### Upstream input summary
- **Business:** Functional medicine and wellness consultations — Denver, CO (solo practitioner)
- **Primary CTA:** Book a Consultation → /book
- **Proof assets:** Licensed (CO medical license); 8 Google reviews, 4.8 stars (below threshold); NPI number registered; board-certified functional medicine (IFMCP); 6 years in practice; no testimonials collected yet; owner Dr. Elara Mace; founder photo available
- **Target audience:** Denver adults aged 35–60 seeking a credentialed alternative to conventional medicine
- **Primary trust barrier:** "Is this person actually qualified? Is this real medicine or wellness pseudoscience?"
- **Brand register:** Authoritative — high authority, high formality, low warmth, very low energy/enthusiasm
- **Wireframe:** Centered editorial hero, about section, services section, consultation form

---

### SOCIAL PROOF FEATURE PACKAGE
**Project:** Elara Wellness Studio
**Page(s):** Homepage
**Stage:** 13-social-proof — output complete
**Proof tier:** thin
**Business type:** health-wellness
**Brand register:** Authoritative
**Prior-stage quality:** Acceptable with flags

---

#### Section 1 — Trust Strategy Summary

**Primary trust barrier:**
The visitor is most likely to leave without converting because they cannot tell whether Dr. Mace is a legitimately credentialed clinician or an unlicensed wellness coach.

**Proof system selected:**
Credentials lead. Board certification (IFMCP) and Colorado medical license are the primary trust anchors — they directly answer the qualification question. Years in practice and Dr. Mace's named credentials provide depth. Reviews are below threshold (8 reviews) and are omitted from primary display. No testimonial cards — operator credibility block used instead.

**Proof density level:** Restrained. Authoritative brand register enforces a low density ceiling. A credential strip + 1 operator block + form reassurance is the maximum. Any more reads as compensating rather than credible.

**Proof tier:** thin
**Computed from:** 8 Google reviews — below the 10-review threshold. No published testimonials. Strong credential assets available.

---

#### Section 2 — Social-Proof Inventory

### Available Assets
| Asset | Value / Description | Status | Strength |
|---|---|---|---|
| Google rating | 4.8 stars | Confirmed | Moderate (below display threshold) |
| Google review count | 8 reviews | Confirmed | Weak — below 10 minimum |
| Testimonials | None collected | Missing | N/A |
| Certifications | IFMCP Board Certification, CO Medical License | Confirmed | Strong |
| NPI registration | Confirmed registered | Confirmed | Strong |
| Years in practice | 6 years | Confirmed | Moderate |
| Owner/operator | Dr. Elara Mace, founder photo available | Confirmed | Strong |
| Guarantees | None confirmed | Missing | N/A |
| Service-area details | Denver, CO | Confirmed | Moderate |

### Missing or Weak Assets
| Asset | Missing | Why It Matters | Fallback |
|---|---|---|---|
| Published testimonials | None collected | Human-voice proof is most persuasive for health services | Operator credibility block substitutes |
| Google review volume | Only 8 — below threshold | Can't display rating as primary anchor | Credentials lead instead |
| Guarantee / promise | Not confirmed | Health audiences respond to commitment language | Process trust cue substitutes |

### Risk Flags
- Do not display Google rating (4.8, 8 reviews) in any primary proof position — volume is too low and exposes thin credibility rather than strengthening it
- IFMCP certification should be rendered with full name spelled out — abbreviation alone may not be recognized by target audience

---

#### Section 3 — Proof Hierarchy

**Tier 1 — Lead with this:** Credentials — IFMCP board certification + Colorado medical license. These directly address the primary trust barrier.

**Tier 2 — Reinforce with this:** Dr. Mace operator block — named clinician, 6 years in practice, personal care philosophy. Converts anonymous brand into an accountable named professional.

**Tier 3 — Support with this:** Process trust cue ("how a consultation works") — describes the clinical approach in a way that signals expertise without requiring testimonials.

**Removed or de-emphasized:** Google rating and review count — 8 reviews is below display threshold; showing it would highlight thin social proof rather than strengthen trust. No testimonial carousel — none available; do not create an empty or fake one.

**Rationale:** Health and wellness audiences under an authoritative register require credential-led proof. For a solo practitioner with thin review volume, the clinician's qualifications and personal accountability are stronger trust signals than an empty testimonial section.

---

#### Section 4 — Placement Plan

| Page Zone | Module | Proof Tier Required | Notes |
|---|---|---|---|
| Hero area | Module A — Certification fallback line | any | "Board-Certified · Licensed in Colorado · 6 Years in Practice" |
| Below hero | Module B — Badge Strip | any | IFMCP, CO License, NPI Registered |
| Mid-page | Module G — Owner Credibility Block | thin/none priority | Dr. Mace, photo, 6-year bio, care philosophy |
| Services section | Module H — Service Trust Inserts (badge variant) | any | Relevant credential per service |
| Contact form | Module E — Form Reassurance Zone | any | 3 items: credential + NPI + process note |
| Footer | Module F — Footer Trust Strip | any | IFMCP + CO Licensed + Denver Since 2019 |

---

#### Section 5 — Module Specs

---

### Module A — Hero Proof Bar (Certification Fallback)

**Purpose:** Establish immediate professional standing before the visitor reads the hero copy.

**Content:**
```
Board-Certified Functional Medicine  ·  Licensed in Colorado  ·  6 Years in Practice
```

**Visual treatment:** Single small line below the primary CTA. Muted text. No star icons. No review count. No card chrome.

**Interaction behavior:** None

**Mobile behavior:** Wraps to 2 lines at 375px: "Board-Certified Functional Medicine" / "Licensed in Colorado · 6 Years in Practice"

**Implementation notes:** `components/sections/ProofBar.tsx` variant `"certification"` · static string from `proof_inventory.owner`

---

### Module B — Badge Strip

**Purpose:** Spell out credentials clearly for an audience that may not recognize abbreviations.

**Content:**
```
✓  IFMCP — Board-Certified Functional Medicine Practitioner
✓  Licensed in Colorado  (License #[to be confirmed])
✓  NPI Registered Clinician
```

**Visual treatment:** Vertical chip stack or horizontal row of 3 chips. Each chip: check icon + full credential label + sub-label with credential number where applicable. Clean, clinical aesthetic — no warm colors or decorative icons.

**Interaction behavior:** None required. Optional: tooltip expanding the IFMCP abbreviation.

**Mobile behavior:** Single column stack. Each badge on its own full-width line. Labels fully expanded — no truncation.

**Implementation notes:** `components/sections/BadgeStrip.tsx` · credential numbers as sub-labels must be confirmed before launch

---

### Module G — Owner Credibility Block

**Purpose:** Convert "Elara Wellness Studio" from an anonymous brand into a real, named, qualified clinician.

**Content:**
```
[Founder photo]
Dr. Elara Mace — Founder & Functional Medicine Practitioner
"I opened this practice in Denver in 2019 because I kept seeing patients who had been through the conventional system and were still not well. Functional medicine looks for root causes, not just symptoms. Every consultation I conduct personally."
```

**Visual treatment:** Split layout — photo left (restrained size, not full-bleed), text right. Name and title clearly labeled. Tone matches authoritative register — no casual language, no enthusiasm. No quotes around the statement unless it is a direct quote confirmed by Dr. Mace.

**Interaction behavior:** None

**Mobile behavior:** Photo stacks above text. Photo max-height capped so it doesn't dominate. Bio text displayed in full (2 sentences max at mobile).

**Implementation notes:** `components/sections/OwnerCredibilityBlock.tsx` · bio text requires Dr. Mace's review and approval before launch · photo must be actual founder photo, not stock

---

### Module E — Form Reassurance Zone

**Content:**
```
✓   Board-certified functional medicine practitioner
✓   NPI-registered — verifiable credentials
✓   Initial consultations are 60 minutes — no rushed appointments
```

**Visual treatment:** Small 3-item list, `text-sm`, muted color. Above submit button. Clinical, not warm.

**Mobile behavior:** Below last field, above submit. Always visible.

**Implementation notes:** `components/forms/FormReassurance.tsx` · third item (consultation length) must be confirmed accurate

---

#### Section 6 — Content / Data Structure

```json
{
  "proof_tier": "thin",
  "google": {
    "rating": 4.8,
    "review_count": 8,
    "place_id": "[to be confirmed]",
    "display_in_ui": false
  },
  "testimonials": [],
  "badges": [
    {
      "id": "b1",
      "label": "IFMCP Board-Certified",
      "sub_label": "Institute for Functional Medicine",
      "icon_slug": "check-circle",
      "verified": false
    },
    {
      "id": "b2",
      "label": "Licensed in Colorado",
      "sub_label": "License #[to be confirmed]",
      "icon_slug": "check-circle",
      "verified": false
    },
    {
      "id": "b3",
      "label": "NPI Registered",
      "sub_label": "Verifiable federal registry",
      "icon_slug": "check-circle",
      "verified": false
    }
  ],
  "years_in_business": 6,
  "founded_year": 2019,
  "owner": {
    "name": "Dr. Elara Mace",
    "title": "Founder & Functional Medicine Practitioner",
    "photo_available": true,
    "bio_short": "I opened this practice in Denver in 2019. Every consultation I conduct personally.",
    "guarantee_statement": null
  },
  "guarantees": [],
  "service_area": "Denver, CO"
}
```

---

#### Section 7 — Mobile + Accessibility Notes

**Mobile behavior summary:** The certification fallback line and badge strip ensure credentials are visible before the first scroll. No testimonial cards or carousels. Owner block stacks cleanly. Form reassurance is credential-focused.

| Module | Mobile behavior |
|---|---|
| A — Hero Proof Bar | Wraps to 2 lines — acceptable given authoritative register |
| B — Badge Strip | Single column stack, labels fully expanded |
| G — Owner Block | Photo above, text below, bio 2 lines max |
| E — Form Reassurance | Below fields, above submit |
| F — Footer Strip | Wraps to 2 lines max |

**Accessibility:**
- All credential abbreviations (IFMCP) must have expanded text visible — not abbreviation-only
- Owner photo: `alt="Dr. Elara Mace, Founder"` — not decorative
- No star rating modules rendered (count below threshold) — nothing to label
- Badge icons: `aria-hidden="true"`, credential label always visible text
- Minimum 4.5:1 contrast on all text

---

#### Section 8 — Escalation Flags

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| CO License number | Missing input | Badge sub-label requires confirmed license number | Client / Dr. Mace | Before Phase 3 build |
| Consultation length claim (60 min) | Client decision | Must confirm this is accurate for standard consultations | Client | Before launch |
| Owner bio copy approval | Client decision | Dr. Mace must review and approve bio text before publication | Client | Before Phase 3 build |
| IFMCP certificate scan | Missing input | Recommend having PDF certificate on file before publishing the badge | Client | Before launch |
| Future testimonial collection | Project note | As reviews grow past 10, Module C (C2 moderate variant) should be activated | Agent 00 / project lead | When review count reaches 10+ |
| Review count below threshold | Scope note | When count reaches 10 and rating stays ≥ 4.0, re-run this agent to upgrade proof tier from thin to moderate | Agent 00 | At review milestone |
