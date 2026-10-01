import Image from "next/image";
import { FINAL_CTA_BENEFITS, IMAGES } from "@/data/content";
import { BenefitItem } from "@/components/BenefitItem";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 lg:min-h-[clamp(440px,38.2vw,560px)]">
      <Image
        src={IMAGES.lisboa}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[70%_40%] lg:origin-[100%_0%] lg:scale-[1.08] lg:object-[50%_4%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgba(1,22,40,0.8)] lg:bg-[linear-gradient(90deg,rgba(1,22,40,0.3)_0%,rgba(1,22,40,0.62)_22%,rgba(1,22,40,0.84)_40%,rgba(1,22,40,0.84)_60%,rgba(1,22,40,0.45)_72%,rgba(1,22,40,0.05)_82%,rgba(1,22,40,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,22,40,0.12)_0%,rgba(1,22,40,0)_35%,rgba(1,22,40,0.15)_70%,rgba(1,22,40,0.55)_100%)]"
      />

      <div className="container-lp flex flex-col items-center pt-14 pb-20 text-center lg:pt-[clamp(26px,2.7vw,40px)] lg:pb-[clamp(60px,9vw,140px)]">
        <h2 className="text-[30px] leading-[1.2] font-extrabold text-white sm:text-[36px] lg:text-[clamp(30px,2.85vw,41px)]">
          Não deixe sua CNH vencer!
        </h2>
        <p className="mt-3 max-w-[800px] text-[16px] leading-[1.6] text-white/95 sm:text-[17px] lg:mt-[clamp(6px,0.75vw,11px)] lg:text-[clamp(16px,1.47vw,21.2px)] lg:leading-[1.4]">
          Fale agora com um especialista da Global e renove sua CNH brasileira
          <br className="hidden md:block" /> com praticidade, segurança e sem sair da Europa.
        </p>

        <WhatsAppButton className="mt-7 h-[62px] w-full px-[18px] text-[14px] min-[360px]:whitespace-nowrap min-[400px]:text-[16px] sm:w-auto sm:min-w-[440px] sm:text-[19px] lg:mt-[clamp(14px,1.5vw,22px)] lg:h-[clamp(62px,5.7vw,82px)] lg:w-[clamp(420px,36.9vw,532px)] lg:px-[clamp(22px,2.2vw,32px)] lg:text-[clamp(17px,1.53vw,22px)]">
          Quero falar no WhatsApp agora
        </WhatsAppButton>

        <ul className="mt-10 grid grid-cols-1 gap-5 text-left text-[14px] sm:grid-cols-3 sm:gap-6 lg:mt-[clamp(36px,3.75vw,54px)] lg:flex lg:gap-[clamp(36px,4vw,58px)] lg:text-[clamp(13px,1.09vw,15.7px)]">
          {FINAL_CTA_BENEFITS.map((b) => (
            <BenefitItem key={b.icon} {...b} iconClassName="size-[2.6em] lg:size-[2.9em]" />
          ))}
        </ul>
      </div>

      <p className="absolute inset-x-0 bottom-3 text-center text-[12px] text-white/55">
        © {new Date().getFullYear()} Global — Assessoria para renovação de CNH brasileira na Europa
      </p>
    </footer>
  );
}
