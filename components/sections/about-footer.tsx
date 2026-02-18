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
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ArrowUpRight,
  Heart,
} from "lucide-react"

const values = [
  {
    title: "Innovation First",
    description:
      "We push the boundaries of technology to keep your business ahead.",
  },
  {
    title: "Client Partnership",
    description:
      "Your success is our success. We work as an extension of your team.",
  },
  {
    title: "Quality Obsessed",
    description:
      "Every line of code, every pixel is crafted to the highest standard.",
  },
  {
    title: "Results Driven",
    description:
      "We measure performance by the tangible impact we create for you.",
  },
]

const services = [
  "Business Network Platform",
  "Process Automation",
  "Managed Outsourcing",
  "Sales & Marketing",
  "Software Systems",
  "AI Development",
  "Web Development",
  "App Development",
]

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function AboutFooterSection() {
  const { ref, isInView } = useScrollAnimation(0.08)

  return (
    <>
      {/* About Section */}
      <SectionWrapper id="about">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>About AYASC</SectionLabel>
            <SectionTitle>
              Building the Future of Local Business
            </SectionTitle>
            <SectionDescription>
              AYASC is a digital transformation company dedicated to connecting
              and empowering local businesses. We believe every business
              deserves access to world-class technology, regardless of size.
            </SectionDescription>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-primary/15 bg-card/30 p-5 backdrop-blur-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                  Our Mission
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  To bridge the digital divide for local businesses by providing
                  accessible, intelligent, and complete digital transformation
                  solutions that drive measurable growth.
                </p>
              </div>
              <div className="rounded-xl border border-primary/15 bg-card/30 p-5 backdrop-blur-sm">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-primary">
                  Our Vision
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  A world where every local business operates with the
                  efficiency, intelligence, and reach of a global enterprise.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20"
                >
                  <div className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-5 rounded-xl border border-primary/15 bg-card/30 p-6 backdrop-blur-sm">
              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@ayasc.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary/60" />
                  contact@ayasc.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary/60" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary/60" />
                  Innovation District, Tech City
                </div>
              </div>

              <div className="mt-5 flex gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-secondary/30 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <social.icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section ref={ref} className="relative overflow-hidden px-5 py-24 lg:px-8">
        {/* CTA background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(63,224,208,0.06)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Ready to{" "}
            <span className="text-primary text-glow">Transform</span> Your
            Business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Join hundreds of businesses that have already accelerated their
            growth with AYASC.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@ayasc.com"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,224,208,0.3)]"
            >
              Start Your Transformation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/10 px-5 py-16 backdrop-blur-sm lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                  AYASC
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                Connecting and transforming local businesses through technology,
                automation, and intelligent digital solutions.
              </p>
              <div className="mt-4 flex gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <social.icon className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-foreground">
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.slice(0, 4).map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-foreground">
                Solutions
              </h4>
              <ul className="space-y-2.5">
                {services.slice(4).map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-foreground">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:contact@ayasc.com"
                    className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3 w-3" />
                    contact@ayasc.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-3 w-3" />
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    Innovation District
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
            <div className="text-[12px] text-muted-foreground/60">
              &copy; {new Date().getFullYear()} AYASC. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-[12px] text-muted-foreground/60">
              Built with{" "}
              <Heart className="inline h-3 w-3 text-primary/50" /> by AYASC
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[12px] text-muted-foreground/60 transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[12px] text-muted-foreground/60 transition-colors hover:text-primary"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
