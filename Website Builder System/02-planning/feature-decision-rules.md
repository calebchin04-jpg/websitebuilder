# Feature Decision Rules

This file defines how to classify every feature as required, useful optional, or deferred. It also defines the default feature state by business type and the reasoning standard for each classification.

---

## Classification Definitions

### Required Now
The site cannot accomplish its primary conversion goal without this feature. Removing it would directly reduce the ability to generate leads, build trust, or serve the core user journey.

### Useful Optional
The feature adds value and is appropriate for this business type, but its absence would not block conversion. It can be included if scope allows, or added later without structural rework.

### Deferred
The feature is premature for this build. Including it now adds complexity without proportional conversion or trust value at this stage. Flag it for a future phase explicitly.

---

## Decision Criteria

For each feature under consideration, answer:

1. **Does removing this feature directly prevent the primary CTA from being completed?**
   Yes → Required Now

2. **Does removing this feature remove a primary trust signal that the audience specifically needs?**
   Yes → Required Now

3. **Would a reasonable competitor site have this feature, and would its absence make this site feel incomplete to the target audience?**
   Yes → Useful Optional (include if scope allows)
   No → Useful Optional or Deferred

4. **Is this feature primarily useful for the client's internal operations rather than for visitor conversion?**
   Yes → Deferred (unless the client explicitly requires it at launch)

5. **Does this feature require significant backend complexity for marginal conversion benefit?**
   Yes → Deferred (unless the business model depends on it)

6. **Was this feature listed in the discovery brief without a clear use case or justification?**
   Yes → Deferred, and note the reason in the planning PRD

---

## Feature Classification Table

### Core Website Features

| Feature | Default | Override condition |
|---|---|---|
| Hero section | Required Now | Always |
| Navigation (header/sticky) | Required Now | Always |
| Contact form | Required Now | Unless CTA is call-only and no form is needed |
| Click-to-call button | Required Now | Mobile audiences especially |
| Services section/page | Required Now | Always |
| About section or page | Required Now | Always |
| Footer | Required Now | Always |
| Mobile-first layout | Required Now | Always |

---

### Trust and Proof Features

| Feature | Default | Override condition |
|---|---|---|
| Testimonials/reviews section | Required Now | If any proof exists |
| Google Reviews embed | Useful Optional | If volume of Google reviews is high (20+) |
| Before/after slider | Useful Optional | Required Now for visual businesses (salon, remodeling, landscaping, cleaning) |
| Trust badges/certifications | Useful Optional | Required Now if licensing is a purchase decision factor |
| Case studies | Deferred | Useful Optional if high-value service with clear project-outcome stories |
| Press/media mentions | Useful Optional | Only if the mentions are credible and specific |

---

### Conversion Features

| Feature | Default | Override condition |
|---|---|---|
| Quote request form | Required Now | For any business where quoting is the primary CTA |
| Booking/appointment scheduling | Deferred | Required Now for clinics, salons, fitness, and any business with appointment-based model |
| Online payment/deposit | Deferred | Useful Optional when booking is active and deposits are standard |
| Multi-step intake form | Deferred | Useful Optional if service complexity requires it |
| Lead popup/exit capture | Deferred | Useful Optional for high-traffic local businesses — only if not intrusive |
| Live chat | Deferred | Only activate if the client has bandwidth to monitor and respond |
| Chatbot | Deferred | Only activate if a real use case is defined; do not add speculatively |

---

### Content Features

| Feature | Default | Override condition |
|---|---|---|
| Gallery/portfolio | Required Now | For visual businesses. Useful Optional for all others. |
| Services/pricing page | Required Now | If pricing transparency is part of the positioning |
| FAQ section | Useful Optional | Required Now if objection-handling is critical (clinics, consultants) |
| Blog/resources section | Deferred | Only activate if SEO content strategy is defined and the client will maintain it |
| Team/staff page | Useful Optional | Required Now if personal credibility is the primary trust driver |
| Location/service area page | Useful Optional | Required Now for multi-city or strong local SEO intent |

---

### Infrastructure and Platform Features

| Feature | Default | Override condition |
|---|---|---|
| CMS | Deferred | Required Now only if client explicitly needs to edit content themselves |
| Newsletter signup | Deferred | Useful Optional if email marketing is part of the business model |
| Analytics/conversion tracking | Useful Optional | Always worth including unless explicitly out of scope |
| Social media links | Useful Optional | Required Now if social is a primary trust/engagement channel for this audience |
| Google Reviews embed | Useful Optional | Required Now if volume is high and reviews are the primary trust signal |
| Ecommerce/cart | Deferred | Required Now only if product sales are the primary conversion goal |
| Membership/client portal | Deferred | Only for businesses with an explicit recurring access model |
| Multilingual | Deferred | Required Now only if the primary market has a significant non-English-speaking audience |

---

## How to Document Feature Decisions in the Planning PRD

For each feature decision, record:

```
Feature: [name]
Decision: Required Now / Useful Optional / Deferred
Reason: [1–2 sentences. Why is it this classification for this specific project?]
```

Do not list a feature without a reason. "We included it because it might be useful" is not a reason.

For deferred features, add:
```
Deferred to: Phase 2 / Future sprint / [specific condition that would trigger activation]
```

---

## Feature Bloat Prevention

If the discovery brief lists more than 10 features, apply the following check before writing the feature decisions section:

1. List all features in a flat inventory
2. Apply the Required Now criteria to each — only features that directly enable the primary CTA or primary trust strategy should qualify
3. For remaining features, apply Useful Optional vs. Deferred criteria
4. Any feature that cannot be clearly justified should default to Deferred

The planning PRD should prioritize a clean, excellent core site over a bloated one with mediocre execution across many features. State this explicitly if feature bloat was identified in the discovery brief.
