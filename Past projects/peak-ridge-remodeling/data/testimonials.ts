export type Testimonial = {
  id: string
  name: string
  location: string
  projectType: string
  quote: string
  rating: 5 | 4
  source: 'Google'
  // photo is optional — left undefined here as placeholder
  photoUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    location: 'Portland, OR',
    projectType: 'Kitchen Remodel',
    quote:
      'From the first estimate to the final walkthrough, Peak Ridge was professional and communicative. Our kitchen went from a cramped 1980s layout to an open, functional space we actually love cooking in. The tile work is flawless.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't2',
    name: 'James & Carolyn T.',
    location: 'Lake Oswego, OR',
    projectType: 'Kitchen Remodel',
    quote:
      'We got three bids and Peak Ridge was the only contractor who actually listened to what we wanted instead of upselling us. They hit every deadline and the result looks like it should cost twice what we paid.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't3',
    name: 'Mark D.',
    location: 'Beaverton, OR',
    projectType: 'Bathroom Remodel',
    quote:
      'Our master bath had been unfinished for four years because we couldn\'t find a contractor we trusted. Peak Ridge did the entire project in three weeks — tile, glass enclosure, heated floors, the works. Zero punch list at walkthrough.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't4',
    name: 'Priya K.',
    location: 'Portland, OR',
    projectType: 'Bathroom Remodel',
    quote:
      'The waterproofing and tile work on our walk-in shower is exceptional. Previous contractor had used cement board without proper waterproofing and it leaked within a year. Peak Ridge tore it out and did it correctly. Two years later — no issues.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't5',
    name: 'Doug and Lisa F.',
    location: 'Portland, OR',
    projectType: 'Full Kitchen Renovation',
    quote:
      'We moved two walls, added an island, and completely reconfigured the kitchen. Peak Ridge handled the engineering, permits, structural work, and finish work. It took 7 weeks and came in exactly on budget. Couldn\'t be happier.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't6',
    name: 'Nora W.',
    location: 'Lake Oswego, OR',
    projectType: 'Basement Finishing',
    quote:
      'We wanted a home office, guest suite, and small bathroom in our unfinished basement. Peak Ridge designed the layout, handled every trade, and delivered exactly what we pictured. The finish quality matches our upstairs completely.',
    rating: 5,
    source: 'Google',
  },
]
