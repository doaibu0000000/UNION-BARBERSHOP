import { ExternalLink, Star } from "lucide-react";
import { business } from "@/lib/business";
import { Reveal } from "./reveal";

export function Reviews() {
  return (
    <section
      id="ulasan"
      className="texture-grain relative overflow-hidden bg-ink py-16 text-paper sm:py-20 md:py-24"
      aria-labelledby="ulasan-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brick/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-display text-lg tracking-[0.2em] text-brick">
            ULASAN
          </p>
          <h2
            id="ulasan-heading"
            className="mt-2 font-display text-4xl tracking-wide sm:text-5xl"
          >
            Kata pelanggan di Google
          </h2>

          <div className="mt-8 inline-flex flex-col items-center rounded-3xl border border-paper/15 bg-paper/5 px-10 py-8 sm:px-14">
            <p className="font-display text-7xl leading-none tracking-wide sm:text-8xl">
              4,4
              <span className="text-3xl text-paper/60 sm:text-4xl">/5</span>
            </p>
            <div className="mt-4 flex items-center gap-1" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
              <span className="relative inline-block h-5 w-5">
                <Star className="absolute h-5 w-5 text-gold/40" />
                <span className="absolute inset-0 w-[40%] overflow-hidden">
                  <Star className="h-5 w-5 fill-gold text-gold" />
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
              Rating dari ulasan asli pelanggan di listing Google Maps kami.
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper/25 px-6 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
            >
              Lihat semua ulasan
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
