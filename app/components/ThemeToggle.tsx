"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    className="h-[18px] w-[18px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.4 5.4l1.6 1.6M16.9 16.9l1.7 1.7M18.6 5.4l-1.7 1.6M7 16.9l-1.6 1.7" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
    aria-hidden="true"
  >
    <path d="M20.6 14.7A8.7 8.7 0 0 1 9.3 3.4 8.7 8.7 0 1 0 20.6 14.7Z" />
  </svg>
);

/**
 * Shows the theme it will switch *to*: a sun while dark, a moon while light.
 * Until mount we cannot know the resolved theme, so the button renders at full
 * size but empty — that keeps server and client markup identical and stops the
 * nav from reflowing once hydration fills the icon in.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      title={`Switch to ${next} theme`}
      aria-label={`Switch to ${next} theme`}
      className="inline-flex h-11 w-11 items-center justify-center border border-line-3 text-fg transition-colors hover:border-accent hover:text-accent-2 nav:h-9 nav:w-9"
    >
      {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : null}
    </button>
  );
};

export default ThemeToggle;
