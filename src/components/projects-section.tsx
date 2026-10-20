"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Minus, Square, X, Compass } from "lucide-react";

interface Project {
  titleBar: string;
  displayUrl: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      titleBar: "Internet Explorer - PortfolioOS",
      displayUrl: "https://github.com/keefalegends/whoami",
      name: "PortfolioOS",
      description:
        "The personal portfolio you are browsing right now. Built with Next.js 14, TypeScript, and Tailwind CSS, honoring the aquatic aesthetics of the Web 2.0 era.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/keefalegends/whoami",
      demoUrl: "#home",
      accentColor: "from-sky-500 to-blue-600",
    },
    {
      titleBar: "Internet Explorer - CloudDeploy",
      displayUrl: "github.com/keefalegends/clouddeploy",
      name: "CloudDeploy Pipeline",
      description:
        "CI/CD tracking pipeline and dashboard concept designed to monitor container builds, pod scaling, and deployment rollouts across cloud nodes.",
      tags: ["Docker", "Kubernetes", "AWS", "Go"],
      githubUrl: "https://github.com/keefalegends",
      accentColor: "from-cyan-500 to-teal-600",
    },
    {
      titleBar: "Internet Explorer - LinuxDotfiles",
      displayUrl: "github.com/keefalegends/dotfiles",
      name: "Arch Linux Automated Setup",
      description:
        "Ansible playbooks and shell scripts for rapid, reproducible configuration of an Arch Linux workstation with customized window managers and terminal tools.",
      tags: ["Arch Linux", "Bash", "Ansible", "Go"],
      githubUrl: "https://github.com/keefalegends",
      accentColor: "from-indigo-500 to-purple-600",
    },
    {
      titleBar: "Internet Explorer - DevBoard",
      displayUrl: "github.com/keefalegends/devboard",
      name: "DevBoard Workspace",
      description:
        "Personal development utility integrating quick task notes, system health hooks, and webhook notifications in one lightweight interface.",
      tags: ["React", "PostgreSQL", "Node.js", "Redis"],
      githubUrl: "https://github.com/keefalegends",
      accentColor: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="relative py-16 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-12">
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          Featured Projects
        </h2>
        <p className="font-inter text-slate-700 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Software applications, infrastructure automation, and developer tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/90 backdrop-blur-md flex flex-col justify-between"
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
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">
                  Address:
                </span>
                <div className="flex-1 bg-white rounded-[4px] border border-slate-300 px-2 py-0.5 flex items-center gap-1.5 shadow-inner">
                  <Globe className="w-3 h-3 text-sky-700 flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-800 truncate">
                    {proj.displayUrl}
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

                <p className="font-inter text-sm text-slate-700 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>

              {proj.demoUrl && (
                <a
                  href={proj.demoUrl}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sky-800 hover:text-sky-950 font-semibold text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}