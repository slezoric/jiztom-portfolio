
import { FileText, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      title: "Advanced Sound-Based Insect Detection Using Deep Learning Models",
      journal: "Journal of Agricultural Technology",
      year: 2023,
      authors: "Francis, J.K., Johnson, A., Smith, P.",
      doi: "10.1234/agtech.2023.001",
      abstract: "This paper presents novel techniques for detecting and classifying agricultural pests using acoustic signatures and deep neural networks.",
      type: "journal",
    },
    {
      title: "Efficient Data Pipelines for Agricultural Machine Vision Systems",
      conference: "International Conference on Computer Vision in Agriculture",
      year: 2022,
      authors: "Francis, J.K., Williams, R., Anderson, T.",
      doi: "10.5678/icva.2022.123",
      abstract: "We propose a scalable architecture for processing high-volume image data in real-time agricultural monitoring systems.",
      type: "conference",
    },
    {
      title: "Machine Learning Applications in Digital Agriculture: A Review",
      journal: "AI in Agricultural Sciences",
      year: 2021,
      authors: "Johnson, A., Francis, J.K., Thompson, S.",
      doi: "10.9012/aias.2021.045",
      abstract: "This comprehensive review examines the current state of AI and ML applications across various domains of digital agriculture.",
      type: "journal",
    },
  ];

  return (
    <section id="publications" className="section-padding bg-gradient-to-bl from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2EzYTNmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-40" />
        
        <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-fade-in">
          Research Publications
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block" />
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-primary">{publication.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base mt-1">
                        {publication.authors} • {publication.year}
                      </CardDescription>
                    </div>
                    <div className="mt-1">
                      {publication.type === "journal" ? 
                        <FileText className="h-5 w-5 text-blue-500" /> : 
                        <BookOpen className="h-5 w-5 text-indigo-500" />
                      }
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 italic">
                      {publication.journal || publication.conference}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      {publication.abstract}
                    </p>
                    <div className="flex items-center mt-2 text-xs sm:text-sm">
                      <Award className="h-4 w-4 mr-1 text-purple-500" />
                      <span className="text-purple-600">DOI: {publication.doi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
