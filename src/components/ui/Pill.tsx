import { type LucideIcon } from "lucide-react";

type Variant = "tech" | "outcome" | "domain";

interface PillProps {
  variant: Variant;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const pillBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
};

function techStyle(): React.CSSProperties {
  return {
    ...pillBase,
    borderRadius: "9999px",
    padding: "4px 11px",
    fontSize: "11px",
    fontWeight: 600,
    border: "1px solid var(--color-tag-tech-border)",
    backgroundColor: "var(--color-tag-tech-bg)",
    color: "var(--color-tag-tech-text)",
  };
}

function outcomeStyle(): React.CSSProperties {
  return {
    ...pillBase,
    borderRadius: "9999px",
    padding: "4px 11px",
    fontSize: "11px",
    fontWeight: 600,
    border: "1px solid var(--color-tag-outcome-border)",
    backgroundColor: "var(--color-tag-outcome-bg)",
    color: "var(--color-tag-outcome-text)",
  };
}

function domainStyle(): React.CSSProperties {
  return {
    ...pillBase,
    borderRadius: "9999px",
    padding: "4px 11px",
    fontSize: "11px",
    fontWeight: 600,
    border: "1px solid var(--color-tag-domain-border)",
    backgroundColor: "transparent",
    color: "var(--color-tag-domain-text)",
  };
}

const styleMap: Record<Variant, () => React.CSSProperties> = {
  tech: techStyle,
  outcome: outcomeStyle,
  domain: domainStyle,
};

export default function Pill({ variant, icon: Icon, children }: PillProps) {
  return (
    <span style={styleMap[variant]()}>
      {Icon && <Icon size={11} />}
      {children}
    </span>
  );
}
