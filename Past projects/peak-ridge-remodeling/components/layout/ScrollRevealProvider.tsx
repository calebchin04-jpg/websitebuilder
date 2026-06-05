'use client'

import { useScrollReveal } from '@/lib/use-scroll-reveal'

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return <>{children}</>
}
