"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Fleet from "@/components/fleet"
import Packages from "@/components/packages"
import Booking from "@/components/booking"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const handleBookingScroll = () => {
      const searchParams = new URLSearchParams(window.location.search)
      if (searchParams.get("scroll") === "booking" || window.location.hash === "booking") {
        setTimeout(() => {
          const bookingSection = document.getElementById("booking")
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 500)
      }
    }

    handleBookingScroll()
  }, [])

  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Packages />
        <Booking />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
