// next.config.mjs
/** @type {import('next').NextConfig} */

// Put production-only settings behind NODE_ENV check so dev stays simple.
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // if you want to create a static export, keep this in production only
  // (in dev we don't set output:'export' to avoid dev-time limitations)
  ...(isProd ? { output: 'export' } : {}),

  // Disable Next.js image optimization when doing a static export
  // which prevents the runtime error you saw.
  images: {
    unoptimized: true,
  },

  // Only use basePath / assetPrefix in production (so dev server works at /)
  ...(isProd
    ? {
        basePath: '/Space-theme-portfolio-website',
        assetPrefix: '/Space-theme-portfolio-website',
      }
    : {}),
};

export default nextConfig;
