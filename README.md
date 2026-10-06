# UNION BARBERSHOP — Landing Page

Landing page profesional untuk **UNION BARBERSHOP**, barbershop di Komplek Pujasera, Jl. Jend. Achmad Yani Ruko B3, Karanganyar, Subang, Jawa Barat.

Dibuat mobile-first, cepat, dan berorientasi konversi: semua CTA mengarah ke WhatsApp booking (`wa.me`), lokasi memakai embed Google Maps asli, dan foto di halaman adalah **foto asli dari listing Google Maps** (bukan foto AI/stok).

## Deskripsi

Halaman tunggal yang mengubah data publik Google Maps menjadi website bisnis yang siap dipresentasikan kepada pemilik:

- **Hero** — headline besar, CTA booking WhatsApp, badge rating Google (4,4/5), foto asli interior barbershop.
- **Layanan** — potong rambut (mulai 40K), cukur & trim, cuci & styling.
- **Suasana** — foto asli + alasan memilih UNION.
- **Ulasan** — rating Google apa adanya dengan tautan ke listing Maps (tanpa kutipan yang dikarang).
- **Lokasi & jam** — alamat lengkap, jam operasional, tombol telepon, dan peta Google Maps.
- **CTA & footer** — band CTA gelap + footer sticky yang selalu menempel di bawah viewport.
- **Tombol WhatsApp mengambang** — selalu terjangkau jempol di layar mobile.

## Teknologi

| Bagian     | Teknologi                                      |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)  |
| Bahasa     | TypeScript (strict)                            |
| Styling    | Tailwind CSS 4                                 |
| Animasi    | Framer Motion (hormat pada `prefers-reduced-motion`) |
| Ikon       | Lucide React                                   |
| Font       | Bebas Neue (display) + Inter (body) via `next/font` |
| SEO        | Metadata API Next.js + JSON-LD `BarberShop`    |

Tidak ada database, tidak ada environment variable wajib — semuanya statis dan ringan.

## Struktur Penting

```
src/
├── app/
│   ├── layout.tsx        # Metadata SEO, OG image, font, lang="id"
│   ├── page.tsx          # Perakitan semua section + JSON-LD
│   ├── globals.css       # Token warna brand + utilitas barber-pole
│   └── icon.svg          # Favicon (tema barber pole)
├── components/landing/   # Header, Hero, Layanan, Suasana, Ulasan, Lokasi, CTA, Footer, dll.
└── lib/
    └── business.ts       # ★ SEMUA data bisnis (nama, telepon, WA, jam, link Maps)
```

> **Edit data bisnis?** Cukup ubah `src/lib/business.ts` — satu file untuk nomor WhatsApp, alamat, jam buka, rating, dan semua tautan.

## Cara Install

```bash
# clone repositori
git clone https://github.com/<username>/<repo>.git
cd <repo>

# install dependensi (bun)
bun install
# atau (npm)
npm install
```

## Menjalankan Development

```bash
bun run dev       # atau: npm run dev
# buka http://localhost:3000
```

## Build Produksi

```bash
# untuk Vercel / server Node (output standalone)
bun run build
bun run start
```

```bash
# untuk GitHub Pages (output statis ke folder out/)
BUILD_STATIC=1 NEXT_PUBLIC_BASE_PATH=/<nama-repo> bunx next build
```

Untuk GitHub Pages, jangan lupa buat file `.nojekyll` di dalam folder `out/` agar folder berawalan underscore tidak diabaikan:

```bash
touch out/.nojekyll
# lalu unggah / deploy folder out/ ke branch gh-pages
```

## Environment Variable

Semua **opsional** — tanpa variabel apa pun project tetap berjalan normal:

| Variabel                | Fungsi                                                                 |
| ----------------------- | ---------------------------------------------------------------------- |
| `BUILD_STATIC`          | Set `1` untuk output statis (`out/`) ke GitHub Pages.                   |
| `NEXT_PUBLIC_BASE_PATH` | Base path saat di-host di subfolder (mis. `/nama-repo` di GitHub Pages).|
| `NEXT_PUBLIC_SITE_URL`  | Domain publik untuk metadata canonical/OpenGraph (mis. `https://unionbarbershop.example.com`). |

Tidak ada secret, API key, atau credential di dalam repo.

## Deployment

### Vercel (disarankan)

1. Push repo ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new) → **Import** repositori.
3. Biarkan semua setting default (framework: Next.js). Klik **Deploy**.
4. (Opsional) Set `NEXT_PUBLIC_SITE_URL` di *Project Settings → Environment Variables* setelah domain produksi aktif.

Build default menghasilkan output standalone yang kompatibel penuh dengan Vercel.

### GitHub Pages (testing)

```bash
BUILD_STATIC=1 NEXT_PUBLIC_BASE_PATH=/<nama-repo> bunx next build
touch out/.nojekyll
# deploy folder out/ (mis. dengan `npx gh-pages -d out` atau Actions)
```

Base path dipakai otomatis sehingga semua asset tetap termuat.

## Catatan Data

- Data bisnis (alamat, telepon, rating 4,4, koordinat, jam buka 10.00–22.00) diambil dari listing Google Maps resmi per Oktober 2026.
- Jam operasional dan harga (mulai 40K) bersumber dari listing Maps & Instagram resmi `@union__barbershop` — **mohon konfirmasi ulang ke pemilik** sebelum go-live, karena keduanya bisa berubah sewaktu-waktu.
- Foto interior adalah foto asli milik pelanggan di listing Google Maps (Hadji Erik, Apr 2025), bukan hasil AI.

## Lisensi

Hak cipta © 2026 UNION BARBERSHOP. Kode demo bebas digunakan pemilik bisnis.
