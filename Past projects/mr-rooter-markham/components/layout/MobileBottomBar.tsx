import { Phone, Calendar } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden h-16 flex"
      style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.12)' }}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-red text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-red"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-surface-dark text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-surface-dark"
      >
        <Calendar size={16} />
        Schedule
      </a>
    </div>
  )
}
