import Image from "next/image";
import { IMAGES } from "@/data/content";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function TaglineOverlay({ className = "" }: { className?: string }) {
  return (
    <p className={`font-semibold tracking-[0.02em] text-navy-900 uppercase ${className}`}>
      Do Brasil
      <br />
      para você
      <br />
      na Europa
    </p>
  );
}

export function About() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fb_100%)] lg:h-[clamp(440px,34.6vw,520px)]"
    >
      {/* Composição globo + Portugal (desktop) */}
      <div className="about-image-mask absolute top-1/2 right-0 hidden aspect-[1032/708] w-[51%] -translate-y-1/2 lg:block">
        <Image
          src={IMAGES.about}
          alt="Globo conectando Brasil e Portugal com arquitetura portuguesa ao fundo"
          fill
          sizes="52vw"
          className="object-cover object-left"
        />
        <TaglineOverlay className="absolute top-[16%] left-[59%] text-[clamp(16px,1.6vw,23px)] leading-[1.25]" />
      </div>

      <div className="container-lp relative flex h-full items-center py-14 lg:py-0">
        <div className="max-w-[640px] lg:max-w-[min(46vw,660px)]">
          <SectionLabel className="text-[14px] lg:text-[clamp(14px,1.32vw,19px)]">Quem Somos</SectionLabel>

          <h2 className="mt-3 text-[30px] leading-[1.2] font-extrabold text-ink sm:text-[36px] lg:mt-[clamp(8px,1vw,14px)] lg:text-[clamp(32px,3.02vw,43.5px)] lg:leading-[1.24]">
            Especialistas em renovação
            <br className="hidden sm:block" /> de CNH para brasileiros
            <br className="hidden sm:block" /> na Europa
          </h2>

          <p className="mt-4 text-[16px] leading-[1.7] text-[#2a2f36] sm:text-[17px] lg:mt-[clamp(12px,1.2vw,18px)] lg:text-[clamp(17px,1.62vw,23.3px)] lg:leading-[1.36]">
            A Global é uma empresa sediada em Portugal,
            <br className="hidden sm:block" /> especializada em assessoria para renovação da CNH
            <br className="hidden sm:block" /> brasileira, oferecendo um processo prático, seguro e
            <br className="hidden sm:block" /> totalmente acompanhado por uma equipe experiente.
          </p>

          <WhatsAppButton
            variant="gold"
            className="mt-7 h-[60px] w-full px-5 text-[14px] min-[400px]:text-[15px] sm:w-auto sm:min-w-[460px] sm:text-[17px] lg:mt-[clamp(18px,1.8vw,26px)] lg:h-[clamp(56px,4.85vw,70px)] lg:w-[clamp(440px,40.5vw,584px)] lg:px-[clamp(22px,2.2vw,32px)] lg:text-[clamp(16px,1.46vw,21px)]"
          >
            Falar com nossa equipe no WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      {/* Composição (mobile/tablet) */}
      <div className="relative aspect-[1032/708] w-full lg:hidden">
        <Image
          src={IMAGES.about}
          alt="Globo conectando Brasil e Portugal com arquitetura portuguesa ao fundo"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <TaglineOverlay className="absolute top-[14%] left-[58%] text-[clamp(11px,2.9vw,20px)] leading-[1.35]" />
      </div>
    </section>
  );
}
