import { Clock, MapPin, Scissors } from "lucide-react";
import { Reveal } from "./reveal";

const quickFacts = [
  {
    icon: Scissors,
    title: "Potong rambut",
    detail: "mulai Rp40.000",
  },
  {
    icon: Clock,
    title: "Buka setiap hari",
    detail: "10.00 – 22.00 WIB",
  },
  {
    icon: MapPin,
    title: "Gampang dicari",
    detail: "Pujasera Ruko B3, Subang",
  },
];

export function InfoStrip() {
  return (
    <section aria-label="Info singkat" className="bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-10">
        {quickFacts.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl tracking-wide text-ink">
                  {f.title}
                </p>
                <p className="truncate text-sm text-clay">{f.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div aria-hidden="true" className="h-px w-full bg-border" />
    </section>
  );
}
