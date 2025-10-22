import { Geist } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-geist",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});
