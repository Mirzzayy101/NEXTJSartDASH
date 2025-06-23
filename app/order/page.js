"use client"

import { useState } from "react"
import { Upload, MessageCircle, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react"

export default function OrderPage() {
  const [orderType, setOrderType] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    size: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        size: "",
        budget: "",
        timeline: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Order Custom Artwork</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Choose how you'd like to get started with your custom painting.
          </p>
        </div>

        {!orderType ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#fef3e2" }}
              >
                <MessageCircle className="w-10 h-10" style={{ color: "#d4a54e" }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discuss Your Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Let's have a conversation about your ideas, preferences, and requirements. Perfect for those who want
                guidance and collaboration throughout the creative process.
              </p>
              <ul className="text-sm text-gray-600 mb-8 space-y-2">
                <li>✓ Personal consultation</li>
                <li>✓ Style recommendations</li>
                <li>✓ Size and placement advice</li>
                <li>✓ Color palette guidance</li>
              </ul>
              <button
                onClick={() => setOrderType("contact")}
                className="w-full text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: "#d4a54e" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#c19441"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#d4a54e"
                }}
              >
                Start Discussion
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Reference</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have a specific image or design in mind? Upload your reference and provide details about your custom
                painting request for a more direct approach.
              </p>
              <ul className="text-sm text-gray-600 mb-8 space-y-2">
                <li>✓ Upload photos or sketches</li>
                <li>✓ Specify modifications</li>
                <li>✓ Quick turnaround</li>
                <li>✓ Direct communication</li>
              </ul>
            <button
  onClick={() => setOrderType("upload")}
  className="w-full bg-[#d4a54e] hover:bg-[#c19545] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
>
  Upload & Order
</button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {orderType === "contact" ? "Contact for Discussion" : "Upload Reference & Order"}
                </h2>
                <p className="text-gray-600 mt-2">
                  {orderType === "contact"
                    ? "Tell us about your vision and we'll guide you through the process"
                    : "Upload your reference image and provide project details"}
                </p>
              </div>
              <button
                onClick={() => {
                  setOrderType(null)
                  setSubmitStatus(null)
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                ← Back to options
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Order Request Submitted!</h3>
                    <p className="text-green-700">
                      Thank you for your order request! We will contact you within 24 hours to discuss your project.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">Submission Failed</h3>
                    <p className="text-red-700">
                      There was an error submitting your request. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                    placeholder="Enter your full name"
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

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                    placeholder="your@email.com"
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
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#d4a54e"
                      e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                  >
                    <option value="">Select size</option>
                    <option value="16x20">16" x 20" - $300-400</option>
                    <option value="20x24">20" x 24" - $400-500</option>
                    <option value="24x30">24" x 30" - $500-600</option>
                    <option value="30x40">30" x 40" - $600-800</option>
                    <option value="custom">Custom size</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#d4a54e"
                      e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                  >
                    <option value="">Select budget</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500-800">$500 - $800</option>
                    <option value="800-1200">$800 - $1,200</option>
                    <option value="1200+">$1,200+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#d4a54e"
                      e.target.style.boxShadow = "0 0 0 2px rgba(212, 165, 78, 0.2)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                      e.target.style.boxShadow = "none"
                    }}
                  >
                    <option value="">Select timeline</option>
                    <option value="flexible">Flexible</option>
                    <option value="2-3weeks">2-3 weeks</option>
                    <option value="1month">1 month</option>
                    <option value="2months">2 months</option>
                  </select>
                </div>
              </div>

              {orderType === "upload" && (

                <div className="bg-[#d4a54e] text-white p-4 rounded-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Reference Image</label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-colors duration-200 bg-gray-50"
                    style={{
                      "--hover-border": "#d4a54e",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#d4a54e"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#d1d5db"
                    }}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4" style={{ color: "#d4a54e" }} />
                    <p className="text-gray-600 mb-2" style={{ color: "#d4a54e" }}>
                      Drag and drop your image here, or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mb-4">Supports JPG, PNG, GIF up to 10MB</p>
                    <input type="file" accept="image/*" className="hidden" id="file-upload" />
                    <label
                      htmlFor="file-upload"
                      className="inline-block text-white px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 font-semibold"
                      style={{ backgroundColor: "#d4a54e" }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#c19441"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#d4a54e"
                      }}
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {orderType === "contact" ? "Tell us about your vision" : "Additional details and requirements"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    orderType === "contact"
                      ? "Describe your ideas, style preferences, color schemes, subject matter, or any specific requirements. The more details you provide, the better we can understand your vision..."
                      : "Provide any additional details about your reference image, modifications needed, color preferences, or special requirements..."
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 transition-all duration-200 resize-none"
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                style={{
                  background: isSubmitting
                    ? "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)"
                    : "linear-gradient(135deg, #d4a54e 0%, #c19441 100%)",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = "linear-gradient(135deg, #c19441 0%, #b8873a 100%)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = "linear-gradient(135deg, #d4a54e 0%, #c19441 100%)"
                  }
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting Request...
                  </div>
                ) : (
                  "Submit Order Request"
                )}
              </button>
            </form>
          </div>
        )}

        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Prefer Direct Contact?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:transition-colors duration-200"
                style={{ backgroundColor: "#fef3e2" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fdf2e9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fef3e2"
                }}
              >
                <Mail className="w-8 h-8" style={{ color: "#d4a54e" }} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600 mb-3">For detailed inquiries</p>
              <a
                href="mailto:sarah@artstudio.com"
                className="font-semibold transition-colors duration-200"
                style={{ color: "#d4a54e" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#c19441"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#d4a54e"
                }}
              >
                sarah@artstudio.com
              </a>
            </div>
            <div className="group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600 mb-3">Quick questions</p>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instagram</h4>
              <p className="text-gray-600 mb-3">Latest works & updates</p>
              <a
                href="https://instagram.com/Mirzzayy_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
              >
                @artstudio_paintings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
