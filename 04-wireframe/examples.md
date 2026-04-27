# Examples

Two document-comparison examples: sitemap PRD input → critique → wireframe PRD output. Each example shows a distinct scenario. Decision examples follow at the end.

---

## Example 1 — Strong Sitemap PRD → Strong Wireframe PRD

**Scenario:** Peak Ridge Remodeling. Kitchen, bathroom, and basement remodeling. Portland, OR metro. 65+ Google reviews, 4.9 stars. Strong before/after portfolio. Primary CTA: free estimate form.

---

### Input: Sitemap PRD Summary (Abbreviated)

- **Business:** Peak Ridge Remodeling, Portland OR metro
- **Primary CTA:** Free estimate form (name, phone, brief description of project)
- **Secondary CTA:** View portfolio
- **Services:** Kitchen remodeling, bathroom remodeling, basement finishing
- **Trust assets:** 65 Google reviews (4.9★), 12+ years in business, 300+ completed projects, active portfolio of before/afters
- **Pages:** Homepage, /services (overview), /services/kitchen-remodeling, /services/bathroom-remodeling, /services/basement-finishing, /portfolio, /about, /contact, /service-areas, /portland-remodeling, /beaverton-remodeling, /lake-oswego-remodeling, /thank-you
- **User journey:** Arrive from search or referral → assess credibility → evaluate service → view portfolio → estimate form
- **Page purposes stated:** Homepage = entry + proof-forward. Service pages = service evaluation. Portfolio = visual proof. About = company credibility. Contact = conversion. City pages = local SEO + coverage confirmation.

---

### Critique

**Overall sitemap PRD quality:** Acceptable with minor flags.

> **[CONTENT]** Problem: Portfolio page lists "before/after photos" as content but does not indicate minimum count or whether photos are organized by service type or presented as a unified grid. Impact: Cannot determine whether portfolio section should include filtering or should be a flat grid. Resolution: Assumed flat grid with sufficient volume (30+ photos). Labeled as assumption.

> **[THIN]** Problem: `/service-areas` (overview page) is listed as a standalone page with the stated purpose of "showing what cities we cover." This is very thin as a standalone page — most visitors will arrive on city pages directly from search. Resolution: Will wireframe this as a minimal coverage map/list page. May recommend merging into the About or Contact page if build complexity is a concern. Flagged in unresolved issues.

No send-back required. Both issues are workable with assumptions and a flag.

---

### Wireframe PRD — Peak Ridge Remodeling

**Project:** Peak Ridge Remodeling
**Date:** [Session date]
**Stage:** 04-wireframe — output complete
**Sitemap PRD status:** Acceptable with flags
**Pages covered:** 13

---

#### 1. Project Overview

Peak Ridge Remodeling is a 12-year-old Portland metro remodeling contractor with 65 Google reviews and a strong before/after portfolio. This is a 13-page site structured around a free estimate form as the primary conversion action. The homepage leads with proof because the business's reviews and project history are its strongest trust asset. All three service pages share a template. Three city pages share a template. The contact page keeps the form above the fold with no competing content.

---

#### 2. Wireframe Summary

**Total pages wireframed:** 13
**Primary CTA mechanism:** Free estimate form
**Conversion page:** /contact
**Reusable templates identified:**
- Service page template (applies to /kitchen-remodeling, /bathroom-remodeling, /basement-finishing)
- City page template (applies to /portland-remodeling, /beaverton-remodeling, /lake-oswego-remodeling)

**Key structural decisions:**
- Homepage leads with trust bar immediately below hero because 65 reviews + 4.9★ is the business's strongest conversion driver — do not bury this
- Portfolio page leads with a full-width image grid with no copy preceding it — the work speaks first
- FAQ section placed before the final CTA on all service pages — cost and scope anxiety is the primary hesitation for remodeling clients
- Contact page: form is above the fold, primary content, nothing above it but a short reassurance headline

---

#### 3. Critique of Sitemap PRD

*(See Critique section above.)*

---

#### 4. Overall Wireframe Logic

This site serves users who are in active evaluation mode. They typically arrive from Google search or referral, and they're comparing 2–3 remodeling contractors. Their decision criteria: credibility (reviews + portfolio), scope match (does this contractor do my type of project?), and risk assessment (is this going to be a nightmare?). The wireframe is structured to address each in sequence: prove credibility fast → match scope on service pages → remove risk anxiety with FAQ and process → make the estimate request easy.

The homepage compresses the full trust argument into one page. Service pages go deeper on a single service. The portfolio page exists for users who want to see work before committing to an estimate. The contact page removes all obstacles.

---

#### 5. Reusable Section/Component Patterns

---

**PATTERN: Hero — Standard (Homepage)**
Used on: Homepage
Job: Establish credibility and primary value within the first screen; trigger the estimate form
Contains:
- Primary headline ("Portland's [descriptor] remodeling contractor" or equivalent)
- Supporting subheadline (1 sentence — what they do and for whom)
- Primary CTA button — "Get a Free Estimate"
- Secondary CTA — "See Our Work → /portfolio"
- Hero image (before/after split or in-progress project photo — not a stock photo)
- Star rating + review count embedded in or immediately below the headline area

Desktop: Two-column layout — headline, subheadlines, CTAs on left; hero image on right
Mobile: Stacked — headline → supporting text → primary CTA → secondary CTA → image below

---

**PATTERN: Trust Bar**
Used on: Homepage (immediately below hero), optionally on Contact page
Job: Fast-inject credibility for users who have already seen the hero
Contains:
- Google review count + star rating (65 reviews, 4.9★)
- Years in business (12+ years)
- Projects completed (300+ projects)
- Optional: a licensed/insured badge or BBB accreditation if applicable

Desktop: Single horizontal bar, 3–4 items in a row, visually restrained
Mobile: 2-column compact grid (2 items per row), or horizontal scroll

---

**PATTERN: Service Grid**
Used on: Homepage (services summary section), /services (overview page)
Job: Show what services are available; route users to service detail pages
Contains:
- 3 service cards: Kitchen Remodeling, Bathroom Remodeling, Basement Finishing
- Each card: service name, 1-sentence description, link to service page
- Optional: representative photo per service

Desktop: 3-column card grid
Mobile: Single-column stacked cards

---

**PATTERN: Hero — Service Page Variant**
Used on: /services/kitchen-remodeling, /services/bathroom-remodeling, /services/basement-finishing
Job: Confirm relevance, establish scope, trigger estimate request
Contains:
- Service-specific headline
- 1-sentence positioning statement ("We specialize in [service] for Portland homeowners" or similar)
- Primary CTA — "Get a Free Estimate"
- Representative project photo for this service

