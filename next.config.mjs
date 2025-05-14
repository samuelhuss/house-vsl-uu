/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
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

  // Cabeçalhos personalizados
  async headers() {
    return [
      {
        // Cache agressivo apenas para imagens
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
