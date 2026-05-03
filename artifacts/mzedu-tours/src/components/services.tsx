"use client"

import { useState } from "react"
import { MapPin, ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "AMBOSELI",
    tagline: "Land of Giants",
    description:
      "Witness massive elephant herds roaming beneath the snow-capped peak of Mount Kilimanjaro. Amboseli is one of Africa's most iconic safari destinations.",
    image: "/amboseli-elephants.jpg",
    highlights: ["Big Elephant Herds", "Kilimanjaro Views", "Birdwatching", "Maasai Culture"],
    color: "from-amber-600/80 to-orange-900/90",
  },
  {
    name: "LUMO CONSERVANCY",
    tagline: "Wilderness Untouched",
    description:
      "A hidden gem bordering Tsavo East & West, Lumo Community Wildlife Sanctuary offers intimate wildlife encounters at exclusive waterholes.",
    image: "/lumo-elephants.jpg",
    highlights: ["Waterhole Hides", "Rare Wildlife", "Community Tourism", "Night Safaris"],
    color: "from-teal-700/80 to-emerald-900/90",
  },
  {
    name: "TSAVO EAST",
    tagline: "Speed & Grace",
    description:
      "Home to the fastest land animal on earth. Tsavo East's open plains make cheetah sightings legendary — vast, raw and breathtaking.",
    image: "/tsavo-east-cheetah.jpg",
    highlights: ["Cheetah Sightings", "Red Elephants", "Galana River", "Vast Open Plains"],
    color: "from-red-700/80 to-rose-900/90",
  },
  {
    name: "TSAVO WEST",
    tagline: "Stripes & Savanna",
    description:
      "Dramatic volcanic landscapes, crystal springs and iconic zebra herds define Tsavo West. A paradise of contrasts with some of Kenya's best scenery.",
    image: "/tsavo-west-zebra.jpg",
    highlights: ["Zebra Migration", "Mzima Springs", "Rhino Sanctuary", "Volcanic Hills"],
    color: "from-slate-700/80 to-gray-900/90",
  },
]

function DestinationCard({ destination }: { destination: typeof destinations[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-[420px] md:h-[500px] shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 2500)}
    >
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Always-visible bottom gradient with name */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
          hovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Kenya</span>
        </div>
        <h3 className="font-serif text-3xl font-bold text-white tracking-wide">{destination.name}</h3>
        <p className="text-white/70 text-sm mt-1 italic">{destination.tagline}</p>
      </div>

      {/* Hover overlay — full content reveal */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${destination.color} flex flex-col justify-end p-7 transition-all duration-500 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-300" />
          <span className="text-amber-300 text-xs font-semibold uppercase tracking-widest">Kenya Safari</span>
        </div>

        <div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-1 tracking-wide">
            {destination.name}
          </h3>
          <p className="text-amber-300 text-sm italic mb-4">{destination.tagline}</p>
          <p className="text-white/90 text-sm leading-relaxed mb-5">{destination.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {destination.highlights.map((h) => (
              <div key={h} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-white/80 text-xs">{h}</span>
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 group/btn backdrop-blur-sm">
            Explore Destination
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0a1a0f] via-[#0f2c1e] to-[#0a1a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">Safari Destinations</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Where the Wild
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Calls You Home
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Hover over each destination to discover what awaits. More wild places coming soon.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>

        {/* Coming soon strip */}
        <div className="mt-8 text-center">
          <span className="inline-block border border-white/10 text-white/40 text-xs uppercase tracking-widest px-6 py-2.5 rounded-full">
            ✦ More destinations being added soon ✦
          </span>
        </div>
      </div>
    </section>
  )
}
