"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeStatus() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getIcon = () => {
    if (theme === "system") {
      return resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
    }
    return theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
  }

  const getStatus = () => {
    if (theme === "system") {
      return `System (${resolvedTheme})`
    }
    return theme?.charAt(0).toUpperCase() + theme?.slice(1)
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {getIcon()}
      <span>{getStatus()}</span>
    </div>
  )
}
