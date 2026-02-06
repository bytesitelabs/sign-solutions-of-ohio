import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mt-4 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" className="gap-2">
            <Home className="w-5 h-5" />
            Go Home
          </Button>
          <Button href="/contact" variant="outline" className="gap-2">
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </Container>
  )
}
