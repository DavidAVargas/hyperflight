import { site } from "@/lib/site";

// Numbered like takes on a slate: TK.01, TK.02...
export default function ReasonList() {
  return (
    <ol className="border-b border-bone/10">
      {site.partnerships.reasons.map((reason, i) => (
        <li
          key={reason.title}
          className="group grid gap-3 border-t border-bone/10 py-8 md:grid-cols-[6rem_1fr] md:gap-6 lg:py-10"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-smoke transition-colors duration-300 group-hover:text-rec">
            TK.{String(i + 1).padStart(2, "0")}
          </span>
          <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
            <h3 className="font-display text-3xl leading-none font-black uppercase md:text-4xl">
              {reason.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-bone/70">
              {reason.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
