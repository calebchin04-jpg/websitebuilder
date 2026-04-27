# Anti-AI Design Rules

This file defines the visual patterns that make a website look AI-generated, templated, or mass-produced — and why each one hurts the site's goals. Run this as a final check before any design system is approved.

The fundamental problem with AI-generated visual design is not that it looks "digital" — it is that it looks **generic and low-trust**. A visitor cannot articulate why a site looks fake, but they feel it immediately, and it costs conversions.

---

## The Anti-AI Design Check

Before finalizing the design system, check every decision against this list. If any of the following patterns appear without explicit strategic justification, revise them.

---

## Banned Patterns (Default)

### 1. Gradient everything

**Pattern:** Multiple gradient backgrounds across hero, sections, cards, and buttons. Especially blue-to-purple, purple-to-pink, teal-to-green "tech" gradients applied broadly.

**Why it's risky:** This is the most recognizable AI-generated or template design signal. It communicates "this was made quickly with a tool, not designed intentionally." For trust-sensitive businesses, it actively undermines credibility.

**What to do instead:** Use flat colors or very subtle gradient overlays on photography only. If a gradient is used, use it on one element, once — not as a system pattern.

---

### 2. Glassmorphism overuse

**Pattern:** Frosted-glass panels, blur-behind-content cards, semi-transparent overlays with `backdrop-filter: blur()` applied to UI components.

**Why it's risky:** Looks visually complex but functionally reduces readability. Signals trend-following over communication intent. Creates accessibility failures on variable backgrounds.

**When acceptable:** A single hero overlay with subtle blur on a photo background — if it genuinely improves contrast and readability.

**What to do instead:** Use opaque surfaces with subtle shadows. Transparency without purpose is just noise.

---

### 3. Neon or oversaturated tech palettes for non-tech businesses

**Pattern:** Bright cyan, neon purple, electric blue, hot pink — used as primary or dominant colors for a plumbing company, medical practice, or local retail business.

**Why it's risky:** The audience will not recognize the brand visually as belonging to its category. Trust cues in the color are broken. The visual register mismatch reduces confidence.

**When acceptable:** Only when the brand identity explicitly uses these colors with cultural and strategic rationale (e.g., a nightlife brand, a gaming studio).

---

### 4. Blob shapes and floating abstract backgrounds

**Pattern:** Large organic SVG shapes, "paint splash" backgrounds, abstract floating colored objects behind content, amorphous background decorations.

**Why it's risky:** These are so widely used in AI-generated templates that they have become a negative signal. They communicate "this was not designed, it was generated." They add no trust, no meaning, and no clarity.

**What to do instead:** Use photography, solid color backgrounds, subtle texture, or clean section separation. A well-structured site doesn't need decorative blobs.

---

### 5. Excessive border radius on everything

**Pattern:** 20–40px+ rounded corners on cards, buttons, sections, images, and containers. "Pill"-shaped containers for non-pill content. Everything rounded as a style choice rather than a functional one.

**Why it's risky:** Creates an overly playful visual tone that does not match trust-sensitive service businesses. Signals template design (many templates default to heavy rounding).

**What to do instead:** Use conservative radius (4–10px on components) with a consistent rule. Round images only when the crop format calls for it.

---

### 6. Icon rows that mean nothing

**Pattern:** Rows of 4–6 generic icons (clipboard, lightbulb, gear, shield, checkmark, star) with vague labels like "Quality," "Reliability," "Innovation," "Trust."

**Why it's risky:** This pattern is immediately recognizable as filler. It communicates "we had nothing real to say here, so we used icons." No visitor has ever converted because of a generic icon grid.

**What to do instead:** If icons are used, they should represent specific, distinct services or specific features — not abstract values. Real proof (reviews, before/after, specific results) replaces icon rows better than better icon rows would.

---

### 7. Template-looking card grids

**Pattern:** 3-column grids of identically-structured cards with: header image, icon, short headline, 2 sentences of filler text, and a "Learn More" link — on every section.

**Why it's risky:** This is the most recognizable structural template pattern. It signals a WordPress starter theme or a landing page builder with no customization. Visitors process it as "this is a template, not a real business."

