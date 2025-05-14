"use client"

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

// Removido o componente GoogleTagManagerHead para evitar bloqueio de renderização
