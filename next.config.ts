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
      {
        protocol: "https",
        hostname: "api.imghippo.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
