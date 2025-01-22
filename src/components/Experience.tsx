import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Iowa State University",
    period: "2020 - Present",
    description: "Leading research in digital agriculture, developing ML models for crop analysis and insect detection. Enhanced agricultural ML models with 95% accuracy in pest detection.",
  },
  {
    title: "Software Development Engineer",
    company: "3M",
    period: "2019 - 2020",
    description: "Developed U-Net-based data pipelines and implemented real-time sensor visualizations. Improved data processing efficiency by 40%.",
  },
  {
    title: "Software Engineer",
    company: "GE Appliances",
    period: "2017 - 2018",
    description: "Created advanced inventory control systems and optimized database queries. Reduced processing time by 60% through efficient SQL optimization.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;