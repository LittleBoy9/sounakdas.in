import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { packages } from "@/utils/data/packages";
import { personalData } from "@/utils/data/personal-data";

const OpenSourceSection = () => (
  <section>
    <SectionHeading
      id="opensource"
      eyebrow="04 — Open source"
      title="Eleven packages, 5,100+ downloads"
      className="!pb-9"
      aside={
        <Link
          href={personalData.npm}
          target="_blank"
          rel="noopener"
          className="pb-1.5 font-mono text-[12px] tracking-[0.12em] text-accent-2 transition-colors hover:text-accent"
        >
          NPM.SOUNAKDAS.IN →
        </Link>
      }
    />

    <p className="px-gutter pb-5 font-mono text-[14.5px] leading-[1.6] text-muted">
      @sounakdas scope · MIT licensed · TypeScript-first · zero-dependency where possible
    </p>

    <div className="grid gap-px border-y border-line bg-line grid3:grid-cols-2">
      {packages.map((p) => (
        <div
          key={p.name}
          // A fractional name track, not a fixed 180px: pinning it starves the
          // description to ~20 characters per line at tablet widths.
          className="grid items-baseline gap-5 bg-bg px-gutter py-5 split:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)]"
        >
          <span className="font-mono text-[14px] text-accent-2">{p.name}</span>
          <span className="text-[14px] leading-[1.5] text-muted">{p.body}</span>
        </div>
      ))}
      {/* The rules are a 1px gap over a --line parent, so an unfilled cell in
          the last row would show that colour as a solid block. With an odd
          package count the two-column layout leaves exactly one. */}
      {packages.length % 2 === 1 && <div aria-hidden className="hidden bg-bg grid3:block" />}
    </div>
  </section>
);

export default OpenSourceSection;
