import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Bachelor of Science in Computer Science</h3>
                  <p className="text-secondary">University Name</p>
                  <p className="text-gray-500">2012 - 2016</p>
                  <p className="text-gray-600 mt-2">
                    Graduated with honors, specializing in software engineering and web development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold text-center mb-6">Certifications</h3>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary">AWS Certified Developer</h4>
                    <p className="text-gray-500">Amazon Web Services</p>
                    <p className="text-gray-600">Issued 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;