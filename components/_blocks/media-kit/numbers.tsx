import { mediaKit } from "@/lib/media-kit";
import Sheet from "./sheet";

const label =
  "font-mono text-[0.85cqw] tracking-[0.3em] text-smoke uppercase";

export default function Numbers({ total }: { total: number }) {
  const { audience } = mediaKit;

  return (
    <Sheet page={2} total={total} scene="SC.02 · The numbers">
      <div className="grid h-full grid-cols-[30cqw_1fr] gap-[5cqw] px-[4.5cqw] pt-[5cqw] pb-[7cqw]">
        <div className="flex flex-col justify-between">
          <div>
            <p className={label}>About</p>
            <h2 className="mt-[1cqw] font-display text-[5cqw] leading-[0.85] font-black uppercase">
              Built on
              <br />
              <span className="text-rec">real training.</span>
            </h2>
            <p className="mt-[2cqw] text-[1.25cqw] leading-relaxed text-bone/75">
              {mediaKit.bio}
            </p>
          </div>

          {/* Shown once Audience-tab screenshots come in (see lib/media-kit.ts). */}
          {audience && (
            <div>
              <p className={label}>Audience</p>
              <dl className="mt-[1cqw] grid grid-cols-3 gap-[1.5cqw] text-[1.1cqw]">
                <div>
                  <dt className="text-smoke">Age</dt>
                  <dd>{audience.age}</dd>
                </div>
                <div>
                  <dt className="text-smoke">Gender</dt>
                  <dd>{audience.gender}</dd>
                </div>
                <div>
                  <dt className="text-smoke">Top locations</dt>
                  <dd>{audience.locations}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-[3cqw]">
          {mediaKit.platforms.map((p) => (
            <div key={p.name} className="border-t border-bone/15 pt-[1.6cqw]">
              <p className="font-display text-[2.4cqw] leading-none font-black uppercase">
                {p.name}{" "}
                <span className="font-mono text-[1cqw] font-normal tracking-normal text-smoke normal-case">
                  {p.handle}
                </span>
              </p>
              <div className="mt-[1.4cqw] grid grid-cols-4 gap-[2cqw]">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-[4.2cqw] leading-none font-black">
                      {s.value}
                    </p>
                    <p className={`${label} mt-[0.6cqw]`}>{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-[1.2cqw] font-mono text-[0.75cqw] tracking-[0.2em] text-smoke uppercase">
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
