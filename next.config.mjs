/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isAnalyze = process.env.ANALYZE === 'true'

const nextConfig = {
  images: {
    // Let Next optimize local images (remove unoptimized flag)
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Explicit turbopack root to avoid Next.js workspace root inference warnings
  turbopack: {
    root: __dirname,
  },
  webpack(config) {
    if (isAnalyze) {
      // Enable bundle analyzer dynamically without permanent dependency (optional placeholder)
    }
    return config
  },
}

export default nextConfig
