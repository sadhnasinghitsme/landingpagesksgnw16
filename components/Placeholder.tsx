/**
 * Lightweight image placeholder — a warm textured block with a descriptive
 * label. No network request, no layout shift. Swap for <Image> once real
 * photos from skswsgnw.ac.in are available.
 */
export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex ${ratio} w-full items-end overflow-hidden rounded-card border border-cream-border bg-gradient-to-br from-brand/10 via-gold/10 to-cream-dark ${className}`}
    >
      <span className="m-3 rounded-btn bg-white/85 px-2 py-1 text-xs font-medium text-ink/70">
        {label}
      </span>
    </div>
  );
}
