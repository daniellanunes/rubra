const words = ["Inked life", "Tatuagem autoral", "Rubra Ink", "Desde 2014", "Arte na pele"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-black bg-blood py-5" aria-hidden>
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className={`font-display text-3xl font-black uppercase md:text-5xl ${
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
