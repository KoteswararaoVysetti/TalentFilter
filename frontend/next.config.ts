import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Add rule for handling SVG as React components using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/, // Match .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack to convert SVG to React component
    });

    return config;
  },
};

export default nextConfig;
