import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TypographyHierarchySection() {
  return (
    <Card id="typography">
      <CardHeader>
        <CardTitle>05. Tipografia e Hierarquia</CardTitle>
        <CardDescription>
          Sistema tipográfico e estrutura hierárquica
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            5.1 Fonte Principal
          </h3>
          <p className="text-muted-foreground mb-4">
            <strong>Inter</strong> - Uma família tipográfica moderna, legível e versátil, otimizada para interfaces digitais.
          </p>
          <div className="mt-4 p-4 border rounded-lg bg-muted/50">
            <h1 className="text-3xl font-bold">Inter Bold (700)</h1>
            <h2 className="text-2xl font-semibold mt-2">Inter SemiBold (600)</h2>
            <h3 className="text-xl font-medium mt-2">Inter Medium (500)</h3>
            <p className="mt-2">Inter Regular (400) - Corpo de texto padrão.</p>
            <p className="text-sm text-muted-foreground mt-2">Inter Regular (400) - Texto auxiliar.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            5.2 Hierarquia Tipográfica
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Elemento</th>
                  <th className="text-left py-2 px-4">Tamanho</th>
                  <th className="text-left py-2 px-4">Peso</th>
                  <th className="text-left py-2 px-4">Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">H1</td>
                  <td className="py-2 px-4">2.5rem (40px)</td>
                  <td className="py-2 px-4">Bold (700)</td>
                  <td className="py-2 px-4">Títulos principais</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">H2</td>
                  <td className="py-2 px-4">2rem (32px)</td>
                  <td className="py-2 px-4">SemiBold (600)</td>
                  <td className="py-2 px-4">Subtítulos de seção</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">H3</td>
                  <td className="py-2 px-4">1.5rem (24px)</td>
                  <td className="py-2 px-4">Medium (500)</td>
                  <td className="py-2 px-4">Cabeçalhos de conteúdo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Body</td>
                  <td className="py-2 px-4">1rem (16px)</td>
                  <td className="py-2 px-4">Regular (400)</td>
                  <td className="py-2 px-4">Texto principal</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Small</td>
                  <td className="py-2 px-4">0.875rem (14px)</td>
                  <td className="py-2 px-4">Regular (400)</td>
                  <td className="py-2 px-4">Legendas, notas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            5.3 Espaçamento e Alinhamento
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Entrelinha:</strong> 1.5× para corpo de texto, 1.2× para títulos</li>
            <li><strong>Alinhamento:</strong> Esquerda (padrão), centralizado (títulos principais)</li>
            <li><strong>Espaçamento entre parágrafos:</strong> 1.5× tamanho da fonte</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            5.4 Acessibilidade Tipográfica
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Contraste mínimo: 4.5:1 (WCAG AA)</li>
            <li>Tamanho mínimo: 16px para texto de leitura</li>
            <li>Evitar texto em imagens (usar HTML semântico)</li>
            <li>Espaçamento adequado para leitores de tela</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
