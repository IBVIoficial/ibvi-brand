"use client"

import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
