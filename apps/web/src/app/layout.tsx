import { Providers } from "@/app/providers";
import "@/lib/orpc.server";
import { fontsVariable } from "@repo/fonts";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Vazen",
  description: "A production grade monorepo starter to build full-stack applications on cloudflare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable} suppressHydrationWarning>
      <body className="font-geist antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
