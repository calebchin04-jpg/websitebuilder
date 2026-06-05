export type NavItem = {
  label: string
  href: string
  isCTA?: boolean
  children?: { label: string; href: string }[]
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
      { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
      { label: 'Basement Finishing', href: '/services/basement-finishing' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  {
    label: 'Get a Free Estimate',
    href: '/contact',
    isCTA: true,
  },
]

export const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
    { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
    { label: 'Basement Finishing', href: '/services/basement-finishing' },
    { label: 'All Services', href: '/services' },
  ],
  serviceAreas: [
    { label: 'Portland', href: '/service-areas/portland' },
    { label: 'Beaverton', href: '/service-areas/beaverton' },
    { label: 'Lake Oswego', href: '/service-areas/lake-oswego' },
    { label: 'All Service Areas', href: '/service-areas' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
}
