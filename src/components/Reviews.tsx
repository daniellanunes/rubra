"use client";

import { useRef, useState } from "react";
import { ArrowIcon, StarIcon } from "./Icons";

// Depoimentos de exemplo — substitua pelos reais do estúdio.
const reviews = [
  {
    name: "Rafael",
    tattoo: "Fechamento de braço",
    text: "A Lia entendeu exatamente o que eu queria e ainda melhorou a ideia. Saí com algo muito mais bonito do que imaginei.",
  },
  {
    name: "Júlia",
    tattoo: "Fine line no antebraço",
    text: "Ambiente tranquilo, tudo esterilizado e um traço impecável. Me senti segura do começo ao fim.",
  },
  {
    name: "Pedro",
    tattoo: "Primeira tatuagem",
    text: "Era minha primeira vez e definitivamente não vai ser a última. Ficou estilosa e com cicatrização perfeita.",
  },
  {
    name: "Camila",
    tattoo: "Cobertura",
    text: "Cobriu uma tattoo antiga que eu odiava. Hoje é a minha favorita. Trabalho atencioso e muito profissional.",
  },
  {
    name: "Bruno",
    tattoo: "Blackwork nas costas",
    text: "Três sessões longas e em todas o cuidado foi o mesmo. Resultado digno de quadro.",
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
            <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
              O que dizem
              <br />
              <span className="pl-[0.6em] text-blood md:pl-[1.5em]">os clientes</span>
            </h2>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => scrollTo(index - 1)}
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition-opacity disabled:opacity-30"
                disabled={index === 0}
              >
                <ArrowIcon className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => scrollTo(index + 1)}
                className="grid h-12 w-12 place-items-center rounded-full bg-blood transition-opacity disabled:opacity-30"
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
                className="w-[85%] shrink-0 snap-start rounded-3xl border border-white/10 bg-smoke p-6 sm:w-[48%] lg:w-[31.5%]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blood to-blood-dark font-display text-2xl font-bold">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold">{r.name}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50">{r.tattoo}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-blood" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">“{r.text}”</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-1 rounded-full transition-all ${
                  i === index ? "w-12 bg-white" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
