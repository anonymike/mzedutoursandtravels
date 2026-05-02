"use client"

import { useState, useEffect } from "react"
import { X, MapPin, Compass } from "lucide-react"

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const isDismissed = sessionStorage.getItem("discount-banner-dismissed")
    if (isDismissed) {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("discount-banner-dismissed", "true")
  }

  if (!hasMounted || !isVisible) return null

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] w-full px-4">
      <div className="flex items-center justify-between py-3 px-4 md:px-6 bg-gradient-to-r from-[#2a1810] via-[#3d2415] to-[#2a1810] rounded-lg shadow-2xl border border-[#c85a2e]/40 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 md:gap-5">
          <Compass className="w-6 h-6 md:w-7 md:h-7 text-[#c85a2e] shrink-0 animate-pulse" />
          <div className="flex flex-col min-w-0">
            <span className="text-white font-bold text-sm md:text-base truncate">
              Safari Season Deals
            </span>
            <span className="text-white/80 text-xs md:text-sm truncate">
              Game Drives, SGR Runs, Car Hire & Private Taxi
            </span>
          </div>
          <a
            href="#booking"
            className="hidden md:inline-flex shrink-0 items-center gap-1 bg-[#c85a2e] text-white font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-[#b04e26] transition-colors"
          >
            Book Now
            <MapPin className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={handleClose}
          className="text-white/70 hover:text-white transition-colors shrink-0 ml-2"
          aria-label="Close discount banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
