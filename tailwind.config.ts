import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./helper/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design breakpoints are authored as max-widths; these are the min-width
      // counterparts (one pixel above each), so the mobile layout is the base.
      screens: {
        // >760px — nav links come out of the hamburger sheet
        nav: "761px",
        // >880px — every two/three-track split becomes side-by-side
        split: "881px",
        // >1050px — 3-up grids reach three columns, 2-up grids reach two
        grid3: "1051px",
        // >1180px — the stats bar reaches four columns
        stats4: "1181px",
      },
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        "line-3": "var(--line-3)",
        "line-4": "var(--line-4)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-ink": "var(--accent-ink)",
        "accent-wash": "var(--accent-wash)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["clamp(42px, 9vw, 104px)", { lineHeight: "0.94", letterSpacing: "-0.05em" }],
        h2: ["clamp(26px, 4vw, 40px)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        h2md: ["clamp(28px, 4.4vw, 44px)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        h2lg: ["clamp(32px, 5.2vw, 54px)", { lineHeight: "1.06", letterSpacing: "-0.04em" }],
        h3feat: ["clamp(24px, 3.2vw, 32px)", { letterSpacing: "-0.03em" }],
        stat: ["clamp(24px, 3.2vw, 32px)", { letterSpacing: "-0.03em" }],
        email: ["clamp(19px, 2.6vw, 26px)", { letterSpacing: "-0.02em" }],
        eyebrow: ["11px", { letterSpacing: "0.2em" }],
        meta: ["10.5px", { letterSpacing: "0.16em" }],
      },
      spacing: {
        gutter: "clamp(20px, 5vw, 56px)",
      },
    },
  },
  plugins: [],
};
export default config;
