import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManagerHead, GoogleTagManagerBody } from "./google-tag-manager"

// Otimização: Carregamento de fonte com display swap para melhor CLS
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "House | Gestão Imobiliária",
  description: "House | Gestão Imobiliária",
  // Otimização: Adicionar metadados para melhorar SEO e performance
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  formatDetection: {
    telephone: false,
  },
  // Otimização: Instruções para browsers sobre preconexões
  other: {
    "google-site-verification": "your-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Otimização: Preconexões para domínios externos 
        <link rel="preconnect" href="https://player-vz-218ece69-811.tv.pandavideo.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://b-vz-218ece69-811.tv.pandavideo.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vz-218ece69-811.b-cdn.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      */}
        {/* Preload resources for Panda Video - Otimizado e reorganizado 
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/css/styles.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/hls.js"
          as="script"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
          fetchPriority="high"
        />
*/}
        {/* Otimização: Prefetch para recursos que serão necessários em breve 
        <link
          rel="prefetch"
          href="https://config.tv.pandavideo.com.br/vz-218ece69-811/133316f2-6015-417c-b7db-79830abb907d.json"
        />
        <link rel="prefetch" href="https://config.tv.pandavideo.com.br/vz-218ece69-811/config.json" />
*/}
        {/* DNS prefetch para domínios externos 
        <link rel="dns-prefetch" href="https://b-vz-218ece69-811.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-218ece69-811.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-218ece69-811.b-cdn.net" />
        */}
        
        {/* Google Tag Manager - Head Script */}
        <GoogleTagManagerHead />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager - Body noscript */}
        <GoogleTagManagerBody />

        {children}
      </body>
    </html>
  )
}
