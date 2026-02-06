export const COMPANY_INFO = {
  name: 'Sign Solutions of Ohio',
  tagline: "It's Not Just A Sign, It's Your Image",
  phone: '419-224-2231',
  email: 'info@signsolutionsoh.com',
  address: {
    street: '2601 Central Point Parkway',
    city: 'Lima',
    state: 'OH',
    zip: '45804',
    full: '2601 Central Point Parkway, Lima, OH 45804',
  },
  hours: {
    weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: By Appointment',
    sunday: 'Sunday: Closed',
  },
  social: {
    facebook: 'https://www.facebook.com/SignSolutionsOfOhio',
    twitter: 'https://twitter.com/signsolutionsoh',
  },
  coordinates: {
    lat: 40.7420,
    lng: -84.1052,
  },
} as const

export const SERVICES = [
  {
    id: 'indoor-signs',
    title: 'Indoor Signs',
    shortDescription: 'Lobby signs, directional signs, and ADA compliant signage',
    description: 'Professional indoor signage solutions including lobby signs, wayfinding systems, wall graphics, and promotional displays. Perfect for creating a welcoming atmosphere and guiding customers through your space.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: [
      'Lobby & Reception Signs',
      'Directional & Wayfinding Signs',
      'ADA Compliant Signage',
      'Office & Room Signs',
      'Promotional Displays',
    ],
  },
  {
    id: 'outdoor-signs',
    title: 'Outdoor Signs',
    shortDescription: 'Monument Signs, storefront signs, and LED message boards',
    description: 'High-impact outdoor signage including Monument Signs, Channel Letter Signs, and LED Signs designed to withstand Ohio weather conditions while maximizing visibility and brand recognition.',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&q=80',
    features: [
      'Monument Signs',
      'Channel Letter Signs',
      'Pylon Signs',
      'Storefront Signs',
      'Post & Panel Signs',
    ],
  },
  {
    id: 'vehicle-wraps',
    title: 'Vehicle Wraps',
    shortDescription: 'Car wraps, truck wraps, and vinyl lettering',
    description: 'Transform your vehicles into mobile billboards with our Full Vehicle Wraps and Partial Vehicle Wraps. Professional installation that protects your vehicle while promoting your brand.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'Full Vehicle Wraps',
      'Partial Vehicle Wraps',
      'Vinyl Lettering',
      'Fleet Graphics',
      'Window Mesh & Perforated Vinyl',
    ],
  },
  {
    id: 'led-signs',
    title: 'LED Signs',
    shortDescription: 'Digital Message Boards and electronic signage',
    description: 'Energy-efficient LED signage solutions including LED Channel Letters, Digital Message Boards, and LED Monument Signs. Bright, attention-grabbing displays that work 24/7.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    features: [
      'LED Channel Letters',
      'Digital Message Centers',
      'LED Monument Signs',
      'Programmable Displays',
      'Indoor LED Displays',
    ],
  },
  {
    id: 'banners',
    title: 'Banners',
    shortDescription: 'Indoor and outdoor banners for all occasions',
    description: 'Custom banners for events, promotions, and business identification. From vinyl banners to mesh banners, we create durable, eye-catching displays for any occasion.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    features: [
      'Vinyl Banners',
      'Mesh Banners',
      'Retractable Banners',
      'Pole Banners',
      'Event Banners',
    ],
  },
  {
    id: 'wall-graphics',
    title: 'Wall Graphics',
    shortDescription: 'Wall murals and vinyl wall wraps',
    description: 'Transform blank walls into powerful marketing tools with custom wall graphics, murals, and decorative signage. Perfect for creating memorable brand experiences.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
    features: [
      'Custom Wall Murals',
      'Vinyl Wall Wraps',
      'Window Graphics',
      'Floor Graphics',
      'Decorative Signage',
    ],
  },
] as const

export const SERVICE_AREAS = [
  { name: 'Lima', subtitle: 'Main Office', county: 'Allen County' },
  { name: 'Findlay', subtitle: 'Hancock County', county: 'Hancock County' },
  { name: 'Wapakoneta', subtitle: 'Auglaize County', county: 'Auglaize County' },
  { name: 'Celina', subtitle: 'Mercer County', county: 'Mercer County' },
  { name: 'Van Wert', subtitle: 'Van Wert County', county: 'Van Wert County' },
  { name: 'Sidney', subtitle: 'Shelby County', county: 'Shelby County' },
  { name: 'St. Marys', subtitle: 'Auglaize County', county: 'Auglaize County' },
] as const

export const TESTIMONIALS = [
  {
    name: 'Paul Hinds',
    title: 'Positive Sales Leader',
    heading: 'Mike is a great guy!',
    quote: "Mike is a great guy who takes pride in his work. He spent a lot of time with me, even as a smaller client, and made sure I got exactly what I both wanted and needed. He explained the pros and cons of everything we discussed, and in the end, the final result was amazing. I highly recommend Mike by name.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    name: 'Jessika Phillips',
    title: 'International Speaker & Founder of NOW Marketing Group',
    heading: 'Meticulous Work with Results You Will Love',
    quote: "I have worked with Mike Powell on various projects in my business. In the most recent project, Mike and Josh at Sign Solutions installed an amazing back window graphic on my car. I called Mike on a Tuesday to inquire about service, and Tuesday night Josh already sent over a proof. By Thursday, I was able to have their graphics installed! Mike's work was meticulous, and I love my end result!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    name: 'Wendy Baxter',
    title: 'Owner/Insurance Agent at Baxter Benefit Solutions',
    heading: 'Dedication to Customers and Passion',
    quote: "I have worked with Mike on several signage projects for construction-related jobs, two of which were for our company offices. The thing that impressed me most about Mike is his dedication to his customers and passion for his work. He does what he says he will do and is willing to go above and beyond to ensure client satisfaction.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
] as const
