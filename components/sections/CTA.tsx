import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface CTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'default' | 'dark'
}

export function CTA({
  title = 'Ready to Grow Your Business?',
  subtitle = 'Get a free quote for your custom signage today',
  buttonText = 'Get Free Quote',
  buttonHref = '/contact',
  variant = 'default'
}: CTAProps) {
  const isDark = variant === 'dark'

  return (
    <section 
      className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-primary'}`}
      aria-labelledby="cta-title"
    >
      <Container className="text-center">
        <h2 
          id="cta-title" 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-white'}`}
        >
          {title}
        </h2>
        <p className={`text-xl mt-4 mb-8 ${isDark ? 'text-gray-300' : 'text-white/90'}`}>
          {subtitle}
        </p>
        <Button 
          href={buttonHref}
          variant={isDark ? 'primary' : 'outline'}
          size="lg"
          className={isDark ? '' : 'border-white text-white hover:bg-white hover:text-primary'}
        >
          {buttonText}
        </Button>
      </Container>
    </section>
  )
}
