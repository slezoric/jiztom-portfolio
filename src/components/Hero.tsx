import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MapPin, ArrowDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { personalInfo, portfolioConfig } from "@/config/portfolio-config";

const Hero = () => {
  const { highlights, location, availability } = personalInfo;

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <AnimatedBackground />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        {availability && (
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 backdrop-blur animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {availability}
          </div>
        )}

        <div className="mt-8 flex justify-center animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 opacity-70 blur-[2px]" />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>

        <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight animate-fade-in-up">
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        <p className="mt-4 text-lg sm:text-2xl font-display font-medium text-slate-700 animate-fade-in-up">
          {personalInfo.title}
        </p>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600 animate-fade-in-up">
          {personalInfo.description}
        </p>

        {location && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 animate-fade-in-up">
            <MapPin className="h-4 w-4" />
            {location}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/20 transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-4 w-4" />
            {portfolioConfig.ui.hero.contactButton}
          </Button>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
            onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            {portfolioConfig.ui.hero.downloadButton}
          </Button>

          <div className="flex items-center gap-1 sm:ml-2">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto animate-fade-in-up">
            {highlights.map((h) => (
              <div key={h.label} className="stat-card">
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">{h.label}</div>
                <div className="mt-1 text-sm font-medium text-slate-800">{h.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors animate-float"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;
