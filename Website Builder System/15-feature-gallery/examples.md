# Examples

---

## Example 1 — Peak Ridge Remodeling (Local Home Services / Renovation)

**Business:** Peak Ridge Remodeling — Portland, OR. Kitchen, bathroom, and basement remodeling. 300+ completed projects, 65 Google reviews, 4.9★. High-ticket ($12k–$80k+), local Portland metro, in-home estimate model.

**Questions asked:**
1. Before/after assets → Unknown — treat as unavailable
2. Service page gallery → Embed 3–4 photos per service page

---

### 1. Feature Verdict

**A — Full gallery is justified.**

Remodeling is one of the strongest use cases for visual proof. Homeowners at $12k–$80k+ are highly visual — they need to see style, finish quality, and scope range before calling. The business has 300+ real projects, three distinct service categories, and enough asset depth to support a full gallery. Gallery is a primary trust mechanism here, not decoration.

---

### 2. Critique of Upstream Inputs

**Correct:**
- Dedicated `/portfolio` page with category filtering exists
- Homepage gallery strip with CTA to portfolio exists
- `GalleryGrid` is a reusable component — good architecture
- 15 portfolio images with 3-category structure
- Alt text describes work at a baseline level

**Weak or wrong:**

- **Caption visibility on mobile is broken.** `translate-y-full group-hover:translate-y-0` means captions are permanently invisible on touch devices. This is a significant trust gap — captions are the proof labels.
- **Caption copy is too weak.** "Open-concept kitchen, Portland" describes almost nothing. No scope, no challenge, no result.
- **Captions are `aria-hidden="true"`.** Proof content is hidden from screen readers.
- **Service pages have no gallery.** A homeowner on the kitchen page sees no kitchen project proof beyond the hero.
- **Basement is underrepresented.** 6 kitchen / 6 bathroom / 3 basement — basement leads see half the proof density.
- **Portfolio headline "Our Work" is filler.**
- **Data inconsistency:** Homepage uses `type` key, portfolio uses `category` — same data shape should use the same key.

---

### 3. Role of Visual Proof

Gallery must answer:
- "Is the quality actually good?" — finished project photos, close enough to show tile work and cabinet reveals
- "Have they done my kind of project before?" — category filtering answers this directly
- "Is their style relevant to me?" — style range across the grid lets homeowners self-identify
- "Are these real local Portland homes?" — location context in captions builds authenticity
- "Can I trust them in my home?" — consistent quality across images reduces risk perception

If the gallery were removed, the site would rely entirely on testimonials and written claims for proof. For a $30k–$80k sale, visual proof is not optional.

---

### 4. Ownership Boundaries

This agent owns: gallery sections, portfolio page, service page inline proof, caption copy, mobile behavior, asset requirements, image grouping.

Not owned here: hero images (part of hero agent), testimonials (separate agent), sitemap changes (already locked), image storage/upload (agent 09).

---

### 5. Recommended Gallery Strategy

**Three-tier structure:**

1. **Homepage proof strip** — 6 curated images, no filters, CTA to portfolio. Balanced 2/2/2 across categories.
2. **Service page inline gallery** — 3–4 category-filtered images per service page, reusing `GalleryGrid`. Placed after scope/benefits, before testimonials.
3. **Dedicated /portfolio page** — 15 images (target 18+), category filters, CTA to contact.

**Omitted:**
- Before/after slider — no assets available
- Lightbox — not justified at 15 images; adds friction without proportional gain
- Masonry layout — uniform 4/3 grid is cleaner and more credible for a trades business
- Hover-only captions — broken on mobile, being fixed

---

### 6. Placement Strategy

- **Homepage strip:** Keep. After differentiators, before process steps. 6 images, no filters.
- **Service pages:** Add. After scope/benefits section. 3–4 filtered images per service.
- **Portfolio page:** Keep. Full 15-image grid with category filters.
- **About page:** No gallery. People/trust content — gallery would dilute it.
- **Service area pages:** No gallery. SEO pages — not a proof-browsing context.

---

### 7. Gallery Structure Specification

**Homepage strip:**
- 6 images: 2 kitchen / 2 bathroom / 2 basement (rebalance from current 3/2/1)
- No filters, no heading needed (section already has "Our Work" heading)
- CTA: "View Full Portfolio" → `/portfolio`
- Captions: persistent on mobile

**Service page inline gallery:**
- 3–4 images matching service category
- Small heading: "Recent [Service] Projects"
- No filters
- CTA: "See All Our Work" → `/portfolio` (secondary) + "Get a Free Estimate" → `/contact` (primary)
- On mobile: 1-column stacked or 2-column 2×2 grid

**Portfolio page:**
- 15 images (target 18+ as assets grow)
- Filters: All / Kitchens / Bathrooms / Basements
- Hide "Basements" filter or show count ("Basements (3)") until 6 basement images exist
- CTA: "Get a Free Estimate" → `/contact`
- No lightbox at current count

---

### 8. Before-and-After Slider Specification

Not applicable. Before/after assets are unavailable. Do not build a placeholder version. If matched B&A pairs become available in future, implement using the rules in this folder.

---

### 9. Asset Requirements

| Category | Current | Minimum | Target |
|---|---|---|---|
| Kitchen | 6 | 4 | 6 |
| Bathroom | 6 | 4 | 6 |
| Basement | 3 | 4 | 6 |
| Service heroes | 3 (1 per service) | 1 each | 1 each |

**Flag to client:** Basement category is at 3 images. Prioritize getting 3 more real basement project photos. Until then, the basement filter tab should show a count label.

