"use client";

import { motion } from "framer-motion";
import { Milestone, Terminal, Cloud, Sparkles, Code2 } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      year: "2019",
      title: "Initialize System",
      description:
        "Wrote my very first line of HTML/CSS, creating local offline helper sites and discovering the joy of code.",
      icon: Code2,
      color: "from-sky-400 to-blue-500",
    },
    {
      year: "2021",
      title: "Kernel Swap: Switching to Linux",
      description:
        "Installed Ubuntu, starting a full-time obsession with the Unix shell, terminal automation, and custom dotfiles.",
      icon: Terminal,
      color: "from-cyan-400 to-teal-500",
    },
    {
      year: "2023",
      title: "Kubernetes & Cloud Ascent",
      description:
        "Achieved cloud certifications and began managing production cloud resources, Docker clusters, and automated CI/CD pipelines.",
      icon: Cloud,
      color: "from-blue-500 to-indigo-600",
    },
    {
      year: "2026",
      title: "Building the Future",
      description:
        "Creating optimized, beautiful open-source software with a modern architectural eye and classic computing nostalgia.",
      icon: Sparkles,
      color: "from-emerald-400 to-green-600",
    },
  ];

  return (
    <section id="journey" className="relative py-16 px-4 max-w-4xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 text-xs font-bold mb-3 shadow-sm">
          <span>⏳ System Changelog</span>
        </div>
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          My System Journey
        </h2>
        <p className="font-inter text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          The historical progression of nodes, migrations, and pivotal milestones.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Glowing Center Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-300 via-cyan-400 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-aero-card glass-specular hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-outfit font-black text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-sm">
                        {step.year}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Checkpoint 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-outfit font-black text-lg md:text-xl text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Node Orb on Center Line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-9 h-9 rounded-full bg-white p-1 shadow-lg ring-4 ring-sky-200/60 z-20 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full bg-gradient-to-tr ${step.color} flex items-center justify-center text-white`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Spacer for symmetrical layout on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
