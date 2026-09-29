import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/emergeai-risk-radar',
  assetPrefix: '/emergeai-risk-radar/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;