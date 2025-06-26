/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// import type { NextConfig } from "next";

const nextConfig= {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: "/media/**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
