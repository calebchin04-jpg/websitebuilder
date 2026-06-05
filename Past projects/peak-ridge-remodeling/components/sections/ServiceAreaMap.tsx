import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { serviceAreas } from '@/data/service-areas'

type ServiceAreaMapProps = {
  heading?: string
  subheading?: string
  background?: 'base' | 'surface'
}

export function ServiceAreaMap({
  heading = 'Serving the Portland Metro Area',
  subheading = 'We work with homeowners across Portland and surrounding communities.',
  background = 'surface',
}: ServiceAreaMapProps) {
  const allCities = [
    'Portland',
    'Beaverton',
    'Lake Oswego',
    'Tigard',
    'West Linn',
    'Tualatin',
    'Happy Valley',
    'Gresham',
    'Milwaukie',
    'Oregon City',
    'Sherwood',
    'Hillsboro',
  ]

  return (
    <SectionWrapper background={background}>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: text + city list */}
        <div className="reveal">
          <h2 className="text-h2 font-bold text-text-primary mb-3 text-balance">
            {heading}
          </h2>
          <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
            {subheading}
          </p>

          {/* Featured city links */}
          <div className="mb-6">
            <h3 className="text-ui font-semibold uppercase tracking-wider text-text-muted mb-4">
              Service Areas
            </h3>
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-2.5"
            >
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className={cn(
                      'flex items-center gap-2 text-body font-medium text-primary',
                      'hover:underline underline-offset-4 transition-colors',
                      'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm'
                    )}
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {area.name}
                  </Link>
                </li>
              ))}
              {/* Additional cities (no dedicated pages) */}
              {allCities
                .filter(
                  (city) =>
                    !serviceAreas.some(
                      (a) => a.name.toLowerCase() === city.toLowerCase()
                    )
                )
                .map((city) => (
                  <li key={city}>
                    <span className="flex items-center gap-2 text-body text-text-secondary">
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 text-text-muted"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {city}
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          <p className="text-fine text-text-muted">
            Don't see your city? We likely serve your area.{' '}
            <Link
              href="/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Contact us
            </Link>{' '}
            to confirm.
          </p>
        </div>

        {/* Right: map embed */}
        <div className="reveal reveal-delay-2">
          <div className="rounded-xl overflow-hidden shadow-card aspect-[4/3] bg-surface">
            <iframe
              title="Peak Ridge Remodeling service area — Portland metro"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d178310.21559043604!2d-122.6764816!3d45.5051064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Peak Ridge Remodeling service area in the Portland, OR metro area"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
