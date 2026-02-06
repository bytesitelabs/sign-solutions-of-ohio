import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sign Solutions of Ohio | Custom Signs & Vehicle Wraps in Lima, OH',
  description: 'Your trusted local sign company in Lima, Ohio. Custom indoor & outdoor signs, vehicle wraps, LED message boards, banners, and wall graphics. Free quotes available.',
  keywords: ['sign company Lima OH', 'custom signs Ohio', 'vehicle wraps Lima', 'LED signs', 'banners', 'wall graphics', 'Sign Solutions of Ohio'],
  openGraph: {
    title: 'Sign Solutions of Ohio | Your Local Sign Company',
    description: "It's Not Just A Sign, It's Your Image. Custom signage solutions for Northwest Ohio businesses.",
    url: 'https://signsolutionsoh.com',
    siteName: 'Sign Solutions of Ohio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Solutions of Ohio',
    description: 'Custom signs, vehicle wraps, and LED signage in Lima, OH',
  },
  metadataBase: new URL('https://signsolutionsoh.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
