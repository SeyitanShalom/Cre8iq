import type { Metadata } from "next";
import { Cabin, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cre8iq | Graphic Design, UI/UX & Web Development",
  description:
    "Cre8iq is a premium personal creative portfolio for brand visuals, product experiences, and refined websites.",
};

const themeInitScript = `
(() => {
  try {
    const storageKey = "cre8iq-theme";
    const savedTheme = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${cabin.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
