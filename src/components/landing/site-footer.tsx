import { Instagram, MapPin, Phone, Scissors } from "lucide-react";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#suasana", label: "Suasana" },
  { href: "#ulasan", label: "Ulasan" },
  { href: "#lokasi", label: "Lokasi" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brick">
                <Scissors className="h-4.5 w-4.5 text-paper" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl tracking-wider">
                UNION <span className="text-brick">BARBERSHOP</span>
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
              Barbershop kecil di pusat Subang. Cukuran rapi, crew ramah,
              harga masuk akal — sejak 2023.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="font-display text-base tracking-[0.2em] text-paper/50">
              JELAJAHI
            </h2>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base tracking-[0.2em] text-paper/50">
              HUBUNGI KAMI
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-paper/75">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brick" aria-hidden="true" />
                <span>{business.addressShort}, Jawa Barat</span>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brick" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-brick" aria-hidden="true" />
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 UNION BARBERSHOP. Semua hak dilindungi.</p>
          <p>Halaman demo — dibuat berdasarkan data publik Google Maps.</p>
        </div>
      </div>
    </footer>
  );
}
