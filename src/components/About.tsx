import { GraduationCap, TrendingUp, Search, Rocket, Sparkles } from "lucide-react";
import { aboutInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  TrendingUp,
  Search,
  Rocket,
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="max-w-4xl mx-auto">
          {/* One-line lead — the 5-second takeaway */}
          <p className="text-lg sm:text-2xl font-medium leading-snug text-slate-800 text-center max-w-3xl mx-auto">
            {aboutInfo.lead}
          </p>

          {/* Scannable highlight cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutInfo.highlights.map((item) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              return (
                <div key={item.title} className="surface-card p-5 sm:p-6 flex gap-4">
                  <div className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Optional detail for those who want the full story */}
          {aboutInfo.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-8 text-base leading-relaxed text-slate-600 max-w-3xl mx-auto text-center"
            >
              {paragraph}
            </p>
          ))}

          {/* Focus areas */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {aboutInfo.skills.map((skill) => (
              <span key={skill} className="chip-brand">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
