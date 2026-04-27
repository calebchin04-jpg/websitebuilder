import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomBar } from '@/components/layout/MobileBottomBar'
import { siteConfig } from '@/data/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    'Licensed plumbers in Markham since 1995. 24/7 emergency service, no overtime charges, flat-rate pricing. Call (905) 472-9100.',
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    siteName: siteConfig.name,
    locale: 'en_CA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: siteConfig.name,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Markham',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.856,
    longitude: -79.337,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: ['Markham', 'Stouffville', 'Unionville', 'Richmond Hill', 'York Region'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.googleRating,
    reviewCount: siteConfig.reviewCount,
  },
  priceRange: '$$',
  description: 'Licensed plumbers in Markham since 1995. 24/7 emergency service, no overtime charges.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="has-bottom-bar">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
