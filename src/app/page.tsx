import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutWindow } from "@/components/about-window";
import { StackSection } from "@/components/stack-section";
import { ProjectsSection } from "@/components/projects-section";
import { JourneySection } from "@/components/journey-section";
import { ContactSection } from "@/components/contact-section";
import { FooterTaskbar } from "@/components/footer-taskbar";
import { WaveDivider } from "@/components/wave-divider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24">
      {/* Background Atmosphere */}
      <AmbientBackground />

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Wave Transition */}
      <WaveDivider />

      {/* About Section - XP Window Frame */}
      <AboutWindow />

      {/* Wave Transition */}
      <WaveDivider flip />

      {/* Tech Stack */}
      <StackSection />

      {/* Wave Transition */}
      <WaveDivider />

      {/* Projects */}
      <ProjectsSection />

      {/* Wave Transition */}
      <WaveDivider flip />

      {/* Timeline Journey */}
      <JourneySection />

      {/* Wave Transition */}
      <WaveDivider />

      {/* Contact Form & Channels */}
      <ContactSection />

      {/* Bottom Taskbar */}
      <FooterTaskbar />
    </main>
  );
}