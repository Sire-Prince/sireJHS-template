/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
