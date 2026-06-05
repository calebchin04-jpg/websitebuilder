# Services Layout Rules

This file defines layout options for each services surface, selection logic for choosing between them, mobile behavior requirements, and layout anti-patterns to avoid.

---

## Part 1: Homepage Service Section Layout Options

### Option A — Service Card Grid

**Structure:** 2–4 cards in a row. Each card contains a service name, a short description, and a link or CTA. Optional: an icon or small image.

**Use when:**
- The business has 3–6 primary services of roughly equal visual weight
- Services are distinct enough that each card communicates something different
- The audience needs to scan and self-sort across multiple options
- The design system supports a grid at the brand register

**Visual notes:**
- Cards should be clean and scannable — not feature-heavy
- Do not add icons unless they provide genuine visual differentiation (an icon of a wrench next to "Repair Services" adds nothing)
- Avoid overshadowed or heavily bordered cards unless the design system specifies card surface treatments
- Description text should be 1–2 sentences, not a paragraph

**Desktop:** 3-column grid for 3+ services; 2-column for 2 or 4 with wide padding; max 4 per row
**Tablet:** 2-column; reduce card density
**Mobile:** 1-column stacked list; cards should feel scannable, not cramped

---

### Option B — Service List with Lead Text

**Structure:** A section headline, 1–2 lines of lead framing text, then a structured vertical or two-column list of services with brief descriptions. No heavy card treatment.

**Use when:**
- The brand register is authoritative or editorial — card grids feel too casual
- The services are varied enough that equal-weight cards create false visual parity
- The homepage needs to signal depth without being a full services catalog
- Services have short names and brief, self-explanatory descriptions

**Visual notes:**
- Use clear typographic hierarchy: service name bold or slightly larger, description text in a lighter weight
- Horizontal dividers or generous whitespace between items, not card borders
- Optional small accent (thin left border, subtle bullet, or dash) to anchor each item

**Desktop:** Two-column list or full-width single column; left-weight alignment
**Mobile:** Single-column; remove any horizontal two-column treatment; ensure line spacing supports readability

---

### Option C — Service Category Strip with Links

**Structure:** A row of 2–4 named service categories, each with a short label, brief description, and a "Learn more" or "View services" link. More compact than a full card grid.

**Use when:**
- The business has a large service catalog that should be grouped rather than listed individually
- The homepage only needs to signal breadth and route visitors to deeper pages
- Space is limited and a full grid would feel heavy on the homepage
- The sitemap confirms dedicated service category pages exist

**Visual notes:**
- This is a routing section, not a content section — keep it tight
- Labels should be the primary visual element; descriptions are supporting only
- Use an arrow or subtle link treatment to signal navigation

**Desktop:** 3–4 columns or horizontal strip
**Mobile:** Stacked list; each category is a full-width touch target; arrows visible

---

### Option D — Featured Service Block + Secondary List

**Structure:** One primary service gets prominent featured treatment (larger, more copy, possibly an image or visual). A secondary list of supporting services appears below or beside it.

**Use when:**
- The business has one dominant service and 2–4 secondary services
- Equal card weighting would create false parity and weaken the primary offer
- The homepage needs to lead with the strongest thing and then show range without flooding the section
- The brand register allows moderate visual hierarchy differentiation

**Visual notes:**
- The featured block can carry a short headline, 2–3 sentences of description, a proof element, and a CTA
- The secondary list stays compact — name + one-liner only
- Visual contrast between featured and secondary is deliberate — do not let the secondary list compete

**Desktop:** Featured block left or top; secondary 2–3 items right or below in reduced weight
**Mobile:** Featured block first, full-width; secondary services as a compact stacked list below

---

## Part 2: Individual Service Page Structure

When a service gets its own page, the layout follows a structured sequence. Not every section is required — select the sections that the service genuinely needs.

**Required sections (every service page):**
1. **Page hero / section header** — service name, brief framing statement, primary CTA
2. **Service definition** — what it is, who it is for, what problem it solves
3. **Call to action** — available at least once mid-page and at the page bottom

**Optional sections (add only when the service needs them):**
- **Process or what to expect** — for services where the visitor's anxiety is about the unknown ("what happens when I call you?")
- **What is included / scope** — for services where scope confusion drives hesitation
- **Service variations or tiers** — for services with meaningfully different levels or types
- **Proof specific to this service** — a testimonial, case study, or before/after relevant to this service
- **Pricing block** — only when pricing helps, not when it would mislead (see `services-strategy-rules.md` Part 4)
- **FAQ block** — for services where objections or questions are predictable and important
- **Related services** — a compact row of related services to aid navigation
- **Local/area relevance note** — for geographically restricted services where the audience needs to confirm availability

**Layout structure:**
- Use clear heading hierarchy: H1 for service name, H2 for major sections, H3 for subsections
- Avoid wall-of-text sections — break content into digestible units
- CTAs appear at least twice: once after the definition section and once at the end
- On long pages, a sticky sidebar CTA or floating "Request a Quote" button is acceptable when the design system allows it

---

## Part 3: Service Comparison Block

