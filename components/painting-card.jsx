"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, ShoppingCart } from "lucide-react"

export default function PaintingCard({ painting, showDetails = false }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={painting.image || "/placeholder.svg"}
          alt={painting.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {painting.status === "sold" && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            SOLD
          </div>
        )}

        {painting.featured && (
          <div
            className="absolute top-3 left-3 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            style={{ backgroundColor: "#d4a54e" }}
          >
            FEATURED
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <Link
              href={`/gallery/${painting.id}`}
              className="bg-white text-gray-900 p-3 rounded-full hover:text-white transition-all duration-200 transform hover:scale-110"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d4a54e"
                e.target.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white"
                e.target.style.color = "#111827"
              }}
            >
              <Eye size={20} />
            </Link>
            <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 transform hover:scale-110">
              <Heart size={20} />
            </button>
            {painting.status === "available" && (
              <Link
                href="/order"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-110"
              >
                <ShoppingCart size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3
            className="text-xl font-bold text-gray-900 transition-colors duration-200"
            onMouseEnter={(e) => {
              e.target.style.color = "#d4a54e"
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#111827"
            }}
          >
            {painting.title}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{painting.category}</span>
        </div>

        {showDetails && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{painting.description}</p>
        )}

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold" style={{ color: "#d4a54e" }}>
              ${painting.price}
            </p>
            <p className="text-sm text-gray-500">{painting.size}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">{painting.medium}</p>
            <p
              className={`text-sm font-semibold ${painting.status === "available" ? "text-green-600" : "text-red-600"}`}
            >
              {painting.status === "available" ? "Available" : "Sold"}
            </p>
          </div>
        </div>

        <Link
          href={`/gallery/${painting.id}`}
          className="block w-full text-white text-center px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
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
  )
}
