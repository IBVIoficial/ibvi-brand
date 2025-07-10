import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function UseCasesExamplesSection() {
  return (
    <Card id="use-cases-examples">
      <CardHeader>
        <CardTitle>10. Casos de Uso e Exemplos</CardTitle>
        <CardDescription>
          Exemplos práticos de aplicação da identidade visual IBVI em diferentes contextos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          Esta seção apresenta exemplos práticos de como aplicar corretamente a identidade visual IBVI em diferentes contextos e plataformas.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Aplicações Digitais
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Website:</strong> Uso consistente da paleta de cores e tipografia</li>
            <li><strong>Dashboard:</strong> Aplicação de elementos visuais em interfaces de dados</li>
            <li><strong>Email Marketing:</strong> Templates responsivos com identidade visual consistente</li>
            <li><strong>Redes Sociais:</strong> Adaptações do logo e elementos visuais para diferentes plataformas</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Materiais Impressos
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Cartões de Visita:</strong> Aplicação do logo em tamanho mínimo de 20mm</li>
            <li><strong>Papelaria:</strong> Uso consistente da identidade visual em documentos oficiais</li>
            <li><strong>Relatórios:</strong> Aplicação da hierarquia tipográfica e paleta de cores</li>
            <li><strong>Material Promocional:</strong> Adaptações para diferentes formatos e contextos</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Exemplos de Uso Incorreto
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Distorção das proporções do logo</li>
            <li>Uso de cores fora da paleta oficial</li>
            <li>Aplicação em fundos que comprometem a legibilidade</li>
            <li>Combinações tipográficas inconsistentes com a hierarquia estabelecida</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
