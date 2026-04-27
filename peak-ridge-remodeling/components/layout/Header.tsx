import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { siteConfig } from '@/data/site'

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full',
        'bg-base/95 backdrop-blur-sm',
        'border-b border-border',
        'shadow-nav'
      )}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-6">
          {/* Logo / business name */}
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2.5 flex-shrink-0',
              'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded'
            )}
            aria-label="Peak Ridge Remodeling — go to homepage"
          >
            {/* Wordmark — replace with SVG logo when available */}
            <span className="flex flex-col leading-tight">
              <span className="font-extrabold text-[1.0625rem] text-primary tracking-tight">
                Peak Ridge
              </span>
              <span className="text-[0.6875rem] font-medium text-text-secondary tracking-wider uppercase">
                Remodeling
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>

          {/* Desktop: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href={siteConfig.phoneHref}
              className="text-[0.875rem] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center h-10 px-5 rounded',
                'bg-primary text-text-inverse text-ui font-semibold',
                'hover:bg-primary-dark active:scale-[0.98]',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
              )}
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile: phone link + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call ${siteConfig.phone}`}
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded',
                'text-text-secondary hover:text-primary hover:bg-surface',
                'transition-colors duration-150'
              )}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
