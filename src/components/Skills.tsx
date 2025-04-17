
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { skillsInfo, styling } from "@/config/portfolio-config";

const Skills = () => {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    setShowProgress(true);
  }, []);

  return (
    <section id="skills" className={`section-padding bg-gradient-to-br ${styling.gradients.skills}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-4">
              {skillsInfo.technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress
                    value={showProgress ? skill.level : 0}
                    className="transition-all duration-1000 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Languages</h3>
            <div className="space-y-4">
              {skillsInfo.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-sm text-gray-500">{lang.level}</span>
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
