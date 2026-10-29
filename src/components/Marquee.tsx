const words = [
  "TomCash Tattoo",
  "Salvador Tattoo Studio",
  "Blackwork",
  "Fine Line",
  "Anime & Mangá",
  "Realismo",
  "Colorido & Pintura",
  "Projeto Os Selos",
  "Barra · Salvador/BA",
  "Artes Autorais",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-black bg-blood py-4 md:py-5" aria-hidden>
      <div className="animate-marquee flex w-max gap-8 md:gap-12 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className={`font-display text-2xl font-black uppercase md:text-4xl tracking-wider ${
              i % 2 ? "text-outline" : "text-black"
            }`}
          >
            {w} ✦
          </span>
        ))}
      </div>
    </div>
  );
}
