"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Auto-close navbar when scrolling down past top threshold
      if (currentScrollY > lastScrollY + 10 && currentScrollY > 40) {
        setIsOpen(false);
      } else if (currentScrollY <= 15) {
        // Automatically reopen when returning to the very top (Home)
        setIsOpen(true);
      }
      lastScrollY = currentScrollY;
    };

    // Detect mousewheel scroll down
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 8) {
        setIsOpen(false);
      }
    };

    // Detect touch swipe up (which scrolls down the page)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (touchStartY - currentY > 20) {
        setIsOpen(false);
      }
    };

    // Custom events dispatched by FullpageSlider
    const handleNavbarClose = () => setIsOpen(false);
    const handleNavbarOpen = () => setIsOpen(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("navbar-close", handleNavbarClose);
    window.addEventListener("navbar-open", handleNavbarOpen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("navbar-close", handleNavbarClose);
      window.removeEventListener("navbar-open", handleNavbarOpen);
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
      {/* FLOATING 3 HORIZONTAL LINES BUTTON (Visible when Navbar Closed)*/}
      {/* Tapping/clicking this button smoothly re-opens the Navbar       */}
      {/* ============================================================== */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="floating-navbar-trigger"
            initial={{ y: -25, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -25, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsOpen(true)}
            className="fixed top-4 right-4 sm:right-6 md:right-8 z-50 p-2.5 sm:p-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/95 shadow-aero-card text-slate-800 hover:text-sky-700 hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center group pointer-events-auto"
            title="Buka Navbar (3 Garis Horizontal)"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5 text-slate-700 group-hover:text-sky-600 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* MAIN CAPSULE NAVBAR (Smooth Entrance & Exit)                   */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isOpen && (
          <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
              key="main-navbar-capsule"
              initial={{ y: -35, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -45, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-5xl rounded-3xl md:rounded-full px-4 sm:px-5 py-2.5 flex flex-col md:flex-row items-center justify-between transition-all duration-300 pointer-events-auto ${
                scrolled
                  ? "bg-white/90 backdrop-blur-xl shadow-aero-card border border-white/95"
                  : "bg-white/80 backdrop-blur-md shadow-aero-glass border border-white/85"
              }`}
            >
              {/* Row: Logo & 3 Horizontal Lines on Mobile */}
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                {/* Logo */}
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-600 flex items-center justify-center text-white shadow-sm ring-1 ring-white/80">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="font-outfit font-black text-lg tracking-tight text-slate-800">
                    Keefa.
                  </span>
                </a>

                {/* 3 Horizontal Lines Toggle Button (Mobile) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden p-2 rounded-full bg-white/80 text-slate-700 hover:text-sky-700 border border-slate-200/80 hover:bg-white transition-all shadow-sm active:scale-95 flex items-center justify-center"
                  title="Tutup Navbar"
                  aria-label="Close Navigation Menu"
                >
                  <Menu className="w-4 h-4" />
                </button>
              </div>

              {/* Desktop Navigation Links (Center) */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      if (link.href !== "#home") setIsOpen(false);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-700 hover:text-sky-800 hover:bg-sky-50/80 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Desktop 3 Horizontal Lines Button (Replaces the old 'Ready' pill) */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-sky-700 border border-slate-200/80 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center group"
                  title="Tutup Navbar (3 Garis Horizontal)"
                  aria-label="Close Navigation Menu"
                >
                  <Menu className="w-4 h-4 text-slate-700 group-hover:text-sky-600 transition-colors" />
                </button>
              </div>

              {/* Mobile Links List (Appears beneath logo row on screens < md) */}
              <div className="flex md:hidden flex-col gap-1 w-full pt-3 mt-2.5 border-t border-slate-200/60">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          </header>
        )}
      </AnimatePresence>
    </>
  );
}
