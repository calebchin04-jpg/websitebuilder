# Gallery Strategy Rules

## Feature Verdict Criteria

### A — Full gallery is justified when:
- The business has visible transformation work
- Customers strongly judge quality visually before buying
- Project style or finish level matters to the buying decision
- Work examples reduce buying anxiety
- The business has enough real assets to support it (minimum 9 images across categories)
- The gallery can support service credibility or premium positioning

Strong full-gallery business types:
- Kitchen / bathroom / basement remodeling
- Landscaping and hardscaping
- Roofing, siding, exterior renovation
- Painting (interior and exterior)
- Flooring installation
- Custom cabinetry or millwork
- Dental / cosmetic clinics
- Salons, barbers, spas, med spas
- Photographers and videographers
- Home organizers
- Cleaning companies with visible results
- Interior design and staging
- Automotive detailing

### B — Lightweight proof strip is justified when:
- The business has some visual work but not enough for a full dedicated page
- A small strip of images within the homepage or service section is sufficient
- The primary trust mechanism is written proof (testimonials, case studies) rather than visual
- Examples: small law firm, accountant, IT support, tutoring

### C — Before-and-after only when:
- The business does transformation work but the before state is the primary proof point
- Examples: dental whitening, cleaning services, before/after renovation work when paired shots exist

### D — No gallery when:
- The business is advisory, consulting, or purely service-based with no visual output
- Visuals would be generic or misleading
- Too few real assets exist and stock photos would dominate
- Written case studies or testimonials are stronger proof for this audience
- Examples: financial advisors, therapists, SaaS companies, general contractors with no project photos

---

## Gallery Placement Logic

### Homepage gallery strip
Use when:
- The business has a dedicated portfolio/gallery page to link to
- The homepage needs a visual proof moment between services and social proof
- The business has 6+ real images to show at a quality level worth featuring

Do not use when:
- The homepage is already image-heavy (large hero, service card images)
- Image quality is inconsistent — a weak strip hurts more than it helps
- A featured case study or single strong proof moment would work better

### Service page inline gallery
Use when:
- Individual service pages exist for distinct service categories
- The business has 3+ real images per service to show
- Visitors on a service page need proof of that specific capability
- The page otherwise has no visual proof beyond the hero

Do not use when:
- The business only has generic "all-category" images
- Service pages would all show the same images
- Image count per service is below 3

### Dedicated gallery / portfolio page
Use when:
- The business has 12+ real images across categories
- Customers are likely to browse before deciding
- Category filtering is meaningful (3+ images per category)
- The sitemap already includes or implies a portfolio route

Do not use when:
- Image count is too low to justify a full page
- The business type doesn't warrant portfolio browsing behavior
- All gallery content is better served inline on service pages

---

## Complexity Thresholds

**Category filters:** Only add if every filterable category has 3+ images. Showing a filter that reveals 1–2 results sets a bad expectation.

**Lightbox:** Add only when:
- Image count exceeds ~30
- Image detail (tile pattern, custom work) is important at close range
- The implementation cost is justified by the user behavior it unlocks

At under 20 images, a 4/3 grid card is large enough to convey quality. Lightbox adds JavaScript complexity and mobile friction for minimal gain.

**Before/after slider:** Only when matched before/after image pairs exist. Do not use:
- If only after-state images are available
- If the before state is not meaningfully different
- If image alignment between before/after is poor
- If the interaction would frustrate mobile users

**Masonry layout:** Avoid for local service businesses. Masonry feels like an image dump. Uniform grid is cleaner, more credible, and easier to maintain. Use masonry only for creative/visual-first businesses (photographers, interior designers) where variety of image ratio is expected.

---

## Gallery Structure Defaults

### Image count guidance by placement
| Placement | Minimum | Target | Maximum before needing sub-pages |
|---|---|---|---|
| Homepage strip | 4 | 6 | 8 |
| Service page inline | 3 | 4 | 6 |
| Dedicated gallery page | 9 | 15–18 | 30 (add lightbox above this) |

### Category balance rule
No category should have more than 2× the image count of another category that is shown in the same filtered gallery. A 6/6/3 split (kitchen/bathroom/basement) is acceptable but should be flagged. A 10/10/2 split makes the underrepresented category look weak.

### CTA placement
Every gallery section and page must end with a clear CTA. Options:
- "Get a Free Estimate" → `/contact` (primary conversion)
- "See All Our Work" → `/portfolio` (internal link from homepage strip)
- Both as a dual CTA (primary + secondary) on the dedicated portfolio page

A gallery without a next action is a dead end.
