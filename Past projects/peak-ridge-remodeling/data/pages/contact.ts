import { siteConfig } from '../site'

export const contactPage = {
  headline: 'Get Your Free Estimate',
  subheadline: siteConfig.guarantee,
  form: {
    fields: {
      name: { label: 'Your Name', placeholder: 'Jane Smith' },
      phone: { label: 'Phone Number', placeholder: '(503) 555-0100' },
      email: { label: 'Email Address', placeholder: 'jane@example.com' },
      projectType: {
        label: 'Project Type',
        placeholder: 'Select a project type',
        options: [
          'Kitchen Remodeling',
          'Bathroom Remodeling',
          'Basement Finishing',
          'Multiple Projects',
          'Not Sure Yet',
        ],
      },
      message: {
        label: 'Brief Project Description',
        placeholder:
          'Tell us a bit about your project — size, scope, timing, or any questions. (Optional)',
      },
    },
    submitLabel: 'Request My Free Estimate',
    privacyNote: 'We never share your information. No spam.',
  },
  alternativeContact: {
    heading: 'Prefer to call?',
    phone: siteConfig.phone,
    phoneHref: siteConfig.phoneHref,
    hours: siteConfig.hours,
  },
  serviceAreaNote: {
    heading: 'We serve the Portland metro area',
    areas: ['Portland', 'Beaverton', 'Lake Oswego', 'Tigard', 'West Linn', 'Tualatin', 'Happy Valley'],
  },
  trustNote: {
    quote:
      '"Called on a Monday, estimate on Wednesday, decision made by Friday. Exactly what a busy homeowner needs."',
    attribution: '— Doug F., Portland',
  },
}
