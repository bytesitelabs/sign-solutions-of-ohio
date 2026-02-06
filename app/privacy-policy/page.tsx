import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { Hero } from '@/components/sections'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY_INFO.name}. Learn how we collect, use, and protect your personal information.`,
  robots: {
    index: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://signsolutionsoh.com' },
          { name: 'Privacy Policy', url: 'https://signsolutionsoh.com/privacy-policy' },
        ]}
      />

      <Hero
        title="Privacy"
        highlight="Policy"
        showCTA={false}
        showImage={false}
        compact
      />

      <section className="py-20">
        <Container>
          <article className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2>Introduction</h2>
            <p>
              {COMPANY_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            
            <h3>Personal Data</h3>
            <p>
              When you contact us or request a quote, we may collect personally identifiable information, such as:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name</li>
              <li>Address</li>
              <li>Project details and requirements</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may automatically collect certain information when you visit our website, including:
            </p>
            <ul>
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your projects</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with third-party vendors who assist us in operating our website and conducting our business.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, but some features of our website may not function properly without them.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review their privacy policies.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic">
              <strong>{COMPANY_INFO.name}</strong><br />
              {COMPANY_INFO.address.street}<br />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}<br />
              Phone: <a href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}>{COMPANY_INFO.phone}</a><br />
              Email: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </address>
          </article>
        </Container>
      </section>
    </>
  )
}
