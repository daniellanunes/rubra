import { ArrowIcon, PlusIcon } from "./Icons";

const stats = [
  { value: "12", label: "anos de estrada" },
  { value: "3.4k", label: "tatuagens feitas" },
  { value: "100%", label: "projetos autorais" },
];

const services = ["Blackwork", "Fine line", "Realismo", "Neo-tradicional", "Cobertura"];

export default function About() {
  return (
    <section id="sobre" className="bg-black py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1.1fr_1fr] md:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-smoke p-8 md:p-12">
          <div className="flex items-start justify-between">
            <h2 className="font-display text-4xl font-bold leading-none md:text-5xl">
              Minha
              <br />
              <span className="text-blood">história</span>
            </h2>
            <div className="flex flex-col gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                <ArrowIcon className="h-4 w-4 -rotate-90" />
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blood">
                <ArrowIcon className="h-4 w-4 rotate-90" />
              </span>
            </div>
          </div>

          <div className="mt-10 space-y-3 text-base leading-relaxed text-white/85 md:pl-16 md:text-lg">
            <p>Há 12 anos eu desenho tatuagens com estilo, personalidade e significado.</p>
            <p>
              Te ajudo com a ideia, o esboço e a execução — para que o resultado
              seja de verdade seu.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/80"
              >
                {s}
              </li>
            ))}
          </ul>

          <PlusIcon className="absolute bottom-8 right-8 h-8 w-8 text-white/60" />
        </div>

        <div className="reveal grid gap-6">
          {/* Retrato: substitua por <Image src="/images/artista.jpg" ... /> */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_50%_30%,#e22c32_0%,#5c0b0e_45%,#000_80%)] md:aspect-auto md:min-h-[380px]">
            <svg
              viewBox="0 0 200 220"
              className="absolute bottom-0 left-1/2 h-[88%] -translate-x-1/2 text-black"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M100 20c-24 0-40 18-40 44 0 18 8 34 18 42v12c-30 6-58 22-66 50l-6 52h188l-6-52c-8-28-36-44-66-50v-12c10-8 18-24 18-42 0-26-16-44-40-44z"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="font-display text-2xl font-bold">Lia Andrade</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Fundadora · Tatuadora
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-smoke p-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-blood md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60 md:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
