import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const Education = () => {
  const [reactions, setReactions] = useState<{ [key: number]: 'like' | 'dislike' | null }>({});

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

  const handleReaction = (index: number, type: 'like' | 'dislike') => {
    setReactions(prev => ({
      ...prev,
      [index]: prev[index] === type ? null : type
    }));
  };

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
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <p className="text-gray-500">{edu.period}</p>
                    <p className="text-gray-600 mt-2">GPA: {edu.gpa}</p>
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