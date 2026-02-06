import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sign Solutions of Ohio',
  description: 'Professional sign company serving Ohio. Custom signs, banners, vehicle wraps, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
