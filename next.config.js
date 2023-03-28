/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
}

module.exports = nextConfig
