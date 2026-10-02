import { site } from "@/lib/site";
import ReasonList from "./reason-list";

const { partnerships } = site;

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnerships-title"
      className="scroll-mt-16 border-t border-bone/10"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 lg:px-10 lg:py-32 xl:grid-cols-[5fr_7fr] xl:gap-20">
        <div className="xl:sticky xl:top-32 xl:self-start">
          <p className="font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
            SC.03 · Partnerships
          </p>
          <h2
            id="partnerships-title"
            className="mt-4 font-display text-[clamp(3rem,5.5vw,5rem)] leading-[0.88] font-black uppercase"
          >
            Why brands
            <br />
            <span className="text-rec">work with me.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-bone/70 md:text-lg">
            {partnerships.intro}
          </p>
          <a
            href={partnerships.cta.href}
            className="group mt-10 inline-flex items-center gap-3 bg-bone px-8 py-4 font-display text-lg font-bold tracking-wide text-ink uppercase transition-colors hover:bg-rec hover:text-bone"
          >
            {partnerships.cta.label}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <ReasonList />
      </div>
    </section>
  );
}
