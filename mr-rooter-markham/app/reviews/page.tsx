import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { StarRating } from '@/components/ui/StarRating'
import { CTABand } from '@/components/sections/CTABand'
import { reviews } from '@/data/reviews'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: `${siteConfig.googleRating}-star rated plumber in Markham. Read what our customers say about our 24/7 service and flat-rate pricing.`,
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="What Markham Says About Us"
        subtitle={`${siteConfig.googleRating} stars on Google · ${siteConfig.reviewCount}+ verified reviews`}
        breadcrumb="Reviews"
      />
      <SectionWrapper bg="surface-1">
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-border-default">
          <div className="text-5xl font-extrabold text-text-primary">{siteConfig.googleRating}</div>
          <div>
            <StarRating rating={siteConfig.googleRating} size={22} />
            <p className="text-text-secondary text-sm mt-1">Based on {siteConfig.reviewCount}+ Google reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </SectionWrapper>
      <CTABand heading="Ready to experience it yourself?" subtext="Call or schedule — flat-rate pricing, no overtime." />
    </>
  )
}
