"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowIcon, WhatsappIcon } from "./Icons";

const portfolioWorks = [
  { src: "/assets/IMG_1-DzSL33vw.webp", alt: "Tatuagem autoral TomCash Tattoo" },
  { src: "/assets/IMG_3-CAqXKlNU.webp", alt: "Trabalho exclusivo TomCash Tattoo" },
  { src: "/assets/IMG_4-BpWmXPlo.webp", alt: "Arte na pele Salvador Tattoo" },
  { src: "/assets/IMG_5-kSviiu_O.webp", alt: "Tatuagem detalhada Salvador" },
  { src: "/assets/IMG_6-tTrvDqcq.webp", alt: "Técnica apurada TomCash" },
  { src: "/assets/IMG_7-B6qWZTSN.webp", alt: "Composição personalizada" },
  { src: "/assets/IMG_8-CuUeIMJM.webp", alt: "Tattoo artística Salvador Tattoo Studio" },
  { src: "/assets/IMG_9-WwO-LOUo.webp", alt: "Tatuagem expressiva TomCash" },
  { src: "/assets/IMG_10-BNyXj12z.webp", alt: "Traços precisos e sombreamento" },
  { src: "/assets/IMG_11-Day_5IZq.webp", alt: "Arte autoral na pele" },
  { src: "/assets/IMG_12-Dxsfue5w.webp", alt: "Trabalho em Salvador Barra" },
  { src: "/assets/IMG_13-D1n2Y5nI.webp", alt: "Tatuagem cicatrizada e vibrante" },
];

const selosWorks = [
  {
    src: "/assets/IMGselo_1-KM-RFfPS.webp",
    title: "Selo de Memória I",
    desc: "Obra autoral com moldura postal e textura de pintura",
  },
  {
    src: "/assets/IMGselo_2-GrF2VsKf.webp",
    title: "Selo de Memória II",
    desc: "Fusão de linguagem gráfica e narrativa pessoal",
  },
  {
    src: "/assets/IMGselo_3-BCRdbMKl.webp",
    title: "Selo de Memória III",
    desc: "Traços minuciosos inspirados em obras de arte",
  },
  {
    src: "/assets/IMGselo_4-BoBdqVTv.webp",
    title: "Selo de Memória IV",
    desc: "Composição postal única eternizada na pele",
  },
  {
    src: "/assets/IMGselo_5-DoiVpO5e.webp",
    title: "Selo de Memória V",
    desc: "Projeto autoral icônico TomCash Tattoo",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="relative bg-smoke py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header: Portfolio */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
            Portfólio Concluído
          </span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl text-white">
            Aqui alguns <span className="text-blood">trabalhos já feitos</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Conheça tatuagens que os clientes amaram. Cada peça foi pensada e executada
            com atenção meticulosa a cada milímetro de pele.
          </p>
        </div>

        {/* Portfolio Works Grid */}
        <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {portfolioWorks.map((item, idx) => (
            <div
              key={item.src}
              onClick={() => setActiveImage(item.src)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 hover:border-blood hover:shadow-xl hover:shadow-blood/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <span>Ampliar</span>
                  <ArrowIcon className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Projeto Especial: Os Selos */}
        <div id="selos" className="reveal mt-32 rounded-3xl border border-white/10 bg-black/60 p-8 md:p-14 backdrop-blur-md">
          <div className="grid items-end justify-between gap-6 md:grid-cols-12 mb-12">
            <div className="md:col-span-8">
              <span className="inline-block rounded-full bg-blood px-4 py-1 text-xs font-bold uppercase tracking-widest text-white mb-3">
                Projeto Exclusivo
              </span>
              <h3 className="font-display text-3xl font-black uppercase md:text-5xl text-white">
                Conheça meu projeto: <span className="text-blood">Os Selos</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Tenho um projeto autoral que consiste em tatuar selos que remetem a memórias,
                afetos ou releituras de obras de arte. Uma cápsula de história enquadrada com
                detalhes de carimbo postal e poesia visual na pele.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20tatuar%20um%20Selo%20do%20projeto%20autorar!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blood bg-blood/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-blood transition-colors"
              >
                <WhatsappIcon className="h-4 w-4" />
                <span>Quero meu Selo</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {selosWorks.map((selo, i) => (
              <div
                key={selo.src}
                onClick={() => setActiveImage(selo.src)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-smoke transition-all duration-300 hover:border-blood hover:-translate-y-1"
              >
                <Image
                  src={selo.src}
                  alt={selo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blood">
                    Selo #{i + 1}
                  </span>
                  <h4 className="font-display text-sm font-bold uppercase text-white truncate">
                    {selo.title}
                  </h4>
                  <p className="text-[11px] text-white/70 line-clamp-2 mt-0.5">
                    {selo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl transition-all"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white hover:bg-blood transition-colors"
              aria-label="Fechar"
            >
              ✕
            </button>
            <div className="relative aspect-[3/4] w-[85vw] max-w-[500px]">
              <Image
                src={activeImage}
                alt="Tatuagem TomCash em detalhe"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