**What to do instead:** Use cards where cards genuinely make sense (service options, testimonials, team members). Vary the visual treatment intentionally when mixing content types. Not every section needs to be a card grid.

---

### 8. "Stats section" with made-up or generic numbers

**Pattern:** "500+ Projects Completed," "100% Satisfaction Rate," "15 Years Experience," "200+ Happy Clients" — displayed in a large grid of numbers with no context or proof.

**Why it's risky:** Visitors have become deeply skeptical of unverifiable stat sections. They've seen them on every generic site and assume they are made up. If the stats are real and verifiable, this section works. If they are vague or impossible to verify, it actively reduces trust.

**What to do instead:** Use stats only when they are real, specific, and provable (e.g., "47 Google reviews at 4.9" is more trustworthy than "200+ satisfied customers"). Otherwise replace with real testimonials or before/after proof.

---

### 9. Hero sections with full-bleed stock photography of smiling generic people

**Pattern:** Hero with a large photo of diverse happy people in a generic office, a generic handshake, or a vague "professional success" scene that has nothing to do with the actual business.

**Why it's risky:** Visitors immediately know it is stock photography. It communicates inauthenticity. For local or personal-service businesses, it directly undercuts the trust built by real reviews.

**What to do instead:** Use the actual business owner, actual work, actual before/after results, or an abstract/textual hero treatment. A well-designed hero with no photo beats a generic stock photo hero for trust.

---

### 10. Every section has its own accent color

**Pattern:** Each section uses a different color accent — green section, then blue section, then orange section — creating a rainbow effect down the page.

**Why it's risky:** Destroys visual cohesion and brand legibility. Creates the impression of a PowerPoint presentation, not a professional website.

**What to do instead:** Define 2–3 section background tones from the same palette family. Use color to create rhythm, not variety.

---

### 11. Shadows on every element

**Pattern:** Cards, sections, buttons, images, nav bars, and headers all have visible drop shadows, often at different depths.

**Why it's risky:** Shadows create visual depth and hierarchy — but only when used intentionally and sparingly. When everything has a shadow, the depth hierarchy collapses and the page feels heavy.

**What to do instead:** Shadows for floating/elevated components only (modals, dropdowns, cards on white backgrounds). Use surface color variation for section separation.

---

### 12. Animations stacked and triggered on every element

**Pattern:** Every paragraph, every icon, every card, every heading, and every button has its own scroll-triggered entrance animation. The page becomes a motion-heavy experience.

**Why it's risky:** Masks content with distraction. Slows perceived performance. Creates accessibility problems. And — signals that the designer used animation to make up for weak visual design.

**What to do instead:** Animate intentionally — hero entrance, one or two section transitions maximum. Let content be the experience.

---

### 13. Fake product UI / dashboards as decorative elements

**Pattern:** Floating "app UI" mockups, dashboard screenshots, or product interface graphics used as decorative hero elements — even when the business is not a software product.

**Why it's risky:** Only makes sense for SaaS products. Using it for a plumber, salon, or consultant creates a fundamental brand mismatch and suggests the design template was recycled from a SaaS product.

**What to do instead:** Use photography, real work samples, or a clean type-forward layout.

---

## Anti-AI Checklist

Before finalizing the design system, confirm:

- [ ] No multi-stop gradients across large surfaces
- [ ] No glassmorphism on content-carrying components
- [ ] No neon/oversaturated palette for trust-sensitive businesses
- [ ] No blob/organic shape backgrounds
- [ ] Border radius is conservative and consistent (not pill-everything)
- [ ] Icon rows are specific and content-driven, not abstract-value filler
- [ ] Card structures vary intentionally across section types
- [ ] Stats section uses only real, specific, verifiable numbers — or is omitted
- [ ] Hero photography is real, business-relevant, not generic stock
- [ ] Section colors follow a 2–3 tone system, not a per-section palette
- [ ] Shadows are used sparingly, with consistent depth logic
- [ ] Animations are minimal, purposeful, and respect reduced motion
- [ ] No SaaS product UI decorations on non-product businesses

If any of the above are checked as violations, revise the relevant design system section before outputting.
