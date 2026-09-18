"use client";

import { motion } from "framer-motion";
import { Activity, Coffee, Cpu, CheckCircle } from "lucide-react";

export function DiagnosticsBento() {
  const diagnostics = [
    {
      title: "SYSTEM LOAD",
      value: "98.4%",
      subtitle: "Uptime stabilized over 126 continuous developer sessions.",
      icon: Activity,
      gradient: "from-sky-500 to-blue-600",
      progress: 98.4,
      status: "STABLE",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "COFFEE LEVEL",
      value: "100%",
      subtitle: "Optimal operating levels, fueled by Indonesian specialty espresso.",
      icon: Coffee,
      gradient: "from-amber-500 to-orange-600",
      progress: 100,
      status: "OPTIMAL",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "OS VERSION",
      value: "Arch v2.0",
      subtitle: "Custom configured window tiling managers & automated dotfiles.",
      icon: Cpu,
      gradient: "from-cyan-500 to-teal-600",
      progress: 100,
      status: "ROLLING",
      statusColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
    },
  ];

  return (
    <section className="relative py-16 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 text-xs font-bold mb-3 shadow-sm">
          <span>📊 Hardware & Runtime Monitor</span>
        </div>
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          System Diagnostics
        </h2>
        <p className="font-inter text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Real-time metrics measuring focus, runtime availability, and workstation stability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diagnostics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-aero-card glass-specular flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-outfit font-bold text-xs tracking-wider text-slate-500 uppercase">
                    {item.title}
                  </span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-outfit font-black text-4xl lg:text-5xl text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60 mb-4 p-0.5 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                  />
                </div>

                <p className="font-inter text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Icon className="w-4 h-4 text-sky-600" />
                  <span>Telemetry Live</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
