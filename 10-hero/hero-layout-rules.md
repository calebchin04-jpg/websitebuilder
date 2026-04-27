# Hero Layout Rules

This file defines the four hero layout options, how to select between them, media direction rules, mobile behavior requirements, trust/proof placement logic, and the layout anti-patterns to avoid.

---

## Part 1: The Four Hero Layout Options

### Layout A — Split (Text Left / Media Right)

**Structure:** Left half is text column (headline, subheadline, CTA, trust line). Right half is media (photography, illustration, or video still). Approximately 50/50 or 55/45 split.

**Use when:**
- Real, compelling photography of the work or the founder is available
- The brand register is approachable to mid-range
- The business type benefits from showing a human face (home services, medical, personal care)
- The wireframe specifies a two-column hero layout

**Visual weight balance:**
- Text column carries the message — do not let the image overwhelm it
- Image should have clear focal point that doesn't compete with headline reading
- High-contrast text area is required — never place light text over a busy photo without an overlay or distinct background

**Desktop:** Side-by-side columns within a max-width container
**Tablet (md):** Maintain split if possible, reduce text size; acceptable to stack at 768px if image becomes too small to carry meaning
**Mobile:** Single column — text first, image second (cropped to landscape or square aspect ratio)

---

### Layout B — Centered (Text Over / Under Media)

**Structure:** Text is centered horizontally over or below a background image or color field. Headline is the dominant visual element. Image is full-width background.

**Use when:**
- The photography is exceptional quality and the visual atmosphere it creates is central to brand perception
- The brand register is premium, editorial, or lifestyle-oriented
- The business sells an experience as much as a service
- High design intent is specified in `06-design-system`

**Visual weight balance:**
- Background image must not compete with text legibility — a scrim, overlay, or color field is often required
- Headline must be the visual anchor — large, high-contrast, in a readable position
- Do not use centered layout if the photography is generic or stock — it will highlight the weakness

**Desktop:** Full-width image, text centered in safe zone (typically upper-center or centered vertically)
**Tablet:** Same approach, check text size and overlay adequacy
**Mobile:** Background image often crops poorly — specify exact crop or fallback to solid brand color background on mobile

---

### Layout C — Media-Forward (Full Bleed, Minimal Text)

**Structure:** Image or video fills the entire hero viewport. Text overlay is minimal — typically headline + CTA only. Trust/proof signals go in micro-zone below.

**Use when:**
- The visual output of the work is the primary proof signal (landscaping, interior design, photography portfolios, before/after transformations)
- The brand register is editorial or premium and visual impact is the primary first impression
- Strong, specific photography is confirmed available — this layout fails catastrophically with generic stock imagery

**Visual weight balance:**
- Text must be minimal and high-contrast — maximum 8 words in headline
- CTA must be clearly visible against the image — use a button with solid background, not ghost/outline style
- Avoid any decorative text — each word must earn its presence

**Desktop:** Viewport-height image, fixed text position in safe zone
**Tablet:** Same
**Mobile:** Critical consideration — full-bleed hero images often lose meaning when cropped to portrait. Specify an alternate mobile crop or a fallback solid-color-with-overlay treatment. Do not let a wide landscape photo crop to an unrecognizable slice on a phone screen.

---

### Layout D — Type-Only (No Photography)

**Structure:** Headline and supporting text are the visual anchors. No photography. Background is a brand color, gradient (if design system permits), or neutral surface. Typography is the design.

**Use when:**
- No compelling photography is available and the project cannot afford to wait for a shoot
- The brand direction explicitly calls for a minimal, editorial, or type-forward aesthetic
- The design system specifies a typography-led visual register
- The business type is service-abstract (consulting, legal, financial) where showing "work" is not straightforward

**Visual weight balance:**
- Headline must be significantly larger than on media-based layouts — it carries all the visual work
- Color, spacing, and weight contrast are the only design levers — apply the type scale from `06-design-system`
- A single subtle background texture or surface treatment from the design system is acceptable; full gradients are not unless explicitly specified

**Desktop:** Full-width, vertically centered text block or left-aligned with right-side whitespace
**Mobile:** Reduce headline size, maintain clear visual hierarchy — type-only layouts often translate better to mobile than photo-based ones

---

## Part 2: Layout Selection Logic

Work through this checklist in order:

1. **Is strong, specific photography confirmed available?**
   - Yes → layouts A, B, or C are viable
   - No → Layout D (type-only) or Layout A with a placeholder instruction and escalation flag

2. **What is the visual register from `06-design-system`?**
   - Approachable → prefer Layout A (split with real human face)
   - Premium/editorial → prefer Layout B or C
   - Minimal/type-forward → prefer Layout D

3. **Does the wireframe PRD specify a layout direction?**
   - Yes → follow it unless it conflicts with brand register or photography availability
   - No → apply rule 1 and 2 above

4. **Does the hero's primary proof strategy depend on visual evidence?**
   - Before/after transformation → Layout A with before/after in media half, or Layout C
   - Founder/personal trust → Layout A with founder photo
   - Credential/authority → Layout B centered or Layout D with credential strip
   - Volume reviews → Any layout; proof goes in trust line or micro-zone

---

## Part 3: Media Direction Rules

For every layout that uses photography or imagery, specify the following:

