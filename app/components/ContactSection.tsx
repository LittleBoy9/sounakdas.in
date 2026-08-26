import Link from "next/link";
import Eyebrow from "./Eyebrow";
import { personalData } from "@/utils/data/personal-data";

/**
 * The old contact form is intentionally replaced by a direct mailto. The
 * `app/api/contact` route and `ContactForm.tsx` still work — to bring the form
 * back, render it here in place of this detail stack.
 */
const details = [
  { label: "Phone", value: personalData.phone },
  { label: "GitHub", value: "/LittleBoy9", href: personalData.github },
  { label: "LinkedIn", value: "/in/sounakdas", href: personalData.linkedIn },
  { label: "Packages", value: "npm.sounakdas.in", href: personalData.npm },
  { label: "Resume", value: "resume.pdf \u2197", href: personalData.resume },
  { label: "Location", value: personalData.address },
];

const ContactSection = () => (
  <section
    id="contact"
    className="grid items-start gap-14 px-gutter pb-14 pt-[100px] split:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] split:gap-20"
  >
    <div className="flex flex-col gap-[26px]">
      <Eyebrow>07 — Contact</Eyebrow>
      <h2 className="max-w-[600px] text-h2lg font-semibold text-balance">
        Let&apos;s build something interesting together.
      </h2>
      <p className="max-w-[520px] text-[17px] leading-[1.6] text-muted text-pretty">
        Have an idea, a project, or just want to talk? Fastest way to reach me is email — I
        usually reply within a day.
      </p>
      <Link
        href={`mailto:${personalData.email}`}
        className="email-underline w-fit break-all pb-1 text-email font-medium text-accent-2"
      >
        {personalData.email}
      </Link>
    </div>

    <div className="flex flex-col gap-px border border-line bg-line">
      {details.map((row) => {
        const inner = (
          <>
            <span className="text-meta uppercase text-muted-2">{row.label}</span>
            <span className="font-mono text-[14px]">{row.value}</span>
          </>
        );

        const className = "flex items-center justify-between gap-5 bg-bg px-6 py-5";

        if (!row.href) {
          return (
            <div key={row.label} className={className}>
              {inner}
            </div>
          );
        }

        return (
          <Link
            key={row.label}
            href={row.href}
            target="_blank"
            rel="noopener"
            className={`${className} wash-hover`}
          >
            {inner}
          </Link>
        );
      })}
    </div>
  </section>
);

export default ContactSection;
