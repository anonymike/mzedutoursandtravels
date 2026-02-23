"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import DynamicLogo from "./dynamic-logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setHasScrolled(currentScrollY > 50)

      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#booking") {
        setTimeout(() => {
          const bookingSection = document.getElementById("booking")
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }

    window.addEventListener("hashchange", handleHashChange)

    // Also handle if the page loads with the hash already in the URL
    if (window.location.hash === "#booking" && pathname === "/") {
      setTimeout(() => {
        const bookingSection = document.getElementById("booking")
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 500)
    }

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [pathname])

  const handleBookUS = () => {
    // If we're on the homepage, scroll to booking section
    if (pathname === "/") {
      const bookingSection = document.getElementById("booking")
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // If we're on another page, navigate to homepage with booking hash
      router.push("/?scroll=booking")
      // Also set the hash for browsers that support it
      window.location.hash = "booking"
    }
  }

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#fleet", label: "Fleet" },
    { href: "/#packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <DynamicLogo />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 font-medium text-sm hover:text-primary ${
                  hasScrolled ? "text-white/90" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleBookUS}
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              BOOK US
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                hasScrolled ? "text-white hover:bg-white/10" : "hover:bg-muted"
              }`}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1a1a1a]/98 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-white/10 text-white/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleBookUS()
                setIsOpen(false)
              }}
              className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              BOOK US
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
