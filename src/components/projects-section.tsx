"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Minus, Square, X, Compass } from "lucide-react";
import { GlossyButton } from "./glossy-button";

interface Project {
  titleBar: string;
  url: string;
  name: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      titleBar: "Internet Explorer - CloudDeploy",
      url: "https://clouddeploy.keefa.dev",
      name: "CloudDeploy Pipeline",
      description:
        "A customizable CI/CD tracking dashboard that visually displays docker deployments and pod scaling statuses in real-time.",
      tags: ["AWS", "Docker", "React"],
      demoUrl: "https://clouddeploy.keefa.dev",
      githubUrl: "https://github.com/keefalegends/whoami",
      accentColor: "from-sky-500 to-blue-600",
    },
    {
      titleBar: "Internet Explorer - DevBoard",
      url: "https://devboard.keefa.dev",
      name: "DevBoard Workspace",
      description:
        "A clean, nostalgic space compiling developer notes, tasks, and automated system uptime hooks into one cohesive dashboard.",
      tags: ["Next.js", "PostgreSQL", "Redis"],
      demoUrl: "https://devboard.keefa.dev",
      githubUrl: "https://github.com/keefalegends/whoami",
      accentColor: "from-cyan-500 to-teal-600",
    },
    {
      titleBar: "Internet Explorer - LinuxSetup",
      url: "https://github.com/keefa/linux-dotfiles",
      name: "LinuxSetup Automated",
      description:
        "Ansible and Go script configuration bundle for rapid automated deployment of a tailored, fast tiling-window Arch workspace.",
      tags: ["Go", "Bash", "Ansible"],
      demoUrl: "https://github.com/keefa/linux-dotfiles",
      githubUrl: "https://github.com/keefalegends/whoami",
      accentColor: "from-indigo-500 to-purple-600",
    },
    {
      titleBar: "Internet Explorer - PortfolioOS",
      url: "https://keefaos.dev",
      name: "PortfolioOS (This Site)",
      description:
        "The very portfolio you are browsing, crafted to honor the beautiful aquatic and skeuomorphic aesthetics of the Web 2.0 era.",
      tags: ["React", "Tailwind", "Vercel"],
      demoUrl: "https://keefaos.dev",
      githubUrl: "https://github.com/keefalegends/whoami",
      accentColor: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="relative py-16 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 text-xs font-bold mb-3 shadow-sm">
          <span>🗂️ Taskbar Applications</span>
        </div>
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          Active Windows
        </h2>
        <p className="font-inter text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Featured projects and production tools built with precision engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/85 backdrop-blur-xl flex flex-col justify-between"
          >
            {/* IE Classic Title Bar */}
            <div>
              <div className="bg-xp-titlebar px-4 py-2 flex items-center justify-between select-none">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-4 h-4 rounded-full bg-blue-300/30 flex items-center justify-center text-white ring-1 ring-white/40">
                    <Compass className="w-2.5 h-2.5" />
                  </div>
                  <span className="font-outfit font-bold text-xs text-white truncate drop-shadow">
                    {proj.titleBar}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-4 h-4 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white shadow-inner">
                    <Minus className="w-2.5 h-2.5" />
                  </div>
                  <div className="w-4 h-4 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white shadow-inner">
                    <Square className="w-2 h-2" />
                  </div>
                  <div className="w-4 h-4 rounded-[3px] bg-gradient-to-b from-red-400 to-red-600 border border-red-300/60 flex items-center justify-center text-white shadow-inner">
                    <X className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>

              {/* Browser Address Bar */}
              <div className="bg-[#ece9d8]/90 border-b border-[#a6a495]/40 px-3 py-1.5 flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                  Address:
                </span>
                <div className="flex-1 bg-white rounded-[4px] border border-slate-300 px-2 py-0.5 flex items-center gap-1.5 shadow-inner">
                  <Globe className="w-3 h-3 text-sky-600 flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-700 truncate select-all">
                    {proj.url}
                  </span>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-outfit font-black text-xl text-slate-900">
                    {proj.name}
                  </h3>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${proj.accentColor} shadow`} />
                </div>

                <p className="font-inter text-sm text-slate-600 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-sky-50/50 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href={proj.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-b from-sky-400 to-sky-600 text-white text-xs font-bold shadow-sm hover:from-sky-300 hover:to-sky-500 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Demo</span>
              </a>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm hover:bg-slate-50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>Source</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
