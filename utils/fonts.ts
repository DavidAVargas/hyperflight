import localFont from "next/font/local";
import { Big_Shoulders, JetBrains_Mono } from "next/font/google";

export const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});

export const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display-face",
  weight: ["500", "700", "900"],
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  weight: ["400", "500"],
});
