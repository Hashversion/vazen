import { fontsVariable } from "@repo/fonts";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "@/lib/orpc.server";
import "./styles.css";

export const metadata: Metadata = {
  title: "Vazen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable} suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
