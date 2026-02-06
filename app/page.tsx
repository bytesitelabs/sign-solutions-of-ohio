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
    link: '/indoor'
  },
  {
    icon: Building2,
    title: 'Outdoor Signs',
    description: 'Monument signs, storefront signs, and channel letters that get your business noticed.',
    link: '/outdoor'
  },
  {
    icon: Car,
    title: 'Vehicle Wraps',
    description: 'Car wraps, truck wraps, and vinyl lettering that turn your vehicle into a mobile billboard.',
    link: '/vehicles'
  },
  {
    icon: Monitor,
    title: 'LED Signs',
    description: 'Digital message boards and electronic signage for dynamic, eye-catching displays.',
    link: '/led'
  },
  {
    icon: Flag,
    title: 'Banners',
    description: 'Indoor and outdoor banners for events, promotions, and all occasions.',
    link: '/banners'
  },
  {
    icon: Palette,
    title: 'Wall Graphics',
    description: 'Wall murals and vinyl wall wraps that transform any space.',
    link: '/wall-graphics'
  },
]

const testimonials = [
  {
    name: 'Paul Hinds',
    title: 'Positive Sales Leader',
    quote: "Mike is a great guy who takes pride in his work. He spent a lot of time with me, even as a smaller client, and made sure I got exactly what I both wanted and needed. The final result was amazing. I highly recommend Mike by name.",
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQFI04bTUAnaww/profile-displayphoto-shrink_800_800/0/1517687132907',
    rating: 5,
  },
  {
    name: 'Jessika Phillips',
    title: 'International Speaker & Founder of NOW Marketing Group',
    quote: "Mike and Josh at Sign Solutions installed an amazing back window graphic on my car. I called on Tuesday, had a proof by Tuesday night, and was installed by Thursday! Mike's work was meticulous, and I love my end result!",
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHpUvtXJ34ynw/profile-displayphoto-shrink_800_800/0/1680327152684',
    rating: 5,
  },
  {
    name: 'Wendy Baxter',
    title: 'Owner/Insurance Agent at Baxter Benefit Solutions',
    quote: "The thing that impressed me most about Mike is his dedication to his customers and passion for his work. He does what he says he will do and is willing to go above and beyond to ensure client satisfaction.",
    image: 'https://media.licdn.com/dms/image/v2/C5603AQHmAYruM0Ffuw/profile-displayphoto-shrink_800_800/0/1659630208507',
    rating: 5,
  },
]

const serviceAreas = [
  { name: 'Lima', subtitle: 'Main Office' },
  { name: 'Findlay', subtitle: 'Hancock County' },
  { name: 'Wapakoneta', subtitle: 'Auglaize County' },
  { name: 'Celina', subtitle: 'Mercer County' },
  { name: 'Van Wert', subtitle: 'Van Wert County' },
  { name: 'Sidney', subtitle: 'Shelby County' },
  { name: 'St. Marys', subtitle: 'Auglaize County' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Sign Solutions
                <span className="text-primary"> of Ohio</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-4">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 px-4">Signs</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-4">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-4">Contact</a>
              <a 
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded font-semibold transition-colors"
              >
                Free Quote
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
              <a href="#about" className="block text-gray-700 py-2 px-4">About</a>
              <a href="#services" className="block text-gray-700 py-2 px-4">Signs</a>
              <a href="#testimonials" className="block text-gray-700 py-2 px-4">Reviews</a>
              <a href="#contact" className="block text-gray-700 py-2 px-4">Contact</a>
              <a 
                href="#contact" 
                className="block text-center bg-primary text-white px-6 py-3 rounded font-semibold"
              >
                Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-40 pb-16">
        <div className="container mx-auto px-8 lg:flex items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-gray-900">
              It&apos;s Not Just A Sign,
              <br />
              <span className="text-primary">It&apos;s Your Image</span>
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light text-gray-700">
              Your Local, Trusted Sign Company
            </p>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#about"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-semibold text-lg transition-colors text-center"
              >
                Learn More
              </a>
              <a 
                href="tel:4192242231"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                419-224-2231
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-red-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-primary">20+</div>
                  <div className="text-gray-600 mt-2">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-semibold leading-tight text-gray-900">About Us</h2>
              <p className="mt-8 text-xl font-light leading-relaxed text-gray-700">
                At Sign Solutions of Ohio we focus on not over or under selling our clients. We believe in not selling a product that is more than desired, nor selling a product that is less than desired.
              </p>
              <p className="mt-4 text-xl font-light leading-relaxed text-gray-700">
                We believe in looking long term in order to get the best value for our customers. We are proud to be your local, quality sign company.
              </p>
              <div className="mt-8">
                <a 
                  href="#contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded font-semibold transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="p-8 md:p-12 rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-center text-gray-600">
                  Our Showroom at 2601 Central Point Parkway in Lima, Ohio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">Complete Signage Solutions</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            From concept to installation, we deliver quality signage that helps your business stand out.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 md:p-12 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Serving Northwest Ohio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive signage services throughout the region
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-secondary">{area.name}</div>
                <div className="text-sm text-blue-600">{area.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            What Customers Are Saying
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Don&apos;t just take our word for it
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 md:p-12 rounded-lg border border-gray-200 bg-white shadow-lg"
              >
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  {index === 0 && "Mike is a great guy!"}
                  {index === 1 && "Meticulous Work with Results You Will Love"}
                  {index === 2 && "Dedication to Customers and Passion"}
                </p>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free quote for your custom signage today
          </p>
          <a 
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded font-semibold text-lg transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to get a free quote? Call us or fill out the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Our Showroom</h3>
                    <p className="text-gray-600">2601 Central Point Parkway</p>
                    <p className="text-gray-600">Lima, OH 45804</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:4192242231" className="text-primary font-semibold hover:underline text-lg">
                      419-224-2231
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your signage needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600">
                2601 Central Point Parkway<br />
                Lima, OH 45804<br />
                <a href="tel:4192242231" className="text-primary hover:underline">419-224-2231</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-primary">About</a></li>
                <li><a href="#services" className="hover:text-primary">Signs</a></li>
                <li><a href="#testimonials" className="hover:text-primary">Reviews</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="https://www.facebook.com/SignSolutionsOfOhio" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a></li>
                <li><a href="https://twitter.com/signsolutionsoh" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Sign Solutions of Ohio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Website by <a href="https://bytesitelabs.com" className="text-primary hover:underline">ByteSiteLabs</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
