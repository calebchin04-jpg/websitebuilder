import Link from 'next/link'
import { cn } from '@/lib/utils'
import { footerNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import { StarRating } from '@/components/ui/StarRating'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-text-primary text-text-inverse">
      {/* Main footer content */}
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="block font-extrabold text-lg text-text-inverse">Peak Ridge</span>
              <span className="block text-xs font-medium uppercase tracking-wider text-text-inverse/60">Remodeling</span>
            </div>
            <p className="text-body text-[0.875rem] text-text-inverse/70 mb-5 leading-relaxed max-w-[220px]">
              Portland metro kitchen, bathroom, and basement remodeling since 2012.
            </p>

            {/* Review badge */}
            <div className="flex items-center gap-2.5">
              <StarRating rating={5} size="sm" starClassName="fill-accent text-accent" />
              <span className="text-fine text-text-inverse/70">
                {siteConfig.reviews.count}+ reviews on {siteConfig.reviews.platform}
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Peak Ridge on Google"
                className="text-text-inverse/50 hover:text-text-inverse transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Peak Ridge on Instagram"
                className="text-text-inverse/50 hover:text-text-inverse transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-widest text-text-inverse/50 mb-4">
              Company
            </h3>
            <ul role="list" className="space-y-2.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9rem] text-text-inverse/70 hover:text-text-inverse transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-widest text-text-inverse/50 mb-4">
              Services
            </h3>
            <ul role="list" className="space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9rem] text-text-inverse/70 hover:text-text-inverse transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-widest text-text-inverse/50 mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2.5 text-[0.9rem] text-text-inverse/70">
              <p>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-text-inverse transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-text-inverse transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="leading-snug">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
              <p>{siteConfig.hours}</p>
            </address>

            {/* Service areas */}
            <div className="mt-5">
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-widest text-text-inverse/50 mb-3">
                Service Areas
              </h4>
              <ul role="list" className="space-y-1.5">
                {footerNav.serviceAreas.slice(0, -1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.875rem] text-text-inverse/70 hover:text-text-inverse transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-text-inverse/10">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-fine text-text-inverse/50 text-center sm:text-left">
              © {year} Peak Ridge Remodeling. CCB License #[PLACEHOLDER]. All rights reserved.
            </p>
            <ul role="list" className="flex items-center gap-4">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-fine text-text-inverse/50 hover:text-text-inverse/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
