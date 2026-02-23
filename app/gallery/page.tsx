"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "wildlife", label: "Wildlife" },
  { id: "vehicles", label: "Our Fleet" },
  { id: "landscapes", label: "Landscapes" },
  { id: "adventures", label: "Adventures" },
]

const galleryItems = [
  // Wildlife
  {
    id: 1,
    type: "image",
    category: "wildlife",
    src: "/african-elephant-in-tsavo-national-park-kenya.jpg",
    alt: "African Elephant in Tsavo",
    title: "Majestic Elephants",
  },
  {
    id: 2,
    type: "image",
    category: "wildlife",
    src: "/lions-resting-under-acacia-tree-kenya-safari.jpg",
    alt: "Lions at Rest",
    title: "Kings of the Savanna",
  },
  {
    id: 3,
    type: "image",
    category: "wildlife",
    src: "/giraffes-walking-at-sunset-african-savanna.jpg",
    alt: "Giraffes at Sunset",
    title: "Grace in Motion",
  },
  {
    id: 4,
    type: "image",
    category: "wildlife",
    src: "/zebras-grazing-in-kenyan-grasslands.jpg",
    alt: "Zebra Herd",
    title: "Stripes of Africa",
  },
  {
    id: 5,
    type: "image",
    category: "wildlife",
    src: "/leopard-on-tree-branch-african-safari.jpg",
    alt: "Leopard in Tree",
    title: "Spotted Beauty",
  },
  {
    id: 6,
    type: "image",
    category: "wildlife",
    src: "/buffalo-herd-in-african-plains-kenya.jpg",
    alt: "Buffalo Herd",
    title: "Wild Giants",
  },
  {
    id: 102,
    type: "image",
    category: "wildlife",
    src: "/taita-hills-kingfisher.jpg",
    alt: "Blue kingfisher at Taita Hills",
    title: "Taita Hills Kingfisher",
  },
  {
    id: 103,
    type: "image",
    category: "wildlife",
    src: "/safari-leopard.jpg",
    alt: "Leopard in grassland",
    title: "Spotted Leopard",
  },
  {
    id: 104,
    type: "image",
    category: "wildlife",
    src: "/safari-ostrich.jpg",
    alt: "Ostrich in savanna",
    title: "Savanna Ostrich",
  },
  {
    id: 105,
    type: "image",
    category: "wildlife",
    src: "/safari-elephants.jpg",
    alt: "Elephant herd at watering hole",
    title: "Amboseli Elephants",
  },
  {
    id: 108,
    type: "image",
    category: "wildlife",
    src: "/tsavo-impala.jpg",
    alt: "Impala antelope with curved horns in Tsavo bush",
    title: "Tsavo Impala",
  },
  {
    id: 109,
    type: "image",
    category: "wildlife",
    src: "/tsavo-elephant.jpg",
    alt: "Red elephant crossing a dirt road in Tsavo National Park",
    title: "Tsavo Red Elephant",
  },
  {
    id: 110,
    type: "image",
    category: "wildlife",
    src: "/tsavo-lion.jpg",
    alt: "Lion walking down a red dirt road in Tsavo",
    title: "Tsavo Lion",
  },
  {
    id: 111,
    type: "image",
    category: "wildlife",
    src: "/tsavo-zebras.jpg",
    alt: "Pair of zebras grazing in the green grasslands of Tsavo",
    title: "Tsavo Zebras",
  },

  // Fleet - Updated with actual vehicle images
  {
    id: 7,
    type: "image",
    category: "vehicles",
    src: "/safari-land-cruiser-on-dusty-kenya-road.jpg",
    alt: "Safari Land Cruiser",
    title: "Safari Land Cruiser",
  },
  {
    id: 8,
    type: "image",
    category: "vehicles",
    src: "/4x4-safari-jeep-with-open-roof-in-african-wilderne.jpg",
    alt: "Safari Jeep",
    title: "4x4 Safari Jeep",
  },
  {
    id: 9,
    type: "image",
    category: "vehicles",
    src: "/luxury-van-at-kenyan-coastal-resort.jpg",
    alt: "Luxury Transport Van",
    title: "Luxury Transport Van",
  },
  {
    id: 10,
    type: "image",
    category: "vehicles",
    src: "/safari-game-drive-vehicle-with-tourists.jpg",
    alt: "Game Drive Vehicle",
    title: "Game Drive Vehicle",
  },
  {
    id: 11,
    type: "image",
    category: "vehicles",
    src: "/tourists-in-safari-vehicle-watching-wildlife-kenya.jpg",
    alt: "Safari Tour Vehicle",
    title: "Safari Tour Vehicle",
  },

  // Landscapes
  {
    id: 12,
    type: "image",
    category: "landscapes",
    src: "/mount-kilimanjaro-view-from-amboseli-kenya.jpg",
    alt: "Mt. Kilimanjaro View",
    title: "Kilimanjaro Majesty",
  },
  {
    id: 13,
    type: "image",
    category: "landscapes",
    src: "/african-savanna-golden-hour-acacia-trees.jpg",
    alt: "Golden Savanna",
    title: "Golden Hour",
  },
  {
    id: 14,
    type: "image",
    category: "landscapes",
    src: "/tsavo-red-earth-landscape-kenya.jpg",
    alt: "Tsavo Red Earth",
    title: "Red Earth of Tsavo",
  },
  {
    id: 15,
    type: "image",
    category: "landscapes",
    src: "/mombasa-beach-turquoise-water-palm-trees.jpg",
    alt: "Coastal Paradise",
    title: "Coastal Beauty",
  },
  {
    id: 16,
    type: "image",
    category: "landscapes",
    src: "/baobab-trees-at-sunrise-african-landscape.jpg",
    alt: "Ancient Baobabs",
    title: "Ancient Giants",
  },
  {
    id: 17,
    type: "image",
    category: "landscapes",
    src: "/african-savanna-landscape-with-acacia-trees.jpg",
    alt: "Savanna Landscape",
    title: "African Savanna",
  },
  {
    id: 106,
    type: "image",
    category: "landscapes",
    src: "/man-eaters-location.jpg",
    alt: "Man Eaters location",
    title: "Man Eaters Location",
  },
  {
    id: 107,
    type: "image",
    category: "landscapes",
    src: "/tsavo-west-park.jpg",
    alt: "Tsavo West National Park",
    title: "Tsavo West Park",
  },

  // Adventures - Replaced video placeholders with actual images
  {
    id: 18,
    type: "image",
    category: "adventures",
    src: "/tsavo-national-park-with-elephants-and-wildlife.jpg",
    alt: "Tsavo Adventure",
    title: "Tsavo Wildlife Experience",
  },
  {
    id: 19,
    type: "image",
    category: "adventures",
    src: "/mount-kilimanjaro-with-elephants-in-amboseli.jpg",
    alt: "Amboseli Adventure",
    title: "Amboseli Safari",
  },
  {
    id: 20,
    type: "image",
    category: "adventures",
    src: "/nairobi-national-park-wildlife-and-landscapes.jpg",
    alt: "Nairobi Park",
    title: "Nairobi National Park",
  },
  {
    id: 21,
    type: "image",
    category: "adventures",
    src: "/wildlife-animals-zebras-and-antelopes-in-tsavo.jpg",
    alt: "Wildlife Encounter",
    title: "Wildlife Encounter",
  },
  {
    id: 22,
    type: "image",
    category: "adventures",
    src: "/african-wildlife-safari-with-zebras-giraffes-and-l.jpg",
    alt: "Safari Adventure",
    title: "Safari Adventure",
  },
  {
    id: 100,
    type: "image",
    category: "adventures",
    src: "/safari-man-eaters-camp.jpg",
    alt: "Tourists at Man Eaters camp",
    title: "Man Eaters Camp Experience",
  },
  {
    id: 101,
    type: "image",
    category: "adventures",
    src: "/safari-guide-tourists.jpg",
    alt: "Guide with happy tourists",
    title: "Memorable Safari Moments",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number>(0)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Camera className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Explore Our Adventures</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Journey through the wild beauty of Kenya captured in stunning moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted cursor-pointer animate-in fade-in zoom-in-95 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable safari adventure through Kenya's most spectacular landscapes
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book Your Adventure Now
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full mx-auto px-20">
            <div className="relative w-full h-full">
              <Image
                src={filteredItems[selectedImage].src || "/placeholder.svg"}
                alt={filteredItems[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-20 right-20 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
              <p className="text-white/80 capitalize">{filteredItems[selectedImage].category}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">
              {selectedImage + 1} / {filteredItems.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
