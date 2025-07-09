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

        <h2 className="text-2xl font-bold text-foreground mb-4">
          7. Aplicações Multicanal
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">Digital</h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-6">
          <li>
            <strong>Website/App</strong>: Logo ≥32px, animação 200ms ease
          </li>
          <li>
            <strong>Email</strong>: 140px desktop, 100px mobile
          </li>
          <li>
            <strong>Social</strong>: Templates otimizados LinkedIn/Instagram
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Impressos
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-6">
          <li>
            <strong>Cartões</strong>: 20mm canto superior direito
          </li>
          <li>
            <strong>Timbrado</strong>: 30mm centro superior
          </li>
          <li>
            <strong>Brochuras</strong>: Base Teal, destaques Gold
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Ambiental
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>
            <strong>Externa</strong>: ≥500mm backlight LED 4000K
          </li>
          <li>
            <strong>Interna</strong>: ≥200mm altura 1,60m
          </li>
          <li>
            <strong>Materiais</strong>: Acrílico ou metal escovado
          </li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          8. Tom de Voz e Comunicação
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Personalidade
        </h3>
        <p className="text-muted-foreground mb-4">
          <strong>Somos</strong>: Precisos, acessíveis, éticos, inovadores
          <br />
          <strong>Não somos</strong>: Arrogantes, genéricos, promocionais
          agressivos
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Princípios de Comunicação
        </h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-6">
          <li>
            <strong>Clareza First</strong>: Simplicidade sem simplismo
          </li>
          <li>
            <strong>Dados Sempre</strong>: Toda afirmação com evidência
          </li>
          <li>
            <strong>Benefício Claro</strong>: Foco no valor para o cliente
          </li>
          <li>
            <strong>Tom Humano</strong>: Tecnologia com propósito
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Exemplos Práticos
        </h3>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
          <p className="text-green-800 mb-0">
            <strong>✓ Correto</strong>:<br />
            "Valorização média: +23% (147 variáveis analisadas)"
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
          <p className="text-red-800 mb-0">
            <strong>✗ Incorreto</strong>:<br />
            "Nossa plataforma revolucionária usa IA de ponta!"
          </p>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          9. Acessibilidade e Inclusão
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Compromisso WCAG AA+
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-6">
          <li>Contraste mínimo 4.5:1 (7:1 para AAA)</li>
          <li>Navegação completa por teclado</li>
          <li>Alt text descritivo obrigatório</li>
          <li>
            Respeito a{' '}
            <code className="bg-muted px-2 py-1 rounded">
              prefers-reduced-motion
            </code>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Ferramentas de Validação
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>
            <strong>Lighthouse</strong>: Score ≥ 90
          </li>
          <li>
            <strong>axe DevTools</strong>: 0 erros
          </li>
          <li>
            <strong>WAVE</strong>: Full compliance
          </li>
          <li>
            <strong>WebAIM</strong>: Contrast checker
          </li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          10. Implementação Digital
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          CSS Tokens
        </h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
          <code>{`:root {
  --ibvi-teal: #28515A;
  --ibvi-charcoal: #1C1C1C;
  --ibvi-gold: #F3BA57;
  --ibvi-cream: #FEF9EC;
  --ibvi-navy: #0E1316;
  --font-primary: 'Inter', -apple-system, sans-serif;
  --space-unit: 8px;
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          React Component
        </h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
          <code>{`import { motion } from 'framer-motion';

export const IBVILogo = ({ size = 32, animated = false }) => {
  const LogoSVG = (
    <svg 
      width={size * 3.4} 
      height={size} 
      viewBox="0 0 110 48" 
      role="img" 
      aria-label="IBVI – Inteligência Imobiliária Precisa"
    >
      <path fill="var(--ibvi-teal)" d="M0 48V16l32 32z"/>
      <path fill="var(--ibvi-gold)" d="M24 0l16 16h-8v16h-16V16h-8z"/>
      <text x="44" y="38" fontFamily="Inter" fontSize="32" fontWeight="700" fill="currentColor">ibvi</text>
    </svg>
  );
  
  return animated ? (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      {LogoSVG}
    </motion.div>
  ) : LogoSVG;
};`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Performance Targets
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>
            <strong>FCP</strong>: &lt; 1.8s
          </li>
          <li>
            <strong>LCP</strong>: &lt; 2.5s
          </li>
          <li>
            <strong>CLS</strong>: &lt; 0.1
          </li>
          <li>
            <strong>FID</strong>: &lt; 100ms
          </li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          11. Governança e Compliance
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Estrutura
        </h3>
        <p className="text-muted-foreground mb-4">
          <strong>Comitê de Marca</strong>: Reuniões trimestrais para revisão e
          aprovação
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Níveis de Aprovação
        </h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-6">
          <li>
            <strong>Uso Padrão</strong>: Auto-aprovado (seguindo manual)
          </li>
          <li>
            <strong>Adaptações</strong>: Design Lead (48h)
          </li>
          <li>
            <strong>Exceções</strong>: Comitê de Marca (5 dias)
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Checklist Obrigatório
        </h3>
        <ul className="list-none pl-0 text-muted-foreground mb-8">
          <li>☐ Contraste WCAG AA mínimo</li>
          <li>☐ Proporções corretas do logo</li>
          <li>☐ Cores dentro da paleta oficial</li>
          <li>☐ Tipografia conforme hierarquia</li>
          <li>☐ Alt text e aria-labels</li>
          <li>☐ Performance metrics atingidas</li>
          <li>☐ LGPD/GDPR compliance</li>
          <li>☐ Licenças de assets válidas</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          12. Casos de Uso e Templates
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Templates Disponíveis
        </h3>
        <p className="text-muted-foreground mb-4">
          <strong>Apresentações</strong>: Keynote, PowerPoint, Google Slides
          <br />
          <strong>Marketing</strong>: Email signatures, social kit, landing
          pages
          <br />
          <strong>Documentos</strong>: Propostas, relatórios, white papers
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Exemplos de Sucesso
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground mb-6">
          <li>
            <strong>Campanha Digital</strong>: CTR +18% com CTA Gold prominent
          </li>
          <li>
            <strong>Evento Corporativo</strong>: NPS 72 com sinalização
            consistente
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Do's and Don'ts
        </h3>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
          <p className="text-green-800 mb-2">
            <strong>✓ DO</strong>:
          </p>
          <ul className="list-disc pl-6 text-green-800 mb-0">
            <li>Manter hierarquia visual clara</li>
            <li>Usar dados para suportar claims</li>
            <li>Respeitar zonas de proteção</li>
            <li>Testar acessibilidade sempre</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
          <p className="text-red-800 mb-2">
            <strong>✗ DON'T</strong>:
          </p>
          <ul className="list-disc pl-6 text-red-800 mb-0">
            <li>Criar versões "criativas" do logo</li>
            <li>Usar cores fora da paleta</li>
            <li>Comprometer legibilidade</li>
            <li>Ignorar guidelines de espaçamento</li>
          </ul>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-foreground mb-4">
          13. Evolução e Roadmap 2025-2026
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Q1-Q2 2025
        </h3>
        <ul className="list-none pl-0 text-muted-foreground mb-6">
          <li>☐ Motion design system</li>
          <li>☐ Micro-interações biblioteca</li>
          <li>☐ AR/VR brand experiences</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Q3-Q4 2025
        </h3>
        <ul className="list-none pl-0 text-muted-foreground mb-6">
          <li>☐ Expansão global (EN/PT)</li>
          <li>☐ Assistente de marca IA</li>
          <li>☐ Personalização dinâmica</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          Q1-Q2 2026
        </h3>
        <ul className="list-none pl-0 text-muted-foreground mb-8">
          <li>☐ Tokens Figma/Storybook</li>
          <li>☐ Real-time brand monitoring</li>
          <li>☐ Advanced analytics dashboard</li>
        </ul>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Este manual é um documento vivo e será atualizado conforme a marca
            evolui.
          </p>
        </div>
      </div>
    </main>
  );
}
