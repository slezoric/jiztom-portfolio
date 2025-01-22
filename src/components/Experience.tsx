import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of enterprise applications using React and Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2018 - 2020",
    description: "Developed and maintained multiple web applications for clients.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ltd",
    period: "2016 - 2018",
    description: "Worked on frontend development using React and Angular.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
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