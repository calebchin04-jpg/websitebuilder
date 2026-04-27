# Examples

Three worked examples covering different revision types and blast radii. Example 1 is a Type A micro fix (content correction). Example 2 is a Type C shared pattern revision (cross-page CTA and trust block correction). Example 3 is a Type E scope expansion declared correctly (adding a gallery to a live site). All show revision intake → full 12-section plan.

---

## Example 1 — Rivera Clean Co.: Type A · Micro Fix · Post-Launch Content Correction

### Revision intake context
- **Business:** Rivera Clean Co. — pressure washing, Austin TX
- **Trigger:** Client email — phone number on the website is the old number. New number is (512) 448-9201. Also the hero CTA says "Book Now" but should say "Get a Free Quote" per updated conversion preference.
- **Artifact:** Homepage header, hero section, footer
- **Prior-stage quality:** Site was well-built. No other issues reported.

---

### REVISION PLAN
**Project:** Rivera Clean Co.
**Stage:** 19-revisions — output complete
**Revision trigger:** Client request — post-launch content correction
**Revision type:** A — Micro Fix
**Blast radius:** Level 2 (single section × 2 — header/footer phone + hero CTA)
**Revision mode:** Direct Fix Pass
**Date:** [Build-time date]

---

#### Section 1 — Revision Intake Summary

**What triggered this revision:** Client contacted post-launch. Two corrections needed: (1) phone number is outdated sitewide, (2) hero CTA label needs updating to match updated conversion preference.

**Artifact being revised:** Global phone number (header, footer, contact page, form reassurance zone). Hero primary CTA label.

**The actual problem:** The phone number (512) 448-1204 is incorrect and will cause lost leads. The hero CTA "Book Now" does not match the client's preferred framing — "Get a Free Quote" better matches the no-commitment tone they want to set.

**Correction or improvement:** Correction (phone) + minor improvement (CTA wording).

---

#### Section 2 — Revision Classification

**Revision type:** A — Micro Fix
**Revision mode:** Direct Fix Pass
**Blast radius:** Level 2 — single-element corrections across a small number of known locations
**Issue scope:** Local — these are content/config values, not architectural changes

**Rationale:** Both changes are data-level corrections. The phone number is a config value that should appear in one place and render everywhere. The CTA label is a string change. Neither touches component logic, page structure, or shared design rules.

---

#### Section 3 — Preservation Statement

**What must not change:**
- All page layouts, section structure, and component architecture
- The design system, color tokens, typography
- All copy other than the phone number and the hero CTA label
- The booking/request flow — only the label changes, not the destination
- Social proof content, trust badges, testimonials
- Service descriptions and all other page content

**Approved upstream decisions that still stand:**
| Stage | Decision | Status |
|---|---|---|
| 02-planning | Request-first CTA model | Preserved — "Get a Free Quote" is consistent with this |
| 05-brand-direction | Approachable register | Preserved |
| 06-design-system | All visual rules | Preserved |

**Components that must remain untouched:** TestimonialsSection, BadgeStrip, ServiceCards, FooterLayout, NavBar structure.

---

#### Section 4 — Conflict Check

| Area | Conflict? | Detail |
|---|---|---|
| Business strategy (02) | No | "Get a Free Quote" is actually more aligned with the request-first model than "Book Now" was |
| Brand direction (05) | No | Approachable register supports conversational CTA wording |
| All others | No | — |

**Conflict resolution:** None. The CTA change actually improves alignment with the approved strategy.

---

#### Section 5 — Recommended Revision Scope

**What will change:**
```
- Phone number: (512) 448-1204 → (512) 448-9201 — all locations
- Hero primary CTA label: "Book Now" → "Get a Free Quote"
```

**What will NOT change:**
```
- CTA destination (href remains unchanged)
- All other copy on the homepage
- All other pages except where phone number appears
- All component styles, layouts, and structure
- All upstream approved documents
```

**Scope boundary:** These are content/config values only. No structural or visual changes are in scope.

---

#### Section 6 — Revision Plan

### Action 1 — Phone number update

**Affected area:** Global — header, footer, contact page, hero trust line, form reassurance zone, any page where phone renders

**Change goal:** Replace every instance of the outdated phone number with the correct number

**Why it matters:** An incorrect phone number means every inbound call attempt fails. Highest-priority fix on the site.

