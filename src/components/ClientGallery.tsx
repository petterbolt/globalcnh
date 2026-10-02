"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY } from "@/data/content";
import { CarouselArrow, CarouselDots } from "@/components/CarouselControls";

/** Carrossel de prints de clientes (scroll-snap nativo: swipe no mobile, setas, dots e ampliação no clique). */
export function ClientGallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [zoomed, setZoomed] = useState<number | null>(null);

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
          className="no-scrollbar flex snap-x snap-mandatory gap-[9px] overflow-x-auto overscroll-x-contain scroll-smooth [--per:1.25] md:[--per:3] lg:[--per:4]"
        >
          {GALLERY.map((photo, i) => (
            <li
              key={photo.src}
              className="relative aspect-[923/1712] shrink-0 basis-[calc((100%-(var(--per)-1)*9px)/var(--per))] snap-start overflow-hidden rounded-[12px] bg-[#efe7dd] shadow-[0_8px_22px_-12px_rgba(0,0,0,0.5)]"
            >
              <button
                type="button"
                onClick={() => setZoomed(i)}
                aria-label={`Ampliar: ${photo.alt}`}
                className="group absolute inset-0 cursor-zoom-in focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-gold"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 80vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-navy-900/75 text-white opacity-90 transition group-hover:bg-navy-900">
                  <ZoomIn className="size-[18px]" aria-hidden="true" />
                </span>
              </button>
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

      {zoomed !== null && (
        <Lightbox index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
      )}
    </section>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const total = GALLERY.length;
  const photo = GALLERY[index];
  const step = useCallback((dir: 1 | -1) => onChange((index + dir + total) % total), [index, onChange, total]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, step]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Print ampliado"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
    >
      <div className="relative h-[min(88vh,1712px)] aspect-[923/1712] max-w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 48vh, 92vw" className="rounded-xl object-contain" />
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
      >
        <X className="size-6" />
      </button>
      {[-1, 1].map((dir) => {
        const Icon = dir < 0 ? ChevronLeft : ChevronRight;
        return (
          <button
            key={dir}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(dir as 1 | -1);
            }}
            aria-label={dir < 0 ? "Print anterior" : "Próximo print"}
            className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg hover:scale-105 ${
              dir < 0 ? "left-3 md:left-8" : "right-3 md:right-8"
            }`}
          >
            <Icon className="size-6" strokeWidth={3} />
          </button>
        );
      })}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
        {index + 1} / {total}
      </p>
    </div>
  );
}
