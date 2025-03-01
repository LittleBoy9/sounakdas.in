import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />

      <FooterSection />
    </>
  );
}
