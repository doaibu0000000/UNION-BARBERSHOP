"use client";

import { useEffect, useState } from "react";
import { Menu, Scissors, X } from "lucide-react";
import { business, waLink } from "@/lib/business";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#suasana", label: "Suasana" },
  { href: "#ulasan", label: "Ulasan" },
  { href: "#lokasi", label: "Lokasi" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px]">
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-paper"
          aria-label={`${business.name} — kembali ke atas`}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brick shadow-inner">
            <Scissors className="h-4.5 w-4.5 text-paper" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl leading-none tracking-wider">
            UNION <span className="text-brick">BARBERSHOP</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-paper/80 transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-paper shadow-md shadow-brick/30 transition-all hover:-translate-y-0.5 hover:bg-brick-deep"
          >
            Booking
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-paper transition-colors hover:bg-paper/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-paper/10 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Navigasi mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-paper/90 transition-colors hover:bg-paper/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-xl bg-brick px-4 py-3.5 text-center text-base font-semibold text-paper"
          >
            Booking via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
