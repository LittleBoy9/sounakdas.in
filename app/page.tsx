import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import WhatIBuildSection from "./components/WhatIBuildSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhatIBuildSection />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
