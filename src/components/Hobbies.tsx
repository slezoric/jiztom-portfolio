
import { Card, CardContent } from "@/components/ui/card";
import { styling } from "@/config/portfolio-config";
import { Button } from "@/components/ui/button";

interface HobbyProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  website?: string;
}

const hobbyData: HobbyProps[] = [
  {
    title: "Drone Photography",
    description: "Capturing landscapes and architectural details through drone photography, with a focus on water and landscapes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-secondary"
      >
        <path d="M12 12H5a2 2 0 0 0-2 2v5" />
        <path d="M19 12h-7" />
        <path d="M5 15v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
      </svg>
    ),
    website: "https://dronephotography.portfolio.com",
  },
  {
    title: "3D Printing",
    description: "Designing and creating functional prototypes and household items using 3D modeling software and a personal printing setup.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-secondary"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    website: "https://jfk-creative-3d-lab.lovable.app/",
  },
  // {
  //   title: "Chess",
  //   description: "Playing competitive chess online and in local tournaments, with a particular interest in strategic openings and endgame tactics.",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="text-secondary"
  //     >
  //       <path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16" />
  //       <circle cx="12" cy="4" r="2" />
  //       <path d="M10 10h4" />
  //       <path d="M12 4v6" />
  //       <path d="M4.71 10.5A4 4 0 0 0 7 17h10a4 4 0 0 0 2.29-6.5" />
  //     </svg>
  //   ),
  // },
  {
    title: "Open Source Contributing",
    description: "Contributing to open source machine learning libraries, focusing on documentation improvements and optimization for agricultural applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-secondary"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    website: "https://github.com/jiztom",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className={`section-padding bg-gradient-to-br ${styling.gradients.projects}`}>
      <div className="container mx-auto">
        <h2 className="section-title">Hobbies & Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hobbyData.map((hobby, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg mr-3 group-hover:bg-secondary/20 transition-colors">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{hobby.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{hobby.description}</p>
                {hobby.website && (
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-secondary hover:text-secondary-light"
                      onClick={() => window.open(hobby.website, "_blank")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      Visit Website
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
