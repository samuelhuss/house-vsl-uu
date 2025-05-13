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

            // Configurar para mostrar apenas play/pause
            if (typeof p.setConfig === "function") {
              p.setConfig({
                controls: {
                  showOnlyPlayPause: true,
                  minimal: true,
                  disableProgress: true,
                  disableVolume: true,
                  disableSettings: true,
                  disableFullscreen: true,
                  disableTime: true,
                  disableSubtitle: true,
                  disableQuality: true,
                  disableSpeed: true,
                  disableShare: true,
                  disableDownload: true,
                },
              })
            }

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

            // Tentar injetar CSS no iframe
            try {
              const iframe = document.getElementById("panda-4e6212d0-f2c0-45a6-80d7-b532fc5d1f09")
              if (iframe && iframe.contentWindow && iframe.contentDocument) {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
                const iframeStyle = document.createElement("style")
                iframeStyle.textContent = styleEl.textContent
                iframeDoc.head.appendChild(iframeStyle)
              }
            } catch (e) {
              console.log("Não foi possível injetar CSS no iframe")
            }
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
