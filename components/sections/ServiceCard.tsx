import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  features?: readonly string[]
  compact?: boolean
}

export function ServiceCard({ id, title, description, image, features, compact = false }: ServiceCardProps) {
  if (compact) {
    return (
      <Card hover className="group overflow-hidden">
        <Link href={`/services/${id}`} className="block">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            <Image
              src={image}
              alt={`${title} examples from Sign Solutions of Ohio`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <span className="inline-flex items-center gap-1 text-primary font-medium mt-3 text-sm">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Card>
    )
  }

  return (
    <Card hover className="group overflow-hidden flex flex-col h-full">
      <Link href={`/services/${id}`} className="block flex-1 flex flex-col">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
          <Image
            src={image}
            alt={`${title} examples from Sign Solutions of Ohio`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <span className="inline-flex items-center gap-2 text-primary font-semibold mt-auto">
          View Details
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Card>
  )
}
