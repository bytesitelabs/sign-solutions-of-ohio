import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

interface HeroProps {
  title: string
  highlight?: string
  subtitle?: string
  showCTA?: boolean
  showImage?: boolean
  backgroundImage?: string
  compact?: boolean
}

export function Hero({ 
  title, 
  highlight, 
  subtitle, 
  showCTA = true, 
  showImage = true,
  backgroundImage,
  compact = false
}: HeroProps) {
  if (compact) {
    return (
      <section 
        className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
        aria-labelledby="hero-title"
      >
        {backgroundImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
              {highlight && <span className="text-primary"> {highlight}</span>}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl mt-4 text-gray-300">{subtitle}</p>
            )}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section 
      className="relative py-12 md:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="lg:flex items-center gap-12">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 
              id="hero-title" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-primary">{highlight}</span>
                </>
              )}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl mt-6 font-light text-gray-600">
                {subtitle}
              </p>
            )}
            {showCTA && (
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/contact" size="lg">
                  Get Free Quote
                </Button>
                <Button 
                  href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY_INFO.phone}
                </Button>
              </div>
            )}
          </div>
          {showImage && (
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
                  alt="Sign Solutions of Ohio - Professional signage services"
                  width={400}
                  height={500}
                  className="relative z-10 object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
