/**
 * School house colours (red / blue / yellow / green) used as light accents.
 * Class strings are written out in full so Tailwind's JIT picks them up.
 */
export const HOUSE = ["red", "blue", "yellow", "green"] as const;

export const HOUSE_TEXT = [
  "text-house-red",
  "text-house-blue",
  "text-house-yellow",
  "text-house-green",
] as const;

export const HOUSE_CHIP = [
  "bg-house-red/10 text-house-red",
  "bg-house-blue/10 text-house-blue",
  "bg-house-yellow/10 text-house-yellow",
  "bg-house-green/10 text-house-green",
] as const;

export const HOUSE_DOT = [
  "bg-house-red",
  "bg-house-blue",
  "bg-house-yellow",
  "bg-house-green",
] as const;

export const HOUSE_STRIP = [
  "bg-house-red",
  "bg-house-blue",
  "bg-house-yellow",
  "bg-house-green",
] as const;

export const HOUSE_BORDER_L = [
  "border-house-red",
  "border-house-blue",
  "border-house-yellow",
  "border-house-green",
] as const;

export const HOUSE_HOVER_BORDER = [
  "hover:border-house-red",
  "hover:border-house-blue",
  "hover:border-house-yellow",
  "hover:border-house-green",
] as const;

export const HOUSE_OPEN_BORDER = [
  "open:border-house-red",
  "open:border-house-blue",
  "open:border-house-yellow",
  "open:border-house-green",
] as const;

export const HOUSE_OPEN_TEXT = [
  "group-open:text-house-red",
  "group-open:text-house-blue",
  "group-open:text-house-yellow",
  "group-open:text-house-green",
] as const;

/** A short 4-segment rule in the house colours. */
export function HouseRule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-1 w-20 overflow-hidden rounded-full ${className}`}
    >
      <span className="flex-1 bg-house-red" />
      <span className="flex-1 bg-house-blue" />
      <span className="flex-1 bg-house-yellow" />
      <span className="flex-1 bg-house-green" />
    </span>
  );
}

/** Full-width 4-segment hairline (used under the header). */
export function HouseBar({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-1 ${className}`}>
      <span className="flex-1 bg-house-red" />
      <span className="flex-1 bg-house-blue" />
      <span className="flex-1 bg-house-yellow" />
      <span className="flex-1 bg-house-green" />
    </div>
  );
}
