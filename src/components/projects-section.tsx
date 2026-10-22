"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Minus,
  Square,
  X,
  Compass,
  ChevronLeft,
  ChevronRight,
  Lock,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

interface Project {
  titleBar: string;
  displayUrl: string;
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  demoUrl?: string;
  isPrivate: boolean;
  badge: string;
  accentColor: string;
}

const REAL_PROJECTS: Project[] = [
  {
    titleBar: "Internet Explorer - Hikmah 2 Gold POS",
    displayUrl: "pos.hikmah-gold.internal",
    name: "Hikmah 2 Gold POS & Buyback",
    shortName: "Hikmah Gold",
    description:
      "A freelance Point of Sale and inventory management platform for Toko Perhiasan Mas Hikmah 2. Features live gold buyback price calculations, multi-branch stock tracking, and thermal receipt printing.",
    tags: ["Laravel", "PHP", "MySQL", "POS & Nota", "REST API"],
    images: ["/projects/hikmah-gold1.png", "/projects/hikmah-gold2.png"],
    githubUrl: "https://github.com/keefalegends/HIKMAH-2-Perhiasan-Emas",
    isPrivate: true,
    badge: "Private Client Project",
    accentColor: "from-amber-400 to-yellow-600",
  },
  {
    titleBar: "Internet Explorer - UangGwa Cash Tracker",
    displayUrl: "uang-gwa.vercel.app",
    name: "UangGwa",
    shortName: "UangGwa",
    description:
      "A modern personal finance & cash flow tracking web application. Engineered with multi-user authentication, Supabase cloud database syncing, Prisma ORM, and offline PWA service worker caching.",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase PostgreSQL", "Tailwind CSS"],
    images: ["/projects/uang-gwa1.png", "/projects/uang-gwa2.png"],
    githubUrl: "https://github.com/keefalegends/UangGwa",
    demoUrl: "https://uang-gwa.vercel.app",
    isPrivate: true,
    badge: "Production PWA",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    titleBar: "Internet Explorer - KeeType Typing Arena",
    displayUrl: "keetype.my.id",
    name: "KeeType",
    shortName: "KeeType",
    description:
      "A hyper-minimalist, distraction-free typing speed test platform featuring real-time multiplayer arena battles inspired by Monkeytype. Powered by Vue 3, Laravel, Docker Compose, and Caddy.",
    tags: ["Vue 3", "Laravel", "Docker Compose", "Caddy", "WebSockets"],
    images: ["/projects/keetype1.png", "/projects/keetype2.png"],
    githubUrl: "https://github.com/keefalegends/KeeType",
    demoUrl: "https://keetype.my.id",
    isPrivate: false,
    badge: "Open Source & Live",
    accentColor: "from-sky-500 to-blue-600",
  },
  {
    titleBar: "Internet Explorer - SpotKafe Discovery",
    displayUrl: "spotcafe.bagusarya.me",
    name: "SpotKafe",
    shortName: "SpotKafe",
    description:
      "An interactive cafe discovery platform built in collaboration with PT Desnet. Features Google Maps-style geospatial exploration, cafe business claiming workflows, and curated editorial articles.",
    tags: ["Fullstack Web", "Docker", "Interactive Maps", "MySQL", "Media Engine"],
    images: ["/projects/spotkafe1.png", "/projects/spotkafe2.png"],
    githubUrl: "https://github.com/Botakciter17/Spotcafe",
    demoUrl: "https://spotcafe.bagusarya.me",
    isPrivate: true,
    badge: "Collaboration PT Desnet",
    accentColor: "from-indigo-500 to-purple-600",
  },
];

