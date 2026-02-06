import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessJsonLd } from '@/components/JsonLd'
import { COMPANY_INFO } from '@/lib/constants'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://signsolutionsoh.com'),
  title: {
    default: `${COMPANY_INFO.name} | Custom Signs & Vehicle Wraps in Lima, OH`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: 'Your trusted local sign company in Lima, Ohio. Custom indoor & outdoor signs, vehicle wraps, LED message boards, banners, and wall graphics. Serving Northwest Ohio. Free quotes available.',
  keywords: [
    'sign company Lima OH',
    'custom signs Ohio',
    'vehicle wraps Lima',
    'LED signs Northwest Ohio',
    'banners Lima Ohio',
    'wall graphics',
    'Sign Solutions of Ohio',
    'monument signs',
    'channel letters',
    'business signs',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://signsolutionsoh.com',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Your Local Sign Company`,
    description: `${COMPANY_INFO.tagline}. Custom signage solutions for Northwest Ohio businesses.`,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Custom Signs and Vehicle Wraps`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_INFO.name,
    description: 'Custom signs, vehicle wraps, and LED signage in Lima, OH',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#ed1f24',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <LocalBusinessJsonLd />
      </body>
    </html>
  )
}
