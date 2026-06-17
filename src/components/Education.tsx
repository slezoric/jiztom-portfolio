import { GraduationCap } from "lucide-react";
import { educationInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="section-inner">
        <SectionHeading eyebrow="Academics" title="Education" />

        <div className="max-w-3xl mx-auto space-y-5">
          {educationInfo.map((edu, index) => (
            <div key={index} className="surface-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{edu.degree}</h3>
                    <span className="text-sm text-slate-500 shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  {edu.focus && <p className="text-sm text-slate-600 mt-2">{edu.focus}</p>}
                  <p className="text-sm text-slate-500 mt-2">
                    <span className="font-medium text-slate-700">GPA:</span> {edu.gpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
