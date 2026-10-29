"use client";

import { useRef, useState } from "react";
import { ArrowIcon, StarIcon } from "./Icons";

const reviews = [
  {
    name: "Rafael S.",
    tattoo: "Projeto Autoral de Braço",
    text: "O Tom entendeu exatamente a atmosfera que eu queria e elevou a ideia para outro nível. A técnica com textura que lembra tinta a óleo na pele ficou surreal. O estúdio na Barra com vista pro mar é um espetáculo à parte.",
  },
  {
    name: "Mariana C.",
    tattoo: "Projeto Os Selos",
    text: "Fiz um selo autoral com o Tom e foi uma das experiências mais marcantes que já tive. Ele respeita muito o tempo da gente, faz pausas, o ambiente é super seguro e o resultado tem um valor sentimental enorme.",
  },
  {
    name: "Júlia M.",
    tattoo: "Fine line floral",
    text: "Traço extremamente fino, delicado e sem falhas. O atendimento no Salvador Tattoo Studio é impecável, climatizado, tudo 100% estéril e seguro. Cicatrização perfeita!",
  },
  {
    name: "Lucas P.",
    tattoo: "Anime & Linework",
    text: "Procurei o Tom pela precisão que ele tem nos trabalhos de animes e mangás. O traço dele é limpo demais e a atenção aos detalhes fez toda a diferença. Já estou planejando a próxima.",
  },
  {
    name: "Camila R.",
    tattoo: "Cobertura & Realismo",
    text: "Fiz uma cobertura complexa e o resultado superou todas as minhas expectativas. O cuidado dele com as nuances de luz e sombra é de um verdadeiro artista plástico.",
  },
];

export default function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(reviews.length - 1, i));
    const card = el.children[next] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setIndex(next);
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement;
    setIndex(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
  };

  return (
    <section
      id="depoimentos"
      className="bg-[linear-gradient(180deg,#000_0%,#3a0709_50%,#000_100%)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal rounded-[2rem] border border-white/10 bg-black/70 p-6 backdrop-blur md:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
                Experiências Reais
              </span>
              <h2 className="mt-2 font-display text-4xl font-black uppercase md:text-6xl text-white">
                O que dizem <span className="text-blood">os clientes</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => scrollTo(index - 1)}
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-opacity disabled:opacity-30 hover:scale-105"
                disabled={index === 0}
              >
                <ArrowIcon className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => scrollTo(index + 1)}
                className="grid h-12 w-12 place-items-center rounded-full bg-blood text-white transition-opacity disabled:opacity-30 hover:scale-105"
                disabled={index === reviews.length - 1}
              >
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={track}
            onScroll={onScroll}
            className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                className="w-[85%] shrink-0 snap-start rounded-3xl border border-white/10 bg-smoke p-6 sm:w-[48%] lg:w-[31.5%] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-blood">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-blood">
                    {r.tattoo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    {r.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    Cliente Verificado
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
