import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/dewjet',
        destination: 'https://tekinpower.com/dewjet-elektrikli-motor',
        permanent: true,
      },
      ...[
        ['/hizmetlerimiz/telekomunikasyon', '/hizmetlerimiz/enerji-depolama'],
        ['/hizmetlerimiz/konut-cozumleri', '/hizmetlerimiz/enerji-depolama'],
        ['/hizmetlerimiz/car-port', '/gunespaneli'],
        ['/hizmetlerimiz/mobil-solar', '/gunespaneli'],
        ['/hizmetlerimiz/solar-pole', '/gunespaneli'],
        ['/hizmetlerimiz/e-bus', '/lifepo4'],
        ['/hizmetlerimiz/forklift', '/lifepo4'],
        ['/hizmetlerimiz/golf-araclari', '/lifepo4'],
        ['/hizmetlerimiz/drone', '/lifepo4'],
        ['/afad', '/dewjet-pompa#tasinabilirlik'],
        ['/sahadan-gorseller', '/hizmetlerimiz'],
        ['/sahadan-gorseller/marin-cozumler', '/hizmetlerimiz/marin'],
        ['/sahadan-gorseller/elektrikli-pompa-cozumleri', '/dewjet-pompa'],
      ].map(([source, path]) => ({
        source,
        destination: `https://tekinpower.com${path}`,
        permanent: true,
      })),
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tekinpower.com' }],
        destination: 'https://tekinpower.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tekinpower.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Görüntü optimizasyonu için
    formats: ["image/avif", "image/webp"],
    // Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performans optimizasyonları
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Statik optimizasyon
  output: "standalone",
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap"],
  },
  // Headers for video optimization
  async headers() {
    return [
      {
        source: "/media/sharp-v2/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/landing-page-videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
