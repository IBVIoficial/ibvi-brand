import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CommunicationGuidelinesSection() {
  return (
    <Card id="communication-guidelines">
      <CardHeader>
        <CardTitle>07. Diretrizes de Comunicação</CardTitle>
        <CardDescription>
          Princípios e práticas para comunicação consistente da marca IBVI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          A comunicação da marca IBVI deve refletir seus valores fundamentais de precisão, transparência e ética digital em todos os pontos de contato.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Tom de Voz
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Preciso:</strong> Comunicação clara e baseada em dados</li>
            <li><strong>Confiável:</strong> Linguagem técnica mas acessível</li>
            <li><strong>Transparente:</strong> Explicações diretas e honestas</li>
            <li><strong>Profissional:</strong> Mantém rigor institucional</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Mensagens-Chave
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>"Transformar complexidade imobiliária em decisões claras"</li>
            <li>"Inteligência de dados a serviço do mercado imobiliário"</li>
            <li>"Precisão algorítmica com transparência institucional"</li>
            <li>"Democratizando o acesso à inteligência imobiliária"</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Diretrizes de Conteúdo
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Priorizar dados e evidências em todas as comunicações</li>
            <li>Manter consistência terminológica em todos os canais</li>
            <li>Utilizar linguagem inclusiva e acessível</li>
            <li>Evitar jargões desnecessários ou linguagem excessivamente técnica</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