Desktop: Two-column or full-width with text overlay
Mobile: Stacked — headline → text → CTA → image

---

**PATTERN: Proof / Testimonial Block**
Used on: Homepage, individual service pages
Job: Provide specific social proof from past clients
Contains:
- 2–3 testimonial cards
- Each card: client first name + last initial, project type, quote, star rating
- Review platform source (Google) and total count reference

Desktop: 3-column card row (homepage), 2-column row (service pages)
Mobile: Single-column stacked cards; or horizontal scroll carousel on homepage

---

**PATTERN: Process Steps**
Used on: Homepage (shortened — 3 steps), /about (full version — 5 steps)
Job: Reduce anxiety about what happens after contacting the business
Contains:
- Step 1: Free estimate / consultation
- Step 2: Design and planning / proposal
- Step 3: Build / execution
- Optional steps 4–5 for the about page version (project management, warranty/follow-up)

Desktop: Horizontal numbered steps with brief description per step
Mobile: Vertical numbered list

---

**PATTERN: FAQ / Objection Block**
Used on: Service pages, optionally on /contact
Job: Address the most common hesitations before the CTA
Contains:
- 3–5 questions specific to the service or to remodeling in general
- Accordion format (open/close)

Desktop: Full-width accordion, or two-column if 6+ questions
Mobile: Accordion, always collapsed by default

---

**PATTERN: CTA Band**
Used on: All pages (at the end of page content)
Job: Re-trigger the estimate form request after content is consumed
Contains:
- Action headline ("Ready to start your project?")
- Primary CTA button — "Get a Free Estimate"
- Reassurance line (e.g., "Free estimates. No obligation. We respond within 24 hours.")

Desktop: Full-width centered content
Mobile: Same — stacked headline → button → reassurance

---

**PATTERN: Hero — City Page Variant**
Used on: City page template (/portland-remodeling, /beaverton-remodeling, /lake-oswego-remodeling)
Job: Confirm coverage, establish local relevance, trigger estimate
Contains:
- City-specific headline ("Kitchen & Bathroom Remodeling in [City], OR")
- 1-sentence service coverage statement
- Primary CTA

Desktop: Full-width or two-column
Mobile: Stacked

---

**PATTERN: Contact Block (Full)**
Used on: /contact
Job: Capture estimate requests; provide alternative contact options
Contains:
- Short reassurance headline ("Get your free estimate")
- Brief expectation-setting line ("We respond within 24 hours. No obligation.")
- Estimate form: Name, Phone, Email, Project type (dropdown), Brief description, Submit
- Alternative: Phone number with "prefer to call?" prompt
- Business hours note

Desktop: Two-column — form on left, contact details + trust reinforcement on right
Mobile: Full-width form stacked above contact details

---

#### 6. Page-by-Page Wireframes

---

### PAGE: Homepage — `/`

**Page goal:** Orient new visitors, establish credibility fast, move them toward a free estimate or portfolio exploration
**Page role in journey:** Entry and orientation — most users arrive here from search or referral with no prior knowledge of the business
**Conversion role:** Entry/orientation with direct conversion trigger

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Hero | Establish who this is, what they do, and why to stay — trigger first CTA |
| 2 | Trust Bar | Inject credibility immediately after the hero while trust is forming |
| 3 | Services Overview | Show what services are available; route users who know what they need |
| 4 | Why Peak Ridge | Explain what makes this contractor worth hiring (specific, not generic) |
| 5 | Featured Portfolio | Show representative work — 6 best photos from 2–3 project types |
| 6 | Testimonials | Social proof from real clients |
| 7 | Process (short) | Reduce anxiety about what engagement looks like (3 steps only) |
| 8 | CTA Band | Final conversion trigger |

---

#### Section Details

**Section 1: Hero**
- Job: First impression — establish credibility and trigger estimate request
- Content requirements:
  - Primary headline: Value-forward, not generic ("Portland's [trusted / detail-focused / award-winning] remodeling contractor" — actual copy to be determined, but NOT "Welcome to Peak Ridge Remodeling")
  - Supporting subheadline: 1 sentence — kitchen, bathroom, basement remodeling for Portland metro homeowners
  - Primary CTA: "Get a Free Estimate" button
  - Secondary CTA: "See Our Work" text link or secondary button
  - Hero image: In-progress or completed project photo — real, not stock. Kitchen or bathroom preferred.
  - Embedded proof: "4.9★ on Google · 65+ Reviews" — within or immediately adjacent to the hero content

**Section 2: Trust Bar**
- Job: Cement credibility for users who didn't fully register the proof in the hero
- Content requirements:
  - Item 1: "65+ Google Reviews · 4.9★" with Google icon
  - Item 2: "12+ Years in Portland"
  - Item 3: "300+ Projects Completed"
  - Item 4 (optional): Licensed & Insured badge

**Section 3: Services Overview**
- Job: Route users who know their service type to the correct service page
- Content requirements:
  - Section headline: Short — "What We Do" or "Our Services" or similar
  - 3 service cards: Kitchen Remodeling, Bathroom Remodeling, Basement Finishing
  - Each card: title, 1-sentence description, "Learn more →" link
  - Representative photo per card (kitchen photo, bathroom photo, finished basement photo)

**Section 4: Why Peak Ridge**
- Job: Articulate what makes this contractor different from the alternatives — specific, verifiable claims only
- Content requirements:
  - Section headline
  - 3–4 points of differentiation — NOT generic icons. These must be specific: e.g., "Dedicated project manager for every job," "We handle permits," "Fixed-price estimates," "12-year workmanship warranty"
  - Supporting evidence for at least one (client quote, or specific outcome)
- Notes: If no clear differentiators are available from the client, flag this section for copy team and use placeholder. Do not fabricate differentiators.

**Section 5: Featured Portfolio**
- Job: Show the quality of work before the user has to click to the full portfolio
- Content requirements:
  - Section headline: "Our Work" or "Recent Projects"
  - 6 project photos — 2 kitchen, 2 bathroom, 2 basement — best available
  - "View Full Portfolio →" link below the grid
- Notes: This is a teaser, not the full gallery. Do not add per-photo text or project descriptions here — the image quality must speak for itself.

**Section 6: Testimonials**
- Job: Specific client voices confirming that the business delivers what it promises
- Content requirements:
  - 2–3 testimonial cards
  - Each: first name + last initial, project type, 2–3 sentence quote, star rating
  - "Read more reviews on Google →" link
- Notes: Testimonials must include project type context (kitchen, bathroom, basement) so users can see proof relevant to their own project.

