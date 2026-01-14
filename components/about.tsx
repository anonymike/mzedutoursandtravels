"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [counts, setCounts] = useState({ satisfaction: 0, experience: 0, guides: 0 })
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const aboutImages = [
    { src: "/safari-man-eaters-camp.jpg", alt: "Man Eaters camp" },
    { src: "/safari-guide-tourists.jpg", alt: "Guide with tourists" },
    { src: "/taita-hills-kingfisher.jpg", alt: "Blue kingfisher" },
    { src: "/safari-leopard.jpg", alt: "Leopard in grassland" },
    { src: "/safari-ostrich.jpg", alt: "Ostrich in savanna" },
    { src: "/safari-elephants.jpg", alt: "Elephant herd" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentStep = 0
          const steps = 60
          const stepDuration = 1800 / steps

          const interval = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounts({
              satisfaction: Math.floor(100 * progress),
              experience: Math.floor(20 * progress),
              guides: Math.floor(50 * progress),
            })

            if (currentStep === steps) {
              clearInterval(interval)
              setCounts({ satisfaction: 100, experience: 20, guides: 50 })
            }
          }, stepDuration)

          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setImagesLoaded(true)
  }, [])

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary">ABOUT US</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience Kenya's Wilderness
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MZEDU TOURS & TRAVEL, TSAVO offers expertly crafted game drives, road trips, car hire, and private
              transport across Kenya. We prioritize safety, comfort, and unforgettable adventure experiences tailored to
              your travel needs.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Tsavo's magnificent landscape, our team brings decades of expertise in crafting
              personalized safari experiences that connect you with Kenya's natural beauty and wildlife.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110">
                    <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                      {counts.satisfaction}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Satisfaction Rate</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110">
                    <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">{counts.experience}+</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110">
                    <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">{counts.guides}+</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Tour Guides</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-md">
              {aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ease-out ${
                    imagesLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  } hover:scale-110 hover:shadow-2xl cursor-pointer`}
                  style={{
                    transitionDelay: imagesLoaded ? `${index * 80}ms` : "0ms",
                  }}
                >
                  <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg bg-gray-200">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
