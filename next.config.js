/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig