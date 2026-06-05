type StarRatingProps = {
  rating: number
  max?: number
  size?: 'sm' | 'md'
}

// Star path fitted to an 18x18 viewBox
const STAR_PATH =
  'M9 1.5l2.163 4.38 4.837.703-3.5 3.413.826 4.817L9 12.513l-4.326 2.3.826-4.817L2 6.583l4.837-.703L9 1.5z'

const SIZE_MAP = { sm: 14, md: 18 }

export function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const px = SIZE_MAP[size]

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1) // 0–1 for this star
        const clipId = `star-clip-${i}-${Math.round(rating * 10)}-${px}`

        if (fill >= 1) {
          return (
            <svg
              key={i}
              width={px}
              height={px}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d={STAR_PATH} fill="var(--color-gold)" />
            </svg>
          )
        }

        if (fill <= 0) {
          return (
            <svg
              key={i}
              width={px}
              height={px}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d={STAR_PATH}
                stroke="var(--color-gold)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          )
        }

        // Partial star — clip to fill percentage
        return (
          <svg
            key={i}
            width={px}
            height={px}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={clipId}>
                <rect x="0" y="0" width={`${Math.round(fill * 100)}%`} height="18" />
              </clipPath>
            </defs>
            {/* Outline (empty) */}
            <path
              d={STAR_PATH}
              stroke="var(--color-gold)"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Filled portion clipped */}
            <path
              d={STAR_PATH}
              fill="var(--color-gold)"
              clipPath={`url(#${clipId})`}
            />
          </svg>
        )
      })}
    </div>
  )
}
