import { cn } from '@/lib/utils'

type StarRatingProps = {
  rating?: number
  max?: number
  className?: string
  starClassName?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

export function StarRating({
  rating = 5,
  max = 5,
  className,
  starClassName,
  size = 'md',
}: StarRatingProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`${rating} out of ${max} stars`}
      role="img"
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i < Math.round(rating)
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(
              sizeMap[size],
              filled ? 'fill-accent text-accent' : 'fill-border text-border',
              starClassName
            )}
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      })}
    </span>
  )
}
