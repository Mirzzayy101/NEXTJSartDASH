import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MessageCircle, MapPin, Clock, Palette, Award, Users, Heart } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About the Artist</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the passion and story behind every brushstroke
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/painterlady1.jpg"
                alt="Artist Sarah Mitchell at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sarah Mitchell</h3>
                <p className="text-lg opacity-90">Fine Artist & Custom Painter</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Artistic Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over 15 years of experience in fine arts, I specialize in creating custom hand-painted artworks
                that capture the essence of your most cherished memories and dreams. My journey began in art school,
                where I discovered my passion for bringing stories to life through paint and canvas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every piece I create is infused with emotion, technique, and a deep understanding of what makes art
                truly meaningful. I believe that art should not just decorate a space, but transform it into something
                that reflects your personality and brings you joy every day.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Artist Profile</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Based in</p>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Experience</p>
                    <p className="text-gray-600">15+ years in fine arts</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <Palette className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Specialties</p>
                    <p className="text-gray-600">Portraits, Landscapes, Custom Commissions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Education</p>
                    <p className="text-gray-600">MFA in Fine Arts, California College of the Arts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">500+</h4>
                <p className="text-gray-600 text-sm">Artworks Created</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">300+</h4>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">25+</h4>
                <p className="text-gray-600 text-sm">Awards Won</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">100%</h4>
                <p className="text-gray-600 text-sm">Satisfaction Rate</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Custom Art?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Each piece is uniquely crafted for you and your space</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Premium quality materials and professional techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Personal collaboration throughout the entire process</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Lifetime satisfaction guarantee and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to start your custom artwork journey? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200 group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">For detailed inquiries and project discussions</p>
              <a
                href="mailto:sarah@artstudio.com"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 text-lg"
              >
                sarah@artstudio.com
              </a>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200 group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick questions and instant communication</p>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 text-lg"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instagram</h3>
              <p className="text-gray-600 mb-4">Follow my latest works and behind-the-scenes</p>
              <a
                href="https://instagram.com/artstudio_paintings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200 text-lg"
              >
                @artstudio_paintings
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">My Creative Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your vision, preferences, and requirements in detail",
                icon: "💬",
                color: "blue",
              },
              {
                step: "2",
                title: "Sketch & Approval",
                description: "I create initial sketches for your review and feedback",
                icon: "✏️",
                color: "green",
              },
              {
                step: "3",
                title: "Painting",
                description: "I bring your vision to life with careful attention to every detail",
                icon: "🎨",
                color: "purple",
              },
              {
                step: "4",
                title: "Delivery",
                description: "Your finished artwork is carefully packaged and delivered",
                icon: "📦",
                color: "orange",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/order"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Start Your Custom Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
