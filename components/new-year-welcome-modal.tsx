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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
    >
      <div className="relative bg-gradient-to-br from-[#0F2C1E] via-[#1a4631] to-[#0F2C1E] rounded-lg sm:rounded-2xl w-full max-w-xs sm:max-w-2xl lg:max-w-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-1.5 hover:bg-white/20 active:bg-white/30 rounded-full transition-all duration-200 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <div className="relative w-full h-40 sm:h-56 lg:h-64 overflow-hidden bg-black/30 flex-shrink-0">
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
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
            {modalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all cursor-pointer ${
                  index === currentImageIndex ? "bg-[#D4AF37] w-5 sm:w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 p-3 sm:p-6 md:p-8 text-center flex flex-col flex-1 overflow-y-auto">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 animate-bounce">🎉 🥳 🎊</div>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
            Happy <span className="text-[#D4AF37]">2026</span>!
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
            Welcome to a brand new year of unforgettable adventures! Start 2026 with an amazing safari experience.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 flex-shrink-0">
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-bold text-[#D4AF37] mb-0.5 sm:mb-1">30%</div>
              <p className="text-white/70 text-xs">Early Bird</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-bold text-[#D4AF37] mb-0.5 sm:mb-1">All Year</div>
              <p className="text-white/70 text-xs">Valid 2026</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-bold text-[#D4AF37] mb-0.5 sm:mb-1">Premium</div>
              <p className="text-white/70 text-xs">Safaris</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 justify-center flex-shrink-0">
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
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#D4AF37] text-[#0F2C1E] font-bold rounded-full hover:bg-[#E5C158] active:scale-95 transition-all duration-200 shadow-lg cursor-pointer text-sm sm:text-base"
            >
              Book Now
            </button>
            <button
              onClick={handleClose}
              className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37]/10 active:scale-95 transition-all duration-200 cursor-pointer text-sm sm:text-base"
            >
              Explore
            </button>
          </div>

          <p className="text-white/60 text-xs mt-3 sm:mt-4 flex-shrink-0">Limited time offer!</p>
        </div>
      </div>
    </div>
  )
}
