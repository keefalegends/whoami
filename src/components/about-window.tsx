"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Minus, Square, X, MapPin, Cloud, Terminal, RotateCcw } from "lucide-react";

export function AboutWindow() {
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);

  return (
    <section id="about" className="relative py-12 px-4 max-w-4xl mx-auto z-10">
      <AnimatePresence mode="wait">
        {closed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 text-center bg-white/80 backdrop-blur-md rounded-2xl border border-white/90 shadow-aero-glass"
          >
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Window &quot;About Me&quot; was closed.
            </p>
            <button
              onClick={() => setClosed(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-bold shadow-md hover:bg-sky-500 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reopen Window
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/90 backdrop-blur-xl transition-all duration-300"
          >
            {/* Windows XP Aero Title Bar */}
            <div className="bg-xp-titlebar px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-300/30 flex items-center justify-center text-white ring-1 ring-white/50">
                  <User className="w-3 h-3 drop-shadow" />
                </div>
                <span className="font-outfit font-bold text-sm tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  About Me - Keefa&apos;s Profile
                </span>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setMinimized(!minimized)}
                  className="w-6 h-5 rounded-[4px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white text-xs font-bold hover:brightness-110 active:brightness-90 transition-all shadow-inner"
                  title="Minimize"
                  aria-label="Minimize"
                >
                  <Minus className="w-3 h-3" />
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
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            {!minimized && (
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* User Profile Badge */}
                  <div className="relative group mx-auto md:mx-0 flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[3px] shadow-md">
                      <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center text-sky-800 p-2">
                        <Terminal className="w-10 h-10 text-sky-600 mb-1" />
                        <span className="font-outfit font-black text-xs tracking-wider uppercase text-slate-800">
                          KEEFA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="font-outfit font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
                        Keefa Youra Pambudi
                      </h2>
                      <p className="text-xs md:text-sm font-semibold text-slate-600 mt-0.5">
                        Software Engineer &amp; Infrastructure Developer
                      </p>
                    </div>

                    <p className="font-inter text-sm md:text-base text-slate-700 leading-relaxed">
                      I build web applications, cloud infrastructure, and automation workflows. Based in Indonesia, I spend most of my time working in Linux terminal environments, configuring Docker containers, and writing code with Next.js, TypeScript, and Go.
                    </p>

                    <p className="font-inter text-sm md:text-base text-slate-700 leading-relaxed">
                      Whether deploying services on cloud instances, designing relational databases, or scripting reproducible developer environments, I prioritize clean architecture, stability, and speed.
                    </p>

                    {/* Factual Highlights */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
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
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}