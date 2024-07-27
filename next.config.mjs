/** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: 'export',
// };
// export default nextConfig;

// V3

import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

const nextConfig = {
  // distDir: "build",
  // vaša konfiguracija
  webpack: (config) => {
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
  // Sass options
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  // Image optimization settings for export
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(nextConfig);

