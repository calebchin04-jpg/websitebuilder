'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { mainNav } from '@/data/navigation'
import { BookingCTA } from '@/components/ui/BookingCTA'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="flex items-center justify-center w-11 h-11 rounded text-text-inverse hover:bg-white/10 transition-colors duration-200 md:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-surface-dark flex flex-col transition-transform duration-250 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-[60px] border-b border-white/10">
          <span className="font-serif text-sm font-semibold text-text-inverse">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-10 h-10 rounded text-text-inverse hover:bg-white/10 transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col divide-y divide-white/10 flex-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 font-sans text-sm font-medium text-text-inverse hover:bg-white/10 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8">
          <BookingCTA label="Book a Tee Time" size="default" className="w-full justify-center" />
        </div>
      </div>
    </>
  )
}
