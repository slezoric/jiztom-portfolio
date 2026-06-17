import { MapPin } from "lucide-react";
import { experienceInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="max-w-3xl mx-auto">
          <div className="timeline space-y-8">
            {experienceInfo.map((exp, index) => (
              <div key={index} className="relative">
                <span className="timeline-dot" />
                <div className="surface-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-slate-500 sm:text-right shrink-0">
                      <div>{exp.period}</div>
                      {exp.location && (
                        <div className="inline-flex items-center gap-1 text-slate-400 mt-0.5">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-[15px] text-slate-600">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
