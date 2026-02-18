"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import { AlertTriangle, CheckCircle2, X, Check } from "lucide-react"

const traditionalIssues = [
  "Scattered vendor management",
  "Inconsistent quality control",
  "Communication breakdowns",
  "Hidden costs and overruns",
  "No performance tracking",
  "Delayed deliverables",
]

const ayascBenefits = [
  "Centralized project management",
  "Rigorous quality standards",
  "Real-time status updates",
  "Transparent fixed pricing",
  "Live performance dashboards",
  "On-time guaranteed delivery",
]

export function OutsourcingSection() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <SectionWrapper id="outsourcing">
      <div className="text-center">
        <SectionLabel>Outsourcing</SectionLabel>
        <SectionTitle>Outsourcing, Reimagined</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            Stop gambling on unreliable vendors. AYASC provides a fully managed
            outsourcing model with complete transparency and guaranteed results.
          </SectionDescription>
        </div>
      </div>

      <div ref={ref} className="mt-16 grid gap-5 lg:grid-cols-2 lg:gap-0">
        {/* Traditional Model */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-border/50 bg-card/20 p-7 backdrop-blur-sm lg:rounded-r-none lg:border-r-0"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/[0.08]">
              <AlertTriangle className="h-4 w-4 text-destructive/70" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-destructive/60">
                Traditional Model
              </div>
              <div className="font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                Disorganized Outsourcing
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {traditionalIssues.map((issue, i) => (
              <motion.div
                key={issue}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-3 rounded-lg bg-destructive/[0.03] px-4 py-2.5 border border-destructive/[0.08]"
              >
                <X className="h-3.5 w-3.5 shrink-0 text-destructive/50" />
                <span className="text-sm text-muted-foreground">{issue}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-lg bg-destructive/[0.04] border border-destructive/[0.08] p-3">
            <div className="text-center text-sm text-destructive/70">
              Average failure rate:{" "}
              <span className="font-semibold">68%</span>
            </div>
          </div>
        </motion.div>

        {/* AYASC Model */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-primary/15 bg-card/30 p-7 backdrop-blur-sm lg:rounded-l-none"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.08]">
              <CheckCircle2 className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-primary">
                AYASC Model
              </div>
              <div className="font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                Optimized & Managed
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {ayascBenefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                className="flex items-center gap-3 rounded-lg bg-primary/[0.03] px-4 py-2.5 border border-primary/10"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-lg bg-primary/[0.06] border border-primary/15 p-3">
            <div className="text-center text-sm text-primary">
              AYASC success rate:{" "}
              <span className="font-semibold">97%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
