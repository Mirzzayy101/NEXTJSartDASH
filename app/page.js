import Link from "next/link"
import HeroSlider from "../components/hero-slider"
import PaintingCard from "../components/painting-card"
import Testimonials from "../components/testimonials"
import { paintings } from "../data/paintings"
import { Palette, Award, Users, Clock } from "lucide-react"

export default function HomePage() {
  const featuredPaintings = paintings.filter((painting) => painting.featured)
// This could be pre-rendered at build time since paintings data is static
  return (
    <div>
      <HeroSlider />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Artworks Created</p>
            </div>
            <div className="group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">300+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2-4</h3>
              <p className="text-gray-600">Weeks Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Order Your Custom Painting</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your memories, ideas, or favorite photos into stunning hand-painted artworks. Each piece is
              uniquely crafted with attention to detail, using premium materials and techniques that ensure your
              painting will be treasured for generations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
                <p className="text-gray-600">Personalized artwork based on your vision and preferences</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖌️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hand-Painted</h3>
                <p className="text-gray-600">Every brushstroke carefully applied by skilled artists</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Delivery</h3>
                <p className="text-gray-600">Carefully packaged and delivered to your doorstep</p>
              </div>
            </div>

            <Link
              href="/order"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl text-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Artworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our signature pieces and get inspired for your custom order. Each artwork tells a unique story
              and showcases our artistic expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process ensures you get the perfect custom artwork
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your vision, preferences, and requirements in detail",
                icon: "💬",
              },
              {
                step: "2",
                title: "Sketch & Approval",
                description: "I create initial sketches for your review and feedback",
                icon: "✏️",
              },
              {
                step: "3",
                title: "Painting",
                description: "I bring your vision to life with careful attention to every detail",
                icon: "🎨",
              },
              {
                step: "4",
                title: "Delivery",
                description: "Your finished artwork is carefully packaged and delivered",
                icon: "📦",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:bg-blue-700 transition-colors duration-200">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
