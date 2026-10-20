"use client";

import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import { GlossyButton } from "./glossy-button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-dvh flex flex-col justify-center items-center text-center snap-start relative pt-20 pb-12 px-4 sm:px-6 max-w-4xl mx-auto z-10 w-full"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-outfit font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 drop-shadow-sm"
      >
        Hey, I&apos;m{" "}
        <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
          Keefa.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-outfit font-bold text-base sm:text-xl md:text-2xl text-sky-950 mt-3 sm:mt-4 max-w-2xl px-1"
      >
        Full-stack developer building scalable web apps, cloud infrastructure, and Linux systems.
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-inter text-xs sm:text-base md:text-lg text-slate-700 mt-3 sm:mt-5 max-w-2xl leading-relaxed px-1"
      >
        Based in Indonesia. I work with Next.js, Go, Docker, and Kubernetes, combining modern cloud engineering with the nostalgic clarity of classic Web 2.0 aesthetics.
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none mt-6 sm:mt-8"
      >
        <GlossyButton variant="primary" size="md" href="#projects" className="w-full sm:w-auto">
          <FolderGit2 className="w-4 h-4 flex-shrink-0" />
          <span>View Projects</span>
        </GlossyButton>

        <GlossyButton variant="secondary" size="md" href="#contact" className="w-full sm:w-auto">
          <Mail className="w-4 h-4 text-sky-700 flex-shrink-0" />
          <span>Get in Touch</span>
        </GlossyButton>
      </motion.div>
    </section>
  );
}