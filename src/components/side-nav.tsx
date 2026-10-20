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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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