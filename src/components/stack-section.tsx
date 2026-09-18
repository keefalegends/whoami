"use client";

import { motion } from "framer-motion";
import { Layers, Server, Cpu, Wrench, CheckCircle2 } from "lucide-react";

export function StackSection() {
  const categories = [
    {
      title: "Frontend",
      icon: Layers,
      color: "from-sky-400 to-blue-600",
      accentBg: "bg-sky-50 border-sky-200 text-sky-700",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-cyan-400 to-teal-600",
      accentBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
      items: ["Node.js", "Python", "Go", "PostgreSQL"],
    },
    {
      title: "DevOps",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50 border-blue-200 text-blue-700",
      items: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-emerald-400 to-green-600",
      accentBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      items: ["Git & GitHub", "Linux (Arch)", "Nginx", "Redis"],
    },
  ];

  return (
    <section id="stack" className="relative py-16 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 text-xs font-bold mb-3 shadow-sm">
          <span>⚙️ System Modules</span>
        </div>
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          My System Stack
        </h2>
        <p className="font-inter text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Production-tested technologies deployed across modern cloud architectures and developer workstations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 p-6 shadow-aero-card glass-specular flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md ring-2 ring-white/80`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-black text-lg text-slate-900">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Module 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Items List */}
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-sky-100/80 shadow-sm hover:border-sky-300 transition-colors"
                    >
                      <span className="font-inter font-semibold text-xs md:text-sm text-slate-800">
                        {item}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Gloss Accent */}
              <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Status</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
