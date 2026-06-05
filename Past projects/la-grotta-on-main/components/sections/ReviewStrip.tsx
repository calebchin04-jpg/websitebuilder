import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { StarRating } from '@/components/ui/StarRating'
import { reviews } from '@/data/reviews'
import { siteConfig } from '@/data/site'

export function ReviewStrip() {
  return (
    <SectionWrapper bg="surface-2" size="standard" id="reviews">

      {/* Rating badge */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-serif text-5xl font-semibold text-gold leading-none">
          {siteConfig.googleRating}
        </span>
        <div className="mt-2">
          <StarRating rating={siteConfig.googleRating} size="md" />
        </div>
        <p className="font-sans text-sm text-text-secondary mt-2">on Google</p>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ScrollReveal key={review.author} delay={index * 100}>
            <ReviewCard
              quote={review.quote}
              author={review.author}
              source={review.source}
              rating={review.rating}
            />
          </ScrollReveal>
        ))}
      </div>

    </SectionWrapper>
  )
}
