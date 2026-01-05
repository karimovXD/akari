import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "myanimelist.net",
        port: "",
        pathname: "/**"
      },
    ]
  }
};

export default nextConfig;
