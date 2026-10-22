"use client";

import { useState, useEffect } from "react";

export function SideNav() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={`Scroll to ${sec.label}`}
            className="group relative flex items-center justify-end p-1"
          >
            {/* Tooltip */}
            <span className="absolute right-7 px-2 py-0.5 rounded-md bg-slate-800 text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm whitespace-nowrap">
              {sec.label}
            </span>

            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-gradient-to-tr from-sky-500 to-cyan-400 ring-2 ring-white shadow-md scale-110"
                  : "w-2 h-2 bg-slate-400/50 hover:bg-sky-500/80 hover:scale-125"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}