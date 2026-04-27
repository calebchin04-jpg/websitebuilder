import Link from 'next/link'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { MobileNav } from '@/components/layout/MobileNav'

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-surface-dark shadow-header">
      <div className="mx-auto max-w-content px-5 md:px-8 h-[64px] md:h-[68px] flex items-center justify-between gap-6">

        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-serif text-base md:text-lg font-semibold text-text-inverse hover:opacity-90 transition-opacity shrink-0"
          aria-label={`${siteConfig.name} — Home`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-text-inverse/80 hover:text-text-inverse underline-offset-4 hover:underline transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <BookingCTA size="default" />
        </div>

        {/* Mobile: compact CTA + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <BookingCTA label="Book" size="sm" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
