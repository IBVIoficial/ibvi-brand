import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/brand/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container max-w-6xl">
        {/* Logo Demo */}
        <div className="mb-12 text-center">
          <Logo variant="primary" size="xl" animated className="mx-auto mb-6" />
          <h1 className="text-h1 font-bold text-ibvi-charcoal mb-4">
            Sistema de Design IBVI
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Implementação com Next.js 15, Tailwind CSS e shadcn/ui
          </p>
        </div>

        {/* Button Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Componentes de Botão</CardTitle>
            <CardDescription>
              Variações do componente Button com animações Framer Motion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>CTA Principal</Button>
              <Button variant="primary">Ação Primária</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Paleta de Cores</CardTitle>
            <CardDescription>Cores oficiais da marca IBVI</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
