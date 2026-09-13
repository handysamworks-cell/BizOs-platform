export default function SectionHeading({
  number,
  title,
  intro,
  light = false,
}: {
  number?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-baseline gap-3">
        {number && (
          <span className={`font-mono text-sm ${light ? "text-copper" : "text-copper"}`}>
            {number}
          </span>
        )}
        <h2 className={`font-head text-2xl font-bold sm:text-3xl ${light ? "text-paper" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`mt-3 text-base leading-relaxed ${light ? "text-steel-300" : "text-steel-700"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
