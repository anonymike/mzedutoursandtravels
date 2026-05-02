"use client"
import { ChevronRight } from "lucide-react"
import { useLocation } from "wouter"
import { useState, useEffect } from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TypingAnimation from "./typing-animation"
import CounterAnimation from "./counter-animation"
import PulseSupportAnimation from "./pulse-support-animation"
import AdventureHeaderAnimation from "./adventure-header-animation"

const heroImages = [
  {
    src: "/hero1.jpeg",
    alt: "Gerenuk antelope standing on hind legs browsing acacia in Tsavo",
  },
  {
    src: "/hero2.jpeg",
    alt: "MZEDU Tours 4WD vehicle at Nairobi National Park gate with guests",
  },
  {
    src: "/hero3.jpeg",
    alt: "MZEDU Tours team with guests at national park entrance",
  },
  {
    src: "/hero4.jpeg",
    alt: "Waterbuck resting in the bush at Tsavo National Park",
  },
]

export default function Hero() {
  const [, navigate] = useLocation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleExplorePackages = () => {
    navigate("/#packages")
  }

  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const event = new Event("openBookingModal", { bubbles: true })
        window.dispatchEvent(event)
      }, 800)
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content - overlaid on images */}
      <div className="relative z-30 px-6 md:px-12 py-20 md:py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Centered Content */}
          <div className="flex flex-col justify-center max-w-3xl">
            <AdventureHeaderAnimation />

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              MZEDU TOURS AND TRAVELS
            </h1>

            <TypingAnimation
              text="Your Next Adventure Begins Here. Explore Kenya's magnificent Tsavo wilderness with expertly guided game drives, scenic road trips, and premium private transport."
              speed={30}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl drop-shadow-md"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExplorePackages}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2 group shadow-lg"
              >
                Explore Packages
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button
                onClick={handleBookNow}
                className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition shadow-lg"
              >
                Book Now
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  <CounterAnimation end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-white/80">Happy Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  <CounterAnimation end={15} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-white/80">Tour Routes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">
                  <PulseSupportAnimation text="24/7" />
                </div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
