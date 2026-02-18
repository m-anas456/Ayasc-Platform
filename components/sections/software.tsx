"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import { FileText, Monitor, ArrowRight, Database, Cloud, Lock } from "lucide-react"

function TransformVisual() {
  const { ref, isInView } = useScrollAnimation(0.15)

  return (
    <div ref={ref} className="mt-16 grid gap-6 lg:grid-cols-5 lg:items-center">
      {/* Paper Based */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-2 rounded-xl border border-border/50 bg-card/20 p-6 backdrop-blur-sm"
      >
        <div className="mb-4 flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground/60" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground/60">
            Legacy Systems
          </span>
        </div>
        <div className="space-y-3">
          {["Paper invoices", "Manual spreadsheets", "Physical filing", "Phone-based tracking"].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item}</span>
                  <span className="text-[10px] text-destructive/60">Outdated</span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted/30">
                  <div className="h-full w-1/5 rounded-full bg-destructive/25" />
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card box-glow">
          <ArrowRight className="h-5 w-5 text-primary" />
        </div>
      </motion.div>

      {/* Digital Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-2 rounded-xl border border-primary/15 bg-card/30 p-6 backdrop-blur-sm"
      >
        <div className="mb-4 flex items-center gap-2">
          <Monitor className="h-4 w-4 text-primary" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-primary">
            Digital Dashboard
          </span>
        </div>

        <div className="rounded-lg border border-primary/10 bg-background/30 p-3.5">
          <div className="mb-3 flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-chart-4" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-chart-5/60" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Revenue", value: "$84.2K", change: "+12%" },
              { label: "Orders", value: "1,847", change: "+8%" },
              { label: "Customers", value: "562", change: "+23%" },
              { label: "Growth", value: "34.5%", change: "+5%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="rounded-md bg-secondary/40 p-2.5 border border-border/30"
              >
                <div className="text-[10px] text-muted-foreground">
                  {stat.label}
                </div>
                <div className="font-[family-name:var(--font-heading)] text-sm font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium text-chart-4">
                  {stat.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const capabilities = [
  {
    icon: Database,
    title: "ERP Systems",
    description:
      "End-to-end enterprise resource planning tailored to your operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Seamless migration from legacy systems to modern cloud infrastructure.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Enterprise-grade security with encryption, access controls, and compliance.",
  },
]

export function SoftwareSection() {
  return (
    <SectionWrapper id="software">
      <div className="text-center">
        <SectionLabel>Software & Systems</SectionLabel>
        <SectionTitle>Paper to Powerful Digital Systems</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            Transform your paper-based processes into sophisticated digital
            dashboards and management systems that give you complete control.
          </SectionDescription>
        </div>
      </div>

      <TransformVisual />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] text-primary">
              <cap.icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
