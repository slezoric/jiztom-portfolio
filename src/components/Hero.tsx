import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="/profile-placeholder.jpg"
            alt="Jiztom Kavalakkatt Francis"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Jiztom Kavalakkatt Francis
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
          Python AI Engineer | Digital Agriculture Researcher
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 animate-fade-in">
          Innovating at the intersection of AI and agriculture, specializing in machine vision
          and deep learning solutions.
        </p>
        <div className="space-x-4">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button
            variant="default"
            className="bg-secondary hover:bg-secondary-light text-white transition-all"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;