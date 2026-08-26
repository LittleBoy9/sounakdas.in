"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 600;

/**
 * Square, hairline, mono — the same vocabulary as the theme toggle and the
 * bordered nav button. A text arrow rather than an icon glyph, matching the
 * `→` bullets in the work section; the design ships no icon set.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    // `scroll-behavior: auto` in the reduced-motion block does not apply to a
    // programmatic smooth scroll, so the preference is checked here too.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-8 right-6 z-40 flex h-11 w-11 items-center justify-center border border-line-4 bg-[var(--bg-blur)] text-[15px] text-muted backdrop-blur-[12px] transition-all duration-200 hover:border-accent hover:text-accent-2 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
