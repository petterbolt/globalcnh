import { ChevronRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppBadge, WhatsAppIcon } from "@/components/icons";

type Variant = "green" | "gold" | "header";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  /** Mostra a seta ">" à direita. */
  arrow?: boolean;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  green:
    "bg-[linear-gradient(180deg,#14bb5f_0%,#03a04f_100%)] text-white shadow-[0_10px_28px_-8px_rgba(3,160,79,0.65)] hover:brightness-110",
  gold: "bg-[linear-gradient(180deg,#f6cd78_0%,#f0bf5f_100%)] text-ink shadow-[0_8px_24px_-10px_rgba(231,182,75,0.8)] hover:brightness-105",
  header:
    "bg-[linear-gradient(180deg,#f6cd78_0%,#f0bf5f_100%)] text-navy-900 shadow-[0_6px_18px_-8px_rgba(231,182,75,0.9)] hover:brightness-105",
};

export function WhatsAppButton({ children, variant = "green", arrow = true, className = "" }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-between gap-3 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${VARIANTS[variant]} ${className}`}
    >
      <span className="flex items-center gap-[0.6em]">
        {variant === "header" ? (
          <WhatsAppBadge className="size-[1.45em] shrink-0" />
        ) : (
          <WhatsAppIcon className="size-[1.4em] shrink-0" />
        )}
        <span>{children}</span>
      </span>
      {arrow && (
        <ChevronRight
          className="size-[1.15em] shrink-0 transition-transform group-hover:translate-x-1"
          strokeWidth={3}
          aria-hidden="true"
        />
      )}
    </a>
  );
}
