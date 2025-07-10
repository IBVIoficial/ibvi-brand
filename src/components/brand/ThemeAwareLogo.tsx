'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface ThemeAwareLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  mono?: boolean
  className?: string
}

const sizes = {
  sm: { width: 109, height: 32 },
  md: { width: 136, height: 40 },
  lg: { width: 163, height: 48 },
  xl: { width: 218, height: 64 },
}

export function ThemeAwareLogo({ 
  size = 'md', 
  mono = false, 
  className 
}: ThemeAwareLogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const dimensions = sizes[size]
  
  // Determine which logo to show based on the current theme
  const isDark = theme === 'dark' || resolvedTheme === 'dark'
  
  // In light mode, use the primary logo (or mono if requested)
  // In dark mode, use the dark logo (or mono dark if requested)
  const logoSrc = isDark
    ? mono 
      ? '/assets/logo/png/ibvi-logo-mono-dark.png' 
      : '/assets/logo/png/ibvi-logo-dark.png'
    : mono 
      ? '/assets/logo/png/ibvi-logo-mono.png' 
      : '/assets/logo/png/ibvi-logo-primary.png'
  
  return (
    <Image
      src={logoSrc}
      alt="IBVI - Inteligência Imobiliária Precisa"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={cn('h-auto', className)}
    />
  )
}
