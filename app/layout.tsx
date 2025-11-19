import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.agrowomanecology.sn"

export const metadata: Metadata = {
  title: {
    default: "AgroWomanEcology - Agriculture & Écologie au Sénégal",
    template: "%s | AgroWomanEcology",
  },
  description: "Plateforme dédiée à l'agriculture durable, à l'autonomisation des femmes et à l'écologie au Sénégal.",
  metadataBase: new URL(siteUrl),
  keywords: ["agriculture", "écologie", "Sénégal", "autonomisation des femmes", "durable", "AgroWomanEcology"],
  authors: [{ name: "AgroWomanEcology" }],
  alternates: {
    canonical: siteUrl,
    languages: { "fr-FR": siteUrl + "/fr", "en": siteUrl + "/en" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AgroWomanEcology - Agriculture & Écologie au Sénégal",
    description: "Agriculture durable et écologie: ressources, services et autonomisation des femmes au Sénégal.",
    siteName: "AgroWomanEcology",
    images: [
      {
        url: siteUrl + "/logo-awe.png",
        width: 512,
        height: 512,
        alt: "Logo AgroWomanEcology",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AgroWomanEcology",
    title: "AgroWomanEcology - Agriculture & Écologie au Sénégal",
    description: "Plateforme dédiée à l'agriculture durable et à l'autonomisation des femmes.",
    images: [siteUrl + "/logo-awe.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={siteUrl} />
        <link rel="preload" as="image" href="/logo-awe.svg" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta name="theme-color" content="#065B2F" />
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          // Using dangerouslySetInnerHTML to inject JSON-LD without escaping
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AgroWomanEcology',
              url: siteUrl,
              logo: siteUrl + '/logo-awe.png',
              description:
                "Agriculture durable et écologie au Sénégal: formations, conseils et autonomisation des femmes.",
              sameAs: [
                'https://facebook.com/AgroWomanEcology',
                'https://twitter.com/AgroWomanEcology',
                'https://www.instagram.com/AgroWomanEcology',
                'https://www.linkedin.com/company/agrowomanecology',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-animated flex flex-col`}>
        {/* Skip link for keyboard users */}
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-foreground text-primary px-3 py-2 rounded-md">Aller au contenu</a>
        <Navigation />
        <main id="content" className="flex-1 relative">
          {/* Center site and constrain max width to improve layout on large screens */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">{children}</div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
