import { Metadata } from 'next';
import { Logo } from '@/components/brand/Logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IntroductionSection } from '@/components/manual/IntroductionSection';
import { IdentityAndPositioningSection } from '@/components/manual/IdentityAndPositioningSection';
import { CoreVisualSystemSection } from '@/components/manual/CoreVisualSystemSection';
import { ColorsAndTypographySection } from '@/components/manual/ColorsAndTypographySection';
import { RoadmapSection } from '@/components/manual/RoadmapSection';
import { ResourcesAndSupportSection } from '@/components/manual/ResourcesAndSupportSection';
import { TypographySystemSection } from '@/components/manual/TypographySystemSection';
import { GridAndCompositionSection } from '@/components/manual/GridAndCompositionSection';
import { MultichannelApplicationsSection } from '@/components/manual/MultichannelApplicationsSection';
import { ToneOfVoiceSection } from '@/components/manual/ToneOfVoiceSection';
import { AccessibilityAndInclusionSection } from '@/components/manual/AccessibilityAndInclusionSection';
import { DigitalImplementationSection } from '@/components/manual/DigitalImplementationSection';
import { GovernanceAndComplianceSection } from '@/components/manual/GovernanceAndComplianceSection';
import { UseCasesAndTemplatesSection } from '@/components/manual/UseCasesAndTemplatesSection';
import { EvolutionAndRoadmapSection } from '@/components/manual/EvolutionAndRoadmapSection';

export const metadata: Metadata = {
  title: 'Manual de Identidade Visual - IBVI',
  description:
    'Guia definitivo para aplicação consistente da identidade visual IBVI',
};

export default function ManualPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-background">
      <div className="container max-w-4xl space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Manual de Identidade Visual IBVI – Versão 2.1
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Sistema de Alta Performance para Inteligência Imobiliária
          </h2>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Variantes de Logo</CardTitle>
            <CardDescription>
              Todas as variações da logomarca IBVI para diferentes fundos e
              aplicações.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sumário Executivo</CardTitle>
            <CardDescription>
              Guia definitivo para aplicação consistente da identidade visual
              IBVI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Garantindo coerência multicanal, mensurabilidade (CTR +18%, CPL
              –10%, Brand Recall +25%, NPS 72, Precisão 95%) e conformidade de
              marca.
            </p>
            <div className="mt-4 bg-muted p-3 rounded-lg text-sm text-muted-foreground">
              <strong>Release:</strong> Janeiro 2025 | ISO 20671, ISO 10668,
              LGPD/GDPR, WCAG AA
            </div>
          </CardContent>
        </Card>

        <MultichannelApplicationsSection />

        <IntroductionSection />

        <IdentityAndPositioningSection />

        <CoreVisualSystemSection />

        <ColorsAndTypographySection />

        <RoadmapSection />

        <ResourcesAndSupportSection />

        <hr className="my-8" />
        <TypographySystemSection />

        <hr className="my-8" />
        <GridAndCompositionSection />

        <hr className="my-8" />

        <MultichannelApplicationsSection />

        <hr className="my-8" />
        <ToneOfVoiceSection />

        <hr className="my-8" />
        <AccessibilityAndInclusionSection />

        <hr className="my-8" />
        <DigitalImplementationSection />

        <hr className="my-8" />
        <GovernanceAndComplianceSection />

        <hr className="my-8" />
        <UseCasesAndTemplatesSection />

        <hr className="my-8" />
        <EvolutionAndRoadmapSection />
      </div>
    </main>
  );
}
