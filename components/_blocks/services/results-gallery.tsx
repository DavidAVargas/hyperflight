import Image, { type StaticImageData } from "next/image";
import client1Front from "@/public/images/results/client-1-front.jpg";
import client1Back from "@/public/images/results/client-1-back.jpg";
import client1Side from "@/public/images/results/client-1-side.jpg";
import client2Before from "@/public/images/results/client-2-before.jpg";
import client2After from "@/public/images/results/client-2-after.jpg";

const label = "font-mono text-[10px] tracking-[0.3em] text-smoke uppercase";

// Watermarked client photos (see scripts in README). Each opens full size.
function Photo({
  src,
  alt,
  tag,
  className,
}: {
  src: StaticImageData;
  alt: string;
  tag?: string;
  className?: string;
}) {
  return (
    <a
      href={src.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden border border-bone/10 transition-colors hover:border-rec ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 640px) 22rem, 100vw"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {tag && (
        <span className="absolute top-2 left-2 bg-ink/80 px-2 py-1 font-mono text-[10px] tracking-[0.25em] uppercase backdrop-blur-sm">
          {tag}
        </span>
      )}
    </a>
  );
}

export default function ResultsGallery() {
  return (
    <section className="mt-12">
      <p className={label}>Client results</p>
      <h3 className="mt-2 font-display text-3xl leading-none font-black uppercase">
        The work <span className="text-rec">shows.</span>
      </h3>

      <div className="mt-6 flex flex-col gap-8">
        <figure>
          <Photo
            src={client1Front}
            alt="Client transformation, front view, before on the left and after on the right"
          />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Photo
              src={client1Back}
              alt="Same client, back view, before and after"
            />
            <Photo
              src={client1Side}
              alt="Same client, side view, before and after"
            />
          </div>
          <figcaption className={`${label} mt-2`}>
            ▸ 01 · Front, back & side · Before → After
          </figcaption>
        </figure>

        <figure>
          <div className="grid grid-cols-2 gap-2">
            <Photo
              src={client2Before}
              alt="Client before starting training"
              tag="Before"
              className="aspect-3/4"
            />
            <Photo
              src={client2After}
              alt="Same client after training"
              tag="After"
              className="aspect-3/4"
            />
          </div>
          <figcaption className={`${label} mt-2`}>▸ 02 · Before → After</figcaption>
        </figure>
      </div>

      <p className="mt-6 text-xs text-bone/50">
        Client results. Individual results vary.
      </p>
    </section>
  );
}
