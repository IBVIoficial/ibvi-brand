import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ColorsAndTypographySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>4. Cores e Tipografia</CardTitle>
        <CardDescription>
          A base visual da nossa comunicação: cores e fontes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">
            4.1 Paleta de Cores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              <div className="w-full h-20 rounded-lg bg-ibvi-charcoal mb-2"></div>
              <p className="text-sm font-medium">Charcoal</p>
              <p className="text-xs text-muted-foreground">#1C1C1C</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-ibvi-cream border mb-2"></div>
              <p className="text-sm font-medium">Cream</p>
              <p className="text-xs text-muted-foreground">#FEF9EC</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 rounded-lg bg-ibvi-navy mb-2"></div>
              <p className="text-sm font-medium">Navy</p>
              <p className="text-xs text-muted-foreground">#0E1316</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            4.2 Tipografia
          </h3>
          <p className="text-muted-foreground">
            <strong>Fonte Principal:</strong> Inter (Regular, Medium,
            Semibold, Bold)
          </p>
          <p className="text-sm text-muted-foreground">
            Uso: Títulos, corpo de texto, UI. Importada via Google Fonts.
          </p>
          <div className="mt-4 p-4 border rounded-lg bg-muted/50">
            <h1 className="text-3xl font-bold">h1. Título Principal</h1>
            <h2 className="text-2xl font-semibold mt-2">
              h2. Título Seção
            </h2>
            <h3 className="text-xl font-medium mt-2">h3. Subtítulo</h3>
            <p className="mt-2">p. Corpo de texto regular.</p>
            <p className="text-sm text-muted-foreground mt-2">
              small. Texto de apoio.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
