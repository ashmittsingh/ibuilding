/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
}

module.exports = nextConfig
