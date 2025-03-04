import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/css/card.scss";
import "/styles/css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import NavSection from "./components/NavSection";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Sounak Das - Software Developer",
  description:
    "This is the portfolio of Sounak Das. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67c6695cdbaee8190d001eed/1ilfgn4rh";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
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




/*
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67c6695cdbaee8190d001eed/1ilfgn4rh';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
*/
