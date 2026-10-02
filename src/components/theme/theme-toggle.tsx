"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "cre8iq-theme";
const THEME_CHANGE_EVENT = "cre8iq-theme-change";

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function getStoredOrSystemTheme(): Theme {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (isTheme(savedTheme)) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const activeTheme = document.documentElement.dataset.theme;

  if (isTheme(activeTheme)) {
    return activeTheme;
  }

  return getStoredOrSystemTheme();
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function subscribeToTheme(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function handleThemeChange() {
    callback();
  }

  function handleSystemThemeChange(event: MediaQueryListEvent) {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (isTheme(savedTheme)) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
    callback();
  }

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleThemeChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleThemeChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={handleToggle}
      className="grid h-10 w-[5.75rem] grid-cols-2 rounded-md border border-border bg-surface p-1 text-xs font-semibold text-muted transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className={`flex items-center justify-center rounded-sm transition-colors ${
          theme === "light"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        Light
      </span>
      <span
        className={`flex items-center justify-center rounded-sm transition-colors ${
          theme === "dark"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        Dark
      </span>
    </button>
  );
}
