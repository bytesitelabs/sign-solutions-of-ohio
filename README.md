# Sign Solutions of Ohio

Professional website for Sign Solutions of Ohio - a trusted local sign company serving Northwest Ohio since 2005.

**Built and maintained by [ByteSiteLabs](https://bytesitelabs.com).**

## Features

- ✅ Multi-page structure (Home, About, Services, Portfolio, Contact, Privacy Policy)
- ✅ Individual service pages with dynamic routing
- ✅ WCAG 2.1 AA accessibility compliant
- ✅ SEO optimized with JSON-LD structured data
- ✅ Core Web Vitals optimized
- ✅ Mobile-first responsive design
- ✅ Contact form with validation
- ✅ TypeScript strict mode
- ✅ Unit and E2E tests

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Testing:** Vitest + Playwright
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run E2E tests
npm run test:e2e
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── privacy-policy/    # Privacy policy
│   └── services/          # Services pages
│       └── [slug]/        # Dynamic service pages
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities and constants
├── public/                # Static assets
└── tests/                 # Test files
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, services overview, testimonials, CTA |
| About | `/about` | Company story, Mike Powell bio, values |
| Services | `/services` | All services overview |
| Indoor Signs | `/services/indoor-signs` | Indoor signage details |
| Outdoor Signs | `/services/outdoor-signs` | Outdoor signage details |
| Vehicle Wraps | `/services/vehicle-wraps` | Vehicle wrap details |
| LED Signs | `/services/led-signs` | LED signage details |
| Banners | `/services/banners` | Banner details |
| Wall Graphics | `/services/wall-graphics` | Wall graphics details |
| Portfolio | `/portfolio` | Project gallery |
| Contact | `/contact` | Contact form, map, info |
| Privacy Policy | `/privacy-policy` | Legal privacy policy |

## Environment Variables

No environment variables required for basic functionality.

## Deployment

The site deploys automatically via Vercel on push to `main`.

Live URL: https://sign-solutions-of-ohio.vercel.app

---

© 2024 Sign Solutions of Ohio. Website by [ByteSiteLabs](https://bytesitelabs.com).
