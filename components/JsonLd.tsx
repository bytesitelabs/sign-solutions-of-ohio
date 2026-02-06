import { COMPANY_INFO, SERVICES } from '@/lib/constants'

interface LocalBusinessJsonLdProps {
  type?: 'LocalBusiness' | 'Service'
  serviceName?: string
  serviceDescription?: string
}

export function LocalBusinessJsonLd({ 
  type = 'LocalBusiness',
  serviceName,
  serviceDescription 
}: LocalBusinessJsonLdProps) {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'Service' ? 'Service' : 'LocalBusiness',
    '@id': 'https://signsolutionsoh.com',
    name: COMPANY_INFO.name,
    description: serviceDescription || "Professional sign company serving Northwest Ohio. Custom indoor signs, outdoor signs, vehicle wraps, LED signs, banners, and wall graphics.",
    url: 'https://signsolutionsoh.com',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.twitter,
    ],
    priceRange: '$$',
    image: 'https://signsolutionsoh.com/images/showroom.jpg',
    areaServed: [
      { '@type': 'City', name: 'Lima, Ohio' },
      { '@type': 'City', name: 'Findlay, Ohio' },
      { '@type': 'City', name: 'Wapakoneta, Ohio' },
      { '@type': 'City', name: 'Celina, Ohio' },
      { '@type': 'City', name: 'Van Wert, Ohio' },
      { '@type': 'City', name: 'Sidney, Ohio' },
      { '@type': 'City', name: 'St. Marys, Ohio' },
    ],
    ...(type === 'Service' && serviceName && {
      serviceType: serviceName,
      provider: {
        '@type': 'LocalBusiness',
        name: COMPANY_INFO.name,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseJsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
