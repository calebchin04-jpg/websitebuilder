import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/data/site'
import { footerNav } from '@/data/navigation'

const hoursRows: { label: string; value: string }[] = [
  { label: 'Monday', value: siteConfig.hours.monday },
  { label: 'Tuesday', value: siteConfig.hours.tuesday },
  { label: 'Wednesday', value: siteConfig.hours.wednesday },
  { label: 'Thursday', value: siteConfig.hours.thursday },
  { label: 'Friday', value: siteConfig.hours.friday },
  { label: 'Saturday', value: siteConfig.hours.saturday },
  { label: 'Sunday', value: siteConfig.hours.sunday },
]

const googleMapsUrl = siteConfig.directionsUrl

export function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border-default">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16">
        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="La Grotta On Main — Home">
              <Image
                src="https://lagrottaonmain.ca/wp-content/uploads/2024/10/cropped-La_Grotta_Logo_hor-1030x462-1-e1729188487195.png"
                alt="La Grotta On Main"
                width={160}
                height={72}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-[240px]">
              {siteConfig.tagline}
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-text-secondary hover:text-gold transition-colors duration-200 flex items-center gap-1.5 w-fit"
              aria-label={`Follow us on Instagram at ${siteConfig.social.instagramHandle}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              {siteConfig.social.instagramHandle}
            </a>
          </div>

          {/* Col 2 — Visit us */}
          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Visit Us
            </h3>

            {/* Page links */}
            <ul className="flex flex-col gap-2">
              {footerNav.visit.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-text-secondary hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="flex flex-col gap-0.5">
              <p className="font-sans text-sm text-text-secondary">{siteConfig.address.street}</p>
              <p className="font-sans text-sm text-text-secondary">
                {siteConfig.address.city}, {siteConfig.address.province}{' '}
                {siteConfig.address.postalCode}
              </p>
            </div>

            {/* Hours */}
            <dl className="flex flex-col gap-1">
              {hoursRows.map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="font-sans text-sm text-text-secondary shrink-0">{label}</dt>
                  <dd
                    className={[
                      'font-sans text-sm text-right',
                      value === 'Closed' ? 'text-text-secondary/50' : 'text-text-secondary',
                    ].join(' ')}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.phoneHref}
                className="font-sans text-sm font-semibold text-gold hover:text-gold-hover transition-colors duration-200"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-sm text-text-secondary hover:text-gold transition-colors duration-200 break-all"
              >
                {siteConfig.email}
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary hover:text-gold transition-colors duration-200 flex items-center gap-1"
              >
                Get directions
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-default mt-10 pt-6 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
