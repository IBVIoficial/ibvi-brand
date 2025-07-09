# IBVI Brand Guidelines & Design System

![IBVI Logo](./assets/logo/ibvi-logo-primary.svg)

> Official brand resources for IBVI - Inteligência Imobiliária Precisa

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Brand Version](https://img.shields.io/badge/version-2.1.0-green.svg)](CHANGELOG.md)
[![ISO Compliant](https://img.shields.io/badge/ISO-20671%20%7C%2010668-orange.svg)](docs/compliance.md)
[![WCAG](https://img.shields.io/badge/WCAG-AA%2B-success.svg)](docs/accessibility.md)

## 🎯 About

This repository contains all official brand assets, guidelines, and implementation resources for IBVI. Our design system ensures consistent, accessible, and impactful brand experiences across all platforms.

### Key Features
- ✅ Complete visual identity system
- ✅ Accessible color palettes (WCAG AA+)
- ✅ Responsive typography scale
- ✅ Component library (React/CSS)
- ✅ Motion design guidelines
- ✅ Multi-language support (PT/EN)

## 📦 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ibvi/brand.git

# Install dependencies (if using components)
npm install

# Or using Yarn
yarn install
```

### Using Brand Assets

1. **Logos**: Find all logo variations in `/assets/logo/`
2. **Colors**: Import color tokens from `/tokens/colors.json`
3. **Typography**: Font files and CSS in `/assets/fonts/`
4. **Components**: React components in `/components/`

## 🎨 Brand Elements

### Colors

| Color | HEX | Usage |
|-------|-----|-------|
| Teal Profundo | `#28515A` | Primary brand color |
| Gold Plus | `#F3BA57` | CTAs and highlights |
| Charcoal | `#1C1C1C` | Primary text |
| Cream | `#FEF9EC` | Light backgrounds |
| Navy | `#0E1316` | Dark mode backgrounds |

### Typography

**Primary Font**: Inter (400, 500, 600, 700)  
**Fallback Stack**: `-apple-system, "Segoe UI", Roboto, Helvetica Neue, sans-serif`

## 📂 Repository Structure

```
ibvi-brand/
├── assets/
│   ├── logo/              # All logo variations
│   ├── fonts/             # Web fonts and licenses
│   ├── icons/             # Icon library
│   └── images/            # Brand imagery
├── components/
│   ├── react/             # React components
│   ├── css/               # CSS modules
│   └── examples/          # Usage examples
├── docs/
│   ├── manual/            # Complete brand manual
│   ├── guidelines/        # Specific guidelines
│   └── case-studies/      # Implementation examples
├── tokens/
│   ├── colors.json        # Color tokens
│   ├── typography.json    # Type scale
│   └── spacing.json       # Spacing system
├── templates/
│   ├── presentations/     # Keynote/PPT templates
│   ├── documents/         # Document templates
│   └── social/            # Social media templates
└── tools/
    ├── figma/             # Figma libraries
    ├── sketch/            # Sketch files
    └── validators/        # Brand compliance tools
```

## 🚀 Usage Guidelines

### For Designers
1. Download the Figma library from `/tools/figma/`
2. Import brand tokens into your design tool
3. Follow the guidelines in `/docs/manual/`

### For Developers

#### CSS/SCSS
```scss
// Import brand tokens
@import '@ibvi/brand/tokens/scss/variables';

// Use in your styles
.button {
  background-color: var(--ibvi-gold);
  color: var(--ibvi-charcoal);
}
```

#### React
```jsx
import { IBVILogo, Button } from '@ibvi/brand/components/react';

function App() {
  return (
    <>
      <IBVILogo size={32} />
      <Button variant="primary">Solicitar Análise</Button>
    </>
  );
}
```

#### Design Tokens
```javascript
import tokens from '@ibvi/brand/tokens';

const primaryColor = tokens.colors.teal.value;
const spacing = tokens.spacing.md.value;
```

## 📋 Compliance Checklist

Before using brand assets, ensure:

- [ ] Minimum contrast ratio of 4.5:1
- [ ] Logo clear space maintained (2x "i" height)
- [ ] Colors from official palette only
- [ ] Typography follows defined hierarchy
- [ ] Accessibility standards met (WCAG AA)
- [ ] LGPD/GDPR compliance for digital applications

## 🛠️ Development

### Building Components

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

### Generating Assets

```bash
# Generate all icon sizes
npm run generate:icons

# Optimize images
npm run optimize:images

# Build token documentation
npm run build:tokens
```

## 📖 Documentation

- **[Brand Manual](./docs/manual/)** - Complete brand guidelines
- **[Component Docs](./docs/components/)** - Component API and usage
- **[Accessibility Guide](./docs/accessibility.md)** - WCAG compliance
- **[Migration Guide](./docs/migration.md)** - Updating from v1.x

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Reporting Issues
- Use [GitHub Issues](https://github.com/ibvi/brand/issues) for bugs
- Include version number and browser/OS
- Provide reproduction steps

### Submitting Changes
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Support

- **Email**: marca@ibvi.com.br
- **Documentation**: [brand.ibvi.com.br](https://brand.ibvi.com.br)
- **Slack**: #brand-guidelines
- **Emergency**: +55 11 98837-3606

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Usage Restrictions
- ✅ Internal IBVI projects
- ✅ Authorized partners and vendors
- ❌ Unauthorized commercial use
- ❌ Logo modifications
- ❌ Creating derivative brands

## 🏆 Performance Metrics

Our brand implementation achieves:
- **CTR**: +18% vs. industry benchmark
- **Brand Recall**: +25% unaided awareness
- **Accessibility**: WCAG AA+ compliant
- **Performance**: Lighthouse score ≥ 90

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

### Latest Updates (v2.1.0)
- 🎨 New motion design system
- ♿ Enhanced accessibility features
- 🌍 Multi-language support
- 📱 Mobile-first components
- 🚀 Performance optimizations

---

<p align="center">
  <strong>IBVI - Transformando dados em decisões imobiliárias precisas</strong><br>
  © 2025 IBVI. All rights reserved.
</p>
