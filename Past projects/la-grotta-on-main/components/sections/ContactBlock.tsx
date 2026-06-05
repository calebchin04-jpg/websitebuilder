import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/data/site'
import { contactPageContent } from '@/data/pages/contact'

const dayLabels: Record<keyof typeof siteConfig.hours, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

const hoursOrder: Array<keyof typeof siteConfig.hours> = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export function ContactBlock() {
  return (
    <SectionWrapper bg="surface-1" size="standard">
      <div className="max-w-2xl mx-auto">
        {/* Page headline */}
        <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-text-primary text-center">
          {contactPageContent.headline}
        </h1>

        {/* Subline */}
        <p className="font-sans text-xl text-text-secondary text-center mt-4">
          {contactPageContent.subline}
        </p>

        {/* Trust line */}
        <p className="font-sans text-sm italic text-text-secondary text-center mt-3">
          {contactPageContent.trustLine}
        </p>

        {/* Phone — dominant CTA */}
        <div className="text-center mt-12 mb-4">
          <a
            href={siteConfig.phoneHref}
            className="font-serif text-5xl lg:text-7xl font-semibold text-gold hover:text-gold-hover transition-colors block"
          >
            {siteConfig.phone}
          </a>
          <p className="font-sans text-sm text-text-secondary mt-3">
            Tap to call on mobile
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border-default mt-14 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-text-primary mb-5">
                Hours
              </h2>
              <dl className="space-y-2">
                {hoursOrder.map((day) => (
                  <div key={day} className="flex justify-between gap-4">
                    <dt className="font-sans text-sm font-semibold text-text-primary capitalize">
                      {dayLabels[day]}
                    </dt>
                    <dd className="font-sans text-sm text-text-secondary">
                      {siteConfig.hours[day]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Address + directions */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-text-primary mb-5">
                Location
              </h2>
              <address className="not-italic font-sans text-sm text-text-secondary leading-relaxed">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.province}{' '}
                {siteConfig.address.postalCode}
              </address>
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-sm font-semibold text-gold hover:text-gold-hover transition-colors mt-4"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
