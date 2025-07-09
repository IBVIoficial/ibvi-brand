# IBVI Logo Assets

This directory contains all official IBVI logo variations.

## 📁 Directory Structure

```
logo/
├── png/                 # PNG format logos
│   ├── ibvi-logo-primary.png
│   ├── ibvi-logo-dark.png
│   ├── ibvi-logo-mono.png
│   └── ibvi-logo-mono-dark.png
├── svg/                 # SVG vector format (preferred)
│   ├── ibvi-logo-primary.svg
│   ├── ibvi-logo-dark.svg
│   ├── ibvi-logo-mono.svg
│   └── ibvi-logo-mono-dark.svg
├── webp/                # WebP format for web optimization
│   └── [webp versions]
├── ico/                 # Icon files
│   └── favicon.ico
└── README.md           # This file
```

## 🎨 Logo Variants

### Primary Logo (`ibvi-logo-primary`)
- **Use case**: Light backgrounds (#FFFFFF - #F5F5F5)
- **Min size**: 32px height
- **Clear space**: 2x the height of the "i" in "ibvi"

### Dark Logo (`ibvi-logo-dark`)
- **Use case**: Dark backgrounds (#000000 - #333333)
- **Min size**: 32px height
- **Clear space**: 2x the height of the "i" in "ibvi"

### Monochrome Logo (`ibvi-logo-mono`)
- **Use case**: Single color applications, embossing, engraving
- **Min size**: 24px height
- **Color**: Should be applied in the darkest available color

### Dark Monochrome Logo (`ibvi-logo-mono-dark`)
- **Use case**: Single color on dark backgrounds
- **Min size**: 24px height
- **Color**: Should be applied in the lightest available color

## 📏 Usage Guidelines

### ✅ DO
- Use logos at recommended minimum sizes
- Maintain clear space around logos
- Use appropriate variant for background
- Scale proportionally

### ❌ DON'T
- Rotate or skew logos
- Change logo colors
- Add effects (shadows, outlines)
- Place on busy backgrounds
- Recreate or modify logos

## 🔧 Technical Specifications

### File Formats
- **SVG**: Preferred for web and applications (scalable)
- **PNG**: For platforms that don't support SVG
- **WebP**: Optimized for modern web browsers
- **ICO**: For favicons and Windows applications

### Color Modes
- **RGB**: For digital use
- **CMYK**: For print (available on request)

## 📝 Implementation Examples

### HTML
```html
<!-- Primary Logo -->
<img src="/assets/logo/svg/ibvi-logo-primary.svg" 
     alt="IBVI" 
     height="40">

<!-- Dark Mode Support -->
<picture>
  <source media="(prefers-color-scheme: dark)" 
          srcset="/assets/logo/svg/ibvi-logo-dark.svg">
  <img src="/assets/logo/svg/ibvi-logo-primary.svg" 
       alt="IBVI" 
       height="40">
</picture>
```

### React Component
```jsx
import logoLight from '@/assets/logo/svg/ibvi-logo-primary.svg';
import logoDark from '@/assets/logo/svg/ibvi-logo-dark.svg';

function Logo({ variant = 'light', ...props }) {
  const logo = variant === 'dark' ? logoDark : logoLight;
  return <img src={logo} alt="IBVI" {...props} />;
}
```

## 📄 License

See [LICENSE-ASSETS.md](../../LICENSE-ASSETS.md) for usage rights and restrictions.