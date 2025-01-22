import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Engineering",
      school: "Iowa State University",
      period: "Expected May 2025",
      gpa: "3.82",
    },
    {
      degree: "Master's in Computer Engineering",
      school: "Iowa State University",
      period: "December 2019",
      gpa: "3.92",
    },
    {
      degree: "Bachelor's in Electrical Engineering",
      school: "Anna University",
      period: "May 2017",
      gpa: "7.6",
    },
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{edu.degree}</h3>
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