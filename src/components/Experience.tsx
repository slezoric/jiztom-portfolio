
import { Card, CardContent } from "@/components/ui/card";
import { experienceInfo, styling } from "@/config/portfolio-config";

const Experience = () => {
  return (
    <section id="experience" className={`section-padding bg-gradient-to-br ${styling.gradients.experience}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceInfo.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-${styling.primaryColor} via-${styling.secondaryColor} to-${styling.accentColor}`}>{exp.title}</h3>
                    <p className="text-secondary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
