"use client";

import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import { GlossyButton } from "./glossy-button";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-4 flex flex-col items-center text-center max-w-4xl mx-auto z-10">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-outfit font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 drop-shadow-sm"
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
        className="font-outfit font-bold text-xl sm:text-2xl md:text-3xl text-sky-900 mt-4 max-w-2xl"
      >
        Full-stack developer building scalable web apps, cloud infrastructure, and Linux systems.
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-inter text-base sm:text-lg text-slate-700 mt-5 max-w-2xl leading-relaxed"
      >
        Based in Indonesia. I work with Next.js, Go, Docker, and Kubernetes, combining modern cloud engineering with the nostalgic clarity of classic Web 2.0 aesthetics.
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <GlossyButton variant="primary" size="lg" href="#projects">
          <FolderGit2 className="w-4 h-4" />
          <span>View Projects</span>
        </GlossyButton>

        <GlossyButton variant="secondary" size="lg" href="#contact">
          <Mail className="w-4 h-4 text-sky-700" />
          <span>Get in Touch</span>
        </GlossyButton>
      </motion.div>
    </section>
  );
}