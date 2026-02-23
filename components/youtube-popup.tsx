"use client"

import { useState, useEffect } from "react"
import { X, Youtube, Bell, Play, ThumbsUp, Share2, ExternalLink } from "lucide-react"

export function YouTubePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const hasSeenYouTubePopup = localStorage.getItem("yt_popup_seen")
    if (hasSeenYouTubePopup) return

    // Wait for the safari promo popup to finish first
    const checkAndShow = () => {
      const safariShown = sessionStorage.getItem("safari_promo_popup_shown")
      if (safariShown) {
        // Show after a short delay so it doesn't overlap
        const timer = setTimeout(() => {
          setIsOpen(true)
          localStorage.setItem("yt_popup_seen", "true")
        }, 3000)
        return () => clearTimeout(timer)
      }
    }

    // Check immediately in case safari popup already shown
    const cleanup = checkAndShow()
    if (cleanup) return cleanup

    // Otherwise poll briefly until safari popup is done
    const interval = setInterval(() => {
      const safariShown = sessionStorage.getItem("safari_promo_popup_shown")
      if (safariShown) {
        clearInterval(interval)
        setTimeout(() => {
          setIsOpen(true)
          localStorage.setItem("yt_popup_seen", "true")
        }, 3000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`relative w-full max-w-lg pointer-events-auto overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ${
            isClosing
              ? "scale-95 opacity-0 translate-y-4"
              : "scale-100 opacity-100 translate-y-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Top banner - dark with red YouTube accent */}
          <div className="relative bg-[#1a1410] px-6 pt-6 pb-4">
            {/* Subtle red glow at top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #FF0000, transparent 70%)" }}
            />

            {/* "NEW" badge */}
            <div className="relative z-10 flex items-center justify-center mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#FF0000] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-[#FF0000]/20">
                <Bell className="w-3.5 h-3.5 animate-[swing_1s_ease-in-out_infinite]" />
                New Channel
              </span>
            </div>

            {/* YouTube icon + heading */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF0000]/10 border border-[#FF0000]/20 mb-4">
                <Youtube className="w-9 h-9 text-[#FF0000]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                We Are on YouTube!
              </h2>
              <p className="text-white/60 text-sm max-w-xs mx-auto leading-relaxed">
                Watch our safari adventures, wildlife encounters, and travel guides from Tsavo, Kenya
              </p>
            </div>
          </div>

          {/* Video preview */}
          <div className="relative bg-[#111] border-t border-b border-white/5">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {!isPlaying ? (
                <>
                  <img
                    src="https://img.youtube.com/vi/BFPdTMXnwGc/hqdefault.jpg"
                    alt="Voi SGR Transfers and Tsavo Game Drives video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    aria-label="Play YouTube video"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#FF0000]/30 animate-ping" />
                      <div className="relative w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </button>

                  {/* Video title at bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-medium truncate">
                      Voi SGR Transfers & Tsavo Game Drives | Mzedu Tours Kenya
                    </p>
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

          {/* Action buttons section */}
          <div className="bg-[#1a1410] px-6 py-5">
            {/* Action icons row */}
            <div className="flex items-center justify-center gap-6 mb-5">
              <a
                href="https://www.youtube.com/@MzeduToursandTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/30 transition-colors">
                  <ThumbsUp className="w-4.5 h-4.5 text-white/60 group-hover:text-[#FF0000] transition-colors" />
                </div>
                <span className="text-white/50 text-[10px] font-medium group-hover:text-white/80 transition-colors">Like</span>
              </a>
              <a
                href="https://www.youtube.com/@MzeduToursandTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Share2 className="w-4.5 h-4.5 text-white/60 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white/50 text-[10px] font-medium group-hover:text-white/80 transition-colors">Share</span>
              </a>
              <a
                href="https://www.youtube.com/@MzeduToursandTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <ExternalLink className="w-4.5 h-4.5 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/50 text-[10px] font-medium group-hover:text-white/80 transition-colors">Watch</span>
              </a>
            </div>

            {/* Subscribe CTA */}
            <a
              href="https://www.youtube.com/@MzeduToursandTravels?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#FF0000] text-white font-bold text-sm hover:bg-[#cc0000] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/25 active:scale-[0.98]"
            >
              <Bell className="w-4.5 h-4.5 group-hover:animate-[swing_0.5s_ease-in-out]" />
              Subscribe to Our Channel
            </a>

            {/* Maybe later link */}
            <button
              onClick={handleClose}
              className="w-full mt-3 text-center text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer"
            >
              {"I'll check it out later"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
