"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChristmasPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const now = new Date()
    const isChristmasSeason = now.getMonth() === 11 && now.getDate() <= 31

    if (!isChristmasSeason) {
      return // Don't show popup if not in December
    }

    // Check if user has already seen the popup today
    const lastShown = localStorage.getItem("christmas-popup-shown")
    const today = new Date().toDateString()

    if (lastShown !== today) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
    // Store that user has seen it today
    localStorage.setItem("christmas-popup-shown", new Date().toDateString())
  }

  const handleBookNow = () => {
    handleClose()
    // Scroll to booking section
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate to homepage if on different page
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
          className={`relative bg-gradient-to-br from-[#0F2C1E] via-[#1a4631] to-[#0F2C1E] rounded-3xl shadow-2xl max-w-2xl w-full pointer-events-auto overflow-hidden transition-all duration-300 ${
            isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C87941]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Content */}
          <div className="relative p-8 md:p-12">
            {/* Header with animated sparkles */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Limited Time Offer</span>
              <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
              Season's Greetings from{" "}
              <span className="bg-gradient-to-r from-[#C87941] to-[#D4AF37] bg-clip-text text-transparent">
                Mzedu Tours
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-white/90 text-lg md:text-xl text-center mb-8 max-w-xl mx-auto leading-relaxed">
              Celebrate the magic of the holidays with an unforgettable African safari adventure
            </p>

            {/* Discount badge */}
            <div className="bg-gradient-to-r from-[#C87941] to-[#D4AF37] rounded-2xl p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Gift className="w-8 h-8 text-white" />
                <span className="text-4xl md:text-5xl font-bold text-white">25% OFF</span>
              </div>
              <p className="text-white text-center text-sm md:text-base font-medium">
                Christmas Special Discount on All Safari Packages
              </p>
            </div>

            {/* Features list */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Exclusive wildlife game drives",
                "Luxury accommodation options",
                "Expert local guides",
                "Flexible booking options",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Expiry notice */}
            <p className="text-[#D4AF37] text-center text-sm mb-6 font-medium">Offer valid until December 31st, 2025</p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookNow}
                size="lg"
                className="bg-gradient-to-r from-[#C87941] to-[#D4AF37] hover:from-[#b56a35] hover:to-[#c29d2f] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Safari Now
              </Button>
              <Button
                onClick={handleClose}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Maybe Later
              </Button>
            </div>

            {/* Small print */}
            <p className="text-white/60 text-xs text-center mt-6">
              Terms and conditions apply. Contact us for more details.
            </p>
          </div>

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AF37]/30 pointer-events-none animate-pulse" />
        </div>
      </div>
    </>
  )
}
