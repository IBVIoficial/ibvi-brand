import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-ibvi-gold text-ibvi-charcoal hover:bg-opacity-90 focus:ring-ibvi-gold/20',
    secondary: 'bg-ibvi-teal text-white hover:bg-opacity-90 focus:ring-ibvi-teal/20',
    outline: 'border-2 border-ibvi-teal text-ibvi-teal hover:bg-ibvi-teal hover:text-white'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;