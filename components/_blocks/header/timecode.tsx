"use client";
import { useEffect, useState } from "react";

const FPS = 24;

function format(frames: number) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const f = frames % FPS;
  const totalSeconds = Math.floor(frames / FPS);
  const s = totalSeconds % 60;
  const m = Math.floor(totalSeconds / 60) % 60;
  const h = Math.floor(totalSeconds / 3600);
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

// Camera-style timecode that runs from page load, like a viewfinder readout.
export default function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const id = window.setInterval(() => {
      setFrames(Math.floor(((performance.now() - start) / 1000) * FPS));
    }, 1000 / FPS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="font-mono text-[11px] tracking-widest text-smoke tabular-nums"
    >
      TC {format(frames)}
    </span>
  );
}
