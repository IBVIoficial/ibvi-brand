import { Metadata } from 'next';
import { Logo } from '@/components/brand/Logo';
import { SimpleCard, SimpleCardHeader, SimpleCardContent } from '@/components/ui/simple-card';
import { IntroductionSection } from '@/components/manual/IntroductionSection';
import { BrandEssenceSection } from '@/components/manual/BrandEssenceSection';
import { VisualIdentitySystemSection } from '@/components/manual/VisualIdentitySystemSection';
import { ColorSpecificationsSection } from '@/components/manual/ColorSpecificationsSection';
import { TypographyHierarchySection } from '@/components/manual/TypographyHierarchySection';
import { ApplicationsContextsSection } from '@/components/manual/ApplicationsContextsSection';
import { CommunicationGuidelinesSection } from '@/components/manual/CommunicationGuidelinesSection';
import { GovernanceProtectionSection } from '@/components/manual/GovernanceProtectionSection';
import { TechnicalImplementationSection } from '@/components/manual/TechnicalImplementationSection';
import { UseCasesExamplesSection } from '@/components/manual/UseCasesExamplesSection';
import { EvolutionMaintenanceSection } from '@/components/manual/EvolutionMaintenanceSection';
import { TableOfContents } from '@/components/manual/TableOfContents';

export const metadata: Metadata = {
  title: 'Manual de Identidade Visual - IBVI',
  description:
    'Sistema de Alta Performance para Inteligência Imobiliária – [Release: Julho/2025]',
};

export default function ManualPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12 bg-background">
      <div className="container max-w-4xl space-y-8">
        <header className="text-center pt-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Manual de Identidade Visual IBVI
          </h1>
          <h2 className="text-xl font-semibold text-muted-foreground">
            Sistema de Alta Performance para Inteligência Imobiliária – [Release: Julho/2025]
          </h2>
        </header>

        <SimpleCard>
          <SimpleCardHeader
            title="Variantes de Logo"
            description="Todas as variações da logomarca IBVI para diferentes fundos e aplicações."
          />
          <SimpleCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="primary" size="lg" className="mb-4" />
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="dark" size="lg" className="mb-4" />
                <p className="text-sm font-medium">Dark</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="mono" size="lg" className="mb-4" />
                <p className="text-sm font-medium">Mono</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <Logo variant="mono-dark" size="lg" className="mb-4" />
                <p className="text-sm font-medium">Mono Dark</p>
              </div>
            </div>
          </SimpleCardContent>
        </SimpleCard>

        <TableOfContents />
        
        <IntroductionSection />
        
        <BrandEssenceSection />
        
        <VisualIdentitySystemSection />
        
        <ColorSpecificationsSection />
        
        <TypographyHierarchySection />
        
        <ApplicationsContextsSection />
        
        <CommunicationGuidelinesSection />
        
        <GovernanceProtectionSection />
        
        <TechnicalImplementationSection />
        
        <UseCasesExamplesSection />
        
        <EvolutionMaintenanceSection />
      </div>
    </main>
  );
}
