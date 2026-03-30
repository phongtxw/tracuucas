import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // ==================== FIX LỖI NETLIFY BLOBS ====================
  cacheMaxMemorySize: 0,                    // Tắt in-memory cache

  experimental: {
    forceSwcTransforms: true,
    // dynamicIO: true,        // Bật nếu bạn muốn fetch không cache mặc định (tùy chọn)
  },
  // ============================================================

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

  // Tắt cache cho Auth routes
  async headers() {
    return [
      {
        source: "/api/auth/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
