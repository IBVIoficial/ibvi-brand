import Link from 'next/link';
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
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <Logo variant="primary" size="xl" animated className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-ibvi-charcoal mb-4">
            Guia de Marca IBVI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sistema de identidade visual e recursos de marca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Site</CardTitle>
              <CardDescription>
                Referências de Marca para o Site
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button asChild variant="primary">
                <Link href="/site">Explorar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Manual</CardTitle>
              <CardDescription>Consulte nosso manual de marca</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button asChild>
                <Link href="/manual">Acessar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Variantes de Logo</CardTitle>
            <CardDescription>
              Todas as variações da logomarca IBVI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <Logo variant="primary" size="lg" className="mb-3" />
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <Logo variant="dark" size="lg" className="mb-3" />
                <p className="text-sm font-medium">Dark</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <Logo variant="mono" size="lg" className="mb-3" />
                <p className="text-sm font-medium">Mono</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <Logo variant="mono-dark" size="lg" className="mb-3" />
                <p className="text-sm font-medium">Mono Dark</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
