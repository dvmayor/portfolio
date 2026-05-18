interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide"
      style={{
        backgroundColor: "var(--color-tag-bg)",
        color: "var(--color-accent)",
        border: "1px solid var(--color-tag-border)",
      }}
    >
      {label}
    </span>
  );
}
