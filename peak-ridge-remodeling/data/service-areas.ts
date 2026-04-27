export type ServiceArea = {
  slug: string
  name: string
  state: string
  fullName: string
  heroHeadline: string
  heroSubheadline: string
  introText: string
  neighborhoods: string[]
  testimonialIds: string[]
  seo: {
    title: string
    description: string
  }
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'portland',
    name: 'Portland',
    state: 'OR',
    fullName: 'Portland, OR',
    heroHeadline: 'Kitchen & Bathroom Remodeling in Portland, OR',
    heroSubheadline:
      'Peak Ridge Remodeling has been serving Portland homeowners since 2012. Local expertise, real craftsmanship.',
    introText:
      'We\'ve remodeled homes in Sellwood, Hawthorne, Alberta Arts, Irvington, Beaumont, and throughout Portland. Our crew knows the housing stock — from craftsman bungalows to mid-century ranches — and builds to match.',
    neighborhoods: [
      'Hawthorne', 'Sellwood', 'Alberta Arts', 'Irvington',
      'Beaumont-Wilshire', 'Laurelhurst', 'Division', 'Foster-Powell',
      'Mt. Tabor', 'Woodstock', 'Eastmoreland', 'Buckman',
    ],
    testimonialIds: ['t1', 't4', 't5'],
    seo: {
      title: 'Kitchen & Bathroom Remodeling Portland OR | Peak Ridge',
      description:
        'Trusted remodeling contractor in Portland, OR. Kitchen, bathroom, and basement remodeling since 2012. 65+ Google reviews, 4.9★. Free in-home estimate.',
    },
  },
  {
    slug: 'beaverton',
    name: 'Beaverton',
    state: 'OR',
    fullName: 'Beaverton, OR',
    heroHeadline: 'Kitchen & Bathroom Remodeling in Beaverton, OR',
    heroSubheadline:
      'Beaverton homeowners trust Peak Ridge for remodels done right — on schedule and on budget.',
    introText:
      'We regularly work in Beaverton and surrounding Washington County neighborhoods. Whether it\'s a kitchen overhaul in Murrayhill or a master bath transformation in Cooper Mountain, we bring the same care and craft.',
    neighborhoods: [
      'Murrayhill', 'Cooper Mountain', 'Cedar Hills', 'Raleigh Hills',
      'Aloha', 'Sunset', 'West Slope', 'Progress Ridge',
    ],
    testimonialIds: ['t3', 't4'],
    seo: {
      title: 'Kitchen & Bathroom Remodeling Beaverton OR | Peak Ridge',
      description:
        'Expert kitchen and bathroom remodeling in Beaverton, OR. Trusted local contractor, 65+ Google reviews, 4.9★. Free estimate for Beaverton homeowners.',
    },
  },
  {
    slug: 'lake-oswego',
    name: 'Lake Oswego',
    state: 'OR',
    fullName: 'Lake Oswego, OR',
    heroHeadline: 'Kitchen & Bathroom Remodeling in Lake Oswego, OR',
    heroSubheadline:
      'Lake Oswego homes deserve a remodeling partner who takes quality seriously. That\'s why our clients refer us.',
    introText:
      'Lake Oswego clients appreciate our attention to detail and finish quality. We\'ve completed kitchens and bathrooms throughout the community — from First Addition Craftsmans to newer construction near the lake.',
    neighborhoods: [
      'First Addition', 'Westlake', 'Lake Grove', 'Palisades',
      'Uplands', 'Iron Mountain', 'Hallinan', 'Stafford',
    ],
    testimonialIds: ['t2', 't6'],
    seo: {
      title: 'Kitchen & Bathroom Remodeling Lake Oswego OR | Peak Ridge',
      description:
        'Premium remodeling contractor in Lake Oswego, OR. Kitchen, bathroom, and basement remodeling. Free estimate. 4.9★ on Google, 65+ reviews.',
    },
  },
]

export type CitySlug = (typeof serviceAreas)[number]['slug']
