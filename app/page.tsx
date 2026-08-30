import Reveal from "./components/Reveal";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import AboutSection from "./components/AboutSection";
import VitraWorkSection from "./components/VitraWorkSection";
import ProductsSection from "./components/ProductsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import ExperienceSection from "./components/ExperienceSection";
import StackSection from "./components/StackSection";
import CredentialsSection from "./components/CredentialsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      {/* Deliberately not wrapped in Reveal. These sit behind the intro
          curtain, so any entrance animation is invisible — and shipping them
          at opacity:0 would make the h1, the largest element on the page,
          ineligible for Largest Contentful Paint until hydration finished. */}
      <HeroSection />
      <StatsBar />

      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <VitraWorkSection />
      </Reveal>
      <Reveal>
        <ProductsSection />
      </Reveal>
      <Reveal>
        <OpenSourceSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
      </Reveal>
      <Reveal>
        <StackSection />
      </Reveal>
      <Reveal>
        <CredentialsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <FooterSection />
    </>
  );
}
