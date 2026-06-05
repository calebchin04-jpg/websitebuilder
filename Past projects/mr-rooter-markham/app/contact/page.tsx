import type { Metadata } from 'next'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { TrustBar } from '@/components/sections/TrustBar'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Schedule plumbing service in Markham or call (905) 472-9100 for 24/7 emergency response. No overtime charges.',
}

export default function ContactPage() {
  return (
    <>
      <TrustBar />
      <ContactBlock />
    </>
  )
}
