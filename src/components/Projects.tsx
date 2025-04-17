
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projectsInfo, styling } from "@/config/portfolio-config";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="projects" className={`section-padding bg-gradient-to-br ${styling.gradients.projects}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsInfo.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 transform ${hoveredIndex === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  {project.title}
                  {hoveredIndex === index && <ArrowUpRight className="ml-2 h-4 w-4 text-secondary animate-pulse" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm transition-all duration-300 ${hoveredIndex === index ? 'bg-secondary/20' : ''}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.showGithub !== false && project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      GitHub
                    </Button>
                  )}
                  {project.showLive !== false && project.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
