import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { personalData, principles } from "@/utils/data/personal-data";

const credentialLines = [
  "AWS Certified Cloud Practitioner",
  "M.Sc. Computer Science — Grade A",
  "Winner, FutureHack 3.0",
];

const AboutSection = () => (
  <section
    id="about"
    className="grid items-start gap-14 border-b border-line px-gutter py-[84px] split:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] split:gap-[72px]"
  >
    <div className="flex flex-col gap-4">
      {/* Grayscale is deliberate — colour would make this the only photograph
          on an otherwise monochrome page. */}
      <Image
        src={personalData.profile}
        alt={personalData.name}
        width={680}
        height={850}
        priority
        sizes="(max-width: 880px) 300px, 340px"
        className="profile-photo aspect-[4/5] w-full max-w-[300px] border border-line-2 object-cover split:max-w-[340px]"
      />
      <div className="flex flex-col gap-[7px] font-mono text-[11.5px] tracking-[0.04em] text-muted">
        {credentialLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-[26px]">
      <Eyebrow>01 — About</Eyebrow>
      <h2 className="max-w-[720px] text-h2md font-semibold text-balance">
        I build products that people actually use
      </h2>
      {personalData.bio.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="max-w-[760px] text-[17px] leading-[1.68] text-muted text-pretty"
        >
          {paragraph}
        </p>
      ))}

      <div className="mt-1.5 grid gap-px border border-line bg-line split:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="flex flex-col gap-2 bg-bg px-[22px] py-5">
            <span className="text-meta uppercase text-accent">{p.title}</span>
            <span className="text-[14px] leading-[1.5] text-muted">{p.body}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
