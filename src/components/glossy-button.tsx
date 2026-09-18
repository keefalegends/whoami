"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlossyButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export function GlossyButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  target,
}: GlossyButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-6 py-2.5 text-sm font-semibold gap-2",
    lg: "px-8 py-3.5 text-base font-bold gap-3",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-b from-sky-400 via-sky-600 to-sky-700 text-white shadow-glossy-btn border border-sky-300/60 hover:from-sky-300 hover:to-sky-600",
    secondary:
      "bg-gradient-to-b from-white/95 via-sky-50/90 to-sky-100/80 text-sky-900 shadow-glossy-btn-secondary border border-white/90 hover:from-white hover:to-sky-50",
    cyan:
      "bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-700 text-slate-900 shadow-glossy-btn border border-cyan-200/80 hover:from-cyan-200 hover:to-cyan-600",
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 1 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none",
        "glossy-reflection",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}
