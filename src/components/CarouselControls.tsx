import { ChevronLeft, ChevronRight } from "lucide-react";

type ArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
  variant: "circle" | "plain";
  className?: string;
};

export function CarouselArrow({ direction, onClick, variant, className = "" }: ArrowProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const styles =
    variant === "circle"
      ? "size-[clamp(40px,3.75vw,54px)] rounded-full bg-white text-ink shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] hover:scale-105"
      : "size-10 text-gold hover:text-gold-light";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Anterior" : "Próximo"}
      className={`grid place-items-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${styles} ${className}`}
    >
      <Icon className={variant === "circle" ? "size-[45%]" : "size-7"} strokeWidth={variant === "circle" ? 3 : 2.4} />
    </button>
  );
}

type DotsProps = {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  inactiveClassName: string;
  label: string;
};

export function CarouselDots({ count, active, onSelect, inactiveClassName, label }: DotsProps) {
  if (count < 2) return null;
  return (
    <div className="flex items-center justify-center gap-[clamp(8px,0.7vw,10px)]" role="tablist" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`Ir para ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`size-[clamp(9px,0.85vw,12px)] rounded-full transition-colors ${
            i === active ? "bg-gold" : inactiveClassName
          }`}
        />
      ))}
    </div>
  );
}
