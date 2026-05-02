"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewYearPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isNewYear, setIsNewYear] = useState(false)

  useEffect(() => {
    // Check if it's New Year (January 1st)
    const checkNewYear = () => {
      const now = new Date()
      return now.getMonth() === 0 && now.getDate() === 1
    }

    setIsNewYear(checkNewYear())

    if (checkNewYear()) {
      // Check if user has already seen the popup today
      const lastShown = localStorage.getItem("new-year-popup-shown")
      const today = new Date().toDateString()

      if (lastShown !== today) {
        // Show popup after a short delay
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1500)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
    // Store that user has seen it today
    localStorage.setItem("new-year-popup-shown", new Date().toDateString())
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

  if (!isOpen || !isNewYear) return null

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
          className={`relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl shadow-2xl max-w-2xl w-full pointer-events-auto overflow-hidden transition-all duration-300 ${
            isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                Happy New Year 2026!
              </span>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
              Start Your Year with an{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                Epic Safari Adventure
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-white/90 text-lg md:text-xl text-center mb-8 max-w-xl mx-auto leading-relaxed">
              Make 2026 unforgettable with the ultimate African safari experience
            </p>

            {/* Special offer badge */}
            <div className="bg-gradient-to-r from-yellow-400 to-blue-400 rounded-2xl p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Zap className="w-8 h-8 text-gray-900" />
                <span className="text-4xl md:text-5xl font-bold text-gray-900">New Year Special</span>
              </div>
              <p className="text-gray-900 text-center text-sm md:text-base font-medium">
                Early Bird Discounts & Exclusive Packages for January Bookings
              </p>
            </div>

            {/* Features list */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Premium wildlife experiences",
                "Guided adventure tours",
                "Luxurious safari camps",
                "Expert naturalist guides",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Limited time notice */}
            <p className="text-yellow-400 text-center text-sm mb-6 font-medium">
              Early bird specials available for bookings made in January
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookNow}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-gray-900 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Adventure
              </Button>
              <Button
                onClick={handleClose}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Explore Options
              </Button>
            </div>

            {/* Small print */}
            <p className="text-white/60 text-xs text-center mt-6">
              Cheers to adventures in 2026! Special rates available for group bookings.
            </p>
          </div>

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/30 pointer-events-none animate-pulse" />
        </div>
      </div>
    </>
  )
}
