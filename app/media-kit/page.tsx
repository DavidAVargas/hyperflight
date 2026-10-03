import type { Metadata } from "next";
import Link from "next/link";
import Cover from "@/components/_blocks/media-kit/cover";
import Numbers from "@/components/_blocks/media-kit/numbers";
import Offerings from "@/components/_blocks/media-kit/offerings";
import BrandsContact from "@/components/_blocks/media-kit/brands-contact";

export const metadata: Metadata = {
  title: "Media Kit — Hyperflight",
  description:
    "Audience, reach and partnership formats for brands working with Hyperflight.",
};

const PAGES = 4;

export default function MediaKitPage() {
  return (
    <div className="min-h-dvh bg-[oklch(0.09_0.004_20)] print:bg-ink">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-bone/10 bg-ink/80 px-6 py-3 font-mono text-[11px] tracking-[0.25em] uppercase backdrop-blur-md print:hidden">
        <Link href="/" className="text-smoke hover:text-bone">
          ← Hyperflight
        </Link>
        <a
          href="/hyperflight-media-kit.pdf"
          download
          className="border border-bone/40 px-4 py-2 hover:border-rec hover:bg-rec"
        >
          Download PDF ↓
        </a>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-8 print:max-w-none print:gap-0 print:p-0">
        <Cover total={PAGES} />
        <Numbers total={PAGES} />
        <Offerings total={PAGES} />
        <BrandsContact total={PAGES} />
      </div>
    </div>
  );
}
