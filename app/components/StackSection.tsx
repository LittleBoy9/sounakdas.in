import SectionHeading from "./SectionHeading";
import { stack } from "@/utils/data/stack";

/**
 * Text only, by design: the middot-joined strings read faster than the old
 * icon grid and drop 126 SVG assets from the bundle.
 */
const StackSection = () => (
  <section>
    <SectionHeading id="skills" eyebrow="06 — Stack" title="What I work with" />

    <div className="grid gap-px border-y border-line bg-line split:grid-cols-2 grid3:grid-cols-3">
      {stack.map((s) => (
        <div
          key={s.group}
          className={`flex flex-col gap-3.5 bg-bg px-gutter pb-8 pt-7 ${
            s.wide ? "split:col-span-2 grid3:col-span-3" : ""
          }`}
        >
          <span className="text-[11px] uppercase tracking-[0.16em] text-accent">{s.group}</span>
          <span className="text-[15px] leading-[1.75] text-muted">{s.items}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StackSection;
