import Image from "next/image";
import { MapPinIcon, ShieldCheckIcon } from "./Icons";

const studioPhotos = [
  {
    src: "/assets/IMG_4866-pfgN8ksh.webp",
    alt: "Salvador Tattoo Studio interior",
    title: "Ambiente Climatizado & Iluminação Natural",
  },
  {
    src: "/assets/IMG_4872-Bg8Wb1Af.webp",
    alt: "Vista e estações de atendimento",
    title: "Vista Privilegiada para o Farol da Barra",
  },
  {
    src: "/assets/IMG_4875-DY9SpWJU.webp",
    alt: "Estrutura profissional de alto padrão",
    title: "Biossegurança & Conforto Absoluto",
  },
];

export default function Studio() {
  return (
    <section id="estudio" className="relative bg-smoke py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="reveal grid items-end justify-between gap-8 md:grid-cols-12 mb-16">
          <div className="md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
              O Espaço
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl text-white">
              Salvador <span className="text-blood">Tattoo Studio</span>
            </h2>
            <p className="mt-4 font-serif text-lg italic text-white/80 md:text-xl">
              &ldquo;Um lugar seguro, confortável e cheio de estilo&rdquo;
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs uppercase tracking-wider text-white/80">
              <ShieldCheckIcon className="h-4 w-4 text-blood" />
              <span>Alto Padrão em Biossegurança</span>
            </div>
          </div>
        </div>

        {/* Studio Description & Highlights */}
        <div className="reveal grid gap-8 lg:grid-cols-12 mb-16 items-center">
          <div className="space-y-6 lg:col-span-7 text-sm leading-relaxed text-white/85 md:text-base">
            <p>
              O <strong className="text-white">Salvador Tattoo Studio</strong> é um estúdio que fundei com outros profissionais
              apaixonados pela arte da tatuagem. Localizado na Barra, um dos bairros mais icônicos de Salvador,
              com vista privilegiada para o mar e o Farol — um verdadeiro cartão-postal da cidade.
              O estúdio foi pensado para oferecer uma experiência completa, unindo excelência artística, conforto e bem-estar.
            </p>
            <p>
              Cada detalhe do espaço foi projetado para acolher com cuidado, com ambiente climatizado,
              iluminação natural, vista inspiradora e estrutura profissional de alto padrão.
              Nosso compromisso é garantir não só uma tatuagem de qualidade, mas também um momento agradável,
              seguro e inesquecível para quem nos visita.
            </p>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/60 p-4 text-white/80">
              <MapPinIcon className="h-5 w-5 shrink-0 text-blood mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white uppercase tracking-wider block">Localização Privilegiada:</span>
                Centro Comercial Barra Center — Av. Oceânica, 551 - sala 106 - Barra, Salvador - BA, CEP 40140-080
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
              <p className="font-display text-2xl font-bold text-blood">Farol da Barra</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">Vista para o Mar</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
              <p className="font-display text-2xl font-bold text-white">Climatizado</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">Ambiente Aconchegante</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
              <p className="font-display text-2xl font-bold text-white">100% Seguro</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">Materiais Estéreis</p>
            </div>
            <div className="rounded-2xl border border-blood/30 bg-blood/10 p-6 text-center">
              <p className="font-display text-2xl font-bold text-blood">Exclusivo</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/90">Horário Marcado</p>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-blood font-bold">
                  Foto {i + 1}
                </span>
                <p className="mt-1 font-display text-sm font-bold uppercase tracking-wider text-white">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

