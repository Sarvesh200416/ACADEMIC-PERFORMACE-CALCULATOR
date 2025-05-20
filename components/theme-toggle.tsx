"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-white/20 dark:border-gray-800/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      <motion.div
        initial={{ rotate: theme === "dark" ? 45 : 0 }}
        animate={{ rotate: theme === "dark" ? 0 : 45 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-primary" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
