"use client";

import { useState } from "react";
import { ArrowIcon, ClockIcon, InstagramIcon, MapPinIcon, TiktokIcon, WhatsappIcon } from "./Icons";

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-black/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-blood";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [estilo, setEstilo] = useState("");
  const [localCorpo, setLocalCorpo] = useState("");
  const [ideia, setIdeia] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá, Tom! Gostaria de fazer um orçamento de tatuagem:
- Nome: ${nome}
- Contato: ${contato}
- Estilo: ${estilo || "A definir"}
- Local do corpo: ${localCorpo || "A definir"}
- Ideia: ${ideia}`;

    const url = `https://wa.me/5571989331091?text=${encodeURIComponent(text)}`;
    setSent(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="contato" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
            Atendimento & Localização
          </span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl text-white">
            Saiba onde me encontrar, <span className="text-blood">fale comigo</span>
          </h2>
          <p className="mt-4 text-base text-white/80">
            Acompanhe minhas redes sociais ou envie os detalhes da sua ideia para iniciarmos o seu orçamento.
          </p>
        </div>

        {/* 2-Column: Details & Form */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* Left: Info Card */}
          <div className="reveal flex flex-col justify-between rounded-3xl bg-blood p-8 md:p-12 lg:col-span-5 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/75">
                TomCash Tattoo · Salvador Tattoo Studio
              </p>
              <h3 className="mt-4 font-display text-4xl font-black uppercase leading-tight md:text-5xl">
                Conte sua <span className="text-black">ideia</span>
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Mande referências, dimensões aproximadas e onde gostaria de tatuar.
                Respondo com estimativa de valor, processo criativo e datas livres na agenda.
              </p>
            </div>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 mt-0.5 text-black" />
                <div>
                  <strong className="block text-white font-bold">Endereço do Estúdio:</strong>
                  <span>Centro Comercial Barra Center - Av. Oceânica, 551 - sala 106 - Barra, Salvador - BA</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="h-5 w-5 shrink-0 mt-0.5 text-black" />
                <div>
                  <strong className="block text-white font-bold">Horário de Atendimento:</strong>
                  <p>Segunda a Sexta: 8h às 23:30</p>
                  <p>Sábado e Domingo: 8h às 22h</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
                <a
                  href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold hover:underline"
                >
                  <WhatsappIcon className="h-5 w-5 text-black" />
                  <span>(71) 98933-1091 (WhatsApp)</span>
                </a>

                <a
                  href="https://www.instagram.com/tomcashtattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold hover:underline"
                >
                  <InstagramIcon className="h-5 w-5 text-black" />
                  <span>@tomcashtattoo (Instagram)</span>
                </a>

                <a
                  href="https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold hover:underline"
                >
                  <TiktokIcon className="h-5 w-5 text-black" />
                  <span>@tomcashtattoo (TikTok)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="reveal rounded-3xl border border-white/10 bg-smoke p-8 md:p-12 lg:col-span-7">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-blood font-display text-3xl text-white">
                  ✓
                </span>
                <p className="mt-6 font-display text-3xl font-bold text-white">
                  Mensagem Pronta!
                </p>
                <p className="mt-3 max-w-sm text-sm text-white/70">
                  O WhatsApp foi aberto com os dados da sua tattoo. Caso a janela não tenha aberto
                  automaticamente, clique no botão abaixo:
                </p>
                <a
                  href={`https://wa.me/5571989331091?text=${encodeURIComponent(
                    `Olá, Tom! Meu nome é ${nome}. Gostaria de orçar uma tattoo estilo ${estilo || "autoral"} no ${localCorpo || "corpo"}. Minha ideia: ${ideia}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-blood px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  <span>Abrir WhatsApp do Tom</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50 underline hover:text-white"
                >
                  Preencher novamente
                </button>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Solicitar Orçamento
                  </h3>
                  <p className="text-xs text-white/60">
                    Preencha o formulário e você será direcionado para falar diretamente com o Tom no WhatsApp.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                  <input
                    required
                    value={contato}
                    onChange={(e) => setContato(e.target.value)}
                    placeholder="Seu WhatsApp (ex: 71 99999-9999)"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <select
                    value={estilo}
                    onChange={(e) => setEstilo(e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Selecione o estilo desejado
                    </option>
                    <option value="Blackwork">Blackwork</option>
                    <option value="Fine line">Fine line</option>
                    <option value="Colorido / Pintura">Colorido / Pintura</option>
                    <option value="Anime / Mangá">Anime / Mangá</option>
                    <option value="Realismo">Realismo</option>
                    <option value="Projeto Os Selos">Projeto Os Selos</option>
                    <option value="Arte Autoral Exclusiva">Arte Autoral Exclusiva</option>
                    <option value="Ainda não decidi">Ainda não decidi</option>
                  </select>

                  <input
                    value={localCorpo}
                    onChange={(e) => setLocalCorpo(e.target.value)}
                    placeholder="Parte do corpo (ex: antebraço, costela...)"
                    className={inputClass}
                  />
                </div>

                <textarea
                  required
                  rows={5}
                  value={ideia}
                  onChange={(e) => setIdeia(e.target.value)}
                  placeholder="Descreva sua ideia, tamanho aproximado em cm e qualquer detalhe ou referência visual que achar relevante"
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="group mt-2 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-blood hover:text-white"
                >
                  <span className="text-xs md:text-sm">Enviar para o WhatsApp</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blood text-white transition-colors group-hover:bg-black">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed Real */}
        <div className="reveal overflow-hidden rounded-3xl border border-white/10 bg-smoke">
          <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-blood" />
              <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Como Chegar ao Barra Center
              </span>
            </div>
            <span className="text-xs text-white/60 hidden sm:inline">
              Av. Oceânica, 551 - sala 106 - Barra, Salvador - BA
            </span>
          </div>
          <div className="h-[380px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.418142504204!2d-38.526958600000015!3d-13.009023199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035be7e33827%3A0xe5f3592c4f508fed!2sTomCashTattoo!5e0!3m2!1spt-BR!2sbr!4v1743624412139!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TomCash Tattoo Salvador Mapa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
