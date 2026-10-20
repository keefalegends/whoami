"use client";

import { motion } from "framer-motion";
import { Terminal, Cloud, Code2, Layers } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      year: "2019",
      title: "First Steps in Web Development",
      description:
        "Started learning HTML, CSS, and basic JavaScript. Built offline helper utilities and discovered a lasting interest in programming.",
      icon: Code2,
      color: "from-sky-500 to-blue-600",
    },
    {
      year: "2021",
      title: "Switching to Linux & Terminal Workflows",
      description:
        "Moved primary developer workstation to Linux (Ubuntu and later Arch Linux). Began automating daily tasks with shell scripts and customizing tiling window managers.",
      icon: Terminal,
      color: "from-cyan-500 to-teal-600",
    },
    {
      year: "2023",
      title: "Cloud Infrastructure & Containerization",
      description:
        "Focused on backend engineering, Docker containerization, and cloud infrastructure management with Kubernetes and AWS.",
      icon: Cloud,
      color: "from-blue-600 to-indigo-600",
    },
    {
      year: "2026",
      title: "Full-Stack Engineering & Open Source",
      description:
        "Developing production-ready web applications with Next.js and TypeScript, building developer tooling, and deploying reliable cloud-native services.",
      icon: Layers,
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section id="journey" className="relative py-16 px-4 max-w-4xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          Timeline
        </h2>
        <p className="font-inter text-slate-700 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Milestones in my engineering background and technical evolution.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-400 via-cyan-400 to-emerald-400 rounded-full" />

        <div className="space-y-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-aero-card">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-outfit font-black text-xs px-2.5 py-0.5 rounded-full bg-sky-700 text-white">
                        {step.year}
                      </span>
                    </div>

                    <h3 className="font-outfit font-black text-lg text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Node Orb on Center Line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-white p-1 shadow-md ring-2 ring-sky-300 z-20 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full bg-gradient-to-tr ${step.color} flex items-center justify-center text-white`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Symmetrical Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}