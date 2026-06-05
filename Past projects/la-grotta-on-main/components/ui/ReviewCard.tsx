import { StarRating } from '@/components/ui/StarRating'

type ReviewCardProps = {
  quote: string
  author: string
  source: 'Google' | 'OpenTable'
  rating: number
}

export function ReviewCard({ quote, author, source, rating }: ReviewCardProps) {
  return (
    <div className="bg-surface-1 rounded-card shadow-card border-l-[3px] border-l-gold p-6">
      <div className="flex items-center gap-3 mb-3">
        <StarRating rating={rating} size="sm" />
        <span className="text-xs font-sans text-text-secondary font-medium tracking-wide uppercase">
          {source}
        </span>
      </div>
      <p className="font-sans italic text-base text-text-primary leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-sans text-sm text-text-secondary mt-3">
        — {author}
      </p>
    </div>
  )
}
