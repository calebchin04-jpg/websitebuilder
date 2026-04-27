export const serviceAreas = [
  {
    name: 'Markham',
    slug: 'markham',
    description: 'Our home base — full service coverage across all Markham neighbourhoods.',
    isPrimary: true,
  },
  {
    name: 'Stouffville',
    slug: 'stouffville',
    description: 'Complete plumbing services for Whitchurch-Stouffville residents.',
    isPrimary: true,
  },
  {
    name: 'Unionville',
    slug: 'unionville',
    description: 'Serving the historic Unionville community and surrounding area.',
    isPrimary: true,
  },
  {
    name: 'Richmond Hill',
    slug: 'richmond-hill',
    description: 'Residential and emergency plumbing across Richmond Hill.',
    isPrimary: true,
  },
  {
    name: 'York Region',
    slug: 'york-region',
    description: 'Extended coverage across York Region municipalities.',
    isPrimary: false,
  },
  {
    name: 'Thornhill',
    slug: 'thornhill',
    description: 'Serving Thornhill residents on both sides of Yonge.',
    isPrimary: false,
  },
  {
    name: 'Scarborough',
    slug: 'scarborough',
    description: 'Northern Scarborough area plumbing services.',
    isPrimary: false,
  },
] as const

export type ServiceArea = (typeof serviceAreas)[number]
