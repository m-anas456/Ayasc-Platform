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
  Smartphone,
  Building2,
  Users,
  Bell,
  ShieldCheck,
  Fingerprint,
  TrendingUp,
  BarChart3,
  Clock,
  Lock,
  Zap,
  ArrowRight,
} from "lucide-react"

interface AppMockupProps {
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  color: "cyan" | "purple" | "amber"
  elements: Array<{
    type: "header" | "stat" | "chart" | "item" | "action"
    label?: string
    value?: string
    icon?: React.ComponentType<{ className?: string }>
  }>
  delay?: number
}

function AppDashboard({
  title,
  subtitle,
  icon: Icon,
  color,
  elements,
  delay = 0,
}: AppMockupProps) {
  const { ref, isInView } = useScrollAnimation(0.15)
  
  const colorMap = {
    cyan: {
      border: "border-cyan-500/20",
      bg: "from-cyan-500/10 to-cyan-500/5",
      accent: "text-cyan-400 bg-cyan-500/20",
      chart: "bg-cyan-500/40",
    },
    purple: {
      border: "border-purple-500/20",
      bg: "from-purple-500/10 to-purple-500/5",
      accent: "text-purple-400 bg-purple-500/20",
      chart: "bg-purple-500/40",
    },
    amber: {
      border: "border-amber-500/20",
      bg: "from-amber-500/10 to-amber-500/5",
      accent: "text-amber-400 bg-amber-500/20",
      chart: "bg-amber-500/40",
    },
  }

  const theme = colorMap[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center`}
    >
      {/* Phone Device */}
      <div className={`relative h-96 w-48 rounded-2xl border ${theme.border} bg-linear-to-br ${theme.bg} p-2.5 backdrop-blur-md shadow-xl overflow-hidden`}>
        {/* Phone glow */}
        <div className={`absolute -inset-3 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(63,224,208,0.06)_0%,transparent_70%)]`} />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-background/80 border border-primary/10">
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border/30 bg-background/60 text-[7px]">
            <span className="text-foreground/60">9:41</span>
            <div className="flex gap-1">
              <div className="h-1 w-1 rounded-full bg-primary/60" />
              <div className="h-1 w-1 rounded-full bg-primary/60" />
            </div>
          </div>

          {/* Content */}
          <div className="p-3 space-y-2.5 h-[calc(100%-32px)] overflow-hidden">
            {elements.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: (delay + 0.3 + i * 0.08) }}
              >
                {el.type === "header" && (
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`h-5 w-5 rounded-lg ${theme.accent} flex items-center justify-center`}>
                      <span className="text-[10px] font-bold">{el.label?.[0]}</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-semibold text-foreground">{el.label}</div>
                      <div className="text-[7px] text-muted-foreground">{el.value}</div>
                    </div>
                  </div>
                )}
                {el.type === "stat" && (
                  <div className="rounded-lg border border-primary/10 bg-primary/4 p-2">
                    <div className="text-[7px] text-muted-foreground">{el.label}</div>
                    <div className="text-[11px] font-bold text-foreground mt-0.5">{el.value}</div>
                  </div>
                )}
                {el.type === "chart" && (
                  <div className="flex items-end gap-0.5 h-8 rounded-lg border border-primary/10 bg-primary/4 p-1.5">
                    {[60, 40, 75, 45, 80].map((h, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${h}%` }}
                        className={`flex-1 rounded-sm ${theme.chart}`}
                      />
                    ))}
                  </div>
                )}
                {el.type === "item" && (
                  <div className="flex items-center justify-between rounded-lg border border-border/30 bg-secondary/50 px-2 py-1.5">
                    <div className="text-[9px] text-foreground">{el.label}</div>
                    <div className="text-[9px] font-semibold text-primary">{el.value}</div>
                  </div>
                )}
                {el.type === "action" && (
                  <div className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 flex items-center justify-between">
                    <div className="text-[9px] font-medium text-primary">{el.label}</div>
                    <ArrowRight className="h-3 w-3 text-primary/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="mt-5 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Icon className="h-4 w-4 text-primary" />
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-[11px] text-muted-foreground">{subtitle}</p>
      </motion.div>
    </motion.div>
  )
}

