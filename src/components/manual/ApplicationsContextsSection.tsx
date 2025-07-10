import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ApplicationsContextsSection() {
  return (
    <Card id="applications-contexts">
      <CardHeader>
        <CardTitle>06. Aplicações e Contextos</CardTitle>
        <CardDescription>
          Diretrizes para aplicação da identidade visual em diferentes canais e contextos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          A identidade visual IBVI foi projetada para manter consistência e impacto em diversos canais e contextos de aplicação.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Aplicações Cross-Channel
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Digital:</strong> Web ≥32px, animação CSS 200ms</li>
            <li><strong>Email:</strong> Desktop 140px, Mobile 100px</li>
            <li><strong>Social:</strong> LinkedIn/Instagram invertido</li>
            <li><strong>Impresso:</strong> Cartões 20mm, Papel Timbrado 30mm</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Diretrizes de Aplicação
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Manter a zona de proteção em todos os contextos</li>
            <li>Respeitar as especificações de tamanho mínimo</li>
            <li>Utilizar as variantes adequadas para cada fundo</li>
            <li>Garantir contraste adequado conforme WCAG AA+</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
