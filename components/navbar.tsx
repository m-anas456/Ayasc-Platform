"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Network", href: "#network" },
  { label: "Automation", href: "#automation" },
  { label: "Outsourcing", href: "#outsourcing" },
  { label: "Sales", href: "#sales" },
  { label: "Software", href: "#software" },
  { label: "AI", href: "#ai" },
  { label: "Web", href: "#web" },
  { label: "Apps", href: "#apps" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/50 bg-background/70 backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Left: hamburger on mobile, links on desktop */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center rounded-md p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.slice(0, 5).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-primary/[0.08]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Center: Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <div className="h-3 w-3 rounded-full bg-primary box-glow" />
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-20" />
            </div>
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wider text-foreground">
              AYASC
            </span>
          </button>

          {/* Right links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.slice(5).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-primary/[0.08]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick("#about")}
              className="rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 text-[13px] font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50"
            >
              Let{"'"}s Talk
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => handleNavClick("#about")}
              className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
            >
              Let{"'"}s Talk
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[64px] z-40 overflow-y-auto border-t border-border/30 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