**Implementation direction:**
```
Find all instances of "(512) 448-1204" in:
  - data/site.ts (or equivalent global config) — update the canonical value
  - Any hardcoded instances in components (search codebase for "448-1204")
  - Meta/schema markup (LocalBusiness schema phone field)
  - sitemap or robots if phone is present there

New value: (512) 448-9201
tel: link value: tel:+15124489201
```

**Consistency guardrail:** Phone must render from a single config source — not hardcoded in multiple places. If it is currently hardcoded in multiple files, this is the moment to consolidate it into `data/site.ts` or equivalent.

**Mobile check:** Phone appears as a tap-to-call tel: link on mobile — confirm the new number renders correctly in the sticky mobile bar and in the hero.

---

### Action 2 — Hero CTA label update

**Affected area:** Homepage hero — primary CTA button

**Change goal:** Change the CTA label from "Book Now" to "Get a Free Quote"

**Why it matters:** "Book Now" misrepresents the commitment level — Rivera uses a request-first flow, not instant booking. "Get a Free Quote" sets the right expectation and matches the client's stated preference.

**Implementation direction:**
```
File: data/pages/home.ts (or equivalent)
Field: hero.cta.label
Change: "Book Now" → "Get a Free Quote"

href remains unchanged — destination stays the same.
Do not change the secondary CTA or any other button.
```

**Consistency guardrail:** Confirm that service page CTAs still use consistent request-first language. If any other page has "Book Now" as a primary CTA for a variable-scope service, flag it as a separate item — do not silently fix it here.

**Mobile check:** "Get a Free Quote" is longer than "Book Now" — confirm it fits within the mobile CTA button width without wrapping or truncating at 375px.

---

#### Section 7 — Shared Pattern Impact Check

**Does this touch a shared component?** Yes — phone number is a shared value rendered in header and footer components.

| Component | Pages Affected | Change | Drift Risk |
|---|---|---|---|
| Site config / data | All pages | Phone number value update | Low — single source |
| LocalBusiness schema | Homepage (or global) | Phone field update | Low |

**Rule:** Phone number must come from one canonical source. This revision is the trigger to ensure it does.

---

#### Section 8 — Mobile / Accessibility / Trust Safeguards

- [ ] New phone number renders as tap-to-call tel: link on mobile — not plain text
- [ ] "Get a Free Quote" CTA fits button width at 375px without wrapping
- [ ] New phone number confirmed with client in writing before build
- [ ] Schema markup updated — Google may surface the phone number in search results

---

#### Section 9 — Upstream Reopen Decision

**No upstream stages need reopening.** This is a content correction and minor CTA refinement. All architecture, strategy, and design decisions remain valid.

---

#### Section 10 — Changelog

```
─────────────────────────────────────────────────
Item:        Site-wide phone number
Change:      (512) 448-1204 → (512) 448-9201
Reason:      Old number is no longer active — all inbound calls were failing
Source:      Client request — post-launch
Scope:       Shared (global config value)
Untouched:   All layouts, copy, styles, component logic
QA re-check: Yes — verify in header, footer, hero trust line, form zone, schema
─────────────────────────────────────────────────
Item:        Homepage hero — primary CTA label
Change:      "Book Now" → "Get a Free Quote"
Reason:      "Book Now" misrepresents commitment level for a request-first business; client preference confirmed
Source:      Client request — post-launch
Scope:       Local (homepage hero only)
Untouched:   CTA destination, all other CTAs, all other pages
QA re-check: Yes — verify mobile button width at 375px
─────────────────────────────────────────────────
```

---

#### Section 11 — Acceptance Criteria

```
[ ] (512) 448-9201 appears in header, footer, and hero trust line on all pages
[ ] tel: link is tel:+15124489201 — confirmed working tap-to-call on mobile
[ ] LocalBusiness schema phone field shows new number
[ ] Homepage hero primary CTA reads "Get a Free Quote" on desktop and mobile
[ ] "Get a Free Quote" does not wrap or truncate at 375px viewport
[ ] No other page content has changed
[ ] No component styles, layouts, or structures have changed
```

---

#### Section 12 — Final Handoff

**Hand off to:** Implementation / coding stage

**Priority order:**
1. Update phone in global config first (before any page-level changes)
2. Update schema markup
3. Update hero CTA label
4. Verify across all renders

