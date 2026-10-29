"use client";

import { useEffect, useState } from "react";
import { MachineIcon } from "./Icons";

const links = [
  { href: "#historia", label: "História" },
  { href: "#sobre", label: "Sobre" },
  { href: "#esbocos", label: "Esboços" },
  { href: "#depoimentos", label: "Depoimentos" },
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
        scrolled || open ? "bg-black/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#topo" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <MachineIcon className="h-7 w-7 text-blood" />
          <span className="font-display text-lg font-bold tracking-wide">
            RUBRA <span className="font-medium text-blood">INK</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-blood px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-white transition-transform ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
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
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-display text-2xl uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-blood py-3 text-center text-sm font-bold uppercase tracking-[0.2em]"
          >
            Agendar sessão
          </a>
        </nav>
      )}
    </header>
  );
}
