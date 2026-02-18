"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper"
import {
  Shield,
  Users,
  Building2,
  MessageSquare,
  BarChart3,
  Globe,
  CheckCircle2,
  TrendingUp,
  FileText,
  Send,
} from "lucide-react"

/* ── Four dashboard panels that expand outward on scroll ── */

const dashboards = [
  {
    id: "verified",
    icon: Shield,
    label: "Verified Profiles",
    position: "top-left" as const,
    content: (isActive: boolean) => (
      <div className="space-y-2.5">
        {[
          { name: "Al-Noor Trading Co.", status: "Verified", pct: 100 },
          { name: "Gulf Tech Solutions", status: "Verified", pct: 100 },
          { name: "Atlas Logistics", status: "Pending", pct: 65 },
        ].map((biz, i) => (
          <motion.div
            key={biz.name}
            initial={{ opacity: 0, x: -10 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
            className="flex items-center gap-2 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent px-3 py-2 hover:border-primary/40 transition-all"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
              <span className="text-[9px] font-bold text-primary">
                {biz.name[0]}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-foreground">
                {biz.name}
              </p>
              <div className="h-1 w-full rounded-full bg-secondary/60 mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${biz.pct}%` } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/50"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              {biz.status === "Verified" ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isActive ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: "spring", delay: 0.9 + i * 0.12 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </motion.div>
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-amber-400/60 animate-pulse" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "crm",
    icon: BarChart3,
    label: "CRM & Dashboards",
    position: "top-right" as const,
    content: (isActive: boolean) => (
      <div className="space-y-3">
        {/* Animated line chart */}
        <div className="flex items-end justify-center gap-2 h-16 bg-gradient-to-b from-primary/10 to-transparent rounded-lg p-2">
          {[40, 65, 50, 80, 70, 90, 55, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={isActive ? { height: `${h}%` } : { height: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.06, ease: "easeOut" }}
              className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/50 hover:from-primary/80 transition-colors"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Active Deals", value: "342", icon: TrendingUp, color: "from-green-500/20" },
            { label: "Pipeline", value: "$2.5M", icon: FileText, color: "from-blue-500/20" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1, type: "spring" }}
              className={`rounded-lg border border-primary/20 bg-gradient-to-br ${stat.color} to-transparent p-2.5 text-center hover:border-primary/40 transition-all`}
            >
              <stat.icon className="mx-auto h-4 w-4 text-primary/70 mb-1" />
              <p className="text-[12px] font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-[9px] text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "gov",
    icon: Building2,
    label: "Government Integration",
    position: "bottom-left" as const,
    content: (isActive: boolean) => (
      <div className="space-y-2.5">
        {[
          { label: "Commercial License", status: "Active", color: "text-green-400", bgColor: "from-green-500/10" },
          { label: "Tax Compliance", status: "Active", color: "text-green-400", bgColor: "from-green-500/10" },
          { label: "Labor Permits", status: "Renewal Due", color: "text-amber-400", bgColor: "from-amber-500/10" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
            className={`flex items-center justify-between rounded-lg border border-primary/20 bg-gradient-to-r ${item.bgColor} to-transparent px-3 py-2 hover:border-primary/40 transition-all`}
          >
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-primary/60" />
              <span className="text-[11px] font-medium text-foreground">{item.label}</span>
            </div>
            <span className={`text-[10px] font-bold ${item.color}`}>
              {item.status}
            </span>
          </motion.div>
        ))}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-2 h-1 origin-left rounded-full bg-gradient-to-r from-primary/30 to-primary/5"
        />
      </div>
    ),
  },
  {
    id: "comm",
    icon: MessageSquare,
    label: "Unified Communication",
    position: "bottom-right" as const,
    content: (isActive: boolean) => (
      <div className="space-y-2">
        {[
          { from: "AN", msg: "Invoice #2847 approved", time: "2m", color: "from-blue-500/10" },
          { from: "GT", msg: "Shipment dispatched...", time: "8m", color: "from-green-500/10" },
          { from: "AL", msg: "Meeting scheduled...", time: "15m", color: "from-purple-500/10" },
        ].map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.6 + i * 0.15 }}
            className={`flex items-start gap-2.5 rounded-lg border border-primary/20 bg-gradient-to-r ${msg.color} to-transparent px-3 py-2 hover:border-primary/40 transition-all`}
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5 ring-1 ring-primary/30">
              <span className="text-[9px] font-bold text-primary">
                {msg.from}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-foreground">{msg.msg}</p>
              <p className="text-[9px] text-muted-foreground">{msg.time} ago</p>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="flex items-center gap-2 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent px-3 py-2 mt-2"
        >
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-medium text-primary">3 channels active</span>
          <Send className="ml-auto h-3 w-3 text-primary/60" />
        </motion.div>
      </div>
    ),
  },
]

/* ── Positions for each panel relative to center ── */
const panelPositions: Record<
  string,
  { collapsed: { x: number; y: number }; expanded: { x: number; y: number } }
> = {
  "top-left": {
    collapsed: { x: -30, y: -20 },
    expanded: { x: -260, y: -160 },
  },
  "top-right": {
    collapsed: { x: 30, y: -20 },
    expanded: { x: 80, y: -160 },
  },
  "bottom-left": {
    collapsed: { x: -30, y: 20 },
    expanded: { x: -260, y: 80 },
  },
  "bottom-right": {
    collapsed: { x: 30, y: 20 },
    expanded: { x: 80, y: 80 },
  },
}

const panelPositionsMobile: Record<
  string,
  { collapsed: { x: number; y: number }; expanded: { x: number; y: number } }
> = {
  "top-left": {
    collapsed: { x: 0, y: -20 },
    expanded: { x: 0, y: -220 },
  },
  "top-right": {
    collapsed: { x: 0, y: -10 },
    expanded: { x: 0, y: -100 },
  },
  "bottom-left": {
    collapsed: { x: 0, y: 10 },
    expanded: { x: 0, y: 100 },
  },
  "bottom-right": {
    collapsed: { x: 0, y: 20 },
    expanded: { x: 0, y: 220 },
  },
}

/* ── Connection lines SVG (animated dashes from phone to panels) ── */
function ConnectionLines() {
  const { ref, isInView } = useScrollAnimation(0.2)
  const lines = [
    { x1: 220, y1: 180, x2: 70, y2: 70 },
    { x1: 220, y1: 180, x2: 370, y2: 70 },
    { x1: 220, y1: 220, x2: 70, y2: 330 },
    { x1: 220, y1: 220, x2: 370, y2: 330 },
  ]
  return (
    <motion.svg
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 440 400"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(63,224,208,0.5)" />
          <stop offset="100%" stopColor="rgba(63,224,208,0.05)" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => {
        const mx = (l.x1 + l.x2) / 2
        const my = l.y1
        return (
          <g key={i}>
            <motion.path
              d={`M ${l.x1} ${l.y1} Q ${mx} ${my} ${l.x2} ${l.y2}`}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
            />
            {/* Traveling pulse dot */}
            <circle r="2" fill="#3fe0d0" opacity={0.8}>
              <animateMotion
                dur={`${2.5 + i * 0.3}s`}
                repeatCount="indefinite"
                path={`M ${l.x1} ${l.y1} Q ${mx} ${my} ${l.x2} ${l.y2}`}
              />
            </circle>
          </g>
        )
      })}
    </motion.svg>
  )
}

/* ── Central phone mockup ── */
function PhoneMockup({ progress }: { progress: number }) {
  const phoneOpacity = Math.max(0, Math.min(1, progress * 4))
  const phoneScale = 0.85 + Math.min(progress, 0.3) * 0.5

  return (
    <motion.div
      style={{ opacity: phoneOpacity, scale: phoneScale }}
      className="relative z-10 h-[300px] w-[152px] rounded-[24px] border border-primary/25 bg-card/90 p-1.5 shadow-[0_0_40px_rgba(63,224,208,0.08)] backdrop-blur-sm md:h-[340px] md:w-[170px]"
    >
      {/* Outer glow ring */}
      <div className="absolute -inset-3 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(63,224,208,0.06)_0%,transparent_70%)]" />

      {/* Screen */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-background/80 p-3">
        {/* Notch */}
        <div className="mb-2.5 h-1 w-8 self-center rounded-full bg-primary/15" />

        {/* App header */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
            <span className="text-[8px] font-bold text-primary">A</span>
          </div>
          <div>
            <p className="text-[9px] font-semibold text-foreground">
              AYASC Hub
            </p>
            <p className="text-[6px] text-muted-foreground">
              Business Network
            </p>
          </div>
          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Stats row */}
        <div className="mb-2.5 grid grid-cols-3 gap-1">
          {[
            { v: "247", l: "Connected" },
            { v: "18", l: "Pending" },
            { v: "99%", l: "Uptime" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-md bg-secondary/80 px-1 py-1.5 text-center"
            >
              <p className="text-[10px] font-bold text-primary">{s.v}</p>
              <p className="text-[6px] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="flex-1 space-y-1.5 overflow-hidden">
          {["New verification request", "CRM sync complete", "Gov. license renewed", "Message from Atlas Co.", "Dashboard updated"].map(
            (txt, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-md bg-secondary/40 px-2 py-1"
              >
                <div className="h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                <p className="truncate text-[7px] text-foreground/80">{txt}</p>
              </div>
            )
          )}
        </div>

        {/* Bottom nav */}
        <div className="mt-2 flex justify-around border-t border-border/30 pt-2">
          {[Users, BarChart3, MessageSquare, Globe].map((Icon, i) => (
            <Icon
              key={i}
              className={`h-3 w-3 ${i === 0 ? "text-primary" : "text-muted-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main visualization with scroll-driven dashboard expansion ── */
function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  /* Map scroll progress 0→1 to our expansion factor */
  const progress = useTransform(scrollYProgress, [0.15, 0.55], [0, 1])

  return (
    <div ref={containerRef} className="relative mt-12 lg:mt-20">
      {/* Desktop: all-in-one composition */}
      <div className="hidden lg:flex items-center justify-center min-h-[500px] relative">
        <ConnectionLines />

        {/* Central phone */}
        <motion.div style={{ opacity: useTransform(progress, [0, 0.25], [0, 1]) }}>
          <PhoneMockup progress={1} />
        </motion.div>

        {/* Expanding dashboard panels */}
        {dashboards.map((db, i) => {
          const pos = panelPositions[db.position]
          return (
            <ExpandingPanel
              key={db.id}
              dashboard={db}
              index={i}
              progress={progress}
              collapsedPos={pos.collapsed}
              expandedPos={pos.expanded}
            />
          )
        })}
      </div>

      {/* Mobile: stacked vertical layout */}
      <div className="flex flex-col items-center gap-8 lg:hidden">
        <PhoneMockup progress={1} />
        {dashboards.map((db, i) => (
          <MobilePanel key={db.id} dashboard={db} index={i} />
        ))}
      </div>
    </div>
  )
}

/* ── Desktop expanding panel ── */
function ExpandingPanel({
  dashboard,
  index,
  progress,
  collapsedPos,
  expandedPos,
}: {
  dashboard: (typeof dashboards)[0]
  index: number
  progress: ReturnType<typeof useTransform>
  collapsedPos: { x: number; y: number }
  expandedPos: { x: number; y: number }
}) {
  const { ref, isInView } = useScrollAnimation(0.1)
  const delay = index * 0.06

  const x = useTransform(
    progress,
    [0.05 + delay, 0.5 + delay],
    [collapsedPos.x, expandedPos.x]
  )
  const y = useTransform(
    progress,
    [0.05 + delay, 0.5 + delay],
    [collapsedPos.y, expandedPos.y]
  )
  const scale = useTransform(progress, [0.05 + delay, 0.5 + delay], [0.5, 1])
  const opacity = useTransform(progress, [0.05 + delay, 0.35 + delay], [0, 1])

  const Icon = dashboard.icon

  return (
    <motion.div
      ref={ref}
      style={{ x, y, scale, opacity }}
      className="absolute z-20 w-[240px] rounded-xl border border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg shadow-lg shadow-primary/5 hover:border-primary/50 transition-all"
    >
      <div className="p-4">
        {/* Panel header */}
        <div className="mb-3.5 flex items-center gap-2 pb-3 border-b border-primary/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/10 ring-1 ring-primary/20">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h4 className="text-[12px] font-semibold text-foreground">
            {dashboard.label}
          </h4>
        </div>
        {/* Dynamic content */}
        {dashboard.content(isInView)}
      </div>
    </motion.div>
  )
}

/* ── Mobile stacked panel ── */
function MobilePanel({
  dashboard,
  index,
}: {
  dashboard: (typeof dashboards)[0]
  index: number
}) {
  const { ref, isInView } = useScrollAnimation(0.2)
  const Icon = dashboard.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-[340px] rounded-xl border border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg shadow-lg shadow-primary/5 hover:border-primary/50 transition-all"
    >
      <div className="p-5">
        <div className="mb-4 flex items-center gap-2 pb-4 border-b border-primary/10">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/10 ring-1 ring-primary/20">
            <Icon className="h-4.5 w-4.5 text-primary" />
          </div>
          <h4 className="text-base font-semibold text-foreground">
            {dashboard.label}
          </h4>
        </div>
        {dashboard.content(isInView)}
      </div>
    </motion.div>
  )
}

/* ── Feature grid (below visualization) ── */
const features = [
  {
    icon: Users,
    title: "Business Directory",
    description:
      "Discover and connect with verified local businesses, suppliers, and service providers across the network.",
  },
  {
    icon: Globe,
    title: "Digital Ecosystem",
    description:
      "Complete digital infrastructure powering local commerce with modern, scalable technology.",
  },
]

export function NetworkSection() {
  return (
    <SectionWrapper id="network">
      <div className="text-center">
        <SectionLabel>Business Network</SectionLabel>
        <SectionTitle>
          The Digital Infrastructure for Local Commerce
        </SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            AYASC creates a unified digital ecosystem where businesses connect,
            communicate, and collaborate through verified profiles, integrated CRM
            systems, and government-linked infrastructure.
          </SectionDescription>
        </div>
      </div>

      <NetworkVisualization />

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl border border-primary/20 bg-gradient-to-br from-card/60 to-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-card/80 hover:to-card/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