**Subject direction:**
- What should the primary subject be? (founder at work, finished project result, interior environment, team, product detail)
- Specific composition notes: e.g., "Marcus in foreground, cleaned driveway visible behind" or "Before/after pairing: driveway before on left, same driveway after on right"

**Tone direction:**
- Lighting: bright natural light vs. moody atmospheric vs. clinical clean
- Color temperature: warm vs. neutral vs. cool — must match design system color register
- Setting authenticity: real location vs. styled environment

**Technical requirements:**
- Minimum dimensions: hero images must be at least 1600×900px source
- Format: JPG for photography (WebP served via `next/image`)
- Mobile crop: specify if different from desktop crop

**No-photography fallback:**
If photography is unavailable or unconfirmed, specify:
1. Type-only background using design system primary or neutral color
2. Asset requirement note in Section 8 (Asset Requirements): photography needed before Phase 4 Polish

**Never use generic stock photography** as a confirmed hero image. A placeholder direction ("real founder photo, location: Austin job site") is better than "use a stock photo of a smiling professional."

---

## Part 4: Mobile Behavior Rules

Every hero output must include explicit mobile specifications. "It will stack on mobile" is not a specification.

**Required mobile decisions:**

1. **Layout adaptation:** How does the desktop layout change?
   - Split (A): text column stacks above image
   - Centered (B): maintain centered text; specify mobile background behavior (retain image with overlay? switch to color background?)
   - Media-forward (C): specify mobile crop or fallback treatment
   - Type-only (D): specify if any layout changes are needed

2. **Headline size at mobile:**
   - From the type scale in `06-design-system` — specify the mobile token (e.g., "text-3xl on mobile, text-5xl on desktop")
   - Never use a headline so long it wraps to 4+ lines on a 375px screen

3. **CTA behavior at mobile:**
   - Full-width button on mobile (`w-full`) is standard for approachable/service brands
   - Contained-width at approachable desktop, full-width on mobile
   - Premium/editorial brands: contained width even on mobile — do not force full-width if design system specifies otherwise

4. **Micro-zone at mobile:**
   - Review count strip: single line, centered — confirm text fits without wrapping
   - Logo row: reduce to 3–4 logos, centered, or convert to a scrollable strip
   - Proof statement row: stack vertically if horizontal version breaks, or reduce to 2 statements

5. **Trust/proof line at mobile:**
   - Must be visible without scrolling — place above or immediately below CTA
   - Reduce font size if needed but never below minimum readable size

---

## Part 5: Trust/Proof Placement Logic

**Above the headline:**
- Only for brand-critical trust signals that are the primary differentiator (e.g., "Texas Licensed & Insured" for a contractor in a regulated market)
- Use sparingly — above-headline placement implies the trust signal is more important than the headline, which is rarely true

**Below the subheadline, before the CTA:**
- Review count + star rating: if this is the primary proof strategy, placing it above the CTA increases CTA conversion
- Specific outcome claim: works here as a "reason to believe" before the ask

**Below the CTA:**
- Trust line, guarantee statement, or risk reducer: "No contract required · Satisfaction guaranteed"
- Appropriate for reducing friction after the CTA, not for driving attention to the CTA

**In the micro-zone:**
- Comprehensive proof display: full review strip, logo row, or credentials row that would clutter the hero if placed inside it
- Secondary proof signal: if the hero already carries one proof type, the micro-zone carries a complementary type

**Never:**
- Place proof content in the media half of a split layout (it competes with the image for visual priority)
- Place proof content in decorative badges floating over photography (see anti-patterns)

---

## Part 6: Hero Layout Anti-Patterns

These patterns are banned. Check all outputs against this list before completing.

**1. Generic stock photography as hero image**
A smiling stranger in business casual, a generic cityscape, a hands-shaking boardroom shot. These signal a lack of real investment and undermine trust. If real photography is unavailable, use a type-only layout and flag the photography requirement.

**2. Text illegibility over photography**
White text directly over a complex, light, or mid-tone photograph without an overlay. If you specify a media-based layout, you must also specify the text legibility solution: dark overlay, color scrim, text on separate surface, or outline/shadow treatment.

**3. CTA buried below the fold**
The primary CTA must be visible without scrolling on desktop and mobile. If the hero content is long enough to push the CTA below the fold on mobile, shorten the copy or reduce padding.

**4. Trust signal overload**
More than two distinct proof signals in the hero proper (not counting the micro-zone). Trust overload reads as anxiety, not confidence. One primary proof signal inside the hero; one micro-zone if needed. No more.

**5. Auto-play video as hero background**
Full-bleed auto-play video backgrounds are banned by the animation rules in `06-design-system`. They increase page weight, cause accessibility problems, and the motion is distracting. Use a video still as a static image, or specify a poster frame with an optional play button.

**6. Floating badge decoration**
Trust badges, review stars, guarantee seals, and certification logos floating as decorative elements over the hero image. These read as clip-art and reduce credibility. Place trust signals in structured zones (trust line, micro-zone) — not as floating decoration.

**7. Two-column text within the text column**
Placing multiple text blocks side-by-side inside the text column of a split layout. This fragments hierarchy and creates reading confusion. Keep the text column linear: headline → subheadline → CTA → trust line, top to bottom.
