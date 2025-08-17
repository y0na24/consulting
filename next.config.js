/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export' для Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Убираем images: { unoptimized: true } для Vercel
};

module.exports = nextConfig;
