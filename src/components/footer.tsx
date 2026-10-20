export function Footer() {
  return (
    <footer className="relative z-10 py-10 px-4 text-center border-t border-sky-200/50 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-inter">
        <p className="font-semibold text-slate-700">
          Keefa Youra Pambudi &copy; 2026
        </p>
        <p className="text-slate-500">
          Crafted with Next.js, Tailwind CSS &amp; Frutiger Aero Aesthetics.
        </p>
      </div>
    </footer>
  );
}