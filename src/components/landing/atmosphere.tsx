import { Check, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Cukur sesuai maumu",
    desc: "Ceritakan model yang kamu inginkan — kami dengarkan dulu, baru kerjakan.",
  },
  {
    title: "Ramah buat semua umur",
    desc: "Anak-anak sampai bapak-bapak nyaman di sini. Nggak ada yang diburu-buru.",
  },
  {
    title: "Sesekali nongkrong boleh",
    desc: "TV jalan, obrolan lancar. Banyak pelanggan berasa di rumah teman.",
  },
];

export function Atmosphere() {
  return (
    <section
      id="suasana"
      className="bg-paper-2 py-16 sm:py-20 md:py-24"
      aria-labelledby="suasana-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="font-display text-lg tracking-[0.2em] text-brick">
              SUASANA
            </p>
            <h2
              id="suasana-heading"
              className="mt-2 font-display text-4xl leading-tight tracking-wide text-ink sm:text-5xl"
            >
              Kayak di rumah teman.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-clay sm:text-lg">
              Kursi nyaman, lampu terang, crew yang ngobrol akrab. Rata-rata
              cukur cuma 15–20 menit — tapi kalau mau lama-lama, silakan.
            </p>
          </Reveal>

          <ul className="mt-7 space-y-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={0.1 + i * 0.08}>
                <li className="flex gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brick">
                    <Check className="h-3.5 w-3.5 text-paper" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{r.title}</h3>
                    <p className="mt-0.5 text-[15px] leading-relaxed text-clay">
                      {r.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <figure className="relative mx-auto max-w-md md:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-2xl shadow-ink/15">
              <Image
                src="/images/union-interior-md.webp"
                alt="Interior UNION BARBERSHOP: kursi barber klasik, cermin besar, dan crew yang sedang melayani pelanggan"
                width={836}
                height={962}
                sizes="(min-width: 768px) 45vw, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-4 right-4 mx-auto flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-xs text-clay shadow-lg sm:text-[13px]">
              <ImageIcon className="h-3.5 w-3.5 shrink-0 text-brick" aria-hidden="true" />
              Foto asli dari listing Google Maps
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