const appTypes = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "Customer-facing experiences",
    description: "Beautiful mobile applications that delight your users with intuitive interfaces and seamless performance.",
    color: "cyan" as const,
    features: [
      "Cross-platform (iOS & Android)",
      "Offline-first architecture",
      "Push notifications",
      "Real-time sync",
    ],
    mockupElements: [
      { type: "header", label: "Dashboard", value: "Today" },
      { type: "stat", label: "Active Orders", value: "12" },
      { type: "chart" },
      { type: "item", label: "Last Purchase", value: "$249.99" },
      { type: "action", label: "View Details" },
    ],
  },
  {
    icon: Building2,
    title: "Internal Systems",
    subtitle: "Business operations & management",
    description: "Powerful internal platforms that streamline operations and keep your team productive and synchronized.",
    color: "purple" as const,
    features: [
      "Role-based access control",
      "Real-time data sync",
      "Custom workflows",
      "Advanced analytics",
    ],
    mockupElements: [
      { type: "header", label: "Operations", value: "This Week" },
      { type: "stat", label: "Tasks", value: "24" },
      { type: "chart" },
      { type: "item", label: "Team Online", value: "8/10" },
      { type: "action", label: "Manage Workflow" },
    ],
  },
  {
    icon: Users,
    title: "Client Platforms",
    subtitle: "Self-service client portals",
    description: "Empower your clients with self-service portals that reduce support tickets and improve satisfaction.",
    color: "amber" as const,
    features: [
      "Account management",
      "Billing & invoices",
      "Support tickets",
      "Usage analytics",
    ],
    mockupElements: [
      { type: "header", label: "Account", value: "Nov 2024" },
      { type: "stat", label: "Balance Due", value: "$1,250" },
      { type: "chart" },
      { type: "item", label: "Support Tickets", value: "2" },
      { type: "action", label: "Get Support" },
    ],
  },
]

export function AppDevelopmentSection() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <SectionWrapper id="apps">
      <div className="text-center">
        <SectionLabel>App Development</SectionLabel>
        <SectionTitle>Apps That Power Your Business</SectionTitle>
        <div className="flex justify-center">
          <SectionDescription>
            Native and cross-platform applications for every use case. From customer-facing mobile apps to internal operations systems and powerful client portals.
          </SectionDescription>
        </div>
      </div>

      {/* Three App Types Display */}
      <div ref={ref} className="mt-20 grid gap-12 lg:grid-cols-3">
        {appTypes.map((app, i) => (
          <div key={app.title} className="flex flex-col items-center">
            {/* Phone Mockup */}
            <AppDashboard
              title={app.title}
              subtitle={app.subtitle}
              icon={app.icon}
              color={app.color}
              elements={app.mockupElements}
              delay={i * 0.15}
            />

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="mt-8 w-full max-w-xs rounded-xl border border-primary/20 bg-linear-to-br from-primary/8 to-primary/3 p-6 backdrop-blur-sm"
            >
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {app.description}
              </p>
              <div className="space-y-2.5">
                {app.features.map((feature) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Capabilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <h3 className="text-center text-2xl font-bold text-foreground mb-12">
          Core Capabilities
        </h3>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: ShieldCheck, label: "Enterprise Security", description: "Bank-level encryption" },
            { icon: Fingerprint, label: "Biometric Auth", description: "Secure access" },
            { icon: Bell, label: "Smart Notifications", description: "Real-time alerts" },
            { icon: Zap, label: "Lightning Fast", description: "Optimized performance" },
            { icon: TrendingUp, label: "Analytics", description: "Deep insights" },
            { icon: Lock, label: "Data Privacy", description: "GDPR compliant" },
          ].map((capability, i) => (
            <motion.div
              key={capability.label}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-primary/20 bg-linear-to-br from-primary/8 to-primary/3 p-4 text-center hover:border-primary/40 transition-all"
            >
              <capability.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-xs font-semibold text-foreground mb-1">
                {capability.label}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {capability.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
