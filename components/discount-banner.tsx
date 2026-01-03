"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if banner was dismissed in this session
    const isDismissed = sessionStorage.getItem("discount-banner-dismissed")
    setIsVisible(!isDismissed)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("discount-banner-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className="flex items-center justify-between py-3 px-6 bg-gradient-to-r from-[#0F2C1E] to-[#1a4631] rounded-lg shadow-2xl border-2 border-[#D4AF37] backdrop-blur-sm max-w-2xl mx-auto">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="text-[#D4AF37] text-2xl md:text-3xl font-bold">5%</div>
          <div className="h-12 w-1 bg-[#D4AF37]/30"></div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm md:text-base">Special Discount</span>
            <span className="text-white/70 text-xs md:text-sm">On every booking with us</span>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Close discount banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
