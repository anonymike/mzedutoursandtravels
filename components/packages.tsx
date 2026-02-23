"use client"

import Link from "next/link"
import { Star, MapPin } from "lucide-react"

const packages = [
  {
    id: "tsavo-national-park",
    name: "Tsavo National Park (East & West)",
    duration: "Full Day",
    image: "/tsavo-national-park-with-red-elephants-and-baobab-.jpg",
    features: ["Red elephants", "Mzima Springs", "Lugard Falls", "Big Five wildlife"],
    rating: 4.9,
  },
  {
    id: "mzima-springs",
    name: "Mzima Springs",
    duration: "1-2 days",
    image: "/crystal-clear-springs-with-hippos-and-fish-underwa.jpg",
    features: ["Underwater observatory", "Hippo watching", "Crystal clear water", "Nature walks"],
    rating: 4.8,
  },
  {
    id: "shimba-hills-reserve",
    name: "Shimba Hills National Reserve",
    duration: "Full Day",
    image: "/shimba-hills-rainforest-with-waterfalls-and-elepha.jpg",
    features: ["Sable antelopes", "Sheldrick Falls", "Rainforest trails", "Coastal views"],
    rating: 4.8,
  },
  {
    id: "fort-jesus",
    name: "Fort Jesus Museum",
    duration: "Full Day",
    image: "/fort-jesus-historical-portuguese-fort-in-mombasa.jpg",
    features: ["UNESCO World Heritage", "Portuguese architecture", "Historical artifacts", "Guided tours"],
    rating: 4.7,
  },
  {
    id: "mombasa-marine-park",
    name: "Mombasa Marine Park",
    duration: "Full Day",
    image: "/mombasa-marine-park-with-coral-reefs-and-tropical-.jpg",
    features: ["Snorkeling", "Coral reefs", "Glass-bottom boats", "Dolphin spotting"],
    rating: 4.9,
  },
  {
    id: "haller-park",
    name: "Haller Park Nature Reserve",
    duration: "Full Day",
    image: "/haller-park-with-giraffes-and-wildlife-sanctuary.jpg",
    features: ["Giraffe feeding", "Crocodile farm", "Butterfly pavilion", "Wildlife sanctuary"],
    rating: 4.7,
  },
  {
    id: "arabuko-sokoke-forest",
    name: "Arabuko-Sokoke Forest",
    duration: "1-2 days",
    image: "/arabuko-sokoke-coastal-forest-with-endemic-birds-a.jpg",
    features: ["Endemic species", "Bird watching", "Rare butterflies", "Forest trails"],
    rating: 4.6,
  },
  {
    id: "custom-coastal-package",
    name: "Custom Coastal Package",
    duration: "Flexible",
    image: "/kenya-coastal-adventure-with-beaches-and-safari-co.jpg",
    features: ["Personalized itinerary", "Flexible dates", "Multi-destination", "Full support"],
    rating: 5.0,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary">COASTAL DESTINATIONS</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Curated Adventure Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the treasures of Kenya's coastal region with our expertly crafted tour packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/40"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-foreground">{pkg.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 leading-tight">{pkg.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-5 pb-5 border-b border-border/40">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-3">
                  <a href="/#booking" className="flex-1">
                    <button className="w-full bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
                      Book Now
                    </button>
                  </a>
                  <Link href={`/packages/${pkg.id}`} className="flex-1">
                    <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
