import { type LucideIcon } from "lucide-react";

type Variant = "outcome" | "award" | "tech";

interface PillProps {
  variant: Variant;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, { bg: string; border: string; color: string }> = {
  outcome: {
    bg: "var(--color-tag-outcome-bg)",
    border: "var(--color-tag-outcome-border)",
    color: "var(--color-outcome)",
  },
  award: {
    bg: "var(--color-tag-award-bg)",
    border: "var(--color-tag-award-border)",
    color: "var(--color-award)",
  },
  tech: {
    bg: "var(--color-tag-tech-bg)",
    border: "var(--color-tag-tech-border)",
    color: "var(--color-tech)",
  },
};

export default function Pill({ variant, icon: Icon, children }: PillProps) {
  const s = variantStyles[variant];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: s.bg, border: `1px solid ${s.border}`, color: s.color }}
    >
      {Icon && <Icon size={11} />}
      {children}
    </span>
  );
}
