"use client"
import Image from "next/image"
import { Suspense, lazy, useEffect, useState, useRef } from "react"
import { WhatsappLogo } from "./whatsapp-logo"
import { LoadingSpinner } from "./loading-spinner"

// Otimização: Lazy loading do componente de rodapé
const Footer = lazy(() => import("./components/footer"))

export default function VSLPage() {
  // Estado para controlar se a página está completamente carregada
  const [isLoaded, setIsLoaded] = useState(false)
  const [showCTA, setShowCTA] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true)
    }, 150000) // 150.000 ms = 2 min e 30 s

    return () => clearTimeout(timer) // limpa o timer caso o componente seja desmontado
  }, [])

  // Otimização: Detectar quando a página está completamente carregada
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true)
    } else {
      window.addEventListener("load", () => setIsLoaded(true))
      return () => window.removeEventListener("load", () => setIsLoaded(true))
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4 md:p-8 animate-fade-in">
      {/* Logo - Usando animação CSS em vez de Framer Motion */}
    

      {/* Container do vídeo - Usando animação CSS em vez de Framer Motion */}
      <div
        className="w-full max-w-3xl mx-auto animate-fade-up"
        style={{ willChange: "transform, opacity" }} // Otimização para animações
      >
        {/* Panda Video Embed - Com Suspense para melhor carregamento */}
        <Suspense fallback={<LoadingSpinner />}>
          <div
            className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl animate-fade-up-delayed"
            style={{ willChange: "transform, opacity" }}
          >
            <iframe
              id="panda-133316f2-6015-417c-b7db-79830abb907d"
              src="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=133316f2-6015-417c-b7db-79830abb907d&alternativeProgress=true&controls=fullscreen&color=%23FE5700&smartAutoplay=true"
              className="absolute top-0 left-0 w-full h-full border-none"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              fetchPriority="high"
              title="Vídeo de apresentação House Gestão Imobiliária"
            ></iframe>
          </div>
        </Suspense>

        {/* Botão CTA para WhatsApp - aparece apenas após metade do vídeo */}
        {showCTA && (
          <div className="mt-8 flex justify-center animate-fade-up-delayed">
            <a
              href="https://chat.whatsapp.com/E33bM78bqJf1rHmY0cm1Kl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-house-orange text-white font-bold py-4 px-8 rounded-lg text-xl flex items-center gap-3 shadow-lg hover:scale-105 hover:shadow-orange active:scale-95 transition-all duration-300 pulse-animation"
            >
              <WhatsappLogo className="w-7 h-7" />
              Quero participar do grupo
            </a>
          </div>
        )}
      </div>

      {/* Rodapé - Lazy loaded */}
      <Suspense fallback={<div className="mt-8 h-6"></div>}>
        <Footer />
      </Suspense>
    </div>
  )
}
