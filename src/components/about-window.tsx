"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Minus, Square, X, MapPin, Cloud, Terminal, RotateCcw, Code2, Server } from "lucide-react";

export function AboutWindow() {
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);

  return (
    <section
      id="about"
      className="min-h-dvh flex flex-col justify-center snap-start relative py-8 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto z-10 w-full"
    >
      {/* ============================================================== */}
      {/* MOBILE-FIRST MODERN AERO VIEW (visible on mobile < 640px)      */}
      {/* Clean, spacious, native-feeling, NO forced desktop titlebars   */}
      {/* ============================================================== */}
      <div className="block sm:hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/95 p-6 shadow-aero-card flex flex-col gap-5 w-full"
        >
          {/* Eyebrow / Category Tag */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200/90 text-sky-900 font-outfit font-black text-[11px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              About Keefa
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 font-inter">
              <MapPin className="w-3 h-3 text-emerald-600" />
              Indonesia
            </span>
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400 p-[2px] shadow-sm flex-shrink-0">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-sky-700">
                <Terminal className="w-7 h-7 text-sky-600" />
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="font-outfit font-black text-xl text-slate-900 tracking-tight leading-tight">
                Keefa Youra Pambudi
              </h2>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Software &amp; Cloud Engineer
              </p>
            </div>
          </div>

          {/* Spacious Bio Paragraph */}
          <p className="font-inter text-sm text-slate-700 leading-relaxed">
            I engineer web applications, cloud infrastructure, and automation workflows. Based in Indonesia, working primarily with Linux terminal environments, Docker containers, Next.js, and Go.
          </p>

          {/* Core Competencies Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200/80 text-sky-900 text-xs font-semibold">
              <Code2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
              Web Apps (Next.js &amp; Go)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 border border-cyan-200/80 text-cyan-900 text-xs font-semibold">
              <Server className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
              Cloud &amp; DevOps (Docker, K8s)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
              Arch Linux Systems
            </span>
          </div>

          {/* Clean Philosophy Footer */}
          <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-inter">
            <span>Engineering ethos</span>
            <span className="font-bold text-sky-900">Clean architecture &amp; speed</span>
          </div>
        </motion.div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP/TABLET RETRO XP WINDOW (visible on screens >= 640px)   */}
      {/* Authentic classic window frame with min/max/close controls     */}
      {/* ============================================================== */}
      <div className="hidden sm:block w-full">
        <AnimatePresence mode="wait">
          {closed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 text-center bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-aero-glass"
            >
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Window &quot;About Me&quot; was closed.
              </p>
              <button
                onClick={() => setClosed(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-bold shadow-md hover:bg-sky-500 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reopen Window</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xp-window border border-white/95 bg-white/90 backdrop-blur-xl transition-all duration-300 w-full"
            >
              {/* Windows XP Aero Title Bar */}
              <div className="bg-xp-titlebar px-4 py-2.5 flex items-center justify-between select-none gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-5 h-5 rounded-full bg-sky-300/30 flex items-center justify-center text-white ring-1 ring-white/50 flex-shrink-0">
                    <User className="w-3 h-3 drop-shadow" />
                  </div>
                  <span className="font-outfit font-bold text-sm tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] truncate">
                    About Me - Keefa&apos;s Profile
                  </span>
                </div>

                {/* Window Controls */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => setMinimized(!minimized)}
                    className="w-6 h-5 rounded-[4px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white text-xs font-bold hover:brightness-110 active:brightness-90 transition-all shadow-inner"
                    title="Minimize"
                    aria-label="Minimize"
                  >
                    <Minus className="w-2.5 h-2.5" />
                  </button>
                  <button
                    onClick={() => setMinimized(false)}
                    className="w-6 h-5 rounded-[4px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white text-xs font-bold hover:brightness-110 active:brightness-90 transition-all shadow-inner"
                    title="Maximize"
                    aria-label="Maximize"
                  >
                    <Square className="w-2.5 h-2.5" />
                  </button>
                  <button
                    onClick={() => setClosed(true)}
                    className="w-6 h-5 rounded-[4px] bg-gradient-to-b from-red-400 to-red-600 border border-red-300/60 flex items-center justify-center text-white text-xs font-bold hover:brightness-110 active:brightness-90 transition-all shadow-inner"
                    title="Close"
                    aria-label="Close"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>

              {/* Window Content */}
              {!minimized && (
                <div className="p-6 md:p-8">
                  {/* Header Profile Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[2px] shadow-sm flex-shrink-0">
                      <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center text-sky-800 p-1">
                        <Terminal className="w-8 h-8 text-sky-600" />
                        <span className="font-outfit font-black text-[11px] tracking-wider uppercase text-slate-800">
                          KEEFA
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-outfit font-black text-2xl md:text-3xl text-slate-900 tracking-tight truncate">
                        Keefa Youra Pambudi
                      </h2>
                      <p className="text-sm font-semibold text-slate-600 mt-0.5">
                        Software Engineer &amp; Infrastructure Developer
                      </p>
                    </div>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-3.5 text-slate-700 font-inter text-sm md:text-base leading-relaxed">
                    <p>
                      I build web applications, cloud infrastructure, and automation workflows. Based in Indonesia, I spend most of my time working in Linux terminal environments, configuring Docker containers, and writing code with Next.js, TypeScript, and Go.
                    </p>
                    <p>
                      Whether deploying services on cloud instances, designing relational databases, or scripting reproducible developer environments, I prioritize clean architecture, stability, and speed.
                    </p>
                  </div>

                  {/* Factual Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-sky-600" />
                      Arch Linux &amp; Tiling WMs
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                      <Cloud className="w-3.5 h-3.5 text-cyan-600" />
                      Cloud &amp; DevOps
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      Indonesia
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}