**QA re-review required:** Yes — spot-check phone number in 3 locations (header, footer, hero) + confirm CTA label on mobile.

**Open items before build:**
```
[ ] Client must confirm (512) 448-9201 in writing — do not update until confirmed
```

---

---

## Example 2 — Peak Ridge Remodeling: Type C · Shared Pattern · Cross-Page CTA and Trust Correction

### Revision intake context
- **Business:** Peak Ridge Remodeling — Denver metro remodeling contractor
- **Trigger:** 18-qa-review flagged: (1) Three service pages use "Book a Consultation" as the primary CTA — this is wrong for a request-first contractor. Should be "Request a Free Estimate." (2) Service cards across the site have no trust signal — no badge, no proof line. Competitors in this market all show credentials on service cards.
- **Artifact:** All service page CTAs (shared CTA component). All service cards (shared ServiceCard component).
- **Prior-stage quality:** Strategy and architecture are sound. These are execution gaps.

---

### REVISION PLAN
**Project:** Peak Ridge Remodeling
**Stage:** 19-revisions — output complete
**Revision trigger:** QA findings from 18-qa-review
**Revision type:** C — Shared Pattern Revision
**Blast radius:** Level 4 — shared components affecting multiple pages
**Revision mode:** Controlled Multi-Area Pass
**Date:** [Build-time date]

---

#### Section 1 — Revision Intake Summary

**What triggered this revision:** 18-qa-review identified two cross-page execution gaps: wrong CTA language on service pages (misaligns with the approved request-first flow type) and absent trust signals on service cards (misses a key conversion opportunity at service evaluation points).

**Artifact:** `ServicePageCTA` component (used on 4 service pages). `ServiceCard` component (used on homepage and services overview page).

**The actual problem:** "Book a Consultation" is wrong for a variable-scope contractor — it implies immediate scheduling when the business uses a request-first flow. Service cards have no trust signal despite the business having strong credentials (licensed, insured, 6 years in Denver).

**Correction or improvement:** Both are corrections — one is a logic/wording error, one is a missing element that was in the feature spec (13-social-proof) but not implemented.

---

#### Section 2 — Revision Classification

**Revision type:** C — Shared Pattern Revision
**Revision mode:** Controlled Multi-Area Pass
**Blast radius:** Level 4 — shared components, multiple pages
**Issue scope:** Cross-page

**Rationale:** Both issues exist in shared components used sitewide. Fixing them on one page without fixing all instances would create inconsistency that looks worse than the original problem. The correction rule must be defined once and applied uniformly.

---

#### Section 3 — Preservation Statement

**What must not change:**
- Overall page layouts and section structures on all service pages
- The request-first flow logic and routing — only the CTA label changes, not the destination
- Homepage hero and hero proof bar
- Testimonials section, review summary block, footer trust strip
- All approved upstream decisions from 02–07
- Navigation, footer structure, contact page

**Approved upstream decisions that still stand:**
| Stage | Decision | Status |
|---|---|---|
| 02-planning | Request-first as primary flow type | Preserved — CTA fix enforces this |
| 16-booking-payments | Type B flow for all remodeling services | Preserved |
| 13-social-proof | Badge strip and trust inserts specified | Preserved — this revision implements the missing piece |
| 06-design-system | All visual rules | Preserved |

---

#### Section 4 — Conflict Check

| Area | Conflict? | Detail |
|---|---|---|
| Business strategy (02) | No | CTA fix makes the site more consistent with the approved Type B flow |
| 16-booking-payments | No | "Request a Free Estimate" is exactly the CTA specified in the booking-payments output |
| 13-social-proof | No | Adding trust signals to service cards was in the social-proof spec — this is catching up to it |
| Design system (06) | No | Badge component already exists — reuse it |
| All others | No | — |

**Conflict resolution:** None — both changes improve alignment with approved upstream decisions.

---

#### Section 5 — Recommended Revision Scope

**What will change:**
```
- ServicePageCTA component: CTA label "Book a Consultation" → "Request a Free Estimate"
- ServiceCard component: add 1 trust signal (badge or credential line) below service description
- All 4 service pages: updated CTA via component change
- Homepage service cards: updated with trust signal via component change
- Services overview page: updated with trust signal via component change
```

