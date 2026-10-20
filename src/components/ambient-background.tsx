export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Aquatic Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff] via-[#e6f4fe] to-[#cbe9fd]" />

      {/* Subtle Depth Accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-gradient-to-bl from-cyan-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[40vh] bg-gradient-to-tr from-sky-200/30 to-transparent blur-3xl" />
    </div>
  );
}