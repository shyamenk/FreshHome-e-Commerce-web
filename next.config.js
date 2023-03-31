/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER: process.env.SERVER,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'loremflickr.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
}

module.exports = nextConfig