**What will NOT change:**
```
- CTA destinations (hrefs unchanged)
- Service page layouts, section order, or copy beyond the CTA label
- Any page not containing ServicePageCTA or ServiceCard components
- The overall trust strategy, social proof section, or badge strip
- All styles except what is needed to accommodate the new trust signal in ServiceCard
```

---

#### Section 6 — Revision Plan

### Action 1 — ServicePageCTA: correct label across all service pages

**Affected area:** `ServicePageCTA` component → rendered on Kitchen, Bathroom, Deck, and Addition service pages

**Change goal:** Replace "Book a Consultation" with "Request a Free Estimate" to match the approved Type B request-first flow

**Why it matters:** "Book a Consultation" implies a scheduled meeting is being reserved — wrong for a contractor whose first step is an in-home estimate request, not a booked consultation slot. The 16-booking-payments output explicitly specifies "Request a Free Estimate" as the primary CTA.

**Implementation direction:**
```
File: components/sections/ServicePageCTA.tsx
Field: cta.label (or equivalent prop/data)
Change: "Book a Consultation" → "Request a Free Estimate"

Verify in data files for each service page that the CTA label
is driven by the component, not hardcoded per page.
If hardcoded per page, update all 4 instances.

Destination href: unchanged — still routes to /contact or estimate form
```

**Consistency guardrail:** After this change, every service page primary CTA must read "Request a Free Estimate." Do a text search for "Book a Consultation" across the codebase to ensure no other instances remain.

**Mobile check:** "Request a Free Estimate" is longer — confirm it fits within the button width at 375px without wrapping. If the button is full-width on mobile, this is not an issue.

---

### Action 2 — ServiceCard: add trust signal

**Affected area:** `ServiceCard` component → rendered on homepage (services grid) and services overview page

**Change goal:** Add one compact trust signal below the service description inside each service card

**Why it matters:** Service cards are a primary evaluation point. The visitor is deciding whether to request a specific service. A trust signal at this moment reduces hesitation. The 13-social-proof spec explicitly calls for service-section trust inserts.

**Implementation direction:**
```
Component: components/cards/ServiceCard.tsx

Add below service description, above the CTA:
  <TrustInsert /> — reuse the existing badge/trust pattern from the badge strip

Content per card (use 1 of the following — do not use both):
  Option A — Credential badge:
    "Licensed & Insured · Denver, CO"
    [Use badge icon from the approved icon set]

  Option B — Short proof line:
    "Licensed, insured, and serving Denver since 2018."
    [Text-only, small/muted type — no icon needed if cleaner]

Recommended: Option A (icon + short label) for visual consistency with the badge strip.

Visual rules:
  - Same badge style as the existing BadgeStrip component
  - Muted — does not compete with the service name or CTA
  - Does not add significant card height — keep it compact (single line)
  - Consistent across all service cards — do not vary the content per card
    unless a card-specific credential is available and justified
```

**Consistency guardrail:** The trust insert must use the same visual token and icon as the approved BadgeStrip. Do not introduce a new badge style. If the BadgeStrip component is reusable at a smaller size, use it — do not create a one-off variant.

**Mobile check:** Trust insert must remain readable at 375px. Single line, muted text, does not push the CTA below the fold on the card. Verify card height on mobile after the addition.

---

#### Section 7 — Shared Pattern Impact Check

| Component | Pages Affected | Change | Drift Risk |
|---|---|---|---|
| ServicePageCTA | Kitchen, Bathroom, Deck, Addition pages | Label change only | Low |
| ServiceCard | Homepage services grid, Services overview page | Add trust insert | Low-medium — visual height change |

**Consistency rule:** The same trust content ("Licensed & Insured · Denver, CO") must appear on every ServiceCard. Do not vary the trust line per service unless a service-specific credential is available and was approved in the social-proof output.

**Instances to update:**
```
ServicePageCTA:
  /services/kitchen
  /services/bathroom
  /services/deck
  /services/addition

ServiceCard (trust insert):
  Homepage — services grid (4 cards)
  /services — services overview (4 cards)
```

---

#### Section 8 — Mobile / Accessibility / Trust Safeguards

- [ ] "Request a Free Estimate" fits button width at 375px — no wrapping
- [ ] ServiceCard trust insert is single-line and readable at 375px
- [ ] ServiceCard total height on mobile — confirm CTA is still visible without excessive scrolling inside the card
- [ ] Trust insert icon has `aria-hidden="true"` if decorative; label text is always visible
- [ ] No trust claims added that are not verified (credential content must match approved badge data)
- [ ] CTA destination unchanged — routing to estimate form still correct

