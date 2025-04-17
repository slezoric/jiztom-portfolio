
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonialsInfo, styling } from "@/config/portfolio-config";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsInfo.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className={`section-padding bg-gradient-to-r ${styling.gradients.testimonials}`}>
      <div className="container mx-auto">
        <h2 className="section-title">What People Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonialsInfo.map((testimonial, index) => (
              <Card 
                key={index}
                className={`transition-all duration-700 backdrop-blur-sm bg-white/80 ${
                  activeIndex === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 absolute top-0 left-0 right-0 transform translate-y-8'
                }`}
              >
                <CardContent className="p-6 sm:p-10">
                  <Quote className="h-10 w-10 text-secondary/30 mb-4" />
                  <p className="text-lg italic text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonialsInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
