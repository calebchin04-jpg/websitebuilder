# Output Template

Use this structure for every QA report. Do not skip sections.

---

## 1. Review Scope

State:
- What artifact was reviewed (PRD / wireframe / design / coded prototype / near-final build / launch candidate)
- What upstream materials were available
- Which review mode applies (MODE 1 / 2 / 3)
- What could and could not be verified

---

## 2. Overall Verdict

State:
- The acceptance verdict (PASS / PASS WITH MINOR REVISIONS / PASS WITH MAJOR REVISIONS / FAIL / FAIL NOT READY)
- A plain-language summary of the site's overall quality level (2–4 sentences)
- The most important finding in one sentence

---

## 3. Strategic Fidelity Review

Review how well the current output matches:
- The approved discovery brief and planning output
- The sitemap and wireframe structure
- The brand direction and positioning
- The design system rules
- The implementation plan
- Each feature agent's approved scope

State what is aligned, what has drifted, and why it matters.

---

## 4. UX Review

Review:
- Clarity of what the business does and who it's for
- Page flow and section hierarchy
- CTA placement, wording, and conversion logic
- Navigation completeness and clarity
- Form usability
- Proof placement near decision points
- Whether dead ends exist
- Whether the site guides the user toward action

---

## 5. Accessibility Review

Review explicitly:
- Heading hierarchy
- Semantic HTML usage
- Contrast risks
- Label/error associations in forms
- Aria attribute usage (correct, missing, or wrong)
- Keyboard/focus support (inferred or confirmed)
- Alt text expectations
- Motion considerations
- Tap target sizing

For each area: confirm, flag as likely risk, or mark "must verify in implementation."

Do not collapse this section to a single paragraph.

---

## 6. Anti-Template / Anti-AI Review

Review whether the site feels:
- Generated rather than custom
- Trend-chasing rather than appropriate
- Over-designed rather than intentional
- Fake-polished rather than genuinely trustworthy

Call out exact patterns. Reference the `review-framework.md` list.

---

## 7. Trust and Conversion Review

Review:
- Business credibility signals
- Honesty of claims and verifiability
- Proof quality and placement
- Next-step clarity
- Reassurance near submission/action points
- Conversion path strength

---

## 8. Responsive / Mobile-First Review

Review:
- Mobile layout behavior (inferred from responsive classes)
- Hover-dependent interactions that break on touch
- Button and touch target sizing
- Sticky/fixed element behavior
- Any section that likely collapses poorly

Flag confirmed issues vs. "must verify on device."

---

## 9. Content and Business Integrity Review

Review:
- Consistency of business details across all data files and components
- Placeholder text that may render publicly
- External URL accuracy
- Accuracy of claims, stats, and guarantees
- Content that sounds generic or AI-generated

---

## 10. Prioritized Issue Log

Group all issues by severity:

### BLOCKERS
For each issue:
**[Issue Title]**
- Location: `file.tsx:line`
- Why it matters: [specific consequence]
- Fix: [specific action]

### MAJOR
(same format)

### MODERATE
(same format)

### MINOR
(same format)

---

## 11. Launch Readiness Assessment

State whether the site is ready for:
- Build continuation
- Revision cycle
- Client presentation
- Launch

Include conditions if any.

---

## 12. Revision Handoff

A clean, ordered handoff for `19-revisions`.

Include:
- Priority order for fixes (blockers first, then major, then moderate, then minor)
- What must be preserved (content, structure, patterns that are working)
- Whether a quick patch pass or deeper correction cycle is needed
- Any risks the revision agent should be aware of
