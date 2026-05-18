import { type LucideIcon } from "lucide-react";

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  size?: number;
}

export default function IconLink({ href, icon: Icon, label, size = 20 }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group transition-colors duration-200"
      style={{ color: "var(--color-text-muted)" }}
    >
      <Icon
        size={size}
        className="transition-colors duration-200 group-hover:text-accent"
      />
    </a>
  );
}
