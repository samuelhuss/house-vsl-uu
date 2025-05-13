"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    pandascripttag: any[]
    PandaPlayer: any
  }
}

export function PandaVideoScript() {
  useEffect(() => {
    // Adicionar o script da API do Panda Video
    if (!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')) {
      const script = document.createElement("script")
      script.src = "https://player.pandavideo.com.br/api.v2.js"
      script.async = true
      document.head.appendChild(script)
    }

    // Inicializar o PandaPlayer quando o script estiver carregado
    window.pandascripttag = window.pandascripttag || []
    window.pandascripttag.push(() => {
      if (window.PandaPlayer) {
        const p = new window.PandaPlayer("panda-133316f2-6015-417c-b7db-79830abb907d", {
          onReady() {
            p.loadButtonInTime({ fetchApi: true })
          },
        })
      }
    })

    return () => {
      // Cleanup se necessário
    }
  }, [])

  // Este div é onde o botão do Panda Video será renderizado
  return <div id="965a7786-2cd9-4369-80b5-f243fa17270b" className="w-full"></div>
}
