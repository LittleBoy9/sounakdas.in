"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Label shows the theme it will switch *to*. Until the component mounts we
 * cannot know the resolved theme, so it renders a fixed-width space instead —
 * that keeps the server and client markup identical and stops the nav from
 * reflowing once hydration fills the label in.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = resolvedTheme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      title="Toggle theme"
      aria-label={`Switch to ${next} theme`}
      className="inline-flex h-11 items-center border border-line-3 px-[13px] font-mono text-[10.5px] tracking-[0.14em] text-fg transition-colors hover:border-accent hover:text-accent-2 nav:h-auto nav:py-[9px]"
    >
      {mounted ? next.toUpperCase() : "     "}
    </button>
  );
};

export default ThemeToggle;
