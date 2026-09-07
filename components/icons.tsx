import type { SVGProps } from "react";

/* Lightweight inline icons — no icon library, ~1 path each. */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TrophyIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H4a2 2 0 0 0 2 4M18 6h2a2 2 0 0 1-2 4M9 20h6M12 14v6" />
    </svg>
  );
}

export function CertificateIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 9h8M8 13h5M12 17v4l2-1.5L16 21v-4" />
    </svg>
  );
}

export function BusIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="13" rx="2" />
      <path d="M4 11h16M8 4v7M16 4v7" />
      <circle cx="8" cy="19" r="1.6" />
      <circle cx="16" cy="19" r="1.6" />
    </svg>
  );
}

export function RobotIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M12 4v4M9 13h.01M15 13h.01M3 12v3M21 12v3" />
    </svg>
  );
}

export function PhoneChatIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

export function BoardIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M7 9h6M7 12h10M12 17v4M9 21h6" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.6 3h3l1.5 4.5L9 9a12 12 0 0 0 6 6l1.5-2.1L21 14.4v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6.6 3Z" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ChevronDownIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FlaskIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 17l-5-8V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

export function PaletteIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.5 0-1 .5-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-5-4-9-9-9Z" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="16" cy="10" r="1" />
    </svg>
  );
}

export function BallIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 0 0 18M3 12h18M5 6c3 2 11 2 14 0M5 18c3-2 11-2 14 0" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
