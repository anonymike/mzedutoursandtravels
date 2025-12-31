"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isNewYear: false,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const newYear = new Date(currentYear + 1, 0, 1)

      // Check if we've reached New Year
      if (now.getFullYear() > currentYear || (now.getMonth() === 0 && now.getDate() === 1)) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isNewYear: true,
        })
        return
      }

      const difference = newYear.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isNewYear: false,
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  if (timeLeft.isNewYear) {
    return null // Hide when it's New Year
  }

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className="flex items-center justify-center gap-2 md:gap-4 py-4 px-4 bg-gradient-to-r from-[#0F2C1E] to-[#1a4631] rounded-lg shadow-2xl border-2 border-[#D4AF37]/50 backdrop-blur-sm max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] animate-pulse">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Days</div>
        </div>
        <div className="text-[#D4AF37] text-2xl md:text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] animate-pulse">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Hours</div>
        </div>
        <div className="text-[#D4AF37] text-2xl md:text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] animate-pulse">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Minutes</div>
        </div>
        <div className="text-[#D4AF37] text-2xl md:text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] animate-pulse">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  )
}
