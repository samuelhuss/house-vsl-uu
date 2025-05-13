"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { PandaVideoScript } from "./panda-video-script"

export default function VSLPage() {
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

      {/* Container do vídeo - sem a div cinza */}
      <motion.div className="w-full max-w-3xl mx-auto" variants={itemVariants}>
        {/* Panda Video Embed */}
        <motion.div
          className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <iframe
            id="panda-4e6212d0-f2c0-45a6-80d7-b532fc5d1f09"
            src="https://player-vz-218ece69-811.tv.pandavideo.com.br/embed/?v=4e6212d0-f2c0-45a6-80d7-b532fc5d1f09&autoplay=true&muted=true&hideControlsOnStart=true&mutedIndicatorIcon=false&disableForward=true&playOpensFullscreen=false&restartAfterEnd=true"
            className="absolute top-0 left-0 w-full h-full border-none"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen={true}
            fetchPriority="high"
          ></iframe>
        </motion.div>

        {/* Container para o botão do Panda Video com animação aprimorada */}
        <motion.div
          className="mt-8 flex justify-center button-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
        >
          {/* Componente para carregar o script do Panda Video e o botão externo */}
          <PandaVideoScript />
        </motion.div>
      </motion.div>

      {/* Rodapé */}
      <motion.div className="mt-8 text-center text-gray-500 text-sm" variants={itemVariants}>
        <p>© {new Date().getFullYear()} House Gestão Imobiliária. Todos os direitos reservados.</p>
      </motion.div>
    </motion.div>
  )
}
