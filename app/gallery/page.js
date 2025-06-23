"use client"

import { useState } from "react"
import Link from "next/link"
import PaintingCard from "../../components/painting-card"
import { paintings } from "../../data/paintings"
import { Search, Filter, Grid, List } from "lucide-react"

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  const categories = ["all", "landscape", "seascape", "urban", "abstract"]
  const statuses = ["all", "available", "sold"]

  const filteredPaintings = paintings.filter((painting) => {
    const categoryMatch = filter === "all" || painting.category === filter
    const statusMatch = statusFilter === "all" || painting.status === statusFilter
    const searchMatch =
      searchTerm === "" ||
      painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      painting.description.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && statusMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Art Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of hand-painted artworks, from available pieces to sold masterpieces. Each painting
            represents hours of careful craftsmanship and artistic vision.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search paintings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                onFocus={(e) => {
                  e.target.style.borderColor = "#d4a54e"
                  e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#d4a54e"
                    e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#d1d5db"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                onFocus={(e) => {
                  e.target.style.borderColor = "#d4a54e"
                  e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db"
                  e.target.style.boxShadow = "none"
                }}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                style={viewMode === "grid" ? { color: "#d4a54e" } : {}}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                style={viewMode === "list" ? { color: "#d4a54e" } : {}}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredPaintings.length} of {paintings.length} paintings
            {searchTerm && ` for "${searchTerm}"`}
            {filter !== "all" && ` in ${filter}`}
            {statusFilter !== "all" && ` (${statusFilter})`}
          </p>
        </div>

        {/* Paintings Grid/List */}
        {filteredPaintings.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
            {filteredPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} showDetails={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No paintings found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all our artworks.</p>
            <button
              onClick={() => {
                setFilter("all")
                setStatusFilter("all")
                setSearchTerm("")
              }}
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              style={{ backgroundColor: "#d4a54e" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#c19441"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#d4a54e"
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        {filteredPaintings.length > 0 && (
          <div
            className="mt-16 text-center rounded-2xl p-12 text-white"
            style={{
              background: "linear-gradient(135deg, #d4a54e 0%, #c19441 100%)",
            }}
          >
            <h3 className="text-3xl font-bold mb-4">Don't see what you're looking for?</h3>
            <p className="text-xl mb-8 opacity-90">
              Commission a custom painting tailored to your exact vision and preferences.
            </p>
            <Link
              href="/order"
              className="inline-block bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              style={{ color: "#d4a54e" }}
            >
              Commission Custom Art
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
