import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder image domains during development
    remotePatterns: [],
  },
}

export default nextConfig
