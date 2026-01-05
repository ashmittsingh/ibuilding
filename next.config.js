/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
    qualities: [75, 80, 90],
  },
}

module.exports = nextConfig;
