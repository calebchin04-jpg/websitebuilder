import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/data/site'

const serifFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sansFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://markhamgreen.com'),
  title: {
    default:  'Markham Green Golf Club — Public Golf in Markham, ON',
    template: '%s | Markham Green Golf Club',
  },
  description:
    'Public 9-hole golf course in Markham, Ontario. Affordable green fees from $44, PGA professional management, and on-site instruction by Salazar Golf Academy. Book a tee time: (905) 294-6156.',
  openGraph: {
    type:      'website',
    siteName:  siteConfig.name,
    locale:    'en_CA',
    images:    [{ url: '/images/og/markham-green.jpg', width: 1200, height: 630, alt: 'Markham Green Golf Club' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'GolfCourse',
  name: siteConfig.name,
  telephone: siteConfig.phone,
  url: 'https://markhamgreen.com',
  address: siteConfig.address
    ? { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressLocality: 'Markham', addressRegion: 'ON', addressCountry: 'CA' }
    : undefined,
  openingHours: siteConfig.hours.weekday
    ? [siteConfig.hours.weekday, siteConfig.hours.weekend].filter(Boolean)
    : undefined,
  areaServed: ['Markham', 'York Region', 'Stouffville', 'Unionville'],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="antialiased">
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
