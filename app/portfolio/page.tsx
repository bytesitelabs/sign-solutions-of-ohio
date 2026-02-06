import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Button } from '@/components/ui'
import { Hero, CTA } from '@/components/sections'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `View our portfolio of completed signage projects. ${COMPANY_INFO.name} has helped hundreds of Northwest Ohio businesses with custom signs, vehicle wraps, and more.`,
  openGraph: {
    title: `Our Work | ${COMPANY_INFO.name}`,
    description: 'View our portfolio of custom signs, vehicle wraps, and signage projects.',
  },
}

const portfolioItems = [
  {
    title: 'Corporate Lobby Sign',
    category: 'Indoor Signs',
    categoryId: 'indoor-signs',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Custom dimensional lobby signage for a corporate office.',
  },
  {
    title: 'Monument Sign Installation',
    category: 'Outdoor Signs',
    categoryId: 'outdoor-signs',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&q=80',
    description: 'Illuminated monument sign for a business park entrance.',
  },
  {
    title: 'Full Vehicle Wrap',
    category: 'Vehicle Wraps',
    categoryId: 'vehicle-wraps',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Complete vehicle wrap for a local service company.',
  },
  {
    title: 'LED Message Center',
    category: 'LED Signs',
    categoryId: 'led-signs',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    description: 'Programmable LED display for a retail location.',
  },
  {
    title: 'Event Banners',
    category: 'Banners',
    categoryId: 'banners',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    description: 'Large format banners for a community event.',
  },
  {
    title: 'Office Wall Mural',
    category: 'Wall Graphics',
    categoryId: 'wall-graphics',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
    description: 'Custom wall graphic installation for a creative agency.',
  },
  {
    title: 'Storefront Channel Letters',
    category: 'Outdoor Signs',
    categoryId: 'outdoor-signs',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description: 'Illuminated channel letter signage for a retail store.',
  },
  {
    title: 'Fleet Graphics',
    category: 'Vehicle Wraps',
    categoryId: 'vehicle-wraps',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Consistent branding across a company fleet.',
  },
  {
    title: 'Wayfinding System',
    category: 'Indoor Signs',
    categoryId: 'indoor-signs',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Comprehensive directional signage for a medical facility.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'Portfolio', url: 'https://signsolutionsoh.com/portfolio' },
        ]}
      />

      <Hero
        title="Our Work"
        highlight="Portfolio"
        subtitle="See examples of our signage projects throughout Northwest Ohio"
        showCTA={false}
        showImage={false}
        compact
      />

      {/* Portfolio Grid */}
      <section className="py-20" aria-labelledby="portfolio-title">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Projects</span>
            <h2 id="portfolio-title" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse through some of our recent signage projects. Each one is custom-designed to meet our clients&apos; unique needs.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-4 py-2 bg-primary text-white rounded-full font-medium">
              All
            </button>
            {SERVICES.map((service) => (
              <button 
                key={service.id}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <article 
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <Link 
                    href={`/services/${item.categoryId}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {item.category}
                  </Link>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              This is just a sample of our work. Contact us to see more examples relevant to your project.
            </p>
            <Button href="/contact" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonial Banner */}
      <section className="py-20 bg-gray-50">
        <Container className="text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 max-w-4xl mx-auto">
            &ldquo;Mike&apos;s work was meticulous, and I love my end result! I will continue to use him for projects in the future.&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-600">
            — Jessika Phillips, Founder of NOW Marketing Group
          </p>
        </Container>
      </section>

      {/* CTA */}
      <CTA 
        title="Ready to Start Your Project?"
        subtitle="Contact us today for a free consultation and quote"
      />
    </>
  )
}
