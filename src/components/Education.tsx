
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { educationInfo, styling } from "@/config/portfolio-config";

const Education = () => {
  return (
    <section id="education" className={`section-padding bg-gradient-to-bl ${styling.gradients.education}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {educationInfo.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-${styling.primaryColor} via-${styling.secondaryColor} to-${styling.accentColor}`}>{edu.degree}</h3>
                    <p className="text-secondary">{edu.school}</p>
                    <p className="text-gray-500">{edu.period}</p>
                    <p className="text-gray-600 mt-2">GPA: {edu.gpa}</p>
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

export default Education;
