import React from 'react';

// Import all logo variants
import logoPrimary from '../../assets/logo/svg/ibvi-logo-primary.svg';
import logoDark from '../../assets/logo/svg/ibvi-logo-dark.svg';
import logoMono from '../../assets/logo/svg/ibvi-logo-mono.svg';
import logoMonoDark from '../../assets/logo/svg/ibvi-logo-mono-dark.svg';

// PNG fallbacks
import logoPrimaryPNG from '../../assets/logo/png/ibvi-logo-primary.png';
import logoDarkPNG from '../../assets/logo/png/ibvi-logo-dark.png';
import logoMonoPNG from '../../assets/logo/png/ibvi-logo-mono.png';
import logoMonoDarkPNG from '../../assets/logo/png/ibvi-logo-mono-dark.png';

const logoVariants = {
  primary: {
    svg: logoPrimary,
    png: logoPrimaryPNG,
    alt: 'IBVI - Inteligência Imobiliária Precisa'
  },
  dark: {
    svg: logoDark,
    png: logoDarkPNG,
    alt: 'IBVI - Inteligência Imobiliária Precisa'
  },
  mono: {
    svg: logoMono,
    png: logoMonoPNG,
    alt: 'IBVI'
  },
  'mono-dark': {
    svg: logoMonoDark,
    png: logoMonoDarkPNG,
    alt: 'IBVI'
  }
};

export const LogoSelector = ({
  variant = 'primary',
  format = 'svg',
  height = 40,
  className = '',
  ...props
}) => {
  const logo = logoVariants[variant];
  
  if (!logo) {
    console.error(`Logo variant "${variant}" not found`);
    return null;
  }
  
  const src = format === 'png' ? logo.png : logo.svg;
  
  return (
    <img
      src={src}
      alt={logo.alt}
      height={height}
      className={`ibvi-logo ibvi-logo--${variant} ${className}`}
      {...props}
    />
  );
};

// Auto dark mode logo
export const LogoAuto = ({ height = 40, mono = false, ...props }) => {
  return (
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcSet={mono ? logoMonoDark : logoDark}
      />
      <img
        src={mono ? logoMono : logoPrimary}
        alt="IBVI - Inteligência Imobiliária Precisa"
        height={height}
        {...props}
      />
    </picture>
  );
};

export default LogoSelector;