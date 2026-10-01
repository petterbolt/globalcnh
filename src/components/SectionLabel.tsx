type Props = {
  children: React.ReactNode;
  /** "left": traço só à esquerda. "center": traço dos dois lados. */
  align?: "left" | "center";
  tone?: "dark" | "gold";
  className?: string;
};

export function SectionLabel({ children, align = "left", tone = "dark", className = "" }: Props) {
  const dash = <span aria-hidden="true" className="h-[2px] w-[1.3em] rounded-full bg-gold" />;
  return (
    <p
      className={`flex items-center gap-[0.45em] font-semibold ${
        align === "center" ? "justify-center" : ""
      } ${tone === "gold" ? "text-gold" : "text-ink"} ${className}`}
    >
      {dash}
      <span>{children}</span>
      {align === "center" && dash}
    </p>
  );
}
