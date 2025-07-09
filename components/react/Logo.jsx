import React from 'react';
import { motion } from 'framer-motion';

export const IBVILogo = ({ 
  size = 32, 
  variant = 'default',
  animated = false,
  className = '',
  ...props 
}) => {
  const width = size * 3.4;
  const height = size;
  
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
  const LogoSVG = (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 110 48" 
      role="img" 
      aria-label="IBVI - Inteligência Imobiliária Precisa"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#28515A" />
          <stop offset="100%" stopColor="#1C3A42" />
        </linearGradient>
      </defs>
      
      <g className="ibvi-symbol">
        <path 
          fill="url(#tealGradient)" 
          d="M0 48V16l32 32z"
          className="base-shape"
        />
        <path 
          fill="#F3BA57" 
          d="M24 0l16 16h-8v16h-16V16h-8z"
          className="arrow-shape"
        />
      </g>
      
      <text 
        x="44" 
        y="38" 
        fontFamily="Inter, sans-serif" 
        fontSize="32" 
        fontWeight="700"
        fill="currentColor" 
        letterSpacing="-0.04em"
      >
        ibvi
      </text>
    </svg>
  );
  
  if (animated) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        {LogoSVG}
      </motion.div>
    );
  }
  
  return LogoSVG;
};

export default IBVILogo;