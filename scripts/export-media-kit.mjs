// Exports /media-kit to a PDF (plus JPG page previews for the site) with Playwright.
// Usage: pnpm media-kit:pdf [--draft] [--url http://localhost:3001] [--out path.pdf]
// Needs a running server (pnpm dev or pnpm start). Refuses to export while
// PENDING placeholders are on the page unless --draft is passed.
import { chromium } from "playwright";

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? undefined : args[i + 1];
};
const draft = args.includes("--draft");
const base = flag("--url") ?? "http://localhost:3001";
const out = flag("--out") ?? "public/hyperflight-media-kit.pdf";

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(`${base}/media-kit`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const pending = await page.$$eval("[data-pending]", (els) =>
  els.map((el) => el.getAttribute("data-pending")),
);
if (pending.length && !draft) {
  console.error(`Not exporting: still pending -> ${[...new Set(pending)].join(", ")}`);
  console.error("Fill them in lib/media-kit.ts, or pass --draft for a preview.");
  await browser.close();
  process.exit(1);
}

await page.emulateMedia({ media: "print" });

// Page previews shown in the Brand Partnerships panel on the homepage.
if (!draft) {
  const sheets = page.locator("section");
  const count = await sheets.count();
  for (let i = 0; i < count; i++) {
    await sheets.nth(i).screenshot({
      path: `public/images/media-kit/page-${i + 1}.jpg`,
      type: "jpeg",
      quality: 82,
    });
  }
  console.log(`Saved ${count} page previews -> public/images/media-kit/`);
}

await page.pdf({
  path: out,
  width: "1280px",
  height: "720px",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log(`${draft ? "Draft" : "Final"} media kit -> ${out}${pending.length ? ` (pending: ${[...new Set(pending)].join(", ")})` : ""}`);
