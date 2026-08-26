export type Role = {
  id: number;
  period: string;
  title: string;
  body: string;
  company: string;
  current?: boolean;
};

export const experiences: Role[] = [
  {
    id: 1,
    period: "APR 2025 — PRESENT",
    title: "Senior Software Engineer II",
    body: "Owns Universe end to end — image and document translation, editor, Playground, credits and billing, audit log, Conductor-based job orchestration, and marketplace plugins. Mentors juniors and interns, and sets team conventions for API design and service structure.",
    company: "Vitra.ai · Bengaluru",
    current: true,
  },
  {
    id: 2,
    period: "APR 2024 — MAR 2025",
    title: "Senior Software Engineer I",
    body: "Shipped the Mahindra face-augmentation campaign to 300,000+ participants at a sub-1% failure rate. Designed the automated SSL/TLS certificate manager and the in-place website translation Chrome extension. Automated content extraction with Puppeteer and Crawlee.",
    company: "Vitra.ai",
  },
  {
    id: 3,
    period: "AUG 2023 — MAR 2024",
    title: "Software Engineer",
    body: "Built Translate.website and a Zoom meeting bot doing live per-participant audio capture, language detection, and translation. Contributed to the internal project-management and billing systems. Promoted to Senior within eight months.",
    company: "Vitra.ai",
  },
  {
    id: 4,
    period: "AUG 2021 — AUG 2023",
    title: "Software Development Intern",
    body: "Researched and developed the internal Universe product and shipped two production releases. Prototyped R&D projects in translation and media processing, several of which fed into the product line.",
    company: "Vitra.ai",
  },
  {
    id: 5,
    period: "FEB 2020 — JUN 2021",
    title: "Software Engineer Intern",
    body: "Built a school and inventory management web app in Angular and Express.js with a companion Ionic mobile app, plus a push-notification service and offline support for field users.",
    company: "Kuldeep Websoft · Remote",
  },
];
