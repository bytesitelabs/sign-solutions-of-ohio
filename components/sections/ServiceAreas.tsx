import { MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SERVICE_AREAS } from '@/lib/constants'

interface ServiceAreasProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export function ServiceAreas({
  title = 'Serving Northwest Ohio',
  subtitle = 'We provide comprehensive signage services throughout the region',
  compact = false
}: ServiceAreasProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {SERVICE_AREAS.map((area) => (
          <span
            key={area.name}
            className="px-3 py-1 bg-blue-50 text-secondary rounded-full text-sm font-medium"
          >
            {area.name}
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="service-areas-title">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Service Areas</span>
          </div>
          <h2 id="service-areas-title" className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="font-semibold text-gray-900">{area.name}</div>
              <div className="text-sm text-gray-500">{area.subtitle}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
