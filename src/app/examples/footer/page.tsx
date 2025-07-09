import { Footer } from '@/components/layout/Footer';
import { FooterDark } from '@/components/layout/FooterDark';
import { SimpleCard, SimpleCardHeader, SimpleCardContent } from '@/components/ui/simple-card';

export default function FooterExamplePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Exemplos de Footer</h1>
      <p className="text-lg mb-12">
        Exemplos de implementação do componente Footer para o sistema IBVI.
        O footer inclui navegação, links sociais e formulário de newsletter.
      </p>
      
      <SimpleCard className="mb-12">
        <SimpleCardHeader 
          title="Footer Light" 
          description="Versão clara do footer, ideal para páginas com fundo claro."
        />
        <SimpleCardContent className="p-0 overflow-hidden rounded-b-lg">
          <div className="border rounded-lg overflow-hidden">
            <Footer />
          </div>
        </SimpleCardContent>
      </SimpleCard>

      <SimpleCard>
        <SimpleCardHeader 
          title="Footer Dark" 
          description="Versão escura do footer, ideal para páginas com fundo escuro ou para criar contraste."
        />
        <SimpleCardContent className="p-0 overflow-hidden rounded-b-lg">
          <div className="border rounded-lg overflow-hidden">
            <FooterDark />
          </div>
        </SimpleCardContent>
      </SimpleCard>
    </div>
  );
}
