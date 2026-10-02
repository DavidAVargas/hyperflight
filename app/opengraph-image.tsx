import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt =
  "Hyperflight — a film strip of four frames: smiling studio portrait, fight-night footage, boxing pad work and a gym session. Coach, creator, filmmaker based in New Jersey.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hex equivalents of the theme tokens (Satori doesn't read CSS variables).
const INK = "#0b0909";
const BONE = "#f3eee4";
const SMOKE = "rgba(243, 238, 228, 0.55)";
const REC = "#e5332f";

const FRAMES = [
  { file: "assets/images/hf-side-smile.jpg", label: "Partnerships", pos: "50% 0%" },
  { file: "public/images/films-poster.jpg", label: "Hyper Films", pos: "50% 45%" },
  { file: "public/images/pads-poster.jpg", label: "Boxing", pos: "50% 55%" },
  { file: "public/images/fitness-poster.jpg", label: "Fitness", pos: "50% 45%" },
];

function Sprockets() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 22px",
        height: 40,
        alignItems: "center",
      }}
    >
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 20,
            height: 14,
            borderRadius: 3,
            background: "rgba(243, 238, 228, 0.12)",
          }}
        />
      ))}
    </div>
  );
}

export default async function Image() {
  const root = process.cwd();
  const [display, mono, ...frames] = await Promise.all([
    readFile(join(root, "assets/fonts/BigShoulders-Black.ttf")),
    readFile(join(root, "assets/fonts/JetBrainsMono-Medium.ttf")),
    ...FRAMES.map((f) => readFile(join(root, f.file), "base64")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK,
          color: BONE,
          fontFamily: "JetBrains Mono",
        }}
      >
        <Sprockets />

        {/* Four frames, like a strip of developed film. */}
        <div style={{ display: "flex", gap: 14, padding: "6px 40px 0" }}>
          {FRAMES.map((f, i) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={`data:image/jpeg;base64,${frames[i]}`}
                alt=""
                width={269}
                height={338}
                style={{
                  objectFit: "cover",
                  objectPosition: f.pos,
                  borderRadius: 4,
                  filter: "saturate(0.85) contrast(1.05)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 10,
                  fontSize: 13,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: REC }}>▸ {String(i + 1).padStart(2, "0")}A</span>
                <span style={{ color: SMOKE }}>{f.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 40px 22px",
            flexGrow: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                background: REC,
                boxShadow: `0 0 22px ${REC}`,
              }}
            />
            <div
              style={{
                fontFamily: "Big Shoulders",
                fontSize: 112,
                lineHeight: 0.8,
                letterSpacing: -1,
                textTransform: "uppercase",
              }}
            >
              {site.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 8,
              fontSize: 15,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <span>Coach · Creator ·</span>
              <span style={{ color: REC }}>Filmmaker</span>
            </div>
            <span style={{ color: SMOKE }}>New Jersey · 1M+ on TikTok</span>
          </div>
        </div>

        <Sprockets />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Big Shoulders", data: display, style: "normal", weight: 900 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 500 },
      ],
    },
  );
}
