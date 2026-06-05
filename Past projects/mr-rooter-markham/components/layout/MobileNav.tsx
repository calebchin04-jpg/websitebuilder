'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden p-2 text-text-primary"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-200',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface-1 shadow-xl md:hidden',
          'flex flex-col transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-border-default">
          <span className="font-semibold text-text-primary">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-text-primary">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-text-primary font-medium border-b border-border-default last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 pb-8 flex flex-col gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 h-12 bg-brand-red text-white font-semibold rounded-btn uppercase tracking-wide text-sm"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center h-12 border border-brand-red text-brand-red font-semibold rounded-btn uppercase tracking-wide text-sm"
          >
            Schedule Service
          </Link>
        </div>
      </div>
    </>
  )
}
