"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Home, Bed, Briefcase, UtensilsCrossed, RotateCcw } from "lucide-react"

export default function ViewInRoom({ paintingImage, paintingTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState("living-room")

  const rooms = [
    {
      id: "living-room",
      name: "Living Room",
      image: "/placeholder.svg?height=400&width=600",
      icon: Home,
      description: "Perfect for entertaining guests",
    },
    {
      id: "bedroom",
      name: "Bedroom",
      image: "/placeholder.svg?height=400&width=600",
      icon: Bed,
      description: "Create a peaceful atmosphere",
    },
    {
      id: "office",
      name: "Office",
      image: "/placeholder.svg?height=400&width=600",
      icon: Briefcase,
      description: "Inspire creativity at work",
    },
    {
      id: "dining",
      name: "Dining Room",
      image: "/placeholder.svg?height=400&width=600",
      icon: UtensilsCrossed,
      description: "Enhance dining experiences",
    },
  ]

  const currentRoom = rooms.find((room) => room.id === selectedRoom)

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <Home size={20} />
        <span>View in Room</span>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Room Preview</h3>
            <p className="text-gray-600">See how "{paintingTitle}" looks in your space</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Choose a room setting:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rooms.map((room) => {
                const IconComponent = room.icon
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`p-4 rounded-xl font-medium transition-all duration-200 border-2 ${
                      selectedRoom === room.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <IconComponent size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-semibold">{room.name}</div>
                    <div className="text-xs opacity-75 mt-1">{room.description}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={currentRoom?.image || rooms[0].image}
                alt={`${currentRoom?.name} setting`}
                fill
                className="object-cover"
              />

              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-black opacity-20 blur-sm transform translate-x-2 translate-y-2 rounded-sm"></div>
                  <div className="relative w-32 h-24 md:w-40 md:h-30 border-4 border-amber-800 shadow-2xl bg-white p-1 transform hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={paintingImage || "/placeholder.svg"}
                        alt={paintingTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    "{paintingTitle}" in {currentRoom?.name}
                  </p>
                  <p className="text-sm text-gray-600">{currentRoom?.description}</p>
                </div>
                <button
                  onClick={() =>
                    setSelectedRoom(rooms[(rooms.findIndex((r) => r.id === selectedRoom) + 1) % rooms.length].id)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-200"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-6">
            <h5 className="font-semibold text-gray-900 mb-2">💡 Visualization Tips</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• This is a simulated preview - actual size may vary based on your wall dimensions</li>
              <li>• Consider your room's lighting when choosing artwork</li>
              <li>• We can customize the size to perfectly fit your space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