// Single Modular Project Card (Manages its own 2-image switcher and zoom)
function ProjectCard({ project }: { project: Project }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-xp-window border border-white/95 bg-white/95 backdrop-blur-md flex flex-col justify-between w-full transition-all hover:shadow-2xl">
        {/* IE Classic Title Bar */}
        <div>
          <div className="bg-xp-titlebar px-3 sm:px-4 py-2 flex items-center justify-between select-none gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-4 h-4 rounded-full bg-blue-300/30 flex items-center justify-center text-white ring-1 ring-white/40 flex-shrink-0">
                <Compass className="w-2.5 h-2.5" />
              </div>
              <span className="font-outfit font-bold text-xs text-white truncate drop-shadow">
                {project.titleBar}
              </span>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="w-3.5 h-3.5 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white">
                <Minus className="w-2 h-2" />
              </div>
              <div className="w-3.5 h-3.5 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white">
                <Square className="w-1.5 h-1.5" />
              </div>
              <div className="w-3.5 h-3.5 rounded-[3px] bg-gradient-to-b from-red-400 to-red-600 border border-red-300/60 flex items-center justify-center text-white">
                <X className="w-2 h-2" />
              </div>
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="bg-[#ece9d8]/90 border-b border-[#a6a495]/40 px-3 py-1.5 flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight flex-shrink-0">
              Address:
            </span>
            <div className="flex-1 min-w-0 bg-white rounded-[4px] border border-slate-300 px-2 py-0.5 flex items-center gap-1.5 shadow-inner overflow-hidden">
              <Globe className="w-3 h-3 text-sky-700 flex-shrink-0" />
              <span className="text-[11px] font-mono text-slate-800 truncate">
                {project.displayUrl}
              </span>
            </div>
          </div>

          {/* ========================================================== */}
          {/* BROWSER VIEWPORT: REAL 2-IMAGE CAROUSEL                    */}
          {/* ========================================================== */}
          <div
            onClick={() => setIsZoomed(true)}
            className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-200 cursor-pointer group select-none"
            title="Click to view full image"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full"
              >
                <Image
                  src={project.images[activeImgIdx]}
                  alt={`${project.name} preview ${activeImgIdx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Hover Glare & Zoom Pill */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg backdrop-blur-md">
                <Maximize2 className="w-3 h-3" />
                <span>Zoom Photo</span>
              </span>
            </div>

            {/* Prev / Next Chevrons on Hover */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md active:scale-95 z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md active:scale-95 z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Photo 1 / 2 Dots Indicator */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md"
            >
              <button
                onClick={() => setActiveImgIdx(0)}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                  activeImgIdx === 0
                    ? "bg-sky-500 text-white scale-110"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                1
              </button>
              <span className="text-slate-500 text-[10px]">•</span>
              <button
                onClick={() => setActiveImgIdx(1)}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                  activeImgIdx === 1
                    ? "bg-sky-500 text-white scale-110"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                2
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-3.5 sm:p-5">
            <div className="flex items-start justify-between gap-2.5 mb-1.5">
              <h3 className="font-outfit font-black text-base sm:text-lg text-slate-900 leading-tight">
                {project.name}
              </h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-bold whitespace-nowrap flex-shrink-0">
                {project.badge}
              </span>
            </div>

            <p className="font-inter text-xs text-slate-700 leading-relaxed mb-3">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-3 bg-slate-50/90 border-t border-slate-200 flex flex-row items-center justify-between gap-2">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold hover:brightness-110 transition-all shadow-sm flex-1 min-h-[36px]"
            >
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Visit Live App</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200/80">
              <Lock className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span>{project.badge}</span>
            </div>
          )}

          {!project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors shadow-sm min-h-[36px]"
            >
              <Github className="w-3.5 h-3.5 flex-shrink-0" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="text-[11px] text-slate-400 font-mono pr-2">
              Private Code
            </span>
          )}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900"
            >
              {/* Modal Bar */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between text-white border-b border-white/10">
                <span className="text-xs font-bold font-outfit truncate">
                  {project.name} &bull; Photo {activeImgIdx + 1} of 2
                </span>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.images[activeImgIdx]}
                  alt={`${project.name} enlarged`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="p-3 bg-slate-800 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveImgIdx(0)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      activeImgIdx === 0
                        ? "bg-sky-500 text-white"
                        : "bg-slate-700 text-slate-300 hover:text-white"
                    }`}
                  >
                    Photo 1
                  </button>
                  <button
                    onClick={() => setActiveImgIdx(1)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      activeImgIdx === 1
                        ? "bg-sky-500 text-white"
                        : "bg-slate-700 text-slate-300 hover:text-white"
                    }`}
                  >
                    Photo 2
                  </button>
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    <span>Visit Live URL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ProjectsSection() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  return (
    <section
      id="projects"
      className="min-h-dvh flex flex-col justify-center snap-start relative py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto z-10 w-full"
    >
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Featured Projects
        </h2>
        <p className="font-inter text-slate-700 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto px-2">
          Real-world applications, client systems, and interactive software engineered by Keefa.
        </p>
      </div>

      {/* ============================================================== */}
      {/* MOBILE-SPECIFIC PROJECT SWITCHER (Screen < 768px)               */}
      {/* 1 Project card at a time with tab navigation to keep 100dvh     */}
      {/* ============================================================== */}
      <div className="block md:hidden w-full">
        {/* Project Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 no-scrollbar justify-center">
          {REAL_PROJECTS.map((proj, idx) => (
            <button
              key={proj.name}
              onClick={() => setActiveMobileIdx(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 ${
                activeMobileIdx === idx
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105"
                  : "bg-white/80 text-slate-700 border border-slate-200/80 hover:bg-white"
              }`}
            >
              {proj.shortName}
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={REAL_PROJECTS[activeMobileIdx].name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <ProjectCard project={REAL_PROJECTS[activeMobileIdx]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP 2x2 GRID (Screen >= 768px)                             */}
      {/* All 4 projects displayed simultaneously in classic IE frames    */}
      {/* ============================================================== */}
      <div className="hidden md:grid md:grid-cols-2 gap-5 sm:gap-6 w-full">
        {REAL_PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="w-full"
          >
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
