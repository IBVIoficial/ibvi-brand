'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'primary' | 'dark' | 'mono' | 'mono-dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

const sizes = {
  sm: { width: 109, height: 32 },
  md: { width: 136, height: 40 },
  lg: { width: 163, height: 48 },
  xl: { width: 218, height: 64 },
}

export function Logo({ 
  variant = 'primary', 
  size = 'md',
  animated = false,
  className 
}: LogoProps) {
  const dimensions = sizes[size]
  
  const logos = {
    primary: '/assets/logo/png/ibvi-logo-primary.png',
    dark: '/assets/logo/png/ibvi-logo-dark.png',
    mono: '/assets/logo/png/ibvi-logo-mono.png',
    'mono-dark': '/assets/logo/png/ibvi-logo-mono-dark.png',
  }
  
  const MotionImage = motion.create(Image)
  
  const imageElement = (
    <Image
      src={logos[variant]}
      alt="IBVI - Inteligência Imobiliária Precisa"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={cn('h-auto', className)}
    />
  )
  
  if (animated) {
    return (
      <MotionImage
        src={logos[variant]}
        alt="IBVI - Inteligência Imobiliária Precisa"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={cn('h-auto', className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    )
  }
  
  return imageElement
}

// Auto dark mode logo
export function LogoAuto({ size = 'md', mono = false, className }: Omit<LogoProps, 'variant'> & { mono?: boolean }) {
  const dimensions = sizes[size]
  
  return (
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcSet={mono ? '/assets/logo/png/ibvi-logo-mono-dark.png' : '/assets/logo/png/ibvi-logo-dark.png'}
      />
      <Image
        src={mono ? '/assets/logo/png/ibvi-logo-mono.png' : '/assets/logo/png/ibvi-logo-primary.png'}
        alt="IBVI - Inteligência Imobiliária Precisa"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={cn('h-auto', className)}
      />
    </picture>
  )
}