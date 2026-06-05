import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServiceAreaMap } from '@/components/sections/ServiceAreaMap'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Service Areas | Portland Metro Remodeling — Peak Ridge',
  description:
    'Peak Ridge Remodeling serves homeowners across the Portland metro area including Portland, Beaverton, Lake Oswego, Tigard, and surrounding communities.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Service Areas"
        subheadline="We serve homeowners throughout the Portland metro — kitchen, bathroom, and basement remodeling."
        breadcrumb={[{ label: 'Service Areas' }]}
      />

      <ServiceAreaMap
        heading="Serving the Portland Metro"
        subheading="From inner Portland neighborhoods to Washington County suburbs — we come to you."
        background="base"
      />

      <CTASection
        heading="Serving Your Neighborhood"
        subheading="Get a free in-home estimate — we'll come to you anywhere in the Portland metro area."
        variant="primary"
      />
    </>
  )
}
