import { aboutInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="max-w-3xl mx-auto">
          <div className="surface-card p-6 sm:p-10 space-y-5">
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2" />

            <div className="flex flex-wrap gap-2">
              {aboutInfo.skills.map((skill) => (
                <span key={skill} className="chip-brand">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
