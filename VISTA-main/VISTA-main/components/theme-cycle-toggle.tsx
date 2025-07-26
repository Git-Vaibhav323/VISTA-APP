"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeCycleToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light mode"
      case "dark":
        return "Dark mode"
      default:
        return "System mode"
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-105 bg-transparent"
      title={`Current: ${getLabel()}. Click to cycle themes.`}
    >
      <div className="transition-all duration-300">{getIcon()}</div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
