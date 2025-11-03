/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Explicit turbopack root to avoid Next.js workspace root inference warnings
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
