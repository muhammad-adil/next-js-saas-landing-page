// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// 
// 
// 
/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
  // Optional: Add GSAP config if needed
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader']
    });
    return config;
  }
}

module.exports = nextConfig;