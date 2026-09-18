export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none relative z-10 py-6 my-4 ${flip ? "rotate-180" : ""}`}>
      <svg
        className="relative block w-full h-[40px] md:h-[60px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"
          className="fill-sky-200/40"
        />
        <path
          d="M0,20 C200,110 400,-10 600,60 C800,130 1000,20 1200,50 L1200,120 L0,120 Z"
          className="fill-white/50"
        />
      </svg>
    </div>
  );
}
