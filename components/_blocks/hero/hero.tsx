import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import HeroBackdrop from "./hero-backdrop";
import Viewfinder from "./viewfinder";

const { hero } = site;

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-svh items-end overflow-hidden"
    >
      <HeroBackdrop image={hero.image} video={hero.video} />
      <Viewfinder />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pt-36 pb-24 lg:px-10 lg:pb-28">
        <h1 className="font-display leading-[0.88] font-black tracking-tight uppercase">
          {hero.lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                style={{ animationDelay: `${900 + i * 140}ms` }}
                className={cn(
                  "block text-[clamp(3.75rem,13vw,11rem)] motion-safe:animate-[rise_0.9s_cubic-bezier(0.2,0.8,0.2,1)_both]",
                  i === hero.lines.length - 1 && "text-rec",
                )}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 motion-safe:animate-[fade-up_0.8s_ease-out_1.5s_both] md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-bone/75 md:text-lg">
            {hero.intro}
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-3">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-rec uppercase">
                For {hero.primary.caption}
              </span>
              <a
                href={hero.primary.href}
                className="group flex items-center justify-center gap-3 bg-bone px-8 py-4 font-display text-lg font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
              >
                {hero.primary.label}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-smoke uppercase">
                For {hero.secondary.caption}
              </span>
              <a
                href={hero.secondary.href}
                className="flex items-center justify-center border border-bone/40 px-8 py-4 font-display text-lg font-bold tracking-wide uppercase transition-colors hover:border-bone hover:bg-bone/5"
              >
                {hero.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Shutter: two black halves that split open on load. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 origin-top bg-ink motion-safe:animate-[shutter-open_1.1s_cubic-bezier(0.77,0,0.18,1)_0.2s_both] motion-reduce:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 origin-bottom bg-ink motion-safe:animate-[shutter-open_1.1s_cubic-bezier(0.77,0,0.18,1)_0.2s_both] motion-reduce:hidden"
      />
    </section>
  );
}
