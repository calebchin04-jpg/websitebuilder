import { cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { siteConfig } from '@/data/site'

type TrustBarItem = {
  value: string
  label: string
  icon?: 'star' | 'shield' | 'check' | 'calendar'
}

const defaultItems: TrustBarItem[] = [
  { value: `${siteConfig.reviews.rating}★`, label: `${siteConfig.reviews.count}+ Google Reviews`, icon: 'star' },
  { value: `${siteConfig.stats.yearsInBusiness}+`, label: 'Years in Portland', icon: 'calendar' },
  { value: `${siteConfig.stats.projectsCompleted}+`, label: 'Projects Completed', icon: 'check' },
  { value: '12-year', label: 'Workmanship Warranty', icon: 'shield' },
]

type TrustBarProps = {
  items?: TrustBarItem[]
  className?: string
}

function TrustIcon({ icon }: { icon?: TrustBarItem['icon'] }) {
  const cls = 'w-5 h-5 flex-shrink-0 text-primary'
  switch (icon) {
    case 'star':
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'shield':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    case 'check':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    default:
      return null
  }
}

export function TrustBar({ items = defaultItems, className }: TrustBarProps) {
  return (
    <div
      className={cn(
        'bg-base border-y border-border',
        'py-5 md:py-6',
        className
      )}
      aria-label="Trust and credibility highlights"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className={cn(
            'grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4',
          )}
        >
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3"
            >
              <TrustIcon icon={item.icon} />
              <div>
                <div className="font-bold text-[1rem] text-text-primary leading-tight">{item.value}</div>
                <div className="text-fine text-text-secondary">{item.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
