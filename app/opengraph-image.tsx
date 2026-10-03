import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt =
  "Hyperflight — Coach. Creator. Filmmaker. Pro boxing coach, fitness coach and filmmaker based in New Jersey.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hex equivalents of the theme tokens (Satori doesn't read CSS variables).
const INK = "#0b0909";
const BONE = "#f3eee4";
const SMOKE = "rgba(243, 238, 228, 0.55)";
const REC = "#e5332f";

const corner = (pos: Record<string, number>) => ({
  position: "absolute" as const,
  width: 28,
  height: 28,
  borderColor: "rgba(243, 238, 228, 0.45)",
  borderStyle: "solid" as const,
  borderWidth: 0,
  ...pos,
});

export default async function Image() {
  const root = process.cwd();
  const [display, mono, portrait] = await Promise.all([
    readFile(join(root, "assets/fonts/BigShoulders-Black.ttf")),
    readFile(join(root, "assets/fonts/JetBrainsMono-Medium.ttf")),
    readFile(join(root, "assets/images/hf-side-smile.jpg"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: INK,
          color: BONE,
        }}
      >
        {/* Portrait panel on the right, faded into the black stage. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 560,
            height: 630,
            display: "flex",
          }}
        >
          <img
            src={`data:image/jpeg;base64,${portrait}`}
            width={560}
            height={746}
            style={{ objectFit: "cover", marginTop: 0 }}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 560,
              height: 630,
              display: "flex",
              backgroundImage: `linear-gradient(to right, ${INK} 0%, rgba(11,9,9,0.7) 25%, rgba(11,9,9,0) 60%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 560,
              height: 630,
              display: "flex",
              backgroundImage: `linear-gradient(to top, ${INK} 0%, rgba(11,9,9,0) 35%)`,
            }}
          />
        </div>

        {/* Viewfinder corners. */}
        <div style={{ ...corner({ top: 32, left: 32 }), borderTopWidth: 2, borderLeftWidth: 2 }} />
        <div style={{ ...corner({ top: 32, right: 32 }), borderTopWidth: 2, borderRightWidth: 2 }} />
        <div style={{ ...corner({ bottom: 32, left: 32 }), borderBottomWidth: 2, borderLeftWidth: 2 }} />
        <div style={{ ...corner({ bottom: 32, right: 32 }), borderBottomWidth: 2, borderRightWidth: 2 }} />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: REC,
                boxShadow: `0 0 18px ${REC}`,
              }}
            />
            <div
              style={{
                fontFamily: "Big Shoulders",
                fontSize: 40,
                letterSpacing: -0.5,
                textTransform: "uppercase",
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 15,
                letterSpacing: 4,
                color: SMOKE,
                marginLeft: 8,
                marginTop: 4,
              }}
            >
              REC · NEW JERSEY
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Big Shoulders",
              fontSize: 132,
              lineHeight: 0.86,
              textTransform: "uppercase",
            }}
          >
            {site.hero.lines.map((line, i) => (
              <div
                key={line}
                style={{ color: i === site.hero.lines.length - 1 ? REC : BONE }}
              >
                {line}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: 17,
              letterSpacing: 4,
              color: SMOKE,
              textTransform: "uppercase",
            }}
          >
            Brand partnerships · Video production · Coaching
          </div>
        </div>
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
