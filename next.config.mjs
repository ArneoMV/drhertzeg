/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
};
export default nextConfig;

// V3
// import withBundleAnalyzer from '@next/bundle-analyzer';
// import path from 'path';

// const nextConfig = {
//   // distDir: "build",
//   // vaša konfiguracija
//   webpack: (config) => {
//     config.resolve.extensions.push('.js', '.jsx');
//     return config;
//   },
//   // Sass options
//   sassOptions: {
//     includePaths: [path.join(process.cwd(), 'styles')],
//   },
//   // Image optimization settings for export
//   images: {
//     unoptyimized: true,
//   },
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true'
// })(nextConfig);


// V4
// import withBundleAnalyzer from '@next/bundle-analyzer';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//   trailingSlash: true, // Optional: Ensures trailing slashes if required
//   // distDir: 'out', // Output directory for static export
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack', 'url-loader'],
//     });

//     config.resolve.alias['~'] = path.resolve(__dirname);

//     config.resolve.extensions.push('.js', '.jsx');
//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(process.cwd(), 'styles')],
//   },
//   images: {
//     unoptimized: true,
//   },
//   output: 'export', // Ensure static export
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true'
// })(nextConfig);



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