**Section 7: Process (3 Steps)**
- Job: Reduce anxiety about what happens next — make the estimate request feel low-risk
- Content requirements:
  - Section headline: "How It Works" or "The Process"
  - Step 1: Free estimate (come to your home, assess, propose)
  - Step 2: Design and planning (finalize materials, timeline, permit if needed)
  - Step 3: Build and complete (project managed start to finish)
  - Brief 1-sentence description per step

**Section 8: CTA Band**
- Job: Final trigger for users who have been convinced but haven't acted yet
- Content requirements:
  - Headline: "Ready to start your project?"
  - Primary CTA: "Get a Free Estimate" button
  - Reassurance: "Free estimate. No obligation. We respond within 24 hours."

---

#### CTA Logic

**Primary CTA:** Get a Free Estimate — form on /contact
**Primary CTA placement:** Hero (Section 1), after Testimonials (optional inline), CTA Band (Section 8)
**Secondary CTA:** See Our Work → /portfolio
**Secondary CTA placement:** Hero (alongside primary), below Featured Portfolio section
**CTA rationale:** The primary CTA appears at the top for ready buyers. The secondary CTA gives researchers a path without committing to an estimate. The final CTA band catches users who needed to see the full page before acting.

---

#### Trust and Proof Placement

- Hero: 4.9★ + 65 reviews inline — stops skeptical users from leaving before they've read anything
- Trust Bar (Section 2): Extends and diversifies the proof immediately after hero
- Section 4 (Why Peak Ridge): Specific differentiators, not assertions — earns trust through specificity
- Section 6 (Testimonials): Social proof after the services section — positioned after users know what service they need, so testimonials feel more relevant
- CTA Band (Section 8): Guarantee/reassurance line ("no obligation, 24-hour response") — reduces commitment anxiety at the conversion trigger

---

#### Desktop Wireframe Notes

Two-column hero: value copy and CTAs on left, project photo on right. Trust bar spans full width below the hero as a single horizontal band. Services section uses a 3-column card grid. Featured portfolio uses a 2×3 image grid. Testimonials in a 3-column card row. Process steps display as a horizontal numbered sequence. CTA band is full-width, centered.

---

#### Mobile Wireframe Notes

Hero stacks: headline → supporting text → primary CTA → secondary CTA → hero image below the fold. Trust bar collapses to a 2-column compact grid (4 items in 2 rows). Services cards stack single-column. Portfolio grid stays 2-column (3 rows of 2). Testimonials stack single-column. Process steps stack vertically. Sticky CTA bar pinned to bottom of viewport: "Get a Free Estimate" button + phone number.

---

#### Layout Rationale

The section order follows the trust-building sequence a skeptical user needs: arrive → see proof → understand the offer → evaluate quality → hear from clients → understand commitment level → act. Proof appears in three separate locations (hero, trust bar, testimonials) because remodeling is a high-ticket, high-trust purchase — skepticism is high, and single proof placement is insufficient. Process steps are placed late (after testimonials) because they address anxiety about engagement, not initial interest.

---

### PAGE: Services Overview — `/services`

**Page goal:** Orient users arriving from nav to the full service set; route them to the right service page
**Page role in journey:** Navigation hub — users who clicked "Services" in the nav and need to decide where to go next
**Conversion role:** Service evaluation entry point

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Page hero | Confirm this is the services section, give the 30-second summary |
| 2 | Service cards (full) | Present all 3 services with enough detail to route correctly |
| 3 | Trust reinforcement | Brief proof block to prevent drop-off before clicking a service |
| 4 | CTA Band | For users who are ready without needing service detail |

---

#### Section Details

**Section 1: Services Hero**
- Job: Confirm the page's scope — "here's everything we do"
- Content requirements:
  - Short headline: "Portland Remodeling Services" or similar
  - 1–2 sentence scope statement: all three service types, service area
  - No primary CTA in the hero here — the job of this page is to route, not to convert immediately

**Section 2: Service Cards (Full Detail)**
- Job: Describe each service well enough that users self-select to the right page
- Content requirements:
  - 3 service cards — one per service
  - Each card: service name, 3–4 sentence description covering scope and ideal project type, representative photo, "Learn more →" link to service page
  - Do NOT repeat all service detail here — include enough to differentiate, not the full service page content

**Section 3: Trust Reinforcement**
- Job: Prevent drop-off for users who are evaluating before clicking a service page
- Content requirements:
  - 1–2 short testimonials (one kitchen, one bathroom or basement)
  - Review count reference
  - Keep compact — this is a pivot point, not a proof-heavy section

**Section 4: CTA Band**
- Job: Convert users who have enough information to request an estimate without reading a service page
- Content requirements: Standard CTA band (see Pattern: CTA Band)

---

#### Desktop Wireframe Notes

Lean page. Services section uses a 3-column card grid with enough copy per card to differentiate. Testimonials as a 2-column compact block. CTA band full-width.

---

#### Mobile Wireframe Notes

Service cards stack single-column. Testimonials stack single-column. Sticky CTA on mobile.

---

#### Layout Rationale

This is a routing page. It should be shorter than a full service page. The goal is not to fully sell the service here — it is to give users enough to self-select to the right page. Heavy content on this page would slow users down rather than route them faster.

---

### PAGE: Kitchen Remodeling — `/services/kitchen-remodeling`

*(This wireframe applies as a template to all three service pages. Replace service-specific content as needed for /bathroom-remodeling and /basement-finishing.)*

**Page goal:** Convince visitors evaluating kitchen remodeling services that Peak Ridge is the right choice; move them to request a free estimate
**Page role in journey:** Primary evaluation page for kitchen remodeling leads
**Conversion role:** Service evaluation → conversion

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Service hero | Confirm service, establish relevance, trigger estimate |
| 2 | Service scope / what's included | Explain what kitchen remodeling covers — reduce scope confusion |
| 3 | Portfolio samples (kitchen-specific) | Show kitchen work specifically — proof relevant to this user |
| 4 | Testimonials (kitchen-specific) | Client voices for kitchen projects specifically |
| 5 | FAQ | Address the most common kitchen remodeling hesitations |
| 6 | CTA Band | Final conversion trigger |

---

#### Section Details

**Section 1: Service Hero**
- Job: Fast confirmation — "yes, this page is about kitchen remodeling, yes Peak Ridge does it well"
- Content requirements:
  - Headline: "Portland Kitchen Remodeling" or more specific ("Custom Kitchen Remodeling in Portland, OR")
  - 1-sentence positioning statement
  - Primary CTA: "Get a Free Estimate"
  - Representative kitchen project photo — best available

