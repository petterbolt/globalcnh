import Image from "next/image";
import { HERO_BENEFITS, IMAGES } from "@/data/content";
import { BenefitItem } from "@/components/BenefitItem";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-navy-950 lg:h-[clamp(680px,59.8vw,900px)]"
    >
      {/* Fundo: Lisboa + bandeira (asset fornecido) */}
      <div className="absolute inset-0 -z-20 lg:inset-auto lg:top-[-3.6%] lg:right-0 lg:aspect-[1672/941] lg:h-[114%]">
        <Image
          src={IMAGES.lisboa}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 120vw, 100vw"
          className="object-cover object-[72%_center] lg:object-center"
        />
      </div>

      {/* Overlay azul-marinho para leitura do texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,18,32,0.82)_0%,rgba(0,18,32,0.9)_45%,rgba(0,18,32,0.55)_75%,rgba(0,18,32,0.25)_100%)] lg:bg-[linear-gradient(90deg,#001220_0%,#001220_24%,rgba(0,18,32,0.9)_34%,rgba(0,18,32,0.55)_45%,rgba(0,18,32,0.12)_58%,rgba(0,18,32,0)_66%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 hidden h-[22%] bg-[linear-gradient(180deg,rgba(0,18,32,0.55),transparent)] lg:block"
      />

      {/* Pessoa (desktop: à direita, colada na base) */}
      <div className="hero-person-mask pointer-events-none absolute right-0 bottom-0 hidden aspect-[990/894] w-[47.6vw] max-w-[940px] lg:block">
        <Image
          src={IMAGES.heroPessoa}
          alt="Brasileira sorrindo e segurando sua CNH renovada em Lisboa"
          fill
          priority
          sizes="48vw"
          className="object-cover object-bottom"
        />
      </div>

      <div className="container-lp relative pt-[112px] lg:pt-[clamp(118px,11vw,160px)]">
        <div className="max-w-[640px] lg:max-w-[min(52vw,760px)]">
          <p className="inline-flex items-center rounded-full border-[1.5px] border-gold/90 bg-navy-950/40 px-[1.05em] py-[0.42em] text-[clamp(9.5px,3.05vw,12px)] leading-tight font-semibold whitespace-nowrap text-white uppercase sm:text-[14px] lg:text-[clamp(14px,1.35vw,19.5px)]">
            <span>
              Brasileiros em Portugal <span className="text-gold">e em toda a Europa</span>
            </span>
          </p>

          <h1 className="mt-4 text-[clamp(30px,calc((100vw-40px)/9),48px)] leading-[1.1] font-extrabold text-white lg:mt-[clamp(10px,0.9vw,14px)] lg:text-[clamp(56px,5.55vw,80px)] lg:leading-[1.04]">
            <span className="lg:whitespace-nowrap">Você é brasileiro</span>
            <br />
            <span className="text-gold lg:whitespace-nowrap">
              e quer renovar
              <br />
              sua CNH?
            </span>
          </h1>

          <p className="mt-4 text-[18px] leading-[1.55] font-normal text-white/95 sm:text-[20px] lg:mt-[clamp(14px,1.45vw,22px)] lg:text-[clamp(20px,2vw,29px)] lg:leading-[1.38]">
            A Global cuida de todo o processo
            <br className="hidden sm:block" /> no Brasil para você, enquanto
            <br className="hidden sm:block" /> você continua na Europa.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 text-[14px] min-[420px]:grid-cols-3 min-[420px]:gap-2 sm:text-[15px] lg:mt-[clamp(28px,3.4vw,50px)] lg:flex lg:gap-[clamp(20px,2.2vw,32px)] lg:text-[clamp(13px,1.2vw,17.4px)]">
            {HERO_BENEFITS.map((b) => (
              <BenefitItem
                key={b.icon}
                weight="semibold"
                {...b}
                iconClassName="size-[2.4em] min-[420px]:size-[2.2em] lg:size-[2.85em]"
                className="min-[420px]:flex-col min-[420px]:items-start min-[420px]:gap-2 sm:flex-row sm:items-center sm:gap-[0.75em]"
              />
            ))}
          </ul>

          <WhatsAppButton
            className="mt-8 h-[62px] w-full px-[18px] text-[14px] min-[360px]:whitespace-nowrap min-[400px]:text-[16px] sm:w-auto sm:min-w-[440px] sm:text-[19px] lg:mt-[clamp(28px,3vw,44px)] lg:h-[clamp(64px,5.75vw,83px)] lg:w-[clamp(470px,45.3vw,652px)] lg:px-[clamp(24px,2.5vw,36px)] lg:text-[clamp(19px,1.85vw,26.6px)]"
          >
            Quero renovar minha CNH agora
          </WhatsAppButton>
        </div>
      </div>

      {/* Pessoa (mobile/tablet: abaixo do texto, sem cobrir conteúdo) */}
      <div className="relative mt-6 lg:hidden">
        <div className="hero-person-mask relative ml-auto aspect-[990/894] w-[92%] max-w-[560px] md:max-w-[620px]">
          <Image
            src={IMAGES.heroPessoa}
            alt="Brasileira sorrindo e segurando sua CNH renovada em Lisboa"
            fill
            sizes="(min-width: 640px) 560px, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
