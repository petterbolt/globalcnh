"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="bg-[#fafafa] py-14 lg:py-[clamp(24px,2.35vw,34px)]">
      <div className="container-lp grid gap-10 lg:grid-cols-[minmax(0,1fr)_57.3%] lg:gap-8">
        <div>
          <SectionLabel className="text-[13px] font-medium lg:text-[clamp(12px,1vw,14.5px)]">FAQ</SectionLabel>
          <h2 className="mt-2 text-[30px] leading-[1.2] font-extrabold text-ink sm:text-[36px] lg:mt-[clamp(4px,0.5vw,8px)] lg:text-[clamp(27px,2.49vw,35.9px)]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-[17px] leading-[1.6] text-[#2a2f36] lg:mt-[clamp(6px,0.7vw,10px)] lg:text-[clamp(16px,1.53vw,22px)] lg:leading-[1.42]">
            Tire suas dúvidas sobre a renovação
            <br className="hidden sm:block" /> da CNH na Europa.
          </p>
          <WhatsAppButton
            variant="gold"
            arrow={false}
            className="mt-6 h-[60px] w-full justify-center px-6 text-[16px] sm:w-auto sm:min-w-[360px] lg:mt-[clamp(14px,1.45vw,21px)] lg:h-[clamp(54px,4.7vw,68px)] lg:w-[clamp(330px,29.5vw,425px)] lg:justify-start lg:px-[clamp(22px,2.1vw,30px)] lg:text-[clamp(16px,1.47vw,21.1px)]"
          >
            Falar com um especialista
          </WhatsAppButton>
        </div>

        <ul className="flex flex-col gap-[7px]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <li key={item.question} className="rounded-[10px] bg-faq transition-colors hover:bg-[#e7eaee]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[52px] w-full items-center justify-between gap-4 rounded-[10px] px-[18px] py-3 text-left text-[15px] font-medium text-[#3a3f46] focus-visible:outline-2 focus-visible:outline-gold lg:min-h-[clamp(42px,3.4vw,49px)] lg:py-1 lg:text-[clamp(14px,1.25vw,18px)]"
                  >
                    {item.question}
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={2.6}
                      className={`size-[18px] shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[18px] pb-4 text-[15px] leading-[1.6] text-[#4a5058] lg:text-[clamp(13.5px,1.08vw,15.5px)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
