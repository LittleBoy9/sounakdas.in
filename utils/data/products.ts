export type Product = {
  name: string;
  status: string;
  where: string;
  tagline: string;
  body: string;
  stack: string[];
  href?: string;
};

export const products: Product[] = [
  {
    name: "AudioFrame",
    status: "LIVE",
    where: "audioframe.app",
    href: "https://audioframe.app",
    tagline: "Browser-based audio visualizer",
    body: "Real-time, beat-reactive visualizer with seven render styles, driven by a bass-frequency envelope follower that scales the visuals to the track. Exports transparent-alpha WebM and MP4 at 4K/60fps in 16:9, 1:1, and 9:16. Runs entirely client-side — no installs, accounts, servers, or telemetry.",
    stack: ["TypeScript", "Web Audio API", "Canvas"],
  },
  {
    name: "Hatch",
    status: "LIVE",
    where: "Chrome Web Store",
    href: "https://chromewebstore.google.com",
    tagline: "Cmd+K command palette for the browser",
    body: "Universal command palette with 80+ commands: fuzzy tab switching, bookmark and history search, snippets with dynamic variables, aliases, clipboard history. Opens in under 50 ms from a framework-free ~29 KB bundle, in a closed Shadow DOM so it never collides with host-page styles.",
    stack: ["TypeScript", "esbuild", "Shadow DOM"],
  },
  {
    name: "Vecto",
    status: "DESKTOP",
    where: "macOS · Windows",
    tagline: "AI-powered SVG generation and editing",
    body: "Generates production-ready SVG from a plain-text prompt, then opens any local .svg for direct editing. Full vector editor: layer tree with visibility and lock toggles, live attribute editing, multi-select with bounding-box handles, pan and zoom, 100-step undo/redo.",
    stack: ["Tauri 2", "Rust", "React 18", "Claude API"],
  },
  {
    name: "Grove",
    status: "DESKTOP",
    where: "macOS",
    tagline: "Multi-repository Git client",
    body: "Keeps every local repository in a single view — branch, change counts, ahead/behind state, last commit — with dirty repos sorted to the top. Stage, commit, push, branch, and resolve conflicts against syntax-highlighted word-level diffs; delegates to the system git binary so SSH keys, credentials, and hooks work unchanged.",
    stack: ["Tauri 2", "Rust", "React 19", "shadcn/ui"],
  },
  {
    name: "GitPulse",
    status: "DESKTOP",
    where: "Cross-platform",
    tagline: "Engineering contribution analytics",
    body: "Pulls commit and merge-request data from GitLab and GitHub into per-member, per-project analytics: contribution heatmaps, time-to-merge percentiles, cycle-time breakdown, PR-size distribution. Surfaces trend alerts for velocity drops and bus-factor risk. Local-first — tokens in the OS keychain, strict CSP, no telemetry.",
    stack: ["Tauri 2", "git2", "keyring", "Recharts"],
  },
  {
    name: "FigWind",
    status: "PLUGIN",
    where: "Figma",
    tagline: "Figma to Tailwind code generator",
    body: "Converts any selected Figma frame or component into production-ready TSX or HTML with mapped Tailwind utility classes, regenerating live as the selection changes. Handles flexbox layout, gap, padding, and sizing, and detects image fills to emit real img tags.",
    stack: ["TypeScript", "Figma Plugin API", "Tailwind v4"],
  },
];
