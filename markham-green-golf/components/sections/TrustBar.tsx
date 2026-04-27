import { Star } from 'lucide-react'
import { reviewData } from '@/data/reviews'

export function TrustBar() {
  const items = [
    {
      label: reviewData.confirmed
        ? `${reviewData.rating} ★ on Google · ${reviewData.count}+ reviews`
        : '4+ Stars on Google',
      sub: 'Verified customer reviews',
    },
    {
      label: 'Scott Haynes',
      sub: 'PGA of Canada Professional',
    },
    {
      label: 'Public course — no membership',
      sub: 'Open to everyone, any skill level',
    },
    {
      label: 'Markham, Ontario',
      sub: 'Serving the local community',
    },
  ]

  return (
    <div className="bg-surface-dark-alt">
      <div className="mx-auto max-w-content px-5 md:px-8 py-5 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-0.5 ${i > 0 ? 'md:pl-8' : ''} fade-up-${Math.min(i + 1, 4)}`}
            >
              <p className="font-sans text-sm font-semibold text-text-inverse leading-snug">
                {i === 0 && (
                  <Star
                    size={13}
                    className="inline mr-1 text-accent fill-accent"
                    aria-hidden
                  />
                )}
                {item.label}
              </p>
              <p className="font-sans text-xs text-text-inverse/50">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
