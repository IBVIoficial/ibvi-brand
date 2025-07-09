import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function IdentityAndPositioningSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2. Identidade e Posicionamento</CardTitle>
        <CardDescription>
          Essência, visão, valores e performance que definem a IBVI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Essência
          </h3>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "Transformamos a complexidade imobiliária em decisões precisas
            através de inteligência de dados."
          </blockquote>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Visão 2030
          </h3>
          <p className="text-muted-foreground">
            Referência global em inteligência imobiliária precisa e
            transparência institucional.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Valores Fundamentais
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>
              <strong>Precisão</strong>: Resultados baseados em dados
              confiáveis (95% acurácia)
            </li>
            <li>
              <strong>Transparência</strong>: Processos auditáveis e abertos
            </li>
            <li>
              <strong>Ética Digital</strong>: Conformidade com LGPD, GDPR e
              OWASP
            </li>
            <li>
              <strong>Inovação</strong>: Soluções pioneiras baseadas em
              tecnologia
            </li>
            <li>
              <strong>Acessibilidade</strong>: Ferramentas para todos os
              públicos
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Performance Comprovada
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2 border-b font-semibold">Métrica</th>
                  <th className="p-2 border-b font-semibold">Resultado</th>
                  <th className="p-2 border-b font-semibold">
                    Fonte/Auditoria
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="p-2 border-b">CTR Digital</td>
                  <td className="p-2 border-b">+18%</td>
                  <td className="p-2 border-b">
                    A/B Meta/LinkedIn Ads (2024)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-b">CPL</td>
                  <td className="p-2 border-b">-10%</td>
                  <td className="p-2 border-b">Bench. Google Ads (2024)</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Brand Recall</td>
                  <td className="p-2 border-b">+25% (não-assist.)</td>
                  <td className="p-2 border-b">
                    Pesquisa SECOVI-SP/KPMG (2024)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Precisão Algorítmica</td>
                  <td className="p-2 border-b">95%</td>
                  <td className="p-2 border-b">Audit KPMG (QA contínuo)</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Time-to-Decision</td>
                  <td className="p-2 border-b">-60%</td>
                  <td className="p-2 border-b">FGV/SECOVI-SP (2024)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
