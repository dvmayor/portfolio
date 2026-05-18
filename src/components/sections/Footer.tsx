export default function Footer() {
  return (
    <footer className="px-8 py-12 lg:px-16">
      <div
        className="flex flex-col items-center gap-2 text-center text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        <p>
          Designed &amp; built by{" "}
          <span style={{ color: "var(--color-text-body)" }}>David Reuel Villamayor</span>
        </p>
        <p className="font-mono">
          Built with Next.js · Tailwind CSS · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
