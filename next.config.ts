/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", 
      },
      {
        protocol: "https",
        hostname: "www.atalon.id", 
      },
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.lazcdn.com",
      }
    ],
  },
};

module.exports = nextConfig;