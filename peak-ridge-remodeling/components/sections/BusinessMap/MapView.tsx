'use client'

import { useState, useCallback } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { BusinessMapProps } from './types'
import { BusinessMarker } from './BusinessMarker'
import { MapControls } from './MapControls'
import { DirectionsPanel } from './DirectionsPanel'

function ScrollWheelActivator() {
  const map = useMapEvents({
    click() {
      map.scrollWheelZoom.enable()
    },
  })
  return null
}

export function MapView({ location, extraLocations = [], zoom = 15, height = '500px' }: BusinessMapProps) {
  const [panelOpen, setPanelOpen] = useState(false)
  const center: [number, number] = [location.lat, location.lng]

  const openPanel = useCallback(() => setPanelOpen(true), [])
  const closePanel = useCallback(() => setPanelOpen(false), [])

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ScrollWheelActivator />
        <MapControls center={center} zoom={zoom} />
        <BusinessMarker location={location} onGetDirections={openPanel} />
        {extraLocations.map((loc, i) => (
          <BusinessMarker key={i} location={loc} onGetDirections={openPanel} />
        ))}
        <DirectionsPanel destination={location} isOpen={panelOpen} onClose={closePanel} />
      </MapContainer>

      {/* Scroll-to-zoom hint */}
      {!panelOpen && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[999] pointer-events-none">
          <span className="bg-black/50 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-sm select-none">
            Click map to enable scroll zoom
          </span>
        </div>
      )}
    </div>
  )
}
