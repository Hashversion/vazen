import type { Metadata } from "next";
import "./globals.css";
import { fontsVariable } from "@repo/fonts";

export const metadata: Metadata = {
  title: "Vazen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
