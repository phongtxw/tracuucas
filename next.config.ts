import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name][ext]",
      },
    });
    return config;
  },


};

export default nextConfig;
