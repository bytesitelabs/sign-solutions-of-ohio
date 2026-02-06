import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Users, Clock, ThumbsUp } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { Hero, CTA, Testimonials } from '@/components/sections'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY_INFO.name}, your trusted local sign company in Lima, Ohio. Meet owner Mike Powell and discover our commitment to quality signage solutions.`,
  openGraph: {
    title: `About ${COMPANY_INFO.name}`,
    description: 'Your trusted local sign company serving Northwest Ohio since 2005.',
  },
}

const values = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We never compromise on the quality of our products or services',
  },
  {
    icon: ThumbsUp,
    title: 'Integrity',
    description: 'Honest pricing and transparent communication with every client',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your success is our success - we treat every project as our own',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We do what we say and deliver on time, every time',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'About', url: 'https://signsolutionsoh.com/about' },
        ]}
      />

      <Hero
        title="About Sign Solutions"
        highlight="of Ohio"
        subtitle="Your trusted local sign company serving Northwest Ohio since 2005"
        showCTA={false}
        showImage={false}
        compact
      />

      {/* Company Story */}
      <section className="py-20" aria-labelledby="story-title">
        <Container>
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Building Brands Through Quality Signage
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At Sign Solutions of Ohio, we focus on providing the perfect balance of quality, value, and service for every client. We believe in not over-selling or under-selling our clients - we believe in selling exactly what you need to achieve your business goals.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our philosophy is simple: look long-term to get the best value for our customers while delivering exceptional results that stand the test of time. Founded with a commitment to excellence and customer satisfaction, we are proud to be your trusted local sign company serving Northwest Ohio.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our team combines decades of experience with cutting-edge technology to create signage solutions that not only look great but also drive results for your business.
              </p>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Sign Solutions of Ohio showroom"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Owner */}
      <section className="py-20 bg-gray-50" aria-labelledby="owner-title">
        <Container>
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Mike Powell - Owner of Sign Solutions of Ohio"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 mt-12 lg:mt-0">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Meet the Owner</span>
              <h2 id="owner-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Mike Powell
              </h2>
              <p className="text-xl text-gray-500 mt-2">Founder & Owner</p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Mike Powell founded Sign Solutions of Ohio with a simple mission: to provide Northwest Ohio businesses with high-quality, professional signage that truly represents their brand.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                With a passion for helping businesses succeed and a commitment to doing things right, Mike has built Sign Solutions into one of the most trusted sign companies in the region. His hands-on approach and dedication to customer satisfaction ensures that every project, big or small, receives the same level of care and attention to detail.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-primary">19+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">1000+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">7</p>
                  <p className="text-gray-600">Counties Served</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20" aria-labelledby="values-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 id="values-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-primary text-white" aria-labelledby="mission-title">
        <Container className="text-center">
          <h2 id="mission-title" className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To provide Northwest Ohio businesses with high-quality, professional signage solutions that enhance their brand visibility, attract customers, and drive business growth. We strive to be the trusted partner that helps our clients achieve their marketing and branding goals through innovative, durable, and effective signage.
          </p>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials 
        title="What Our Customers Say"
        subtitle="Don't just take our word for it"
      />

      {/* CTA */}
      <CTA 
        title="Ready to Work With Us?"
        subtitle="Contact us today for a free consultation and quote"
        variant="dark"
      />
    </>
  )
}
