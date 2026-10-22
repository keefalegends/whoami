"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, MessageSquare, Minus, Square, X, CheckCircle2, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#22d3ee", "#4ade80", "#ffffff"],
      });
    } catch {
      // Fallback gracefully if confetti fails
    }
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
      name: "LinkedIn",
      handle: "keefa-youra-pambudi",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/keefa-youra-pambudi-86a513433/",
    },
    {
      name: "Instagram",
      handle: "@keef4_y",
      icon: Instagram,
      href: "https://www.instagram.com/keef4_y/",
    },
    {
      name: "Email",
      handle: "keefayoura3@gmail.com",
      icon: Mail,
      href: "mailto:keefayoura3@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-dvh flex flex-col justify-center snap-start relative py-8 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto z-10 w-full"
    >
      <div className="text-center mb-5 sm:mb-12">
        <h2 className="font-outfit font-black text-2xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
          Get in Touch
        </h2>
        <p className="font-inter text-slate-700 text-xs sm:text-sm md:text-base mt-1 max-w-xl mx-auto px-2">
          Send a message for collaboration inquiries, consulting, or project discussion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-8 items-start w-full">
        {/* Left: Message Dialog Form */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-7 rounded-2xl overflow-hidden shadow-xp-window border border-white/95 bg-white/90 backdrop-blur-md w-full"
        >
          {/* XP Messenger Title Bar */}
          <div className="bg-xp-titlebar px-3 sm:px-4 py-1.5 sm:py-2.5 flex items-center justify-between select-none gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-4 h-4 rounded-full bg-sky-200/30 flex items-center justify-center text-white ring-1 ring-white/40 flex-shrink-0">
                <MessageSquare className="w-2.5 h-2.5" />
              </div>
              <span className="font-outfit font-bold text-xs text-white truncate drop-shadow">
                New Message
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white shadow-inner">
                <Minus className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
              </div>
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] bg-gradient-to-b from-sky-400 to-sky-600 border border-sky-200/50 flex items-center justify-center text-white shadow-inner">
                <Square className="w-1.5 sm:w-2 h-1.5 sm:h-2" />
              </div>
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] bg-gradient-to-b from-red-400 to-red-600 border border-red-300/60 flex items-center justify-center text-white shadow-inner">
                <X className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-3 sm:p-6 space-y-2.5 sm:space-y-4">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 sm:py-10 text-center space-y-2 sm:space-y-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-outfit font-black text-base sm:text-xl text-slate-900">
                  Message Sent
                </h3>
                <p className="text-xs sm:text-sm font-inter text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to your message shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="name-input" className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5 sm:mb-1">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner min-h-[36px] sm:min-h-[42px]"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5 sm:mb-1">
                    Your Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner min-h-[36px] sm:min-h-[42px]"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-0.5 sm:mb-1">
                    Message
                  </label>
                  <textarea
                    id="message-input"
                    required
                    rows={3}
                    placeholder="Hello Keefa, let's discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 shadow-inner resize-none min-h-[64px] sm:min-h-[90px]"
                  />
                </div>

                <div className="pt-0.5 sm:pt-1">
                  <button
                    type="submit"
                    className="w-full py-2 sm:py-3 px-4 rounded-lg bg-gradient-to-b from-sky-500 to-sky-700 text-white font-bold text-xs sm:text-sm shadow-md hover:from-sky-400 hover:to-sky-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2 min-h-[38px] sm:min-h-[44px]"
                  >
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
          className="md:col-span-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 p-3.5 sm:p-6 shadow-aero-card space-y-2.5 sm:space-y-4 w-full"
        >
          <div>
            <h3 className="font-outfit font-black text-base sm:text-xl text-slate-900 mb-0.5 sm:mb-2">
              Direct Channels
            </h3>
            <p className="font-inter text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed">
              If you prefer reaching out directly or inspecting my repositories, you can connect through these platforms.
            </p>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            {socials.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-colors group min-h-[38px] sm:min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-xs sm:text-sm text-slate-800">
                        {soc.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-mono text-slate-500">
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

      {/* Grounded Windows XP Taskbar Footer */}
      <div className="mt-5 sm:mt-10 w-full">
        <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-xp-titlebar border border-white/50 shadow-xp-window px-4 py-2 sm:px-6 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-white select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="font-outfit font-bold text-xs sm:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              Keefa Youra Pambudi &copy; 2026
            </p>
          </div>
          <p className="text-[11px] sm:text-xs text-sky-100 font-inter drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] text-center sm:text-right">
            Crafted with Next.js, Tailwind CSS &amp; Frutiger Aero Aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
}
