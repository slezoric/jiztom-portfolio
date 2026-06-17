interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) => {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-blue-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
