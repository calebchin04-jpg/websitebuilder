# Examples

Two full conversation flows showing how `01-discovery` should behave. Each example shows: the initial brief, the batched question flow, challenge moments, and the final output structure.

---

## Example 1 — Strong brief, efficient discovery

**Scenario:** Home services business, new build, clear owner.

---

**User input:**
> "I need a website for my pressure washing company. We do residential driveways, decks, and houses in Austin, TX. My name is Marcus. I've been doing this for 6 years. I have 47 Google reviews at 4.9 stars. I want people to call or request a quote. I've looked at [site A] and [site B] and like how clean they are but want it to feel more local and personal."

---

**Skill — Batch 1 (business and offer):**
> A few quick questions on the business itself:
>
> 1. What's the business name?
> 2. Is your primary offer residential only, or do you also do commercial work? And is it pressure washing only, or soft washing too?
> 3. Who is your ideal customer — the homeowner prepping for a sale, the HOA-required maintenance job, the "it's been years and I'm embarrassed" situation?
> 4. If someone lands on the site and decides they want to hire you, what's the one action you most want them to take — call you directly, or submit a quote request form?

---

**User:**
> "Business is Marcus Pro Wash. Both residential and light commercial, but 80% residential. I do pressure and soft wash depending on the surface. Ideal customer is homeowners aged 35–60 who are proud of their property. They want it done right, not cheap. Primary CTA is call me — I close way better on the phone."

---

**Skill — Batch 2 (trust and positioning):**
> Great — 47 reviews at 4.9 is strong proof. A couple more questions:
>
> 1. What's the main frustration homeowners have before they call someone like you? What are they worried about?
> 2. There are probably 10–15 pressure washers in Austin. Why would a homeowner in the "done right, not cheap" mindset pick you over someone else?
> 3. Do you have before/after photos available?

---

**User:**
> "Biggest fear is someone damages their surface — bad technique wrecks paint, wood, or siding. I use the right PSI and technique for every surface. That's the real differentiator — technique and care. And yes, I have a lot of before/after photos."

---

**Skill — Challenge moment (differentiator):**
> "Technique and care" is something every pressure washer claims. What makes yours provable? Do you explain your process to clients beforehand? Do you have a guarantee? Do any of your reviews specifically mention that you protected their surfaces or used the right technique? That's the angle we want — a claim backed by something real.

---

**User:**
> "Yeah — at least 15 of my reviews specifically mention that I explained the process and didn't damage anything. I also offer a free re-clean guarantee if they're not happy."

---

**Skill — Batch 3 (structure and content):**
> Good — that's real proof. Now the site structure:
>
> 1. What pages do you want? Standard would be: Home, Services, About, Contact. Do you want a Gallery page for the before/afters? A service area page for Austin neighborhoods?
> 2. Do you have a logo? Any existing brand colors?
> 3. Do you have any written content ready, or does the agency handle all copy?

---

**User:**
> "I want Home, Services, Gallery, About, Contact, and a Service Areas page. I have a logo but no brand colors. Agency handles copy. I don't have a logo I love — it's basic."

---

**Skill — Batch 4 (visual direction):**
> Visual direction:
>
> 1. You mentioned [site A] and [site B] — what specifically do you like? Is it the layout spacing? The photography style? The simplicity of the navigation?
> 2. You said "local and personal" — let me give you some pairs to pick: Bold and confident vs. calm and reassuring? Warm and real vs. clean and polished?
> 3. Anything you hate the look of — styles, colors, patterns you've seen that feel cheap or fake?

---

**User:**
> "From those sites I like the clean layout, big photos, and minimal text. Local and personal means I want my face on it — not stock photos. Bold and confident, but not aggressive. I hate the super generic look with clip art icons, fake-looking photos, and those blue gradient hero sections every contractor seems to use."

---

**Skill — No further challenges needed. Visual assumptions: animation = subtle (will label). Output produced.**

---

**Output (truncated for example clarity):**

