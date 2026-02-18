"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import {
  Target,
  Megaphone,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react"

const graphData = [15, 22, 30, 28, 42, 55, 48, 62, 75, 70, 88, 95]
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]

function ROIGraph() {
  const { ref, isInView } = useScrollAnimation(0.2)
  const maxValue = Math.max(...graphData)
  const graphHeight = 180

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
            Revenue Growth
          </div>
          <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            +285%
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-chart-4/[0.08] border border-chart-4/15 px-3 py-1">
          <TrendingUp className="h-3 w-3 text-chart-4" />
          <span className="text-[11px] font-medium text-chart-4">Rising</span>
        </div>
      </div>

      <div className="relative" style={{ height: graphHeight }}>
        <svg
          width="100%"
          height={graphHeight}
          viewBox={`0 0 ${graphData.length * 50} ${graphHeight}`}
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1="0"
              y1={graphHeight * (1 - ratio)}
              x2={graphData.length * 50}
              y2={graphHeight * (1 - ratio)}
              stroke="rgba(63,224,208,0.05)"
              strokeWidth="0.5"
            />
          ))}
          <motion.path
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            d={`M 10 ${graphHeight} ${graphData
              .map(
                (val, i) =>
                  `L ${i * 50 + 10} ${graphHeight - (val / maxValue) * (graphHeight - 20)}`
              )
              .join(" ")} L ${(graphData.length - 1) * 50 + 10} ${graphHeight} Z`}
            fill="var(--primary)"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            d={`M ${graphData
              .map(
                (val, i) =>
                  `${i * 50 + 10} ${graphHeight - (val / maxValue) * (graphHeight - 20)}`
              )
              .join(" L ")}`}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {graphData.map((val, i) => (
            <motion.circle
              key={i}
              cx={i * 50 + 10}
              cy={
                graphHeight -
                (val / maxValue) * (graphHeight - 20)
              }
              r="2.5"
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
            />
          ))}
        </svg>
      </div>

      <div className="mt-3 flex justify-between">
        {months.map((m) => (
          <span key={m} className="text-[10px] text-muted-foreground/60">
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "AI-powered lead scoring identifies your ideal prospects automatically.",
    stat: "4x more leads",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    description:
      "Multi-channel campaigns with automated A/B testing and optimization.",
    stat: "65% higher conversion",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time performance tracking across all channels with insights.",
    stat: "360-degree visibility",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "ML-driven audience segmentation for hyper-personalized messaging.",
    stat: "92% accuracy",
  },
  {
    icon: DollarSign,
    title: "Revenue Attribution",
    description:
      "Track every dollar from first touch to closed deal with full-funnel view.",
    stat: "100% clarity",
  },
  {
    icon: TrendingUp,
    title: "Growth Forecasting",
    description:
      "Predictive analytics that forecast revenue trends and opportunities.",
    stat: "94% forecast accuracy",
  },
]

export function SalesSection() {
  return (
    <SectionWrapper id="sales">
      <div className="text-center">
        <SectionLabel>Sales & Marketing</SectionLabel>
        <SectionTitle>Supercharge Your Sales Pipeline</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            Transform your sales and marketing with intelligent lead generation,
            automated campaigns, and crystal-clear ROI tracking.
          </SectionDescription>
        </div>
      </div>

      <div className="mt-16">
        <ROIGraph />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-2 text-[11px] font-semibold text-primary">
                  {feature.stat}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