---

#### Section 9 — Upstream Reopen Decision

**No upstream stages need reopening.** Both corrections are implementation-level gaps against already-approved upstream decisions. The strategy, flow type, and social proof spec were correct — the build did not fully implement them.

---

#### Section 10 — Changelog

```
─────────────────────────────────────────────────
Item:        ServicePageCTA — CTA label on all 4 service pages
Change:      "Book a Consultation" → "Request a Free Estimate"
Reason:      "Book a Consultation" misrepresents the request-first flow type approved in 16-booking-payments
Source:      18-qa-review finding
Scope:       Shared — ServicePageCTA component affects 4 pages
Untouched:   CTA destinations, page layouts, all other copy
QA re-check: Yes — verify on all 4 service pages + mobile
─────────────────────────────────────────────────
Item:        ServiceCard — trust signal addition
Change:      Added "Licensed & Insured · Denver, CO" badge below service description
Reason:      Service cards had no trust signal at the point of service evaluation — gap identified by QA vs. 13-social-proof spec
Source:      18-qa-review finding
Scope:       Shared — ServiceCard component affects homepage and services overview
Untouched:   All other card content, styles, CTAs, service descriptions
QA re-check: Yes — verify card height on mobile, visual consistency with BadgeStrip
─────────────────────────────────────────────────
```

---

#### Section 11 — Acceptance Criteria

```
[ ] All 4 service page primary CTAs read "Request a Free Estimate" on desktop and mobile
[ ] No instance of "Book a Consultation" remains anywhere on the site
[ ] All service cards on homepage and services overview show the trust badge
[ ] Trust badge text reads "Licensed & Insured · Denver, CO" consistently across all cards
[ ] Trust badge uses the same icon and style as the approved BadgeStrip component
[ ] ServiceCard height on mobile is acceptable — CTA still visible without excessive scroll
[ ] CTA destinations (hrefs) are unchanged on all service pages
[ ] No other pages or components were modified
```

---

#### Section 12 — Final Handoff

**Hand off to:** Implementation / coding stage

**Priority order:**
1. ServicePageCTA label change — apply to component first, then verify across all 4 pages
2. ServiceCard trust insert — confirm badge style token before adding to component
3. Verify no new badge style was introduced (must reuse BadgeStrip token)

**QA re-review required:** Yes — spot-check CTA label on 2 service pages + card trust insert on mobile.

**Open items before build:**
```
[ ] Confirm "Licensed & Insured · Denver, CO" is verified accurate (license confirmed in 13-social-proof inventory)
```

---

---

## Example 3 — Glow Studio: Type E · Scope Expansion · Adding a Gallery Page

### Revision intake context
- **Business:** Glow Studio — facial and skincare studio, Denver CO
- **Trigger:** Client request, 6 weeks post-launch — "Can we add a before/after gallery? I have 30 photos and clients keep asking to see results."
- **Artifact:** New page (/gallery) + possible homepage section
- **Prior-stage quality:** Site is live and performing well. No existing gallery page or component.

---

### REVISION PLAN
**Project:** Glow Studio
**Stage:** 19-revisions — output complete
**Revision trigger:** Client request — post-launch feature addition
**Revision type:** E — Scope Expansion
**Blast radius:** Level 4 (new page + possible homepage section addition)
**Revision mode:** Expansion Pass
**Date:** [Build-time date]

---

#### Section 1 — Revision Intake Summary

**What triggered this revision:** Client has 30 before/after photos from real clients and wants to add a gallery to the site.

**Artifact:** New page (/gallery) that does not currently exist. Possible new section on the homepage.

**The actual problem:** This is not a problem — it is a new feature request. The site was built without a gallery because the client did not have photography at launch.

**Correction or improvement?** Neither. This is an expansion — new scope not in the original plan.

---

#### Section 2 — Revision Classification

**Revision type:** E — Scope Expansion
**Revision mode:** Expansion Pass
**Blast radius:** Level 4 — new page + possible shared navigation update + possible homepage section
**Issue scope:** Expansion

**Rationale:** A gallery page did not exist in the original sitemap, wireframe, or any feature spec. This cannot be treated as a minor revision. It requires new scope definition, new component spec, and possible upstream consideration (sitemap update, nav update, social-proof update to reference gallery).

