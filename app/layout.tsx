import type { Metadata } from "next";
import { display, inter, mono } from "@/utils/fonts";
import "@/styles/globals.css";
import Header from "@/components/_blocks/header/header";
import Footer from "@/components/_blocks/footer/footer";

const title = "Hyperflight — Coach. Creator. Filmmaker.";
const description =
  "Pro boxing coach, fitness coach and filmmaker based in New Jersey. Brand partnerships, video production and coaching.";

// Absolute base for share-image URLs. Set NEXT_PUBLIC_SITE_URL once there's a domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3001");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Hyperflight",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} bg-ink text-bone`}
      >
        <div id="top" className="grid min-h-dvh grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
