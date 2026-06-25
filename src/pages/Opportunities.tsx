import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Personal job-search reference (not a public showcase). Linked discreetly from the footer.
// Shortlist + framing: lead with applied AI / LLM evaluation (ExplainCast is the proof),
// back it with XAI/interpretability where the thesis IS the product; AgTech is a proven
// domain to work opportunistically.

type Company = { name: string; why: string; star?: boolean };
type Tier = { title: string; note: string; companies: Company[] };

const jobs = (q: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(q + " careers machine learning")}`;

const boards: { name: string; url: string }[] = [
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
  { name: "Wellfound (startups)", url: "https://wellfound.com/jobs" },
  { name: "BuiltIn", url: "https://builtin.com/jobs" },
  { name: "Levels.fyi", url: "https://www.levels.fyi/" },
  { name: "Otta", url: "https://otta.com/" },
];

const tiers: Tier[] = [
  {
    title: "Applied AI / LLM evaluation — highest signal",
    note: "ExplainCast is the proof: RAG + Claude tool-calling + a faithfulness / hallucinated-driver eval. These teams build exactly that. Apply here first.",
    companies: [
      { name: "Anthropic", why: "Applied AI + faithfulness/eval research — direct match; ExplainCast already builds on Claude.", star: true },
      { name: "Patronus AI", why: "LLM evaluation + hallucination detection — your faithfulness-eval work is the product.", star: true },
      { name: "Galileo", why: "LLM evaluation & observability platform — strong applied-AI fit.", star: true },
      { name: "Scale AI", why: "Applied AI, model eval, and data — high req volume." },
      { name: "OpenAI (Applied)", why: "Applied / forward-deployed roles building real LLM products." },
      { name: "Distyl AI", why: "Enterprise applied AI; prototype-to-production delivery." },
      { name: "LangChain", why: "LLM tooling, agents, and eval (LangSmith)." },
    ],
  },
  {
    title: "XAI / Interpretability — thesis-backed",
    note: "Your PhD (interpretable forecasting, SHAP/Grad-CAM, faithfulness eval) IS the product. Most now also do LLM observability — a clean bridge into the applied-AI tier above.",
    companies: [
      { name: "Arize AI", why: "ML + LLM observability and explainability — direct thesis match.", star: true },
      { name: "Fiddler AI", why: "Model monitoring + explainability + LLM observability.", star: true },
      { name: "WhyLabs", why: "AI observability; interpretability is the whole business." },
      { name: "Weights & Biases", why: "Experiment tracking / MLOps + Weave for LLM eval." },
      { name: "Credo AI", why: "AI governance + model transparency for regulated use." },
    ],
  },
  {
    title: "Clinical & regulated AI",
    note: "Interpretability matters most where decisions are high-stakes; your ECG/PhysioNet work fits.",
    companies: [
      { name: "Tempus", why: "Clinical AI; interpretable models for diagnostics." },
      { name: "GE HealthCare", why: "Regulated medical AI; explainability required." },
      { name: "Aidoc", why: "FDA-cleared clinical AI; interpretable triage." },
      { name: "Viz.ai", why: "Clinical decision AI on imaging and time-series signals." },
    ],
  },
  {
    title: "Energy forecasting",
    note: "Your UCI-energy + time-series forecasting work (and ExplainCast's energy demo) map directly.",
    companies: [
      { name: "Amperon", why: "ML energy-demand forecasting — direct time-series match.", star: true },
      { name: "GridMatic", why: "ML for power-market forecasting." },
      { name: "Camus Energy", why: "Grid orchestration + load forecasting." },
      { name: "AES", why: "Utility-scale energy + forecasting teams." },
    ],
  },
  {
    title: "Big-tech applied science (volume + sponsorship)",
    note: "High req volume and sponsor-friendly — good for breadth and visa optionality.",
    companies: [
      { name: "Amazon Applied Science", why: "Volume of applied-scientist roles; sponsors H-1B." },
      { name: "NVIDIA", why: "Edge inference + deep learning; embedded-to-model range fits." },
      { name: "Apple", why: "On-device ML + embedded; hardware-to-model profile." },
      { name: "Qualcomm", why: "Edge AI on embedded silicon." },
      { name: "Meta", why: "Large applied-ML org; high req volume, sponsor-friendly." },
      { name: "Google DeepMind", why: "Applied research + LLM eval; high bar, high volume." },
    ],
  },
  {
    title: "AgTech & heavy equipment — proven domain",
    note: "Apply opportunistically (don't make it your only lane). They know ISU and your field work.",
    companies: [
      { name: "John Deere", why: "Iowa-adjacent, knows ISU; ag autonomy + embedded.", star: true },
      { name: "Climate FieldView / Bayer", why: "Digital-ag ML at scale." },
      { name: "Corteva", why: "Ag data science." },
      { name: "CNH Industrial", why: "Ag equipment autonomy + embedded perception." },
      { name: "Caterpillar", why: "Heavy-equipment embedded + AI." },
    ],
  },
];

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="section-inner max-w-5xl py-12 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        <header className="mt-6 mb-10">
          <p className="eyebrow">Private reference · job search</p>
          <h1 className="heading text-3xl sm:text-4xl">Opportunities & where to apply</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            A working shortlist of teams that fit a PhD with applied-AI and interpretable-AI depth
            and a sensor-to-firmware-to-model range. Strategy: lead with applied AI / LLM evaluation
            (ExplainCast is the proof), back it with XAI/interpretability where the thesis is the
            product, keep AgTech as a proven domain, and use big-tech applied science for volume and
            visa optionality.
          </p>
        </header>

        <section className="surface-card p-5 sm:p-6 mb-8">
          <h2 className="font-display font-semibold text-slate-900 mb-3">Job boards</h2>
          <div className="flex flex-wrap gap-2">
            {boards.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="chip-brand inline-flex items-center gap-1.5">
                {b.name} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-8">
          {tiers.map((tier) => (
            <section key={tier.title}>
              <h2 className="font-display text-lg font-semibold text-slate-900">{tier.title}</h2>
              <p className="text-sm text-slate-500 mt-1 mb-4 max-w-3xl">{tier.note}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {tier.companies.map((c) => (
                  <a
                    key={c.name}
                    href={jobs(c.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="surface-card p-4 flex items-start justify-between gap-3 hover:-translate-y-0.5 transition-transform"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                        {c.name}
                        {c.star && <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">{c.why}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-400">
          Private planning page — linked only from the footer. Edit in{" "}
          <code>src/pages/Opportunities.tsx</code>.
        </p>
      </div>
    </div>
  );
};

export default Opportunities;
