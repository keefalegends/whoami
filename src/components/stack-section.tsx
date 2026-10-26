"use client";

import { motion } from "framer-motion";
import { Layers, Server, Cpu, Wrench } from "lucide-react";

export function StackSection() {
  const categories = [
    {
      title: "Frontend",
      description: "Building responsive, accessible web interfaces",
      icon: Layers,
      color: "from-sky-500 to-blue-600",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Backend",
      description: "API development and database management",
      icon: Server,
      color: "from-cyan-500 to-teal-600",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "REST APIs"],
    },
    {
      title: "DevOps & Cloud",
      description: "Containerization, infrastructure, and CI/CD",
      icon: Cpu,
      color: "from-blue-600 to-indigo-600",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"],
    },
    {
      title: "Systems & Tools",
      description: "Development environment and server administration",
      icon: Wrench,
      color: "from-emerald-500 to-green-600",
      skills: ["Ubuntu", "Git & GitHub", "Nginx", "Redis", "Bash Scripting"],
    },
  ];

  return (
    <section
      id="stack"
      className="min-h-dvh flex flex-col justify-center relative py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 w-full"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Tech Stack
        </h2>
        <p className="font-inter text-slate-700 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto px-2">
          Languages, frameworks, and tools I use to build and deploy software.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 p-3.5 sm:p-5 shadow-aero-card flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-sm ring-1 ring-white/80 flex-shrink-0`}>
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
                      key={skill}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200/90 text-slate-800 text-[11px] sm:text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}