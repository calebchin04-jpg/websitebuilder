# Common Failure Patterns

Reference this list when reviewing. These are the patterns most likely to be missed or softened in a QA review.

---

## Placeholder Content That Renders Publicly

**The most common blocker across all builds.**

Any placeholder text, token, or value that was written during development and never replaced before launch.

Examples that have appeared in real builds:
- License numbers: `CCB License #[PLACEHOLDER]`, `License #TBD`
- Names: `[Owner Name]`, `[Project Manager]`
- Phone numbers: `(555) 000-0000`
- Email addresses: `email@example.com`
- URLs: placeholder social links, review platform links
- Copy: `Lorem ipsum`, `[Project Description Here]`, `[Testimonial]`
- Addresses: `123 Main Street`

**How to catch it:** Search all data files and components for `[`, `TODO`, `PLACEHOLDER`, `example.com`, `555-`, and generic first/last names.

**Why it matters:** A homeowner who sees "CCB License #[PLACEHOLDER]" on a contractor's site will wonder if the business is actually licensed. A broken review link tells the user the review count is fabricated. These are trust-destroying at the exact moment credibility matters most.

---

## Hover-Dependent Interactions on Touch Devices

**The most common mobile failure.**

Any UI element that is hidden by default and revealed only on hover. On a touch device, hover never fires. The element is permanently invisible.

Common examples:
- Gallery captions: `translate-y-full group-hover:translate-y-0`
- Card overlay content: `opacity-0 group-hover:opacity-100`
- Additional context: `invisible group-hover:visible`

**How to catch it:** Search for `group-hover:` in components. For each result, ask: "If this never fires, does the user miss important content?"

**Fix pattern:** `[visible-class] md:[hidden-class] md:group-hover:[visible-class]` — always visible on mobile, hover-reveal on desktop.

---

## `aria-hidden` on Proof or Meaningful Content

**Kills accessibility for content that matters.**

`aria-hidden="true"` is correct for decorative elements (icons, dividers, visual flourishes). It is wrong for any content that carries information a screen reader user would need.

Examples of wrong `aria-hidden` usage:
- Caption overlays in galleries: proof text about project scope hidden from screen readers
- Step number badges: numbered sequence invisible to assistive technology
- Trust signal text: star ratings or review counts hidden as "decorative"

**How to catch it:** Search all components for `aria-hidden="true"`. For each instance, ask: "Does this element contain information, or is it purely decorative?"

---

## Social/Review URLs That Are Placeholders

**A subtle trust destroyer.**

When a site displays "4.9★ · 65+ reviews on Google" and links to a broken or wrong URL, the proof signal becomes a trust liability. The user clicks, lands nowhere, and questions whether the reviews are real.

Common patterns:
- Generic `g.co/kgs/` URLs that point to non-existent or wrong business profiles
- `https://www.houzz.com/[business-name]` without verifying the profile exists
- Instagram links that 404

**How to catch it:** Test every external URL in `siteConfig.social` and `siteConfig.reviews.platformUrl` by actually visiting them.

---

## Service Pages With No Inline Visual Proof

**Common trust gap for visual-proof businesses.**

For businesses where visual output matters (remodeling, landscaping, painting, photography, etc.), visitors on a service page are at the point of highest intent. If that page has no proof images for the specific service — only a hero and a text list — the conversion opportunity is weaker than it needs to be.

**How to catch it:** Load each service page and ask: "Can a user see an example of this specific work without navigating away?"

---

## Generic Headlines on Important Pages

**Easy to miss, high impact.**

"About Peak Ridge Remodeling," "Our Work," "Contact Us," "Services" — these headlines occupy prominent H1 or H2 positions and communicate nothing. They are missed because the page itself is functional and the content is fine. The headline looks fine until you realize it adds zero information.

**How to catch it:** Read every H1 and every major section H2. Ask: "Does this communicate something specific about this business, or could it appear on any website?"

---

## Category Imbalance in Filtered Content

**Creates false impressions about service depth.**

When a gallery or portfolio has 6 images for Service A, 6 for Service B, and 3 for Service C, filtering to Service C produces a sparse result that implies limited experience in that area — even if the business has done 60 projects in that category.

**How to catch it:** Check image counts per category in all gallery data. If any category has less than half the images of the highest category, flag it.

---

## Hardcoded Values That Should Be Data-Driven

**Creates future inconsistency risk.**

When a dynamic value (star rating, review count, year) is hardcoded in a component instead of reading from a central config, it falls out of sync when the underlying data changes.

Common examples:
- `StarRating rating={5}` instead of `siteConfig.reviews.rating`
- `© 2024` hardcoded instead of `new Date().getFullYear()`
- Review count written as copy instead of read from config

**How to catch it:** Search for numeric literals in display components that correspond to business data (ratings, counts, years).

---

## Missing `prefers-reduced-motion` Override

**Common accessibility omission for animated sites.**

Sites with scroll-triggered animations, fade-ups, or transitions must respect the user's operating system preference for reduced motion. Without it, users with vestibular disorders or motion sensitivity may experience discomfort.

**How to catch it:** Search `globals.css` and any animation utility files for `prefers-reduced-motion`. If absent, flag as moderate.

---

## Navigation Dead Ends

**Common in footer or breadcrumb navigation.**

JavaScript bugs, slice errors, or oversight can remove links from navigation structures without any visual error. The most common cause is `.slice()` or `.filter()` applied to nav arrays without realizing the removed items were meaningful.

**How to catch it:** Trace every nav array from its data source through any array operations to the rendered output. Verify no items are silently dropped.

---

## Redundant or Wrong Aria Roles

**Noise or misinformation for assistive technology.**

- `role="list"` on `<ul>` or `<ol>` is redundant but harmless
- `aria-label` on SVG without `role="img"` may not be announced
- `role="alert"` on static content fires too aggressively
- Missing `role="group"` on related form controls

**How to catch it:** Review aria attributes in all interactive and semantic components. For each one, ask: "Is this correct, redundant, or wrong?"
