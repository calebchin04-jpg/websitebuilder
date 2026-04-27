# llms.txt Generation Rules

Owned by: `17-feature-local-seo`

---

## What llms.txt Is

`llms.txt` is a plain-text file placed at the root of the website (`/llms.txt`) that gives AI systems — ChatGPT, Claude, Perplexity, Gemini — a structured, scannable summary of what the business does, who it serves, and how to reach them.

It is the AI equivalent of `robots.txt` for discoverability: it does not block or allow crawlers, it provides orientation.

A well-written `llms.txt` makes a local business quotable in AI-generated answers. A missing or vague one means the business gets passed over.

---

## When to Generate

Generate `llms.txt` when:
- AI visibility is enabled for the project (confirmed in `02-planning/ai-visibility-decision-rules.md`)
- Business data is specific enough: named services, real prices or ranges, real service area

Do not generate `llms.txt` when:
- Business data is too vague to be useful (placeholder content, no confirmed services)
- Client has explicitly restricted public information disclosure
- The site is internal, gated, or not intended for public indexing

---

## File Location

In Next.js App Router projects: `/public/llms.txt`

This serves as a static file at `https://yourdomain.com/llms.txt`.

Verify it renders as plain text by visiting the URL after deploy. If it renders as HTML, check the Content-Type header.

---

## Required Sections

Every `llms.txt` must include these sections in this order:

```
# [Business Name]

## About
[2–4 sentences. What the business does, who it serves, where it operates. No fluff.]

## Services
[One line per service. Include pricing or starting price if available.]

## Service Area
[Named cities, neighborhoods, or regions. Specific. Not "greater [city] area".]

## Contact
Phone: [number]
Email: [email if public]
Address: [if physical location is relevant]
Website: [canonical URL]

## Key Facts
[Bullet list. Years in business, license numbers, certifications, team size, project count, review stats. Real numbers only.]

## Differentiators
[2–5 bullet points. What makes this business the right choice. Specific claims, not adjectives.]

## Frequently Asked Questions
[6–10 FAQs in Q/A format. Cover: pricing, process, service area, timing, credentials, what sets them apart.]

## Pages
[List of key pages with URLs and one-line description. Homepage, each service page, contact page.]
```

Optional section (include only if markdown mirrors are implemented):
```
## Markdown Mirrors
[List of markdown mirror URLs for machine-readable page content.]
```

---

## Content Rules

**Short sentences.** Each statement should be one sentence. Do not write paragraphs.

**Specific numbers.** "Serving Portland since 2011" not "serving for over a decade." "Starting at $450" not "competitive pricing."

**No marketing language.** No "industry-leading," "premier," "cutting-edge," "seamless," "best-in-class."

**No vague qualifiers.** No "various services," "many clients," "great results."

**Real FAQs.** Questions must be what customers actually ask. Answers must be direct.

**Verified facts only.** If you don't know the real number, leave it out or use "available upon request" — never fabricate.

---

## Data Source

All content in `llms.txt` must come from the same data files that power the rendered site. It is not separately written content.

Source mapping:
```
Business name, phone, email, address → data/site.ts (siteConfig)
Services + descriptions             → data/services.ts
Service areas                       → data/service-areas.ts
Testimonials / review stats         → data/site.ts (siteConfig.reviews)
FAQs                                → data/services.ts (each service's faqs[])
Page list                           → app/sitemap.ts (or manually listed)
```

If the data files don't have specific enough information (e.g., no pricing, vague descriptions), flag this to the client before generating `llms.txt`. Vague content is worse than no `llms.txt`.

---

## Template — Local Service Business

