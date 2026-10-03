"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Clip = { src: string; poster: string };

type VideoLoopProps = {
  sources: readonly Clip[];
  className?: string;
};

// Silent clip rotation: plays only while on screen, advances to the next clip
// when one ends (a single clip just loops), and stays on the first poster for
// reduced-motion users.
export default function VideoLoop({ sources, className }: VideoLoopProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  // Count of clips played so far; drives which clip shows and whether to fade.
  const [plays, setPlays] = useState(0);
  const index = plays % sources.length;
  const hasRotated = plays > 0;
  const rotates = sources.length > 1;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // A new clip mounts when the index changes; start it if the card is visible.
  useEffect(() => {
    if (plays === 0 || !inView.current) return;
    videoRef.current?.play().catch(() => {});
  }, [plays]);

  const clip = sources[index];

  return (
    <div ref={wrapRef} className="size-full">
      <video
        key={clip.src}
        ref={videoRef}
        aria-hidden="true"
        className={cn(
          "size-full object-cover",
          hasRotated && "motion-safe:animate-[fade-in_0.6s_ease-out]",
          className,
        )}
        src={clip.src}
        poster={clip.poster}
        muted
        loop={!rotates}
        playsInline
        preload={hasRotated ? "auto" : "none"}
        onEnded={() => setPlays((n) => n + 1)}
      />
    </div>
  );
}
