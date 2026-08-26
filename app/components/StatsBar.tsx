import { stats } from "@/utils/data/personal-data";

/**
 * Four cells divided by hairlines. The rules come from a 1px grid gap over a
 * --line background rather than per-cell borders, so no stale edge border is
 * left behind when the grid drops from four columns to two.
 */
const StatsBar = () => (
  <section className="grid grid-cols-2 gap-px border-b border-line bg-line stats4:grid-cols-4">
    {stats.map((s, i) => (
      <div
        key={s.label}
        // Cells that open a row keep the page gutter so their text lines up
        // with every other section; interior cells use a tighter 32px.
        className={`flex flex-col gap-1.5 bg-bg py-[26px] ${
          i === 0 ? "px-gutter" : i === 2 ? "px-gutter stats4:px-8" : "px-8"
        }`}
      >
        <span
          className={`text-stat font-semibold ${s.accent ? "text-accent" : ""}`}
        >
          {s.value}
        </span>
        <span className="text-meta uppercase text-muted-2">{s.label}</span>
      </div>
    ))}
  </section>
);

export default StatsBar;
