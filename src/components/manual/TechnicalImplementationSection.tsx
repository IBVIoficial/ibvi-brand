import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TechnicalImplementationSection() {
  return (
    <Card id="technical-implementation">
      <CardHeader>
        <CardTitle>09. Implementação Técnica</CardTitle>
        <CardDescription>
          Recursos e diretrizes para implementação técnica da identidade visual IBVI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          A implementação técnica da identidade visual IBVI foi projetada para garantir consistência em todas as plataformas digitais.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            CSS Tokens
          </h3>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`:root {
  --ibvi-teal: #28515A;
  --ibvi-gold: #F3BA57;
  --ibvi-cream: #FEF9EC;
  --ibvi-nocturne-teal: #050E18;
  --font-primary: 'Inter', -apple-system, sans-serif;
}`}
          </pre>
          <p className="text-sm text-muted-foreground mt-2">
            Tokens CSS oficiais para implementação consistente em aplicações web.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            React Component (prod-ready)
          </h3>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`export const IBVILogo = ({ size = 32, ...props }) => (
  <svg width={size * 3.4} height={size} viewBox="0 0 110 48" 
       role="img" aria-label="IBVI – Inteligência Imobiliária Precisa" {...props}>
    <path fill="var(--ibvi-teal)" d="M0 48V16l32 32z"/>
    <path fill="var(--ibvi-gold)" d="M24 0l16 16h-8v16h-16V16h-8z"/>
    <text x="44" y="38" fontFamily="Inter, sans-serif" 
          fontSize="32" fill="currentColor" letterSpacing="-0.04em">ibvi</text>
  </svg>
);`}
          </pre>
          <p className="text-sm text-muted-foreground mt-2">
            Componente React otimizado e acessível para implementação do logo IBVI.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Diretrizes de Implementação
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Utilizar sempre os tokens CSS oficiais</li>
            <li>Implementar componentes acessíveis (WCAG AA+)</li>
            <li>Manter consistência entre plataformas</li>
            <li>Seguir as práticas de otimização para performance</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
