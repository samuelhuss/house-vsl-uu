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
        const p = new window.PandaPlayer("panda-4e6212d0-f2c0-45a6-80d7-b532fc5d1f09", {
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
  return <div id="4fe0f103-f81a-41f9-86e3-ecfbc743c259" className="w-full"></div>
}
