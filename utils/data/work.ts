export type WorkItem = {
  index: string;
  tag: string;
  title: string;
  body: string;
  bullets?: string[];
  stack?: string[];
  featured?: boolean;
};

export const vitraWork: WorkItem[] = [
  {
    index: "01",
    tag: "FLAGSHIP",
    title: "Universe — translation platform",
    body: "Vitra.ai's flagship product. I own image translation end to end across JPG, PNG, and other raster formats, together with the editor that lets users correct and refine translated output in place. Extended the platform beyond images into document translation across multiple file formats — text extraction, translation, and reassembly. Also built the Playground, an interactive surface for experimenting with translation and generation, and a chat-driven image creation system.",
    bullets: [
      "Async job processing on Netflix Conductor with Redis-backed queues and a worker pool",
      "Customer-facing credit and billing system metering platform usage",
      "Audit log recording user and system actions across the product",
      "Marketplace plugins for Photoshop, Microsoft Office, and Figma",
    ],
    stack: ["NestJS", "Next.js", "Conductor", "Redis", "AWS"],
    featured: true,
  },
  {
    index: "02",
    tag: "300,000 USERS",
    title: "Mahindra face-augmentation campaign",
    body: "A user submitted a selfie and a short form and received a personalized 30-second stunt video in under a minute. Scaled to over 300,000 participants across India with a video-generation failure rate below 1%.",
  },
  {
    index: "03",
    tag: "~10 SECONDS",
    title: "Automated SSL/TLS certificate manager",
    body: "Handles domain verification, validation, and issuance in roughly ten seconds, removing manual certificate renewal for every customer domain on the platform.",
  },
  {
    index: "04",
    tag: "WEB APP",
    title: "Translate.website",
    body: "Translates entire sites into multiple languages with extensive per-string customization, so users can review and refine every translation before it goes live. Paired with a Chrome extension that translates any site in place, with View and Edit modes and search / replace / replace-all editing.",
  },
  {
    index: "05",
    tag: "REAL TIME",
    title: "Zoom live-translation bot",
    body: "Joins calls through the Meeting SDK, captures per-participant raw audio in real time, detects the spoken language, and translates it live. Built with Next.js, NestJS, and Docker.",
  },
];
