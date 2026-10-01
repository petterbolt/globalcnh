import { Check, FileText, Folder, UserRound } from "lucide-react";
import { SERVICES, type ServiceIcon } from "@/data/content";
import { SectionLabel } from "@/components/SectionLabel";

const ICONS: Record<ServiceIcon, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  document: FileText,
  folder: Folder,
  user: UserRound,
  check: Check,
};

export function Services() {
  return (
    <section
      id="o-que-fazemos"
      className="relative overflow-hidden bg-navy-900 bg-[radial-gradient(ellipse_at_50%_0%,rgba(19,58,96,0.45),transparent_65%)] py-14 lg:min-h-[clamp(420px,33.6vw,500px)] lg:pt-[clamp(28px,2.5vw,36px)] lg:pb-[clamp(14px,1.3vw,18px)]"
    >
      <div className="container-lp text-center">
        <SectionLabel align="center" tone="gold" className="text-[14px] lg:text-[clamp(14px,1.32vw,19px)]">
          O que fazemos
        </SectionLabel>

        <h2 className="mt-3 text-[30px] leading-[1.2] font-extrabold text-white sm:text-[36px] lg:mt-[clamp(6px,0.7vw,10px)] lg:text-[clamp(31px,2.88vw,41.4px)]">
          Nós cuidamos de todo o processo
        </h2>

        <p className="mx-auto mt-3 max-w-[980px] text-[16px] leading-[1.6] text-white/90 sm:text-[17px] lg:mt-[clamp(8px,0.9vw,12px)] lg:text-[clamp(15px,1.41vw,20.3px)] lg:leading-[1.45]">
          Você não precisa se preocupar com a burocracia. A Global faz a renovação da sua CNH no Brasil,
          <br className="hidden lg:block" /> enquanto você continua vivendo sua rotina na Europa.
        </p>

        <ul className="mt-9 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:mt-[clamp(18px,1.6vw,24px)] lg:grid-cols-4 lg:gap-[clamp(14px,1.55vw,22px)]">
          {SERVICES.map(({ icon, title, description }) => {
            const Icon = ICONS[icon];
            return (
              <li
                key={title}
                className="flex flex-col items-center rounded-[14px] border border-white/[0.04] bg-navy-800/90 px-5 pt-6 pb-7 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] lg:min-h-[clamp(196px,15.6vw,226px)] lg:rounded-[12px] lg:px-[clamp(14px,1.4vw,20px)] lg:pt-[clamp(18px,1.65vw,24px)] lg:pb-[clamp(10px,1vw,14px)]"
              >
                <span className="grid size-[64px] place-items-center rounded-full bg-gold text-navy-900 lg:size-[clamp(54px,4.7vw,68px)]">
                  <Icon
                    className={`size-[58%] ${icon === "user" ? "fill-navy-900" : ""}`}
                    strokeWidth={icon === "check" ? 3.4 : 2.3}
                  />
                </span>
                <h3 className="mt-5 text-[18px] font-bold text-white lg:mt-[clamp(12px,1.25vw,18px)] lg:text-[clamp(15px,1.4vw,20.2px)]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[240px] text-[15px] leading-[1.5] text-white/85 lg:mt-[clamp(6px,0.7vw,10px)] lg:max-w-[clamp(200px,17.5vw,252px)] lg:text-[clamp(13.5px,1.24vw,17.9px)] lg:leading-[1.38]">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
