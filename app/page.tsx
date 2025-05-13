"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { PandaVideoScript } from "./panda-video-script"
import { Suspense, lazy, useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

// Otimização: Lazy loading do componente de rodapé
const Footer = lazy(() => import("./components/footer"))

export default function VSLPage() {
  // Estado para controlar se a página está completamente carregada
  const [isLoaded, setIsLoaded] = useState(false)

  // Otimização: Detectar quando a página está completamente carregada
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true)
    } else {
      window.addEventListener("load", () => setIsLoaded(true))
      return () => window.removeEventListener("load", () => setIsLoaded(true))
    }
  }, [])

  // Variantes de animação para Framer Motion - Otimizadas para performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Logo - Otimizado com width e height específicos para evitar CLS */}
      <motion.div className="w-full max-w-4xl mb-6" variants={logoVariants}>
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="House Gestão Imobiliária"
            width={300}
            height={100}
            className="h-auto"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXG8NQQAAAABJRU5ErkJggg=="
          />
        </div>
      </motion.div>

      {/* Container do vídeo - Otimizado */}
      <motion.div
        className="w-full max-w-3xl mx-auto"
        variants={itemVariants}
        style={{ willChange: "transform, opacity" }} // Otimização para animações
      >
        {/* Panda Video Embed - Com Suspense para melhor carregamento */}
        <Suspense fallback={<LoadingSpinner />}>
          <motion.div
            className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ willChange: "transform, opacity" }}
          >
            <iframe
              id="panda-133316f2-6015-417c-b7db-79830abb907d"
              src="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=133316f2-6015-417c-b7db-79830abb907d&autoplay=true&muted=true&alternativeProgress=true&controls=fullscreen&color=%23FE5700&saveProgress=true"
              className="absolute top-0 left-0 w-full h-full border-none"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              fetchPriority="high"
              loading="eager"
              title="Vídeo de apresentação House Gestão Imobiliária"
            ></iframe>
          </motion.div>
        </Suspense>

        {/* Container para o botão do Panda Video com animação otimizada */}
        <motion.div
          className="mt-6 flex justify-center button-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.5,
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Componente para carregar o script do Panda Video e o botão externo */}
          <PandaVideoScript />
        </motion.div>
      </motion.div>

      {/* Rodapé - Lazy loaded */}
      <Suspense fallback={<div className="mt-8 h-6"></div>}>
        <Footer />
      </Suspense>
    </motion.div>
  )
}