```
DISCOVERY BRIEF
Project: Marcus Pro Wash
Build type: New build
---
Business type: Home services — pressure washing / soft washing
Geographic scope: Austin, TX (residential + light commercial, 80/20)
Primary CTA: Call directly
Secondary CTA: Quote request form (secondary)

Target audience: Austin homeowners aged 35–60, property-proud, 
  willing to pay for quality, fear of surface damage

Differentiator: Technique-first approach provable via 47 reviews 
  at 4.9 stars; 15+ reviews mention process and surface care; 
  free re-clean guarantee

Trust assets: 47 Google reviews (4.9), before/after photos (strong), 
  free re-clean guarantee. No testimonial cards yet — can pull from 
  review text.

Visual direction:
  - Big real photography (Marcus on-site, before/after results)
  - Clean layout, minimal text, strong hierarchy
  - Bold and confident, not aggressive
  - No stock photos, no clip art, no blue gradient hero
  - Animation: Subtle [ASSUMPTION — user did not specify]

Assumptions:
  [ASSUMPTION] Animation level: subtle fade-ins only. Why: not asked. 
    Impact: minor — easy to adjust in design system.
  [ASSUMPTION] No CMS needed. Why: agency handles all edits. 
    Impact: keeps build simple.

Handoff to 02-planning:
  Activate: 10-hero, 11-navigation, 12-forms, 13-social-proof, 
    14-services, 15-gallery, 17-local-seo
  Deactivate: 19-cms, 16-booking-payments, 20-ecommerce
  Priority: Lead with proof (reviews + before/after), 
    direct call CTA in sticky header + hero, 
    differentiation framed around technique + guarantee
  Flag: Logo needs improvement — note for brand direction stage
```

---

## Example 2 — Vague brief, challenge rounds in action

**Scenario:** Salon, new build, very vague initial input, needs challenge rounds.

---

**User input:**
> "Need a website for my salon. I want it to look premium and modern. High converting."

---

**Skill — Detect project type:**
> Is this a brand-new website or a redesign of an existing one?

**User:** New.

---

**Skill — Batch 1:**
> A few questions to get started:
>
> 1. What's the name of the salon? Where is it located?
> 2. What services do you offer — hair only, or also nails, skin, lashes?
> 3. Who is your ideal customer? Describe the person who makes up most of your bookings.
> 4. What do you want visitors to do when they land on the site — book online, call, or something else?

---

**User:**
> "Salon is called Velour. It's in Miami. We do hair, nails, lashes. Customers are women who want to look good. I want them to book online."

---

**Skill — Challenge round 1 (audience):**
> "Women who want to look good" is every salon's audience. I need more specificity to build a site that speaks to the right person. Who is Velour's most valuable client? Is she a professional who needs efficient appointments and consistency? A younger trend-forward client who follows aesthetics and cares about the vibe? A bridal client? Describe the person you most want walking through the door.

---

**User:**
> "Young professional women, 25–38, career-focused, willing to spend, wants quick but quality work. Not interested in trendy — she wants reliable, consistent, and premium."

---

**Skill — Good. Advancing. Batch 2:**
> 1. What's the main frustration your ideal client has with other salons? What brings her to you?
> 2. Why would she pick Velour over the 30 other salons in Miami? What specifically makes you different?
> 3. What proof do you have — Google reviews, testimonials, photos of your work?

---

**User:**
> "Other salons are inconsistent — she gets a different stylist every time and results vary. At Velour she has an assigned stylist and consistent results. We have around 80 Google reviews at 4.7. We have tons of photos."

---

**Skill — Good differentiation. Advancing. Batch 3:**
> 1. What pages do you want? I'd suggest: Home, Services + Pricing, Gallery, About, Book. Anything else?
> 2. Do you have a logo, brand colors, fonts?
> 3. Is copy ready, or does the agency write it?

---

**User:**
> "Yes those pages work. Add a team page too. We have a logo and some brand guidelines — soft pink, beige, white, and a clean sans-serif. Agency writes copy. Also I want a blog, a loyalty program, a chatbot, and an events page."

---

**Skill — Challenge round 1 (feature bloat):**
> That's a significant scope increase from the core pages. Blog, loyalty program, chatbot, and events are all real builds — not quick additions. Which of these would directly cause you to lose a client if they were missing on launch day?

---

**User:**
> "Probably none, honestly. I just want them eventually."

---

