"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ArtStudio - Custom Hand-Painted Artworks</title>
        <meta
          name="description"
          content="Transform your space with unique, personalized paintings created just for you"
        />
        <meta name="keywords" content="custom paintings, hand-painted art, personalized artwork, home decor" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#d4a54e" }}>
                  ArtStudio
                </h3>
                <p className="text-gray-300 mb-4">
                  Creating beautiful, custom hand-painted artworks that transform spaces and capture memories.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.target.style.color = "#d4a54e"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db"
                    }}
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.target.style.color = "#d4a54e"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db"
                    }}
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.target.style.color = "#d4a54e"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db"
                    }}
                  >
                    Pinterest
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: "#d4a54e" }}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/order"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: "#d4a54e" }}>
                  Contact
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a
                      href="mailto:sarah@artstudio.com"
                      className="hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      sarah@artstudio.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/15551234567"
                      className="hover:text-white transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.target.style.color = "#d4a54e"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#d1d5db"
                      }}
                    >
                      +1 (555) 123-4567
                    </a>
                  </li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ArtStudio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
