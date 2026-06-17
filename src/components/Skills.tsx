
import { Brain, Database, Cpu, CircuitBoard, ShieldCheck, Languages as LanguagesIcon } from "lucide-react";
import { skillsInfo, styling } from "@/config/portfolio-config";

// Icons are matched to skillsInfo.categories by order.
const categoryIcons = [Brain, Database, Cpu, CircuitBoard, ShieldCheck];

const Skills = () => {
  return (
    <section id="skills" className={`section-padding bg-gradient-to-br ${styling.gradients.skills}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Technical skill categories */}
          <div className="lg:col-span-2 space-y-8">
            {skillsInfo.categories.map((category, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              return (
                <div key={category.name} className="animate-fade-in">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-secondary" strokeWidth={1.75} />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/10 text-secondary border border-secondary/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/20 hover:border-secondary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <LanguagesIcon className="w-5 h-5 text-secondary" strokeWidth={1.75} />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Languages</h3>
            </div>
            <div className="space-y-3">
              {skillsInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-sm font-medium text-secondary">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
