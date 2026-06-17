import { useEffect, useRef, useState } from "react";
import { skillsInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section bg-white">
      <div className="section-inner">
        <SectionHeading eyebrow="Toolbox" title="Skills & Languages" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="surface-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skillsInfo.technicalSkills.map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-400 tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{
                        width: show ? `${skill.level}%` : "0%",
                        transitionDelay: `${i * 70}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex flex-col rounded-xl border border-slate-100 bg-slate-50/60 p-4"
                >
                  <span className="font-medium text-slate-800">{lang.name}</span>
                  <span className="text-xs text-blue-600 mt-0.5">{lang.level}</span>
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
