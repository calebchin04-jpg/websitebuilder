# Navigation Structure Rules

Rules for deciding what goes in the navigation, how to group it, and how to label it.

---

## Label Rules

Navigation labels must be:
- **Clear** — instantly understood at a glance, no ambiguity
- **Familiar** — use the words the user expects, not the words the brand invented
- **Specific** — "Services" is better than "What We Do"; "About" is better than "Our Story" in a nav label
- **Concise** — 1–2 words maximum for top-level items; 2–3 words maximum for dropdown children
- **Easy to scan** — short, parallel, and consistent in grammatical form
- **Aligned with the sitemap** — labels derive from the confirmed page list, not from brand copywriting

**Anti-patterns — never use these as nav labels:**
- Vague marketing phrases: "Explore", "Discover", "Solutions", "Learn More", "Our World"
- Overly clever labels that obscure the destination: "The Journey", "What Drives Us", "How We Think"
- Redundant labels: "Home" (if logo links home, "Home" can often be removed from desktop nav for cleanliness — but include it in mobile menu)
- Duplicate labels for the same destination
- Labels longer than 3 words at the top level (except when a very specific phrase is genuinely clearer)

---

## Top-Level Item Count Rules

| Site complexity | Recommended top-level nav items | Notes |
|---|---|---|
| Simple (≤6 pages) | 3–5 items | Flat; no dropdown needed |
| Medium (6–10 pages) | 4–6 items | Dropdown allowed for grouped child pages |
| Complex (10+ pages) | 5–7 items | Dropdowns expected; mega menu if multiple large groups |

**Never exceed 7 top-level items.** If the sitemap requires more, escalate to 00 — the IA likely needs to be restructured.

---

## What Goes in Primary Nav vs. Utility Space vs. Footer

**Primary nav** (header, always visible):
- Core site sections the majority of visitors need
- Items that directly support the primary conversion path
- CTA button (rightmost position, desktop)

**Utility nav / secondary nav** (small, subdued — typically top-right):
- Account / Login
- Language selector
- Phone number (sometimes)
- Support / Help link
- Items used by a minority of users or infrequent visitors
- *Only include a utility layer when the site genuinely has two distinct navigation audiences or intent levels*

**Footer only** (not in header):
- Privacy Policy
- Terms of Service
- Accessibility Statement
- Sitemap link
- Secondary pages that most visitors never need to reach from the header
- Contact page (can be footer-primary on simple sites if a CTA button already drives to the contact flow)

---

## CTA Placement Rules

**Desktop:**
- One primary CTA button, far right of the nav bar
- Solid fill, primary brand color
- 2–5 word label that names the action clearly (e.g. "Book Now", "Get a Quote", "Start Free Trial")
- Never use a CTA label that duplicates a nav link label

**Mobile:**
- CTA must be visible in the mobile header bar at all times
- Do NOT hide the CTA behind the hamburger menu
- CTA is also repeated at the bottom of the open mobile drawer as a secondary access point

**Sticky behavior:**
- CTA remains visible in the sticky header — this is a conversion mechanic, not decoration
- If the CTA links to a booking/contact modal, it should trigger the modal, not navigate away

**When two CTAs are needed:**
- Only when two genuinely distinct primary paths exist (e.g. "Book a Call" for leads + "Sign In" for existing customers)
- Must be visually differentiated: one filled, one outlined
- Escalate to 00 before adding a second header CTA — this is a conversion architecture decision

---

## Grouping and Dropdown Rules

**Use a dropdown when:**
- 3+ child pages exist under a parent concept
- The child pages are distinct enough to warrant separate navigation access
- The parent label accurately describes the group
- Grouping reduces visible top-level noise

**Do not use a dropdown when:**
- The site has fewer than 3 child pages under any parent
- The child pages are sequential steps (e.g. wizard steps) not independent access points
- The grouping is artificial — created to make the nav feel more complex

**Dropdown behavior:**
- Open on hover (desktop) + click/tap (keyboard and mobile)
- Never open on focus alone — this breaks keyboard navigation flow
- Close on: click outside, Escape key press, hover away (with small delay to prevent accidental close)
- Minimum dropdown width: matches longest item label + standard padding
- Max dropdown depth: 2 levels (parent → children). Never 3 levels — escalate to 00 if three levels are required.

**Mega menu — only when:**
- The site has 2+ distinct top-level groups each with 4+ child items
- A flat dropdown would produce an unmanageable list length
- Grouping within the mega menu adds genuine clarity
- The sitemap explicitly supports this structure

---

## Announcement Bar Rules

Include an announcement bar only when the site has:
- A time-limited promotion or offer
- An important operational notice (hours, closures, location change)
- A recent service or product launch that needs above-nav visibility

**If included:**
- Position: full-width, above the main header
- Content: single line of text + optional inline CTA link (not a full button)
- Maximum content: ~80 characters
- Dismissible: yes — ✕ button, state stored in `localStorage` (persists across page loads in same session)
- Background: accent color from design system — NOT the primary CTA color (avoid visual confusion)
- Typography: small (13–14px), high contrast, centered
- Does not scroll with the page — fixed to top, or dismissed before sticky header takes over
- Mobile: stacks above mobile header, same dismissible behavior, may wrap to 2 lines at ≤375px

**If not included:** do not add it as a placeholder. Only include when the business genuinely has this type of time-sensitive messaging.

---

## Contact Page Placement

**When to include Contact in primary desktop nav:**
- The business's primary CTA IS the contact form (not a dedicated booking page)
- OR the business serves multiple inquiry types that the CTA button alone can't handle
- OR the sitemap explicitly positions Contact as a primary navigation destination

**When Contact goes to footer only:**
- A dedicated CTA button (Book Now, Get a Quote) already drives the primary contact action
- Contact is a secondary page most visitors reach through the CTA flow
- Removing it from the primary nav reduces clutter without hiding an important path

**Always include Contact in the mobile menu** regardless of desktop nav placement.

---

## Home Link Rules

**Desktop nav:**
- "Home" as a nav label is often redundant when the logo links to the homepage
- Can omit "Home" from desktop primary nav on clean, minimal sites
- Keep "Home" as first item if: the logo is not obviously clickable, the site has a distinct homepage-as-hub pattern, or the brand register is very formal

**Mobile menu:**
- Always include "Home" as the first item in the mobile drawer — mobile users expect explicit navigation back to the homepage
