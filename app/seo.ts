import { products } from "@/utils/data/products";
import { packages } from "@/utils/data/packages";

export const SITE_URL = "https://sounakdas.in";

export const PERSON_NAME = "Sounak Das";
export const JOB_TITLE = "Senior Software Engineer II";

export const SITE_TITLE = `${PERSON_NAME} — Senior Software Engineer & Product Builder`;

export const SITE_DESCRIPTION =
  "Sounak Das is a Senior Software Engineer II at Vitra.ai in Bengaluru, building AI-powered " +
  "translation products with Next.js, NestJS and AWS \u2014 including a campaign that served " +
  "300,000+ users. Ships his own products too: AudioFrame, the Hatch command palette, three " +
  "Tauri desktop apps, and 11 open-source npm packages.";

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
 * Platform metadata for the products, kept here rather than in the content
 * data so the copy stays presentational. Values follow the page's own claims.
 */
const APP_META: Record<string, { category: string; os: string }> = {
  AudioFrame: { category: "MultimediaApplication", os: "Any (web browser)" },
  Hatch: { category: "BrowserApplication", os: "Chrome" },
  Vecto: { category: "DesignApplication", os: "macOS, Windows" },
  Grove: { category: "DeveloperApplication", os: "macOS" },
  GitPulse: { category: "DeveloperApplication", os: "macOS, Windows, Linux" },
  FigWind: { category: "DeveloperApplication", os: "Figma" },
};

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/**
 * The six products and eleven packages as first-class entities. Generated from
 * the same arrays the page renders, so adding a product or package extends the
 * structured data automatically — there is no second list to keep in sync.
 *
 * No `offers` node is emitted: pricing is not stated anywhere on the site, and
 * inventing one to chase rich-result eligibility would be a false claim.
 */
const productItems = products.map((product, i) => ({
  "@type": "ListItem",
  position: i + 1,
  item: {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#product-${slug(product.name)}`,
    name: product.name,
    description: `${product.tagline}. ${product.body}`,
    applicationCategory: APP_META[product.name]?.category ?? "DeveloperApplication",
    operatingSystem: APP_META[product.name]?.os ?? product.where,
    ...(product.href ? { url: product.href } : {}),
    author: { "@id": `${SITE_URL}/#person` },
  },
}));

const packageItems = packages.map((pkg, i) => ({
  "@type": "ListItem",
  position: i + 1,
  item: {
    "@type": "SoftwareSourceCode",
    "@id": `${SITE_URL}/#package-${slug(pkg.name)}`,
    name: pkg.name,
    description: pkg.body,
    url: `https://www.npmjs.com/package/${pkg.name}`,
    codeRepository: `https://www.npmjs.com/package/${pkg.name}`,
    programmingLanguage: "TypeScript",
    license: "https://opensource.org/licenses/MIT",
    author: { "@id": `${SITE_URL}/#person` },
  },
}));

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
      image: `${SITE_URL}/png/profile.jpg`,
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
      hasPart: [
        { "@id": `${SITE_URL}/#products` },
        { "@id": `${SITE_URL}/#packages` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#products`,
      name: `Products built by ${PERSON_NAME}`,
      description:
        "Independently designed, built and released products: a web app, a Chrome extension, three Tauri desktop apps and a Figma plugin.",
      numberOfItems: productItems.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: productItems,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#packages`,
      name: `Open-source npm packages by ${PERSON_NAME}`,
      description:
        "MIT-licensed, TypeScript-first npm packages published under the @sounakdas scope.",
      numberOfItems: packageItems.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: packageItems,
    },
  ],
};
