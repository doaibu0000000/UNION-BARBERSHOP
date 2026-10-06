import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/business";

/** Tombol WhatsApp mengambang — selalu terjangkau jempol di mobile. */
export function FloatingWa() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat booking via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl shadow-ink/25 transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-wa/40 [animation-duration:2.5s]"
      />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-medium text-paper opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Booking cepat — chat kami
      </span>
    </a>
  );
}
