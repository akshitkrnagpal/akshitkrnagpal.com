const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [256, 512],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
