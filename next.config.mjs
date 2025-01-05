import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  output: 'export',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: `${process.env.APP_BASE_URL ?? '/'}`,
  assetPrefix: `${process.env.APP_BASE_URL ?? ''}/`,
})

export default nextConfig
