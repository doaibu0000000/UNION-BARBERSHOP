"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Untuk konten above-the-fold (hero): animasi murni CSS yang jalan
   * sejak paint pertama, tidak menunggu JS/hydration — jadi tidak ada
   * jeda kosong maupun kedipan saat halaman baru dibuka.
   */
  eager?: boolean;
};

/**
 * Animasi muncul halus saat elemen mendekati viewport — TANPA kedip.
 *
 * Cara kerja:
 * - State tersembunyi hanya aktif jika JS jalan (html.js, lihat layout.tsx).
 *   Tanpa JS, semua konten langsung tampil (aman untuk SEO & pembaca layar).
 * - IntersectionObserver memicu animasi sedikit SEBELUM elemen masuk layar
 *   (rootMargin bawah positif), sehingga saat pengguna menggulir ke sana
 *   elemen sudah settle — tidak ada pop/kedip di tengah layar.
 * - Murni CSS transition (GPU-composited), tanpa library animasi JS.
 * - `prefers-reduced-motion` otomatis mematikan animasi (lihat globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    // Browser sangat lama tanpa IntersectionObserver: langsung tampilkan.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Saat scroll normal, elemen selalu terdeteksi di BAWAH lipatan
            // (zona pemicu meluas 20% ke bawah). Bila elemen sudah berada DI
            // DALAM viewport saat terdeteksi, berarti lompatan instan
            // (anchor, restore scroll, scroll sangat cepat) → tampilkan
            // langsung tanpa transisi agar tidak terlihat kedip.
            if (entry.boundingClientRect.top < window.innerHeight) {
              el.classList.add("no-anim");
            }
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      // Positif di sisi bawah = zona pemicu meluas ke BAWAH viewport,
      // jadi animasi dimulai sebelum elemen terlihat oleh pengguna.
      { rootMargin: "0px 0px 20% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  const style: CSSProperties | undefined =
    delay > 0
      ? eager
        ? { animationDelay: `${delay}s` }
        : { transitionDelay: `${delay}s` }
      : undefined;

  const base = eager ? "reveal-eager" : "reveal";

  return (
    <div
      ref={ref}
      className={className ? `${base} ${className}` : base}
      style={style}
    >
      {children}
    </div>
  );
}
