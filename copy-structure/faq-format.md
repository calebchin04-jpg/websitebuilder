# FAQ Copy Format

Owned by: `copy-structure`

---

## Purpose

FAQs are the single most valuable content type for AI citation. When someone asks ChatGPT or Perplexity "how long does a kitchen remodel take?", the answer comes from a website that has already answered that question directly and specifically.

The goal of the FAQ section is not to fill a page with questions. It is to answer the specific questions real customers ask — directly, completely, and in plain language.

---

## Where FAQs Appear

- On each individual service page (required)
- On a dedicated FAQ page (if the site has one)
- In `llms.txt` (the FAQ section pulls directly from these)
- In `FAQPage` JSON-LD schema (structured for Google rich results)
- In markdown mirrors (for AI consumption)

All of these surfaces draw from the same FAQ content. Write it once; it feeds everything.

---

## How to Get Real FAQ Content

The best source is the client. In discovery, ask: "What are the 5–10 questions people ask you most often before they hire you?" Real customer questions are always better than invented ones.

Second best: common questions from review text, phone call patterns, or what the client says customers are always surprised to learn.

**Do not invent FAQs.** Made-up questions that nobody asks waste the section and dilute it for AI.

---

## Required FAQ Categories

Every service page FAQ section must cover at least these four areas:

### 1. Cost / Pricing

At least one question that addresses what this service costs.

Good: "How much does a kitchen remodel cost?"  
Bad: "What factors affect the price?"

The pricing question must have a real number or honest range in the answer. If the client won't share pricing, the answer must still say something more useful than "call us." Minimum acceptable: "Most Portland kitchen remodels range from $18,000 to $60,000 depending on scope. We provide free on-site estimates."

### 2. Timeline

At least one question about how long the work takes.

"How long does [service] take?" is always relevant. Give a real answer with a range.

### 3. Process / What to Expect

At least one question about how the job works.

"What happens after I contact you?" or "Do you handle permits?" or "What's included in your estimate?" — any of these count.

### 4. Credentials / Trust

At least one question about licensing, insurance, or qualifications.

"Are you licensed and insured?" — answer must be specific: "Yes. We are licensed in Oregon (CCB #180422) and carry $1M general liability and workers' compensation."

---

## Optional FAQ Categories (include if relevant)

- Service area: "Do you serve [neighboring city]?"
- Warranty / guarantee: "What warranty do you offer?"
- Availability: "How far in advance do I need to book?"
- Specific service mechanics: "Do you supply materials or do I?"
- Payment: "What payment methods do you accept? Do you offer financing?"
- Comparisons: "What's the difference between [service A] and [service B]?"

---

## Answer Quality Rules

**Rule 1: The answer must answer the question.**

Test: read the answer. Does it tell you the thing you asked about? If not, rewrite it.

Wrong:
> Q: How long does a kitchen remodel take?  
> A: Every project is unique. We'll give you a detailed timeline after our initial assessment.

Right:
> Q: How long does a kitchen remodel take?  
> A: Most kitchen remodels take 3–6 weeks from demo to final walkthrough. Larger projects with custom cabinetry may take 8–10 weeks, since custom cabinet lead times are typically 4–6 weeks.

**Rule 2: Do not redirect to "call us" for questions that have real answers.**

"Call us to discuss your project" is not an answer to "Are you licensed?" or "What service areas do you cover?" or "How does the process work?" Only use phone redirects for questions that genuinely require a site visit or custom quote.

**Rule 3: Use numbers when possible.**

Vague: "We've been in business for a long time."  
Specific: "We've been licensed and operating in Portland since 2009."

**Rule 4: Short is better than thorough.**

FAQ answers should be 2–5 sentences. They are not the place for comprehensive explanations. If an answer runs to 8+ sentences, consider whether it belongs on a dedicated page instead.

**Rule 5: Plain language only.**

No jargon. No marketing language. No hedging. Write like you're answering a question from a friend.

---

## Format

```md
## Frequently Asked Questions

### [Question in natural customer language]

[Direct answer. 2–4 sentences. Specific numbers where possible.]

### [Question]

[Answer.]
```

For JSON-LD schema, questions become `Question` entities and answers become `Answer` entities. The FAQ copy feeds this directly — no rewriting needed.

---

## Minimum Count

| Page Type | Minimum FAQ Count |
|---|---|
| Individual service page | 5 |
| Dedicated FAQ page | 10 |
| `llms.txt` FAQ section | 5 (can be a subset of service page FAQs) |

---

## FAQ Quality Checklist

- [ ] At least one pricing question with a real number or honest range
- [ ] At least one timeline question with a specific answer
- [ ] At least one process / what-to-expect question
- [ ] At least one credentials question (license, insurance)
- [ ] Every answer actually answers the question
- [ ] No answers that only say "call us" or "contact us for details"
- [ ] No invented questions that real customers wouldn't ask
- [ ] Answers are 2–5 sentences — not essays, not one-liners
- [ ] Plain language — no jargon or marketing-speak
