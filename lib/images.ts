/**
 * Image paths for the site
 * 
 * NOTE: These are placeholder paths. Replace with actual images.
 * Recommended: Download actual images from the client or use 
 * professional stock photos with proper licensing.
 */

// Using Unsplash for high-quality placeholder images
// These are free to use under the Unsplash license
export const IMAGES = {
  // Hero and general
  mikePowell: '/images/mike-powell.png',
  showroom: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  ogImage: '/images/og-image.jpg',
  
  // Service images - sign industry related
  indoorSigns: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
  outdoorSigns: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&q=80',
  vehicleWraps: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  ledSigns: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
  banners: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  wallGraphics: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  
  // Portfolio
  portfolio: {
    lobbySign: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    monumentSign: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&q=80',
    vehicleWrap: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ledSign: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    wallMural: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    channelLetters: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    fleetGraphics: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    wayfinding: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  
  // Testimonials - professional headshots
  testimonials: {
    paulHinds: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    jessikaPhillips: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    wendyBaxter: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
} as const

/**
 * Use these for service cards - maps service IDs to image URLs
 */
export function getServiceImage(serviceId: string): string {
  const imageMap: Record<string, string> = {
    'indoor-signs': IMAGES.indoorSigns,
    'outdoor-signs': IMAGES.outdoorSigns,
    'vehicle-wraps': IMAGES.vehicleWraps,
    'led-signs': IMAGES.ledSigns,
    'banners': IMAGES.banners,
    'wall-graphics': IMAGES.wallGraphics,
  }
  return imageMap[serviceId] || IMAGES.showroom
}
