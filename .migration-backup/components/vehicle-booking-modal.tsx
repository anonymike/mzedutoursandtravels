"use client"

import { X, Users, MessageCircle } from "lucide-react"

interface VehicleBookingModalProps {
  isOpen: boolean
  onClose: () => void
  vehicle: {
    name: string
    capacity: number
    color: string
  } | null
}

export default function VehicleBookingModal({ isOpen, onClose, vehicle }: VehicleBookingModalProps) {
  if (!isOpen || !vehicle) return null

  // Mock availability data
  const availabilityData = {
    available: Math.floor(Math.random() * 4) + 1,
    booked: Math.floor(Math.random() * 3),
  }

  const whatsappNumber = "254723471093"
  const bookingMessage = `Hello! I would like to book the following vehicle:\n\n🚗 Vehicle: ${vehicle.name}\n👥 Capacity: ${vehicle.capacity} Seats\n\nPlease let me know the availability and pricing. Thank you!`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className={`bg-gradient-to-r ${vehicle.color} p-6 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <h2 className="font-serif text-2xl font-bold text-white">{vehicle.name}</h2>
            <p className="text-white/90 mt-1">Complete booking details</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Capacity */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-blue-900">Seating Capacity</p>
                  <p className="text-lg font-bold text-blue-900">{vehicle.capacity} Seats</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Current Availability</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <p className="text-sm font-semibold text-green-900">Available</p>
                  <p className="text-2xl font-bold text-green-700">{availabilityData.available}</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                  <p className="text-sm font-semibold text-orange-900">Booked</p>
                  <p className="text-2xl font-bold text-orange-700">{availabilityData.booked}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              BOOK NOW
            </a>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm font-medium text-muted-foreground">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <button
              onClick={() => {
                onClose()
                setTimeout(() => {
                  const bookingSection = document.getElementById("booking")
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" })
                  }
                }, 300)
              }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              BOOK BELOW
            </button>
            {/* End of change */}

            <button
              onClick={onClose}
              className="w-full bg-muted text-foreground py-3 rounded-lg font-semibold hover:bg-muted/80 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
