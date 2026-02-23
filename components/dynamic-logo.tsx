"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function DynamicLogo() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Link href="/" className="flex items-center gap-1 group relative">
      <Image
        src="/mzedu-logo.png"
        alt="MZEDU Tours and Travels Logo"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />

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
