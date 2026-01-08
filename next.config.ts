import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.imghippo.com",
      },
      {
        protocol: "https",
        hostname: "imghippo.com",
      },
    ],
  },
};

export default nextConfig;
