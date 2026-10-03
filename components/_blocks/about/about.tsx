import { site } from "@/lib/site";
import AboutPhotos from "./about-photos";

const { about } = site;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-16 border-t border-bone/10"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 lg:px-10 lg:py-32 xl:grid-cols-[5fr_7fr] xl:gap-20">
        {/* Desktop: photos pinned beside the story. */}
        <div className="hidden xl:sticky xl:top-28 xl:block xl:self-start">
          <AboutPhotos />
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
            SC.04 · About
          </p>
          <h2
            id="about-title"
            className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.88] font-black uppercase"
          >
            {about.headline[0]}
            <br />
            <span className="text-rec">{about.headline[1]}</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl">
            {about.intro}
          </p>

          {/* Mobile/tablet: photos right after the intro, before the chapters. */}
          <div className="mt-10 xl:hidden">
            <AboutPhotos />
          </div>

          <ol className="mt-14 border-b border-bone/10">
            {about.chapters.map((chapter, i) => (
              <li
                key={chapter.title}
                className="group grid gap-3 border-t border-bone/10 py-7 md:grid-cols-[7rem_1fr] md:gap-6"
              >
                <span className="font-mono text-xs tracking-[0.25em] text-smoke transition-colors duration-300 group-hover:text-rec">
                  CH.{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl leading-none font-black uppercase">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-bone/70">
                    {chapter.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="mt-12 font-display text-3xl leading-tight font-bold uppercase md:text-4xl">
            <span className="text-rec">“</span>
            {about.closing}
            <span className="text-rec">”</span>
          </blockquote>

          <ul className="mt-10 flex flex-wrap gap-2">
            {about.facts.map((fact) => (
              <li
                key={fact}
                className="border border-bone/20 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-bone/80 uppercase"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
