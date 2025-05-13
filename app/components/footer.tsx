"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div
      className="mt-8 text-center text-gray-500 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <p>© {new Date().getFullYear()} House Gestão Imobiliária. Todos os direitos reservados.</p>
    </motion.div>
  )
}
