Enter/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  experimental: { optimizeCss: true }
};

module.exports = nextConfig;
