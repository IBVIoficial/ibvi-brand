import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CoreVisualSystemSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>3. Sistema Visual Core</CardTitle>
        <CardDescription>
          As regras fundamentais que governam nosso logotipo e sua
          aplicação.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            3.1 Anatomia do Símbolo
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2 border-b font-semibold">Elemento</th>
                  <th className="p-2 border-b font-semibold">
                    Especificação
                  </th>
                  <th className="p-2 border-b font-semibold">Proporção</th>
                  <th className="p-2 border-b font-semibold">
                    Significado
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="p-2 border-b">Seta Ascendente</td>
                  <td className="p-2 border-b">90° com 15% overshoot</td>
                  <td className="p-2 border-b">1:1.618 (φ)</td>
                  <td className="p-2 border-b">Crescimento sustentável</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Base Geométrica</td>
                  <td className="p-2 border-b">Inclinação 16°</td>
                  <td className="p-2 border-b">2:3 relativo</td>
                  <td className="p-2 border-b">Fundação em dados</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Espaço Negativo</td>
                  <td className="p-2 border-b">Calibrado 2mm</td>
                  <td className="p-2 border-b">8% altura</td>
                  <td className="p-2 border-b">Precisão metodológica</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 bg-muted p-3 rounded-lg">
            <strong>Grid de Construção:</strong>
            <br />• Unidade base (x): 8px
            <br />• Altura total: 6x
            <br />• Largura símbolo: 4x
            <br />• Espaçamento: 1.5x
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.2 Versões do Logotipo
            </h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-1">
              <li>
                <strong>Principal</strong>: Símbolo + wordmark horizontal
              </li>
              <li>
                <strong>Compacta</strong>: Símbolo isolado (&lt;40mm)
              </li>
              <li>
                <strong>Institucional</strong>: Com tagline "Inteligência
                Imobiliária Precisa"
              </li>
              <li>
                <strong>Monocromática</strong>: Para gravação e bordado
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              3.3 Zona de Proteção
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                <strong>Mínimo</strong>: 2x altura da letra "i"
              </li>
              <li>
                <strong>Ideal</strong>: 3x altura da letra "i"
              </li>
              <li>
                <strong>Digital</strong>: 16px mínimo
              </li>
              <li>
                <strong>Impresso</strong>: 10mm mínimo
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-6">
          <p className="text-red-800 mb-0">
            <strong>✗ Proibições</strong>:<br />
            Rotações, distorções, cores fora da paleta, efeitos extras, contraste &lt;4.5:1.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
