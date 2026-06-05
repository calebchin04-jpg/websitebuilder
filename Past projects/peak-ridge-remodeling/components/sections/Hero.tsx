import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { siteConfig } from '@/data/site'

type HeroVariant = 'home' | 'service' | 'city' | 'page'

type HeroProps = {
  variant?: HeroVariant
  headline: string
  subheadline?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  imageSrc?: string
  imageAlt?: string
  showReviews?: boolean
  breadcrumb?: { label: string; href?: string }[]
}

export function Hero({
  variant = 'home',
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  showReviews = true,
  breadcrumb,
}: HeroProps) {
  const isHome = variant === 'home'
  const hasImage = !!imageSrc

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isHome
          ? 'bg-surface py-16 md:py-20 lg:py-28'
          : 'bg-surface py-12 md:py-16 lg:py-20'
      )}
      aria-label="Page hero"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-fine text-text-secondary flex-wrap" role="list">
              <li>
                <Link href="/" className="hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={cn(
          'grid gap-10 lg:gap-16 items-center',
          hasImage ? 'lg:grid-cols-2' : 'max-w-3xl'
        )}>
          {/* Text content */}
          <div className={cn(!hasImage && 'text-left')}>
            {/* Review badge — only on pages where it helps */}
            {showReviews && isHome && (
              <div className="flex items-center gap-2.5 mb-6">
                <StarRating rating={siteConfig.reviews.rating} size="sm" />
                <span className="text-fine font-medium text-text-secondary">
                  {siteConfig.reviews.rating}★ · {siteConfig.reviews.count}+ reviews on{' '}
                  <a
                    href={siteConfig.reviews.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-text-primary transition-colors"
                  >
                    {siteConfig.reviews.platform}
                  </a>
                </span>
              </div>
            )}

            <h1
              className={cn(
                'text-balance font-extrabold text-text-primary',
                isHome
                  ? 'text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.02em] mb-5'
                  : 'text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.015em] mb-4'
              )}
            >
              {headline}
            </h1>

            {subheadline && (
              <p
                className={cn(
                  'text-text-secondary leading-relaxed mb-8',
                  isHome
                    ? 'text-[1.125rem] md:text-[1.1875rem] max-w-[520px]'
                    : 'text-body-lg max-w-[480px]'
                )}
              >
                {subheadline}
              </p>
            )}

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-wrap gap-3">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className={cn(
                      'inline-flex items-center justify-center h-13 px-7',
                      'bg-primary text-text-inverse font-semibold text-ui rounded',
                      'hover:bg-primary-dark active:scale-[0.98]',
                      'transition-colors duration-150 shadow-button',
                      'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
                    )}
                    style={{ height: '3.25rem' }}
                  >
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className={cn(
                      'inline-flex items-center justify-center h-13 px-7',
                      'bg-transparent border border-primary text-primary font-semibold text-ui rounded',
                      'hover:bg-primary/8 active:scale-[0.98]',
                      'transition-colors duration-150',
                      'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
                    )}
                    style={{ height: '3.25rem' }}
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}

            {/* Guarantee line */}
            {isHome && (
              <p className="mt-5 text-fine text-text-muted">
                {siteConfig.guarantee}
              </p>
            )}
          </div>

          {/* Hero image */}
          {hasImage && imageSrc && (
            <div
              className={cn(
                'relative rounded-xl overflow-hidden',
                isHome
                  ? 'aspect-[4/3] lg:aspect-[3/2]'
                  : 'aspect-[4/3]'
              )}
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
