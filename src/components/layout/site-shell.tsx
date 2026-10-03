import type { ReactNode } from "react";
import { MainFrame } from "@/components/layout/main-frame";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[90] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-deep-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <MainFrame>
          <PageTransition>{children}</PageTransition>
        </MainFrame>
        <SiteFooter />
      </div>
    </MotionProvider>
  );
}
