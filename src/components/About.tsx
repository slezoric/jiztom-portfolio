const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            As a Python AI Engineer and researcher in digital agriculture, I specialize in developing
            innovative solutions using machine vision and machine learning. My work includes pioneering
            sound-based insect detection techniques and creating efficient data pipelines for agricultural
            applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently pursuing my Ph.D. in Computer Engineering at Iowa State University, I combine
            academic research with practical industry experience to solve complex problems in
            agricultural technology. My expertise spans Python, TensorFlow, and SQL, enabling me to
            build robust and scalable AI solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;