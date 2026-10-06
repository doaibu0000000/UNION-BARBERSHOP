import type { NextConfig } from "next";

/**
 * GitHub Pages (opsional):
 *   BUILD_STATIC=1 NEXT_PUBLIC_BASE_PATH=/<nama-repo> bunx next build
 *   → menghasilkan folder `out/` siap unggah ke GitHub Pages.
 * Default (tanpa env): build standalone untuk Vercel — tidak berubah.
 */
const isStaticExport = process.env.BUILD_STATIC === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? { output: "export" as const, basePath, assetPrefix: basePath || undefined }
    : { output: "standalone" as const }),
  images: { unoptimized: true },
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
