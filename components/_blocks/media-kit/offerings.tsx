import { mediaKit } from "@/lib/media-kit";
import Sheet from "./sheet";

export default function Offerings({ total }: { total: number }) {
  return (
    <Sheet page={3} total={total} scene="SC.03 · Work with me">
      <div className="flex h-full flex-col px-[4.5cqw] pt-[5cqw] pb-[7cqw]">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[5cqw] leading-[0.85] font-black uppercase">
            What I make
            <br />
            <span className="text-rec">for brands.</span>
          </h2>
          <p className="max-w-[30cqw] text-right text-[1.2cqw] leading-relaxed text-bone/70">
            Every partnership is shaped around the campaign. Mix formats or
            go all in with a full production.
          </p>
        </div>

        <ol className="mt-[3cqw] grid flex-1 grid-cols-3 gap-x-[3cqw] gap-y-[2.2cqw]">
          {mediaKit.offerings.map((o, i) => (
            <li key={o.title} className="border-t border-bone/15 pt-[1.3cqw]">
              <span className="font-mono text-[0.85cqw] tracking-[0.25em] text-rec">
                TK.{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-[0.8cqw] font-display text-[2.2cqw] leading-none font-black uppercase">
                {o.title}
              </h3>
              <p className="mt-[0.9cqw] text-[1.1cqw] leading-relaxed text-bone/70">
                {o.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-between border-t border-bone/15 pt-[1.6cqw]">
          <p className="font-display text-[2.2cqw] font-bold uppercase">
            Rates available on request
          </p>
          <p className="font-mono text-[0.9cqw] tracking-[0.25em] text-smoke uppercase">
            Packages tailored to each campaign
          </p>
        </div>
      </div>
    </Sheet>
  );
}
