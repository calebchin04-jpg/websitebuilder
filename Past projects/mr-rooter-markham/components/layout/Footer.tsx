import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { footerNav } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 — Brand + Contact */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold text-base">Mr. Rooter Plumbing</p>
            <p className="text-white/60 text-sm">of Markham</p>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-white font-semibold text-lg hover:text-white/80 transition-colors"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <div className="flex items-start gap-2 text-white/70 text-sm">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>Serving Markham & York Region</span>
          </div>
          <div className="flex items-start gap-2 text-white/70 text-sm">
            <Clock size={15} className="mt-0.5 shrink-0" />
            <div>
              <p>{siteConfig.hours.emergency}</p>
              <p>{siteConfig.hours.regular}</p>
            </div>
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Services</p>
          <nav className="flex flex-col gap-2">
            {footerNav.services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Company */}
        <div>
          <p className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Company</p>
          <nav className="flex flex-col gap-2">
            {footerNav.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Mr. Rooter Plumbing of Markham. All rights reserved.</p>
          <p>Neighbourly Done Right Promise®</p>
        </div>
      </div>
    </footer>
  )
}
