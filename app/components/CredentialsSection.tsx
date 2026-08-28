import { credentials } from "@/utils/data/stack";

const CredentialsSection = () => (
  <section className="grid gap-px border-b border-line bg-line split:grid-cols-2 grid3:grid-cols-3">
    {credentials.map((c) => (
      <div key={c.title} className="flex flex-col gap-2.5 bg-bg px-gutter pb-[38px] pt-[34px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
          {c.kind}
        </span>
        <span className="text-[18px] font-semibold tracking-[-0.02em] text-balance">
          {c.title}
        </span>
        <span className="text-[13.5px] leading-[1.5] text-muted text-pretty">{c.detail}</span>
      </div>
    ))}
    {/* Three cells across two columns leaves one empty between 881px and
        1050px; see the note in OpenSourceSection. */}
    {credentials.length % 2 === 1 && (
      <div aria-hidden className="hidden bg-bg split:block grid3:hidden" />
    )}
  </section>
);

export default CredentialsSection;
