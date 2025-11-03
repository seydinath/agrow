import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "AgroWomanEcology - Agriculture & Écologie au Sénégal",
  description: "Plateforme dédiée à l'agriculture durable et l'écologie au Sénégal",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} font-sans antialiased bg-animated`}>
        {/* Skip link for keyboard users */}
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-foreground text-primary px-3 py-2 rounded-md">Aller au contenu</a>
        <Navigation />
        <main id="content" className="min-h-screen">
          {/* Center site and constrain max width to improve layout on large screens */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