Format: JPEG 80–85% or WebP. Minimum 1200×900px. Landscape preferred. No stock photos.

---

### 10. Content and Caption Rules

**Formula:** `[Scope or feature] — [City], [optional trust detail]`

**Revised captions for existing portfolio images:**

| Image | Current (weak) | Revised (stronger) |
|---|---|---|
| kitchen-1 | "Open-concept kitchen, Portland" | "Open-concept kitchen with island addition — Portland" |
| kitchen-2 | "Custom cabinetry, Lake Oswego" | "White shaker cabinetry with quartz counters — Lake Oswego" |
| kitchen-3 | "Island addition, Beaverton" | "Kitchen island addition with pendant lighting — Beaverton" |
| kitchen-4 | "Galley kitchen renovation, Portland" | "Galley kitchen: new cabinetry, tile backsplash — Portland" |
| kitchen-5 | "Transitional kitchen, Portland" | "Dark cabinetry with brass fixtures — transitional style, Portland" |
| kitchen-6 | "Farmhouse style, Portland" | "Farmhouse kitchen with butcher block counters — Portland" |
| bathroom-1 | "Master bath, Lake Oswego" | "Master bath: walk-in tile shower, frameless glass — Lake Oswego" |
| bathroom-2 | "Spa bath, Portland" | "Spa bathroom with freestanding tub and custom tile — Portland" |
| bathroom-3 | "Guest bath, Beaverton" | "Guest bath with hex tile floor and new vanity — Beaverton" |
| bathroom-4 | "Double vanity, Portland" | "Primary bath with double vanity and soaking tub — Portland" |
| bathroom-5 | "Custom tile, Portland" | "Shower niche with zellige tile and linear drain — Portland" |
| bathroom-6 | "Kids bath, Lake Oswego" | "Kids bathroom with subway tile and built-in bench — Lake Oswego" |
| basement-1 | "Home office, Portland" | "Finished basement: home office with egress window — Portland" |
| basement-2 | "Entertainment basement, Beaverton" | "Basement entertainment room with wet bar — Beaverton" |
| basement-3 | "Guest suite, Lake Oswego" | "Basement guest suite with full bath — Lake Oswego" |

**Portfolio headline:** Change from "Our Work" to "Portland Remodeling Portfolio" or "300+ Projects Across Portland."

---

### 11. UX / Accessibility / Performance Rules

**Caption fix (most important):**
```tsx
// Replace in GalleryGrid.tsx:
'translate-y-full group-hover:translate-y-0',

// With:
'translate-y-0 md:translate-y-full md:group-hover:translate-y-0',
```

**Remove aria-hidden:**
Remove `aria-hidden="true"` from the caption `<div>`. Captions contain proof information and must be screen-reader accessible.

**Sizes prop:** Already correct — keep `"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`.

**Priority prop:** Add `priority` to the first 2 images in the homepage strip for LCP performance.

**Filter buttons:** Already use `aria-pressed` and `role="group"` — keep these.

---

### 12. Design Constraints

- Maintain 4/3 aspect ratio for all gallery cards
- Caption overlay: `bg-gradient-to-t from-text-primary/80 to-transparent` — correct, keep
- Caption text: `text-fine text-text-inverse font-medium` — correct, keep
- Filter pills: `bg-primary text-text-inverse` for active, `bg-surface border-border` for inactive — keep
- Card border radius: `rounded-xl` — consistent with design system, keep
- Hover scale: `group-hover:scale-[1.04]` — appropriate, keep

---

### 13. Implementation Notes

**Three things to change:**

1. **Caption mobile fix** in `GalleryGrid.tsx` — one CSS class change (see Section 11)
2. **Remove `aria-hidden`** from caption div in `GalleryGrid.tsx` — one attribute removal
3. **Service page inline gallery** — add `serviceGallery` array to each service in `data/services.ts`, render `<GalleryGrid showFilters={false}>` on service pages

**Data changes:**
- Update all 15 captions in `data/pages/portfolio.ts` (see Section 10 table)
- Add `serviceGallery` field to `data/services.ts` for each service (3–4 images per service)
- Unify `type` vs `category` key between `data/pages/home.ts` and `PortfolioImage` type
- Update `portfolioPage.headline` in `data/pages/portfolio.ts`

**Component:** `GalleryGrid` already supports `showFilters={false}` and all needed props. No new component needed for service page galleries.

---

### 14. Risks and Failure Modes

- **Hover-only captions on mobile** — already present, must be fixed before launch
- **Weak captions** — current captions are location tags with no scope. Low cost to fix, high proof value.
- **Stock photo contamination** — if any placeholder images are not replaced before launch, trust collapses
- **Basement underrepresentation** — 3 images makes the category look thin. Flag to client.
- **No CTA after service page gallery** — the inline gallery section must end with a clear next action
- **`aria-hidden` on captions** — accessibility issue, must be fixed

---

### 15. Final Handoff

**Implementing agent must:**

1. Fix caption visibility: `translate-y-0 md:translate-y-full md:group-hover:translate-y-0` in `GalleryGrid.tsx`
2. Remove `aria-hidden="true"` from caption div in `GalleryGrid.tsx`
3. Add `serviceGallery` arrays to `data/services.ts` and render inline `<GalleryGrid>` on each service page
4. Update all 15 captions in `data/pages/portfolio.ts` per the revised copy table
5. Unify `type` → `category` key inconsistency between homepage and portfolio data

**Flag to client:** Need 3 more basement project photos to balance the portfolio filters.

**No escalations to 09** — image handling uses Next.js `<Image>` with local public directory. No storage changes required for this implementation.
