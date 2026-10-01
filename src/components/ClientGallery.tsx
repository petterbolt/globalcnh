"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/data/content";
import { CarouselArrow, CarouselDots } from "@/components/CarouselControls";

/** Carrossel de FOTOS (scroll-snap nativo: swipe no mobile, setas e dots). */
export function ClientGallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const pageWidth = el.clientWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const count = Math.max(1, Math.ceil(maxScroll / pageWidth - 0.05) + 1);
    setPageCount(count);
    setPage(el.scrollLeft >= maxScroll - 2 ? count - 1 : Math.round(el.scrollLeft / pageWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [measure]);

  const goTo = (target: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = (target + pageCount) % pageCount;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollTo({ left: next * (el.clientWidth + gap), behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="galeria-titulo"
      className="bg-[linear-gradient(180deg,#f3f6fa_0%,#e8eef6_100%)] py-14 lg:pt-[clamp(26px,2.6vw,38px)] lg:pb-[clamp(10px,0.9vw,14px)]"
    >
      <div className="container-lp text-center">
        <h2
          id="galeria-titulo"
          className="text-[28px] leading-[1.2] font-extrabold text-ink sm:text-[34px] lg:text-[clamp(28px,2.52vw,36.3px)]"
        >
          Veja alguns registros dos nossos clientes
        </h2>
        <p className="mt-2 text-[16px] text-[#2a2f36] sm:text-[17px] lg:mt-[clamp(6px,0.7vw,10px)] lg:text-[clamp(16px,1.53vw,22px)]">
          Brasileiros reais que renovaram sua CNH com a Global
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-[1440px] px-5 md:px-8 lg:mt-[clamp(20px,2.1vw,30px)] lg:px-[clamp(32px,3.35vw,48px)]">
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-[9px] overflow-x-auto overscroll-x-contain scroll-smooth [--per:1.2] md:[--per:3] lg:[--per:5]"
        >
          {GALLERY.map((photo, i) => (
            <li
              key={i}
              className="relative aspect-[262/394] shrink-0 basis-[calc((100%-(var(--per)-1)*9px)/var(--per))] snap-start overflow-hidden rounded-[9px] bg-sky shadow-[0_6px_18px_-10px_rgba(0,0,0,0.45)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 82vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>

        <CarouselArrow
          variant="circle"
          direction="prev"
          onClick={() => goTo(page - 1)}
          className="absolute top-1/2 left-1 -translate-y-1/2 lg:left-[clamp(10px,1.4vw,20px)]"
        />
        <CarouselArrow
          variant="circle"
          direction="next"
          onClick={() => goTo(page + 1)}
          className="absolute top-1/2 right-1 -translate-y-1/2 lg:right-[clamp(10px,1.4vw,20px)]"
        />
      </div>

      <div className="mt-5 lg:mt-[clamp(10px,1.1vw,16px)]">
        <CarouselDots
          count={pageCount}
          active={page}
          onSelect={goTo}
          inactiveClassName="bg-[#c9ced6] hover:bg-[#aab1bb]"
          label="Páginas da galeria"
        />
      </div>
    </section>
  );
}
