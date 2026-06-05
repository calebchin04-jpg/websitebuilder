import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crossroads Map — The Circular Constellation',
  description: 'Explore Markham\'s local businesses on the Crossroads Map. Discover, vote, and unlock community deals.',
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="heritage-night"
      style={{ backgroundColor: '#14110D', minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}
