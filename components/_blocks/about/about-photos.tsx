import Image from "next/image";
import { site } from "@/lib/site";

// Contact-sheet grid: four frames from the field and beach shoot.
export default function AboutPhotos() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {site.about.photos.map((photo, i) => (
        <figure key={photo.label} className="group">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 22vw, 50vw"
              className="object-cover saturate-[0.85] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2 flex justify-between font-mono text-[10px] tracking-[0.25em] uppercase">
            <span className="text-rec">
              ▸ {String(i + 1).padStart(2, "0")}A
            </span>
            <span className="text-smoke">{photo.label}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
