"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Toggle } from "@/components/ui/toggle"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Toggle
      size="lg"
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={(pressed: boolean) => setTheme(pressed ? "dark" : "light")}
      className="rounded-full w-10 h-10 p-0 bg-background border-ibvi-teal dark:border-ibvi-gold border hover:bg-muted"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  )
}
