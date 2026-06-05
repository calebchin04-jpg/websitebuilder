import { cn } from '@/lib/utils'

type PageHeroVariant = 'standard' | 'emergency'

type PageHeroProps = {
  title: string
  subtitle?: string
  variant?: PageHeroVariant
  breadcrumb?: string
}

export function PageHero({ title, subtitle, variant = 'standard', breadcrumb }: PageHeroProps) {
  return (
    <section
      className={cn(
        'py-14 lg:py-20',
        variant === 'emergency' ? 'bg-surface-dark text-text-inverse' : 'bg-surface-2'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        {breadcrumb && (
          <p className={cn('text-xs font-medium uppercase tracking-wider mb-3', variant === 'emergency' ? 'text-white/50' : 'text-text-secondary')}>
            {breadcrumb}
          </p>
        )}
        <h1
          className={cn(
            'text-3xl lg:text-4xl font-extrabold mb-3',
            variant === 'emergency' ? 'text-text-inverse' : 'text-text-primary'
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={cn('text-lg max-w-2xl', variant === 'emergency' ? 'text-white/70' : 'text-text-secondary')}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
