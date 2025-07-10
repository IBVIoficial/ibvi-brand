import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function IntroductionSection() {
  return (
    <Card id="introduction">
      <CardHeader>
        <CardTitle>01. Introdução e Propósito</CardTitle>
        <CardDescription>
          Este manual estabelece padrões oficiais para aplicação estratégica e consistente da identidade visual IBVI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          Este manual estabelece padrões oficiais para aplicação estratégica e consistente da identidade visual IBVI, garantindo integridade, impacto e escalabilidade.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Objetivos do Manual
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Consistência:</strong> Aplicação uniforme em todos os canais.</li>
            <li><strong>Integridade:</strong> Evitar uso inadequado ou diluição da marca.</li>
            <li><strong>Impacto:</strong> Otimizar a comunicação visual.</li>
            <li><strong>Escalabilidade:</strong> Facilitar o crescimento e expansão.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Audiências-Alvo
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Equipes internas de Marketing e Design</li>
            <li>Agências e parceiros criativos</li>
            <li>Desenvolvedores e equipes técnicas</li>
            <li>Stakeholders e investidores</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
