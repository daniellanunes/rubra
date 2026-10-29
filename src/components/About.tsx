import Image from "next/image";
import { PlusIcon } from "./Icons";

export default function About() {
  return (
    <section id="sobre" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="reveal mb-16 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
            Perfil do Artista
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl">
            Quem é o <span className="text-blood">Tatuador</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Tom é um tatuador reconhecido por sua versatilidade e olhar artístico apurado.
            Com uma abordagem que une técnica refinada e sensibilidade estética, ele construiu sua carreira
            explorando diferentes linguagens visuais na tatuagem.
          </p>
        </div>

        {/* First block: Bio + Photo 1 */}
        <div className="reveal grid items-center gap-10 rounded-3xl border border-white/10 bg-smoke/80 p-8 md:grid-cols-12 md:p-12">
          <div className="space-y-6 md:col-span-7">
            <div className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Co-proprietário · Salvador Tattoo Studio
            </div>

            <h3 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
              Transformando sentimentos em <span className="text-blood">traços permanentes</span>
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
              <p>
                Sou co-proprietário do estúdio Salvador Tattoo e atuo como tatuador há anos.
                Minha formação artística e trajetória profissional sempre foram pautadas pela busca
                de autenticidade e qualidade em cada trabalho. Acredito que tatuar é também escutar,
                entender histórias e transformar sentimentos em traços e cores permanentes.
              </p>
              <p>
                Na tatuagem, sou fascinado pela tradução colocada na pele da minha técnica com o pensamento do outro.
                Existe algo poderoso nessa troca: onde posso sintetizar algo pensado por alguém e traduzir isso
                em algo feito especialmente para ela.
              </p>
              <p>
                Utilizo técnicas exclusivas que desenvolvi ao longo do tempo, como sobreposições sutis de linhas
                para criar texturas delicadas, sombras rasteladas que remetem à densidade da tinta a óleo,
                e a fusão entre traço fino e pontilhismo para dar leveza a composições mais densas.
              </p>
            </div>

            <div className="rounded-2xl border border-blood/30 bg-blood/10 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-white/90">
                &ldquo;Todo o processo é feito respeitando o tempo e o conforto de cada pessoa,
                com pausas sempre que necessário. A experiência precisa ser leve e segura — tanto física quanto emocionalmente.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 md:col-span-5">
            <Image
              src="/assets/airton1-BB91Tj_f.webp"
              alt="Airton Tom Cash tatuador"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display text-lg font-bold text-white">Airton &ldquo;Tom&rdquo; Cash</p>
              <p className="text-xs uppercase tracking-widest text-blood">Tatuador & Fundador</p>
            </div>
          </div>
        </div>

        {/* Second block: Photo 2 + Philosophy & Techniques */}
        <div className="reveal mt-8 grid items-center gap-10 rounded-3xl border border-white/10 bg-smoke/80 p-8 md:grid-cols-12 md:p-12">
          <div className="relative order-2 aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 md:order-1 md:col-span-5">
            <Image
              src="/assets/airton2-KCv7lYBx.webp"
              alt="Tom Cash em processo artístico"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display text-lg font-bold text-white">Processo de Criação</p>
              <p className="text-xs uppercase tracking-widest text-white/60">Técnica & Intenção Visual</p>
            </div>
          </div>

          <div className="order-1 space-y-6 md:order-2 md:col-span-7">
            <h3 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
              Cores, texturas e <span className="text-blood">linguagem autoral</span>
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
              <p>
                Trabalho com uma variedade de estilos com os quais me identifico profundamente — entre eles,
                boldline, old school, traços inspirados em animes e desenhos autorais.
                Também exploramos misturas criativas de estilos, como realismo com elementos gráficos ou
                traços minimalistas combinados com texturas orgânicas, o que permite entregar tatuagens verdadeiramente únicas.
              </p>
              <p>
                Gosto especialmente de usar cor como se estivesse pintando um quadro com tinta a óleo — com
                profundidade, textura e intenção. Essa diversidade permite que cada pessoa encontre um estilo
                que converse com sua identidade e história — sempre com acompanhamento técnico e artístico especializado.
              </p>
              <p>
                Mais do que estética, cada tatuagem pode ser um gesto de afirmação, uma escolha que carrega memória,
                sentimento ou até mesmo um posicionamento político e social.
                Tatuar é transformar pensamento em imagem, ideia em presença viva sobre a pele.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-black/50 p-4 text-center">
                <p className="font-display text-xl font-black text-blood">100%</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Autoral</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/50 p-4 text-center">
                <p className="font-display text-xl font-black text-white">Barra</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Salvador/BA</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/50 p-4 text-center">
                <p className="font-display text-xl font-black text-blood">Arte</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Sob Medida</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/50 p-4 text-center">
                <p className="font-display text-xl font-black text-white">Segurança</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlusIcon className="absolute bottom-8 right-8 h-8 w-8 text-white/20" />
    </section>
  );
}
