import type { Metadata } from 'next'
import UltrasonicShare from '@/components/UltrasonicShare'

export const metadata: Metadata = {
  title: 'tap — @too_good2008',
  description: 'Hold two phones together to connect on Instagram.',
}

export default function TapPage() {
  return <UltrasonicShare />
}
