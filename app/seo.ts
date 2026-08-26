export const SITE_URL = "https://sounakdas.in";

export const PERSON_NAME = "Sounak Das";
export const JOB_TITLE = "Senior Software Engineer II";

export const SITE_TITLE = `${PERSON_NAME} — Senior Software Engineer & Product Builder`;

export const SITE_DESCRIPTION =
  "Sounak Das is a Senior Software Engineer II at Vitra.ai in Bengaluru, building AI-powered " +
  "translation products with Next.js, NestJS and AWS \u2014 including a campaign that served " +
  "300,000+ users. Ships his own products too: AudioFrame, the Hatch command palette, three " +
  "Tauri desktop apps, and 10 open-source npm packages.";

/**
 * Profiles linked with `sameAs` so search engines and answer engines can resolve
 * every one of these accounts to the same person.
 */
export const PROFILES = [
  "https://www.linkedin.com/in/sounakdas/",
  "https://github.com/LittleBoy9",
  "https://www.npmjs.com/~sounakdas",
  "https://npm.sounakdas.in",
  "https://www.audioframe.app",
];

const KNOWS_ABOUT = [
  "Software Engineering",
  "Full-Stack Development",
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Rust",
  "Tauri",
  "PostgreSQL",
  "Redis",
  "Netflix Conductor",
  "Amazon Web Services",
  "Docker",
  "Machine Translation",
  "Open Source",
];

/**
 * schema.org graph describing the site and the person behind it. Emitted as
 * JSON-LD so crawlers and LLM answer engines get the facts as structured data
 * rather than having to infer them from prose.
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON_NAME,
      givenName: "Sounak",
      familyName: "Das",
      url: SITE_URL,
      image: `${SITE_URL}/png/profile.jpeg`,
      jobTitle: JOB_TITLE,
      description: SITE_DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "Vitra.ai",
        url: "https://www.vitra.ai",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Acharya Prafulla Chandra College",
      },
      knowsAbout: KNOWS_ABOUT,
      sameAs: PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
    },
  ],
};
