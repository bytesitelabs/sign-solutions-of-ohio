'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Phone, 
  MapPin, 
  Menu, 
  X
} from 'lucide-react'

// Their real portfolio images from signsolutionsoh.com
const portfolioImages = {
  indoor: 'https://signsolutionsoh.com/static/indoor-sign-134db9f633be44ec8365810545f8127a.jpg',
  outdoor: 'https://signsolutionsoh.com/static/outdoor-sign-8a0924fae92784f785d883f6b9296597.jpg',
  vehicles: 'https://signsolutionsoh.com/static/trailer-wrap-2fb72ee6dda35d577150080b84c37b6b.jpg',
  led: 'https://signsolutionsoh.com/static/led-02d937905af38d30ec9d7e923eba4d01.jpg',
  wallGraphics: 'https://signsolutionsoh.com/static/wall-graphic-09c56afbfe48c952c3dc5cde352a40fa.jpg',
  banners: 'https://signsolutionsoh.com/static/indoor-banner-3c2e3ad889266d42b2eb61b399413434.jpg',
  showroom: 'https://signsolutionsoh.com/static/showroom-7fe9f272cfeed660ea11de0f538f8029.jpg',
  mikePowell: 'https://signsolutionsoh.com/static/mike-powell-c6cdfdfe8641fe7c07b8b1011a61b72d.png',
}

const services = [
  {
    title: 'Indoor Signs',
    description: 'Lobby signs, directional signs, and ADA compliant signage',
    image: portfolioImages.indoor,
  },
  {
    title: 'Outdoor Signs',
    description: 'Monument Signs, storefront signs, and LED message boards',
    image: portfolioImages.outdoor,
  },
  {
    title: 'Vehicle Wraps',
    description: 'Car wraps, truck wraps, and vinyl lettering',
    image: portfolioImages.vehicles,
  },
  {
    title: 'LED Signs',
    description: 'Digital Message Boards and electronic signage',
    image: portfolioImages.led,
  },
  {
    title: 'Wall Graphics',
    description: 'Wall murals and vinyl wall wraps',
    image: portfolioImages.wallGraphics,
  },
  {
    title: 'Banners',
    description: 'Indoor and outdoor banners for all occasions',
    image: portfolioImages.banners,
  },
]

