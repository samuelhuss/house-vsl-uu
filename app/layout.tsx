import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManagerHead, GoogleTagManagerBody } from "./google-tag-manager"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "House | Gestão Imobiliária",
  description: "House | Gestão Imobiliária",
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
        {/* Preload resources for Panda Video */}
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/css/styles.css"
          as="style"
        />
        <link
          rel="prerender"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=133316f2-6015-417c-b7db-79830abb907d"
        />
        <link rel="preload"href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-218ece69-811/133316f2-6015-417c-b7db-79830abb907d.json"
          as="fetch"
        />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-218ece69-811/config.json" as="fetch" />
        <link
          rel="preload"
          href="https://b-vz-218ece69-811.tv.pandavideo.com.br/133316f2-6015-417c-b7db-79830abb907d/playlist.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://b-vz-218ece69-811.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-218ece69-811.tv.pandavideo.com.br"/>
        <link rel="dns-prefetch" href="https://vz-218ece69-811.b-cdn.net" />

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
