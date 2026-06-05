'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { MobileNav } from '@/components/layout/MobileNav'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pathname = usePathname()
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    // Set initial state
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full bg-surface-1 transition-shadow duration-200',
          scrolled
            ? 'shadow-header-scroll border-b-0'
            : 'border-b border-border-default'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="La Grotta On Main — Home">
            <Image
              src="https://lagrottaonmain.ca/wp-content/uploads/2024/10/cropped-La_Grotta_Logo_hor-1030x462-1-e1729188487195.png"
              alt="La Grotta On Main"
              width={160}
              height={72}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop center nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {mainNav.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'font-sans text-sm font-medium transition-colors duration-200 relative py-1',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm',
                    isActive
                      ? 'text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold after:rounded-full'
                      : 'text-text-primary hover:text-gold'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href={siteConfig.phoneHref}
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Reserve a Table
            </Button>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-text-primary hover:text-gold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm"
            >
              <span className="block w-5 h-[2px] bg-current rounded-full" />
              <span className="block w-5 h-[2px] bg-current rounded-full" />
              <span className="block w-5 h-[2px] bg-current rounded-full" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        triggerRef={hamburgerRef}
      />
    </>
  )
}
