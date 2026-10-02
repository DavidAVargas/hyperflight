"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type VideoLoopProps = {
  src: string;
  poster: string;
  className?: string;
};

// Silent loop that only plays while on screen, and never for reduced-motion users.
export default function VideoLoop({ src, poster, className }: VideoLoopProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden="true"
      className={cn("size-full object-cover", className)}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
