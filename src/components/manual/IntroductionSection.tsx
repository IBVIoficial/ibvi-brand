import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function IntroductionSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Introdução e Framework Estratégico</CardTitle>
        <CardDescription>
          A base que orienta nossa identidade e comunicação.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          "Na IBVI, acreditamos que decisões baseadas em dados são a chave
          para desbloquear o verdadeiro potencial do mercado imobiliário.
          Nossa missão é democratizar o acesso a inteligência precisa,
          transparente e acionável, capacitando desde investidores
          individuais até grandes instituições."
          <cite className="block text-right not-italic text-sm mt-2">
            — Lucas Melo, CEO da IBVI
          </cite>
        </blockquote>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Propósito
          </h3>
          <p className="text-muted-foreground">
            Capacitar o mercado com inteligência imobiliária precisa e
            transparente.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Público-Alvo
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>
              <strong>Primário:</strong> Gestores de fundos imobiliários,
              desenvolvedores, analistas de mercado (B2B)
            </li>
            <li>
              <strong>Secundário:</strong> Investidores qualificados,
              consultorias, setor público (B2B/B2G)
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
