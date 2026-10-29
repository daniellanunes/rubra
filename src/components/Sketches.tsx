import { ArrowIcon } from "./Icons";
import { Dagger, Eye, Moth, Rose, Skull, Snake, Swallow } from "./TattooArt";

const sketches = [
  { Art: Rose, name: "Rosa eterna", style: "Fine line", span: "row-span-2" },
  { Art: Dagger, name: "Punhal", style: "Neo-tradicional", span: "" },
  { Art: Moth, name: "Mariposa", style: "Blackwork", span: "" },
  { Art: Skull, name: "Caveira", style: "Blackwork", span: "row-span-2" },
  { Art: Snake, name: "Serpente", style: "Fine line", span: "" },
  { Art: Swallow, name: "Andorinha", style: "Old school", span: "" },
  { Art: Eye, name: "Olho que tudo vê", style: "Geométrico", span: "" },
];

export default function Sketches() {
  return (
    <section id="esbocos" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            Esboços
            <br />
            <span className="text-blood">de tattoo</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60 md:justify-self-end">
            Cada projeto começa no papel. Esses são alguns desenhos disponíveis
            — dá pra fechar do jeito que está ou usar como ponto de partida para
            algo só seu.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {sketches.map(({ Art, name, style, span }) => (
            <figure
              key={name}
              className={`reveal group relative overflow-hidden rounded-3xl bg-white text-black ${span}`}
            >
              <Art className="absolute inset-0 m-auto h-[80%] w-[80%] transition-transform duration-500 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-blood p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-display text-lg font-bold">{name}</p>
                <p className="text-xs uppercase tracking-[0.2em]">{style}</p>
              </figcaption>
            </figure>
          ))}

          <a
            href="#contato"
            className="reveal group col-span-2 flex flex-col justify-between rounded-3xl bg-blood p-6 md:col-span-1 md:p-8"
          >
            <span className="font-display text-3xl font-bold leading-tight">
              Mais
              <br />
              esboços
            </span>
            <span className="flex items-end justify-between gap-4">
              <span className="max-w-[16ch] text-xs leading-relaxed text-white/85">
                Peça o catálogo completo ou um desenho exclusivo.
              </span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
                <ArrowIcon className="h-5 w-5" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
