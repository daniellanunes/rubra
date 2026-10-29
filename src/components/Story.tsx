import { PlusIcon } from "./Icons";

export default function Story() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-gradient-to-b from-blood-dark via-black to-black py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="reveal text-right font-display text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.9]">
          Onde a tinta
        </h2>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <span className="reveal font-display text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            vira
          </span>
          <p className="reveal max-w-xs text-sm font-medium uppercase leading-relaxed tracking-wide text-white/90">
            Tudo começou com uma ideia simples: criar um lugar onde cada
            tatuagem tem um porquê.
          </p>
          <span className="reveal text-outline text-right font-display text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            história
          </span>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2">
          <div className="reveal md:col-start-2">
            <div className="mb-8 flex items-center justify-between gap-6">
              <span className="h-px w-12 bg-blood" />
              <div className="text-right text-[11px] uppercase tracking-[0.25em] text-white/60">
                Rubra Ink
                <br />
                Lia Andrade
                <br />
                <span className="font-bold text-white">Tatuadora residente</span>
              </div>
            </div>
            <div className="space-y-5 text-sm uppercase leading-relaxed tracking-wide text-blood">
              <p>
                O estúdio nasceu da paixão por tatuagem e da vontade de mudar a
                forma como ela é feita.
              </p>
              <p>Mais profunda. Mais individual. Mais honesta.</p>
              <p>
                Hoje somos um estúdio que transforma a história das pessoas em
                arte na pele.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PlusIcon className="absolute bottom-10 right-6 h-10 w-10 text-white/80 md:right-12" />
    </section>
  );
}
