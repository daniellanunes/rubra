import { InstagramIcon, MachineIcon, WhatsappIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-black pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <a href="#topo" className="flex items-center gap-2">
            <MachineIcon className="h-7 w-7 text-blood" />
            <span className="font-display text-lg font-bold">
              RUBRA <span className="font-medium text-blood">INK</span>
            </span>
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            Ter a sáb · 11h às 20h · Somente com horário marcado
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-blood hover:text-blood">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://wa.me/5511999999999" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-blood hover:text-blood">
              <WhatsappIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <p
        className="text-outline-red mt-12 select-none whitespace-nowrap text-center font-display text-[18vw] font-black uppercase leading-[0.8] opacity-60"
        aria-hidden
      >
        Rubra Ink
      </p>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © 2026 Rubra Ink Studio. Todos os direitos reservados.
      </div>
    </footer>
  );
}
