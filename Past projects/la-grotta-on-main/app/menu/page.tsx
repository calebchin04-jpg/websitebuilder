import { MenuContent } from '@/components/sections/MenuContent'
import { CTABand } from '@/components/sections/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu — La Grotta On Main',
  description:
    'Explore our Italian menu featuring fresh pasta, seafood, grilled meats, and house-made desserts. Family-owned fine dining in Unionville, Ontario.',
}

export default function MenuPage() {
  return (
    <>
      <MenuContent />
      <CTABand />
    </>
  )
}
