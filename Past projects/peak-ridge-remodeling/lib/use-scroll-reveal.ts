'use client'

import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Adds the `visible` class to elements with the `reveal` class
 * when they enter the viewport.
 *
 * Usage: call useScrollReveal() once in a client component wrapper,
 * or add `.reveal` class directly to elements and include this hook
 * in a layout-level client component.
 */
export function useScrollReveal(rootMargin = '0px 0px -60px 0px') {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Bail early if reduced motion is preferred — CSS handles it
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Make all reveal elements immediately visible
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('visible')
      })
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve after reveal — no need to re-animate
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { rootMargin, threshold: 0.08 }
    )

    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [rootMargin])
}
