import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

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
  const [reactions, setReactions] = useState<{ [key: number]: 'like' | 'dislike' | null }>({});

  const handleReaction = (index: number, type: 'like' | 'dislike') => {
    setReactions(prev => ({
      ...prev,
      [index]: prev[index] === type ? null : type
    }));
  };

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
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
                <div className="flex gap-4 mt-4">
                  <button 
                    onClick={() => handleReaction(index, 'like')}
                    className={`flex items-center gap-1 ${reactions[index] === 'like' ? 'text-secondary' : 'text-gray-500'}`}
                  >
                    <ThumbsUp size={18} />
                  </button>
                  <button 
                    onClick={() => handleReaction(index, 'dislike')}
                    className={`flex items-center gap-1 ${reactions[index] === 'dislike' ? 'text-secondary' : 'text-gray-500'}`}
                  >
                    <ThumbsDown size={18} />
                  </button>
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