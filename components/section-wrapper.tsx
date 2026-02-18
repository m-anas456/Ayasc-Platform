"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isInView } = useScrollAnimation(0.08)

  return (
    <section id={id} ref={ref} className={cn("relative py-24 px-5 md:py-32 lg:py-40 lg:px-8", className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.05] px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary backdrop-blur-sm">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </span>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
      {children}
    </h2>
  )
}

export function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
      {children}
    </p>
  )
}
