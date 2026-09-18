"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDownRight, Send, Download, Terminal } from "lucide-react";
import { GlossyButton } from "./glossy-button";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 flex flex-col items-center text-center">
      {/* Decorative Bubble Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-aero-glass mb-6"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide">
          ✨ System Online · Frutiger Aero v2.0
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-outfit font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 drop-shadow-sm max-w-4xl"
      >
        Hey, I&apos;m{" "}
        <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          Keefa.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-outfit font-bold text-lg sm:text-xl md:text-2xl text-sky-800/90 mt-4 max-w-2xl"
      >
        Full-Stack Developer · DevOps Enthusiast · Linux User
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-inter text-sm sm:text-base md:text-lg text-slate-600 mt-5 max-w-2xl leading-relaxed"
      >
        I build web applications, cloud infrastructure, and DevOps pipelines. Based in Indonesia, passionate about open source, Linux, and the crisp aesthetic of late-2000s computing.
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <GlossyButton variant="primary" size="lg" href="#projects">
          <span>Active Windows</span>
          <ArrowDownRight className="w-4 h-4" />
        </GlossyButton>

        <GlossyButton variant="secondary" size="lg" href="#contact">
          <span>Connect Peripheral</span>
          <Send className="w-4 h-4 text-sky-600" />
        </GlossyButton>
      </motion.div>
    </section>
  );
}
