"use client"

import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/tsavo-elephant.jpg",
      alt: "Red elephant crossing a dirt road in Tsavo National Park",
      title: "Tsavo Red Elephant",
    },
    {
      src: "/tsavo-lion.jpg",
      alt: "Lion walking down a red dirt road in Tsavo",
      title: "Tsavo Lion",
    },
    {
      src: "/tsavo-zebras.jpg",
      alt: "Pair of zebras grazing in the green grasslands of Tsavo",
      title: "Tsavo Zebras",
    },
    {
      src: "/tsavo-impala.jpg",
      alt: "Impala antelope with curved horns in Tsavo bush",
      title: "Tsavo Impala",
    },
    {
      src: "/safari-man-eaters-camp.jpg",
      alt: "Tourists at Man Eaters camp",
      title: "Safari Camp Experience",
    },
    {
      src: "/safari-guide-tourists.jpg",
      alt: "Guide with happy tourists",
      title: "Memorable Moments",
    },
    {
      src: "/safari-elephants.jpg",
      alt: "Elephant herd at watering hole",
      title: "Amboseli Elephants",
    },
    {
      src: "/tsavo-west-park.jpg",
      alt: "Tsavo West National Park",
      title: "Tsavo West Park",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-[#F5E6D3] to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2C1E] mb-3 sm:mb-4">
            Safari <span className="text-[#B8860B]">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the breathtaking wildlife and stunning landscapes of Kenya's most iconic destinations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-200 aspect-square"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-4">
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-[#D4AF37] transition-colors text-3xl font-bold"
              >
                ✕
              </button>
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-sm sm:text-base">{galleryImages[selectedImage].title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
