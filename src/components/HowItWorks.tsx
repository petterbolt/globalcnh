import { ChevronRight } from "lucide-react";
import { STEPS } from "@/data/content";
import { StepGlyph } from "@/components/icons";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-[#fafafa] py-14 lg:min-h-[clamp(400px,31.25vw,470px)] lg:pt-[clamp(24px,2.3vw,34px)] lg:pb-[clamp(16px,1.7vw,25px)]"
    >
      <div className="container-lp text-center">
        <p className="text-[15px] font-medium text-ink lg:text-[clamp(14px,1.33vw,19.2px)]">Como funciona</p>
        <h2 className="mt-2 text-[30px] leading-[1.2] font-extrabold text-ink sm:text-[36px] lg:mt-[clamp(4px,0.6vw,8px)] lg:text-[clamp(28px,2.55vw,36.7px)]">
          Renovar sua CNH é simples e seguro
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:-mx-[clamp(0px,2.2vw,32px)] lg:mt-[clamp(16px,1.6vw,24px)] lg:grid-cols-4 lg:gap-x-0">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center">
              <div className="relative">
                <span
                  className="absolute top-[-10px] right-[calc(100%+18px)] grid size-[44px] place-items-center rounded-full bg-gold text-[18px] font-bold text-ink lg:right-[calc(100%+clamp(16px,2.1vw,30px))] lg:size-[clamp(42px,3.75vw,54px)] lg:text-[clamp(15px,1.44vw,20.8px)]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <StepGlyph
                  icon={step.icon}
                  className={`h-[64px] lg:h-[clamp(62px,5.8vw,84px)] ${step.icon === "card" ? "w-[80px] lg:w-[clamp(78px,7.25vw,105px)]" : "w-[64px] lg:w-[clamp(62px,5.8vw,84px)]"}`}
                />
              </div>
              <h3 className="mt-4 text-[18px] font-bold text-ink lg:mt-[clamp(8px,0.9vw,13px)] lg:text-[clamp(15px,1.44vw,20.8px)]">
                <span className="sr-only">Etapa {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[260px] text-[15px] leading-[1.45] text-[#333] lg:mt-[clamp(4px,0.4vw,6px)] lg:max-w-[clamp(220px,20vw,290px)] lg:text-[clamp(13.5px,1.22vw,17.6px)] lg:leading-[1.3]">
                {step.description}
              </p>

              {i < STEPS.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  strokeWidth={2.6}
                  className="mt-4 size-7 rotate-90 text-ink sm:hidden lg:absolute lg:top-[clamp(66px,6.2vw,90px)] lg:right-0 lg:mt-0 lg:block lg:size-[clamp(22px,2vw,30px)] lg:translate-x-1/2 lg:rotate-0"
                />
              )}
            </li>
          ))}
        </ol>

        <WhatsAppButton className="mt-10 h-[62px] w-full px-[18px] text-[14px] min-[360px]:whitespace-nowrap min-[400px]:text-[16px] sm:w-auto sm:min-w-[440px] sm:text-[19px] lg:mt-[clamp(14px,1.5vw,22px)] lg:h-[clamp(62px,5.45vw,79px)] lg:w-[clamp(460px,44.2vw,637px)] lg:px-[clamp(24px,2.4vw,34px)] lg:text-[clamp(18px,1.76vw,25.4px)]">
          Quero renovar minha CNH agora
        </WhatsAppButton>
      </div>
    </section>
  );
}
