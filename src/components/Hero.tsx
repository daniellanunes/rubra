"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowIcon, WhatsappIcon } from "./Icons";

const heroSlides = [
  {
    src: "/assets/IMG_22-CdZcJtyB.webp",
    title: "Arte Corporal & Sensibilidade",
    tag: "Exclusivo",
  },
  {
    src: "/assets/IMG_19-Ddz3N7IS.webp",
    title: "Fusão de Estilos & Técnicas",
    tag: "Autoral",
  },
  {
    src: "/assets/IMGselo_5-Czqo08KH.webp",
    title: "Projeto Especial: Os Selos",
    tag: "Coleção",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink pt-24 md:pt-28"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,#e22c32_0%,#5c0b0e_35%,transparent_65%),radial-gradient(ellipse_at_85%_75%,#7a1014_0%,transparent_50%)] opacity-75" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 120%, transparent 0 14px, #fff 14px 15px), repeating-linear-gradient(115deg, transparent 0 22px, #fff 22px 23px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* Main Hero Container */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-12 md:px-8">
        {/* Quote Badge */}
        <div className="reveal mx-auto mb-8 max-w-2xl text-center md:mx-0 md:text-left">
          <div className="inline-flex flex-col items-center rounded-2xl border border-white/15 bg-black/60 px-6 py-3.5 backdrop-blur-md sm:flex-row sm:gap-3">
            <span className="font-serif italic text-white/90 text-sm md:text-base">
              &ldquo;Um corpo sem pintura é um corpo mudo.&rdquo;
            </span>
            <span className="text-xs uppercase tracking-widest text-blood font-bold mt-1 sm:mt-0">
              — Índios Caduveos
            </span>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Titles & Copy */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline gap-x-4 font-display font-black uppercase leading-[0.9]">
              <span className="text-[clamp(3rem,8vw,7.5rem)] text-white">TOMCASH</span>
              <span className="text-outline text-[clamp(3rem,8vw,7.5rem)]">TATTOO</span>
            </div>

            <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-wider text-white/90 md:text-3xl">
              Salvador <span className="text-blood">Tattoo Studio</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Tatuagens autorais que unem técnica refinada, sensibilidade estética e respeito
              ao seu tempo e à sua história. Sem catálogo, sem cópia — cada traço é pensado
              exclusivamente para a sua pele.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full bg-blood px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700 hover:scale-105 shadow-lg shadow-blood/30"
              >
                <WhatsappIcon className="h-5 w-5" />
                <span>Orçar no WhatsApp</span>
              </a>

              <a
                href="#galeria"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-black"
              >
                <span>Ver Galeria</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/60">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blood animate-ping" />
                Barra Center · Salvador/BA
              </span>
              <span>✦</span>
              <span>Vista para o Farol da Barra</span>
              <span>✦</span>
              <span>Atendimento Exclusivo</span>
            </div>
          </div>

          {/* Right Column: Hero Artwork Showcase */}
          <div className="reveal relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-smoke shadow-2xl">
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  } transition-transform duration-1000 ease-out`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block rounded-full bg-blood/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                      {slide.tag}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Dots indicator */}
              <div className="absolute top-6 right-6 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? "w-6 bg-blood" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Strip */}
      <div className="relative border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-3 px-4 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 md:grid-cols-4 md:px-8 md:text-xs">
          <span>Salvador Tattoo Studio</span>
          <span className="text-right md:text-center">Av. Oceânica, 551 - Barra</span>
          <span className="md:text-center">Seg a Sex 8h - 23:30 | Sáb/Dom 8h - 22h</span>
          <a href="#sobre" className="text-right hover:text-blood transition-colors">
            Conheça o artista ↓
          </a>
        </div>
      </div>
    </section>
  );
}
