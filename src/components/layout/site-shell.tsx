import type { ReactNode } from "react";
import { MainFrame } from "@/components/layout/main-frame";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <div className="cre8iq-doodle-shell flex min-h-screen flex-col text-foreground">
        <div className="cre8iq-doodle-field" aria-hidden="true">
          <svg
            className="cre8iq-doodle-item cre8iq-doodle-1"
            viewBox="0 0 180 130"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M19 82c33-48 91-62 124-31 27 25 15 63-24 69-33 5-57-14-49-40 8-29 54-30 84 1" />
            <path d="M34 37c15-15 32-21 52-18" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-2"
            viewBox="0 0 150 126"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M25 28l33 25-38 29 44 26-38 29" />
            <path d="M91 22l29 28-27 26 30 27-32 22" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-3"
            viewBox="0 0 150 150"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M76 24l13 34 36 2-29 21 10 35-30-20-31 20 11-35-30-21 37-2z" />
            <path d="M73 55l8 20 21 1-17 13 6 21-18-12-18 12 6-21-17-13 21-1z" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-4"
            viewBox="0 0 190 120"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M20 63c21-25 42-25 63 0s42 25 63 0 21-25 42 0" />
            <path d="M23 88c21-25 42-25 63 0s42 25 63 0 21-25 42 0" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-5"
            viewBox="0 0 130 130"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M65 24l40 41-40 41-40-41z" />
            <path d="M65 43l21 22-21 22-21-22z" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-6"
            viewBox="0 0 180 126"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M29 89c23-47 58-69 105-65-21 13-31 31-29 55 3 29 20 42 51 38" />
            <path d="M54 90c20-14 43-18 69-12" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-7"
            viewBox="0 0 126 126"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M27 32l34 31-34 31" />
            <path d="M65 32l34 31-34 31" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-8"
            viewBox="0 0 120 120"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M60 24v72M24 60h72M35 35l50 50M85 35L35 85" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-9"
            viewBox="0 0 150 126"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M27 78c14-31 39-48 75-51 22-1 34 8 36 26 2 19-10 32-36 40-32 9-57 10-75 3" />
            <path d="M44 61c17 7 36 8 56 2" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-10"
            viewBox="0 0 130 130"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M31 69l34-35 34 35m-49-10h65" />
            <path d="M50 96h30" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-11"
            viewBox="0 0 150 126"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M30 84c18-26 39-38 63-36 25 2 35 16 30 42" />
            <path d="M49 94c24-18 52-18 84 0" />
          </svg>

          <svg
            className="cre8iq-doodle-item cre8iq-doodle-12"
            viewBox="0 0 120 120"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <circle cx="32" cy="34" r="5" />
            <circle cx="72" cy="28" r="5" />
            <circle cx="91" cy="66" r="5" />
            <circle cx="52" cy="88" r="5" />
            <circle cx="27" cy="74" r="5" />
          </svg>
        </div>
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
