'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with phone */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <span>Your Local, Trusted Sign Company in Northwest Ohio</span>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </Container>
      </div>

      <nav aria-label="Main navigation">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="Sign Solutions of Ohio - Home">
              <Logo className="w-12 h-auto" showText />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                link.label === 'Services' ? (
                  <div key={link.href} className="relative group">
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary transition-colors rounded-lg"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-medium"
                        >
                          All Services
                        </Link>
                        <div className="h-px bg-gray-100 my-2" />
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button href="/contact" className="ml-4">
                Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
                className="flex items-center gap-2 text-primary font-semibold"
                aria-label={`Call us at ${COMPANY_INFO.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                className="p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <Container>
            <div className="py-4 border-t border-gray-100 space-y-1">
              {NAV_LINKS.map((link) => (
                link.label === 'Services' ? (
                  <div key={link.href}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      Services
                      <ChevronDown className={cn('w-5 h-5 transition-transform', servicesOpen && 'rotate-180')} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          All Services
                        </Link>
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  )
}
