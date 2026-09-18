"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Volume2, Wifi, Shield, ArrowUp, User, Layers, Send, FolderGit2 } from "lucide-react";

export function FooterTaskbar() {
  const [time, setTime] = useState("");
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStartMenuOpen(false);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      {/* Retro Start Menu Popup */}
      <AnimatePresence>
        {startMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-12 left-2 w-72 rounded-t-xl rounded-br-xl overflow-hidden shadow-2xl border-2 border-[#123eaf] bg-white/95 backdrop-blur-2xl z-50"
          >
            {/* Start Menu Header */}
            <div className="bg-xp-titlebar p-3 flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 p-1 flex items-center justify-center ring-2 ring-white/60">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-outfit font-black text-sm drop-shadow">Keefa Youra Pambudi</h4>
                <p className="text-[11px] text-sky-200">Keefa._OS Administrator</p>
              </div>
            </div>

            {/* Start Menu Items */}
            <div className="p-2 space-y-1 bg-white">
              <a
                href="#about"
                onClick={() => setStartMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-900 transition-colors"
              >
                <User className="w-4 h-4 text-sky-600" />
                <span>About System Profile</span>
              </a>
              <a
                href="#stack"
                onClick={() => setStartMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-900 transition-colors"
              >
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>Tech Stack Specifications</span>
              </a>
              <a
                href="#projects"
                onClick={() => setStartMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-900 transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-indigo-600" />
                <span>Active Project Windows</span>
              </a>
              <a
                href="#contact"
                onClick={() => setStartMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-sky-100 hover:text-sky-900 transition-colors"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Send Instant Message</span>
              </a>
            </div>

            {/* Start Menu Bottom Bar */}
            <div className="bg-[#ece9d8] p-2 border-t border-[#a6a495]/40 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-300 text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ArrowUp className="w-3 h-3 text-sky-600" />
                <span>Scroll to Top</span>
              </button>
              <span className="text-[10px] font-bold text-slate-500">v2.0 Aero</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Taskbar Bar */}
      <div className="h-11 bg-gradient-to-b from-[#2463eb] via-[#1d52d4] to-[#123eaf] border-t-2 border-[#4d84f7] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex items-center justify-between px-2 select-none">
        {/* Left: Classic Windows Style Start Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className="h-8 px-3.5 rounded-r-2xl rounded-l-md bg-gradient-to-b from-[#38bdf8] via-[#0284c7] to-[#0369a1] border border-cyan-200/60 flex items-center gap-2 text-white shadow-inner hover:brightness-110 active:brightness-95 transition-all glossy-reflection"
            title="Start"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-400 to-green-500 flex items-center justify-center shadow-sm">
              <Terminal className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="font-outfit font-black text-xs tracking-wider uppercase drop-shadow italic">
              Start
            </span>
          </button>

          {/* Copyright & Info */}
          <div className="hidden sm:flex items-center gap-2 px-3 text-white/90 text-xs font-inter drop-shadow">
            <span>© 2026 Keefa Youra Pambudi.</span>
            <span className="text-sky-300 text-[11px] hidden md:inline">
              Built with ♥ and too much nostalgia.
            </span>
          </div>
        </div>

        {/* Right: System Tray */}
        <div className="h-8 px-3 rounded-lg bg-[#0d3da3]/80 border border-[#4d84f7]/40 flex items-center gap-3 text-white text-xs font-mono shadow-inner">
          <div className="hidden sm:flex items-center gap-2 text-sky-200">
            <Volume2 className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
            <Wifi className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
            <Shield className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
          </div>

          <div className="h-4 w-[1px] bg-sky-400/40 hidden sm:block" />

          <div className="flex items-center gap-1.5 font-sans font-bold text-[11px] text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden md:inline">SYSTEM ONLINE: 100.0%</span>
          </div>

          <div className="h-4 w-[1px] bg-sky-400/40" />

          {/* Real-time Digital Clock */}
          <span className="text-white font-bold tracking-tight text-[11px]">
            {time || "12:00:00 PM"}
          </span>
        </div>
      </div>
    </footer>
  );
}
