import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="space-x-4">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact Me
          </Button>
          <Button
            variant="default"
            className="bg-secondary hover:bg-secondary-light text-white transition-all"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;