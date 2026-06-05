# Local Specificity Rules

Owned by: `copy-structure`

---

## Purpose

Local specificity is what separates a site that ranks for "[service] in [city]" from one that does not. It is also what gets cited by AI systems when someone asks about a local service.

Generic copy ("serving the greater Portland area") is invisible. Named copy ("serving Portland, Beaverton, Hillsboro, and Tigard") is discoverable.

This document defines the rules for writing copy that is geographically specific and locally credible.

---

## Core Rule

**Name the cities. Every time.**

If a business serves specific cities, those cities must be named by name in the copy. Not "surrounding areas." Not "the metro area." Not "greater [region]."

The only exception: if the service area is genuinely so broad that naming every city would be absurd (e.g., a national service), in which case name the regions explicitly.

---

## Where Local Specificity Appears

### Homepage
The hero subhead or H1 must include the primary city:

```
Kitchen Remodeling in Portland, OR
```

The homepage service area section must list cities by name:

```
## Service Area

We serve Portland, Beaverton, Hillsboro, Tigard, Lake Oswego, Tualatin, and surrounding Washington County communities.
```

### Individual Service Pages
H1 includes city. Body copy names the area. FAQ includes a service area question with named cities.

### `llms.txt`
The Service Area section must list all cities. Not "greater metro."

### Schema
The `areaServed` field in LocalBusiness schema takes an array of city names or GeoShape objects. Use specific city names.

### Location Pages (if implemented)
Each location page is for a specific city. The H1 is "[Service] in [City]." The body copy is specific to that city — local landmarks, zip codes, neighborhoods if relevant.

---

## Levels of Specificity

Use the highest level the client can honestly support:

| Level | Example | Use When |
|---|---|---|
| City + State | "Portland, OR" | Business serves a city and surrounding suburbs |
| Neighborhood | "NE Portland, the Pearl District, Beaverton" | Business has strong local roots in specific neighborhoods |
| County | "Washington County and Multnomah County" | Service area is county-based |
| City list | "Portland, Beaverton, Hillsboro, Tigard, Lake Oswego" | Business serves specific cities |
| Zip codes | "Serving 97201, 97202, 97204..." | Only for very dense urban areas where zip codes are meaningful to customers |

---

## Local Trust Signals

Beyond location names, local trust signals tell readers (and AI systems) that this business is genuinely embedded in the community:

### Years in the Local Market
```
Licensed in Oregon since 2009.
```
Not: "years of experience in the industry."

### Local Certifications / Memberships
```
Member of the Oregon Home Builders Association.
```
Name the actual organization.

### Local Review Sources
```
4.9 stars across 127 Google reviews from Portland homeowners.
```
Not just "highly rated" — specific platform, count, and geography.

### Local Project References (without client names)
```
We've completed over 200 kitchen remodels across Portland and the west side suburbs.
```
Specific number + specific area.

### Local License Numbers
```
Oregon CCB License #180422
```
Include with client permission and only if verified. This is a significant trust signal for trade businesses.

---

## What Not to Write

| Vague | Specific Alternative |
|---|---|
| "Serving the greater Portland area" | "Serving Portland, Beaverton, Hillsboro, and Tigard" |
| "Local contractor" | "Portland-based contractor, licensed since 2009" |
| "We serve homeowners throughout the region" | "We serve homeowners in Washington and Multnomah counties" |
| "Covering all of Oregon" | "Licensed statewide, with crews based in Portland and Eugene" |
| "We know the area" | "We've worked in every Portland neighborhood — from the Pearl District to Sellwood" |
| "Community-focused" | "Family-owned and operated in Portland since 1998" |
| "Local experts" | Name the specific expertise + years in specific market |

---

## Location Pages

If the site has dedicated location pages, each page must:
1. Name the city in the H1
2. Include a paragraph specific to that city (not just a template with the city name swapped in)
3. Name specific neighborhoods or landmarks if relevant
4. Include a service area FAQ: "Do you serve [adjacent city]?"
5. Link back to the primary service pages

**The copy must not be identical across location pages with only the city name changed.** Duplicate location pages with swapped city names are a content penalty risk and provide no value to visitors.

---

## Local Specificity and AI

When an AI system answers "who does kitchen remodeling in Beaverton, OR?" it pulls from sites where:
1. "Beaverton" appears in context with "kitchen remodeling"
2. The business information (phone, address, service area) includes Beaverton
3. The site has FAQ content that answers questions specific to Beaverton (or at least confirms the service area)

Generic "greater Portland area" language does not match a Beaverton query. Named cities do.

---

## Local Specificity Checklist

- [ ] Hero H1 includes at least one specific city name
- [ ] Homepage service area section names specific cities
- [ ] Each service page includes a service area mention with named cities
- [ ] `llms.txt` service area section lists all cities by name
- [ ] LocalBusiness schema `areaServed` field contains named cities
- [ ] At least one FAQ per service page includes named cities in the answer
- [ ] No "greater area," "surrounding areas," or "metro area" language without named specifics
- [ ] If location pages exist, each has unique, city-specific content
