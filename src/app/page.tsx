import dynamic from "next/dynamic";
import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { SideNav } from "@/components/side-nav";
import { Hero } from "@/components/hero";
import { AboutWindow } from "@/components/about-window";
import { StackSection } from "@/components/stack-section";
import { FullpageSlider } from "@/components/fullpage-slider";

const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((mod) => mod.ProjectsSection),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => mod.ContactSection),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* GSAP Fullpage Slide Controller */}
      <FullpageSlider />

      {/* Dynamic Background Atmosphere */}
      <AmbientBackground />

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Side Slide Navigator */}
      <SideNav />

      {/* 1. Hero Slide */}
      <Hero />

      {/* 2. About Slide - Redesigned Mobile & Desktop */}
      <AboutWindow />

      {/* 3. Tech Stack Slide */}
      <StackSection />

      {/* 4. Projects Slide */}
      <ProjectsSection />

      {/* 5. Contact Slide + Footer */}
      <ContactSection />
    </main>
  );
}