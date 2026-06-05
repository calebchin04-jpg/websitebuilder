import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lagrottaonmain.ca',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
}

export default nextConfig
