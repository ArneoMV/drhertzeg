/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
};
export default nextConfig;



// Version 2

// import withBundleAnalyzer from '@next/bundle-analyzer';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//   trailingSlash: true, // Optional: Ensures trailing slashes if required
//   output: 'export', // Ensure static export
//   webpack: (config) => {
//     // Handle SVG imports
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack', 'url-loader'],
//     });

//     // Add path alias and extensions
//     config.resolve.alias['~'] = path.resolve(__dirname);
//     config.resolve.extensions.push('.js', '.jsx');

//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(process.cwd(), 'styles')],
//   },
//   images: {
//     unoptimized: true, // Disable image optimization
//   },
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })(nextConfig);


//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//     assetPrefix: process.env.ASSET_PREFIX || '',
  
//     webpack: (config, { isServer }) => {
//       // Adding custom rule for handling SVGs with url-loader
//       config.module.rules.push({
//         test: /\.svg$/,
//         type: 'asset/resource',
//         generator: {
//           filename: 'static/media/[name].[hash][ext]',
//         },
//       });
  
//       return config;
//     },
//   };
  
//   export default nextConfig;
  