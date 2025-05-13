/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização: Habilitar compressão de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  // Otimização: Configurações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Otimização: Configurações de cache
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Otimização: Configurações de headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=31536000',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
