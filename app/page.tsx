'use client'

import { useState } from 'react'
import { 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  Star, 
  ChevronRight,
  Building2,
  Car,
  Monitor,
  Flag,
  Palette,
  CheckCircle2,
  Quote
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Indoor Signs',
    description: 'Lobby signs, directional signs, and ADA compliant signage that makes a professional impression.',
  },
  {
    icon: Building2,
    title: 'Outdoor Signs',
    description: 'Monument signs, storefront signs, and LED message boards that get your business noticed.',
  },
  {
    icon: Car,
    title: 'Vehicle Wraps',
    description: 'Car wraps, truck wraps, and vinyl lettering that turn your vehicle into a mobile billboard.',
  },
  {
    icon: Monitor,
    title: 'LED Signs',
    description: 'Digital message boards and electronic signage for dynamic, eye-catching displays.',
  },
  {
    icon: Flag,
    title: 'Banners',
    description: 'Indoor and outdoor banners for events, promotions, and all occasions.',
  },
  {
    icon: Palette,
    title: 'Wall Graphics',
    description: 'Wall murals and vinyl wall wraps that transform any space.',
  },
]

const testimonials = [
  {
    name: 'Paul Hinds',
    title: 'Positive Sales Leader',
    quote: "Mike is a great guy who takes pride in his work. He spent a lot of time with me, even as a smaller client, and made sure I got exactly what I both wanted and needed. The final result was amazing. I highly recommend Mike by name.",
    rating: 5,
  },
  {
    name: 'Jessika Phillips',
    title: 'International Speaker & Founder of NOW Marketing Group',
    quote: "Mike and Josh at Sign Solutions installed an amazing back window graphic on my car. I called on Tuesday, had a proof by Tuesday night, and was installed by Thursday! Mike's work was meticulous, and I love my end result!",
    rating: 5,
  },
  {
    name: 'Wendy Baxter',
    title: 'Owner/Insurance Agent at Baxter Benefit Solutions',
    quote: "The thing that impressed me most about Mike is his dedication to his customers and passion for his work. He does what he says he will do and is willing to go 'above and beyond' to ensure client satisfaction.",
    rating: 5,
  },
]

const whyChooseUs = [
  'Locally owned and operated in Lima, OH',
  'Over 20 years of signage experience',
  'Free quotes with no obligation',
  'Quality materials that last',
  'Professional installation',
  'Serving all of Northwest Ohio',
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#1e3a5f]">
                Sign Solutions
                <span className="text-[#c9a227]"> of Ohio</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1e3a5f] font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#1e3a5f] font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#1e3a5f] font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1e3a5f] font-medium">Contact</a>
              <a 
                href="tel:4192242231" 
                className="flex items-center gap-2 bg-[#c9a227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8922a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                419-224-2231
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-[#1e3a5f] font-medium py-2">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-[#1e3a5f] font-medium py-2">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-[#1e3a5f] font-medium py-2">Reviews</a>
              <a href="#contact" className="block text-gray-700 hover:text-[#1e3a5f] font-medium py-2">Contact</a>
              <a 
                href="tel:4192242231" 
                className="flex items-center justify-center gap-2 bg-[#c9a227] text-white px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              It&apos;s Not Just A Sign,
              <br />
              <span className="text-gradient">It&apos;s Your Image</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your Local, Trusted Sign Company Serving Northwest Ohio Since 2003
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors"
              >
                Get a Free Quote
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:4192242231"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                419-224-2231
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Signage Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to installation, we deliver quality signage that helps your business stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#c9a227]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Sign Solutions of Ohio?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Sign Solutions of Ohio, we focus on not over or under selling our clients. We believe in looking long term to get the best value for our customers. We&apos;re proud to be your local, quality sign company.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Owner Mike Powell brings decades of experience and a personal touch to every project, ensuring you get exactly what you need for your business to succeed.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visit Our Showroom</h3>
                <p className="text-blue-100 mb-6">
                  Come see our work in person and discuss your project with our team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">2601 Central Point Parkway</p>
                      <p className="text-blue-100">Lima, OH 45804</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#c9a227]" />
                    <a href="tel:4192242231" className="font-semibold hover:text-[#c9a227]">
                      419-224-2231
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it — hear from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#1e3a5f]/20 mb-4" />
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your custom signage today. No obligation, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors"
            >
              Get Your Free Quote
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:4192242231"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 419-224-2231
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about what we do or ready to get a free quote? We&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Visit Our Showroom</h3>
                    <p className="text-gray-600">2601 Central Point Parkway</p>
                    <p className="text-gray-600">Lima, OH 45804</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <a href="tel:4192242231" className="text-[#1e3a5f] font-semibold hover:underline">
                      419-224-2231
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <a href="mailto:info@signsolutionsoh.com" className="text-[#1e3a5f] font-semibold hover:underline">
                      info@signsolutionsoh.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Sign
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="indoor">Indoor Signs</option>
                    <option value="outdoor">Outdoor Signs</option>
                    <option value="vehicle">Vehicle Wraps</option>
                    <option value="led">LED Signs</option>
                    <option value="banners">Banners</option>
                    <option value="wall">Wall Graphics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    placeholder="Describe your signage needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#c9a227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8922a] transition-colors"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Sign Solutions
                <span className="text-[#c9a227]"> of Ohio</span>
              </h3>
              <p className="text-blue-100 mb-4">
                Your trusted local sign company serving Northwest Ohio with quality signage solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#services" className="hover:text-[#c9a227]">Services</a></li>
                <li><a href="#about" className="hover:text-[#c9a227]">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-[#c9a227]">Reviews</a></li>
                <li><a href="#contact" className="hover:text-[#c9a227]">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-blue-100">
                <li>2601 Central Point Parkway</li>
                <li>Lima, OH 45804</li>
                <li>
                  <a href="tel:4192242231" className="hover:text-[#c9a227]">419-224-2231</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
            <p>© {new Date().getFullYear()} Sign Solutions of Ohio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Website by <a href="https://bytesitelabs.com" className="text-[#c9a227] hover:underline">ByteSiteLabs</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
