export interface BusinessLocation {
  name: string
  lat: number
  lng: number
  address: string
  phone?: string
  hours?: string
}

export interface BusinessMapProps {
  location: BusinessLocation
  extraLocations?: BusinessLocation[]
  zoom?: number
  height?: string
}

export type TravelMode = 'drive' | 'walk' | 'bike' | 'transit'

export interface RouteStep {
  instruction: string
  distance: string
  maneuver?: string
}

export interface RouteResult {
  duration: string
  distance: string
  steps: RouteStep[]
}
