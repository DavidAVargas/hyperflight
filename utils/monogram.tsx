import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// "HF" monogram with a REC dot, shared by the favicon and the Apple touch icon.
export async function renderMonogram(px: number, rounded: boolean) {
  const font = await readFile(
    join(process.cwd(), "assets/fonts/BigShoulders-Black.ttf"),
  );
  const u = px / 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0b0909",
          borderRadius: rounded ? 14 * u : 0,
          color: "#f3eee4",
          fontFamily: "Big Shoulders",
          fontSize: 46 * u,
          letterSpacing: -1 * u,
          lineHeight: 1,
        }}
      >
        <div style={{ display: "flex", marginTop: 4 * u, marginRight: 2 * u }}>HF</div>
        <div
          style={{
            position: "absolute",
            top: 5 * u,
            right: 5 * u,
            width: 8 * u,
            height: 8 * u,
            borderRadius: 999,
            background: "#e5332f",
          }}
        />
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [
        { name: "Big Shoulders", data: font, style: "normal", weight: 900 },
      ],
    },
  );
}
