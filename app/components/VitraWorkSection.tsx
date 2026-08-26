import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { vitraWork } from "@/utils/data/work";

const VitraWorkSection = () => {
  const [featured, ...rest] = vitraWork;

  return (
    <section>
      <SectionHeading
        id="work"
        eyebrow="02 — Selected work at Vitra.ai"
        title="What I've shipped in production"
      />

      <div className="grid gap-px border-y border-line bg-line grid3:grid-cols-2">
        <div className="col-span-full grid items-start gap-8 bg-bg px-gutter pb-10 pt-9 split:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] split:gap-14">
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {featured.index} · {featured.tag}
            </span>
            <h3 className="text-h3feat font-semibold text-balance">{featured.title}</h3>
            <p className="text-[15.5px] leading-[1.65] text-muted text-pretty">
              {featured.body}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {featured.bullets?.map((bullet) => (
              <span key={bullet} className="flex gap-3 text-[14px] leading-[1.5]">
                <span className="shrink-0 text-accent">→</span>
                <span className="text-muted">{bullet}</span>
              </span>
            ))}
            <div className="flex flex-wrap gap-[7px] pt-1">
              {featured.stack?.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </div>

        {rest.map((w) => (
          <div
            key={w.title}
            className="flex flex-col gap-3 bg-bg px-gutter pb-9 pt-8"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {w.index} · {w.tag}
            </span>
            <h3 className="text-[23px] font-semibold tracking-[-0.025em]">{w.title}</h3>
            <p className="text-[14.5px] leading-[1.62] text-muted text-pretty">{w.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VitraWorkSection;