A comparison block helps visitors self-sort when:
- The business offers tiered versions of the same service (basic / standard / premium)
- Two or more services address similar problems but at different price points or scopes
- A clear differentiator exists between options that will help the visitor choose

**When not to use a comparison block:**
- Services are unrelated to each other (comparing lawn mowing to tree removal is not useful)
- The visitor's situation determines which service they need, not a preference between tiers
- The business has only one real tier and "comparison" would feel forced
- The visual complexity of a comparison table would hurt more than it helps

**Comparison formats:**

**Three-column tier table (Basic / Standard / Premium or equivalent):**
- Use for service packages or tiers
- List 5–10 features or inclusions with checkmarks or short values
- Highlight the recommended tier visually
- Keep pricing honest (see `services-copy-rules.md`)

**Side-by-side option cards:**
- Use for 2–3 meaningfully different service options (not tiers, but alternatives)
- Each card has a name, description, best-for note, and CTA
- No feature matrix — just clear differentiation per card

**Mobile behavior for comparison blocks:**
- Three-column tier table: convert to stacked cards on mobile, one tier per card
- Side-by-side cards: stack vertically at mobile; ensure each card is a complete, self-contained decision unit
- Never require horizontal scrolling for comparison content on mobile

---

## Part 4: Pricing and Package Block

When pricing is included, the block should be structured for honest, scannable decision-making.

**Starting-at pricing block:**
- Service name + starting price + brief scope note ("starting at $X for [specific scope]")
- Include a note about what affects final price if relevant
- CTA: "Get a quote" or "Get exact pricing"

**Package block:**
- 2–4 named packages with a short description, what is included, and price (or "starting at")
- Recommended package is visually highlighted
- Each package has its own CTA
- Works best when the packages map to real audience situations ("For small yards" / "For large properties")

**Quote-first block:**
- Used when pricing is genuinely variable and a number would mislead
- Copy explains why pricing varies ("Every project is scoped to your specific needs")
- CTA leads directly to a quote form or phone call — do not let this become a dead end

**Mobile behavior:**
- Package blocks: stacked vertically on mobile, one card per row
- Ensure pricing is readable without zooming
- CTA must be full-width or clearly tappable on mobile

---

## Part 5: Mobile Behavior Summary

All services sections must be explicitly specified for mobile. Do not assume desktop layouts adapt gracefully.

**Homepage service section:**
- Card grids convert to single-column stacked cards
- Lists remain single-column with clear spacing between items
- Category strips become stacked full-width touch targets
- Description text stays on mobile — do not collapse it behind accordions unless the section has 6+ items
- CTA or "Learn more" link must be clearly visible and tappable (minimum 44px touch target)

**Individual service pages:**
- Process steps stack vertically — numbered steps remain visually distinct
- Optional sections (FAQ, scope, pricing) can use accordion on mobile to control page length
- Related services row converts to a horizontal scroll strip or stacked list
- Sticky sidebar CTA converts to a bottom-pinned CTA bar or inline CTA at end of section

**Service comparison blocks:**
- Tier tables become stacked cards — the comparison structure is preserved per card
- Horizontal scrolling for comparison tables is banned on mobile
- Highlight the recommended tier with a clear visual treatment that survives stacking

---

## Part 6: Services Layout Anti-Patterns

These patterns are banned. Check all outputs against this list before completing.

**1. Equal visual weight for unequal services**
Giving every service an identical card when they are not equally important. This creates visual noise, hides the business's actual strengths, and feels generic. Service hierarchy must be reflected in visual hierarchy.

**2. Icon-only differentiation**
Using an icon as the primary way to distinguish between service cards. If you remove the icons and the cards look identical, the icons are not doing useful work. Text, description, and naming carry the distinction.

**3. Card grid with 5+ items at equal weight**
A flat grid of 5, 6, or 7 equal service cards. This creates visual noise and forces the visitor to read everything to find their service. Group into categories or establish a featured/secondary hierarchy.

**4. Generic descriptions that could apply to any service**
"Our team provides exceptional [service name] with quality you can trust." This is filler. Every service description must say something that this business and this service specifically can claim.

**5. Pricing without scope context**
Showing a price with no scope note. "$500" with no description of what is included creates confusion and distrust. Pricing must always be accompanied by enough scope context to be honest.

**6. Comparison blocks that do not actually help the visitor choose**
Comparison tables where every tier is clearly inferior to the top tier, or where the features listed are so technical that the visitor cannot use them to make a decision. A comparison block must genuinely help the visitor identify which option fits their situation.

**7. "Learn more" as the only CTA on a service card**
If the goal is to generate leads, at least one CTA path per service card should lead to a conversion action — not just more content. "Get a quote" or "Call us" alongside "Learn more" is acceptable.

**8. Service pages with no clear outcome statement**
A service page that describes the process without ever saying what the visitor gets at the end. Every service page must include a clear statement of what success looks like for the customer.

**9. Accordion-heavy service sections on desktop**
Collapsing all service descriptions behind accordions on desktop to save space. On desktop, service descriptions should be visible. Accordions belong on mobile for space management, not on desktop as a design choice.
