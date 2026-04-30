import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NavSection from "./components/NavSection";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sounak Das — Engineer & Builder",
  description:
    "I build products — from AI-powered platforms to full-stack SaaS. Engineer, builder, maker based in Bangalore.",
  keywords: [
    "Sounak Das",
    "Engineer",
    "Builder",
    "Full Stack Developer",
    "Product Builder",
    "SaaS",
    "AI Applications",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Cloud Architecture",
    "Bangalore Developer",
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
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
