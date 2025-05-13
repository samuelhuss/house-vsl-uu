"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { WhatsappLogo } from "./whatsapp-logo"
import { motion } from "framer-motion"

export default function VSLPage() {
  // Definido como true para visualização imediata. Mude para false quando tiver o ID do vídeo.
  const [showCTA, setShowCTA] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Função para lidar com mensagens do Panda Video
  useEffect(() => {
    const handlePandaMessage = (event: MessageEvent) => {
      // Verificar se a mensagem é do Panda Video
      if (event.data && typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data)

          // Panda Video envia eventos de progresso que podemos capturar
          // O formato exato pode variar, mas geralmente inclui informações sobre o progresso
          if (data.event === "timeupdate" || data.action === "timeupdate") {
            const percentWatched = data.percent || data.percentage || 0
            if (percentWatched >= 50 && !showCTA) {
              setShowCTA(true)
            }
          }
        } catch (e) {
          // Ignorar mensagens que não são JSON válido
        }
      }
    }

    // Adicionar listener para mensagens do iframe
    window.addEventListener("message", handlePandaMessage)

    // Limpar listener ao desmontar
    return () => {
      window.removeEventListener("message", handlePandaMessage)
    }
  }, [showCTA])

  // Variantes de animação para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(254, 87, 0)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
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
      {/* Logo */}
      <motion.div className="w-full max-w-4xl mb-8" variants={logoVariants}>
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="House Gestão Imobiliária"
            width={300}
            height={100}
            className="h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* Container do vídeo */}
      <motion.div
        className="w-full max-w-3xl mx-auto bg-zinc-900 p-4 rounded-lg shadow-xl border border-zinc-800"
        variants={itemVariants}
      >
        {/* Panda Video Embed */}
        <motion.div
          className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://player-vz-xxxxxxxx-x.tv.pandavideo.com.br/embed/?v=xxxxxxxxxxxxxxxx"
            allowFullScreen
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          ></iframe>
          {/* 
            Nota: Substitua o URL acima pelo código de incorporação fornecido pelo Panda Video.
            O formato exato pode variar, mas geralmente será algo como:
            https://player-vz-[ID]-[X].tv.pandavideo.com.br/embed/?v=[VIDEO_ID]
          */}
        </motion.div>

        {/* Botão CTA para WhatsApp - aparece apenas após metade do vídeo */}
        {showCTA && (
          <motion.div className="mt-8 flex justify-center" initial="hidden" animate="visible" variants={itemVariants}>
            <motion.a
              href="https://wa.me/SEUNUMERO?text=Olá,%20quero%20saber%20mais%20sobre%20os%20serviços%20da%20House%20Gestão%20Imobiliária!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-house-orange text-white font-bold py-4 px-8 rounded-lg text-xl flex items-center gap-3 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(254, 87, 0, 0)",
                  "0px 0px 15px rgba(254, 87, 0, 0.7)",
                  "0px 0px 0px rgba(254, 87, 0, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                },
              }}
            >
              <WhatsappLogo className="w-7 h-7" />
              Quero participar do grupo
            </motion.a>
          </motion.div>
        )}
      </motion.div>

      {/* Rodapé */}
      <motion.div className="mt-8 text-center text-gray-500 text-sm" variants={itemVariants}>
        <p>© {new Date().getFullYear()} House Gestão Imobiliária. Todos os direitos reservados.</p>
      </motion.div>
    </motion.div>
  )
}
