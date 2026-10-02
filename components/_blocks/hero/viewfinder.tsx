const corner = "absolute size-6 border-bone/40";

// Camera viewfinder overlay: corner brackets, slate label and readout bar.
export default function Viewfinder() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-4 motion-safe:animate-[fade-up_0.8s_ease-out_1.4s_both] lg:inset-8"
    >
      <span className={`${corner} top-20 left-0 border-t border-l lg:top-24`} />
      <span className={`${corner} top-20 right-0 border-t border-r lg:top-24`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} right-0 bottom-0 border-r border-b`} />

      <span className="absolute top-28 right-6 hidden font-mono text-[10px] tracking-[0.3em] text-smoke uppercase md:block lg:top-32">
        SC.01 · TK.01
      </span>

      <div className="absolute inset-x-6 bottom-5 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
        <span className="hidden sm:inline">ISO 800 · 24 FPS · 1/48 · 4K</span>
        <span className="flex items-center gap-3">
          Scroll
          <span className="relative block h-6 w-px overflow-hidden bg-bone/20">
            <span className="absolute inset-x-0 top-0 h-2 bg-rec motion-safe:animate-[scroll-cue_1.6s_ease-in-out_infinite]" />
          </span>
        </span>
      </div>
    </div>
  );
}
