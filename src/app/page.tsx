import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/brand/Button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  SimpleCard,
  SimpleCardHeader,
  SimpleCardContent,
  SimpleCardFooter,
} from '@/components/ui/simple-card';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <Logo variant="primary" size="xl" animated className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-ibvi-charcoal dark:text-white mb-4">
            Guia de Marca IBVI
          </h1>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Sistema de identidade visual e recursos de marca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <SimpleCard className="hover:shadow-lg transition-shadow">
            <SimpleCardHeader
              title="Site"
              description="Referências de Marca para o Site"
            />
            <SimpleCardContent className="flex justify-end">
              <Button asChild variant="primary">
                <Link href="/site">Acessar</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>

          <SimpleCard className="hover:shadow-lg transition-shadow bg-nocturne-teal text-white">
            <SimpleCardHeader
              title="Site Dark"
              description="Versão escura do site de referências"
            />
            <SimpleCardContent className="flex justify-end">
              <Button asChild variant="secondary">
                <Link href="/site-dark">Acessar</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>

          <SimpleCard className="hover:shadow-lg transition-shadow">
            <SimpleCardHeader
              title="Manual"
              description="Consulte nosso manual de marca"
            />
            <SimpleCardContent className="flex justify-end">
              <Button asChild>
                <Link href="/manual">Acessar</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>

          <SimpleCard className="hover:shadow-lg transition-shadow bg-white">
            <SimpleCardHeader
              title="Exemplos"
              description="Componentes e estilos de cards"
            />
            <SimpleCardContent className="flex justify-end">
              <Button asChild variant="secondary">
                <Link href="/examples/cards">Ver exemplos</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>
          <SimpleCard className="hover:shadow-lg transition-shadow bg-white">
            <SimpleCardHeader
              title="Footer"
              description="Diretrizes de implementação do Footer"
            />
            <SimpleCardContent className="flex justify-end">
              <Button asChild variant="secondary">
                <Link href="/examples/footer">Ver exemplos</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>

          <SimpleCard className="hover:shadow-lg transition-shadow bg-gradient-to-br from-ibvi-teal to-ibvi-teal/90 text-white">
            <SimpleCardHeader
              title="Sobre o IBVI"
              description="Conheça nossa missão e proposta"
              className="text-white"
            />
            <SimpleCardContent className="flex justify-end">
              <Button
                asChild
                variant="secondary"
                className="bg-white text-ibvi-teal hover:bg-gray-100"
              >
                <Link href="/sobre">Saiba mais</Link>
              </Button>
            </SimpleCardContent>
          </SimpleCard>
        </div>

        <SimpleCard>
          <SimpleCardHeader
            title="Variantes de Logo"
            description="Todas as variações da logomarca IBVI"
          />
          <SimpleCardContent>
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
          </SimpleCardContent>
        </SimpleCard>
      </div>
    </main>
  );
}
