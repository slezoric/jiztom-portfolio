const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2EzYTNmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-40" />
        
        <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fade-in">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6 relative z-10">
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              As a Python AI Engineer and researcher in digital agriculture, I specialize in developing
              innovative solutions using machine vision and machine learning. My work includes pioneering
              sound-based insect detection techniques and creating efficient data pipelines for agricultural
              applications.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent my-6" />
            
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-100">
              Currently pursuing my Ph.D. in Computer Engineering at Iowa State University, I combine
              academic research with practical industry experience to solve complex problems in
              agricultural technology. My expertise spans Python, TensorFlow, and SQL, enabling me to
              build robust and scalable AI solutions.
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <div className="px-4 py-2 bg-indigo-50 rounded-lg">
                <span className="text-indigo-600 font-semibold">Python</span>
              </div>
              <div className="px-4 py-2 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-semibold">TensorFlow</span>
              </div>
              <div className="px-4 py-2 bg-pink-50 rounded-lg">
                <span className="text-pink-600 font-semibold">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;