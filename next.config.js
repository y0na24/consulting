/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export' для Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Убираем images: { unoptimized: true } для Vercel
  
  // Оптимизация для Vercel
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  
  // Настройки для CSS
  webpack: (config, { dev, isServer }) => {
    // Оптимизация CSS в продакшене
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
