import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter } from 'lucide-react'
import { Container, Card } from '@/components/ui'
import { Hero, ContactForm, ServiceAreas } from '@/components/sections'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${COMPANY_INFO.name} for a free quote on custom signs, vehicle wraps, and more. Visit our showroom in Lima, Ohio or call ${COMPANY_INFO.phone}.`,
  openGraph: {
    title: `Contact Us | ${COMPANY_INFO.name}`,
    description: 'Get a free quote for your custom signage project today.',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'Contact', url: 'https://signsolutionsoh.com/contact' },
        ]}
      />

      <Hero
        title="Contact"
        highlight="Us"
        subtitle="Get in touch for a free consultation and quote"
        showCTA={false}
        showImage={false}
        compact
      />

      {/* Main Contact Section */}
      <section className="py-20" aria-labelledby="contact-title">
        <Container>
          <div className="lg:flex gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/2">
              <h2 id="contact-title" className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to get a free quote? We&apos;re here to help. Reach out to us and we&apos;ll respond within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <Card className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Visit Our Showroom</h3>
                    <address className="text-gray-600 not-italic mt-1">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </address>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-gray-600 mt-1">
                      We&apos;re available Monday - Friday, 8am - 5pm
                    </p>
                  </div>
                </Card>

                {/* Email */}
                <Card className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-gray-600 mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </Card>

                {/* Hours */}
                <Card className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Business Hours</h3>
                    <ul className="text-gray-600 mt-1 space-y-1">
                      <li>{COMPANY_INFO.hours.weekday}</li>
                      <li>{COMPANY_INFO.hours.saturday}</li>
                      <li>{COMPANY_INFO.hours.sunday}</li>
                    </ul>
                  </div>
                </Card>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Visit our Twitter page"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="map-title">
        <Container>
          <div className="text-center mb-12">
            <h2 id="map-title" className="text-3xl font-bold text-gray-900">
              Find Us
            </h2>
            <p className="text-gray-600 mt-2">
              Visit our showroom at {COMPANY_INFO.address.full}
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1!2d${COMPANY_INFO.coordinates.lng}!3d${COMPANY_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzMxLjIiTiA4NMKwMDYnMTguNyJX!5e0!3m2!1sen!2sus!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sign Solutions of Ohio location"
            />
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <ServiceAreas 
        title="We Serve All of Northwest Ohio"
        subtitle="No matter where you are in the region, we can help with your signage needs"
      />
    </>
  )
}
