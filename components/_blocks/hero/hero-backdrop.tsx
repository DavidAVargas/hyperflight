import Image, { type StaticImageData } from "next/image";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type HeroBackdropProps = {
  image: { src: StaticImageData; alt: string };
  video: string | null;
};

export default function HeroBackdrop({ image, video }: HeroBackdropProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Portrait: full-bleed on mobile, right-hand panel on desktop. */}
      <div className="absolute inset-0 overflow-hidden lg:left-auto lg:w-[58%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[50%_15%] contrast-[1.05] saturate-[0.85] motion-safe:animate-[slow-push_14s_ease-out_both]"
        />
        {video && (
          <video
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {/* Blend the photo's edges into the black stage. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 via-35% to-transparent lg:via-ink/20 lg:via-25%"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-r from-ink via-ink/50 via-25% to-transparent to-60% lg:block"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,oklch(0.13_0.004_20/0.7)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-1/2 opacity-[0.07] mix-blend-overlay motion-safe:animate-[grain_0.6s_steps(4)_infinite]"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  );
}
