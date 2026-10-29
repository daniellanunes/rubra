"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowIcon, InstagramIcon, TiktokIcon, WhatsappIcon } from "./Icons";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <a href="#topo" className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/assets/logo1-inverted.png"
                alt="Tom Cassh Tattoo"
                width={830}
                height={301}
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-xs uppercase tracking-[0.2em] text-white/60 text-center md:text-left">
              Barra Center · Av. Oceânica, 551 · Barra, Salvador - BA
              <br />
              <span className="text-[10px] text-white/40">
                Seg a Sex: 8h às 23:30 · Sáb e Dom: 8h às 22h · Com horário marcado
              </span>
            </p>

            <div className="flex justify-center gap-3">
              <a
                href="https://www.instagram.com/tomcashtattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-blood hover:bg-blood hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-blood hover:bg-blood hover:text-white"
              >
                <TiktokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all hover:border-blood hover:bg-blood hover:text-white"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <p
          className="text-outline-red mt-12 select-none whitespace-nowrap text-center font-display text-[15vw] font-black uppercase leading-[0.8] opacity-35"
          aria-hidden
        >
          TomCash Tattoo
        </p>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50 px-4">
          Copyright© 2025 TomCash Tattoo | Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/anna-caroline-miranda-martins/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blood underline transition-colors"
          >
            Anna
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer orçamento no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
      >
        <WhatsappIcon className="h-7 w-7" />
      </a>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-24 right-7 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition-all hover:border-blood hover:bg-blood hover:scale-110"
        >
          <ArrowIcon className="h-4 w-4 -rotate-90" />
        </button>
      )}
    </>
  );
}
