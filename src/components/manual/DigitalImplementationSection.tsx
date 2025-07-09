import { motion } from 'framer-motion';

export function DigitalImplementationSection() {
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        10. Implementação Digital
      </h2>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        CSS Tokens
      </h3>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <code>{`:root {
  --ibvi-teal: #28515A;
  --ibvi-charcoal: #1C1C1C;
  --ibvi-gold: #F3BA57;
  --ibvi-cream: #FEF9EC;
  --ibvi-navy: #0E1316;
  --font-primary: 'Inter', -apple-system, sans-serif;
  --space-unit: 8px;
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        React Component
      </h3>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <code>{`import { motion } from 'framer-motion';

export const IBVILogo = ({ size = 32, animated = false }) => {
  const LogoSVG = (
    <svg 
      width={size * 3.4} 
      height={size} 
      viewBox="0 0 110 48" 
      role="img" 
      aria-label="IBVI – Inteligência Imobiliária Precisa"
    >
      <path fill="var(--ibvi-teal)" d="M0 48V16l32 32z"/>
      <path fill="var(--ibvi-gold)" d="M24 0l16 16h-8v16h-16V16h-8z"/>
      <text x="44" y="38" fontFamily="Inter" fontSize="32" fontWeight="700" fill="currentColor">ibvi</text>
    </svg>
  );
  
  return animated ? (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {LogoSVG}
    </motion.div>
  ) : LogoSVG;
};`}</code>
      </pre>

      <h3 className="text-xl font-semibold text-foreground mb-3">
        Performance Targets
      </h3>
      <ul className="list-disc pl-6 text-muted-foreground mb-8">
        <li>
          <strong>FCP</strong>: &lt; 1.8s
        </li>
        <li>
          <strong>LCP</strong>: &lt; 2.5s
        </li>
        <li>
          <strong>CLS</strong>: &lt; 0.1
        </li>
        <li>
          <strong>FID</strong>: &lt; 100ms
        </li>
      </ul>
    </>
  );
}
