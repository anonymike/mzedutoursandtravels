"use client"

import { Compass, MapPin, Truck, Car, Navigation, Map, Users, Plane } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Game Drives",
    description: "Guided safari expeditions through Tsavo National Park with expert wildlife spotting",
    image: "/images/game-drive.jpg",
  },
  {
    icon: MapPin,
    title: "Private Drop-offs",
    description: "Personalized transportation to your specific destinations across Kenya",
    image: "/images/sgr-airport-transfers1.jpg",
  },
  {
    icon: Truck,
    title: "Inter-County Transport",
    description: "Reliable shuttle services connecting major towns and destinations",
    image: "/images/intercounty.jpg",
  },
  {
    icon: Car,
    title: "Car Hire",
    description: "Fleet of well-maintained vehicles available for your travel needs",
    image: "/images/car-hire1.jpg",
  },
  {
    icon: Navigation,
    title: "Self-Drive",
    description: "Explore at your own pace with our self-drive vehicle options",
    image: "/images/selfdrive.jpg",
  },
  {
    icon: Map,
    title: "Road Trips",
    description: "Scenic journeys through Kenya with planned itineraries and local insights",
    image: "/images/road-20trips.jpg",
  },
  {
    icon: Users,
    title: "Corporate Tours",
    description: "Team building and corporate retreat packages for companies",
    image: "/images/corporate-20tours1.jpg",
  },
  {
    icon: Plane,
    title: "SGR & Airport Transfers",
    description: "Convenient airport pickup and drop-off services with professional drivers",
    image: "/images/sgr-20-26-20airport-20transfers.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary">OUR SERVICES</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel Solutions Tailored for You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-80"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-colors duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