---

#### Section 3 — Preservation Statement

**What must not change as part of this expansion:**
- All existing pages, layouts, and components
- The booking flow and CTA logic
- The approved design system — the gallery must use the same visual tokens
- The brand register — gallery presentation must match the premium, restrained aesthetic
- The trust and proof strategy — before/after photos are strong proof and must be treated carefully

---

#### Section 4 — Conflict Check

| Area | Conflict? | Detail |
|---|---|---|
| Business strategy (02) | No — potential improvement | Before/after proof is aligned with the approved trust strategy. It strengthens the site. |
| 13-social-proof | Potential overlap | Social proof spec should reference the gallery as a proof asset. A minor 13-social-proof update may be needed. |
| 03-sitemap | Yes — minor | /gallery is a new page not in the approved sitemap. Sitemap must be updated. |
| 04-wireframe | Yes — minor | No wireframe exists for /gallery. A wireframe or layout spec is needed before build. |
| Brand direction (05) | Attention required | Before/after photos must be real, approved by clients for publication, and presented in a way consistent with the premium-adjacent brand register. Cheap grid layouts would damage the brand. |
| Privacy / consent | Yes | Client photos require explicit consent before publication. This is a launch blocker. |

---

#### Section 5 — Recommended Revision Scope

**New scope items this expansion requires:**
```
1. /gallery — new page (needs wireframe or layout spec)
2. Nav update — add "Gallery" link (or decide to keep it undiscovered/footer-only)
3. Homepage optional — consider a 2–3 photo preview strip linking to /gallery
4. 13-social-proof — reference gallery as an additional proof asset
5. Consent confirmation — client must confirm photo use rights for all 30 images
```

**What stays entirely untouched:**
```
- All existing pages, components, and content
- The booking flow and CTA logic
- The approved design system (gallery will use it, not change it)
- All upstream approved decisions
```

---

#### Section 6 — Expansion Plan

This is an expansion pass — not a direct fix. The plan defines what must be specced and built, not a simple execution list.

### Required before build can begin

**A. Consent verification (blocker)**
All 30 before/after photos must have confirmed client consent for web publication. This is not optional. Publishing before/after skin treatment photos without written consent is a privacy and trust risk.
```
Action: Client confirms in writing which photos are approved for use.
Before/after photos should ideally include: service type tag (e.g. "Signature Facial")
Do not publish any photo without explicit consent.
```

**B. Sitemap update (03-sitemap — minimal reopen)**
Add /gallery to the sitemap as a secondary trust/proof page. Classification: standalone proof page, not in the primary conversion path.
```
New page: /gallery
Nav placement decision needed: Main nav (adds weight) vs. footer utility link (lighter) vs. both
Recommendation: Footer link + optional homepage preview strip — keep the nav clean
```

**C. Gallery page wireframe or layout spec (04-wireframe — minimal addition)**
A new page needs layout direction before build. This does not require reopening the full wireframe — just a spec for this page.
```
Recommended layout:
  Page heading: "Real Results" or "Before & After" (not "Our Gallery" — too generic)
  Optional intro line: 1 sentence on the transformation focus
  Photo grid: 2-col (mobile) → 3-col (desktop)
  Each photo pair: before + after side by side, with service type tag
  No client names — privacy-safe
  CTA at bottom: "Book Your Facial" → /book
```

**D. Homepage preview strip (optional — decide before build)**
A 3-photo preview with a "See More Results" link would add proof value on the homepage without requiring a full gallery section. This is lightweight and aligns with the social-proof spec.
```
Decision needed: Does the client want this? Does the homepage layout accommodate it?
If yes: add 3 approved before/after photos in a compact strip after the testimonials section.
If no: link to gallery from footer only.
```

**E. 13-social-proof minor update**
The social-proof spec should note that before/after photography is now available as a proof asset. Gallery should be referenced as a proof signal in the mid-page proof zone.
```
Update 13-social-proof data:
  proof_inventory.before_after_photography: true
  proof_inventory.gallery_url: "/gallery"
This is a data/config update — no structural change to the social-proof spec.
```

---

#### Section 7 — Shared Pattern Impact Check

