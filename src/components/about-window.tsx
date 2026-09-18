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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 text-center bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-aero-glass"
          >
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Window &quot;About Me&quot; was closed.
            </p>
            <button
              onClick={() => setClosed(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-bold shadow-md hover:bg-sky-500 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reopen About Window
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/80 backdrop-blur-xl transition-all duration-300"
          >
            {/* Windows XP / Vista Aero Title Bar */}
            <div className="bg-xp-titlebar px-4 py-2.5 flex items-center justify-between select-none shadow-sm">
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
                  {/* Avatar / OS Badge */}
                  <div className="relative group mx-auto md:mx-0 flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[3px] shadow-lg">
                      <div className="w-full h-full rounded-2xl bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-sky-800 p-2">
                        <Terminal className="w-10 h-10 text-sky-600 mb-1 animate-pulse" />
                        <span className="font-outfit font-black text-xs tracking-wider uppercase text-slate-800">
                          USER: KEEFA
                        </span>
                      </div>
                    </div>
                    {/* Shiny Orb Accents */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow" />
                  </div>

                  {/* Body Text */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h2 className="font-outfit font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
                        Keefa Youra Pambudi
                      </h2>
                      <p className="text-xs md:text-sm font-semibold text-cyan-700 mt-0.5">
                        System Architect · Automation Enthusiast
                      </p>
                    </div>

                    <p className="font-inter text-sm md:text-base text-slate-700 leading-relaxed">
                      I am a full-stack developer based in beautiful Indonesia. My journey with coding began with curiosity about automation and customized systems, which quickly escalated into a deep passion for Linux environments, scalable web apps, and DevOps workflows.
                    </p>

                    <p className="font-inter text-sm md:text-base text-slate-700 leading-relaxed">
                      Whether deploying containerized applications on AWS, structuring database schemas, or customizing my window managers, I focus on clean code and reliable infrastructure.
                    </p>

                    {/* Chips / Highlights */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-sky-800 text-xs font-bold shadow-sm">
                        <Terminal className="w-3.5 h-3.5 text-sky-600" />
                        Linux Enthusiast
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-800 text-xs font-bold shadow-sm">
                        <Cloud className="w-3.5 h-3.5 text-cyan-600" />
                        Cloud Architect
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-sm">
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
