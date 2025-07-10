import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function VisualIdentitySystemSection() {
  return (
    <Card id="visual-identity">
      <CardHeader>
        <CardTitle>03. Sistema de Identidade Visual</CardTitle>
        <CardDescription>
          Especificações técnicas e aplicações do logotipo IBVI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            3.1 Arquitetura do Símbolo
          </h3>
          <p className="text-muted-foreground mb-4">
            O logotipo IBVI é uma composição geométrica rigorosa que reflete os princípios da marca:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Elemento</th>
                  <th className="text-left py-2 px-4">Especificação Técnica</th>
                  <th className="text-left py-2 px-4">Significado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Seta Ascendente</td>
                  <td className="py-2 px-4">90°, Overshoot 15% (áurea 1:1.618)</td>
                  <td className="py-2 px-4">Crescimento sustentável</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Base Geométrica</td>
                  <td className="py-2 px-4">Inclinação 16°, Proporção 2:3</td>
                  <td className="py-2 px-4">Solidez e dados</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Espaço Negativo</td>
                  <td className="py-2 px-4">2mm (8% altura total)</td>
                  <td className="py-2 px-4">Precisão metodológica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            3.2 Configurações do Logotipo
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Primária:</strong> Símbolo + wordmark horizontal</li>
            <li><strong>Compacta:</strong> Apenas o símbolo (espaços restritos)</li>
            <li><strong>Estendida:</strong> Inclui tagline "Inteligência Imobiliária Precisa"</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            3.3 Zona de Proteção
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Mínima: 2× altura da letra "i"</li>
            <li>Ideal: 3× altura da letra "i"</li>
            <li>Digital: ≥ 16px</li>
            <li>Impressa: ≥ 10mm</li>
          </ul>
          <p className="mt-2 text-muted-foreground font-medium">
            Proibição absoluta de distorções ou cores incorretas.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
