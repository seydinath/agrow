import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://www.agrowomanecology.sn'
  const lastMod = new Date().toISOString()
  return [
    { url: base, lastModified: lastMod, changeFrequency: 'weekly', priority: 1 },
    { url: base + '/about', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/services', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/contact', lastModified: lastMod, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
