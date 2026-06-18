import { ExternalLink, BookOpen, FileText, GraduationCap } from "lucide-react";
import { publicationsInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const typeIcon = (type: string) => {
  const t = type.toLowerCase();
  if (t.includes("thesis")) return GraduationCap;
  if (t.includes("journal") || t.includes("access")) return FileText;
  return BookOpen;
};

const Publications = () => {
  return (
    <section id="publications" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Research"
          title="Publications"
          subtitle="Peer-reviewed work on interpretable AI, time-series forecasting, and explainability — published with IEEE."
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {publicationsInfo.map((pub, index) => {
            const Icon = typeIcon(pub.type);
            const link = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : undefined);
            return (
              <article key={index} className="surface-card p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="chip-brand">{pub.type}</span>
                      <span className="text-xs text-slate-400">{pub.year}</span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{pub.authors}</p>
                    <p className="text-sm italic text-blue-700/80 mt-1">
                      {pub.journal || pub.conference}
                    </p>

                    {pub.highlights && pub.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {pub.highlights.map((h) => (
                          <span key={h} className="chip">{h}</span>
                        ))}
                      </div>
                    )}

                    <p className="text-sm leading-relaxed text-slate-600 mt-3">{pub.abstract}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {pub.url && !pub.doi ? "View paper" : "View on IEEE / DOI"}
                        </a>
                      )}
                      {pub.doi && (
                        <span className="text-xs text-slate-400">DOI: {pub.doi}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
