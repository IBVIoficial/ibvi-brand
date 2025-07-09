import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/brand/Button';
import { SimpleCard, SimpleCardHeader, SimpleCardContent, SimpleCardFooter } from '@/components/ui/simple-card';

export default function CardsExamplePage() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24">
      <div className="container max-w-4xl space-y-8">
        <header className="text-center mb-12">
          <Logo variant="primary" size="lg" className="mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-ibvi-charcoal mb-2">
            Exemplos de Cards
          </h1>
          <p className="text-lg text-muted-foreground">
            Diferentes estilos de cards para o sistema IBVI
          </p>
        </header>
        
        {/* Basic Card */}
        <SimpleCard>
          <SimpleCardHeader 
            title="Card Básico" 
            description="Um exemplo simples de card com sombra e cantos arredondados"
          />
          <SimpleCardContent>
            <p>Este é um exemplo de conteúdo dentro de um card básico. O design segue as diretrizes da IBVI com espaçamento adequado e tipografia consistente.</p>
          </SimpleCardContent>
        </SimpleCard>
        
        {/* Card with Footer */}
        <SimpleCard>
          <SimpleCardHeader 
            title="Card com Botões" 
            description="Um card com área de ações no rodapé"
          />
          <SimpleCardContent>
            <p>Este card inclui botões de ação no rodapé para demonstrar como implementar áreas interativas.</p>
          </SimpleCardContent>
          <SimpleCardFooter>
            <Button variant="outline">Cancelar</Button>
            <Button>Confirmar</Button>
          </SimpleCardFooter>
        </SimpleCard>
        
        {/* Card with Logo */}
        <SimpleCard className="bg-ibvi-cream border border-ibvi-gold/20">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-white rounded-md shadow-sm">
              <Logo variant="primary" size="sm" />
            </div>
            <div className="flex-1">
              <SimpleCardHeader 
                title="Card com Logo" 
                description="Combinando elementos visuais da marca"
              />
              <SimpleCardContent>
                <p>Este exemplo mostra como incorporar o logo da IBVI em um card, criando uma conexão visual mais forte com a identidade da marca.</p>
              </SimpleCardContent>
            </div>
          </div>
        </SimpleCard>
        
        {/* Data Card */}
        <SimpleCard className="bg-white border border-ibvi-teal/20">
          <SimpleCardHeader 
            title="Dados Imobiliários" 
            description="Visualização de métricas importantes"
          />
          <SimpleCardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-3 bg-ibvi-cream rounded-md">
                <p className="text-sm text-muted-foreground">Vendas</p>
                <p className="text-2xl font-semibold text-ibvi-teal">127</p>
              </div>
              <div className="text-center p-3 bg-ibvi-cream rounded-md">
                <p className="text-sm text-muted-foreground">Avaliações</p>
                <p className="text-2xl font-semibold text-ibvi-teal">89</p>
              </div>
              <div className="text-center p-3 bg-ibvi-cream rounded-md">
                <p className="text-sm text-muted-foreground">Clientes</p>
                <p className="text-2xl font-semibold text-ibvi-teal">342</p>
              </div>
              <div className="text-center p-3 bg-ibvi-cream rounded-md">
                <p className="text-sm text-muted-foreground">Satisfação</p>
                <p className="text-2xl font-semibold text-ibvi-teal">98%</p>
              </div>
            </div>
          </SimpleCardContent>
        </SimpleCard>
        
        {/* Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SimpleCard className="bg-gradient-to-br from-ibvi-teal to-ibvi-teal/90 text-white">
            <SimpleCardHeader 
              title="Análise Avançada" 
              description="Ferramentas de inteligência imobiliária"
              className="text-white [&>p]:text-white/80"
            />
            <SimpleCardContent>
              <p className="text-white/90">Acesse relatórios detalhados e visualizações de dados que transformam informações em decisões estratégicas.</p>
            </SimpleCardContent>
            <SimpleCardFooter>
              <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Saiba mais
              </Button>
            </SimpleCardFooter>
          </SimpleCard>
          
          <SimpleCard className="bg-gradient-to-br from-ibvi-gold to-ibvi-gold/90 text-ibvi-charcoal">
            <SimpleCardHeader 
              title="Consultoria Especializada" 
              description="Suporte personalizado para seu negócio"
            />
            <SimpleCardContent>
              <p>Nossa equipe de especialistas oferece orientação personalizada para maximizar o potencial do seu portfólio imobiliário.</p>
            </SimpleCardContent>
            <SimpleCardFooter>
              <Button variant="outline" className="border-ibvi-charcoal/30 hover:bg-ibvi-charcoal/10">
                Contatar
              </Button>
            </SimpleCardFooter>
          </SimpleCard>
        </div>
      </div>
    </main>
  );
}
