import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { HeroForm } from './HeroForm'

export function Hero() {
  return (
    <section className="bg-surface-dark text-text-inverse" style={{ minHeight: '85vh' }}>
      <div
        className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-0 min-h-[inherit]
          grid grid-cols-1 lg:grid-cols-[1fr_minmax(24rem,0.5fr)] gap-8 lg:gap-16 items-center"
      >
        {/* LEFT — copy */}
        <div className="flex flex-col gap-6 lg:py-20">
          <p className="text-accent-yellow text-sm font-semibold uppercase tracking-widest">
            Available 24 Hours · No Overtime Charges
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Markham&rsquo;s Emergency Plumber —{' '}
            <span className="text-white/75">We Pick Up at 3am.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-lg">
            Flat-rate pricing. No overtime. Licensed plumbers in Markham since 1995.
            You get a quote before we touch anything.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 h-[52px] px-8 bg-brand-red text-white font-semibold text-base uppercase tracking-wide rounded-btn hover:bg-brand-red-hover transition-colors"
            >
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <span className="text-white/50 text-sm">{siteConfig.googleRating}★ Google</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-sm">{siteConfig.reviewCount}+ reviews</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-sm">Since 1995</span>
          </div>
        </div>

        {/* RIGHT — compact form card */}
        <div className="lg:py-20">
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
