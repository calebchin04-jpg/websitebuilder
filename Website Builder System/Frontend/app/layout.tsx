import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import DifferenceCursor from '@/components/DifferenceCursor'
import NexusSwitcher from '@/components/NexusSwitcher'
import NexusLogo from '@/components/NexusLogo'
import { ChatWidget } from '@/components/chat/ChatWidget'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crossroads | Built in Markham. Built for Markham.',
  description: 'A hyper-local marketing platform for small businesses in Markham, Ontario. Every dollar you spend stays in the community. Starting at $5/month.',
  keywords: ['Markham', 'Crossroads', 'local marketing', 'small business', 'GTA', 'Ontario', 'community marketing'],
  openGraph: {
    title: 'Crossroads | Built in Markham. Built for Markham.',
    description: 'A hyper-local marketing platform for small businesses in Markham, Ontario.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#F4ECD8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#F4ECD8]" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <DifferenceCursor />
        <NexusSwitcher />
        <NexusLogo />
        {children}
        <ChatWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
