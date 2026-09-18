"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-5xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-aero-card border border-white/90"
            : "bg-white/60 backdrop-blur-md shadow-aero-glass border border-white/70"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 flex items-center justify-center text-white shadow-sm ring-2 ring-white/80 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-outfit font-black text-lg tracking-tight bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent">
            Keefa._OS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-white/70 transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Status Pill & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            <span>Online</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/70 text-slate-700 border border-white hover:bg-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/90 z-50 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Status:</span>
              <span className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Online & Ready
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
