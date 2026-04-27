'use client'

import { useState } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import { TravelMode, RouteResult, BusinessLocation } from './types'
import { DirectionStep } from './DirectionStep'

const OSRM_PROFILE: Record<TravelMode, string> = {
  drive: 'driving',
  walk: 'walking',
  bike: 'cycling',
  transit: '',
}

const MODE_LABELS: { mode: TravelMode; label: string; icon: string }[] = [
  { mode: 'drive', label: 'Drive', icon: '🚗' },
  { mode: 'walk', label: 'Walk', icon: '🚶' },
  { mode: 'bike', label: 'Bike', icon: '🚲' },
  { mode: 'transit', label: 'Transit', icon: '🚌' },
]

function metersToMiles(m: number) {
  return (m * 0.000621371).toFixed(1) + ' mi'
}

function secondsToTime(s: number) {
  if (s < 3600) return `~${Math.ceil(s / 60)} min`
  const h = Math.floor(s / 3600)
  const m = Math.ceil((s % 3600) / 60)
  return `~${h}h ${m}m`
}

let routeLayer: L.Polyline | null = null

interface DirectionsPanelProps {
  destination: BusinessLocation
  isOpen: boolean
  onClose: () => void
}

export function DirectionsPanel({ destination, isOpen, onClose }: DirectionsPanelProps) {
  const map = useMap()
  const [origin, setOrigin] = useState('')
  const [mode, setMode] = useState<TravelMode>('drive')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<RouteResult | null>(null)

  async function handleGetDirections() {
    if (!origin.trim()) { setError('Enter a starting address.'); return }

    if (mode === 'transit') {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination.address)}&travelmode=transit`
      window.open(url, '_blank', 'noopener')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      // Geocode origin with Nominatim
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(origin)}&format=json&limit=1`,
        { headers: { 'Accept-Language': 'en' } }
      )
      const geoData = await geoRes.json()
      if (!geoData.length) throw new Error('Address not found. Try adding a city or zip code.')

      const originLat = parseFloat(geoData[0].lat)
      const originLng = parseFloat(geoData[0].lon)
      const profile = OSRM_PROFILE[mode]

      // Route with OSRM
      const routeRes = await fetch(
        `https://router.project-osrm.org/route/v1/${profile}/${originLng},${originLat};${destination.lng},${destination.lat}?steps=true&geometries=geojson`
      )
      const routeData = await routeRes.json()
      if (routeData.code !== 'Ok' || !routeData.routes.length) throw new Error('No route found between those locations.')

      const route = routeData.routes[0]
      const leg = route.legs[0]

      // Draw polyline on map
      if (routeLayer) map.removeLayer(routeLayer)
      routeLayer = L.polyline(
        route.geometry.coordinates.map(([lng, lat]: [number, number]) => [lat, lng] as L.LatLngTuple),
        { color: '#274720', weight: 4, opacity: 0.8 }
      ).addTo(map)
      map.fitBounds(routeLayer.getBounds(), { padding: [40, 40] })

      const steps = leg.steps.map((step: { maneuver: { type: string; modifier?: string }; name: string; distance: number }) => ({
        instruction: step.name
          ? `${step.maneuver.type.replace(/-/g, ' ')} onto <strong>${step.name}</strong>`
          : step.maneuver.type.replace(/-/g, ' '),
        distance: step.distance > 0 ? metersToMiles(step.distance) : '',
        maneuver: step.maneuver.modifier
          ? `${step.maneuver.type}-${step.maneuver.modifier}`
          : step.maneuver.type,
      }))

      setResult({
        duration: secondsToTime(route.duration),
        distance: metersToMiles(route.distance),
        steps,
      })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null }
    setResult(null)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-0 left-0 h-full w-72 z-[1000] bg-white shadow-xl flex flex-col overflow-hidden rounded-l-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: '#274720' }}>
        <h3 className="text-sm font-bold text-white">Get Directions</h3>
        <button onClick={handleClose} aria-label="Close directions" className="text-white/70 hover:text-white text-xl leading-none">×</button>
      </div>

      {/* Destination */}
      <div className="px-4 py-2.5 bg-gray-50 border-b">
        <p className="text-[11px] text-gray-500 uppercase tracking-wide font-semibold mb-0.5">To</p>
        <p className="text-xs font-medium text-gray-800">{destination.name}</p>
        <p className="text-[11px] text-gray-500">{destination.address}</p>
      </div>

      {/* Origin input */}
      <div className="px-4 pt-3 pb-2">
        <label className="text-[11px] text-gray-500 uppercase tracking-wide font-semibold block mb-1">From</label>
        <input
          type="text"
          value={origin}
          onChange={e => setOrigin(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleGetDirections()}
          placeholder="Enter starting address…"
          className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:border-transparent"
          style={{ '--tw-ring-color': '#274720' } as React.CSSProperties}
        />
      </div>

      {/* Mode tabs */}
      <div className="px-4 pb-3 flex gap-1.5">
        {MODE_LABELS.map(({ mode: m, label, icon }) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[10px] font-semibold border transition-colors ${
              mode === m
                ? 'text-white border-transparent'
                : 'text-gray-600 border-gray-200 hover:border-gray-300 bg-white'
            }`}
            style={mode === m ? { backgroundColor: '#274720', borderColor: '#274720' } : {}}
          >
            <span className="text-base leading-none">{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Go button */}
      <div className="px-4 pb-3">
        <button
          onClick={handleGetDirections}
          disabled={loading}
          className="w-full py-2 text-xs font-bold text-white rounded-lg transition-opacity disabled:opacity-60"
          style={{ backgroundColor: '#274720' }}
        >
          {loading ? 'Finding route…' : mode === 'transit' ? 'Open in Google Maps →' : 'Get Directions'}
        </button>
        {error && <p className="mt-2 text-[11px] text-red-600">{error}</p>}
      </div>

      {/* Results */}
      {result && (
        <div className="flex-1 overflow-y-auto border-t flex flex-col">
          <div className="px-4 py-2.5 bg-gray-50 border-b flex items-center gap-4">
            <div>
              <p className="text-sm font-bold text-gray-900">{result.duration}</p>
              <p className="text-[11px] text-gray-500">{result.distance}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {result.steps.map((step, i) => (
              <DirectionStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
