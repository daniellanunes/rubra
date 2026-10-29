import Image from "next/image";
import { ArrowIcon } from "./Icons";

const stylesList = [
  {
    name: "Blackwork",
    img: "/assets/IMG_1-DeMZbL7N.webp",
    description: "Contrastes profundos, sólidos e texturas marcantes com tinta preta de alta densidade.",
  },
  {
    name: "Fine line",
    img: "/assets/IMG_2-BR816FZN.webp",
    description: "Traços delicados, precisos e sutis para composições minimalistas e elegantes.",
  },
  {
    name: "Colorido",
    img: "/assets/IMG_3-DlbDNVR-.webp",
    description: "Aplicação rica de cor com camadas que remetem à textura e vivacidade da tinta a óleo.",
  },
  {
    name: "Anime",
    img: "/assets/IMG_4-CXVQWsJg.webp",
    description: "Homenagens expressivas ao universo dos animes e mangás com fidelidade e estilo próprio.",
  },
  {
    name: "Realismo",
    img: "/assets/IMG_5-CAtQdCLA.webp",
    description: "Sombreamentos rastelados, profundidade e rica tridimensionalidade colocados sobre a pele.",
  },
  {
    name: "Artístico",
    img: "/assets/IMG_6-BCoGd3cX.webp",
    description: "Projetos autorais exclusivos criados a partir do zero para contar a sua história.",
  },
];

export default function StylesGallery() {
  return (
    <section id="estilos" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
              Linguagens Visuais
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl text-white">
              Estilos & <span className="text-blood">Técnicas</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/70 md:text-base md:justify-self-end max-w-lg">
            Trabalho com uma variedade de estilos com os quais me identifico profundamente.
            Também exploramos misturas criativas, como realismo com elementos gráficos ou traços
            minimalistas combinados com texturas orgânicas, entregando peças verdadeiramente únicas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stylesList.map((style) => (
            <div
              key={style.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-smoke transition-all duration-500 hover:border-blood/50 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={style.img}
                  alt={`Tatuagem estilo ${style.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-blood font-bold">
                    Estilo
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wider text-white">
                    {style.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {style.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to gallery banner */}
        <div className="reveal mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-smoke via-black to-smoke p-8 md:flex-row md:p-10">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-display text-xl font-bold uppercase text-white md:text-2xl">
              Que tal conhecer a galeria completa?
            </h4>
            <p className="mt-2 text-sm text-white/70">
              Veja trabalhos concluídos na pele, o projeto autoral com os selos e escolha referências
              para a sua próxima tatuagem.
            </p>
          </div>
          <a
            href="#galeria"
            className="flex items-center gap-3 rounded-full bg-blood px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700 hover:scale-105 shrink-0"
          >
            <span>Explorar Galeria</span>
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

