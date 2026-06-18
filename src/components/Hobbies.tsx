import { Plane, Boxes, GitBranch } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface HobbyProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const hobbyData: HobbyProps[] = [
  {
    title: "Drone Photography",
    description:
      "Capturing landscapes and architectural detail from the air, with a focus on water and natural scenery.",
    icon: <Plane className="h-5 w-5" />,
  },
  {
    title: "3D Printing & Prototyping",
    description:
      "Designing and producing functional prototypes and household items with CAD tooling and a personal printing setup.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: "Open Source",
    description:
      "Contributing to machine-learning libraries — documentation improvements and optimization work for real-world applications.",
    icon: <GitBranch className="h-5 w-5" />,
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="section bg-white">
      <div className="section-inner">
        <SectionHeading eyebrow="Beyond Work" title="Hobbies & Side Projects" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hobbyData.map((hobby, index) => (
            <div key={index} className="surface-card p-6 group">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                {hobby.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mt-4">{hobby.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mt-2">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
