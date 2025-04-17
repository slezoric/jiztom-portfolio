
import { aboutInfo, styling } from "@/config/portfolio-config";

const About = () => {
  return (
    <section id="about" className={`section-padding bg-gradient-to-br ${styling.gradients.about}`}>
      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2EzYTNmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-40" />
        
        <h2 className={`section-title bg-clip-text text-transparent bg-gradient-to-r from-${styling.primaryColor} via-${styling.secondaryColor} to-${styling.accentColor} animate-fade-in`}>
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block" />
          
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-4 sm:space-y-6 relative z-10">
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-base sm:text-lg text-gray-700 leading-relaxed animate-fade-in ${index > 0 ? 'delay-100' : ''}`}>
                {paragraph}
              </p>
            ))}
            
            {aboutInfo.paragraphs.length > 1 && <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent my-4 sm:my-6" />}
            
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
              {aboutInfo.skills.map((skill, index) => (
                <div key={index} className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-${index === 0 ? 'indigo' : index === 1 ? 'purple' : 'pink'}-50 rounded-lg`}>
                  <span className={`text-sm sm:text-base text-${index === 0 ? 'indigo' : index === 1 ? 'purple' : 'pink'}-600 font-semibold`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
