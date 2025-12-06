import { Providers } from "@/app/providers";
import "@/lib/orpc.server";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { fontsVariable } from "@repo/fonts";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Vazen",
  description: "A production grade monorepo starter to build full-stack applications on cloudflare",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23 }}
          className="font-geist antialiased"
        >
          <Providers>{children}</Providers>
        </m.body>
      </LazyMotion>
    </html>
  );
}
