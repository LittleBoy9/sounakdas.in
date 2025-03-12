import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/css/card.scss";
import "/styles/css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NavSection from "./components/NavSection";
import Script from "next/script";
// import TawkTo from "./components/TawkTo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Sounak Das - Senior Software Engineer",
  description:
    "This is the portfolio of Sounak Das. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* <TawkTo /> */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <NavSection />
          {children}
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM as string} />
    </html>
  );
};

export default RootLayout;
