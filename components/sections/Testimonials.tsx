import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/lib/constants'

interface TestimonialsProps {
  title?: string
  subtitle?: string
  limit?: number
}

export function Testimonials({ 
  title = 'What Customers Are Saying',
  subtitle = 'Real reviews from real customers',
  limit
}: TestimonialsProps) {
  const displayTestimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-title">
      <Container>
        <div className="text-center mb-12">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mt-4">{subtitle}</p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600">5.0 Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pr-12">
                {testimonial.heading}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
