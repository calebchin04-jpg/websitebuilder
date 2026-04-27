'use client'

import dynamic from 'next/dynamic'
import { BusinessMapProps } from './types'

const MapView = dynamic(() => import('./MapView').then(m => m.MapView), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-xl bg-gray-100 border border-gray-200 animate-pulse flex items-center justify-center"
      style={{ height: '500px' }}
    >
      <span className="text-sm text-gray-400">Loading map…</span>
    </div>
  ),
})

export function BusinessMap(props: BusinessMapProps) {
  return <MapView {...props} />
}