**Section 2: Service Scope**
- Job: Explain what kitchen remodeling at Peak Ridge involves and what they typically include
- Content requirements:
  - Short headline ("What's Included" or "Our Kitchen Remodeling Services")
  - Description of scope: layout changes, cabinetry, countertops, appliances, flooring, lighting, permits
  - Callout of what makes their approach distinct (if applicable: custom vs. prefab, timeline range, project management)
  - This is NOT copy-heavy — 2–3 short paragraphs or a list + brief description. If it becomes a wall of text, it will be skipped.

**Section 3: Portfolio Samples (Kitchen-Specific)**
- Job: Show kitchen work specifically — not a general portfolio teaser
- Content requirements:
  - 4–6 kitchen project photos
  - Before/after pairs preferred if available
  - "View Full Portfolio →" link
- Notes: This section must show kitchen work only. General portfolio thumbnails here reduce relevance.

**Section 4: Testimonials (Kitchen-Specific)**
- Job: Social proof from past kitchen clients
- Content requirements:
  - 2 testimonials from kitchen clients
  - Each: name, project type (kitchen remodel), quote, stars
  - If dedicated kitchen testimonials are unavailable, use general testimonials but flag as assumption

**Section 5: FAQ**
- Job: Answer the 4–5 questions kitchen remodeling clients always ask before requesting an estimate
- Content requirements:
  - Q: How long does a kitchen remodel take?
  - Q: How much does a kitchen remodel cost? (Even if the answer is "it depends," the question must be addressed honestly)
  - Q: Do you handle permits?
  - Q: Do I need to leave my house during the remodel?
  - Q: What brands/manufacturers do you work with? (optional)
- Notes: FAQ must answer these questions directly. Vague or evasive answers reduce trust.

**Section 6: CTA Band**
- Job: Conversion trigger — estimate form request
- Content requirements: Standard CTA band. Add reassurance line ("Free estimate. We come to you.").

---

#### CTA Logic

**Primary CTA:** Get a Free Estimate
**Placement:** Hero (top), CTA Band (bottom)
**No mid-page CTA:** The proof and FAQ sections should not be interrupted. Let users consume the evaluation content before hitting the final CTA.
**CTA rationale:** Kitchen remodeling is a high-consideration purchase. Users need to evaluate scope, see work, and have questions answered before they're ready to commit to an estimate. The CTA appears twice — once for ready buyers, once for users who needed the full page.

---

#### Trust and Proof Placement

- Hero: Service-specific project photo — visual proof of quality at first impression
- Section 3 (Portfolio): Service-specific proof — most relevant placement for a high-visual-trust purchase
- Section 4 (Testimonials): Specific client proof for kitchen projects — placed after visual proof, reinforces it with voice
- CTA Band: Reassurance line ("free estimate, no obligation") — reduces commitment anxiety

---

#### Desktop Wireframe Notes

Two-column service hero (text left, kitchen photo right). Service scope as single-column or two-column content section. Portfolio as a 2×3 image grid. Testimonials as a 2-column compact block. FAQ as a full-width accordion. CTA band full-width.

---

#### Mobile Wireframe Notes

Service hero stacks: headline → text → CTA → image. Service scope stacks single-column. Portfolio grid stays 2-column. Testimonials stack single-column. FAQ accordion stays collapsed by default. Sticky CTA bar on mobile with "Get a Free Estimate" button and phone number.

---

#### Layout Rationale

The section order mirrors the user's evaluation sequence for a high-ticket service: confirm relevance → understand what's involved → see proof of quality → hear from others → resolve doubts → act. The FAQ is positioned late (before the CTA, not at the top) because users who arrive on this page have already decided they're interested in kitchen remodeling — their questions arise during evaluation, not at the start.

---

### PAGE: Portfolio — `/portfolio`

**Page goal:** Show the quality and variety of Peak Ridge's completed work; build trust through visual evidence
**Page role in journey:** Proof page — for users who need to see work before requesting an estimate
**Conversion role:** Trust/proof

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Brief header | Minimal — page title, short context. Get out of the way of the work. |
| 2 | Portfolio grid | The entire job of this page — show the work |
| 3 | CTA Band | Convert users whose trust was built by viewing the portfolio |

---

#### Section Details

**Section 1: Page Header**
- Job: Orient the user and get out of the way immediately
- Content requirements:
  - Page title: "Our Portfolio" or "Our Work"
  - 1 sentence max: "Kitchen, bathroom, and basement remodeling across the Portland metro."
  - No CTA here — do not interrupt before users have seen the work

**Section 2: Portfolio Grid**
- Job: Show the full range of project quality and type
- Content requirements:
  - Minimum 20 photos; ideally 30+
  - Organized by service type (Kitchen / Bathroom / Basement) with filter tabs or clearly labeled sections — if available; if not, a flat grid is acceptable
  - Before/after pairs where available — presented as adjacent images or a split view
  - Short caption per project (optional): room type, neighborhood/city — no essay descriptions
- Notes: If photo filtering by type is not technically available in the build, a flat grid is the fallback. Note this as a build decision.

**Section 3: CTA Band**
- Job: Capture users whose trust was built by viewing the portfolio
- Content requirements:
  - Headline: "Like what you see? Let's build yours."
  - Primary CTA: "Get a Free Estimate"

---

#### CTA Logic

**Primary CTA:** Estimate form
**Placement:** CTA Band only (after the full portfolio)
**No CTA in the header:** Do not add a CTA above the portfolio — users came to see work, not to be sold at the door
**CTA rationale:** Trust is built by viewing the work. The CTA conversion happens after, not before. Interrupting with a CTA before the portfolio is viewed reduces the page's purpose.

---

#### Desktop Wireframe Notes

Minimal header — short page title, 1 sentence. Portfolio grid is 3-column uniform grid (not masonry — predictable layout is easier to scan). Service-type labels or filter tabs above the grid if filtering is available. CTA band full-width below the grid.

---

#### Mobile Wireframe Notes

Header stays minimal. Portfolio grid shifts to 2-column. Filter tabs (if present) stay as horizontal scrollable tabs. No sticky CTA on this page — the goal is portfolio immersion, not persistent conversion pressure. CTA band at the bottom is sufficient.

---

#### Layout Rationale

The portfolio page has one job: show the work. Every design or structure choice that competes with the photos is wrong. No testimonials section, no "why choose us" block, no service descriptions. The header gets out of the way in one sentence. The CTA is earned at the bottom.

---

### PAGE: About — `/about`

**Page goal:** Build personal trust and credibility for users who are evaluating the company behind the work
**Page role in journey:** Trust-building — users who need to know who they're hiring before committing
**Conversion role:** Trust/proof

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Credibility statement | Lead with credentials, not story — proof first |
| 2 | Company story | The origin and values behind Peak Ridge — earns connection after credibility is established |
| 3 | Team (if applicable) | Who does the work — builds personal trust |
| 4 | Full process steps | Detailed version of the engagement process (5 steps) |
| 5 | CTA Band | Move convinced users to the next step |

