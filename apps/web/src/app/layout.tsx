import "@/lib/orpc.server"; // pre-rendering for ssr
import type { Metadata } from "next";
import "./globals.css";
import { fontsVariable } from "@repo/fonts";
import { Providers } from "@/app/providers";

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
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
