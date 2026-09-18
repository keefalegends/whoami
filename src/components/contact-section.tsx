"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter, MessageSquare, Minus, Square, X, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { GlossyButton } from "./glossy-button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#22d3ee", "#4ade80", "#ffffff"],
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const socials = [
    {
      name: "Follow on GitHub",
      handle: "@keefalegends",
      icon: Github,
      href: "https://github.com/keefalegends",
      color: "hover:text-slate-900",
    },
    {
      name: "Connect on LinkedIn",
      handle: "Keefa Youra Pambudi",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Follow on Twitter",
      handle: "@keefadev",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-sky-500",
    },
    {
      name: "Direct Electronic Mail",
      handle: "contact@keefa.dev",
      icon: Mail,
      href: "mailto:contact@keefa.dev",
      color: "hover:text-emerald-600",
    },
  ];

  return (
    <section id="contact" className="relative py-16 px-4 max-w-6xl mx-auto z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white text-sky-800 text-xs font-bold mb-3 shadow-sm">
          <span>📡 Transmission Link</span>
        </div>
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          Connect Peripheral
        </h2>
        <p className="font-inter text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Dispatch inquiries, establish collaboration requests, or exchange digital signals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: System Messenger Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/85 backdrop-blur-xl"
        >
          {/* XP Messenger Title Bar */}
          <div className="bg-xp-titlebar px-4 py-2.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-sky-200/30 flex items-center justify-center text-white ring-1 ring-white/40">
                <MessageSquare className="w-2.5 h-2.5" />
              </div>
              <span className="font-outfit font-bold text-xs text-white drop-shadow">
                System Messenger - Send Message
              </span>
            </div>

            <div className="flex items-center gap-1.5">
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

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-outfit font-black text-xl text-slate-900">
                  Signal Transmitted Successfully!
                </h3>
                <p className="text-sm font-inter text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. Keefa will respond to your transmission promptly.
                </p>
              </motion.div>
            ) : (
              <>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    YOUR INTERFACE NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Keefa Youra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    ELECTRONIC EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="visitor@system.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    MESSAGE BODY
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Let's build something awesome together..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 shadow-inner resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full relative py-3 rounded-xl bg-gradient-to-b from-sky-400 via-sky-600 to-sky-700 text-white font-bold text-sm shadow-glossy-btn border border-sky-300/60 hover:from-sky-300 hover:to-sky-600 active:scale-[0.99] transition-all glossy-reflection flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>

        {/* Right Column: System Outputs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 shadow-aero-card glass-specular space-y-6"
        >
          <div>
            <h3 className="font-outfit font-black text-2xl text-slate-900 mb-2">
              System Outputs
            </h3>
            <p className="font-inter text-xs md:text-sm text-slate-600 leading-relaxed">
              Looking to upgrade your development workflow, automate standard builds, or simply swap classic memories? Ping my nodes on these active bands.
            </p>
          </div>

          <div className="space-y-3">
            {socials.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/80 border border-sky-100 hover:border-sky-300 hover:bg-sky-50/50 transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-xs md:text-sm text-slate-800">
                        {soc.name}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-500">
                        {soc.handle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200/60 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <p className="text-xs font-inter text-slate-700">
              <span className="font-bold text-emerald-800">Available for hire</span> & freelance infrastructure development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