---

#### Section Details

**Section 1: Credibility Statement**
- Job: Establish that Peak Ridge is qualified and trusted before the story begins
- Content requirements:
  - Key stats up front: 12+ years, 300+ projects, 65+ Google reviews, licensed/insured
  - This is NOT a copy block — it's a prominent stat display
  - Short 2-sentence context for the stats

**Section 2: Company Story**
- Job: Build connection and context — why this business exists and what they stand for
- Content requirements:
  - Founder's background and why they started the business
  - What the company values in terms of workmanship and client experience (specific, not generic)
  - Photo of the founder or team in context (on a job site, not a studio headshot)
- Notes: Keep this honest and specific. Generic "we are passionate about quality" copy hurts credibility. Real story beats polished marketing language.

**Section 3: Team**
- Job: Show who actually does the work — reduces the "who is showing up at my house?" anxiety
- Content requirements:
  - Owner/founder: name, role, brief background, photo
  - Lead crew or key team members (optional — only if they add credibility and have real bios)
  - Do NOT include team members without real context

**Section 4: Full Process**
- Job: Detailed walkthrough of what clients can expect from estimate to project completion
- Content requirements:
  - 5 steps: Free estimate → Design & material selection → Permit and scheduling → Build and execution → Final walkthrough and warranty
  - 2–3 sentences per step explaining what the client experiences
  - Set expectations clearly: timeline ranges, how communication happens, who the point of contact is

**Section 5: CTA Band**
- Content requirements: Standard CTA band. Add: "Curious if we're the right fit? Start with a free estimate."

---

#### Desktop Wireframe Notes

Credibility stats as a prominent stat row or large-number display. Story section as two-column (text + team/founder photo). Team section as simple card grid (1–3 people). Process steps as a vertical numbered list with text — more detail than the homepage version. CTA band full-width.

---

#### Mobile Wireframe Notes

Stats stacked or 2-column compact. Story section stacks — text first, then photo. Team cards stack single-column. Process steps stay vertical single-column. No sticky CTA on this page — about page is a trust read, not a high-intent conversion page.

---

### PAGE: Contact — `/contact`

**Page goal:** Capture free estimate requests; provide all necessary contact options
**Page role in journey:** Primary conversion page — users arrive here ready to take action
**Conversion role:** Primary conversion

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Reassurance headline | Short, direct — confirm this is the right place and set expectations |
| 2 | Estimate form | The primary conversion action — immediately visible, above the fold |
| 3 | Alternative contact | For users who want to call rather than fill out a form |
| 4 | Location / service area confirmation | Confirm coverage |
| 5 | Minimal trust reinforcement | A single review or guarantee statement — keeps trust present without creating distraction |

---

#### Section Details

**Section 1: Reassurance Headline**
- Job: Confirm this is the right page and reduce commitment anxiety before the form
- Content requirements:
  - Headline: Short and direct — "Get Your Free Estimate" or "Start Your Project"
  - 1 sentence: "We respond within 24 hours. No obligation." (Or real commitment, not made up.)
  - No navigation away from this section — no photo gallery, no service list

**Section 2: Estimate Form**
- Job: Capture the estimate request — the entire reason the user is here
- Content requirements:
  - Name (required)
  - Phone (required)
  - Email (required)
  - Project type (dropdown: Kitchen Remodeling / Bathroom Remodeling / Basement Finishing / Other)
  - Brief description (text area, optional)
  - Submit button: "Request My Free Estimate"
- Notes: Keep the form short. More than 6 fields significantly reduces submission rate for a remodeling business at this stage of the funnel. Address and timeline can be gathered after contact.

**Section 3: Alternative Contact**
- Job: Give phone-preferrers a clear path without filling out a form
- Content requirements:
  - Phone number with "prefer to call?" prompt
  - Business hours
  - Email (optional secondary)

**Section 4: Location / Service Area**
- Job: Confirm that the business serves the user's area
- Content requirements:
  - Brief list or map of service areas (Portland, Beaverton, Lake Oswego, and surrounding metro)
  - Embedded map (optional but useful for local credibility)

**Section 5: Minimal Trust**
- Job: Prevent last-second drop-off with a single reassurance element
- Content requirements:
  - 1 short review quote OR a guarantee statement (e.g., "Licensed, bonded, and insured. 12-year workmanship warranty.")
  - Keep to 1 element only — this is not a testimonials section

---

#### CTA Logic

The form IS the CTA on this page. There is no CTA band. The submit button is the primary action. Alternative contact is the secondary action. Nothing on this page should compete with the form.

---

#### Desktop Wireframe Notes

Two-column layout: form on the left (full width of its column), contact details and map/service area on the right. The form is in the left column above the fold — a user at 1280px wide sees the form immediately on page load. Single trust element below the two-column section. No hero. No imagery at the top.

---

#### Mobile Wireframe Notes

Form is full-width, single-column, immediately visible on page load. Contact details (phone, hours) stacked below the form. Map stacked below contact details. Trust element at the very bottom. No sticky CTA bar on this page — the form is the first thing visible; no need to sticky a button that's already in view.

---

#### Layout Rationale

The contact page removes every obstacle. Nothing above the form headline, nothing beside the form that competes with it. Users arrive here with intent — they do not need to be re-sold. They need to see the form, feel the commitment is manageable (short form), confirm their area is covered, and submit. Every section is in service of removing friction from that action.

---

### PAGE: City Page Template — `/portland-remodeling`, `/beaverton-remodeling`, `/lake-oswego-remodeling`

**Page goal:** Rank for local search queries; confirm service coverage for that city; route to services or convert
**Page role in journey:** Local SEO entry point — users arrive from search with local intent
**Conversion role:** Local SEO entry → service evaluation or direct conversion

*(Wireframe this once. All three city pages use this template.)*

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | City-specific hero | Confirm coverage, establish local relevance, trigger estimate |
| 2 | Services available in this area | Brief service list linking to service pages |
| 3 | Local trust signals | Reviews/proof from that area if available; general reviews otherwise |
| 4 | Service area coverage confirmation | Map or neighborhood list |
| 5 | CTA Band | Conversion trigger |

---

#### Section Details

**Section 1: City Hero**
- Headline: "[City] Kitchen & Bathroom Remodeling — Peak Ridge"
- 2 sentences: We serve [City] and surrounding neighborhoods. What services we cover.
- Primary CTA: "Get a Free Estimate"
- City-relevant project photo if available; general project photo otherwise

**Section 2: Services in This Area**
- Short list: Kitchen Remodeling, Bathroom Remodeling, Basement Finishing
- Each links to the full service page
- 1-sentence description per service — do NOT replicate the full service page content here

