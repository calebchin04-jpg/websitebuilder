'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in the viewport when the page loads, reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      const t = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(t)
    }

    // Hard fallback — never leave content invisible
    const fallback = setTimeout(() => setVisible(true), 2000 + delay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback)
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        // Only apply transition when revealing — no transition on initial invisible state
        transition: visible
          ? `opacity 380ms ease ${delay}ms, transform 380ms ease ${delay}ms`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}
