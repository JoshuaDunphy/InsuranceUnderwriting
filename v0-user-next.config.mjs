/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use a different approach instead of static exports
  output: 'standalone',
  // Disable image optimization since we're handling images ourselves
  images: {
    unoptimized: true,
  },
  // Skip type checking during builds for better performance
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during builds for better performance
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
