import { site } from "@/lib/site";

// Film-strip style ticker. The list is rendered twice so the loop is seamless.
export default function CredentialsMarquee() {
  const items = [...site.credentials, ...site.credentials];

  return (
    <div className="group relative overflow-hidden border-y border-bone/10 py-5">
      <p className="sr-only">{site.credentials.join(", ")}</p>
      <ul
        aria-hidden="true"
        className="flex w-max motion-safe:animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-3xl font-bold whitespace-nowrap uppercase md:text-4xl"
          >
            <span className={i % 2 ? "text-bone/35" : "text-bone"}>{item}</span>
            <span className="text-lg text-rec">✦</span>
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-ink to-transparent" />
    </div>
  );
}
