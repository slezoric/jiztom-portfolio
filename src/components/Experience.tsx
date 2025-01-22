import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <section id="experience" className="section-padding bg-gray-50/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        {exp.title}
                      </h3>
                      <p className="text-secondary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-indigo-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;