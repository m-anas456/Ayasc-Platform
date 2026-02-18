"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import { TrendingDown, TrendingUp, Zap, ArrowRight } from "lucide-react"

const metrics = [
  {
    icon: TrendingDown,
    value: "60%",
    label: "Cost Reduction",
    description:
      "Slash operational costs through intelligent automation of repetitive tasks.",
    barWidth: "60%",
  },
  {
    icon: TrendingUp,
    value: "3.5x",
    label: "Efficiency Increase",
    description:
      "Multiply output without multiplying headcount using AI-powered workflows.",
    barWidth: "85%",
  },
  {
    icon: Zap,
    value: "200%",
    label: "Profitability Growth",
    description:
      "Transform profit margins through optimized operations and reduced waste.",
    barWidth: "75%",
  },
]

function TransformationVisual() {
  const { ref, isInView } = useScrollAnimation(0.2)

  return (
    <div ref={ref} className="relative mt-16 grid gap-6 lg:grid-cols-2 lg:gap-0">
      {/* Before: Manual */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-border/50 bg-card/20 p-8 backdrop-blur-sm lg:rounded-r-none lg:border-r-0"
      >
        <div className="mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-destructive/80">
          Before AYASC
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
          Manual Operations
        </h3>
        <div className="mt-6 space-y-3">
          {[
            "Paper-based record keeping",
            "Manual data entry errors",
            "Disconnected communication",
            "Slow decision making",
            "High operational costs",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 rounded-lg bg-destructive/[0.04] px-4 py-2.5 border border-destructive/10"
            >
              <div className="h-1 w-1 rounded-full bg-destructive/50" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-destructive/70">
          <TrendingDown className="h-4 w-4" />
          <span>Declining efficiency</span>
        </div>
      </motion.div>

      {/* Center arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card box-glow">
          <ArrowRight className="h-5 w-5 text-primary" />
        </div>
      </motion.div>

      {/* After: Automated */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-primary/15 bg-card/30 p-8 backdrop-blur-sm lg:rounded-l-none"
      >
        <div className="mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
          After AYASC
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
          AI-Powered Automation
        </h3>
        <div className="mt-6 space-y-3">
          {[
            "Cloud-based digital systems",
            "Zero-error automated processes",
            "Unified communication hub",
            "Real-time AI insights",
            "Optimized cost structure",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-3 rounded-lg bg-primary/[0.04] px-4 py-2.5 border border-primary/10"
            >
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span className="text-sm text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-primary">
          <TrendingUp className="h-4 w-4" />
          <span>Exponential growth</span>
        </div>
      </motion.div>
    </div>
  )
}

export function AutomationSection() {
  return (
    <SectionWrapper id="automation">
      <div className="text-center">
        <SectionLabel>Automation</SectionLabel>
        <SectionTitle>From Manual Chaos to Intelligent Automation</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            Watch your operations transform from labor-intensive manual processes
            to seamless AI-driven automation that works around the clock.
          </SectionDescription>
        </div>
      </div>

      <TransformationVisual />

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <metric.icon className="h-5 w-5" />
              <span className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                {metric.value}
              </span>
            </div>
            <div className="text-sm font-semibold text-foreground">
              {metric.label}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {metric.description}
            </p>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted/50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: metric.barWidth }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                className="h-full rounded-full bg-primary/60"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
