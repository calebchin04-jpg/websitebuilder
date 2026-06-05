import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { footerNav } from '@/data/navigation'
import { PhoneLink } from '@/components/ui/PhoneLink'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark text-text-inverse">
      <div className="mx-auto max-w-content px-5 md:px-8 pt-14 pb-8">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-serif text-lg font-semibold text-text-inverse hover:opacity-90 transition-opacity">
              {siteConfig.name}
            </Link>
            <p className="font-sans text-sm text-text-inverse/60 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            {(siteConfig.social.instagram || siteConfig.social.facebook) && (
              <div className="flex items-center gap-4 mt-1">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-text-inverse/50 hover:text-text-inverse transition-colors duration-200"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-text-inverse/50 hover:text-text-inverse transition-colors duration-200"
                  >
                    <Facebook size={18} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2 — Pages */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-inverse/40 mb-1">
              Pages
            </p>
            {footerNav.pages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-text-inverse/70 hover:text-text-inverse transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-inverse/40 mb-1">
              Contact
            </p>
            <PhoneLink className="font-sans text-sm text-text-inverse/70 hover:text-text-inverse" />
            {siteConfig.address ? (
              <p className="font-sans text-sm text-text-inverse/70 leading-relaxed">
                {siteConfig.address}
              </p>
            ) : (
              <p className="font-sans text-sm text-text-inverse/40 italic">Address coming soon</p>
            )}
            {siteConfig.hours.note && (
              <p className="font-sans text-sm text-text-inverse/60">{siteConfig.hours.note}</p>
            )}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-text-inverse/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs text-text-inverse/40 hover:text-text-inverse/70 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
