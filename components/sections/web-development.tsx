"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import { Globe, Zap, Search, Palette, Code2, Gauge } from "lucide-react"

function SplitScreenVisual() {
  const { ref, isInView } = useScrollAnimation(0.15)

  return (
    <div ref={ref} className="relative mt-16 space-y-6 lg:space-y-0">
      {/* Desktop Split Screen */}
      <div className="hidden lg:grid gap-0 overflow-hidden rounded-2xl border border-border/30 grid-cols-2 bg-background/40">
        {/* BEFORE: Old Website */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative border-r border-border/30 bg-linear-to-br from-muted/20 to-destructive/5 p-8"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-tr from-destructive/10 to-transparent opacity-40" />
          
          <div className="relative">
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/40 mb-2">
                Static Websites
              </div>
              <h3 className="text-2xl font-bold text-foreground/60">Before AYASC</h3>
            </div>

            {/* Old Website Mockup */}
            <div className="rounded-xl border border-border/40 bg-muted/30 overflow-hidden shadow-lg">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive/40" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="ml-3 flex-1 h-1.5 rounded bg-muted/40 max-w-xs" />
              </div>

              {/* Website content - Dated & Static */}
              <div className="p-4 space-y-3 bg-muted/15">
                {/* Static header */}
                <div className="h-12 rounded bg-linear-to-r from-muted/30 to-muted/10" />
                
                {/* Static content blocks */}
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-muted/20" />
                  <div className="h-2 w-5/6 rounded bg-muted/20" />
                  <div className="h-2 w-4/6 rounded bg-muted/15" />
                </div>

                {/* Static grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="h-12 rounded bg-muted/20" />
                  <div className="h-12 rounded bg-muted/20" />
                </div>

                {/* Static footer */}
                <div className="pt-2 border-t border-border/20 flex gap-2">
                  <div className="h-2 flex-1 rounded bg-muted/15" />
                  <div className="h-2 w-20 rounded bg-muted/15" />
                </div>
              </div>
            </div>

            {/* Loading indicator */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 flex items-center gap-2 text-xs text-destructive/70"
            >
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-destructive/60" />
                <div className="h-1 w-1 rounded-full bg-destructive/40" />
                <div className="h-1 w-1 rounded-full bg-destructive/40" />
              </div>
              Loading... 45s
            </motion.div>

            {/* Problem list */}
            <div className="mt-6 space-y-2.5 pt-6 border-t border-border/20">
              {[
                { icon: "⏱️", text: "Slow loading speed (30+ seconds)" },
                { icon: "📱", text: "Not mobile responsive" },
                { icon: "😞", text: "Poor user experience" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-destructive/70"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AFTER: Modern Interactive Platform */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-linear-to-br from-primary/10 to-primary/5 p-8"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-tr from-primary/15 to-transparent opacity-50" />
          
          <div className="relative">
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-primary/70 mb-2">
                Interactive Platforms
              </div>
              <h3 className="text-2xl font-bold text-foreground">After AYASC</h3>
            </div>

            {/* Modern Website Mockup */}
            <div className="rounded-xl border border-primary/25 bg-linear-to-b from-background/90 to-background/70 overflow-hidden shadow-[0_0_30px_rgba(63,224,208,0.1)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/15 bg-linear-to-r from-primary/10 to-transparent">
                <div className="flex gap-1.5">
                  <motion.div
                    animate={{ opacity: [0.6, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-2 w-2 rounded-full bg-chart-4"
                  />
                  <div className="h-2 w-2 rounded-full bg-chart-4" />
                  <div className="h-2 w-2 rounded-full bg-chart-4" />
                </div>
                <div className="ml-3 flex-1 h-1.5 rounded bg-primary/20 max-w-xs" />
              </div>

              {/* Interactive website content */}
              <div className="p-4 space-y-3 bg-background/50">
                {/* Dynamic header with animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="h-12 rounded-lg bg-linear-to-r from-primary/20 to-primary/5 border border-primary/10"
                />

                {/* Animated content lines */}
                <div className="space-y-2">
                  {[1, 0.8, 0.6].map((width, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0, opacity: 0 }}
                      animate={isInView ? { width: `${width * 100}%`, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                      className="h-1.5 rounded bg-primary/30"
                    />
                  ))}
                </div>

                {/* Interactive cards grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {[0, 1].map((idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                      className="h-12 rounded-lg border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 hover:border-primary/40 transition-colors"
                    />
                  ))}
                </div>

                {/* Footer with pulse */}
                <div className="pt-2 border-t border-primary/15 flex gap-2">
                  <motion.div
                    animate={{ width: ["40%", "60%", "40%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-1.5 rounded bg-primary/40"
                  />
                  <div className="h-1.5 w-16 rounded bg-primary/25" />
                </div>
              </div>
            </div>

            {/* Loading indicator - Fast */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="mt-4 flex items-center gap-2 text-xs text-chart-4"
            >
              <div className="flex gap-0.5">
                <div className="h-1 w-1 rounded-full bg-chart-4" />
                <div className="h-1 w-1 rounded-full bg-chart-4" />
              </div>
              Loaded in 0.8s
            </motion.div>

            {/* Benefits list */}
            <div className="mt-6 space-y-2.5 pt-6 border-t border-primary/15">
              {[
                { icon: "⚡", text: "Sub-second load times (< 1s)" },
                { icon: "📱", text: "Fully responsive & adaptive" },
                { icon: "✨", text: "Immersive interactive experience" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-chart-4"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6">
        {/* Before Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/30 bg-linear-to-br from-muted/20 to-destructive/5 p-6"
        >
          <div className="mb-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/40 mb-2">
              Static Websites
            </div>
            <h3 className="text-xl font-bold text-foreground/60">Before AYASC</h3>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/30 p-3 mb-4">
            <div className="flex gap-1 mb-2">
              <div className="h-1.5 w-1.5 rounded-full bg-destructive/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted/20" />
            </div>
            <div className="space-y-2">
              <div className="h-8 rounded bg-muted/20" />
              <div className="h-2 w-3/4 rounded bg-muted/20" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded bg-muted/20" />
                <div className="h-8 rounded bg-muted/20" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { icon: "⏱️", text: "Slow loading (30+s)" },
              { icon: "📱", text: "Not responsive" },
              { icon: "😞", text: "Poor UX" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-destructive/70">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* After Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-primary/25 bg-linear-to-br from-primary/10 to-primary/5 p-6"
        >
          <div className="mb-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-primary/70 mb-2">
              Interactive Platforms
            </div>
            <h3 className="text-xl font-bold text-foreground">After AYASC</h3>
          </div>
          <div className="rounded-lg border border-primary/25 bg-linear-to-b from-background/90 to-background/70 p-3 mb-4">
            <div className="flex gap-1 mb-2">
              <motion.div animate={{ opacity: [0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-chart-4" />
              <div className="h-1.5 w-1.5 rounded-full bg-chart-4" />
              <div className="h-1.5 w-1.5 rounded-full bg-chart-4" />
            </div>
            <div className="space-y-2">
              <div className="h-8 rounded-lg bg-primary/20 border border-primary/10" />
              <div className="h-1.5 w-4/5 rounded bg-primary/30" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded-lg border border-primary/20 bg-primary/10" />
                <div className="h-8 rounded-lg border border-primary/20 bg-primary/10" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { icon: "⚡", text: "Fast loading (<1s)" },
              { icon: "📱", text: "Fully responsive" },
              { icon: "✨", text: "Immersive UX" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-chart-4">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const webFeatures = [
  { icon: Globe, title: "Modern Frameworks", description: "Next.js, React, cutting-edge tech." },
  { icon: Zap, title: "Lightning Fast", description: "Sub-second page loads, optimized." },
  { icon: Search, title: "SEO Optimized", description: "Built for search engines." },
  { icon: Palette, title: "Custom Design", description: "Unique, branded interfaces." },
  { icon: Code2, title: "Clean Code", description: "Maintainable and scalable." },
  { icon: Gauge, title: "Performance", description: "Core Web Vitals optimized." },
]

export function WebDevelopmentSection() {
  return (
    <SectionWrapper id="web">
      <div className="text-center">
        <SectionLabel>Web Development</SectionLabel>
        <SectionTitle>Websites That Command Attention</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            From outdated static pages to stunning interactive platforms. We build
            web experiences that convert visitors into customers.
          </SectionDescription>
        </div>
      </div>

      <SplitScreenVisual />

      <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {webFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col items-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/8 to-primary/3 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-linear-to-br hover:from-primary/15 hover:to-primary/8 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30 group-hover:bg-primary/25 group-hover:ring-primary/50 transition-all">
              <feature.icon className="h-4.5 w-4.5" />
            </div>
            <div className="text-sm font-semibold text-foreground">
              {feature.title}
            </div>
            <div className="mt-1.5 text-xs text-muted-foreground leading-tight">
              {feature.description}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
