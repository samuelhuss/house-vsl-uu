"use client"
import { Suspense, lazy, useEffect, useState, useRef } from "react"
import { WhatsappLogo } from "./whatsapp-logo"
import { LoadingSpinner } from "./loading-spinner"
import {useIsMobile} from "./hooks/useMobile"

// Otimização: Lazy loading do componente de rodapé
const Footer = lazy(() => import("./components/footer"))
// Lazy loading da imagem para melhorar o first paint
const OptimizedImage = lazy(() => import("./components/optimized-image"))

export default function VSLPage() {
  // Estado para controlar se a página está completamente carregada
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()


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
    
<div className="container animate-fade-in">
      {/* Logo adaptada */}
      <div className="logo-container animate-fade-scale">
        <img
          src="/images/logo.png"
          alt="House Gestão Imobiliária"
          width={isMobile ? 240 : 400}
          height={isMobile ? 80 : 133}
          className="logo-image"
          fetchPriority="high"
        />
      </div>

      {/* Vídeo (mantido igual, mas pode ajustar padding se quiser) */}
      <div className="w-full max-w-3xl mx-auto animate-fade-up">
        <Suspense fallback={<LoadingSpinner />}>
          <div
            className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl animate-fade-up-delayed"
            style={{ willChange: "transform, opacity" }}
          >
            <iframe
              id="panda-video"
              src="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=133316f2-6015-417c-b7db-79830abb907d&alternativeProgress=true&controls=fullscreen&color=%23FE5700&smartAutoplay=true"
              className="absolute top-0 left-0 w-full h-full border-none"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Vídeo House"
            ></iframe>
          </div>
        </Suspense>

        {/* Botão adaptado */}
        <div className="mt-8 flex justify-center animate-fade-up-delayed">
          <a
            href="https://chat.whatsapp.com/E33bM78bqJf1rHmY0cm1Kl"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-house-orange text-white font-bold ${
              isMobile ? "py-3 px-6 text-base gap-2" : "py-4 px-8 text-xl gap-3"
            } rounded-lg flex items-center shadow-lg hover:scale-105 hover:shadow-orange active:scale-95 transition-all duration-300 pulse-animation`}
          >
            <WhatsappLogo className={isMobile ? "w-5 h-5" : "w-7 h-7"} />
            Quero participar do grupo
          </a>
        </div>
      </div>

      {/* Rodapé */}
      <Suspense fallback={<div className="mt-8 h-6"></div>}>
        <Footer />
      </Suspense>
    </div>
  )
}
