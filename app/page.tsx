import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { Button, Container } from '@/components/ui'
import { Hero, ServiceCard, Testimonials, CTA, ServiceAreas } from '@/components/sections'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="It's Not Just A Sign,"
        highlight="It's Your Image"
        subtitle="Your Local, Trusted Sign Company"
      />

      {/* About Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="about-title">
        <Container>
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 lg:pr-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Quality Signage Solutions Since 2005
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At Sign Solutions of Ohio, we focus on not over or under selling our clients. We believe in selling exactly what you need to achieve your business goals.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                We believe in looking long term in order to get the best value for our customers. We are proud to be your local, quality sign company serving Northwest Ohio.
              </p>
              
              <ul className="mt-8 space-y-3">
                {[
                  'Local expertise & personalized service',
                  'Premium materials built for Ohio weather',
                  'Professional installation & support',
                  'Free consultations & quotes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/about">
                  Learn More About Us
                </Button>
                <Button href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`} variant="ghost" className="gap-2">
                  <Phone className="w-5 h-5" />
                  {COMPANY_INFO.phone}
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Sign Solutions of Ohio showroom at 2601 Central Point Parkway in Lima, Ohio"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">19+</p>
                  <p className="text-sm">Years in Business</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20" aria-labelledby="services-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
              Complete Signage Solutions
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              From concept to installation, we deliver quality signage that helps your business stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                features={service.features}
                compact
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="outline" className="gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />

      {/* Why Choose Us */}
      <section className="py-20" aria-labelledby="why-choose-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 id="why-choose-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              The Sign Solutions Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Northwest Ohio markets, local building codes, and business needs.',
              },
              {
                title: 'Quality Materials',
                description: 'Premium materials that withstand Ohio weather and maintain professional appearance for years.',
              },
              {
                title: 'Professional Installation',
                description: 'Experienced team that ensures proper placement with minimal disruption to your business.',
              },
              {
                title: 'Comprehensive Service',
                description: 'Full-service company offering design, production, installation, and maintenance.',
              },
              {
                title: 'Customer Focus',
                description: 'Personalized service ensuring every project meets your specific requirements.',
              },
              {
                title: 'Proven Results',
                description: 'Track record of successful projects helping businesses increase visibility.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mt-4 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let us help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Your Free Quote
            </Button>
            <Button 
              href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {COMPANY_INFO.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
