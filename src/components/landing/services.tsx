import { Check, Scissors, Sparkles, Waves } from "lucide-react";
import { waLink } from "@/lib/business";
import { Reveal } from "./reveal";

const services = [
  {
    icon: Scissors,
    name: "Potong Rambut",
    desc: "Klasik, fade, atau sesuai foto yang kamu bawa. Dikerjakan pelan-pelan, rapi hasilnya.",
    price: "40K",
  },
  {
    icon: Waves,
    name: "Cukur & Trim",
    desc: "Jenggot dan kumis dirapikan presisi. Bersih tanpa bikin kulit kemerahan.",
    price: null,
  },
  {
    icon: Sparkles,
    name: "Cuci & Styling",
    desc: "Rambut segar dan tertata — pas banget sebelum acara penting.",
    price: null,
  },
];

export function Services() {
  return (
    <section id="layanan" className="bg-paper py-16 sm:py-20 md:py-24" aria-labelledby="layanan-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-lg tracking-[0.2em] text-brick">
            LAYANAN
          </p>
          <h2
            id="layanan-heading"
            className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl"
          >
            Nggak banyak. Yang penting rapi.
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-clay sm:text-lg">
            Layanan kami sederhana — tapi setiap cukuran dikerjakan dengan
            benar, nggak asal selesai.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5 md:mt-12">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <li className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brick/40 hover:shadow-xl hover:shadow-brick/10">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper transition-colors group-hover:bg-brick">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {s.price && (
                    <span className="rounded-full bg-paper-2 px-3 py-1 text-sm font-semibold text-ink">
                      {s.price}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-wide text-ink">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-clay">
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-ink p-5 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-wa" aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-paper/85">
                Butuh layanan lain? Tanya aja langsung — biasanya bisa kami
                bantu. Harga bisa berubah, konfirmasi dulu ya.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-brick-deep"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
