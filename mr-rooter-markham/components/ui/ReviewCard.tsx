import { StarRating } from './StarRating'
import type { Review } from '@/data/reviews'

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-surface-1 border border-border-default rounded-card p-6 flex flex-col gap-3 shadow-card">
      <StarRating rating={review.rating} />
      <p className="text-text-primary text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="mt-auto pt-2 border-t border-border-default">
        <p className="font-semibold text-text-primary text-sm">{review.name}</p>
        <p className="text-text-secondary text-xs">{review.location} · {review.service}</p>
      </div>
    </div>
  )
}
