import { CheckCircleIcon, CreditCardIcon, ShieldCheckIcon, WhatsappIcon } from "./Icons";

export default function PricingTerms() {
  return (
    <section id="orcamento" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Intro */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blood">
            Transparência & Processo
          </span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-6xl text-white">
            Vamos fazer um <span className="text-blood">orçamento?</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
            <p>
              Cada tatuagem é única — e o orçamento também. O valor de um trabalho é definido com base
              em diversos fatores, como o tamanho da peça, o nível de detalhamento, a localização no corpo,
              o tempo estimado de execução e o estilo escolhido.
            </p>
            <p>
              Para oferecer um orçamento justo e personalizado, é importante entender o que você deseja.
              Por isso, os pedidos de orçamento são feitos a partir de um formulário simples, onde você descreve sua ideia,
              envia referências visuais (se tiver) e informa onde gostaria de tatuar.
            </p>
            <p className="font-medium text-white">
              O mais importante: aqui, respeitamos o seu tempo, seu corpo e seu processo. Cada proposta é pensada com cuidado —
              para que você se sinta seguro, acolhido e satisfeito com cada etapa da experiência.
            </p>
          </div>
        </div>

        {/* Termos e Condições */}
        <div className="reveal mb-16">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h3 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
              Termos e condições para orçamento, agendamento e pagamento:
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Etapa 1 */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-smoke/70 p-8 transition-colors hover:border-blood/50">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blood text-sm font-black text-white">
                    01
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    Orçamento Aprovado
                  </h4>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-blood">
                  Sinal para confirmação do serviço:
                </p>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-blood mt-0.5" />
                    <span><strong className="text-white">30% do valor total:</strong> caso a arte já esteja pronta, com ajustes pequenos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-blood mt-0.5" />
                    <span><strong className="text-white">50% do valor total:</strong> caso a arte seja autoral e necessite ser criada do início.</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Processo Criativo Autoral:
                  </p>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    Esboços são enviados para alinhamento de expectativas entre as partes. A arte final é enviada com até 24 horas de antecedência da data do procedimento.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-smoke/70 p-8 transition-colors hover:border-blood/50">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blood text-sm font-black text-white">
                    02
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    Agendamento
                  </h4>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-blood">
                  Garantia de reserva:
                </p>
                <div className="mt-4 space-y-4 text-xs leading-relaxed text-white/80">
                  <p>
                    A data e horário escolhidos para o procedimento só serão confirmados mediante o pagamento do sinal (30% ou 50%, conforme a arte).
                  </p>
                  <p>
                    O cliente deverá realizar o pagamento do sinal no ato do agendamento, garantindo a reserva exclusiva do horário no estúdio.
                  </p>
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3">
                    <p className="text-[11px] font-semibold text-white/90">
                      O pagamento do sinal deve ser realizado via Pix ou transferência bancária.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-smoke/70 p-8 transition-colors hover:border-blood/50">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blood text-sm font-black text-white">
                    03
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    Pagamento Final
                  </h4>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-blood">
                  Dia do procedimento:
                </p>
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-white/80">
                  <p>
                    O saldo do valor total da tatuagem deverá ser quitado no dia do procedimento.
                  </p>
                  <p className="text-white/60">
                    Mesmo para tatuagens que necessitam de mais de uma sessão, o valor integral da tatuagem também deve ser pago antes do início da primeira sessão.
                  </p>
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <p className="font-bold text-white uppercase text-[11px] mb-2 flex items-center gap-2">
                      <CreditCardIcon className="h-4 w-4 text-blood" />
                      Formas de Pagamento:
                    </p>
                    <ul className="space-y-1.5 text-white/75">
                      <li>• Pix, transferência bancária ou dinheiro</li>
                      <li>• Cartões de débito</li>
                      <li>• Cartões de crédito (parcelamento em até 12x, com juros)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Observações importantes alert */}
          <div className="reveal mt-8 flex flex-col gap-4 rounded-3xl border border-blood/40 bg-blood/10 p-6 sm:flex-row sm:items-center sm:gap-6 md:p-8">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blood text-white">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <div className="text-xs leading-relaxed text-white/90 sm:text-sm">
              <span className="font-bold uppercase tracking-wider text-white block mb-1">
                Atenção e Observações Importantes:
              </span>
              O valor do sinal não é reembolsável em casos de desistência por parte do cliente, salvo em situações previamente discutidas e acordadas. Alterações no agendamento devem ser comunicadas com antecedência para realocação de agenda.
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-blood p-8 md:flex-row md:p-12">
          <div>
            <h3 className="font-display text-3xl font-black uppercase text-white md:text-4xl">
              Pronto para tirar a sua ideia do papel?
            </h3>
            <p className="mt-2 text-sm text-white/90 max-w-lg">
              Envie sua ideia pelo WhatsApp ou preencha o formulário abaixo para receber um orçamento personalizado.
            </p>
          </div>
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-black hover:text-white shrink-0"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span>Fazer Orçamento Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}

