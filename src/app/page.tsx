import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Demo Sections */}

      {/* Demo Sections */}
      <section id="models" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Model {i}</h3>
                <p className="text-gray-600">
                  Experience innovation and performance with our latest model.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Global Network
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our global network spans across continents, providing exceptional service and support wherever you are.
            </p>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Brand News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <article key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Latest News {i}</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest developments and innovations from KGM Mobility.
                </p>
                <button className="text-kgm-purple font-semibold hover:underline">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Support
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're here to help you with any questions or concerns about our products and services.
            </p>
            <button className="bg-kgm-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-kgm-purple/90 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Scroll Test Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-kgm-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scroll to Test Navbar
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Scroll up and down to see the navbar background change from transparent to solid.
          </p>
          <div className="space-y-4">
            <p className="text-white/70">
              • Initial state: Transparent background
            </p>
            <p className="text-white/70">
              • Scrolled state: Solid #2c294e background with shadow
            </p>
            <p className="text-white/70">
              • Hover effects on menu items with underline animation
            </p>
            <p className="text-white/70">
              • Responsive mobile menu with smooth animations
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 