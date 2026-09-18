"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] opacity-90" />

      {/* Ambient Orb 1 - Green (Eco/Nature Aero) */}
      <motion.div
        className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient Orb 2 - Cyan (Water Glow) */}
      <motion.div
        className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-cyan-400/25 blur-[140px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient Orb 3 - Blue (Sky Glow) */}
      <motion.div
        className="absolute top-[75%] left-[20%] w-[550px] h-[550px] rounded-full bg-sky-500/20 blur-[130px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative Floating Water Bubbles */}
      <motion.div
        className="absolute top-[18%] left-[8%] w-16 h-16 rounded-full bubble-shine hidden md:block"
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[32%] right-[12%] w-24 h-24 rounded-full bubble-shine hidden md:block"
        animate={{ y: [0, -35, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-12 h-12 rounded-full bubble-shine hidden md:block"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[82%] right-[8%] w-20 h-20 rounded-full bubble-shine hidden md:block"
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
