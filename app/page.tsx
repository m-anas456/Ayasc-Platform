"use client"

import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/sections/hero"
import { NetworkSection } from "@/components/sections/network"
import { AutomationSection } from "@/components/sections/automation"
import { OutsourcingSection } from "@/components/sections/outsourcing"
import { SalesSection } from "@/components/sections/sales"
import { SoftwareSection } from "@/components/sections/software"
import { AIDevelopmentSection } from "@/components/sections/ai-development"
import { WebDevelopmentSection } from "@/components/sections/web-development"
import { AppDevelopmentSection } from "@/components/sections/app-development"
import { AboutFooterSection } from "@/components/sections/about-footer"

/**
 * SimulatorCoreEngine - Main interactive website orchestrator!
 * This component assembles all sections into a single-page scroll experience.
 * Each section reveals progressively during scroll with smooth animations!!
 */
export default function SimulatorCoreEngine() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <NetworkSection />
        <AutomationSection />
        <OutsourcingSection />
        <SalesSection />
        <SoftwareSection />
        <AIDevelopmentSection />
        <WebDevelopmentSection />
        <AppDevelopmentSection />
        <AboutFooterSection />
      </main>
    </>
  )
}
