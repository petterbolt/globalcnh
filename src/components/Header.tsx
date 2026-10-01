"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppBadge } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-lp flex h-[76px] items-center justify-between gap-6 lg:h-[clamp(84px,7.8vw,112px)]">
        <Logo className="text-[24px] sm:text-[26px] lg:text-[clamp(30px,3.05vw,44px)]" />

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-[clamp(20px,2.5vw,36px)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[clamp(14px,1.22vw,17.6px)] font-semibold text-white transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppButton
              variant="header"
              className="h-[clamp(46px,3.75vw,54px)] px-[clamp(16px,1.4vw,20px)] text-[clamp(13px,1vw,14.5px)] font-bold lg:min-w-[clamp(220px,18.9vw,272px)]"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid size-11 place-items-center rounded-full bg-gold sm:hidden"
          >
            <WhatsAppBadge className="size-6" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full border border-white/25 text-white xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="container-lp xl:hidden">
          <nav
            aria-label="Menu mobile"
            className="rounded-2xl border border-white/10 bg-navy-900/95 p-3 shadow-2xl backdrop-blur"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton variant="header" className="mt-2 h-12 w-full px-5 text-[15px]">
              Falar no WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
