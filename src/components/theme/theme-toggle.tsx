"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  className?: string;
}

interface IconProps {
  className?: string;
}

const STORAGE_KEY = "cre8iq-theme";
const THEME_CHANGE_EVENT = "cre8iq-theme-change";

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter((className): className is string => Boolean(className)).join(" ");
}

function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

function getStoredOrSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (isTheme(savedTheme)) {
    return savedTheme;
  }

  return "dark";
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  const activeTheme = document.documentElement.dataset.theme;

  if (isTheme(activeTheme)) {
    return activeTheme;
  }

  return getStoredOrSystemTheme();
}

function getServerThemeSnapshot(): Theme {
  return "dark";
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

  function syncTheme() {
    applyTheme(getStoredOrSystemTheme());
    callback();
  }

  function handleStorageChange(event: StorageEvent) {
    if (event.key === STORAGE_KEY) {
      syncTheme();
    }
  }

  function handleSystemThemeChange() {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (isTheme(savedTheme)) {
      return;
    }

    applyTheme("dark");
    callback();
  }

  window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
  window.addEventListener("storage", handleStorageChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
    window.removeEventListener("storage", handleStorageChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.4 14.1A8.2 8.2 0 0 1 9.9 3.6 8.6 8.6 0 1 0 20.4 14.1Z" />
    </svg>
  );
}

function SunIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  );
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  function handleToggle() {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={isDark}
      title={`Switch to ${nextTheme} mode`}
      onClick={handleToggle}
      className={joinClasses(
        "button-lift relative flex h-8 w-16 items-center overflow-hidden rounded-full border p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isDark
          ? "border-border bg-background"
          : "border-border bg-surface",
        className,
      )}
    >
      <span className="flex w-full items-center justify-between px-1">
        <MoonIcon
          className={joinClasses(
            "h-4 w-4 transition-colors",
            isDark ? "text-foreground" : "text-muted",
          )}
        />
        <SunIcon
          className={joinClasses(
            "h-4 w-4 transition-colors",
            isDark ? "text-muted" : "text-foreground",
          )}
        />
      </span>
      <span
        className={joinClasses(
          "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
          isDark
            ? "translate-x-0 bg-surface-strong text-pure-white"
            : "translate-x-8 bg-accent text-deep-navy",
        )}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
