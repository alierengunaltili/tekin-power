import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tekinpower.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Görüntü optimizasyonu için
    formats: ['image/avif', 'image/webp'],
  },
  // Performans optimizasyonları
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  // Statik optimizasyon
  output: 'standalone',
};

export default nextConfig;
