"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/content";
import { CarouselArrow, CarouselDots } from "@/components/CarouselControls";

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(lg.matches ? 3 : md.matches ? 2 : 1);
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);
  return perView;
}

/** Carrossel de DEPOIMENTOS (rotativo, independente da galeria de fotos). */
export function Testimonials() {
  const total = TESTIMONIALS.length;
  const perView = Math.min(usePerView(), total);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchX = useRef<number | null>(null);

  const go = (target: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex(((target % total) + total) % total);
  };

  const visible = Array.from({ length: perView }, (_, k) => TESTIMONIALS[(index + k) % total]);

  return (
    <section
      id="depoimentos"
      className="bg-navy-900 bg-[radial-gradient(ellipse_at_50%_0%,rgba(19,58,96,0.4),transparent_70%)] py-14 lg:pt-[clamp(26px,2.6vw,38px)] lg:pb-[clamp(16px,1.6vw,24px)]"
    >
      <div className="container-lp text-center">
        <h2 className="text-[28px] leading-[1.2] font-extrabold text-white sm:text-[34px] lg:text-[clamp(29px,2.79vw,40.2px)]">
          O que nossos clientes dizem
        </h2>
        <p className="mt-2 text-[16px] text-white/90 sm:text-[17px] lg:mt-[clamp(6px,0.7vw,10px)] lg:text-[clamp(16px,1.49vw,21.4px)]">
          Brasileiros que já renovaram sua CNH com a Global
        </p>

        <div
          className="relative mt-8 lg:mt-[clamp(18px,1.9vw,28px)]"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <ul
            key={index}
            style={{ "--fade-from": `${direction * 18}px` } as React.CSSProperties}
            className="animate-fade-slide grid grid-cols-1 gap-[clamp(14px,1.55vw,22px)] text-left md:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {visible.map((t) => (
              <li
                key={t.name}
                className="flex min-h-[170px] flex-col items-start gap-4 rounded-[14px] bg-white px-5 py-6 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.7)] lg:min-h-[clamp(170px,13.9vw,200px)] lg:gap-[clamp(14px,1.7vw,24px)] lg:py-[clamp(14px,1.3vw,18px)] lg:pr-[clamp(12px,1.2vw,18px)] lg:pl-[clamp(16px,1.75vw,25px)]"
              >
                <Image
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  width={200}
                  height={200}
                  className="size-[72px] shrink-0 rounded-full min-[400px]:size-[84px] object-cover lg:size-[clamp(80px,7.65vw,110px)]"
                />
                <figure>
                  <blockquote className="text-[16px] leading-[1.5] text-ink lg:text-[clamp(14px,1.29vw,18.6px)] lg:leading-[1.4]">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-1.5 flex gap-[3px] text-[#ffbe30]" aria-label="5 de 5 estrelas" role="img">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} className="size-[20px] fill-current lg:size-[clamp(17px,1.6vw,23px)]" strokeWidth={0} />
                    ))}
                  </div>
                  <figcaption className="mt-2">
                    <span className="block text-[17px] font-bold text-ink lg:text-[clamp(15px,1.42vw,20.5px)]">
                      {t.name}
                    </span>
                    <span className="block text-[15px] text-[#333] lg:text-[clamp(14px,1.32vw,19px)]">
                      {t.location}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <CarouselArrow
            variant="plain"
            direction="prev"
            onClick={() => go(index - 1, -1)}
            className="absolute top-1/2 left-[clamp(-60px,-3vw,-36px)] hidden -translate-y-1/2 lg:grid"
          />
          <CarouselArrow
            variant="plain"
            direction="next"
            onClick={() => go(index + 1, 1)}
            className="absolute top-1/2 right-[clamp(-60px,-3vw,-36px)] hidden -translate-y-1/2 lg:grid"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:mt-[clamp(12px,1.25vw,18px)]">
          <CarouselArrow variant="plain" direction="prev" onClick={() => go(index - 1, -1)} className="lg:hidden" />
          <CarouselDots
            count={total}
            active={index}
            onSelect={(i) => go(i, i >= index ? 1 : -1)}
            inactiveClassName="bg-[#8a96a3] hover:bg-[#b3bcc6]"
            label="Depoimentos"
          />
          <CarouselArrow variant="plain" direction="next" onClick={() => go(index + 1, 1)} className="lg:hidden" />
        </div>
      </div>
    </section>
  );
}
