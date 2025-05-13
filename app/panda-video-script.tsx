"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    pandascripttag: any[]
    PandaPlayer: any
  }
}

export function PandaVideoScript() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  useEffect(() => {
    // Otimização: Verificar se o script já existe antes de adicionar
    if (!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')) {
      // Otimização: Usar técnica de carregamento assíncrono com prioridade
      const script = document.createElement("script")
      script.src = "https://player.pandavideo.com.br/api.v2.js"
      script.async = true
      script.onload = () => setIsScriptLoaded(true)

      // Adicionar atributo de prioridade alta
      script.setAttribute("fetchpriority", "high")
      document.head.appendChild(script)
    } else {
      setIsScriptLoaded(true)
    }

    // Inicializar o PandaPlayer quando o script estiver carregado
    window.pandascripttag = window.pandascripttag || []

    const initializePlayer = () => {
      if (window.PandaPlayer) {
        try {
          const p = new window.PandaPlayer("panda-133316f2-6015-417c-b7db-79830abb907d", {
            onReady() {
              p.loadButtonInTime({ fetchApi: true })
            },
          })
        } catch (error) {
          console.error("Erro ao inicializar o PandaPlayer:", error)
        }
      }
    }

    window.pandascripttag.push(initializePlayer)

    // Otimização: Adicionar um fallback para garantir que o player seja inicializado
    const timeoutId = setTimeout(() => {
      if (window.PandaPlayer && !isScriptLoaded) {
        setIsScriptLoaded(true)
        initializePlayer()
      }
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isScriptLoaded])

  // Este div é onde o botão do Panda Video será renderizado
  return <div id="965a7786-2cd9-4369-80b5-f243fa17270b" className="w-full"></div>
}
