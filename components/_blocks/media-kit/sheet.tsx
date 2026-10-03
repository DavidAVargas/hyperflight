import { cn } from "@/lib/utils";

type SheetProps = {
  page: number;
  total: number;
  scene: string;
  className?: string;
  children: React.ReactNode;
};

const corner = "absolute size-[2.2cqw] border-bone/40";

// One 16:9 page of the media kit. Everything inside is sized in cqw so the
// sheet scales on screen and prints at exactly 1280x720.
export default function Sheet({
  page,
  total,
  scene,
  className,
  children,
}: SheetProps) {
  return (
    <section
      className={cn(
        "@container relative isolate aspect-video w-full overflow-hidden bg-ink text-bone break-after-page last:break-after-auto print:w-[1280px]",
        className,
      )}
    >
      {children}

      <span className={`${corner} top-[2.5cqw] left-[2.5cqw] border-t border-l`} />
      <span className={`${corner} top-[2.5cqw] right-[2.5cqw] border-t border-r`} />
      <span className={`${corner} bottom-[2.5cqw] left-[2.5cqw] border-b border-l`} />
      <span className={`${corner} right-[2.5cqw] bottom-[2.5cqw] border-r border-b`} />

      <div className="absolute inset-x-[4.5cqw] bottom-[3cqw] flex justify-between font-mono text-[0.8cqw] tracking-[0.3em] text-smoke uppercase">
        <span>
          <span className="text-rec">●</span> Hyperflight · Media kit
        </span>
        <span>{scene}</span>
        <span>
          {String(page).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
