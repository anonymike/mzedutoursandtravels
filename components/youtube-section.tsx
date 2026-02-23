"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Youtube, Bell, ChevronRight, MapPin, Shield, Star } from "lucide-react"

export default function YouTubeSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="youtube"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a1410 0%, #2b1d14 40%, #1a1410 100%)" }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div
        className="absolute top-20 -right-20 w-80 h-80 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #c85a2e, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 -left-20 w-64 h-64 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #d4a574, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary tracking-wide">SEE US IN ACTION</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Watch Our Safari Adventures
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Experience our Voi SGR transfers and Tsavo game drives firsthand -- subscribe to never miss an adventure
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* Video Player - Takes 3 columns */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              {/* Aspect ratio container for vertical video */}
              <div className="relative w-full" style={{ paddingBottom: "min(100%, 583px)", maxHeight: "583px" }}>
                {!isPlaying ? (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/BFPdTMXnwGc/maxresdefault.jpg`}
                      alt="Voi SGR Transfers and Tsavo Game Drives - MZEDU Tours Kenya"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 group cursor-pointer"
                      aria-label="Play video: Voi SGR Transfers and Tsavo Game Drives"
                    >
                      <div className="relative">
                        {/* Pulse ring */}
                        <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/30 animate-ping" />
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                        </div>
                      </div>
                      <span className="text-white font-semibold text-sm md:text-base bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
                        Watch the Experience
                      </span>
                    </button>

                    {/* Video title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white/80 text-xs font-medium">Tsavo, Kenya</span>
                      </div>
                      <h3 className="text-white font-bold text-base md:text-lg leading-snug">
                        Voi SGR Transfers & Tsavo Game Drives
                      </h3>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/BFPdTMXnwGc?autoplay=1&rel=0"
                    title="Voi SGR Transfers & Tsavo Game Drives | Mzedu Tours Kenya"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right side CTA panel - Takes 2 columns */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Subscribe CTA Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Follow Our Journey</h3>
                  <p className="text-white/50 text-sm">MZEDU Tours & Travels</p>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Subscribe to our YouTube channel for stunning safari footage, travel tips, wildlife
                encounters, and behind-the-scenes looks at our tours across Kenya.
              </p>

              {/* Subscribe Button */}
              <a
                href="https://www.youtube.com/@MzeduToursandTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#FF0000] text-white font-semibold text-sm hover:bg-[#cc0000] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/20"
              >
                <Bell className="w-4 h-4 group-hover:animate-[swing_0.5s_ease-in-out]" />
                Subscribe on YouTube
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-white font-bold text-lg">100%</p>
                <p className="text-white/50 text-xs">Safe Tours</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <Star className="w-5 h-5 text-primary mx-auto mb-2 fill-primary" />
                <p className="text-white font-bold text-lg">4.8/5</p>
                <p className="text-white/50 text-xs">Client Rating</p>
              </div>
            </div>

            {/* Book CTA */}
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <MapPin className="w-4 h-4" />
              Book Your Safari Today
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
