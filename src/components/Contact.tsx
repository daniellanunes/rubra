"use client";

import { useState } from "react";
import { ArrowIcon, InstagramIcon, MapPinIcon, WhatsappIcon } from "./Icons";

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-black/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-blood";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="bg-black py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8">
        <div className="reveal flex flex-col justify-between rounded-3xl bg-blood p-8 md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/70">
              Agende sua sessão
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Conta
              <br />
              <span className="text-outline">sua ideia</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/90">
              Mande uma descrição, referências e onde quer tatuar. Respondo em
              até 48h com orçamento e datas livres.
            </p>
          </div>

          <ul className="mt-12 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5" /> Rua Augusta, 1000 — São Paulo, SP
            </li>
            <li>
              <a href="https://wa.me/5511999999999" className="flex items-center gap-3 hover:underline">
                <WhatsappIcon className="h-5 w-5" /> (11) 99999-9999
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" className="flex items-center gap-3 hover:underline">
                <InstagramIcon className="h-5 w-5" /> @rubra.ink
              </a>
            </li>
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-smoke p-8 md:p-12">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-blood font-display text-3xl">✓</span>
              <p className="mt-6 font-display text-3xl font-bold">Recebido!</p>
              <p className="mt-2 max-w-xs text-sm text-white/60">
                Obrigada pela mensagem. Logo eu te chamo para conversarmos sobre o projeto.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 text-xs uppercase tracking-[0.2em] text-white/60 underline hover:text-white"
              >
                Enviar outra
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Sem backend ainda: conecte aqui um serviço de e-mail ou uma API route.
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="nome" placeholder="Seu nome" className={inputClass} />
                <input required name="contato" placeholder="WhatsApp ou e-mail" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select name="estilo" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Estilo
                  </option>
                  <option>Blackwork</option>
                  <option>Fine line</option>
                  <option>Realismo</option>
                  <option>Neo-tradicional</option>
                  <option>Cobertura</option>
                  <option>Ainda não sei</option>
                </select>
                <input name="local" placeholder="Parte do corpo" className={inputClass} />
              </div>
              <textarea
                required
                name="ideia"
                rows={6}
                placeholder="Descreva sua ideia, tamanho aproximado e referências"
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="group mt-2 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-blood hover:text-white"
              >
                <span className="text-sm">Enviar</span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blood text-white transition-colors group-hover:bg-black">
                  <ArrowIcon className="h-5 w-5" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
