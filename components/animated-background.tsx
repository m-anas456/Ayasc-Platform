"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const dpr = window.devicePixelRatio || 1
    const stars: { x: number; y: number; size: number; speed: number; opacity: number; pulse: number; pulseSpeed: number }[] = []

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * 5 * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight * 5}px`
      ctx!.scale(dpr, dpr)
    }

    function initStars() {
      stars.length = 0
      const count = Math.min(120, Math.floor(window.innerWidth * 0.06))
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 5,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.15 + 0.02,
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    function draw() {
      if (!canvas || !ctx) return
      const w = window.innerWidth
      const h = window.innerHeight * 5
      ctx.clearRect(0, 0, w, h)

      for (const star of stars) {
        star.pulse += star.pulseSpeed
        const currentOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.pulse))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(63, 224, 208, ${currentOpacity})`
        ctx.fill()

        if (star.size > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(63, 224, 208, ${currentOpacity * 0.1})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initStars()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initStars()
    })

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient - deep navy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,#0f2847_0%,#060b18_60%,#060b18_100%)]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Large ambient glow orbs */}
      <motion.div
        className="absolute -top-[10%] left-[15%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(63,224,208,0.06)_0%,transparent_70%)]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(26,122,138,0.05)_0%,transparent_70%)]"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[70%] left-[5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(63,224,208,0.04)_0%,transparent_70%)]"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Star field */}
      <StarField />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#060b18_100%)] opacity-60" />
    </div>
  )
}
