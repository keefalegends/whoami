"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, MessageSquare, Minus, Square, X, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

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
      particleCount: 60,
      spread: 50,
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
      name: "GitHub",
      handle: "@keefalegends",
      icon: Github,
      href: "https://github.com/keefalegends",
    },
    {
      name: "Email",
      handle: "contact@keefa.dev",
      icon: Mail,
      href: "mailto:contact@keefa.dev",
    },
  ];

  return (
    <section id="contact" className="relative py-16 px-4 max-w-5xl mx-auto z-10">
      <div className="text-center mb-12">
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-slate-900 tracking-tight">
          Get in Touch
        </h2>
        <p className="font-inter text-slate-700 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Send a message for collaboration inquiries, consulting, or project discussion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Message Dialog Form */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-7 rounded-2xl overflow-hidden shadow-xp-window border border-white/90 bg-white/90 backdrop-blur-md"
        >
          {/* XP Messenger Title Bar */}
          <div className="bg-xp-titlebar px-4 py-2.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-sky-200/30 flex items-center justify-center text-white ring-1 ring-white/40">
                <MessageSquare className="w-2.5 h-2.5" />
              </div>
              <span className="font-outfit font-bold text-xs text-white drop-shadow">
                New Message
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-black text-xl text-slate-900">
                  Message Sent
                </h3>
                <p className="text-sm font-inter text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to your message shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    placeholder="Hello Keefa, let's discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-b from-sky-500 to-sky-700 text-white font-bold text-sm shadow-md hover:from-sky-400 hover:to-sky-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </motion.div>

        {/* Right: Direct Channels */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 p-6 shadow-aero-card space-y-5"
        >
          <div>
            <h3 className="font-outfit font-black text-xl text-slate-900 mb-2">
              Direct Channels
            </h3>
            <p className="font-inter text-sm text-slate-600 leading-relaxed">
              If you prefer reaching out directly or inspecting my repositories, you can connect through these platforms.
            </p>
          </div>

          <div className="space-y-2.5">
            {socials.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-sm text-slate-800">
                        {soc.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-500">
                        {soc.handle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-700 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}