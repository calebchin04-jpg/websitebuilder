import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/site'

type CTABandProps = {
  heading?: string
  subtext?: string
}

export function CTABand({
  heading = 'Plumbing Emergency? Don\'t Wait.',
  subtext = 'We pick up 24 hours a day. No overtime charges.',
}: CTABandProps) {
  return (
    <section className="bg-brand-red text-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-1">{heading}</h2>
          <p className="text-white/80 text-base">{subtext}</p>
        </div>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-2 h-[56px] px-8 bg-white text-brand-red font-bold text-xl uppercase tracking-wide rounded-btn hover:bg-white/90 transition-colors shrink-0"
        >
          <Phone size={20} />
          {siteConfig.phone}
        </a>
      </div>
    </section>
  )
}
