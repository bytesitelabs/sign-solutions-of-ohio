import type { Metadata } from 'next'
import { Container, Button } from '@/components/ui'
import { Hero, ServiceCard, CTA, ServiceAreas } from '@/components/sections'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Comprehensive signage services from ${COMPANY_INFO.name}. Indoor signs, outdoor signs, vehicle wraps, LED signs, banners, and wall graphics for Northwest Ohio businesses.`,
  openGraph: {
    title: `Signage Services | ${COMPANY_INFO.name}`,
    description: 'Complete signage solutions for your business - from design to installation.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'Services', url: 'https://signsolutionsoh.com/services' },
        ]}
      />

      <Hero
        title="Our Signage"
        highlight="Services"
        subtitle="Complete signage solutions from design to installation"
        showCTA={false}
        showImage={false}
        compact
      />

      {/* Services Overview */}
      <section className="py-20" aria-labelledby="services-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Comprehensive Signage Solutions
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              From concept to installation, we deliver quality signage that helps your business stand out and drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50" aria-labelledby="process-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Simple Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your needs, goals, and vision for your signage project.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates custom designs tailored to your brand and requirements.',
              },
              {
                step: '03',
                title: 'Production',
                description: 'Using premium materials, we craft your signage with precision and care.',
              },
              {
                step: '04',
                title: 'Installation',
                description: 'Professional installation ensures your signs look perfect and last.',
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-primary/20 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* CTA */}
      <CTA 
        title="Need Custom Signage?"
        subtitle="Get a free quote for your project today"
      />
    </>
  )
}
