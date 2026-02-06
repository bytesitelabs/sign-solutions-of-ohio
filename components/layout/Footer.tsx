import Link from 'next/link'
import { MapPin, Phone, Clock, Facebook, Twitter } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Logo className="w-16 h-auto invert" />
              </div>
              <p className="text-gray-400 mb-6">
                {COMPANY_INFO.tagline}. Your trusted local sign company serving Northwest Ohio since 2005.
              </p>
              <div className="flex gap-4">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={COMPANY_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Visit our Twitter page"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.name} className="text-gray-400">
                    {area.name}, OH
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <address className="not-italic">
                    {COMPANY_INFO.address.street}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p>{COMPANY_INFO.hours.weekday}</p>
                    <p>{COMPANY_INFO.hours.saturday}</p>
                    <p>{COMPANY_INFO.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <p>
              Website by{' '}
              <a
                href="https://bytesitelabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ByteSiteLabs
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
