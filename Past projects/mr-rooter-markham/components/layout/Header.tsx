'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-30 bg-surface-1 transition-shadow duration-200',
        scrolled ? 'shadow-header-scroll' : 'border-b border-border-default'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-lg text-text-primary leading-tight">
            Mr. Rooter<br />
            <span className="font-normal text-sm text-text-secondary">Plumbing of Markham</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-text-primary hover:text-brand-red transition-colors"
          >
            <Phone size={15} />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="h-[40px] px-5 bg-brand-red text-white text-sm font-semibold uppercase tracking-wide rounded-btn flex items-center hover:bg-brand-red-hover transition-colors"
          >
            Schedule Service
          </Link>
        </div>

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </header>
  )
}
