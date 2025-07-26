"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Grid Background Component
export interface GridBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number
  gridColor?: string
  darkGridColor?: string
  showFade?: boolean
  fadeIntensity?: number
  children?: React.ReactNode
}

export const GridBackground = ({
  className,
  children,
  gridSize = 20,
  gridColor = "#e4e4e7",
  darkGridColor = "#262626",
  showFade = true,
  fadeIntensity = 20,
  ...props
}: GridBackgroundProps) => {
  const [currentGridColor, setCurrentGridColor] = useState(gridColor)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkModeActive = document.documentElement.classList.contains("dark") || prefersDarkMode
    setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive = document.documentElement.classList.contains("dark")
          setCurrentGridColor(updatedIsDarkModeActive ? darkGridColor : gridColor)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [gridColor, darkGridColor])

  return (
    <div
      className={cn("relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black", className)}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundSize: gridSize + "px " + gridSize + "px",
          backgroundImage:
            "linear-gradient(to right, " +
            currentGridColor +
            " 1px, transparent 1px), " +
            "linear-gradient(to bottom, " +
            currentGridColor +
            " 1px, transparent 1px)",
        }}
      />
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

// Dot Background Component
export interface DotBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  dotSize?: number
  dotColor?: string
  darkDotColor?: string
  spacing?: number
  showFade?: boolean
  fadeIntensity?: number
  children?: React.ReactNode
}

export const DotBackground = ({
  className,
  children,
  dotSize = 1,
  dotColor = "#3b82f6",
  darkDotColor = "#60a5fa",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}: DotBackgroundProps) => {
  const [currentDotColor, setCurrentDotColor] = useState(dotColor)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkModeActive = document.documentElement.classList.contains("dark") || prefersDarkMode
    setCurrentDotColor(isDarkModeActive ? darkDotColor : dotColor)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive = document.documentElement.classList.contains("dark")
          setCurrentDotColor(updatedIsDarkModeActive ? darkDotColor : dotColor)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [dotColor, darkDotColor])

  return (
    <div
      className={cn("relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black", className)}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundSize: spacing + "px " + spacing + "px",
          backgroundImage: "radial-gradient(" + currentDotColor + " " + dotSize + "px, transparent " + dotSize + "px)",
        }}
      />
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

// Animated Grid Background with moving effect
export interface AnimatedGridBackgroundProps extends GridBackgroundProps {
  animationSpeed?: number
}

export const AnimatedGridBackground = ({
  className,
  children,
  gridSize = 20,
  gridColor = "#3b82f6",
  darkGridColor = "#60a5fa",
  showFade = true,
  fadeIntensity = 30,
  animationSpeed = 20,
  ...props
}: AnimatedGridBackgroundProps) => {
  const [currentGridColor, setCurrentGridColor] = useState(gridColor)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkModeActive = document.documentElement.classList.contains("dark") || prefersDarkMode
    setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive = document.documentElement.classList.contains("dark")
          setCurrentGridColor(updatedIsDarkModeActive ? darkGridColor : gridColor)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [gridColor, darkGridColor])

  return (
    <div
      className={cn("relative flex min-h-screen w-full items-center justify-center overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: gridSize + "px " + gridSize + "px",
          backgroundImage:
            "linear-gradient(to right, " +
            currentGridColor +
            " 1px, transparent 1px), " +
            "linear-gradient(to bottom, " +
            currentGridColor +
            " 1px, transparent 1px)",
          animation: `grid-move ${animationSpeed}s linear infinite`,
        }}
      />
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
          }}
        />
      )}
      <div className="relative z-20 w-full">{children}</div>
    </div>
  )
}

export default { GridBackground, DotBackground, AnimatedGridBackground }
