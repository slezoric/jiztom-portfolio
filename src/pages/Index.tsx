
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio-config";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Hobbies from "@/components/Hobbies";
import { personalInfo } from "@/config/portfolio-config";

const Index = () => {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <Navbar />
      {portfolioConfig.features.showHero && <Hero />}
      {portfolioConfig.features.showAbout && <About />}
      {portfolioConfig.features.showSkills && <Skills />}
      {portfolioConfig.features.showExperience && <Experience />}
      {portfolioConfig.features.showProjects && <Projects />}
      {portfolioConfig.features.showPublications && <Publications />}
      {portfolioConfig.features.showTestimonials && <Testimonials />}
      {portfolioConfig.features.showHobbies && <Hobbies />}
      {portfolioConfig.features.showEducation && <Education />}
      {portfolioConfig.features.showContact && <Contact />}

      <footer className="border-t border-slate-200 bg-white py-8 text-center">
        <p className="text-sm text-slate-500">
          © {year} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
