import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  /** Optional right-hand element — a lede paragraph or a link. */
  aside?: React.ReactNode;
  className?: string;
};

/**
 * The heading block every section opens with: eyebrow over an h2, optionally
 * with something bottom-aligned on the right. Sections that carry an `aside`
 * wrap at 620px in the design, which is what `flex-wrap` gives us here.
 */
const SectionHeading = ({
  id,
  eyebrow,
  title,
  aside,
  className = "",
}: SectionHeadingProps) => (
  <div
    id={id}
    className={`flex flex-wrap items-end justify-between gap-10 px-gutter pb-10 pt-[84px] ${className}`}
  >
    <div className="flex flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-h2 font-semibold text-balance">{title}</h2>
    </div>
    {aside}
  </div>
);

export default SectionHeading;
