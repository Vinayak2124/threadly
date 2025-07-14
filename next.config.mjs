/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ✅ disable Turbopack, fallback to Webpack
  },
};

export default nextConfig;
