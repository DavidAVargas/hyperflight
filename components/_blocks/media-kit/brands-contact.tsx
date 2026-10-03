import Image from "next/image";
import { mediaKit } from "@/lib/media-kit";
import Sheet from "./sheet";

const stills = [
  { src: "/images/films-poster.jpg", label: "Hyper Films", pos: "object-[50%_45%]" },
  { src: "/images/pads-poster.jpg", label: "Boxing", pos: "object-[50%_50%]" },
  { src: "/images/fitness-poster.jpg", label: "Fitness", pos: "object-[50%_32%]" },
];

const label =
  "font-mono text-[0.85cqw] tracking-[0.3em] text-smoke uppercase";

export default function BrandsContact({ total }: { total: number }) {
  return (
    <Sheet page={4} total={total} scene="SC.04 · Brands & contact">
      <div className="grid h-full grid-cols-[1fr_34cqw] gap-[5cqw] px-[4.5cqw] pt-[5cqw] pb-[7cqw]">
        <div className="flex flex-col justify-between">
          <div>
            <p className={label}>Brands I&apos;ve worked with</p>
            <ul className="mt-[1.2cqw] flex gap-[3cqw]">
              {mediaKit.brands.map((b) => (
                <li
                  key={b}
                  className="font-display text-[4.2cqw] leading-none font-black tracking-tight uppercase"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[6.5cqw] leading-[0.82] font-black uppercase">
              Let&apos;s make
              <br />
              <span className="text-rec">something.</span>
            </h2>
            <dl className="mt-[2.5cqw] grid grid-cols-2 gap-x-[3cqw] gap-y-[1.4cqw]">
              <div>
                <dt className={label}>Email</dt>
                <dd className="mt-[0.4cqw] text-[1.5cqw]">{mediaKit.email}</dd>
              </div>
              {mediaKit.website && (
                <div>
                  <dt className={label}>Website</dt>
                  <dd className="mt-[0.4cqw] text-[1.5cqw]">
                    {mediaKit.website}
                  </dd>
                </div>
              )}
              {mediaKit.socials.map((s) => (
                <div key={s.handle}>
                  <dt className={label}>{s.label}</dt>
                  <dd className="mt-[0.4cqw] text-[1.5cqw]">{s.handle}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Contact-sheet strip of recent work. */}
        <div className="flex flex-col gap-[1.2cqw]">
          {stills.map((s, i) => (
            <figure key={s.src} className="relative flex-1 overflow-hidden">
              <Image
                src={s.src}
                alt=""
                fill
                loading="eager"
                sizes="440px"
                className={`object-cover saturate-[0.85] ${s.pos}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-linear-to-t from-ink/90 to-transparent px-[1cqw] pt-[2cqw] pb-[0.7cqw] font-mono text-[0.8cqw] tracking-[0.25em] uppercase">
                <span className="text-rec">▸ {String(i + 1).padStart(2, "0")}A</span>
                <span className="text-bone/80">{s.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
