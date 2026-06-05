import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { StarRating } from '@/components/ui/StarRating'
import { reviews } from '@/data/reviews'
import { siteConfig } from '@/data/site'

export function ReviewStrip() {
  const featured = reviews.slice(0, 3)
  return (
    <SectionWrapper bg="surface-2" id="reviews">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">What Our Customers Say</h2>
          <div className="flex items-center gap-3">
            <StarRating rating={siteConfig.googleRating} size={18} />
            <span className="text-text-secondary text-sm">
              {siteConfig.googleRating} on Google &middot; {siteConfig.reviewCount}+ reviews
            </span>
          </div>
        </div>
        <Link
          href="/reviews"
          className="inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:underline shrink-0"
        >
          All reviews <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((review, i) => (
          <div key={review.id} className={`fade-up-${i + 1}`}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
