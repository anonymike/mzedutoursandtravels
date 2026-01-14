"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function NewYearWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAfterMidnight, setIsAfterMidnight] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const modalImages = [
    {
      src: "/safari-man-eaters-camp.jpg",
      alt: "Tourists at Man Eaters camp",
    },
    {
      src: "/safari-guide-tourists.jpg",
      alt: "Guide with happy tourists",
    },
    {
      src: "/taita-hills-kingfisher.jpg",
      alt: "Blue kingfisher at Taita Hills",
    },
    {
      src: "/safari-leopard.jpg",
      alt: "Leopard in grassland",
    },
    {
      src: "/safari-ostrich.jpg",
      alt: "Ostrich in savanna",
    },
    {
      src: "/safari-elephants.jpg",
      alt: "Elephant herd at watering hole",
    },
  ]

  useEffect(() => {
    const checkIfAfterMidnight = () => {
      const now = new Date()
      const isNewYearTime =
        now.getFullYear() >= 2026 || (now.getFullYear() === 2026 && now.getMonth() === 0 && now.getDate() >= 1)

      if (isNewYearTime) {
        const hasSeenModal = sessionStorage.getItem("newYearModalSeen")
        if (!hasSeenModal) {
          setIsAfterMidnight(true)
          setIsOpen(true)
          sessionStorage.setItem("newYearModalSeen", "true")
        }
      }
    }

    checkIfAfterMidnight()
    const timer = setInterval(checkIfAfterMidnight, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const autoRotate = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
    }, 5000)
    return () => clearInterval(autoRotate)
  }, [isOpen, modalImages.length])

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setIsOpen(false)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length)
  }

  if (!isOpen || !isAfterMidnight) return null

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
    >
      <div className="relative bg-gradient-to-br from-[#0F2C1E] via-[#1a4631] to-[#0F2C1E] rounded-xl sm:rounded-2xl w-full max-w-sm sm:max-w-3xl shadow-2xl border-2 border-[#D4AF37]/30 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 active:bg-white/30 rounded-full transition-all duration-200 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="relative w-full aspect-video sm:aspect-auto sm:h-64 overflow-hidden bg-black/30">
          {modalImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentImageIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {modalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentImageIndex ? "bg-[#D4AF37] w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-8 md:p-12 text-center">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 animate-bounce">🎉 🥳 🎊</div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Happy <span className="text-[#D4AF37]">2026</span>!
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
            Welcome to a brand new year of unforgettable adventures! Start 2026 with an amazing safari experience across
            Kenya's most beautiful destinations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1 sm:mb-2">30%</div>
              <p className="text-white/70 text-xs sm:text-sm">Early Bird Discount</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1 sm:mb-2">All Year</div>
              <p className="text-white/70 text-xs sm:text-sm">Valid through 2026</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1 sm:mb-2">Premium</div>
              <p className="text-white/70 text-xs sm:text-sm">Wildlife Experiences</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <button
              onClick={(e) => {
                handleClose(e)
                const bookingElement = document.getElementById("booking")
                if (bookingElement) {
                  bookingElement.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#booking"
                }
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D4AF37] text-[#0F2C1E] font-bold rounded-full hover:bg-[#E5C158] active:scale-95 transition-all duration-200 shadow-lg cursor-pointer"
            >
              Book Your Adventure
            </button>
            <button
              onClick={handleClose}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37]/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Explore Packages
            </button>
          </div>

          <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6">
            Limited time offer! Book now and save big on your 2026 safari adventure.
          </p>
        </div>
      </div>
    </div>
  )
}
