import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

type CTASectionProps = {
  heading?: string
  subheading?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  reassurance?: string
  variant?: 'primary' | 'dark' | 'surface'
}

export function CTASection({
  heading = "Ready to start your project?",
  subheading,
  primaryLabel = "Get a Free Estimate",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  reassurance = siteConfig.guarantee,
  variant = 'primary',
}: CTASectionProps) {
  const isPrimary = variant === 'primary'
  const isDark = variant === 'dark'

  return (
    <section
      className={cn(
        'py-16 md:py-20 lg:py-24',
        isPrimary && 'bg-primary',
        isDark && 'bg-text-primary',
        variant === 'surface' && 'bg-surface',
      )}
      aria-label="Call to action"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2
            className={cn(
              'text-h2 font-bold mb-4 text-balance',
              (isPrimary || isDark) ? 'text-text-inverse' : 'text-text-primary'
            )}
          >
            {heading}
          </h2>

          {subheading && (
            <p
              className={cn(
                'text-body-lg mb-8',
                (isPrimary || isDark) ? 'text-text-inverse/80' : 'text-text-secondary'
              )}
            >
              {subheading}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className={cn(
                'inline-flex items-center justify-center w-full sm:w-auto',
                'h-13 px-8 rounded font-semibold text-ui',
                'transition-colors duration-150 active:scale-[0.98]',
                'focus-visible:outline-2 focus-visible:outline-offset-2',
                isPrimary || isDark
                  ? 'bg-text-inverse text-primary hover:bg-text-inverse/90 focus-visible:outline-text-inverse'
                  : 'bg-primary text-text-inverse hover:bg-primary-dark focus-visible:outline-primary shadow-button'
              )}
              style={{ height: '3.25rem' }}
            >
              {primaryLabel}
            </Link>

            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={cn(
                  'inline-flex items-center justify-center w-full sm:w-auto',
                  'h-13 px-8 rounded font-semibold text-ui',
                  'border transition-colors duration-150 active:scale-[0.98]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2',
                  isPrimary || isDark
                    ? 'border-text-inverse/40 text-text-inverse hover:border-text-inverse/70 hover:bg-text-inverse/10 focus-visible:outline-text-inverse'
                    : 'border-primary text-primary hover:bg-primary/8 focus-visible:outline-primary'
                )}
                style={{ height: '3.25rem' }}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          {reassurance && (
            <p
              className={cn(
                'mt-5 text-fine',
                (isPrimary || isDark) ? 'text-text-inverse/60' : 'text-text-muted'
              )}
            >
              {reassurance}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
