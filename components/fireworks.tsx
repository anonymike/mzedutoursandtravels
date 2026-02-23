"use client"

import { useEffect, useRef } from "react"

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
    }> = []

    const getIntensity = () => {
      const now = new Date()
      const nextNewYear = new Date(2026, 0, 1, 0, 0, 0).getTime()
      const timeUntilMidnight = nextNewYear - now.getTime()
      const minutesLeft = timeUntilMidnight / 1000 / 60

      // Only show fireworks in the last 30 minutes before midnight
      if (minutesLeft < 1) return 0.8 // Last minute - max intensity
      if (minutesLeft < 5) return 0.6 // Last 5 minutes
      if (minutesLeft < 30) return 0.4 // Last 30 minutes
      return 0 // Don't show fireworks otherwise
    }

    const createFireworks = () => {
      const intensity = getIntensity()
      const particleCount = Math.floor(30 * intensity)

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const velocity = 3 + Math.random() * 7

        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          color: ["#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4", "#95E1D3"][Math.floor(Math.random() * 5)],
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter((p) => p.life > 0)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.life -= 0.015

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life
        ctx.fillRect(p.x, p.y, 3, 3)
      })

      ctx.globalAlpha = 1

      if (getIntensity() > 0.05) {
        createFireworks()
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-40" />
}
