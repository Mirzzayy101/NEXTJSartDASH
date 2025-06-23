"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Quote } from "lucide-react"
import { testimonials } from "../data/paintings"

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our custom paintings have transformed homes and brought joy to our clients around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute -top-4 left-8 text-white p-3 rounded-full"
                style={{ backgroundColor: "#d4a54e" }}
              >
                <Quote size={20} />
              </div>

              <div className="flex items-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-semibold">{testimonial.rating}.0</span>
              </div>

              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center">
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden mr-4"
                  style={{ border: "2px solid #fef3e2" }}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="font-medium" style={{ color: "#d4a54e" }}>
                    {testimonial.paintingTitle}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-tl-full opacity-50"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Ready to join our happy clients?</p>
          <Link
            href="/order"
            className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#d4a54e" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c19441"
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#d4a54e"
            }}
          >
            Start Your Custom Order
          </Link>
        </div>
      </div>
    </section>
  )
}
