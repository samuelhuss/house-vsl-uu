"use client"

import { useEffect, useState } from "react"

// Componente para o script do GTM que vai no head
export function GoogleTagManagerHead() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Evitar carregamento duplicado
    if (isLoaded) return

    // Implementação do script do GTM com carregamento otimizado
    try {
      // Verificar se o dataLayer já existe
      window.dataLayer = window.dataLayer || []

      // Função gtag para enviar eventos
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }

      // Inicializar o GTM
      gtag("js", new Date())
      gtag("config", "GTM-KKRZCQV8", {
        optimize_id: "OPT-XXXXXXXX",
        transport_type: "beacon",
        send_page_view: true,
      })

      // Adicionar o script do GTM
      const script = document.createElement("script")
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KKRZCQV8');
      `
      script.async = true
      document.head.appendChild(script)

      setIsLoaded(true)
    } catch (error) {
      console.error("Erro ao carregar o Google Tag Manager:", error)
    }
  }, [isLoaded])

  return null
}

// Componente para o noscript do GTM que vai no body
export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KKRZCQV8"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
        aria-hidden="true"
      />
    </noscript>
  )
}

// Adicionar tipagem para o dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}
