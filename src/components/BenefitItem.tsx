import type { BenefitIcon } from "@/data/content";
import { BenefitGlyph } from "@/components/icons";

type Props = {
  icon: BenefitIcon;
  lines: [string, string];
  className?: string;
  iconClassName?: string;
  weight?: "medium" | "semibold";
};

export function BenefitItem({ icon, lines, className = "", iconClassName = "", weight = "medium" }: Props) {
  return (
    <li className={`flex items-center gap-[0.75em] leading-[1.4] text-white ${weight === "semibold" ? "font-semibold" : "font-medium"} ${className}`}>
      <BenefitGlyph icon={icon} className={`shrink-0 text-gold ${iconClassName}`} />
      <span>
        {lines[0]}
        <br />
        {lines[1]}
      </span>
    </li>
  );
}
