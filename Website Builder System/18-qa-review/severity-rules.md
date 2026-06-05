# Severity Rules

## Classification Standards

Every issue logged in a QA review must be classified using exactly one of these severity levels. Do not soften major issues. Do not escalate minor issues.

---

## BLOCKER

A serious issue that should prevent launch, signoff, or client presentation.

**Apply BLOCKER when the issue:**
- Breaks a core conversion path (form submission, phone link, CTA)
- Renders misleading or false information publicly
- Reveals an unresolved placeholder that would appear on a live site
- Creates a major mobile usability failure that breaks a core flow
- Causes a severe accessibility problem in a core user path (form, navigation)
- Makes the site feel obviously unfinished or untrustworthy to a first-time visitor
- Represents a strategic mismatch that breaks the site's stated purpose

**BLOCKER examples:**
- Placeholder text rendering in the footer or page body (e.g., "CCB License #[PLACEHOLDER]")
- Broken form submission (server action not wired, validation not working)
- Gallery captions permanently invisible on mobile for a visual-proof-dependent business
- CTA button linking to a 404 page
- Core content section missing entirely
- Accessibility failure that makes a form or navigation unusable for keyboard/screen reader

---

## MAJOR

A meaningful issue that significantly weakens trust, UX, clarity, or conversion. Should be fixed before the site is considered ready.

**Apply MAJOR when:**
- Trust is meaningfully reduced (but not broken by a false claim)
- A conversion path exists but is weaker than it should be
- Social proof or contact information may be incorrect/non-functional
- Service or category proof is missing at a critical decision point
- Mobile experience is poor but not completely broken
- Content quality is significantly below the bar set by the rest of the site
- Design patterns undermine the business's intended premium positioning

**MAJOR examples:**
- Social/review URLs pointing to placeholder or unverified destinations
- Service pages with no inline gallery proof for a visual-proof business
- Homepage gallery with category imbalance that misrepresents service breadth
- About page headline that fails to communicate positioning when the content is strong
- Team or proof photos with unverified file paths that may 404

---

## MODERATE

A real issue that weakens the site but does not prevent it from functioning or being credible. Should be addressed in the revision cycle.

**Apply MODERATE when:**
- A navigation path is missing but alternatives exist
- A heading or label is generic when specific is possible
- An accessibility gap exists but does not block core flows
- A content section is weaker than the rest of the page
- A minor inconsistency reduces confidence without breaking anything
- A technical oversight (wrong prop, unused config) creates future risk

**MODERATE examples:**
- "All Service Areas" link silently removed from footer due to slice error
- About page headline is generic while subheadline is stronger
- Portfolio headline is filler when specific is available
- `prefers-reduced-motion` override not confirmed present
- Process step numbers aria-hidden removes sequential context

---

## MINOR

Polish-level issues. Fix when convenient; do not block revision or launch.

**Apply MINOR when:**
- A hardcoded value should be data-driven but the difference is cosmetic
- A redundant aria attribute adds noise but causes no harm
- An unused config entry exists but causes no user-facing issue
- A link text could be more descriptive but is functional as-is
- Copy could be marginally stronger but is not misleading

**MINOR examples:**
- Footer star rating hardcoded to 5 instead of using `siteConfig.reviews.rating`
- `role="list"` on `<ol>` is redundant
- Unused social URL in config
- Dynamic year in footer may be wrong at build time with static generation (acceptable risk)

---

## Anti-Sloppiness Rules

Every issue in the log must include:
1. **Issue title** — specific, not vague
2. **Location** — file path and line number when available
3. **Why it matters** — specific consequence, not generic concern
4. **Fix direction** — what needs to change, specific enough to act on
5. **Severity** — one of the four levels above

Do not write:
- "Improve UX" — not an issue
- "Make it more trustworthy" — not an issue
- "Tighten accessibility" — not an issue
- "Refine the design" — not an issue

Every issue must be actionable and specific.

---

## Acceptance Verdict Decision Tree

**PASS:** No blockers. No major issues. Moderate and minor only. Site is launch-ready as-is.

**PASS WITH MINOR REVISIONS:** No blockers. No major issues. A few moderate issues and minor polish items. Can launch after quick fixes.

**PASS WITH MAJOR REVISIONS:** No blockers. Major issues present that must be addressed before client presentation or launch. Architecture is sound.

**FAIL / SEND TO REVISIONS:** Blockers present. Site cannot launch. Fix blockers and return for re-review before advancing.

**FAIL / NOT READY FOR BUILD OR LAUNCH:** Fundamental strategic, structural, or content failures. Deeper correction cycle needed, not just a patch pass.
