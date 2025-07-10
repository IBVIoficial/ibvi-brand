import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ColorSpecificationsSection() {
  return (
    <Card id="color-specs">
      <CardHeader>
        <CardTitle>04. Especificações Cromáticas</CardTitle>
        <CardDescription>
          Paleta de cores oficial e suas aplicações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">
            4.1 Paleta Primária
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-ibvi-teal mb-2"></div>
              <p className="text-sm font-medium">Teal</p>
              <p className="text-xs text-muted-foreground">#28515A</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-ibvi-gold mb-2"></div>
              <p className="text-sm font-medium">Gold</p>
              <p className="text-xs text-muted-foreground">#F3BA57</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-ibvi-cream border mb-2"></div>
              <p className="text-sm font-medium">Cream</p>
              <p className="text-xs text-muted-foreground">#FEF9EC</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-nocturne-teal mb-2"></div>
              <p className="text-sm font-medium">Nocturne Teal</p>
              <p className="text-xs text-muted-foreground">#050E18</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            4.2 Significado Cromático
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><strong>Teal:</strong> Confiabilidade, profundidade analítica</li>
            <li><strong>Gold:</strong> Valor, insights premium, clareza</li>
            <li><strong>Cream:</strong> Acessibilidade, neutralidade, elegância</li>
            <li><strong>Nocturne Teal:</strong> Sofisticação, modo escuro, profundidade</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            4.3 Especificações Técnicas
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Cor</th>
                  <th className="text-left py-2 px-4">HEX</th>
                  <th className="text-left py-2 px-4">RGB</th>
                  <th className="text-left py-2 px-4">CMYK</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Teal</td>
                  <td className="py-2 px-4">#28515A</td>
                  <td className="py-2 px-4">40, 81, 90</td>
                  <td className="py-2 px-4">85, 45, 45, 15</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Gold</td>
                  <td className="py-2 px-4">#F3BA57</td>
                  <td className="py-2 px-4">243, 186, 87</td>
                  <td className="py-2 px-4">0, 25, 70, 0</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Cream</td>
                  <td className="py-2 px-4">#FEF9EC</td>
                  <td className="py-2 px-4">254, 249, 236</td>
                  <td className="py-2 px-4">0, 0, 8, 0</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Nocturne Teal</td>
                  <td className="py-2 px-4">#050E18</td>
                  <td className="py-2 px-4">5, 14, 24</td>
                  <td className="py-2 px-4">80, 65, 50, 75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            4.4 Proporções de Uso
          </h3>
          <p className="text-muted-foreground">
            <strong>Regra 60-30-10:</strong> 60% cores neutras (Cream/Nocturne Teal), 30% cor primária (Teal), 10% cor de destaque (Gold).
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
