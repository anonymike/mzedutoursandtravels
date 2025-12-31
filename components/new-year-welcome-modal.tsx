"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function NewYearWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAfterMidnight, setIsAfterMidnight] = useState(false)

  useEffect(() => {
    const checkIfAfterMidnight = () => {
      const now = new Date()
      // Check if we're on January 1st, 2026 or later
      const isNewYearTime =
        now.getFullYear() >= 2026 || (now.getFullYear() === 2026 && now.getMonth() === 0 && now.getDate() >= 1)

      if (isNewYearTime) {
        // Check if user hasn't seen the modal in this session
        const hasSeenModal = sessionStorage.getItem("newYearModalSeen")
        if (!hasSeenModal) {
          setIsAfterMidnight(true)
          setIsOpen(true)
          sessionStorage.setItem("newYearModalSeen", "true")
        }
      }
    }

    checkIfAfterMidnight()
    const timer = setInterval(checkIfAfterMidnight, 60000) // Check every minute
    return () => clearInterval(timer)
  }, [])

  if (!isOpen || !isAfterMidnight) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-[#0F2C1E] via-[#1a4631] to-[#0F2C1E] rounded-2xl max-w-2xl w-full shadow-2xl border-2 border-[#D4AF37]/30 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 text-center">
          {/* Celebration emojis */}
          <div className="text-5xl mb-6 animate-bounce">🎉 🥳 🎊</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Happy <span className="text-[#D4AF37]">2026</span>!
          </h1>

          <p className="text-lg text-white/80 mb-8">
            Welcome to a brand new year of unforgettable adventures! Start 2026 with an amazing safari experience across
            Kenya's most beautiful destinations.
          </p>

          {/* Special offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-4">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">30%</div>
              <p className="text-white/70 text-sm">Early Bird Discount</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-4">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">All Year</div>
              <p className="text-white/70 text-sm">Valid through 2026</p>
            </div>
            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-4">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">Premium</div>
              <p className="text-white/70 text-sm">Wildlife Experiences</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsOpen(false)
                // Scroll to booking section
                const bookingElement = document.getElementById("booking")
                if (bookingElement) {
                  bookingElement.scrollIntoView({ behavior: "smooth" })
                } else {
                  // If on different page, navigate to home with hash
                  window.location.href = "/#booking"
                }
              }}
              className="px-8 py-3 bg-[#D4AF37] text-[#0F2C1E] font-bold rounded-full hover:bg-[#E5C158] transition-colors shadow-lg"
            >
              Book Your Adventure
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37]/10 transition-colors"
            >
              Explore Packages
            </button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Limited time offer! Book now and save big on your 2026 safari adventure.
          </p>
        </div>
      </div>
    </div>
  )
}
