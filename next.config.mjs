import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  output: 'export',
})

export default nextConfig
