import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "House | Gestão Imobiliária",
  description: "House | Gestão Imobiliária",
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
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=4e6212d0-f2c0-45a6-80d7-b532fc5d1f09"
        />
        <link rel="preload" href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link
          rel="preload"
          href="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-218ece69-811/4e6212d0-f2c0-45a6-80d7-b532fc5d1f09.json"
          as="fetch"
        />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-218ece69-811/config.json" as="fetch" />
        <link
          rel="preload"
          href="https://b-vz-218ece69-811.tv.pandavideo.com.br/4e6212d0-f2c0-45a6-80d7-b532fc5d1f09/playlist.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://b-vz-218ece69-811.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-218ece69-811.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-218ece69-811.b-cdn.net" />

        {/* 
          ===== GOOGLE TAG MANAGER - HEAD SCRIPT =====
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKRZCQV8');</script>
          <!-- End Google Tag Manager -->
        */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KKRZCQV8');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* 
          ===== GOOGLE TAG MANAGER - BODY NOSCRIPT =====
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKRZCQV8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
        */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKRZCQV8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
