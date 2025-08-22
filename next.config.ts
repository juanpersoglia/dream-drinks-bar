import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  // Ensure proper static export for Vercel
  trailingSlash: false,
  // Generate manifest properly
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
