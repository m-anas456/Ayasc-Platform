"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outermost ring - HUD style */}
      <motion.div
        className="absolute h-[340px] w-[340px] rounded-full border border-primary/[0.08] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Tick marks around the ring */}
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-primary/20"
            style={{ transform: `rotate(${i * 10}deg) translateY(0px)`, transformOrigin: `50% ${260}px` }}
          />
        ))}
      </motion.div>

      {/* Second ring */}
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full border border-primary/[0.12] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px]"
        style={{ animation: "pulse-ring 4s ease-in-out infinite" }}
      />

      {/* Third ring - dashed */}
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-primary/[0.15] md:h-[280px] md:w-[280px] lg:h-[330px] lg:w-[330px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute h-[160px] w-[160px] rounded-full border border-primary/20 md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px]"
        style={{ animation: "pulse-ring 3s ease-in-out infinite 1s" }}
      />

      {/* The core orb */}
      <div className="relative h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:h-[160px] lg:w-[160px]">
        {/* Outer glow */}
        <div className="absolute inset-[-30%] rounded-full bg-[radial-gradient(circle,rgba(63,224,208,0.15)_0%,transparent_70%)]" />

        {/* Mid glow */}
        <motion.div
          className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(63,224,208,0.25)_0%,rgba(26,122,138,0.1)_50%,transparent_70%)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core bright sphere */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.9)_0%,rgba(63,224,208,0.8)_30%,rgba(26,122,138,0.6)_60%,rgba(10,18,36,0.4)_100%)]" />

        {/* Inner highlight */}
        <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.6)_0%,rgba(63,224,208,0.3)_50%,transparent_70%)] blur-sm" />

        {/* Light rays emanating from center */}
        <motion.div
          className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(63,224,208,0.08)_10deg,transparent_20deg,transparent_90deg,rgba(63,224,208,0.06)_100deg,transparent_110deg,transparent_180deg,rgba(63,224,208,0.08)_190deg,transparent_200deg,transparent_270deg,rgba(63,224,208,0.06)_280deg,transparent_290deg)] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating data nodes */}
      {[
        { angle: 30, distance: 170, size: 6, delay: 0 },
        { angle: 110, distance: 190, size: 4, delay: 1 },
        { angle: 200, distance: 160, size: 5, delay: 2 },
        { angle: 310, distance: 185, size: 4, delay: 0.5 },
        { angle: 70, distance: 140, size: 3, delay: 1.5 },
        { angle: 250, distance: 150, size: 3, delay: 2.5 },
      ].map((node, i) => {
        const x = Math.cos((node.angle * Math.PI) / 180) * node.distance
        const y = Math.sin((node.angle * Math.PI) / 180) * node.distance
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: node.size,
              height: node.size,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Connecting lines from nodes to center */}
      <svg className="absolute h-full w-full" viewBox="-260 -260 520 520" style={{ overflow: "visible" }}>
        {[30, 110, 200, 310].map((angle, i) => {
          const dist = [170, 190, 160, 185][i]
          const x = Math.cos((angle * Math.PI) / 180) * dist
          const y = Math.sin((angle * Math.PI) / 180) * dist
          return (
            <motion.line
              key={angle}
              x1={0} y1={0} x2={x} y2={y}
              stroke="rgba(63,224,208,0.1)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 lg:px-8"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left column: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Digital Transformation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl"
          >
            <span className="text-muted-foreground">Empowering Business</span>
            <br />
            <span className="text-muted-foreground">Through</span>{" "}
            <span className="text-primary text-glow-strong">Advanced</span>
            <br />
            <span className="text-primary text-glow-strong">Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            AYASC helps businesses grow by outsourcing routine work, automating
            operations, and optimizing systems with AI and custom software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("network")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2.5 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,224,208,0.3)]"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
            >
              Let{"'"}s Talk
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-14 flex items-center gap-8 md:gap-12"
          >
            {[
              { value: "200+", label: "Businesses" },
              { value: "85%", label: "Efficiency" },
              { value: "3x", label: "ROI Growth" },
            ].map((stat, i) => (
              <div key={stat.label} className={i !== 0 ? "border-l border-border/30 pl-8 md:pl-12" : ""}>
                <div className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary md:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center py-8 lg:py-0"
        >
          <HeroOrb />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground/40" />
        </div>
      </motion.div>
    </section>
  )
}
