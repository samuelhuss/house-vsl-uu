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
    // Adicionar o script da API do Panda Video exatamente como fornecido
    if (!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')) {
      const script = document.createElement("script")
      script.src = "https://player.pandavideo.com.br/api.v2.js"
      script.async = true
      document.head.appendChild(script)
    }

    // Inicializar o PandaPlayer quando o script estiver carregado, usando a configuração fornecida
    window.pandascripttag = window.pandascripttag || []
    window.pandascripttag.push(() => {
      const panda_id_player = "panda-4e6212d0-f2c0-45a6-80d7-b532fc5d1f09"
      const p = new window.PandaPlayer(panda_id_player, {
        onReady() {
          p.loadWindowScreen({ panda_id_player })

          // Adicionar CSS inline para mostrar apenas play/pause
          const styleEl = document.createElement("style")
          styleEl.textContent = `
            /* Ocultar todos os controles exceto play/pause */
            .plyr__progress,
            .plyr__menu,
            .plyr__volume,
            .plyr__time,
            .plyr__tooltip,
            .panda-controls__progress,
            .panda-controls__volume,
            .panda-controls__settings,
            .panda-controls__fullscreen,
            .panda-controls__time,
            .panda-controls__subtitle,
            .panda-controls__quality,
            .panda-controls__speed,
            .panda-controls__share,
            .panda-controls__download {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }

            /* Garantir que apenas o botão de play/pause esteja visível */
            .plyr__control--play,
            .plyr__control--pause,
            .panda-controls__play,
            .panda-controls__pause {
              display: flex !important;
              opacity: 1 !important;
              visibility: visible !important;
              pointer-events: auto !important;
            }

            /* Ajustar a barra de controles para mostrar apenas play/pause */
            .plyr__controls,
            .panda-controls {
              display: flex !important;
              justify-content: center !important;
              background: transparent !important;
            }
          `
          document.head.appendChild(styleEl)
        },
      })
    })

    return () => {
      // Cleanup se necessário
    }
  }, [])

  // Este div é onde o botão do Panda Video será renderizado
  return <div id="panda-window-screen" className="w-full"></div>
}
