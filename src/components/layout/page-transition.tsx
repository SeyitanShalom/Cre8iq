"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(page, { autoAlpha: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        page,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out" },
      );
    }, page);

    return () => context.revert();
  }, [pathname]);

  return (
    <div key={pathname} ref={pageRef}>
      {children}
    </div>
  );
}
