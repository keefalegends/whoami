import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutWindow } from "@/components/about-window";
import { StackSection } from "@/components/stack-section";
import { ProjectsSection } from "@/components/projects-section";
import { JourneySection } from "@/components/journey-section";
import { DiagnosticsBento } from "@/components/diagnostics-bento";
import { ContactSection } from "@/components/contact-section";
import { FooterTaskbar } from "@/components/footer-taskbar";
import { WaveDivider } from "@/components/wave-divider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-20">
      {/* Dynamic Background Atmosphere */}
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

      {/* System Stack Modules */}
      <StackSection />

      {/* Wave Transition */}
      <WaveDivider />

      {/* Active Windows - Projects */}
      <ProjectsSection />

      {/* Wave Transition */}
      <WaveDivider flip />

      {/* System Journey Timeline */}
      <JourneySection />

      {/* Wave Transition */}
      <WaveDivider />

      {/* System Diagnostics Bento */}
      <DiagnosticsBento />

      {/* Wave Transition */}
      <WaveDivider flip />

      {/* Connect Peripheral - Contact Form & Socials */}
      <ContactSection />

      {/* Bottom Taskbar */}
      <FooterTaskbar />
    </main>
  );
}
