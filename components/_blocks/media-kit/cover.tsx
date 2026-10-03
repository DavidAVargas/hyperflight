import Image from "next/image";
import portrait from "@/public/images/hf-hero.jpg";
import { mediaKit } from "@/lib/media-kit";
import Sheet from "./sheet";

export default function Cover({ total }: { total: number }) {
  return (
    <Sheet page={1} total={total} scene="SC.01 · Cover">
      <div className="absolute inset-y-0 right-0 -z-10 w-[52%] overflow-hidden">
        <Image
          src={portrait}
          alt="Hyperflight smiling in a black cap and tee, arms crossed"
          fill
          loading="eager"
          placeholder="blur"
          sizes="700px"
          className="object-cover object-[50%_15%] saturate-[0.9]"
        />
        <div className="absolute -inset-y-px -left-0.5 right-0 bg-linear-to-r from-ink via-ink/50 via-25% to-transparent to-60%" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent via-30% to-transparent" />
      </div>

      <div className="flex h-full flex-col justify-between px-[4.5cqw] pt-[5cqw] pb-[7cqw]">
        <p className="font-mono text-[0.95cqw] tracking-[0.35em] text-smoke uppercase">
          <span className="text-rec">●</span> Media kit · {mediaKit.updated}
        </p>

        <div>
          <h1 className="font-display text-[10.5cqw] leading-[0.82] font-black tracking-tight uppercase">
            Hyper
            <br />
            flight
          </h1>
          <p className="mt-[2cqw] font-display text-[3cqw] leading-none font-bold uppercase">
            Coach. Creator. <span className="text-rec">Filmmaker.</span>
          </p>
          <p className="mt-[1.5cqw] max-w-[38cqw] text-[1.3cqw] leading-relaxed text-bone/70">
            Pro boxing coach, fitness coach and filmmaker based in New Jersey.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-[2.5cqw] gap-y-[1cqw] font-mono text-[0.95cqw] tracking-[0.2em] uppercase">
          <span className="normal-case tracking-normal">{mediaKit.email}</span>
          {mediaKit.socials.slice(0, 2).map((s) => (
            <span key={s.handle} className="text-bone/70 normal-case">
              {s.handle}
            </span>
          ))}
          {mediaKit.website && (
            <span className="normal-case">{mediaKit.website}</span>
          )}
        </div>
      </div>
    </Sheet>
  );
}
