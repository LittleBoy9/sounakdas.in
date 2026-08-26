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
      {/* Above the fold, so this fades on mount rather than on scroll. */}
      <Reveal onMount>
        <HeroSection />
      </Reveal>
      <Reveal onMount delay={0.08}>
        <StatsBar />
      </Reveal>

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
