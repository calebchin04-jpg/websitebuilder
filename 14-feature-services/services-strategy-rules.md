# Services Strategy Rules

This file defines how to read upstream inputs, classify services, determine the right depth level, make grouping decisions, set hierarchy, and decide when the services layer needs escalation vs. execution.

---

## Part 1: Reading Upstream Inputs to Set Service Strategy

Before structuring anything, extract these four things from the upstream package:

**1. The confirmed service list**
What does the business actually sell?
- Source: `01-discovery` (full service list, primary vs. secondary, what the business emphasizes)
- Watch for: services that overlap, confusing names, services the client mentioned offhand vs. things they actually sell

**2. The audience's decision pattern**
How does the target customer choose between services or providers?
- Source: `01-discovery` (audience type, pain points, buying behavior) + `02-planning` (user journey)
- Expressed as: "The visitor arrives already knowing they need X" vs. "The visitor needs help identifying which service fits their situation"
- This determines how much explanation and self-sorting structure is needed

**3. The business's real conversion path**
What action does a visitor take when services have done their job?
- Source: `02-planning` (primary CTA, conversion goals) + `01-discovery` (lead model: call, form, booking, quote)
- Every services module must know where it is sending the visitor

**4. The brand register constraint**
What tone and density level has been set for this brand?
- Source: `05-brand-direction` (register, personality dimensions, vocabulary rules)
- A premium/authoritative brand does not get a service grid with cheerful emoji icons
- An approachable local brand does not get cold clinical bullet lists

If any of these four cannot be answered from upstream inputs, make the safest reasonable assumption, document it, and continue.

---

## Part 2: Service Inventory Classification

Review every service mentioned in upstream inputs and classify each one.

**Primary services:**
The main things the business sells. These are the services that drive revenue, generate inquiries, and form the core of what the business is known for. These appear prominently on the homepage and get detailed treatment.

**Secondary services:**
Real services the business offers, but they are not the main draw. Customers often discover these after engaging with a primary service, or they are offered as add-ons. These get supporting treatment — mentioned clearly but not emphasized equally.

**Supporting or peripheral services:**
Services that exist but are not strong enough to headline. These might be: rarely purchased, only available in limited circumstances, mentioned by the client but not actually marketed, or not competitive differentiators. These get minimal treatment or may be removed from primary navigation entirely.

**Apply this checklist to each service:**
- Does the business actively market and sell this?
- Would the business want a qualified lead to call about this specifically?
- Is this something the target audience would search for by name?
- Is there a clear outcome or deliverable attached to this?

If a service fails more than one of these, classify it as supporting or peripheral.

---

## Part 3: Naming and Overlap Review

After classifying services, check for naming and overlap problems.

**Common naming problems:**
- Generic names that describe a category, not a specific service ("Consulting," "Services," "Solutions")
- Names that mean different things to different audiences ("Restoration" = water damage? fire damage? furniture?)
- Duplicates with different names ("Interior Painting" and "Room Painting" are the same thing)
- Jargon the client uses internally but the audience would not recognize
- Overly long names that break card layouts and create visual weight problems

**Common overlap problems:**
- Two services that overlap in scope but are listed separately for the client's internal reasons
- A service that is actually a feature of another service, not a standalone offering
- Services described so vaguely they could each describe the same thing

**Resolution approach:**
- Merge services when they describe the same thing from different angles
- Rename services using language the audience would actually search for
- Create a parent/child structure when one service has meaningful subcategories
- Flag naming problems that represent a positioning issue (not just a presentation issue) and escalate to 00

---

## Part 4: Depth Determination Rules

Not every service needs the same explanation depth. Use this logic to determine how much detail each service deserves.

**Stay lighter when:**
- The service is immediately obvious from its name ("Lawn Mowing," "Window Cleaning," "Haircut")
- The audience already understands the category and just needs to confirm the business offers it
- The service is a commodity — differentiation happens through trust and proof, not explanation
- The service is secondary or peripheral
- The homepage is already carrying multiple primary services

**Go deeper when:**
- The service is high-consideration (the customer thinks about it for weeks)
- The service is expensive enough that visitors want to understand scope before contacting
- The service is confusing or has an industry name most people do not recognize
- The service is commonly misunderstood or miscompared to competitor services
- There is a trust barrier specific to this service ("Is this safe?" "Will it actually work?" "Is it worth the price?")
- The service has meaningfully different use cases that help visitors self-sort
- The service solves an urgent problem and the visitor needs to see it is the right solution fast

**The depth spectrum:**
- Level 1 — Name + one-line description: for obvious, simple, secondary services
- Level 2 — Name + short problem/outcome statement (2–3 sentences): standard for most primary services
- Level 3 — Name + problem framing + outcome + process signal + trust element: for high-consideration or trust-sensitive services
- Level 4 — Dedicated service page with full structured content: for primary services that are the core revenue driver, complex enough to need more explanation, or competitive enough to need stronger differentiation

---

## Part 5: Service Hierarchy Rules

The hierarchy determines what appears first, what gets prominence, and what is downplayed.

**Establish hierarchy by answering:**
1. Which service does the business most want to sell? (Primary revenue driver)
2. Which service does the target audience most commonly arrive looking for?
3. Which services differentiate this business from competitors?
4. Which services, if misunderstood or missed, would cause the visitor to leave without converting?

**Hierarchy rules:**
- The business's strongest, highest-value service leads — regardless of alphabetical order or visual symmetry
- Services are not all equal. Do not force equal visual weight across the grid when the business has a clear priority
- Supporting services follow without competing for attention
- Peripheral services stay in supporting areas (footer, service archive, about page) — not in the primary services section

**When the business has one dominant service:**
Lead with it prominently. Let secondary services follow at reduced visual weight. Do not create a false "we offer everything" impression that dilutes the primary offer.

**When the business has 2–4 co-equal primary services:**
Use a clean grid or structured list that gives each service clear but equal treatment. Use the content of each card to differentiate them, not visual size or decoration.

**When the business has too many services:**
Group them into 2–4 meaningful categories. Do not list 12 services as a flat grid. Grouping improves scannability and prevents visual noise from undermining the premium feel.

---

## Part 6: When to Escalate to 00

Escalate instead of executing when the problem is architectural, not presentational.

**Escalate when:**
- The service catalog is so disorganized that no presentation cleanup will solve the confusion (the business needs to decide what it is before the site can represent it)
- The number of confirmed pages does not match the sitemap and the service list would require adding or removing pages
- Services conflict with each other in ways that create a positioning problem, not just a naming problem
- The client's pricing strategy is unclear or contradictory and a business decision is needed before copy can be written
- A service list the client wants to feature would mislead visitors in a way that creates trust or legal risk
- Upstream sitemap or wireframes conflict with the service structure in a way this agent cannot resolve without changing page count or structure

**Do not escalate for:**
- Grouping decisions within existing page structure
- Naming improvements that do not change site structure
- Deciding which services are primary vs. secondary
- Deciding how much copy depth a service gets
- Choosing between card, list, or overview presentation styles
- Pricing framing decisions (starting-at, range, quote-first) within an honest range
