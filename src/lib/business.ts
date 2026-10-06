/**
 * Data bisnis UNION BARBERSHOP
 * Sumber: listing Google Maps resmi (Okt 2026) + Instagram @union__barbershop.
 * Owner cukup mengedit file ini untuk mengubah isi landing page.
 */
export const business = {
  name: "UNION BARBERSHOP",
  shortName: "UNION",
  category: "Barber shop",
  phoneDisplay: "0822-1471-1122",
  phoneHref: "+6282214711122",
  waNumber: "6282214711122",
  waText:
    "Halo UNION BARBERSHOP, saya mau booking cukuran. Hari ini masih ada slot?",
  addressShort: "Pujasera Ruko B3, Subang",
  addressFull:
    "Komplek Pujasera, Jl. Jend. Achmad Yani Ruko B3, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211",
  hoursLine: "Setiap hari, 10.00 – 22.00 WIB",
  hoursNote: "Jam bisa berubah saat hari besar — tanya dulu aja kalau ragu.",
  rating: 4.4,
  priceFrom: "40.000",
  mapsUrl:
    "https://www.google.com/maps/place/UNION+BARBERSHOP/data=!4m7!3m6!1s0x2e693daac1a101d1:0x5f1a20a0aa2e6ca2!8m2!3d-6.568895!4d107.7590996!16s%2Fg%2F11sj8x_km_",
  mapsEmbed:
    "https://maps.google.com/maps?q=-6.568895,107.7590996&z=17&hl=id&output=embed",
  instagram: "https://www.instagram.com/union__barbershop",
  instagramHandle: "@union__barbershop",
} as const;

export const waLink = `https://wa.me/${business.waNumber}?text=${encodeURIComponent(
  business.waText
)}`;
