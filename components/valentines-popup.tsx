"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export function ValentinesPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Show popup for Valentine's season (February 1-28)
    const now = new Date()
    const isValentinesSeason = now.getMonth() === 1

    if (!isValentinesSeason) return

    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("valentines_popup_shown")

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Mark popup as shown for this session
        sessionStorage.setItem("valentines_popup_shown", "true")
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
    // Session storage flag persists - popup won't show again until page refresh or new session
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
          className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden transition-all duration-300 ${
            isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-sm"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Valentine's Image */}
          <div className="relative w-full aspect-square">
            <Image
              src="/valentines-offers.jpg"
              alt="Valentines Discounts on Early Bookings - Voi SGR runs, Tsavo Gamedrive, Private Taxi, Car Hire. Call 0723471093 / 0745428933"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* CTA Button */}
          <div className="p-4 bg-gradient-to-r from-red-600 to-red-500">
            <button
              onClick={handleBookNow}
              className="w-full py-3 bg-white text-red-600 font-bold rounded-full hover:bg-red-50 active:scale-[0.98] transition-all duration-200 text-lg shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
