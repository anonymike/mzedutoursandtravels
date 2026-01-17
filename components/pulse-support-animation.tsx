"use client"

import { useEffect, useRef, useState } from "react"

interface PulseSupportAnimationProps {
  text: string
  className?: string
}

export default function PulseSupportAnimation({ text, className = "" }: PulseSupportAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div ref={elementRef} className={`relative inline-block ${className}`}>
      <style>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(217, 119, 6, 0);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(217, 119, 6, 0);
            transform: scale(1);
          }
        }
        .pulse-support {
          animation: ${isVisible ? "pulse-glow 2s infinite" : "none"};
        }
      `}</style>
      <div className="pulse-support">{text}</div>
    </div>
  )
}
