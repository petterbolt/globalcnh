import Image from "next/image";
import { IMAGES } from "@/data/content";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" aria-label="Global — início" className={`flex items-center gap-[0.18em] ${className}`}>
      <Image
        src={IMAGES.logoEmblema}
        alt=""
        width={192}
        height={164}
        priority
        className="h-[1.75em] w-auto"
      />
      <span className="font-logo text-gold-gradient leading-none font-bold tracking-[0.01em]">GLOBAL</span>
    </a>
  );
}