**Section 3: Local Trust Signals**
- 2 reviews from clients in or near that city if available (sourced from Google reviews mentioning the city)
- If not available: general reviews + a note about coverage ("We've completed 15+ projects in [City]" if true)
- [ASSUMPTION] Topic: City-specific review availability. Why: Sitemap does not specify whether city-sorted reviews are available. Impact: If no city-specific reviews are available, section becomes generic — slightly reduced local trust effect but not a structural problem.

**Section 4: Coverage Confirmation**
- Statement of neighborhoods or zip codes served
- Optional: small embedded map or coverage description

**Section 5: CTA Band**
- Standard CTA band

---

#### Desktop Wireframe Notes

Standard two-column or full-width hero. Services as a simple 3-column or vertical list. Reviews as 2-column compact block. Coverage as a text description or embedded map. CTA band full-width.

---

#### Mobile Wireframe Notes

Stacked single-column throughout. Service list as vertical stack. Reviews as single-column. Sticky CTA bar on mobile.

---

### PAGE: Thank You — `/thank-you`

**Page goal:** Confirm receipt of estimate request; set expectations; prevent confusion
**Page role in journey:** Post-conversion confirmation
**Conversion role:** Structural/utility

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Confirmation message | Confirm the submission was received and what happens next |
| 2 | Next step guidance | Set expectations for timeline and format of response |
| 3 | Return path | Route users back to the site with an optional next step |

---

#### Section Details

**Section 1: Confirmation**
- Headline: "You're all set." or "We received your request."
- 1 sentence: Confirm what was submitted (estimate request for [service type if collected]).

**Section 2: What Happens Next**
- 2–3 sentences: "Someone from Peak Ridge will reach out within 24 hours. We'll schedule a time to visit your home. The estimate is free and there's no obligation."

**Section 3: Return Path**
- Optional: "In the meantime, explore our work." → link to /portfolio
- Homepage link

---

#### Desktop and Mobile Notes

Minimal centered layout. No sidebar, no competing content. Short and clean. Same on mobile.

---

### PAGE: Service Areas Overview — `/service-areas`

**Page goal:** Confirm that Peak Ridge serves the user's geographic area; route to relevant city pages
**Page role in journey:** Structural navigation page — used mostly by users who arrived on the homepage and are checking coverage
**Conversion role:** Structural/utility with secondary conversion trigger

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Coverage statement | Confirm total service area in 1–2 sentences |
| 2 | City list with links | Route users to the city page relevant to them |
| 3 | Map | Visual confirmation of coverage area |
| 4 | CTA Band | Catch users who confirmed coverage and are ready to request |

---

**Notes:** This page is thin by design. Its job is confirmation and routing, not selling. Do not add service descriptions, testimonials, or heavy content here.

[ASSUMPTION] Topic: Service areas overview page necessity. Why: This page is structurally very thin. If the build budget is a concern, this page can be replaced by a coverage section on the contact page and links to city pages from the footer. Impact: If removed, city pages still exist and are still findable via search — no SEO loss. The only loss is a nav/routing page for users who clicked "Service Areas" in the nav. Recommend flagging this decision for the client.

---

#### 7. Assumptions Made

> `[ASSUMPTION]` **Topic:** Portfolio filter tabs (by service type). **Why:** Sitemap does not specify whether photos are organized by service type or as a flat grid. **Impact:** If filtering is added, build complexity increases; if flat grid is used, users cannot filter by kitchen vs. bathroom vs. basement — slightly lower relevance but acceptable for a site of this scale.

> `[ASSUMPTION]` **Topic:** City-specific testimonials on city page template. **Why:** Sitemap does not confirm whether any Google reviews mention specific cities. **Impact:** If unavailable, city page proof section reverts to general reviews. Local trust effect is reduced but not eliminated — coverage confirmation still present.

> `[ASSUMPTION]` **Topic:** Before/after photo availability for the portfolio. **Why:** Sitemap states "before/after photos" exist but does not confirm count or whether pairs are organized. **Impact:** If before/after pairs are not available and only completed photos exist, the portfolio section remains structurally valid — flat grid of completed work. No structural change required.

> `[ASSUMPTION]` **Topic:** Kitchen-specific testimonials on the kitchen service page. **Why:** Sitemap does not indicate whether reviews are sorted by service type. **Impact:** If kitchen-specific testimonials are not available, general testimonials are used with a project type note added. Slightly reduced specificity but not a structural problem.

---

#### 8. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Service areas overview page necessity | Very thin page — may be better as a section on Contact or footer block | Client + 06-build-plan | Before build planning |
| Portfolio filtering by service type | Requires build decision — filter tabs add complexity | 06-build-plan | Before build |
| City page count | Sitemap lists 3 cities — confirm this is the intended set before build | Client | Before design |

---

#### 9. Handoff to 05-Design-System

**Wireframe PRD status:** Complete with minor flags.

**Instruction for 05-design-system:**
> The wireframe PRD above defines section-level structure for 13 pages. Begin the visual system with this structure as the foundation. Key structural constraints to preserve:
> 1. Trust bar must appear immediately below the homepage hero — do not reorder this or add visual sections between them.
> 2. Contact page: form must be above the fold. Do not add a hero image, large header, or any prominent element above the form headline that would push the form below the fold on standard viewport heights.
> 3. FAQ sections use accordion behavior — the design system must include an accordion component.
> 4. Service page section order (hero → scope → portfolio samples → testimonials → FAQ → CTA band) must be preserved — this sequence reflects the user evaluation journey.
> 5. Portfolio page: minimal header — do not add section content before the image grid.
>
> Freedom the design system has:
> - Visual language, color palette, typography, aesthetic direction — entirely open
> - Component styling (card shapes, button styles, text styles) — entirely the design system's domain
> - Animation, hover states, micro-interaction choices — design system's call
> - Spacing rhythm within sections — design system's call; section order is fixed, internal spacing is not
> - Mobile visual treatment — responsive-rules.md defines structural stacking; visual treatment is the design system's domain
>
> Priority pages for design: (1) Homepage — most complex page, establishes all visual patterns. (2) Kitchen service page — defines the service page template used by all 3 service pages. (3) Contact page — most conversion-critical page.

---

#### 10. Instructions for Later Skills

**06-Build Plan:**
> Page count: 13. Reusable templates: Service page template (3 pages), City page template (3 pages). Components requiring build decisions: accordion (FAQ), gallery grid with optional filter tabs, sticky mobile CTA bar, embedded map (contact page + city pages), estimate form with dropdown and text area, horizontal scroll carousel for mobile testimonials. CMS-managed sections: if CMS is active, testimonials and portfolio photos should be CMS-editable. URL structure established in 03-sitemap — follow it exactly.

