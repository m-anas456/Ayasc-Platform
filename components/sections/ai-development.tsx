"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import { Brain, Bot, Workflow, Sparkles, Cpu, MessageSquare } from "lucide-react"

const aiServices = [
  {
    icon: Brain,
    title: "Custom LLM Systems",
    description:
      "Fine-tuned language models trained on your industry data for domain-specific intelligence.",
    tag: "Deep Learning",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Intelligent conversational AI that handles customer queries and support 24/7.",
    tag: "Conversational AI",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description:
      "End-to-end AI-powered workflows automating complex multi-step processes.",
    tag: "Process Automation",
  },
  {
    icon: Sparkles,
    title: "Predictive Analytics",
    description:
      "ML models that forecast trends, behavior, and opportunities before they happen.",
    tag: "ML Models",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description:
      "Image recognition for quality control, inventory, and document processing.",
    tag: "Vision AI",
  },
  {
    icon: MessageSquare,
    title: "NLP Solutions",
    description:
      "Sentiment analysis, content generation, and automated document understanding.",
    tag: "Language AI",
  },
]

function NeuralNetworkVisual() {
  const { ref, isInView } = useScrollAnimation(0.15)

  const layers = [3, 5, 7, 5, 3]
  const layerSpacing = 80
  const nodeSpacing = 30
  const svgWidth = (layers.length - 1) * layerSpacing + 40
  const svgHeight = (Math.max(...layers) - 1) * nodeSpacing + 40

  return (
    <div ref={ref} className="mt-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="rounded-xl border border-border/50 bg-card/20 p-8 backdrop-blur-sm"
      >
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          {layers.map((nodeCount, layerIdx) => {
            if (layerIdx === layers.length - 1) return null
            const nextCount = layers[layerIdx + 1]
            return Array.from({ length: nodeCount }).map((_, nodeIdx) => {
              return Array.from({ length: nextCount }).map((_, nextIdx) => {
                const x1 = layerIdx * layerSpacing + 20
                const y1 =
                  (svgHeight - (nodeCount - 1) * nodeSpacing) / 2 +
                  nodeIdx * nodeSpacing
                const x2 = (layerIdx + 1) * layerSpacing + 20
                const y2 =
                  (svgHeight - (nextCount - 1) * nodeSpacing) / 2 +
                  nextIdx * nodeSpacing
                return (
                  <motion.line
                    key={`${layerIdx}-${nodeIdx}-${nextIdx}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--primary)"
                    strokeWidth="0.4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.12 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: layerIdx * 0.15 }}
                  />
                )
              })
            })
          })}
          {layers.map((nodeCount, layerIdx) => {
            return Array.from({ length: nodeCount }).map((_, nodeIdx) => {
              const cx = layerIdx * layerSpacing + 20
              const cy =
                (svgHeight - (nodeCount - 1) * nodeSpacing) / 2 +
                nodeIdx * nodeSpacing
              return (
                <motion.circle
                  key={`node-${layerIdx}-${nodeIdx}`}
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  fill="var(--primary)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 0.7, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: layerIdx * 0.12 + nodeIdx * 0.04,
                  }}
                />
              )
            })
          })}
        </svg>
        <div className="mt-4 text-center text-[11px] font-medium tracking-wider uppercase text-muted-foreground/50">
          Neural Network Architecture
        </div>
      </motion.div>
    </div>
  )
}

export function AIDevelopmentSection() {
  return (
    <SectionWrapper id="ai">
      <div className="text-center">
        <SectionLabel>AI Development</SectionLabel>
        <SectionTitle>Intelligence That Drives Business Forward</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            From custom language models to intelligent automation workflows, we build
            AI solutions that transform how your business operates and competes.
          </SectionDescription>
        </div>
      </div>

      <NeuralNetworkVisual />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.08] text-primary transition-colors group-hover:bg-primary/15">
                <service.icon className="h-4 w-4" />
              </div>
              <span className="rounded-full bg-primary/[0.05] border border-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                {service.tag}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
