import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "/styles/css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NavSection from "./components/NavSection";
import Preloader from "./components/Preloader";
import ScrollToTop from "@/helper/ScrollToTop";
import {
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  structuredData,
} from "./seo";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

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
    // next-themes writes data-theme before paint, so there is no flash of the
    // wrong theme. suppressHydrationWarning is required because of that write.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM as string} />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
        {/* Runs before paint: if this tab has already seen the intro, stamp
            the document so CSS hides the curtain with no flash. Wrapped in
            try/catch because sessionStorage throws in some embedded contexts,
            and deliberately not a client component — with JS disabled the flag
            can never be set, so the curtain just plays every time. */}
        {/* The scroll reveals ship inline opacity:0. With JavaScript off nothing
            ever un-hides them, so everything below the hero would render blank —
            for a reader, and for any crawler that executes CSS but not JS. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>main>div{opacity:1!important;transform:none!important}</style>",
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('sd-intro'))document.documentElement.dataset.intro='seen';else sessionStorage.setItem('sd-intro','1')}catch(e){}",
          }}
        />
          <Preloader />
          <NavSection />
          <main className="relative">{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
