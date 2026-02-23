"use client"

import { UsersIcon } from "lucide-react"
import { useState } from "react"
import VehicleBookingModal from "./vehicle-booking-modal"

const vehicles = [
  {
    name: "4-Seater Vans",
    capacity: 4,
    color: "from-orange-500 to-amber-500",
    features: ["Solo travelers", "Small families", "Comfort seating"],
  },
  {
    name: "10-Seater Vans",
    capacity: 10,
    color: "from-yellow-600 to-amber-700",
    features: ["Group tours", "Team trips", "Organized tours"],
  },
  {
    name: "11-Seater Vans",
    capacity: 11,
    color: "from-orange-700 to-red-700",
    features: ["Large groups", "Corporate events", "Extended trips"],
  },
  {
    name: "Private Taxis",
    capacity: 4,
    color: "from-yellow-700 to-orange-800",
    features: ["Private rides", "Urban transport", "Express service"],
  },
  {
    name: "Car Hire",
    capacity: 5,
    color: "from-amber-700 to-yellow-800",
    features: ["Independence", "Flexibility", "Adventure mode"],
  },
]

export default function Fleet() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<(typeof vehicles)[0] | null>(null)

  const handleBookVehicle = (vehicle: (typeof vehicles)[0]) => {
    setSelectedVehicle(vehicle)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="fleet" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-sm font-semibold text-primary">OUR FLEET</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Vehicle Selection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles, each designed for comfort and safety
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-muted/20 rounded-2xl overflow-hidden border border-border hover:border-primary transition-all shadow-md hover:shadow-xl"
              >
                {/* Top accent bar */}
                <div className={`h-32 bg-gradient-to-r ${vehicle.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-pattern" />
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-5 h-5 text-white" />
                      <span className="text-white font-bold">{vehicle.capacity} Seats</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-primary transition">
                    {vehicle.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleBookVehicle(vehicle)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    Book Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VehicleBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} vehicle={selectedVehicle} />
    </>
  )
}
