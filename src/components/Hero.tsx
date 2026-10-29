import { Skull } from "./TattooArt";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* Fundo: névoa vermelha + padrão de traços simulando pele tatuada */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_35%,#e22c32_0%,#5c0b0e_30%,transparent_60%),radial-gradient(ellipse_at_90%_70%,#7a1014_0%,transparent_50%)] opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 120%, transparent 0 14px, #fff 14px 15px), repeating-linear-gradient(115deg, transparent 0 22px, #fff 22px 23px)",
        }}
      />
      <Skull className="pointer-events-none absolute left-1/2 top-1/2 h-[85vh] max-h-[760px] -translate-x-1/2 -translate-y-1/2 text-white/[0.09]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-28 md:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 font-display font-black uppercase leading-[0.9]">
          <span className="text-[clamp(3rem,10vw,9rem)]">Defina</span>
          <span className="text-outline text-[clamp(3rem,10vw,9rem)]">quem é</span>
        </div>
        <h1 className="mt-10 text-center font-display text-[clamp(2.75rem,9vw,8rem)] font-black uppercase leading-[0.9] md:mt-20 md:pl-[12%] md:text-left">
          Marcado <span className="text-blood">pela arte</span>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-center text-sm text-white/70 md:mx-0 md:ml-[12%] md:text-left md:text-base">
          Tatuagens autorais, feitas uma a uma, a partir da sua história. Sem
          catálogo, sem cópia.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:ml-[12%]">
          <a
            href="#contato"
            className="rounded-full bg-blood px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105"
          >
            Agendar sessão
          </a>
          <a
            href="#esbocos"
            className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            Ver esboços
          </a>
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-2 px-4 pb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 md:grid-cols-4 md:px-8 md:text-xs">
        <span>Rubra Ink Studio</span>
        <span className="text-right md:text-center">Tatuagem autoral</span>
        <span className="md:text-center">Desde 2014</span>
        <a href="#historia" className="text-right hover:text-white">
          Role para baixo ↓
        </a>
      </div>
    </section>
  );
}
