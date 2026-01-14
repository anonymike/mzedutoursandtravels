"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [visibleImages, setVisibleImages] = useState<{ [key: number]: boolean }>({})
  const [counts, setCounts] = useState({ satisfaction: 0, experience: 0, guides: 0 })
  const [showImages, setShowImages] = useState(false)

  const aboutImages = [
    {
      src: "/safari-man-eaters-camp.jpg",
      alt: "Tourists at Man Eaters camp",
      span: "col-span-1 row-span-2",
      delay: 0,
    },
    {
      src: "/safari-guide-tourists.jpg",
      alt: "Guide with happy tourists",
      span: "col-span-1",
      delay: 100,
    },
    {
      src: "/safari-leopard.jpg",
      alt: "Leopard in grassland",
      span: "col-span-1",
      delay: 200,
    },
    {
      src: "/safari-ostrich.jpg",
      alt: "Ostrich in savanna",
      span: "col-span-1",
      delay: 300,
    },
    {
      src: "/taita-hills-kingfisher.jpg",
      alt: "Blue kingfisher at Taita Hills",
      span: "col-span-1",
      delay: 400,
    },
    {
      src: "/safari-elephants.jpg",
      alt: "Elephant herd at watering hole",
      span: "col-span-1",
      delay: 500,
    },
  ]

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
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

      return () => clearInterval(interval)
    }

    // Start count animation after a short delay
    const timeout = setTimeout(animateCounts, 500)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setShowImages(true)
    aboutImages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => ({ ...prev, [index]: true }))
      }, aboutImages[index].delay)
    })
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
              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-3 shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{counts.satisfaction}%</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Satisfaction Rate</p>
              </div>
              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-3 shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{counts.experience}+</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{counts.guides}+</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Tour Guides</p>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 ${showImages ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="grid grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[180px]">
              {aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={`${image.span} overflow-hidden shadow-lg transform transition-all duration-700 ease-out ${
                    visibleImages[index] ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-8"
                  } hover:shadow-2xl hover:scale-110 hover:-rotate-3`}
                  style={{
                    borderRadius: "50%",
                    aspectRatio: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
