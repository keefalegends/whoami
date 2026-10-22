"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin, Observer, useGSAP);

const SECTION_IDS = ["home", "about", "stack", "projects", "contact"];

export function FullpageSlider() {
  const isAnimatingRef = useRef(false);
  const currentIndexRef = useRef(0);

  const goToSection = useCallback((index: number, landAt: "auto" | "top" = "auto") => {
    if (index < 0 || index >= SECTION_IDS.length || isAnimatingRef.current) return;

    const targetEl = document.getElementById(SECTION_IDS[index]);
    if (!targetEl) return;

    isAnimatingRef.current = true;
    const isMovingUp = index < currentIndexRef.current;
    currentIndexRef.current = index;

    // Automatically trigger smooth navbar close when sliding to any lower section
    if (typeof window !== "undefined") {
      if (index > 0) {
        window.dispatchEvent(new CustomEvent("navbar-close"));
      } else {
        window.dispatchEvent(new CustomEvent("navbar-open"));
      }
    }

    let targetY = targetEl.offsetTop;
    // If moving backwards to an overflowing section, land at its bottom so user can browse upwards
    if (
      landAt === "auto" &&
      isMovingUp &&
      targetEl.offsetHeight > window.innerHeight + 30
    ) {
      targetY = targetEl.offsetTop + targetEl.offsetHeight - window.innerHeight;
    }

    // Use GSAP ScrollToPlugin for silky smooth slide transition
    gsap.to(window, {
      duration: 0.85,
      scrollTo: { y: targetY, autoKill: false },
      ease: "power2.inOut",
      onComplete: () => {
        // Small buffer to absorb lingering momentum on high-refresh wheel/touch devices
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 120);
      },
    });
  }, []);

  useGSAP(() => {
    // Determine initial section based on window scroll or URL hash
    const hash = window.location.hash.replace("#", "");
    const initialIndex = SECTION_IDS.indexOf(hash);
    if (initialIndex !== -1) {
      currentIndexRef.current = initialIndex;
      const target = document.getElementById(SECTION_IDS[initialIndex]);
      if (target) {
        window.scrollTo(0, target.offsetTop);
      }
    } else {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentIndexRef.current = i;
            break;
          }
        }
      }
    }

    // GSAP Observer normalizes wheel and touch gestures across desktop, trackpads, and mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const obs = Observer.create({
      target: window,
      type: isMobile ? "wheel,touch" : "wheel",
      wheelSpeed: -1, // Inverts mouse wheel delta so wheel down matches touch swipe up (both call onUp)
      tolerance: isMobile ? 35 : 15,
      preventDefault: !isMobile, // Do not block native browser kinetic touch scroll on mobile
      ignore: "input, textarea, select, a, button, [role='button'], [role='dialog']",
      onUp: () => {
        // Do not scroll slides if lightbox modal is open
        if (document.querySelector(".cursor-zoom-out") || document.querySelector("[role='dialog']")) {
          return;
        }

        // Close mobile navbar dropdown if open
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("navbar-close"));
        }

        if (isAnimatingRef.current) return;

        const currentEl = document.getElementById(SECTION_IDS[currentIndexRef.current]);
        if (currentEl) {
          const rect = currentEl.getBoundingClientRect();
          // If the bottom of the current section extends below the viewport by more than 20px,
          // smoothly scroll within this section first before jumping to next section
          if (rect.bottom > window.innerHeight + 20) {
            isAnimatingRef.current = true;
            const scrollAmount = Math.min(
              rect.bottom - window.innerHeight,
              Math.max(180, window.innerHeight * 0.45)
            );
            gsap.to(window, {
              duration: 0.38,
              scrollTo: { y: window.scrollY + scrollAmount, autoKill: false },
              ease: "power1.out",
              onComplete: () => {
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 80);
              },
            });
            return;
          }
        }

        if (currentIndexRef.current < SECTION_IDS.length - 1) {
          goToSection(currentIndexRef.current + 1);
        }
      },
      onDown: () => {
        // Do not scroll slides if lightbox modal is open
        if (document.querySelector(".cursor-zoom-out") || document.querySelector("[role='dialog']")) {
          return;
        }

        if (isAnimatingRef.current) return;

        const currentEl = document.getElementById(SECTION_IDS[currentIndexRef.current]);
        if (currentEl) {
          const rect = currentEl.getBoundingClientRect();
          // If the top of the current section is scrolled above the viewport by more than 20px,
          // smoothly scroll upward within this section first
          if (rect.top < -20) {
            isAnimatingRef.current = true;
            const scrollAmount = Math.min(
              Math.abs(rect.top),
              Math.max(180, window.innerHeight * 0.45)
            );
            gsap.to(window, {
              duration: 0.38,
              scrollTo: { y: window.scrollY - scrollAmount, autoKill: false },
              ease: "power1.out",
              onComplete: () => {
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 80);
              },
            });
            return;
          }
        }

        if (currentIndexRef.current > 0) {
          goToSection(currentIndexRef.current - 1);
        }
      },
    });

    // Keyboard navigation (Arrow keys, PageUp/PageDown, Space)
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;
      if (document.querySelector(".cursor-zoom-out") || document.querySelector("[role='dialog']")) return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        const currentEl = document.getElementById(SECTION_IDS[currentIndexRef.current]);
        if (currentEl) {
          const rect = currentEl.getBoundingClientRect();
          if (rect.bottom > window.innerHeight + 20) {
            isAnimatingRef.current = true;
            const scrollAmount = Math.min(
              rect.bottom - window.innerHeight,
              Math.max(180, window.innerHeight * 0.45)
            );
            gsap.to(window, {
              duration: 0.38,
              scrollTo: { y: window.scrollY + scrollAmount, autoKill: false },
              ease: "power1.out",
              onComplete: () => {
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 80);
              },
            });
            return;
          }
        }
        if (!isAnimatingRef.current && currentIndexRef.current < SECTION_IDS.length - 1) {
          goToSection(currentIndexRef.current + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        const currentEl = document.getElementById(SECTION_IDS[currentIndexRef.current]);
        if (currentEl) {
          const rect = currentEl.getBoundingClientRect();
          if (rect.top < -20) {
            isAnimatingRef.current = true;
            const scrollAmount = Math.min(
              Math.abs(rect.top),
              Math.max(180, window.innerHeight * 0.45)
            );
            gsap.to(window, {
              duration: 0.38,
              scrollTo: { y: window.scrollY - scrollAmount, autoKill: false },
              ease: "power1.out",
              onComplete: () => {
                setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 80);
              },
            });
            return;
          }
        }
        if (!isAnimatingRef.current && currentIndexRef.current > 0) {
          goToSection(currentIndexRef.current - 1);
        }
      }
    };

    // Smoothly intercept in-page navigation clicks (Navbar, SideNav, buttons)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const id = href.slice(1);
        const idx = SECTION_IDS.indexOf(id);
        if (idx !== -1) {
          e.preventDefault();
          goToSection(idx, "top");
          window.history.pushState(null, "", href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      obs.kill();
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, [goToSection]);

  return null;
}
