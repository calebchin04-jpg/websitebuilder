'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/site'

type MobileNavProps = {
  isOpen: boolean
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus the close button when opened
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      // Return focus to the hamburger trigger
      triggerRef.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, triggerRef])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return
    const overlay = overlayRef.current
    if (!overlay) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      )
      const focusableArray = Array.from(focusable)
      if (focusableArray.length === 0) return
      const first = focusableArray[0]
      const last = focusableArray[focusableArray.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={[
        'fixed inset-0 z-50 bg-surface-dark/95 flex flex-col',
        'transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      {/* Close button */}
      <div className="flex justify-end px-5 pt-5 pb-2">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 flex items-center justify-center text-text-inverse hover:text-gold transition-colors duration-200 rounded-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-serif text-3xl font-semibold text-text-inverse hover:text-gold transition-colors duration-200 py-3 border-b border-white/10 last:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Phone CTA at bottom */}
      <div className="px-8 pb-12 pt-6">
        <a
          href={siteConfig.phoneHref}
          onClick={onClose}
          className="flex items-center gap-3 text-gold hover:text-gold-hover transition-colors duration-200 font-sans font-semibold text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
              fill="currentColor"
            />
          </svg>
          {siteConfig.phone}
        </a>
      </div>
    </div>
  )
}
