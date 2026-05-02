"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image: "/images/promo-lion.jpg",
    alt: "Lioness in Tsavo National Park on red soil with hills in the background",
    headline: "Experience the Wild",
    subtext: "Tsavo Safari Game Drives",
  },
  {
    image: "/images/promo-gamedrive.jpg",
    alt: "MZEDU Game Drive Experience - Tsavo West Ziwani Voyager with free SGR pickups",
    headline: "Game Drive Adventures",
    subtext: "Tsavo West | Ziwani Voyager",
  },
  {
    image: "/images/promo-sunday.jpg",
    alt: "MZEDU Tours and Travels services - Church Drop Offs, Private Taxi, SGR Runs, Car Hire",
    headline: "Your Travel Partner",
    subtext: "Private Taxi | SGR Runs | Car Hire",
  },
]

export function SafariPromoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("safari_promo_popup_shown")

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("safari_promo_popup_shown", "true")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (!isOpen) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isOpen, nextSlide])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  const handleBookNow = () => {
    handleClose()
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#booking"
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`relative bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden transition-all duration-300 ${
            isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Image Slideshow */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: currentSlide === index ? 1 : 0 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />

            {/* Overlaid Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              {/* Badge */}
              <div className="mb-3">
                <span className="inline-block bg-[#c85a2e] text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  MZEDU Tours & Travels
                </span>
              </div>

              {/* Headline with slide transition */}
              <div className="relative min-h-[70px] mb-2">
                {slides.map((slide, index) => (
                  <h2
                    key={index}
                    className="absolute bottom-0 left-0 text-white font-bold text-2xl md:text-3xl leading-tight transition-all duration-500"
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transform: currentSlide === index ? "translateY(0)" : "translateY(12px)",
                    }}
                  >
                    {slide.headline}
                  </h2>
                ))}
              </div>

              {/* Subtext with slide transition */}
              <div className="relative min-h-[24px] mb-4">
                {slides.map((slide, index) => (
                  <p
                    key={index}
                    className="absolute bottom-0 left-0 text-white/80 text-sm md:text-base transition-all duration-500 delay-100"
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transform: currentSlide === index ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    {slide.subtext}
                  </p>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 mb-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-6 bg-[#c85a2e]"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 z-30">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 z-30">
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-4 bg-gradient-to-r from-[#c85a2e] to-[#a0471f] flex gap-3">
            <button
              onClick={handleBookNow}
              className="flex-1 py-3 bg-white text-[#c85a2e] font-bold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200 text-base shadow-lg"
            >
              Book Now
            </button>
            <a
              href="tel:+254723471093"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 active:scale-[0.98] transition-all duration-200 text-sm border border-white/20"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
