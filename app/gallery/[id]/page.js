"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ViewInRoom from "../../../components/view-in-room"
import { paintings } from "../../../data/paintings"
import { ArrowLeft, Palette, Ruler, Tag, Calendar, Share2, Heart } from "lucide-react"

export default function PaintingPage({ params }) {
  const painting = paintings.find((p) => p.id === params.id)

  if (!painting) {
    notFound()
  }

  const relatedPaintings = paintings.filter((p) => p.id !== painting.id && p.category === painting.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/gallery"
          className="inline-flex items-center mb-8 transition-colors duration-200 group"
          style={{ color: "#d4a54e" }}
          onMouseEnter={(e) => {
            e.target.style.color = "#c19441"
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#d4a54e"
          }}
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative h-96 lg:h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden group">
              <Image
                src={painting.image || "/placeholder.svg"}
                alt={painting.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {painting.status === "sold" && (
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  SOLD
                </div>
              )}

              <div className="absolute top-6 left-6 flex space-x-2">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                  <Heart size={20} />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <ViewInRoom paintingImage={painting.image} paintingTitle={painting.title} />
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span
                  className="text-white px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#d4a54e" }}
                >
                  {painting.category}
                </span>
                {painting.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{painting.title}</h1>

              <div className="flex items-center space-x-6 mb-6">
                <p className="text-3xl font-bold" style={{ color: "#d4a54e" }}>
                  ${painting.price}
                </p>
                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    painting.status === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {painting.status === "available" ? "Available" : "Sold"}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{painting.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Artwork Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#fef3e2" }}>
                    <Palette className="w-5 h-5" style={{ color: "#d4a54e" }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Medium</p>
                    <p className="font-semibold text-gray-900">{painting.medium}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Ruler className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-semibold text-gray-900">{painting.size}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Tag className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900 capitalize">{painting.category}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Delivery</p>
                    <p className="font-semibold text-gray-900">2-4 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {painting.status === "available" ? (
                <>
                  <Link
                    href="/order"
                    className="block w-full text-white text-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #d4a54e 0%, #c19441 100%)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #c19441 0%, #b8873a 100%)"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "linear-gradient(135deg, #d4a54e 0%, #c19441 100%)"
                    }}
                  >
                    Purchase This Painting - ${painting.price}
                  </Link>
                  <Link
                    href="/order"
                    className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-center px-6 py-4 rounded-xl font-semibold transition-all duration-200"
                  >
                    Commission Similar Artwork
                  </Link>
                </>
              ) : (
                <div className="bg-gray-100 border-2 border-gray-300 text-gray-600 text-center px-6 py-4 rounded-xl font-semibold">
                  This painting has been sold
                </div>
              )}
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: "#fef3e2" }}>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">💡 Interested in a custom piece?</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I can create a similar painting tailored to your preferences, size requirements, and color scheme. Each
                custom piece is unique and crafted specifically for your space.
              </p>
              <Link
                href="/order"
                className="inline-flex items-center font-semibold transition-colors duration-200 group"
                style={{ color: "#d4a54e" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#c19441"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#d4a54e"
                }}
              >
                Start Custom Order
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {relatedPaintings.length > 0 && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More {painting.category} paintings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPaintings.map((relatedPainting) => (
                <div
                  key={relatedPainting.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPainting.image || "/placeholder.svg"}
                      alt={relatedPainting.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">{relatedPainting.title}</h4>
                    <p className="font-semibold mb-4" style={{ color: "#d4a54e" }}>
                      ${relatedPainting.price}
                    </p>
                    <Link
                      href={`/gallery/${relatedPainting.id}`}
                      className="block w-full text-white text-center px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      style={{ backgroundColor: "#d4a54e" }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#c19441"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#d4a54e"
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
