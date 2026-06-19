import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsInfo, portfolioConfig } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="section bg-white">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Research-grade machine learning and engineering, from interpretable forecasting to applied agri-tech systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projectsInfo.map((project, index) => {
            const featured = index === 0;
            return (
              <article
                key={index}
                className={`surface-card p-6 flex flex-col group ${featured ? "md:col-span-2 ring-1 ring-blue-100" : ""}`}
              >
                {project.image && (
                  <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[inherit] border-b border-slate-100 bg-slate-50">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      loading="lazy"
                      className="w-full aspect-[16/9] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  {featured && (
                    <span className="chip-brand shrink-0">Flagship</span>
                  )}
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>

                {((project.showGithub !== false && project.github) ||
                  (project.showLive !== false && project.live)) && (
                  <div className="flex gap-3 mt-5">
                    {project.showGithub !== false && project.github && (
                      <Button variant="outline" size="sm" onClick={() => window.open(project.github, "_blank")}>
                        <Github className="mr-2 h-4 w-4" />
                        {portfolioConfig.ui.common.viewCode}
                      </Button>
                    )}
                    {project.showLive !== false && project.live && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {portfolioConfig.ui.common.viewProject}
                      </Button>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
