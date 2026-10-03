import Image from "next/image";
import { site } from "@/lib/site";
import VideoLoop from "./video-loop";
import ServiceDialog from "./service-dialog";
import ServiceDetails from "./service-details";

type Service = (typeof site.services)[number];

const mediaClass =
  "transition-transform duration-700 ease-out group-hover:scale-105";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const { media } = service;

  return (
    <article
      id={service.id}
      className="group relative isolate flex aspect-2/3 scroll-mt-24 flex-col lg:aspect-4/5 justify-between overflow-hidden border border-bone/10 transition-colors duration-500 hover:border-rec/70 xl:aspect-9/16"
    >
      <div className="absolute inset-0 -z-10">
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className={`object-cover object-[50%_20%] saturate-[0.85] ${mediaClass}`}
          />
        ) : (
          <VideoLoop
            src={media.src}
            poster={media.poster}
            className={mediaClass}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 via-40% to-ink/10" />
      </div>

      <header className="flex items-start justify-between p-6">
        <span className="font-mono text-xs text-rec">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-bone/25 bg-ink/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] uppercase backdrop-blur-sm">
          {service.tag}
        </span>
      </header>

      <div className="p-6">
        <h3 className="font-display text-4xl leading-none font-black uppercase lg:text-5xl xl:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/75">
          {service.description}
        </p>
        <ul className="mt-5 flex flex-col gap-1.5 border-t border-bone/15 pt-4">
          {service.items.map((item) => (
            <li
              key={item}
              className="font-mono text-[11px] tracking-[0.15em] text-smoke uppercase"
            >
              — {item}
            </li>
          ))}
        </ul>
        {/* Stretched trigger: the whole card opens the detail panel. */}
        <ServiceDialog
          title={service.title}
          tag={service.tag}
          ctaLabel="View details"
        >
          <ServiceDetails service={service} />
        </ServiceDialog>
      </div>
    </article>
  );
}
