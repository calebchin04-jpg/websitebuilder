import { ContactBlock } from '@/components/sections/ContactBlock'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — La Grotta On Main',
  description:
    'Call us to reserve your table at La Grotta On Main, 205 Main Street, Unionville, Ontario. Family-owned Italian dining since 1996.',
}

export default function ContactPage() {
  return (
    <>
      <ContactBlock />
      <SectionWrapper bg="surface-2" size="standard">
        <GoogleMap />
      </SectionWrapper>
    </>
  )
}
