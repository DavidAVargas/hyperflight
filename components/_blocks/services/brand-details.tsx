import Image from "next/image";
import Link from "next/link";
import { mediaKit } from "@/lib/media-kit";
// Imported (not /public URLs) so each re-export gets a fresh hashed filename
// and no cache ever serves an outdated preview.
import page1 from "@/public/images/media-kit/page-1.jpg";
import page2 from "@/public/images/media-kit/page-2.jpg";
import page3 from "@/public/images/media-kit/page-3.jpg";
import page4 from "@/public/images/media-kit/page-4.jpg";

const label = "font-mono text-[10px] tracking-[0.3em] text-smoke uppercase";

const PREVIEWS = [page1, page2, page3, page4];

// Extra content for the Brand Partnerships panel: numbers, formats, brands
// and the media kit. Only platform stats are read here, never the email.
export default function BrandDetails() {
  return (
    <>
      <section className="mt-10">
        <p className={label}>The numbers</p>
        <div className="mt-4 flex flex-col gap-6">
          {mediaKit.platforms.map((p) => (
            <div key={p.name} className="border-t border-bone/15 pt-4">
              <p className="font-display text-2xl leading-none font-black uppercase">
                {p.name}{" "}
                <span className="font-mono text-xs font-normal tracking-normal text-smoke normal-case">
                  {p.handle}
                </span>
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl leading-none font-black">
                      {s.value}
                    </p>
                    <p className={`${label} mt-1.5`}>{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-smoke uppercase">
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <p className={label}>What I make for brands</p>
        <ul className="mt-4 grid gap-x-6 sm:grid-cols-2">
          {mediaKit.offerings.map((o) => (
            <li key={o.title} className="border-t border-bone/10 py-4">
              <h3 className="font-display text-xl leading-none font-bold uppercase">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/65">
                {o.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <p className={label}>Brands I&apos;ve worked with</p>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {mediaKit.brands.map((b) => (
            <li
              key={b}
              className="font-display text-4xl leading-none font-black tracking-tight uppercase"
            >
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <p className={label}>Media kit · {PREVIEWS.length} pages</p>
        <Link
          href="/media-kit"
          className="group mt-4 block overflow-hidden border border-bone/15 transition-colors hover:border-rec"
        >
          <Image
            src={PREVIEWS[0]}
            alt="Media kit cover: Hyperflight, coach, creator, filmmaker"
            sizes="(min-width: 640px) 40rem, 100vw"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </Link>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {PREVIEWS.slice(1).map((src, i) => (
            <Link
              key={src.src}
              href="/media-kit"
              className="block overflow-hidden border border-bone/15 transition-colors hover:border-rec"
            >
              <Image
                src={src}
                alt={`Media kit page ${i + 2}`}
                sizes="14rem"
                className="h-auto w-full"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