**07+ Feature Folders:**
> Gallery feature: Portfolio page uses a 3-column uniform grid on desktop, 2-column on mobile. No masonry layout. Optional filter tabs by service type (Kitchen / Bathroom / Basement) — build as progressive enhancement. Tap to view fullscreen on mobile.
> Contact/Forms feature: Estimate form fields: Name, Phone, Email, Project type (dropdown), Brief description (textarea). Form post-submit redirects to /thank-you.
> Local SEO feature: Three city pages using one template. City-variable content: hero headline, local intro paragraph, local reviews (if available), coverage description. All other sections are identical across city pages.

---
---

## Example 2 — Weak Sitemap PRD → Send-Back

**Scenario:** Sunrise General Contracting. A general contractor (new construction, additions, remodeling) that submitted a weak planning PRD and the resulting sitemap is structurally incomplete.

---

### Input: Sitemap PRD Summary (Abbreviated — Weak Version)

- **Business:** Sunrise General Contracting
- **Services:** "General contracting and remodeling"
- **Primary CTA:** "Contact us" (mechanism not specified)
- **Page-type responsibilities:** Listed as "Home, About, Services, Gallery, Contact" — no purpose statements
- **User journey:** Not defined
- **Content available:** Unknown
- **Navigation:** "Standard navigation"
- **Local SEO:** Not mentioned

---

### Critique

**Overall sitemap PRD quality:** Weak — send-back triggered.

> **[PURPOSE]** Problem: None of the five listed pages have a purpose statement. "About," "Services," and "Contact" are page type labels, not purpose statements. Impact: Cannot determine section order for any page — don't know what each page is supposed to accomplish for the user or the business. Cannot distinguish whether "Services" means an overview page, individual service pages, or both.

> **[CTA]** Problem: Primary CTA is listed as "contact us" with no mechanism. Cannot determine whether the conversion action is a phone call, a form submission, a booking widget, or something else. This affects: the contact page structure, whether a form exists, whether a dedicated booking page is needed, and whether a sticky call button is warranted. Impact on wireframing: Cannot wire any page's CTA section or the contact page at all.

> **[STRUCTURE]** Problem: "Services" is listed as a single page with no indication of whether there are individual service pages, what the services are, or how many. "General contracting and remodeling" covers potentially 10+ distinct services. Impact: Cannot determine whether to wireframe 1 page or 8–12 pages for services.

> **[MISSING]** Problem: No thank-you page in the sitemap. No local SEO pages. No utility/legal pages. These are not optional omissions — a conversion flow requires a thank-you or confirmation state.

**Send-back threshold met: 4 blocking issues across Purpose (2+ pages), CTA, Structure, and Missing pages.**

---

### Send-Back

```
SEND-BACK TO 03-SITEMAP
Reason: The sitemap PRD does not contain the structural foundations
required to begin wireframe planning.

Required fixes:

1. Purpose statements: Every page must have a stated purpose — not 
   just a page type label. For each of the 5 pages listed, provide: 
   (a) what the user needs from this page, (b) what the business 
   needs from this page, and (c) what action the user should take 
   after this page.

2. Primary CTA mechanism: State exactly how users contact or 
   convert — phone call, form submission, Calendly booking, or 
   something else. If it is a form, state what fields. This single 
   decision changes the entire structure of the contact page and 
   the CTA sections on every other page.

3. Services structure: Clarify whether "Services" is one overview 
   page or individual service pages. If individual pages, list the 
   services and confirm whether each gets its own page. If a single 
   page, confirm what services are listed and at what level of detail.

4. Missing pages: Add a thank-you or post-conversion confirmation 
   page. Add legal/utility pages (privacy policy, 404). Confirm 
   whether local SEO pages are relevant — if the business serves 
   specific cities, this needs a decision.

Wireframe risks from current gaps:
- Without CTA mechanism: contact page cannot be wireframed. 
  Every page's CTA section is undecidable.
- Without service structure: the entire service section of the 
  site (potentially 50%+ of pages) cannot be planned.
- Without purpose statements: section order for every page is 
  guesswork — risk of building layouts that do not serve the 
  page's actual job.
```

---

### Revised Input (After Send-Back — Still Imperfect)

- Primary CTA: Contact form (name, phone, project description) — **now defined**
- Services: Kitchen remodeling, bathroom remodeling, additions, new construction — **now defined**, 4 services
- Individual service pages: Confirmed for kitchen and bathroom. Additions and new construction to be combined on one page ("larger projects").
- Purpose statements: Added for most pages. Contact page is still listed as "where people contact us." About page is listed as "our story."
- Thank-you page: Added
- Local SEO: Not addressed

---

### Post-Send-Back Checkpoint

After reviewing the revised sitemap, the following issues remain:

> "The following issues remain unresolved in the sitemap PRD:
> 1. The contact page purpose statement is still 'where people contact us' — this is a function description, not a purpose statement. Without knowing what the page must accomplish beyond housing a form, I cannot determine what trust or reassurance content belongs on this page.
> 2. The about page purpose is listed as 'our story' — this tells me the page's content, not its job. For a general contractor, the about page typically needs to establish credibility and personal trust (owner background, years in business, licensing). Without a purpose statement, I cannot determine the right section order.
> 3. Local SEO is still unaddressed — the business serves specific cities but no city page decision has been made.
>
> These gaps will likely cause the following wireframe problems:
> - Contact page: will assume minimal trust content (1 review or guarantee near the form) based on standard remodeling contractor conversion patterns. If the client has specific proof assets they want on this page, the structure may need revision.
> - About page: will assume the primary job is contractor credibility + personal trust, with CTA at the end. If the client's about page is intended to serve a different purpose (e.g., attract subcontractors, communicate values primarily), the structure will be wrong.
> - City pages: will not wireframe at this stage. If local SEO pages are needed, this wireframe PRD will need an addendum.
>
> Do you want to address any of these before I finalize the wireframe PRD? If not, I will proceed with clearly labeled assumptions."

**[User responds: Proceed with assumptions.]*

---

### Wireframe PRD (Abbreviated — with Assumptions)

Pages: Homepage, /services (overview), /services/kitchen-remodeling, /services/bathroom-remodeling, /services/larger-projects (additions + new construction combined), /gallery, /about, /contact, /thank-you

Key structural decisions with assumptions labeled:

> `[ASSUMPTION]` **Topic:** Contact page purpose. **Why:** Revised sitemap states "where people contact us" without specifying what trust content belongs. **Impact:** Contact page wireframed as standard conversion page — reassurance headline, form above fold, phone alternative, minimal trust block. If client wants a different experience (e.g., detailed FAQ before the form), structure will need revision.

