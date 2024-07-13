/** @type {import('next').NextConfig} */
// const nextConfig = {

//     // output: 'export',
// };

// export default nextConfig;



// // V2
// import withBundleAnalyzer from '@next/bundle-analyzer';

// const nextConfig = {
//   // vaša konfiguracija
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true'
// })(nextConfig);


// V3
// next.config.mjs

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // vaša konfiguracija
  webpack: (config) => {
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  }
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(nextConfig);
