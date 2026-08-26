import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NavSection from "./components/NavSection";
import {
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  structuredData,
} from "./seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${PERSON_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: PERSON_NAME,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    siteName: PERSON_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/png/card.png",
        width: 1682,
        height: 722,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/png/card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM as string} />
        <div className="noise-overlay" />
        <NavSection />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
