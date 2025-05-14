import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { GoogleTagManagerBody } from "./google-tag-manager"

// Removendo o carregamento da fonte Inter via next/font
// e substituindo por carregamento otimizado

export const metadata: Metadata = {
  title: "House | Gestão Imobiliária",
  description: "House | Gestão Imobiliária",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#FE5700",
  formatDetection: {
    telephone: false,
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
        {/* Preconexões para domínios externos */}
        <link rel="preconnect" href="https://player-vz-218ece69-811.tv.pandavideo.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://b-vz-218ece69-811.tv.pandavideo.com.br" crossOrigin="anonymous" />

        {/* CSS crítico inline para first paint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* CSS crítico para first paint */
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: #ffffff;
          }
          
          .logo-container {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 800px;
            margin: 0 auto 1.5rem;
          }
          
          .logo-image {
            max-width: 100%;
            height: auto;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
          }
          
          @media (min-width: 768px) {
            .container {
              padding: 2rem;
            }
          }
          
          .house-orange {
            color: #FE5700;
          }
          
          .bg-house-orange {
            background-color: #FE5700;
          }
        `,
          }}
        />

        {/* Carregamento otimizado da fonte Inter */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        {/* Preload da imagem do logo para LCP */}
        <link rel="preload" href="/images/logo.png" as="image" fetchPriority="high" />

        {/* Google Tag Manager - Carregamento otimizado */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-KKRZCQV8');
          
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKRZCQV8');
        `}</Script>
      </head>
      <body className="font-sans">
        {/* Google Tag Manager - Body noscript */}
        <GoogleTagManagerBody />

        {children}
      </body>
    </html>
  )
}
