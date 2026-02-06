export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sign Solutions of Ohio
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional sign company serving Ohio. Custom signs, banners, vehicle wraps, and more.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            About Us
          </h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto">
            Professional sign company serving Ohio. Custom signs, banners, vehicle wraps, and more.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Contact Us
          </h2>
          <p className="text-slate-300 mb-8">
            Ready to get started? Reach out today.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Send us an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 Sign Solutions of Ohio. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website by <a href="https://bytesitelabs.com" className="text-primary hover:underline">ByteSiteLabs</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
