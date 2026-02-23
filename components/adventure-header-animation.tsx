"use client"

import { useEffect, useRef, useState } from "react"

export default function AdventureHeaderAnimation() {
  const lineRef = useRef(null)
  const textRef = useRef(null)
  const [animationStart, setAnimationStart] = useState(false)

  useEffect(() => {
    setAnimationStart(true)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 mb-6 w-fit overflow-hidden">
      <style>{`
        @keyframes slide-in-line {
          from {
            width: 0;
          }
          to {
            width: 48px;
          }
        }
        @keyframes fade-in-text {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .adventure-line {
          animation: ${animationStart ? "slide-in-line 0.8s ease-out forwards" : "none"};
        }
        .adventure-text {
          animation: ${animationStart ? "fade-in-text 0.8s ease-out 0.3s forwards" : "none"};
          opacity: ${animationStart ? "1" : "0"};
        }
      `}</style>
      <div ref={lineRef} className="adventure-line h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
      <span ref={textRef} className="adventure-text text-sm font-semibold text-primary">
        ADVENTURE AWAITS
      </span>
    </div>
  )
}