> `[ASSUMPTION]` **Topic:** About page purpose. **Why:** "Our story" does not define the page's job in the user journey. **Impact:** About page wireframed as contractor credibility page (licenses, years in business, team, process) with conversion CTA at end. If the page is primarily for company culture or subcontractor recruitment, section order is wrong.

> `[ASSUMPTION]` **Topic:** "Larger Projects" combined page. **Why:** Sitemap directs additions + new construction to share one page — this is a significant scope merge. **Impact:** The combined page will be harder to structure cleanly than separate pages. Section order will cover both service types with clear labeling, but SEO targeting will be split. Flagging this as a potential structural problem for the client to reconsider.

Homepage section order:
1. Hero (general contractor positioning + primary CTA)
2. Trust bar (years in business, project count — if available; license/insured if not)
3. Services overview (4 service cards)
4. Featured work (gallery teaser)
5. Testimonials
6. Process (3 steps)
7. CTA Band

---
---

## Decision Examples

These short examples show specific wireframe decisions and why they were made.

---

### When to reorder sections

**Situation:** A plumbing company homepage has the section order: Hero → Services → About the Company → Testimonials → CTA Band.

**Problem:** "About the company" appears before testimonials. This is wrong — users do not care about company history until after they have some evidence that the company is credible. Testimonials earn trust; company history does not.

**Corrected order:** Hero → Trust Bar (review count + years) → Services → Testimonials → Brief "About" section → CTA Band

**Rule applied:** Trust must appear before story. Proof that earns credibility before biography is asked to carry it.

---

### When to remove a section

**Situation:** A landscaping company sitemap requests a "Mission and Values" section on the homepage.

**Problem:** A homeowner looking for a landscaper does not need to read the company's values statement. This section has no job in the user journey — it does not establish credibility, explain the offer, reduce risk, or trigger a conversion.

**Decision:** Remove the section. If values are important to the business, 1–2 sentences can be worked into the About page story section. It does not warrant a homepage section.

---

### When to combine sections

**Situation:** A dental practice about page has three separate sections: "Our Story," "Our Philosophy," "Why Choose Us."

**Problem:** All three sections cover overlapping territory — company background, how they think, why they're different. Splitting them into three sections creates an awkwardly long about page with no clear primary message. Users who are evaluating whether to book a cleaning appointment do not need three separate trust blocks.

**Decision:** Combine into one section: "About the Practice" — covering origin story, approach to patient care, and 2–3 specific differentiators. Shorter, clearer, less repetitive.

---

### How to decide section order

**Rule:** Ask what the user's questions are in sequence.

For a remodeling contractor's service page:
1. "Is this the right service for my project?" → Service hero
2. "What does this service include / cost range / timeline?" → Scope section
3. "Have they done this before? Can I see it?" → Portfolio samples
4. "What do past clients say?" → Testimonials
5. "What are my specific concerns about this project?" → FAQ
6. "OK, how do I start?" → CTA

That sequence matches the section order. It is not arbitrary. It mirrors the user's decision process.

---

### How to decide CTA placement

**Rule:** Place the CTA where the user's buying trigger is activated — not uniformly after every section.

- Hero CTA: For users who already have intent (came from a referral, have already evaluated). Place here so they don't have to scroll.
- Mid-page CTA: After the first strong proof section. For users whose trust tipped during reading. Do not add a mid-page CTA before any trust has been established.
- End CTA: For users who needed the full page. Always include at the bottom.

**Do not add a CTA:**
- Immediately before a trust section (interrupts the trust-building)
- Immediately after a FAQ section (the FAQ ends on uncertainty; reassurance before CTA is better)
- Multiple times in sequence without content between them

---

### How to decide proof placement

**Rule:** Place proof where user skepticism is highest.

- End of hero / immediately below hero: Skepticism is highest here — the user has just arrived and hasn't decided whether to stay. Proof reduces abandonment.
- After service scope section: User has just learned what the service includes. "Does this actually work?" is the next question. Proof answers it.
- Near the CTA: Commitment hesitation peaks here. A guarantee, a short review, or a trust badge reduces last-second drop-off.

**Never:** Place all proof at the bottom. Most users who don't convert never reach the bottom. Proof that is only at the bottom is proof that doesn't convert.

---

### How desktop and mobile notes should differ

**Desktop note example:**
> "Desktop: Two-column hero — value copy and CTAs left, project photo right. Trust bar spans full width below hero as a horizontal 4-item row. Services section uses 3-column card grid. Testimonials in a 3-column card row. Sticky header with CTA button visible throughout."

**Mobile note example (same page):**
> "Mobile: Hero stacks — headline first, then supporting text, then primary CTA, then image below the fold. Trust bar collapses to 2-column grid (2 items per row). Service cards stack single-column. Testimonials single-column. Sticky bottom bar: 'Get a Free Estimate' button + phone number."

**Why these differ:**
- The desktop note describes layout convention (which columns, which widths, what's sticky)
- The mobile note describes stacking decisions and CTA treatment changes
- The mobile note does not repeat what is the same (e.g., "process steps are still numbered" is obvious — only note what changes)
- The mobile note includes the sticky CTA decision — this is a structural mobile behavior, not a visual one

---

### What a strong wireframe PRD looks like vs. a weak one

**Weak wireframe PRD:**
> "Homepage: Hero with headline and CTA. Services section. Testimonials. About blurb. Contact CTA. Mobile: same but stacked."

Problems: No section jobs. No content requirements. No CTA logic. No trust placement. No layout notes. No conversion logic. No assumptions. A designer reading this has nothing to work from.

**Strong wireframe PRD:**
> "Homepage: 8 sections in this order — Hero (establish credibility, trigger estimate), Trust Bar (immediately below hero — review count + years + projects), Services Overview (route to service pages via 3 cards), Differentiators (specific business advantages, not generic icons), Featured Portfolio (6 photos, 2 per service type), Testimonials (3 cards with project type context), Process Steps (3 steps, anxiety reduction), CTA Band (final conversion trigger with guarantee line). Proof appears in hero, trust bar, and testimonials — three separate placements because remodeling is high-trust, high-ticket. Primary CTA in hero and CTA band; secondary CTA (See Portfolio) in hero as a text link. Desktop: two-column hero, 3-column service cards, 3-column testimonials, horizontal process steps, full-width CTA band. Mobile: stacked hero, trust bar collapses to 2×2 grid, single-column service cards, single-column testimonials, vertical process steps, sticky CTA bar on mobile."

This PRD gives a designer section order, section purposes, content requirements, conversion logic, trust placement rationale, and layout notes. Nothing is left to guesswork.
