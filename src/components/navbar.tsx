"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile dropdown on outside click or Escape key
  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMobile]);

  // Initialize responsive state on mount
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, start open; on mobile, start closed to keep the screen clear!
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll and slide events management (Rock-solid anti-flicker buffer)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // 70px buffer deadzone: only close if scrolling down past 70px
      if (currentY > 70 && currentY > lastScrollY + 10) {
        setIsOpen(false);
      } else if (currentY <= 10 && window.innerWidth >= 768) {
        // Automatically reopen only when completely back at the top on desktop
        setIsOpen(true);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ============================================================== */}
      {/* MOBILE PERSISTENT CORNER LOGO (Screen < md)                    */}
      {/* Ensures brand is always visible without covering the screen     */}
      {/* ============================================================== */}
      <div className="md:hidden fixed top-4 left-4 z-50 pointer-events-auto">
        <a
          href="#home"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm active:scale-95 transition-all"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-600 flex items-center justify-center text-white shadow-sm ring-1 ring-white/80">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-outfit font-black text-sm tracking-tight text-slate-800">
            Keefa.
          </span>
        </a>
      </div>

      {/* ============================================================== */}
      {/* EXPANDING / COLLAPSING CAPSULE (Anchored to the Top-Right)      */}
      {/* Closes TO THE RIGHT into the 3-line button; expands to left    */}
      {/* ============================================================== */}
      <header className="fixed top-4 right-4 sm:right-6 md:right-8 z-50 flex items-center justify-end pointer-events-auto">
        <div ref={navRef} className="relative flex items-center justify-end">
          {/* Main Expanding Capsule */}
          <motion.nav
            layout
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={`rounded-full flex items-center transition-all ${
              scrolled
                ? "bg-white/90 backdrop-blur-xl border border-white/95 shadow-aero-card"
                : "bg-white/80 backdrop-blur-md border border-white/85 shadow-aero-glass"
            } ${isOpen && !isMobile ? "p-1.5" : "p-1"}`}
          >
            {/* Desktop Expanded Content (Slides and collapses into 3-lines on the right) */}
            <AnimatePresence initial={false}>
              {isOpen && !isMobile && (
                <motion.div
                  key="desktop-nav-content"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden flex items-center origin-right"
                >
                  {/* Brand Logo inside desktop capsule */}
                  <a
                    href="#home"
                    className="flex items-center gap-2 pl-3 pr-4 group whitespace-nowrap"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-600 flex items-center justify-center text-white shadow-sm ring-1 ring-white/80">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-outfit font-black text-base tracking-tight text-slate-800">
                      Keefa.
                    </span>
                  </a>

                  {/* Horizontal Navigation Links */}
                  <div className="flex items-center gap-1 pr-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          if (link.href !== "#home") setIsOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-700 hover:text-sky-800 hover:bg-sky-50/80 transition-colors whitespace-nowrap"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The 3 Horizontal Lines Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-sky-700 border border-slate-200/80 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center flex-shrink-0 group"
              title={isOpen ? "Tutup Navbar" : "Buka Navbar (3 Garis Horizontal)"}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <Menu className="w-4 h-4 text-slate-700 group-hover:text-sky-600 transition-colors" />
            </button>
          </motion.nav>

          {/* ========================================================== */}
          {/* MOBILE COMPACT DROPDOWN MENU (Anchored directly to 3-lines) */}
          {/* Unfolds down-left from 3-lines button; folds back into it    */}
          {/* ========================================================== */}
          <AnimatePresence>
            {isOpen && isMobile && (
              <motion.div
                key="mobile-nav-dropdown"
                initial={{ opacity: 0, scale: 0.7, x: 20, y: -15 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: 20, y: -15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden absolute top-14 right-0 w-52 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/95 shadow-2xl p-2.5 flex flex-col gap-1 origin-top-right z-50"
              >
                <div className="px-3 py-1.5 mb-1 border-b border-slate-100/90 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Navigation</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:translate-x-0.5 group-hover:text-sky-600 transition-all">
                      →
                    </span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