const testimonials = [
  {
    name: 'Paul Hinds',
    title: 'Positive Sales Leader',
    quote: "Mike is a great guy who takes pride in his work. He spent a lot of time with me, even as a smaller client, and made sure I got exactly what I both wanted and needed. The final result was amazing. I highly recommend Mike by name.",
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQFI04bTUAnaww/profile-displayphoto-shrink_800_800/0/1517687132907',
    heading: "Mike is a great guy!",
  },
  {
    name: 'Jessika Phillips',
    title: 'International Speaker & Founder of NOW Marketing Group',
    quote: "Mike and Josh at Sign Solutions installed an amazing back window graphic on my car. I called on Tuesday, had a proof by Tuesday night, and was installed by Thursday! Mike's work was meticulous, and I love my end result!",
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHpUvtXJ34ynw/profile-displayphoto-shrink_800_800/0/1680327152684',
    heading: "Meticulous Work with Results You Will Love",
  },
  {
    name: 'Wendy Baxter',
    title: 'Owner/Insurance Agent at Baxter Benefit Solutions',
    quote: "The thing that impressed me most about Mike is his dedication to his customers and passion for his work. He does what he says he will do and is willing to go above and beyond to ensure client satisfaction.",
    image: 'https://media.licdn.com/dms/image/v2/C5603AQHmAYruM0Ffuw/profile-displayphoto-shrink_800_800/0/1659630208507',
    heading: "Dedication to Customers and Passion",
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

// Their actual SVG logo
function Logo({ className = "w-12" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 68.78" className={className}>
      <path fill="#ed1f24" d="M32.77,0c3.21,0.54,4.94,3.05,6.94,5.2c0.82,0.88,1.63,1.77,2.59,2.81c0.47-0.91,0.87-1.69,1.28-2.46 c1.43-2.7,3.69-4.12,6.73-4.18c3.11-0.07,5.46,1.32,6.96,4.02c1.22,2.2,2.28,4.48,3.49,6.68c0.2,0.36,0.77,0.72,1.17,0.74 c1.97,0.06,3.96-0.09,5.93,0c3.98,0.17,7.94-0.08,11.95,0.38c3.9,0.45,7.93-0.28,11.9-0.37c1.18-0.03,2.37,0.36,3.56,0.54 c0.38,0.06,0.81,0.15,1.15,0.02c2.4-0.88,4.88-0.74,7.33-0.43c3.49,0.44,6.25,3.27,6.41,6.78c0.18,4.04,0.05,8.09,0.05,12.13 c0,0.31-0.03,0.61-0.05,1.11c1.4,0,2.73,0.05,4.06-0.04c0.33-0.02,0.74-0.44,0.93-0.78c0.85-1.58,1.61-3.21,2.46-4.79 c1.44-2.69,3.71-4.1,6.75-4.15c3.11-0.06,5.44,1.37,6.95,4.06c0.9,1.6,1.73,3.25,2.52,4.91c0.35,0.73,0.76,0.87,1.56,0.86 c4.04-0.03,8.09-0.1,12.12,0.19c1.69,0.12,3.29,0.02,4.95-0.05c3.92-0.17,7.87,0.35,11.79,0.19c1.94-0.08,4.21,0.34,5.63-2.03 c1.69-2.82,4.09-5.15,7.41-5.89c2.16-0.49,4.06-1.25,5.99-2.33c3.23-1.8,8.04-0.3,10.2,2.78c1.29,1.83,2.74,3.56,3.95,5.44 c0.98,1.52,1.72,3.2,2.57,4.81c0,0.72,0,1.44,0,2.16c-0.85,3.68-4.03,5.71-6.1,8.54c-0.45,0.62-0.43,1.07-0.34,1.78 c0.35,2.75,0.55,5.52,0.72,8.29c0.02,0.31-0.41,0.85-0.73,0.95c-0.76,0.22-1.58,0.34-2.37,0.31c-0.91-0.04-1.42-0.57-1.4-1.6 c0.09-3.72,0-7.4-2.94-10.51c2.77-0.34,3.67-2.58,5.2-4.08c0.83-0.82,1.59-1.7,2.36-2.58c1.22-1.38,1.3-2.79,0.21-4.28 c-1.64-2.24-3.29-4.48-4.97-6.7c-1.6-2.1-4.58-1.92-6.06,0.26c-0.26,0.38-0.89,0.65-1.37,0.7c-1.77,0.2-3.6-0.01-5.19,1.09 c-2.56,1.77-4.33,4.11-5.24,7.05c-1.08,0-2.2-0.11-3.29,0.03c-0.99,0.13-1.92,0.61-2.9,0.81c-0.59,0.12-1.24,0.11-1.83-0.01 c-0.98-0.21-1.93-0.74-2.9-0.8c-2.19-0.12-4.4-0.02-6.6-0.05c-1.5-0.02-2.74,0.42-3.61,1.93c-2.21-2.02-4.91-2.02-7.62-1.92 c-2.59,0.1-5.19,0.23-7.77,0.41c-1.97,0.14-4.02-0.9-4.93-2.65c-0.91-1.75-1.83-3.5-2.7-5.27c-0.66-1.35-1.59-2.31-3.19-2.28 c-1.59,0.03-2.5,0.99-3.1,2.39c-0.82,1.94-1.75,3.84-2.55,5.78c-0.45,1.1-1.16,1.62-2.35,1.61c-4.36-0.02-8.72-0.02-13.08,0 c-0.85,0.01-1.42-0.24-1.49-1.14c-0.07-0.92-0.05-1.79,1.1-2.14c2.11-0.66,2.75-1.54,2.76-3.71c0.01-3.19,0.02-6.38,0-9.57 c-0.02-2.36-1.19-3.53-3.57-3.61c-0.67-0.02-1.35,0.01-2.02-0.01c-1.91-0.06-3.31,0.66-3.87,2.6c-0.13-0.04-0.25-0.03-0.29-0.08 c-1.31-2.13-3.25-2.71-5.65-2.54c-2.06,0.15-4.13,0.07-6.2,0.02c-1.8-0.04-3.27,0.42-4.12,2.51c-0.81-2.35-2.53-2.54-4.44-2.51 c-3.95,0.05-7.91-0.02-11.86,0.06c-1.05,0.02-2.16,0.23-3.11,0.66c-1.15,0.52-1.79,0.19-2.3-0.78c-1.21-2.3-2.39-4.62-3.58-6.93 c-0.41-0.8-0.82-1.6-1.22-2.4c-0.64-1.26-1.6-2.06-3.07-2.03c-1.4,0.03-2.32,0.79-2.93,2.02c-0.91,1.85-1.83,3.7-2.81,5.51 c-0.39,0.72-0.98,1.34-1.58,2.15c-0.82-0.88-1.49-1.58-2.15-2.3c-2.31-2.51-4.67-4.98-6.91-7.57C32.9,4.41,31.62,3.85,30,4.35 C28.4,4.85,27.45,5.97,27.29,8c-2,0-4.02,0.09-6.02-0.02c-6.04-0.34-10,2.74-12.87,7.68c-0.71,1.22-1.64,1.43-2.99,0.64 c-1.34-0.79-1.65-1.72-0.95-2.94c2.86-4.97,6.78-8.63,12.6-9.66c1.97-0.35,4.03-0.15,6.04-0.33c0.69-0.06,1.37-0.46,2.02-0.78 c1.75-0.85,3.48-1.73,5.22-2.6C31.15,0,31.96,0,32.77,0z"/>
      <path fill="#1a202c" d="M192.62,38.35c-1.86,1.84-3.72,3.68-5.58,5.51c-0.11-0.06-0.21-0.12-0.32-0.18c0-1.18,0-2.35,0-3.67 c-1.7,0-3.28-0.16-4.8,0.08c-0.64,0.1-1.52,0.98-1.64,1.62c-0.48,2.61-0.2,5.1,2.9,6.21c2.59,0.93,3.93,3.14,3.94,6 c0,1.12,0.03,2.24,0.02,3.36c-0.04,3.08-1.47,5.39-4.03,7c-0.49,0.31-1.18,0.41-1.78,0.43c-2,0.05-4.01,0.02-6.13,0.02 c0,1.39,0,2.63,0,3.86c-0.12,0.06-0.24,0.13-0.35,0.19c-1.86-2.35-3.72-4.7-5.65-7.13c1.95-2.37,3.82-4.63,5.93-7.19 c0,1.78,0,3.17,0,4.72c1.65,0,3.17,0.1,4.66-0.06c0.48-0.05,1.14-0.68,1.28-1.17c0.41-1.43,0.57-2.92-0.71-4.11 c-0.39-0.37-0.75-0.78-1.19-1.09c-2.73-1.96-4.36-4.53-4.18-7.95c0.12-2.16,0.27-4.39,0.89-6.45c0.91-3.04,3.25-4.45,6.4-4.43 c1.42,0.01,2.85,0,4.38,0c0-0.79,0-1.48,0-2.54c2.13,2.4,4.03,4.55,5.94,6.7C192.62,38.17,192.62,38.26,192.62,38.35z M21.4,12.36 c-2.2,0.03-4.34,0.52-6.03,1.98c-5.02,4.35-6.48,9.86-5.15,16.26c1.28,6.18,5.27,9.52,11.2,10.9c0.17,0.04,0.36,0.04,0.53,0.1 c2.2,0.76,4.44,1.43,6.57,2.34c1.49,0.63,2.15,2.17,1.93,3.66c-0.21,1.42-1.21,2.41-2.96,2.65c-1.91,0.26-3.83,0.47-5.75,0.5 c-3.59,0.05-7.18-0.05-10.77-0.09c-0.3,0-0.61-0.05-1.06-0.1c0-2.2,0-4.34,0-6.73C6.49,47.46,3.27,50.88,0,54.35 c3.27,3.68,6.51,7.32,9.75,10.96c0.09-0.06,0.19-0.11,0.28-0.17c0-2.04,0-4.09,0-6.28c0.62,0,1.15,0,1.68,0 c5.25-0.03,10.5,0.02,15.75-0.11c6.53-0.16,10.24-4.22,11.49-8.81c1.7-6.23-0.34-14.62-9.62-16.23c-2.16-0.38-4.29-0.93-6.43-1.43 c-2.73-0.63-4.19-2.28-4.26-4.78c-0.07-2.62,1.68-5.45,4.14-5.76c2.76-0.35,5.6-0.08,8.55-0.08c0,1.94,0,3.82,0,5.92 c3.42-2.99,6.65-5.82,9.92-8.69c-3.3-3.59-6.52-7.09-9.98-10.86c0,1.62,0,2.86,0,4.31C27.85,12.35,24.63,12.32,21.4,12.36z"/>
    </svg>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <Logo className="w-12 h-auto" />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Sign Solutions
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-4">About</a>
              <a href="#signs" className="text-gray-700 hover:text-gray-900 px-4">Signs</a>
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
              <a href="#signs" className="block text-gray-700 py-2 px-4">Signs</a>
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
      <section className="pt-12 md:pt-20 pb-16">
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
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:-mt-24">
            <img 
              src={portfolioImages.mikePowell}
              alt="Mike Powell - Owner of Sign Solutions of Ohio"
              className="max-w-md w-full"
            />
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
                We believe in looking long term in order to get the best value for our customers. We are proud to be your local, quality sign company. If you have any questions about what we do or would like a free quote, feel free to call us at <a href="tel:4192242231" className="text-primary hover:underline">419-224-2231</a>.
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
                <img 
                  src={portfolioImages.showroom}
                  alt="Sign Solutions of Ohio showroom at 2601 Central Point Parkway in Lima, Ohio"
                  className="rounded-lg w-full"
                />
                <p className="text-center text-gray-600 mt-4">
                  Our Showroom at 2601 Central Point Parkway in Lima, Ohio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Signage / Portfolio Section */}
      <section id="signs" className="py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">Feature Signage</h2>
          <p className="text-xl text-gray-600 mt-4">
            From concept to installation, we deliver quality signage that helps your business stand out.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 md:p-12 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
              >
                <p className="font-semibold text-xl mb-4">{service.title}</p>
                <img 
                  src={service.image}
                  alt={`${service.title} examples from Sign Solutions of Ohio`}
                  className="rounded-lg w-full aspect-video object-cover"
                />
                <p className="text-gray-600 mt-4">{service.description}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 uppercase tracking-wider">
            What Customers Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 md:p-12 rounded-lg border border-gray-200 bg-white"
                style={{ boxShadow: '0 10px 28px rgba(0,0,0,.08)' }}
              >
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  {testimonial.heading}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Terms & Conditions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>© Copyright {new Date().getFullYear()} Sign Solutions of Ohio.</li>
                <li><a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a></li>
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
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              Website by <a href="https://bytesitelabs.com" className="text-primary hover:underline">ByteSiteLabs</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
