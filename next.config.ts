import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    qualities: [75, 90],
    unoptimized: true,
  },
};

export default nextConfig;
