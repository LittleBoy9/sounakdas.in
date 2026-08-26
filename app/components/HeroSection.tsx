import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const HeroSection = () => (
  <section
    id="top"
    className="flex flex-col gap-8 border-b border-line px-gutter pb-[68px] pt-[110px]"
  >
    <div className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.16em]">
      <span className="status-dot h-[7px] w-[7px] shrink-0 rounded-full bg-accent" />
      <span className="text-accent-2">{personalData.availability}</span>
      <span className="text-muted-2">/ {personalData.location}</span>
    </div>

    <h1 className="max-w-[1000px] text-display font-semibold text-balance">
      Engineer. Builder.
      <br />
      <span className="text-accent">Maker.</span>
    </h1>

    {/* Fractional tracks, not pixel maxima: pinning the button column to a
        fixed width starves the paragraph across the whole 880–1200px band. */}
    <div className="grid items-end gap-8 pt-1.5 split:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] split:gap-16">
      <p className="max-w-[660px] text-[19px] leading-[1.6] text-muted text-pretty">
        {personalData.intro}
      </p>
      <div className="flex flex-wrap gap-3 split:justify-end">
        <Link
          href="/#products"
          className="bg-accent px-6 py-[15px] text-[12.5px] font-semibold tracking-[0.1em] text-accent-ink transition-colors hover:bg-accent-2"
        >
          SEE WHAT I BUILD
        </Link>
        <Link
          href="/#contact"
          className="border border-line-4 px-6 py-[15px] text-[12.5px] tracking-[0.1em] transition-colors hover:border-accent"
        >
          SAY HELLO
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
