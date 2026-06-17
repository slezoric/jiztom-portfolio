import { Quote } from "lucide-react";
import { testimonialsInfo } from "@/config/portfolio-config";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsInfo.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Endorsements" title="What People Say" />

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            {testimonialsInfo.map((t, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-6 absolute inset-x-0 top-0 pointer-events-none"
                }`}
              >
                <div className="surface-card p-8 sm:p-10">
                  <Quote className="h-9 w-9 text-blue-500/25 mb-4" />
                  <p className="text-lg leading-relaxed text-slate-700">{t.quote}</p>
                  <div className="flex items-center mt-6">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-display font-semibold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonialsInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
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
