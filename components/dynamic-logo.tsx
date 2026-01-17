"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function DynamicLogo() {
  const [isNewYear, setIsNewYear] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Check if it's past midnight (New Year)
    const checkTime = () => {
      const now = new Date()
      // If we're in 2026 or later, show New Year elements
      setIsNewYear(now.getFullYear() >= 2026)
    }

    checkTime()
    const interval = setInterval(checkTime, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Link href="/" className="flex items-center gap-1 group relative">
      <div className="relative">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          {isNewYear ? (
            // New Year 2026 celebration element - fireworks and sparkles
            <div className="flex items-center gap-1">
              <div className="animate-[ping_1s_ease-in-out_infinite] text-2xl">✨</div>
              <span className="text-xl font-bold text-primary animate-bounce">2026</span>
              <div className="animate-[ping_1s_ease-in-out_infinite_0.5s] text-2xl">✨</div>
            </div>
          ) : (
            // Christmas bells
            <Image
              src="/xmasbells.png"
              alt="Christmas Bells"
              width={24}
              height={24}
              className="w-6 h-6 object-contain drop-shadow-lg animate-[swing_2s_ease-in-out_infinite]"
            />
          )}
        </div>

        <Image
          src="/mzedu-logo.png"
          alt="MZEDU Tours and Travels Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>

      <span
        className={`font-serif font-bold text-lg tracking-tight transition-colors duration-300 ${
          hasScrolled ? "text-white" : "text-primary"
        }`}
      >
        MZEDU TOURS
      </span>
    </Link>
  )
}
