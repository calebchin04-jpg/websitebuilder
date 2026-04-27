# AI Visibility Discovery Questions

Owned by: `01-discovery`

---

## Purpose

These questions must be asked during discovery to enable the AI visibility layer downstream. Without specific answers, `llms.txt`, schema, and markdown mirrors cannot be populated with real data — and placeholder content on a live site is worse than no AI visibility at all.

If a client declines to answer these questions or explicitly declines AI visibility, document that decision and skip all AI visibility implementation steps. Note the skip in the project plan.

---

## Required Questions

Ask all of the following. Do not skip based on assumption.

---

### 1. AI Search Presence

> "Do you want your business to appear as an answer in AI tools like ChatGPT, Perplexity, and Google's AI search? These tools pull content from your website to answer questions like 'best [service] in [city].'"

**Why this matters:** Establishes client intent. Some clients may have legal, privacy, or competitive reasons to limit AI indexing.

**If declined:** Document in project notes. Block AI training crawlers (CCBot, GPTBot) in `robots.txt`. Skip `llms.txt` and markdown mirrors. Still implement `LocalBusiness` schema and sitemap (these serve Google, not AI training).

**If approved (default):** Proceed with full AI visibility implementation.

---

### 2. Service List and Pricing

> "Can you give me a specific list of every service you offer? For each one: what does it include, what does it typically cost (or what's a starting price), and how long does it usually take?"

**Why this matters:** `llms.txt`, Service schema, and markdown mirrors require specific service descriptions and pricing. "We do everything" is not usable. Specific named services with pricing are quotable by AI.

**Capture:** Service name, scope (what's included), pricing (starting price or range), timeline.

**If client declines to share pricing publicly:** Note this. `llms.txt` will say "pricing available on request" for that service. Do not invent or estimate prices.

---

### 3. Customer Questions

> "What are the 5–10 questions customers most commonly ask you before they hire you? Think about calls, emails, and what people ask at first consultations."

**Why this matters:** Real customer questions become FAQs. FAQs are the single highest-value content type for AI citations — AI answers questions by pulling from sites that have already answered them directly.

**Capture:** Exact question phrasing (or close to it), a direct answer for each.

**Red flag:** If all FAQ answers are "call us to discuss" — push back. At minimum: service area questions, process/timeline questions, and credential questions can always be answered directly.

---

### 4. Service Area

> "Which specific cities, towns, or neighborhoods do you serve? Please be as specific as possible — not 'the greater [city] area,' but the actual places."

**Why this matters:** Location-specific queries ("plumber in Beaverton") are one of the most common AI search patterns for local services. Named cities in `llms.txt` and schema make the business visible for these queries.

**Capture:** City names, zip codes if useful, any areas explicitly not served.

---

### 5. Business Credentials and Stats

> "What credentials or stats would a potential customer want to know? Things like: how long you've been in business, licenses or certifications, review count and rating, number of projects completed, any awards or recognitions."

**Why this matters:** These become the Key Facts section of `llms.txt` and the `aggregateRating` and `description` fields in schema. Specific numbers outperform vague claims.

**Capture:** Year founded, license numbers (if client approves public listing), Google review count and rating, project count, certifications.

**Important:** Verify any numbers before including. Do not include license numbers without client confirmation they are real and current.

---

### 6. Content Restrictions

> "Is there anything about your business you don't want publicly visible — pricing you'd rather keep offline, service areas you'd rather not advertise, or content you don't want indexed by AI tools?"

**Why this matters:** Some clients have competitive or legal reasons to limit what's publicly machine-readable. Knowing this upfront prevents implementing AI visibility for content that shouldn't be there.

**If restrictions exist:** Document them. Adjust which sections of `llms.txt` are populated. May reduce AI visibility tier from FULL to STANDARD or MINIMAL.

---

### 7. Differentiators

> "Why do customers choose you over competitors? What's something specific and true about your business that a competitor couldn't claim?"

**Why this matters:** The Differentiators section of `llms.txt` must contain specific, verifiable claims — not adjectives. "Family-owned since 1998" is a differentiator. "We're the best" is not.

**Capture:** Real differentiators: tenure, specializations, credentials, guarantees, local reputation, specific capabilities competitors lack.

---

### 8. Skip Conditions

Do not collect AI visibility data if any of the following are true:

- Client has explicitly declined AI visibility after being informed of what it means
- Client has legal/contractual restrictions (healthcare content, licensed professional liability concerns, employer restrictions on public AI training)
- Site is a single-page brochure with no substantive service content
- Client wants to launch before content decisions are finalized (flag: placeholder `llms.txt` on a live site is worse than no `llms.txt`)

In any skip case: document the reason, set AI visibility tier to MINIMAL (schema + sitemap only), and note that `llms.txt` and markdown mirrors are not implemented.

---

## Downstream Handoff

Once discovery answers are captured, pass to:

- `02-planning/ai-visibility-decision-rules.md` — to determine the AI visibility tier
- `17-feature-local-seo/llms-txt.md` — to populate `llms.txt` content
- `17-feature-local-seo/` schema files — to populate `LocalBusiness` and `FAQPage` schema
- `copy-structure/faq-format.md` — to write FAQ copy for service pages

Do not proceed to AI visibility implementation until discovery answers are captured. A partially complete `llms.txt` or schema with missing fields is a BLOCKER item in the pre-launch checklist.
