"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function MainFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main
      id="main-content"
      className={`flex-1 ${pathname === "/" ? "" : "pt-24"}`}
    >
      {children}
    </main>
  );
}
