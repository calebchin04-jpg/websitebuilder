import { Tag } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function OfferBanner() {
  return (
    <div className="bg-accent-yellow text-text-primary">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-2.5 flex items-center justify-center gap-2 text-sm font-semibold">
        <Tag size={14} />
        <span>{siteConfig.offer.text} — Limited Time. No overtime charges, ever.</span>
      </div>
    </div>
  )
}
