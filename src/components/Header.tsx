"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsappIcon } from "./Icons";

const links = [
  { href: "#topo", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#estilos", label: "Estilos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#selos", label: "Os Selos" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <a
          href="#topo"
          className="flex items-center transition-transform hover:scale-105 py-1"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/logo1-inverted.png"
            alt="Tom Cassh Tattoo"
            width={830}
            height={301}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-blood"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-blood px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700 hover:scale-105"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span>Orçar</span>
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 text-white lg:hidden"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-white transition-transform ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-white transition-transform ${
              open ? "opacity-0" : "top-[20px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-white transition-transform ${
              open ? "top-1/2 -rotate-45" : "bottom-[14px]"
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-display text-xl uppercase tracking-wider text-white/90 hover:text-blood"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blood py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span>Fazer Orçamento no WhatsApp</span>
          </a>
        </nav>
      )}
    </header>
  );
}
