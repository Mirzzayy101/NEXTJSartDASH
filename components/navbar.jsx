"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/order", label: "Order" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 transition-colors duration-200"
            style={{ color: "#d4a54e" }}
            onMouseEnter={(e) => {
              e.target.style.color = "#c19441"
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#d4a54e"
            }}
          >
            ArtStudio
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 transition-colors duration-200 font-medium relative group"
                style={{
                  "--hover-color": "#d4a54e",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#d4a54e"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#374151"
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "#d4a54e" }}
                ></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
              onMouseEnter={(e) => {
                e.target.style.color = "#d4a54e"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#374151"
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium rounded-md"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#d4a54e"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#374151"
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
