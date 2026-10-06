import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "UNION BARBERSHOP — Cukur Rapi di Subang",
  description:
    "Barbershop sederhana di Komplek Pujasera, Jl. A. Yani Subang. Cukuran rapi, crew ramah, buka setiap hari 10.00–22.00. Datang langsung atau booking via WhatsApp.",
  keywords: [
    "barbershop Subang",
    "UNION BARBERSHOP",
    "cukur rambut Subang",
    "barbershop Pujasera Subang",
    "barbershop Jalan A Yani",
    "barber Subang",
  ],
  authors: [{ name: "UNION BARBERSHOP" }],
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  alternates: { canonical: "/" },
  openGraph: {
    title: "UNION BARBERSHOP — Cukur Rapi di Subang",
    description:
      "Cukuran rapi, crew ramah, harga masuk akal. Buka setiap hari 10.00–22.00 di Komplek Pujasera, Jl. A. Yani Subang.",
    url: "/",
    siteName: "UNION BARBERSHOP",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${basePath}/og-union-barbershop.jpg`,
        width: 1200,
        height: 630,
        alt: "Suasana UNION BARBERSHOP Subang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNION BARBERSHOP — Cukur Rapi di Subang",
    description:
      "Cukuran rapi, crew ramah, harga masuk akal. Buka setiap hari di Subang.",
    images: [`${basePath}/og-union-barbershop.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17140f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${display.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {/* Tandai JS aktif sebelum paint pertama — dipakai CSS scroll-reveal
            agar konten tetap tampil penuh bila JS dimatikan/gagal. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
