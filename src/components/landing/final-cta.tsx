import { MessageCircle, Phone } from "lucide-react";
import { business, waLink } from "@/lib/business";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section
      className="texture-grain relative overflow-hidden bg-ink py-16 text-paper sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="barber-pole absolute inset-y-0 left-0 w-1.5 opacity-80 sm:w-2"
      />
      <div
        aria-hidden="true"
        className="barber-pole absolute inset-y-0 right-0 w-1.5 opacity-80 sm:w-2"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brick/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-display text-4xl leading-tight tracking-wide sm:text-5xl md:text-6xl"
          >
            Rambut rapi itu niat
            <br />
            paling <span className="text-brick">gampang.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Booking sekarang atau langsung mampir. Sampai ketemu di kursi, ya.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brick px-8 py-4 text-base font-semibold text-paper shadow-lg shadow-brick/30 transition-all hover:-translate-y-0.5 hover:bg-brick-deep sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Booking via WhatsApp
            </a>
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-paper/25 px-8 py-4 text-base font-semibold text-paper/90 transition-colors hover:border-paper/60 sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
