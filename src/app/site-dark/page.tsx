import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/brand/Button';
import { SimpleCard, SimpleCardHeader, SimpleCardContent } from '@/components/ui/simple-card';

export default function HomeDark() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-12 lg:p-24 bg-nocturne-teal text-white">
      <div className="container max-w-6xl">
        {/* Logo Demo */}
        <div className="mb-12 text-center">
          <Logo variant="mono-dark" size="xl" animated className="mx-auto mb-6" />
          <h1 className="text-h1 font-bold text-white mb-4">
            Sistema de Design IBVI
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
            Implementação com Next.js 15, Tailwind CSS e shadcn/ui
          </p>
        </div>

        {/* Logo Variants */}
        <SimpleCard className="mb-8 bg-ibvi-navy border-gray-800 text-white">
          <SimpleCardHeader
            title="Variantes de Logo"
            description="Todas as variações da logomarca IBVI"
          />
          <SimpleCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="primary" size="lg" className="mb-4" />
                <p className="text-sm font-medium text-white">Primary</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="dark" size="lg" className="mb-4" />
                <p className="text-sm font-medium text-white">Dark</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="mono" size="lg" className="mb-4" />
                <p className="text-sm font-medium text-white">Mono</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="mono-dark" size="lg" className="mb-4" />
                <p className="text-sm font-medium text-white">Mono Dark</p>
              </div>
            </div>
          </SimpleCardContent>
        </SimpleCard>

        {/* Button Examples */}
        <SimpleCard className="mb-8 bg-ibvi-navy border-gray-800 text-white">
          <SimpleCardHeader
            title="Componentes de Botão"
            description="Variações do componente Button com animações Framer Motion"
          />
          <SimpleCardContent>
            <div className="flex flex-wrap gap-4">
              <Button>CTA Principal</Button>
              <Button variant="primary">Ação Primária</Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Outline</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="ghost" className="text-gray-300 hover:bg-gray-700">Ghost</Button>
              <Button variant="link" className="text-ibvi-gold hover:text-ibvi-gold/80">Link</Button>
            </div>
          </SimpleCardContent>
        </SimpleCard>

        {/* Color Palette */}
        <SimpleCard className="bg-ibvi-navy border-gray-800 text-white">
          <SimpleCardHeader
            title="Paleta de Cores"
            description="Cores oficiais da marca IBVI"
          />
          <SimpleCardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-ibvi-teal mb-2"></div>
                <p className="text-sm font-medium text-white">Teal</p>
                <p className="text-xs text-gray-400">#28515A</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-ibvi-gold mb-2"></div>
                <p className="text-sm font-medium text-white">Gold</p>
                <p className="text-xs text-gray-400">#F3BA57</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-ibvi-charcoal mb-2"></div>
                <p className="text-sm font-medium text-white">Charcoal</p>
                <p className="text-xs text-gray-400">#1C1C1C</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-ibvi-cream border border-gray-700 mb-2"></div>
                <p className="text-sm font-medium text-white">Cream</p>
                <p className="text-xs text-gray-400">#FEF9EC</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-ibvi-navy border border-gray-700 mb-2"></div>
                <p className="text-sm font-medium text-white">Navy</p>
                <p className="text-xs text-gray-400">#0E1316</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-nocturne-teal mb-2"></div>
                <p className="text-sm font-medium text-white">Nocturne Teal</p>
                <p className="text-xs text-gray-400">#050E18</p>
              </div>
            </div>
          </SimpleCardContent>
        </SimpleCard>
      </div>
    </main>
  );
}
