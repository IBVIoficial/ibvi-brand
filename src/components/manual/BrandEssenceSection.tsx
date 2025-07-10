import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BrandEssenceSection() {
  return (
    <Card id="brand-essence">
      <CardHeader>
        <CardTitle>02. Essência da Marca</CardTitle>
        <CardDescription>
          Valores fundamentais e propósito da marca IBVI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Propósito
          </h3>
          <p className="text-muted-foreground">
            Democratizar decisões imobiliárias por meio da ciência de dados, com rigor institucional, experiência premium e acessibilidade universal.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Visão
          </h3>
          <p className="text-muted-foreground">
            Ser referência global em inteligência imobiliária precisa e transparência institucional.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Valores
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Precisão</li>
            <li>Transparência</li>
            <li>Ética Digital (LGPD/GDPR/OWASP)</li>
            <li>Inovação Algorítmica</li>
            <li>Acessibilidade</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Proposta de Valor
          </h3>
          <blockquote className="border-l-4 border-ibvi-gold pl-4 italic text-muted-foreground">
            "Transformar complexidade imobiliária em decisões claras através da inteligência de dados."
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}
