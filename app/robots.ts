import type { MetadataRoute } from "next";

import { SITE_URL } from "./seo";

const robots = (): MetadataRoute.Robots => ({
  rules: [{ userAgent: "*", allow: "/" }],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
});

export default robots;
