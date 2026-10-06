import { Image as ImageIcon, MapPin, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import { business, waLink } from "@/lib/business";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="beranda"
      className="texture-grain relative overflow-hidden bg-ink pt-24 text-paper sm:pt-28 md:pt-32"
      aria-label="Perkenalan"
    >
      {/* aksen dekoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brick/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-20">
        <Reveal eager>
          <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-paper/90 sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
            </span>
            Buka setiap hari · 10.00 – 22.00 WIB
          </p>

          <h1 className="mt-5 font-display text-[13.5vw] leading-[0.95] tracking-wide sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Mampir, cukur,
            <br />
            langsung <span className="text-brick">ganteng.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Barbershop sederhana di pusat Subang. Cukuran rapi, crew ramah,
            harga masuk akal. Datang langsung atau booking dulu — dua-duanya
            boleh.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brick px-7 py-3.5 text-base font-semibold text-paper shadow-lg shadow-brick/30 transition-all hover:-translate-y-0.5 hover:bg-brick-deep"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Booking via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-base font-semibold text-paper/90 transition-colors hover:border-paper/60 hover:text-paper"
            >
              Lihat layanan
            </a>
          </div>

          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2.5 text-sm text-paper/70 transition-colors hover:text-paper"
          >
            <span className="flex" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="relative inline-block h-4 w-4">
                <Star className="absolute h-4 w-4 text-gold/40" />
                <span className="absolute inset-0 w-[40%] overflow-hidden">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                </span>
              </span>
            </span>
            <span>
              <strong className="font-semibold text-paper">4,4/5</strong> di
              Google Maps
            </span>
            <span
              aria-hidden="true"
              className="underline decoration-paper/30 underline-offset-4 transition-colors group-hover:decoration-paper"
            >
              lihat ulasannya
            </span>
          </a>
        </Reveal>

        {/* Foto asli dari Google Maps */}
        <Reveal eager delay={0.15} className="relative">
          <figure className="relative mx-auto max-w-sm md:max-w-none">
            <div
              aria-hidden="true"
              className="barber-pole absolute -inset-2 rotate-2 rounded-[1.4rem] opacity-90 sm:-inset-2.5"
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-paper/20 shadow-2xl shadow-black/50">
              <Image
                src="/images/union-interior-md.webp"
                alt="Suasana UNION BARBERSHOP: pelanggan mendapatkan layanan cukur di dalam studio"
                width={836}
                height={962}
                priority
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-lg bg-ink/80 px-3 py-2 text-xs text-paper/85 backdrop-blur-sm sm:text-[13px]">
              <ImageIcon className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              Foto asli pelanggan — dari listing Google Maps kami
            </figcaption>
          </figure>

          <div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-2 rounded-xl border border-paper/20 bg-ink px-4 py-3 text-center text-sm text-paper/85 shadow-xl shadow-black/30">
            <MapPin className="h-4 w-4 shrink-0 text-brick" aria-hidden="true" />
            <span>Pujasera Ruko B3, samping Bank BJB — Subang</span>
          </div>
        </Reveal>
      </div>

      {/* garis barber pole penutup hero */}
      <div aria-hidden="true" className="barber-pole-soft h-2.5 w-full opacity-90" />
    </section>
  );
}
