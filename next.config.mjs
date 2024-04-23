/** @type {import('next').NextConfig} */
// const nextConfig = {

//     // output: 'export',
// };

// export default nextConfig;



// V2
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  // vaša konfiguracija
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(nextConfig);


