"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
}

export default function TypingAnimation({ text, speed = 50, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timer)
    } else if (displayedText.length === text.length && !isComplete) {
      setIsComplete(true)
    }
  }, [displayedText, text, speed, isComplete])

  return (
    <p className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </p>
  )
}
