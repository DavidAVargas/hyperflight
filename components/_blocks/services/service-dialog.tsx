"use client";
import { useEffect, useId, useRef } from "react";

type ServiceDialogProps = {
  title: string;
  tag: string;
  ctaLabel: string;
  children: React.ReactNode;
};

// Card trigger + slide-in detail panel. Uses <dialog> for focus trapping,
// Esc to close and correct screen reader semantics for free.
export default function ServiceDialog({
  title,
  tag,
  ctaLabel,
  children,
}: ServiceDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    // Click on the backdrop (outside the panel) closes it.
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-haspopup="dialog"
        className="mt-6 inline-flex items-center gap-2 font-display text-lg font-bold tracking-wide uppercase after:absolute after:inset-0 group-hover:text-rec"
      >
        {ctaLabel}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-ink p-0 text-bone backdrop:bg-ink/70 backdrop:backdrop-blur-sm open:motion-safe:animate-[panel-in_0.45s_cubic-bezier(0.2,0.8,0.2,1)] sm:w-[min(44rem,100vw)] sm:border-l sm:border-bone/15"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-bone/10 bg-ink/90 px-6 py-4 backdrop-blur-md sm:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-rec uppercase">
            ● {tag}
          </span>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="font-mono text-xs tracking-[0.25em] text-smoke uppercase hover:text-bone"
          >
            Close ✕
          </button>
        </div>

        <div className="px-6 py-10 sm:px-10">
          <h2
            id={titleId}
            className="font-display text-5xl leading-[0.9] font-black uppercase sm:text-6xl"
          >
            {title}
          </h2>
          {children}
        </div>
      </dialog>
    </>
  );
}
