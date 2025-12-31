"use client"

import { useEffect, useRef, useState } from "react"

interface CounterAnimationProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export default function CounterAnimation({ end, suffix = "", duration = 2000, className = "" }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const currentValue = Math.floor(progress * (end - startValue) + startValue)
            setCount(currentValue)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [end, duration])

  return (
    <span ref={counterRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}
