import type { Metadata } from "next";
import { display, inter, mono } from "@/utils/fonts";
import "@/styles/globals.css";
import Header from "@/components/_blocks/header/header";
import Footer from "@/components/_blocks/footer/footer";

export const metadata: Metadata = {
  title: "Hyperflight — Coach. Creator. Filmmaker.",
  description:
    "Pro boxing coach, online fitness coach and filmmaker from the Dominican Republic. Brand partnerships, video production and coaching.",
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
        <div className="grid min-h-dvh grid-rows-[1fr_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
