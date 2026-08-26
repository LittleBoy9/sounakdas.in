import SectionHeading from "./SectionHeading";
import { experiences } from "@/utils/data/experience";

const ExperienceSection = () => (
  <section>
    <SectionHeading
      id="experience"
      eyebrow="05 — Experience"
      title="Intern to Senior Software Engineer II"
    />

    <div className="flex flex-col px-gutter pb-5">
      {experiences.map((role, i) => (
        <div
          key={role.id}
          className={`grid items-baseline gap-7 border-t border-line-2 py-[26px] split:grid-cols-[minmax(0,0.34fr)_minmax(0,1.6fr)_minmax(0,0.4fr)] ${
            i === experiences.length - 1 ? "border-b border-line-2" : ""
          }`}
        >
          <span
            className={`font-mono text-[12.5px] tracking-[0.06em] ${
              role.current ? "text-accent-2" : "text-muted-2"
            }`}
          >
            {role.period}
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-[21px] font-semibold tracking-[-0.02em]">{role.title}</span>
            <span className="text-[14.5px] leading-[1.55] text-muted text-pretty">
              {role.body}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.14em] text-muted-2 split:text-right">
            {role.company}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
