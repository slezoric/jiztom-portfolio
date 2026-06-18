import { Brain, Database, Cpu, CircuitBoard, ShieldCheck, Languages as LanguagesIcon } from "lucide-react";
import { skillsInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

// Icons matched to skillsInfo.categories by order (cycles if more categories).
const categoryIcons = [Brain, Database, Cpu, CircuitBoard, ShieldCheck];

const Skills = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="section-inner">
        <SectionHeading eyebrow="Toolbox" title="Skills & Languages" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Technical skill categories */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {skillsInfo.categories.map((category, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              return (
                <div key={category.name} className="surface-card p-5 sm:p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-900">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          <div className="surface-card p-5 sm:p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
                <LanguagesIcon className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-900">
                Languages
              </h3>
            </div>
            <div className="space-y-2.5">
              {skillsInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex justify-between items-center rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-2.5"
                >
                  <span className="font-medium text-slate-800">{lang.name}</span>
                  <span className="text-xs text-blue-600">{lang.level}</span>
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
