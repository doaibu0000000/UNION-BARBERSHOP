import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { Reveal } from "./reveal";

export function Location() {
  return (
    <section
      id="lokasi"
      className="bg-paper py-16 sm:py-20 md:py-24"
      aria-labelledby="lokasi-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-lg tracking-[0.2em] text-brick">
            LOKASI & JAM
          </p>
          <h2
            id="lokasi-heading"
            className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl"
          >
            Mampir ya. Gampang carinya.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-8">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-2 text-brick">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Alamat</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-clay">
                      {business.addressFull}
                    </p>
                    <p className="mt-1.5 text-sm text-clay/80">
                      Di area Pujasera, samping Bank BJB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-2 text-brick">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Jam buka</h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                      <span
                        aria-hidden="true"
                        className="relative flex h-2 w-2"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
                      </span>
                      {business.hoursLine}
                    </p>
                    <p className="mt-1.5 text-sm text-clay/80">
                      {business.hoursNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-2 text-brick">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">Telepon / WhatsApp</h3>
                    <a
                      href={`tel:${business.phoneHref}`}
                      className="mt-1 block text-[15px] font-medium text-brick hover:underline"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-2"
                >
                  Buka di Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl border border-ink/20 bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/50"
                >
                  Telepon Kami
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-lg shadow-ink/5 md:min-h-[420px]">
              <iframe
                title="Peta lokasi UNION BARBERSHOP di Google Maps"
                src={business.mapsEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full min-h-[320px] w-full border-0 md:min-h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
