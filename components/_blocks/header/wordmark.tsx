import Link from "next/link";
import { site } from "@/lib/site";

export default function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} home`}
      className="group flex items-center gap-3"
    >
      <span className="relative flex size-2.5">
        <span className="absolute inset-0 rounded-full bg-rec motion-safe:animate-[rec-pulse_1.6s_ease-in-out_infinite]" />
        <span className="absolute -inset-1 rounded-full bg-rec/30 blur-[3px]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-black tracking-tight uppercase">
          {site.name}
        </span>
        <span className="mt-1 font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
          REC · {site.location}
        </span>
      </span>
    </Link>
  );
}
