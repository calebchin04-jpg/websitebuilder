export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
] as const

export const footerNav = {
  services: [
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Sewer Line Repair', href: '/services/sewer-line' },
    { label: 'Water Heater', href: '/services/water-heater' },
    { label: '24/7 Emergency', href: '/services/emergency' },
    { label: 'Backwater Valve', href: '/services/backwater-valve' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
} as const
