'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Hamburger button — visible on mobile only */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className={cn(
          'lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded',
          'text-text-primary hover:bg-surface transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
        )}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {/* Animated hamburger icon */}
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-transform duration-250',
            open ? 'translate-y-[6px] rotate-45' : '-translate-y-1'
          )}
        />
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-opacity duration-200',
            open ? 'opacity-0' : 'opacity-100'
          )}
        />
        <span
          className={cn(
            'block w-5 h-0.5 bg-current transition-transform duration-250',
            open ? '-translate-y-[6px] -rotate-45' : 'translate-y-1'
          )}
        />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-text-primary/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        className={cn(
          'lg:hidden fixed top-0 right-0 bottom-0 z-50',
          'w-80 max-w-[90vw] bg-base shadow-card-hover',
          'flex flex-col',
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!open}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-border flex-shrink-0">
          <span className="font-bold text-[0.9375rem] text-text-primary">
            Peak Ridge Remodeling
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-surface transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Mobile navigation links">
          <ul role="list" className="space-y-1">
            {mainNav.map((item) => {
              if (item.isCTA) return null
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href))

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-3.5 rounded-lg',
                      'text-body font-medium min-h-[48px]',
                      'transition-colors duration-150',
                      isActive
                        ? 'bg-primary/8 text-primary'
                        : 'text-text-primary hover:bg-surface'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>

                  {/* Sub-links */}
                  {item.children && (
                    <ul role="list" className="mt-1 ml-3 space-y-0.5 border-l-2 border-border pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              'flex items-center px-3 py-2.5 rounded-lg',
                              'text-body text-[0.875rem] min-h-[44px]',
                              'text-text-secondary hover:text-text-primary hover:bg-surface',
                              'transition-colors duration-150'
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA + contact at bottom */}
        <div className="flex-shrink-0 border-t border-border p-4 space-y-3">
          <Link
            href="/contact"
            className={cn(
              'flex items-center justify-center w-full h-12 rounded',
              'bg-primary text-text-inverse font-semibold text-ui',
              'hover:bg-primary-dark transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
            )}
          >
            Get a Free Estimate
          </Link>
          <a
            href={siteConfig.phoneHref}
            className={cn(
              'flex items-center justify-center w-full h-12 rounded',
              'border border-border text-text-primary font-medium text-ui',
              'hover:bg-surface transition-colors duration-150'
            )}
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  )
}
