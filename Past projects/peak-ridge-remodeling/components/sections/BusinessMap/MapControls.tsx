'use client'

import { useMap } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

interface MapControlsProps {
  center: LatLngExpression
  zoom: number
}

export function MapControls({ center, zoom }: MapControlsProps) {
  const map = useMap()

  return (
    <div className="absolute top-3 right-3 z-[1000] flex flex-col gap-1">
      <button
        onClick={() => map.zoomIn()}
        aria-label="Zoom in"
        className="w-9 h-9 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold text-lg leading-none transition-colors"
      >
        +
      </button>
      <button
        onClick={() => map.zoomOut()}
        aria-label="Zoom out"
        className="w-9 h-9 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-bold text-lg leading-none transition-colors"
      >
        −
      </button>
      <button
        onClick={() => map.setView(center, zoom)}
        aria-label="Re-center map"
        title="Re-center"
        className="w-9 h-9 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors mt-1"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </button>
    </div>
  )
}
