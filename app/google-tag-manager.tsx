"use client"

import { useEffect } from "react"

// Componente para o script do GTM que vai no head
export function GoogleTagManagerHead() {
  useEffect(() => {
    // Implementação do script do GTM
    const script = document.createElement("script")
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KKRZCQV8');
    `
    document.head.appendChild(script)
  }, [])

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
      />
    </noscript>
  )
}
