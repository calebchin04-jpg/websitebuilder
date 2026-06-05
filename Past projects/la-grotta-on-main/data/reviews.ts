export type ReviewItem = {
  quote: string
  author: string
  source: 'Google' | 'OpenTable'
  rating: number
}

export const reviews: ReviewItem[] = [
  {
    quote: 'An absolute gem in Unionville. The food is consistently wonderful and the owner makes you feel genuinely welcome every single time.',
    author: 'Sarah M.',
    source: 'Google',
    rating: 5,
  },
  {
    quote: 'We have been coming here for years. It is one of those rare restaurants that just gets better with time. The rack of lamb is unforgettable.',
    author: 'David L.',
    source: 'Google',
    rating: 5,
  },
  {
    quote: 'The atmosphere is warm, the service is personal, and the food is the real thing. Worth every visit.',
    author: 'Jennifer T.',
    source: 'OpenTable',
    rating: 5,
  },
]
