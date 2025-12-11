
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { personalInfo, portfolioConfig } from "@/config/portfolio-config";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-colors"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-700 dark:text-slate-300 animate-fade-in">
          {personalInfo.title}
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 animate-fade-in">
          {personalInfo.description}
        </p>
        <div className="space-x-4">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/30 transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            <Mail className="mr-2 h-4 w-4" />
            {portfolioConfig.ui.hero.contactButton}
          </Button>
          <Button
            variant="default"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all"
            onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            {portfolioConfig.ui.hero.downloadButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
