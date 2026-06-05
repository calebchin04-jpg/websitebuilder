'use client'

import { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { BusinessLocation } from './types'

const brandPin = (color = '#274720') => L.divIcon({
  className: '',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
      <path d="M16 0C7.164 0 0 7.164 0 16c0 10.667 14.222 24.889 15.111 25.778a1.333 1.333 0 0 0 1.778 0C17.778 40.889 32 26.667 32 16 32 7.164 24.836 0 16 0z" fill="${color}"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  `,
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -44],
})

interface BusinessMarkerProps {
  location: BusinessLocation
  onGetDirections: () => void
}

export function BusinessMarker({ location, onGetDirections }: BusinessMarkerProps) {
  const map = useMap()

  useEffect(() => {
    // Disable default zoom control — we use custom controls
    map.zoomControl.remove()
  }, [map])

  return (
    <Marker position={[location.lat, location.lng]} icon={brandPin()}>
      <Popup className="business-popup" minWidth={220}>
        <div className="py-1">
          <p className="font-bold text-gray-900 text-sm mb-1">{location.name}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline flex items-center gap-1 mb-1"
          >
            {location.address}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 shrink-0">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {location.phone && (
            <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-xs text-gray-600 hover:text-gray-900 block mb-1">
              {location.phone}
            </a>
          )}
          {location.hours && (
            <p className="text-xs text-gray-500 mb-2">{location.hours}</p>
          )}
          <button
            onClick={onGetDirections}
            className="mt-1 w-full text-xs font-semibold text-white rounded px-3 py-1.5 transition-colors"
            style={{ backgroundColor: '#274720' }}
          >
            Get Directions →
          </button>
        </div>
      </Popup>
    </Marker>
  )
}