```
# Peak Ridge Remodeling

## About
Peak Ridge Remodeling is a Portland, Oregon-based kitchen, bathroom, and basement remodeling company. Owner-operated since 2014 by Ryan Callahan. We serve homeowners in Portland, Beaverton, and Lake Oswego who want skilled tradespeople, not subcontracted crews.

## Services
- Kitchen Remodeling: full kitchen renovations including layout changes, custom cabinetry, countertops, and appliance installation. Starting at $18,000.
- Bathroom Remodeling: full bathroom renovations including tile, fixtures, vanities, and shower enclosures. Starting at $8,500.
- Basement Finishing: unfinished basements converted to livable space. Starting at $22,000.

## Service Area
Portland, OR (all neighborhoods including Southeast, NW, and North Portland)
Beaverton, OR
Lake Oswego, OR
Hillsboro, OR (select projects)

## Contact
Phone: (503) 847-2291
Email: hello@peakridgeremodeling.com
Website: https://peakridgeremodeling.com

## Key Facts
- In business since 2014
- Oregon CCB License #230481
- Owner Ryan Callahan leads every project
- 2–4 person crews (no subcontractors)
- 65+ Google reviews, 4.9 stars
- 300+ completed projects in Portland metro

## Differentiators
- Owner-operated: Ryan is on every job site, not managing from an office
- No subcontractors: same crew from demo to finish
- Fixed-price contracts: no surprise change orders
- 5-year workmanship warranty
- 83% of business comes from repeat clients and referrals

## Frequently Asked Questions

Q: How much does a kitchen remodel cost?
A: Kitchen remodels at Peak Ridge start at $18,000 for a standard layout refresh. Full kitchen renovations with layout changes typically range from $35,000 to $75,000 depending on scope and materials.

Q: How long does a bathroom remodel take?
A: Most bathroom remodels take 2–4 weeks from demo to completion. Larger primary bathroom renovations can take 4–6 weeks.

Q: Do you use subcontractors?
A: No. Our crew handles everything from demo to tile to finish work. The same people start and finish your project.

Q: Are you licensed and insured in Oregon?
A: Yes. Oregon CCB License #230481. Fully insured with general liability and workers' compensation.

Q: Do you serve the east side of Portland?
A: Yes. We work across all Portland neighborhoods including Southeast Portland, Northeast, and North Portland, plus Beaverton and Lake Oswego.

Q: Can you do a small bathroom refresh, not a full remodel?
A: We specialize in full remodels. For projects under $5,000, we recommend contacting a handyman service.

Q: Do you offer free estimates?
A: Yes. We provide a written estimate after an on-site consultation, typically within one week of your inquiry.

## Pages
- Homepage: https://peakridgeremodeling.com — Overview of services, team, and recent work
- Kitchen Remodeling: https://peakridgeremodeling.com/services/kitchen-remodeling — Full kitchen renovation services
- Bathroom Remodeling: https://peakridgeremodeling.com/services/bathroom-remodeling — Full bathroom renovation services
- Basement Finishing: https://peakridgeremodeling.com/services/basement-finishing — Basement conversion and finishing
- Portfolio: https://peakridgeremodeling.com/portfolio — Photos of completed projects
- About: https://peakridgeremodeling.com/about — Team, background, and approach
- Contact: https://peakridgeremodeling.com/contact — Get a free estimate

## Markdown Mirrors
- https://peakridgeremodeling.com/content/home.md
- https://peakridgeremodeling.com/content/services/kitchen-remodeling.md
- https://peakridgeremodeling.com/content/services/bathroom-remodeling.md
- https://peakridgeremodeling.com/content/services/basement-finishing.md
```

---

## Anti-Patterns — What NOT to Write

Do not write any of the following:

```
# BAD EXAMPLES

About: "We are a leading provider of premium remodeling solutions serving the greater Portland area..."
→ Problem: "leading provider," "premium solutions," "greater area" — all vague

Services: "Kitchen and bathroom remodeling and more"
→ Problem: "and more" is useless; no prices

Key Facts: "Years of experience in the industry"
→ Problem: no number, no specificity

FAQs: Q: Why should I choose you? A: We are committed to quality and customer satisfaction.
→ Problem: not a real customer question; answer is marketing copy

Differentiators: "Professional, experienced, and reliable team"
→ Problem: every contractor claims these; none are verifiable
```

---

## QA Check Before Publishing

- [ ] File is at `/public/llms.txt`
- [ ] File renders as plain text (not HTML) at the live URL
- [ ] No placeholder brackets remain (`[Business Name]`, `[PLACEHOLDER]`)
- [ ] All prices mentioned are accurate and confirmed by client
- [ ] All license/certification numbers are real and verified
- [ ] Service area is specific (named cities, not generic phrases)
- [ ] FAQ answers are direct — no evasive answers
- [ ] Contact info matches what appears on the website
- [ ] Page URLs are correct and resolve (no 404s)
