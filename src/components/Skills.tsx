import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
];

const Skills = () => {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    setShowProgress(true);
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
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
    </section>
  );
};

export default Skills;