"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Server, Cpu, Wrench } from "lucide-react";
import Image from "next/image";

interface SkillItem {
  name: string;
  count?: number;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: SkillItem[];
}

export function StackSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories: Category[] = [
    {
      id: "frontend",
      title: "Frontend",
      description: "Building responsive, accessible web interfaces",
      icon: Layers,
      color: "from-sky-500 to-blue-600",
      skills: [
        { name: "React", count: 1 },
        { name: "Next.js", count: 1 },
        { name: "Vue 3", count: 1 },
        { name: "TypeScript", count: 1 },
        { name: "Tailwind CSS", count: 1 },
        { name: "HTML5 & CSS3" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      description: "API development and database management",
      icon: Server,
      color: "from-cyan-500 to-teal-600",
      skills: [
        { name: "Laravel", count: 2 },
        { name: "PHP", count: 1 },
        { name: "Go" },
        { name: "Node.js" },
        { name: "PostgreSQL", count: 1 },
        { name: "REST APIs", count: 1 },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      description: "Containerization, infrastructure, and CI/CD",
      icon: Cpu,
      color: "from-blue-600 to-indigo-600",
      skills: [
        { name: "Docker", count: 2 },
        { name: "Caddy", count: 1 },
        { name: "Kubernetes" },
        { name: "AWS" },
        { name: "Terraform" },
        { name: "GitHub Actions" },
      ],
    },
    {
      id: "systems",
      title: "Systems & Tools",
      description: "Development environment and server administration",
      icon: Wrench,
      color: "from-emerald-500 to-green-600",
      skills: [
        { name: "Ubuntu" },
        { name: "Git & GitHub" },
        { name: "Nginx" },
        { name: "Redis" },
        { name: "Bash Scripting" },
      ],
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Stack" },
    { id: "frontend", label: "Frontend", count: "6" },
    { id: "backend", label: "Backend", count: "6" },
    { id: "devops", label: "DevOps", count: "6" },
    { id: "systems", label: "Systems & Tools", count: "5" },
  ];

  return (
    <section
      id="stack"
      className="min-h-dvh flex flex-col justify-center relative py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 w-full"
    >
      {/* Section Header with Animated Pixel Coffee Cup */}
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3.5 relative group">
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight flex items-center gap-2 sm:gap-3">
            <span>Tech</span>

            {/* Pixel Coffee Cup with gentle steam animation */}
            <motion.div
              animate={{ y: [0, -3.5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.15, rotate: [0, -4, 4, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative w-8 h-9 sm:w-11 sm:h-12 flex-shrink-0 cursor-pointer"
              title="Fueled by Coffee & Clean Code"
            >
              <Image
                src="/pixel-coffee.webp"
                alt="Pixel Coffee Cup"
                fill
                sizes="48px"
                className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] select-none"
                style={{ imageRendering: "pixelated" }}
                priority
              />
            </motion.div>

            <span>Stack</span>
          </h2>
        </div>

        <p className="font-inter text-slate-700 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto px-2">
          Languages, frameworks, and tools I use to build and deploy software.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-5 select-none px-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(isActive && tab.id !== "all" ? "all" : tab.id)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-gradient-to-b from-sky-400 to-sky-600 text-white shadow-[0_2px_8px_rgba(14,165,233,0.35)] border border-sky-300 scale-[1.02]"
                    : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 hover:border-sky-300"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isHighlighted = activeFilter === "all" || activeFilter === cat.id;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className={`rounded-2xl backdrop-blur-md p-3.5 sm:p-5 flex flex-col justify-between w-full transition-all duration-300 ${
                isHighlighted
                  ? "bg-white/95 border border-white/95 shadow-aero-card opacity-100 ring-2 ring-sky-400/60"
                  : "bg-white/60 border border-white/60 shadow-none opacity-40 grayscale-[35%] scale-[0.98]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-sm ring-1 ring-white/80 flex-shrink-0`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-black text-sm sm:text-base text-slate-900">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="hidden sm:block font-inter text-xs text-slate-600 mb-3.5 leading-normal">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-0">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${
                        skill.count
                          ? "bg-sky-50/90 border border-sky-300/80 text-sky-950 font-bold hover:bg-sky-100"
                          : "bg-slate-50 border border-slate-200/90 text-slate-800"
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.count && (
                        <span
                          className="px-1.5 py-0.2 rounded-full bg-sky-500/15 border border-sky-400/50 text-sky-700 text-[10px] font-mono font-bold leading-none"
                          title={`${skill.count} deployed project(s) in portfolio`}
                        >
                          {skill.count}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Counter Legend */}
      <div className="flex items-center justify-center gap-2 mt-6 text-[11px] sm:text-xs text-slate-600 font-inter text-center px-4">
        <span className="w-2 h-2 rounded-full bg-sky-500 inline-block animate-pulse flex-shrink-0" />
        <span>
          Angka <span className="font-mono font-bold text-sky-800">[n]</span> menandakan teknologi yang aktif digunakan pada proyek portofolio.
        </span>
      </div>
    </section>
  );
}
