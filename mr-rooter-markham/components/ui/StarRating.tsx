import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type StarRatingProps = {
  rating: number
  className?: string
  size?: number
}

export function StarRating({ rating, className, size = 16 }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-accent-yellow text-accent-yellow' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}
