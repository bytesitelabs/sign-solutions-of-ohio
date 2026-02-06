import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Phone, ChevronLeft } from 'lucide-react'
import { Container, Button, Card } from '@/components/ui'
import { Hero, ContactForm, CTA } from '@/components/sections'
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

function getService(slug: string) {
  return SERVICES.find((s) => s.id === slug)
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: `${service.description} Professional ${service.title.toLowerCase()} services in Lima, Ohio and Northwest Ohio. Free quotes available.`,
    openGraph: {
      title: `${service.title} | ${COMPANY_INFO.name}`,
      description: service.description,
      images: [{ url: service.image }],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const otherServices = SERVICES.filter((s) => s.id !== slug).slice(0, 3)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'Services', url: 'https://signsolutionsoh.com/services' },
          { name: service.title, url: `https://signsolutionsoh.com/services/${slug}` },
        ]}
      />
      <LocalBusinessJsonLd 
        type="Service"
        serviceName={service.title}
        serviceDescription={service.description}
      />

      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        showCTA={false}
        showImage={false}
        compact
        backgroundImage={service.image}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <Container>
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </Container>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="lg:flex gap-12">
            {/* Content */}
            <div className="lg:w-2/3">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={`${service.title} examples from Sign Solutions of Ohio`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional {service.title} in Northwest Ohio
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  At Sign Solutions of Ohio, we understand that every business has unique signage needs. That&apos;s why we offer customized {service.title.toLowerCase()} solutions designed specifically for your brand and requirements. Our team works closely with you from concept to installation to ensure your complete satisfaction.
                </p>
              </div>

              {/* Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our {service.title} Include
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-8 bg-gray-900 text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Sign Solutions for Your {service.title}?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Local expertise with deep understanding of Northwest Ohio markets',
                    'Premium materials that withstand Ohio weather conditions',
                    'Professional installation by experienced technicians',
                    'Free consultations and competitive pricing',
                    'Satisfaction guaranteed on every project',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a Free Quote
                </Button>
                <Button 
                  href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {COMPANY_INFO.phone}
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                {/* Contact Form */}
                <ContactForm title="Get a Free Quote" compact />

                {/* Other Services */}
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.id}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-gray-700 group-hover:text-primary transition-colors">
                            {s.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="flex items-center justify-center p-3 text-primary font-semibold hover:underline"
                      >
                        View All Services
                      </Link>
                    </li>
                  </ul>
                </Card>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CTA 
        title={`Ready for Your ${service.title}?`}
        subtitle="Contact us today for a free consultation and quote"
        variant="dark"
      />
    </>
  )
}
