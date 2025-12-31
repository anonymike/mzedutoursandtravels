"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
    console.log("[v0] Cookie consent accepted")
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
    console.log("[v0] Cookie consent declined")
  }

  const handleClose = () => {
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 pointer-events-auto" onClick={handleClose} />

      {/* Cookie Consent Card */}
      <div className="relative w-full max-w-2xl m-4 mb-6 bg-white rounded-xl shadow-2xl border border-gray-200 pointer-events-auto animate-in slide-in-from-bottom duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close cookie consent"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header with Icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">We Value Your Privacy</h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/cookie-policy"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
              size="lg"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-gray-300 hover:bg-gray-50 font-semibold bg-transparent"
              size="lg"
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
