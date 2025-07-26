"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface VistaLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showText?: boolean
}

const sizeMap = {
  sm: { width: 120, height: 40 },
  md: { width: 160, height: 53 },
  lg: { width: 200, height: 67 },
  xl: { width: 240, height: 80 },
}

export function VistaLogo({ size = "md", className = "", showText = true }: VistaLogoProps) {
  const dimensions = sizeMap[size]

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo Image */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex-shrink-0"
      >
        <Image
          src="/images/vista-logo.png"
          alt="VISTA Logo"
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain rounded-full grayscale brightness-75"
          priority
        />
      </motion.div>

      {/* Logo Text */}
      {showText && (
        <motion.div
          className="flex flex-col flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className={`font-bold text-primary tracking-tight ${
              size === "sm" ? "text-lg" : size === "md" ? "text-xl" : size === "lg" ? "text-2xl" : "text-3xl"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            VISTA
          </motion.span>
          <motion.span
            className={`text-muted-foreground font-medium ${
              size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Connect. Supply. Grow.
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  )
}