**Skill:**
> Noted. I'll flag these as post-launch additions and keep the initial build focused on the core 6 pages plus booking. This protects the quality of what matters most — the booking flow and gallery.

---

**Batch 4 (visual direction):**
> 1. Can you share 2–3 websites you like the look of? Doesn't have to be a salon.
> 2. You said "premium and modern" — I need to translate that. Is it: restrained and quiet (lots of white space, minimal elements)? Or rich and refined (editorial photography, layered layouts)? Or something else?
> 3. What have you seen in other salon sites that looks cheap, outdated, or generic?

---

**User:**
> "I like [site A] and [site B]. Premium means editorial, not minimal — I want it to feel like a luxury magazine. I hate the bubbly pink-heavy, flower-logo, generic 'spa feel' that most salons go for."

---

**Skill — Challenge round 1 (vague "premium"):**
> "Luxury magazine" is useful direction. Let me make sure I have concrete rules: Does that mean large full-bleed photography with minimal overlay text? Strong typographic hierarchy with editorial-weight fonts? Restrained color — your soft pink used sparingly as an accent rather than dominating the palette? And does it mean no decorative elements that feel spa-kitsch (no swirl graphics, no florals, no script-heavy headings)?

---

**User:**
> "Yes exactly to all of that. Big photos, strong typography, pink as accent only, none of the spa clichés."

---

**Skill — Challenge round complete. Visual rules captured. No vague labels remaining. Output produced.**

---

**Output (handoff section only, for brevity):**

```
Handoff to 02-planning:
  Activate: 10-hero, 11-navigation, 16-booking-payments, 
    13-social-proof, 14-services, 15-gallery, 17-local-seo
  Deactivate: 19-cms, 20-ecommerce, 22-live-chat, 18-blog-resources
  Post-launch list (do not build now): blog, loyalty program, 
    chatbot, events page
  
  Design priority flags for 05-design-system:
    - Editorial, luxury magazine feel
    - Full-bleed photography, large and high quality
    - Typography-led hierarchy
    - Soft pink = accent only, not dominant color
    - Zero spa-kitsch: no florals, no script-heavy headings, 
      no swirly decoration
  
  Trust priority: 80 Google reviews at 4.7 + strong gallery 
    = proof-first structure
  CTA: Online booking — must be prominent in sticky header and hero
  
  Flags:
    - Ensure booking platform integration is confirmed 
      before build plan (Vagaro? Booksy? Square?)
    - Team page: confirm number of team members and 
      whether bios/photos are available
```

---

## Example 3 — Redesign branch

**Scenario:** Consultant, redesign, current site that "just doesn't convert."

---

**User input:**
> "I need to redesign my consulting website. It's not converting. I don't know why."

---

**Skill — Project type confirmed: redesign. Additional batch triggered.**

**Skill — Batch 1 + Redesign questions:**
> 1. What's the business name and what type of consulting do you do?
> 2. What's the URL of the current site?
> 3. What does "not converting" mean for you specifically — no contact form fills, no calls, low traffic, high bounce rate?
> 4. Who is your ideal client?
> 5. What do you want visitors to do on the new site?

---

**User:**
> "Business is Kline Advisory. I do financial advisory for small businesses. URL is [klineadvisory.com]. Not converting means no one fills out the contact form. I get traffic but zero leads. Ideal client is small business owners who are confused about their finances and need clarity. I want them to book a free intro call."

---

**Skill — Reviews current site, notes observations, continues with batches.**

**Key challenge moment (redesign-specific):**
> "You said you want to keep the existing brand colors and logo since you've had them for 10 years. But looking at the current site, the layout is very cluttered and the typography is hard to read — which are likely contributing to why visitors bounce without converting. The visual trust problem isn't just the conversion copy; it's the experience. Are you open to a visual refresh while keeping the color and logo? Or is the visual direction truly non-negotiable?"

---

**User:**
> "Visual refresh is fine as long as the logo and main color (navy blue) stay. Everything else can change."

---

**Skill:** Noted. Redesign scope = full visual and structural overhaul, preserving logo and navy blue only.

*(Discovery continues and completes. Full brief produced with Redesign Notes section filled in.)*