| Component | Pages Affected | Change | Drift Risk |
|---|---|---|---|
| Navigation | All pages | Possible "Gallery" link addition | Low — only if nav link is added |
| Footer | All pages | Add "Gallery" utility link | Low |
| Homepage | Homepage only | Optional before/after preview strip | Medium — must fit design system |

**Rule:** The gallery component must use the existing design-system tokens. Do not introduce a new visual style for the gallery grid. Use the same card pattern, spacing, and typography already defined.

---

#### Section 8 — Mobile / Accessibility / Trust Safeguards

- [ ] Gallery grid: 2-column on mobile, 3-column on desktop
- [ ] Before/after photos load with appropriate alt text: "Before: [service type]" / "After: [service type]" — no client names
- [ ] Images are optimized (WebP, lazy-loaded) — a 30-photo gallery can hurt page performance if not handled correctly
- [ ] No client names in any photo caption — privacy protection
- [ ] All 30 photos confirmed with explicit consent before any are published
- [ ] Gallery CTA ("Book Your Facial") follows the same booking flow as the rest of the site
- [ ] Page loads acceptably on mobile (3G simulation check recommended)

---

#### Section 9 — Upstream Reopen Decision

**Minimum upstream reopens required:**

| Stage | Reopen? | Reason | Scope |
|---|---|---|---|
| 03-sitemap | Yes — minimal | /gallery is a new page not in the sitemap | Add one page entry, classify it, decide nav placement |
| 04-wireframe | Yes — minimal | No wireframe exists for /gallery | Add a single-page layout spec for the gallery |
| 13-social-proof | Yes — minor update | Before/after photography should now be listed as a confirmed proof asset | Update proof_inventory data — no structural spec change |

**All other stages remain closed.** Strategy, brand, design system, booking/payment, and all other feature specs are unaffected.

---

#### Section 10 — Changelog

```
─────────────────────────────────────────────────
Item:        Scope — new gallery page
Change:      Not present → expansion planned (/gallery)
Reason:      Client acquired 30 before/after photos post-launch — gallery was not in original scope
Source:      Client request — post-launch
Scope:       Expansion — new page, nav update, optional homepage strip
Untouched:   All existing pages, components, booking flow, design system
QA re-check: Yes — full QA on new page before launch
─────────────────────────────────────────────────
Item:        03-sitemap
Change:      Add /gallery as secondary proof page
Reason:      Required for new page
Source:      Expansion pass
Scope:       Minimal upstream update
Untouched:   All other sitemap entries
QA re-check: No
─────────────────────────────────────────────────
Item:        13-social-proof — proof inventory
Change:      before_after_photography: true, gallery_url: "/gallery"
Reason:      Proof asset now available — should be referenced in proof system
Source:      Expansion pass
Scope:       Config/data update only
Untouched:   All social-proof component specs
QA re-check: No
─────────────────────────────────────────────────
```

---

#### Section 11 — Acceptance Criteria

```
[ ] All 30 photos have documented client consent on file before any are published
[ ] /gallery page exists and renders correctly on desktop and mobile
[ ] Gallery grid is 2-col mobile, 3-col desktop
[ ] Each photo pair has a service type tag — no client names in any caption
[ ] Images are WebP format and lazy-loaded
[ ] Page load time acceptable on mobile (< 3s on 3G simulation)
[ ] CTA at bottom of gallery links correctly to /book
[ ] Nav or footer link to /gallery is present and working
[ ] Homepage preview strip (if approved): shows 3 photos, links to /gallery
[ ] No existing pages, layouts, or components were modified
[ ] Visual style of gallery matches approved design system
```

---

#### Section 12 — Final Handoff

**Revision status:** Pending — expansion requires upstream mini-updates and client consent confirmation before build can proceed.

**Hand off to:**
1. Client — confirm consent for all photos before any build begins
2. 03-sitemap — minimal update to add /gallery
3. 04-wireframe — add single-page layout spec for gallery
4. Implementation — build /gallery page + nav/footer link after above are complete
5. 18-qa-review — full QA pass on gallery page before launch

**QA re-review required:** Yes — full QA on new page.

**Open items before build can proceed:**
```
[ ] Client written consent for all photos confirmed
[ ] Nav vs. footer placement decision made
[ ] Homepage preview strip: yes or no — client decision
[ ] Gallery page wireframe/layout spec completed
[ ] Image delivery from client (30 photos, WebP or high-res for conversion)
```
