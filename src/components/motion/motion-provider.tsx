"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (time: number) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.88,
    });
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <>
      {children}
      <CustomCursor />
    </>
  );
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!cursor || !hasFinePointer || prefersReducedMotion()) {
      return;
    }

    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';
    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.24,
      ease: "power3",
    });
    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.24,
      ease: "power3",
    });

    gsap.set(cursor, {
      autoAlpha: 0,
      xPercent: -50,
      yPercent: -50,
    });
    document.documentElement.classList.add("has-custom-cursor");

    function handlePointerMove(event: PointerEvent) {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.22, ease: "power2.out" });
      moveX(event.clientX);
      moveY(event.clientY);
    }

    function handlePointerOver(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Element && target.closest(interactiveSelector)) {
        gsap.to(cursor, {
          scale: 3.25,
          backgroundColor: "color-mix(in srgb, var(--accent) 18%, transparent)",
          borderColor: "var(--accent)",
          duration: 0.28,
          ease: "expo.out",
        });
      }
    }

    function handlePointerOut(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Element && target.closest(interactiveSelector)) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "var(--foreground)",
          borderColor: "transparent",
          duration: 0.28,
          ease: "expo.out",
        });
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-5 w-5 rounded-full border border-transparent bg-foreground mix-blend-difference opacity-0 md:block"
    />
  );
}
